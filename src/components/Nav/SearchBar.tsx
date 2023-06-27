import { css, Theme } from "@emotion/react";
import { ChangeEvent } from "react";

interface Props {
  search?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ search, onChange }: Props) {
  return (
    <div css={wrapper}>
      <div css={inputWrapper}>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            css={inputCss}
            placeholder="오늘은 또 무얼 먹어볼까? 🔍"
            value={search}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
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
  padding: 0.7rem 0.815rem;
  font-size: 0.87rem;
  font-weight: ${theme.fontWeight.normal};
`;
