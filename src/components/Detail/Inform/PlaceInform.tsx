import { css, Theme } from "@emotion/react";

interface Props {
  title: string;
  summary: string | undefined;
}

function PlaceInform({ title, summary }: Props) {
  return (
    <div css={wrapper}>
      <span css={subName}>{title}</span>
      <span css={inform}>{summary}</span>
    </div>
  );
}

export default PlaceInform;

const wrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.23rem 0;
`;

const subName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.grey500};
  font-size: 0.75rem;
  margin-right: 0.65rem;
`;

const inform = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.black};
  font-size: 0.92rem;
`;
