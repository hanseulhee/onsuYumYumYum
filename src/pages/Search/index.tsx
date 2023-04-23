import { css, Theme } from "@emotion/react";
import SearchResult from "components/common/SearchResult";
import Nav from "components/Nav";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

function Search() {
  const [searchField, setSearchField] = useState<string>("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchField(e.target.value);
  }

  // function onClick() {
  //   setSearchField("");
  // }

  return (
    <>
      <Nav search={searchField} onChange={onChange} />
      <div css={wrapper}>
        <div css={textWrapper}>
          <span css={text}>{searchField} 검색 결과</span>
          <Image
            src="/favicon/logo.png"
            alt="logo img"
            width="20%"
            height="20%"
          />
        </div>
        <SearchResult searchField={searchField} />
      </div>
    </>
  );
}

export default Search;

const wrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const textWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 1.053rem;
`;

const text = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1rem;
  margin-right: 0.1rem;
  padding-bottom: 0.16rem;
`;
