import { css, Theme } from "@emotion/react";
import PostCard from "components/Review/PostCard";
import Introduce from "components/Review/Introduce";
import { PostMarkdown } from "util/getMarkdownBySlug";
import { GetStaticProps } from "next";
import { getAllPosts } from "util/getAllPosts";

export interface PostListProps {
  posts: PostMarkdown[];
}

function Review({ posts }) {
  return (
    <div css={itemSize}>
      <Introduce />
      <div css={itemPadding}>
        <div css={titleBox}>
          <h3 css={titleContent}>전체 글</h3>
        </div>
        {posts.map((post) => (
          <div key={post.title}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "tags", "date", "slug"]);

  return {
    props: {
      posts,
    },
  };
};

export default Review;

const itemSize = css`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100%;
  width: 100%;
  padding-bottom: 3.85rem;
`;

const itemPadding = css`
  padding: 0.75rem 0.6rem;
`;

const titleBox = (theme: Theme) => css`
  position: relative;
  border-bottom: 1px solid ${theme.color.border};
  height: auto;
  padding: 0.5rem 0.6rem;
`;

const titleContent = css`
  font-size: 1rem;
  line-height: 1.1rem;
  word-break: break-all;
`;
