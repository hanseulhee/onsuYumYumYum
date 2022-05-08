import { css, Theme } from "@emotion/react";
import Category from "components/common/Category/TopLink";
import SearchBar from "components/Nav/SearchBar";
import Link from "next/link";

function Nav() {
  return (
    <>
      <div css={wrapper}>
        <Link href="/">
          <a>
            <h1 css={logo}>온수냠냠냠</h1>
          </a>
        </Link>
        <SearchBar />
      </div>
      <Category />
    </>
  );
}

export default Nav;

const wrapper = (theme: Theme) => css`
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding: 0 22px;
  height: 60px;
`;

const logo = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.yellow};
  font-size: 1.375rem;
  margin: 0;
`;
