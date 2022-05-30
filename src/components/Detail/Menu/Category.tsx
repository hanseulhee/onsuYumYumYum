import { css, Theme } from "@emotion/react";

function Category() {
    return (
        <>
            <div css={keywordMenu}>
                <span css={title}>메뉴</span>
            </div>
            <div css={categoryMenu}>
                <div css={categoryShape}>
                    <span css={category}>키워드</span>
                </div>
            </div>
        </>
    );
}

export default Category;

const title = (theme: Theme) => css`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.bold};
`;

const keywordMenu = (theme: Theme) => css`
  width: 100%;
  margin: 1.8rem 0 0.85rem 0;
  padding: 0.55rem 1.3rem;
  background-color: ${theme.color.grey100};
`;

const categoryMenu = css`
  display: flex;
  flex-direction: row;
  padding: 0 0.7rem;
  height: 2rem;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const categoryShape = (theme: Theme) => css`
  border: 1px solid ${theme.color.grey500};
  width: auto;
  height: 1.85rem;
  padding: 0.1rem 0.62rem;
  border-radius: 20px;
  margin: 0 0.13rem;
`;

const category = (theme: Theme) => css`
  font-size: 0.81rem;
  font-weight: ${theme.fontWeight.light};
`;
