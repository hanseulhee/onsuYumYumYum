import { css, Theme } from "@emotion/react";
import Category from "components/common/Category/TopLink";
import SearchBar from "components/Nav/SearchBar";
import Link from "next/link";
import { ChangeEvent } from "react";

interface Props {
  search?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Nav({ search, onChange }: Props) {
  return (
    <div css={wrapper}>
      <div css={inWrapper}>
        <Link href="/">
          <a>
            <h1 css={logo}>온수냠냠냠</h1>
          </a>
        </Link>

        <div css={searchWrapper}>
          <Link href="/Search">
            <a>
              <SearchBar search={search} onChange={onChange} />
            </a>
          </Link>
        </div>
      </div>
      <Category />
    </div>
  );
}

export default Nav;

const wrapper = css`
  position: sticky;
  top: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  z-index: 30;
  overflow-x: hidden;
`;

const inWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 22px;
  height: 3.75rem;
`;

const logo = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.yellow};
  font-size: 1.375rem;
  margin: 0;
`;

const searchWrapper = css`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
`;
