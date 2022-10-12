import { css, Theme } from "@emotion/react";

interface Props {
  title: string;
  content: string;
}

function Details({ title, content }: Props) {
  return (
    <details css={detailsCss}>
      <summary css={summaryCss}>
        <span css={questionMark}>Q </span>
        <span>{title}</span>
      </summary>
      <div>
        <span css={contentCss}>{content}</span>
      </div>
    </details>
  );
}

export default Details;

const detailsCss = (theme: Theme) => css`
  background-color: ${theme.color.fullWhite};
  padding: 0.75rem 0;
  width: 100%;
`;

const summaryCss = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  font-size: 1.05rem;
  font-weight: ${theme.fontWeight.normal};
  opacity: 0.88;
  cursor: pointer;
`;

const questionMark = (theme: Theme) => css`
  color: #afb8c1;
  font-weight: ${theme.fontWeight.bold};
  margin-right: 0.5rem;
`;

const contentCss = (theme: Theme) => css`
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
  word-break: keep-all;
`;
