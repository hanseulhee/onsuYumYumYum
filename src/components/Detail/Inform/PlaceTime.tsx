import { css, Theme } from "@emotion/react";

interface Props {
  title: string;
  summary: string;
}

function PlaceTime({ title, summary }: Props) {
  return (
    <div css={wrapper}>
      <span css={subName}>{title}</span>
      <details css={detailsWrapper}>
        <summary>{summary}</summary>
        <ul css={ulWrapper}>
          <li css={timeList}>월 12:00 ~ 23:00 </li>
          <li css={timeList}>화 12:00 ~ 23:00 </li>
          <li css={timeList}>수 12:00 ~ 23:00 </li>
        </ul>
      </details>
    </div>
  );
}

export default PlaceTime;

const wrapper = css`
  display: flex;
  flex-direction: row;
  margin: 0.23rem 0;
`;

const subName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.grey500};
  font-size: 0.75rem;
  margin-right: 0.65rem;
  margin-top: 0.14rem;
`;

const detailsWrapper = css`
  all: unset;
  font-size: 0.92rem;
`;

const ulWrapper = css`
  all: unset;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const timeList = css`
  margin: 0;
  font-size: 0.92rem;
`;
