import { css, Theme } from "@emotion/react";

interface Props {
  title: string;
  subTitle: string;
}

function IntroText({ title, subTitle }: Props) {
  return (
    <div css={titleWrapper}>
      <span css={subTitleContent}>{subTitle}</span>
      <h4 css={titleContent}>{title}</h4>
    </div>
  );
}

export default IntroText;

const titleWrapper = css`
  margin: 1.25rem auto;
  padding: 0 0 1.2rem;
  border-bottom: 1px solid #ebebeb;
`;

const subTitleContent = (theme: Theme) => css`
  margin-bottom: 0.5rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.grey900};
  font-size: 0.8rem;
  letter-spacing: -0.02rem;
`;

const titleContent = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
`;
