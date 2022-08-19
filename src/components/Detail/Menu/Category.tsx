import { css, Theme } from "@emotion/react";

interface Props {
  keyword: string;
}

function Category({ keyword }: Props) {
  return (
    <div css={categoryShape}>
      <span css={category}>{keyword}</span>
    </div>
  );
}

export default Category;

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
