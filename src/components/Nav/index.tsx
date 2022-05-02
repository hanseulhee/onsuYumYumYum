import { css, Theme } from "@emotion/react";
import SearchBar from "components/Nav/SearchBar";

function Nav() {
  return (
    <div css={wrapper}>
      <h1 css={logo}>온수냠냠냠</h1>
      <SearchBar />
    </div>
  );
}

export default Nav;

const wrapper = (theme: Theme) => css`
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 22px;
  height: 60px;
`;

const logo = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.yellow};
  font-size: 22px;
  margin: 0;
`;
