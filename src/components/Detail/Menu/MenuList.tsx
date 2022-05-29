import { css, Theme } from "@emotion/react";
import Image from "next/image";

function MenuList() {
  return (
    <div css={wrapper}>
      <div css={itemPlaced}>
        <div css={summaryWrapper}>
          <span css={menuName}>메뉴명</span>
          <span css={price}>가격</span>
        </div>
        <div css={imgWrapper}>
          <Image
            src="/images/menu.jpg"
            alt="img"
            layout="fill"
            objectFit="cover"
            css={menuImg}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuList;

const wrapper = (theme: Theme) => css`
  width: 100%;
  height: fit-content;
  border-top: 1px solid ${theme.color.grey100}; ;
`;

const itemPlaced = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.7rem 1.3rem;
`;

const summaryWrapper = css`
  display: flex;
  flex-direction: column;
`;

const imgWrapper = css`
  position: relative;
  width: 9.7rem;
  height: 7.5rem;
`;

const menuImg = css`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
`;

const menuName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.1rem;
`;

const price = (theme: Theme) => css`
  color: ${theme.color.grey500};
  font-weight: ${theme.fontWeight.normal};
  font-size: 0.75rem;
`;
