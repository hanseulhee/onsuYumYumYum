import { css, Theme } from "@emotion/react";

function Category() {
    return (
        <div css={keywordMenu}>
            <div css={categoryMenu}>
                <div css={categoryShape}>
                    <span css={category}>키워드</span>
                </div>
            </div>
        </div>
    );
}

export default Category;

const keywordMenu = (theme: Theme) => css`
  width: 100%;
  padding: 0.75rem 0.6rem;
  background-color: ${theme.color.fullWhite};
`;

const categoryMenu = css`
  display: flex;
  flex-direction: row;
  height: 2rem;
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
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