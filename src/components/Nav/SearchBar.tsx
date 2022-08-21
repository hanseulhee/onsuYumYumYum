import { css, Theme } from "@emotion/react";
import { Input, Spacer } from "@nextui-org/react";
import Link from "next/link";

function SearchBar({ searchField, setSearchField }) {
  return (
    <Link href="/Search" passHref>
      <div css={wrapper}>
        <Spacer y={0.5} />
        <Input
          width="90%"
          placeholder="검색어를 입력해주세요."
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
          }}
        />
      </div>
    </Link>
  );
}

export default SearchBar;

const wrapper = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  width: 100%;

  input::placeholder {
    font-weight: ${theme.fontWeight.light};
    font-size: 0.74rem;
    padding: 0 0.25rem;
  }
`;
