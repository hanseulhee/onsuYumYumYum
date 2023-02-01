import { css, Theme } from "@emotion/react";

function Search() {
  return (
    <div css={wrapper}>
      <div css={textWrapper}>
        {/* <span css={text}>{searchField} 검색 결과</span>
        <Image
          src="/favicon/logo.png"
          alt="logo img"
          width="20%"
          height="20%"
        /> */}
      </div>
      <div css={cardWrapper}>
        <span css={errorText}>헉! 공사 중이에요 🔧🏃🏻</span>
      </div>
    </div>
  );
}

export default Search;

const wrapper = css`
  min-height: 100%;
  position: relative;
  width: 100%;
`;

const textWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1.25rem;
`;

const cardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  flex-wrap: wrap;
`;

const text = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1rem;
  margin-right: 0.1rem;
  padding-bottom: 0.16rem;
`;

const errorText = (theme: Theme) => css`
  font-size: 2.6rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.black};
  letter-spacing: 0.02px;
`;
