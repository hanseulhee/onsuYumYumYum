import { css, Theme } from "@emotion/react";

interface Props {
  path: string;
  title: string;
}

function GoLink({ path, title }: Props) {
  return (
    <div css={wrapper}>
      <a css={linkTitle} href={path}>
        <span>{title}</span>
      </a>
    </div>
  );
}

export default GoLink;

const wrapper = css`
  margin: 5px 10px 4px 0;
`;

const linkTitle = (theme: Theme) => css`
  all: unset;
  color: ${theme.color.grey900};
  cursor: pointer;
`;
