import { css, Theme } from "@emotion/react";
import Link from "next/link";

interface Props {
  path: string;
  title: string;
}

function GoLink({ path, title }: Props) {
  return (
    <div css={wrapper}>
      <Link href={path}>
        <a css={linkTitle}>
          <span>{title}</span>
        </a>
      </Link>
    </div>
  );
}

export default GoLink;

const wrapper = css`
  margin: 5px 10px 4px 0;
`;
const linkTitle = (theme: Theme) => css`
  all: unset;
  color: ${theme.color.darkGrey};
  cursor: pointer;
`;
