import { css } from "@emotion/react";

interface Props {
  title: string;
  inform: string;
}

function Inform({ title, inform }: Props) {
  return (
    <div css={wrapper}>
      <span css={summary}>{title}</span>
      <span css={summary}>{inform}</span>
    </div>
  );
}

export default Inform;

const wrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1px 0;
`;

const summary = css`
  margin-right: 0.7rem;
`;
