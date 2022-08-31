import { css, Theme } from "@emotion/react";

interface Props {
  name: string;
  price: string;
  img: string;
}

function MenuList({ name, price, img }: Props) {
  return (
    <div css={wrapper}>
      <div css={itemPlaced}>
        <div css={summaryWrapper}>
          <span css={menuName}>{name}</span>
          <span css={priceText}>{price}</span>
        </div>
        <div css={imgWrapper}>
          <img src={img} alt="img" css={menuImg} />
        </div>
      </div>
    </div>
  );
}

export default MenuList;

const wrapper = (theme: Theme) => css`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${theme.color.grey100}; ;
`;

const itemPlaced = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.85rem 1.3rem;
`;

const summaryWrapper = css`
  display: flex;
  flex-direction: column;
`;

const imgWrapper = css`
  position: relative;
  min-width: 8.3rem;
  width: 8.3rem;
  height: 7.5rem;
`;

const menuImg = css`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.6rem;
`;

const menuName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.85rem;
  margin-bottom: 0.15rem;
`;

const priceText = (theme: Theme) => css`
  color: ${theme.color.grey500};
  font-weight: ${theme.fontWeight.light};
  font-size: 0.78rem;
`;
