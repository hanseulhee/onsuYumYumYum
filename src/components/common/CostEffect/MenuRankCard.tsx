import { css, Theme } from "@emotion/react";
import Image from "next/image";

interface Props {
  img: string;
  menu: string;
  store: string;
  price: number;
}

function MenuRankCard({ img, menu, store, price }: Props) {
  return (
    <div css={cardSizeWrapper}>
      <div css={imgWrapper}>
        <Image
          src={img}
          alt="img"
          width="100%"
          height="100%"
          layout="responsive"
          css={menuImg}
        />
      </div>
      <div css={informWrapper}>
        <span css={menuName}>{menu}</span>
        <span css={storeName}>{store}</span>
        <span css={priceCss}>{price}</span>
      </div>
    </div>
  );
}

export default MenuRankCard;

const cardSizeWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 9rem;
  padding: 1rem 1rem 1rem 0;
  border-radius: 4px;
`;

const imgWrapper = css`
  position: relative;
  max-width: 100%;
  width: 7rem;
`;

const menuImg = css`
  position: relative;
  object-fit: cover;
  border-radius: 8px;
  height: auto !important;
`;

const informWrapper = css`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const menuName = (theme: Theme) => css`
  font-size: 0.88rem;
  font-weight: ${theme.fontWeight.bold};
`;

const storeName = (theme: Theme) => css`
  font-size: 0.81rem;
  font-weight: ${theme.fontWeight.light}
  color: ${theme.color.grey100}
`;

const priceCss = (theme: Theme) => css`
  font-size: 1.375rem;
  font-weight: ${theme.fontWeight.bold};
`;
