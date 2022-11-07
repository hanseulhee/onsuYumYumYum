import { css, Theme } from "@emotion/react";
import Link from "next/link";

function SearchBar({ searchField, setSearchField }) {
  return (
    <Link href="/Search" passHref>
      <div css={wrapper}>
        <div css={inputWrapper}>
          <input
            css={inputCss}
            placeholder="검색어를 입력해주세요."
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
        </div>
      </div>
    </Link>
  );
}

export default SearchBar;

const wrapper = (theme: Theme) => css`
  display: flex;
  width: 100%;
  margin-left: 1.76rem;
  input::placeholder {
    font-weight: ${theme.fontWeight.light};
    font-size: 0.74rem;
  }
`;

const inputWrapper = css`
  flex: 1;
  position: relative;
  align-items: center;
`;

const inputCss = (theme: Theme) => css`
  outline: none;
  border: none;
  background-color: #f4f4f4;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  padding: 0.77rem 0.815rem;

  font-weight: ${theme.fontWeight.normal};
  font-size: 0.87rem;
`;
