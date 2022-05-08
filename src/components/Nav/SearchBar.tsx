import { css, Theme } from "@emotion/react";
import { Input, Spacer } from "@nextui-org/react";
import { useState } from "react";

function SearchBar() {
  const [searchField, setSearchField] = useState("");

  return (
    <div css={wrapper}>
      <Spacer y={0.5} />
      <Input width="90%" placeholder="검색어를 입력해주세요." />
    </div>
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
    padding: 0 4px;
  }
`;
