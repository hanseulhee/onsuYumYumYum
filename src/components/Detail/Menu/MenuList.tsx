/* eslint-disable @next/next/no-img-element */
import { css, Theme } from "@emotion/react";
import { API_BASE_URL } from "constants/common";
import Image from "next/image";

interface Props {
  name: IMenuData["name"];
  price: IMenuData["price"];
  menuImage: IMenuData["menuImage"];
}

function MenuList({ name, price, menuImage }: Props) {
  return (
    <div css={wrapper}>
      <div css={itemPlaced}>
        <div css={summaryWrapper}>
          <span css={menuName}>{name}</span>
          <span css={priceText}>{price}원</span>
        </div>
        <div css={imgWrapper}>
          {menuImage?.id ? (
            <Image
              src={`${API_BASE_URL}/api/images/${menuImage?.id}`}
              alt="menu img"
              layout="fill"
              css={menuImg}
              priority
            />
          ) : (
            <Image
              src="/images/noImage.png"
              alt="Image in preparation"
              layout="fill"
              css={menuImg}
              priority
            />
          )}
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
