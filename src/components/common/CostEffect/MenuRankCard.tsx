import { css, Theme } from "@emotion/react";
import { API_BASE_URL } from "constants/common";
import Image from "next/image";

interface Props {
  restaurantName: IGetMenuCostRankContent["restaurantName"];
  menu: IGetMenuCostRankContent["name"];
  price: IGetMenuCostRankContent["price"];
  menuImage: IGetMenuCostRankContent["menuImage"];
}

function MenuRankCard({ restaurantName, menuImage, menu, price }: Props) {
  return (
    <div css={cardSizeWrapper}>
      <div css={imgWrapper}>
        {menuImage?.id ? (
          <Image
            src={`${API_BASE_URL}/api/images/${menuImage?.id}`}
            alt="img"
            layout="fill"
            css={menuImg}
            priority
          />
        ) : (
          <Image
            src="/images/noImage.png"
            alt="img"
            layout="fill"
            css={menuImg}
            priority
          />
        )}
      </div>
      <div css={informWrapper}>
        <span css={menuName}>{menu}</span>
        <span css={storeName}>{restaurantName}</span>
        <span css={priceCss}>{price}원</span>
      </div>
    </div>
  );
}

export default MenuRankCard;

const cardSizeWrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 9rem;
  padding: 0.6rem 0rem 1.3rem 0;
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
  font-size: 0.82rem;
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.black};
`;

const storeName = (theme: Theme) => css`
  font-size: 0.65rem;
  color: ${theme.color.grey900};
`;

const priceCss = (theme: Theme) => css`
  font-size: 1.1rem;
  font-weight: ${theme.fontWeight.bold};
`;
