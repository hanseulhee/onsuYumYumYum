import { css, Theme } from "@emotion/react";

interface Props {
  summary?: string;
  highlight?: string;
}

function OneLineContent({ summary, highlight }: Props) {
  return (
    <span css={summaryContent}>
      <strong css={strongContent}>{highlight}</strong>
      {summary}
    </span>
  );
}

export default OneLineContent;

const summaryContent = css`
  margin: 0.5rem 0;
`;

const strongContent = (theme: Theme) => css`
  color: ${theme.color.black};
  font-weight: ${theme.fontWeight.normal};
`;
