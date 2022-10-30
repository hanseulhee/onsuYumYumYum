import { css, Theme } from "@emotion/react";
import markdownToHtml from "util/markdownToHtml";
import { useRouter } from "next/router";
import { getAllPosts } from "util/getAllPosts";
import { getPostBySlug } from "util/getPostBySlug";
import { useEffect } from "react";
import DisqusComments from "components/Comment/DisqusComments";

function Post({ post }) {
  const router = useRouter();
  useEffect(() => {
    if (!router.isFallback) return;
  });

  return (
    <main css={itemSize}>
      <div css={itemPadding}>
        <h3>{post.title}</h3>
        <p css={dateContent}>{post.date}</p>
        <article
          css={articleCss}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </div>

      <div css={disqusWrapper}>
        <DisqusComments />
      </div>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const allPosts = getAllPosts(["title", "tags", "date", "slug"]);
  const currentPost = allPosts.filter((post) => post.slug === slug)[0];

  if (typeof currentPost === "undefined") {
    return false;
  }

  const post = getPostBySlug(slug, [
    "title",
    "tags",
    "date",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

interface param {
  params: { slug: string };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  const params: param[] = [];
  posts.forEach((post) => params.push({ params: { slug: post.slug } }));

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;

const itemSize = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const itemPadding = css`
  padding: 0.75rem 0.6rem;
`;

const dateContent = (theme: Theme) => css`
  color: ${theme.color.grey500};
  font-size: 0.9rem;
  height: 1rem;
`;

const articleCss = css`
  width: 100%;

  & img {
    width: 100%;
  }
`;

const disqusWrapper = css`
  width: auto;
  min-height: 30rem;
  margin: 2rem 1rem;
`;
