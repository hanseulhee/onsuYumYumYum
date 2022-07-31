import { css, Theme } from "@emotion/react";
import { Link } from "@nextui-org/react";

function PostCard(post) {
  return (
    <article css={cardWrapper}>
      <div css={contentWrapper}>
        <Link href={`/Review/${post.slug}`}>
          <a css={titleContent}>{post.title}</a>
        </Link>
        <p css={dateContent}>{post.date}</p>
        {post.tags?.map((tag, index) => (
          <span key={index} css={tagContent}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default PostCard;

const cardWrapper = css`
  display: block;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const contentWrapper = css`
  padding: 1rem 0.6rem;
  position: relative;
`;

const titleContent = (theme: Theme) => css`
  color: ${theme.color.black};
  font-size: 1rem;
  font-weight: ${theme.fontWeight.bold};
  word-break: normal;
`;

const dateContent = (theme: Theme) => css`
  color: ${theme.color.grey500};
  font-size: 0.8rem;
  height: 0.55rem;
`;

const tagContent = (theme: Theme) => css`
  color: ${theme.color.black};
  font-size: 0.8rem;
`;
