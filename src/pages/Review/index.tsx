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
  padding: 0 0.6rem;
`;
