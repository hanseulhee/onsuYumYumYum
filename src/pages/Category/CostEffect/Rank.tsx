import { css, Theme } from "@emotion/react";
import MenuRankCard from "components/common/CostEffect/MenuRankCard";

function Rank() {
  return (
    <div css={fullSizeWrapper}>
      <h1 css={title}>가성비 랭킹</h1>
      <div css={listInWrapper}>
        <div css={cardSizeWrapper}>
          <span css={rankingNum}>1</span>
          <MenuRankCard
            img="/images/mando.jpg"
            menu="메뉴명"
            store="식당명"
            price={10000}
          />
        </div>
      </div>
    </div>
  );
}

export default Rank;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 1.25rem 1rem 3.85rem 1rem;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.375rem;
`;

const listInWrapper = css``;

const cardSizeWrapper= (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${theme.color.grey100}

`;

const rankingNum = (theme: Theme) => css`
  margin-right: 1rem;
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.grey500};
`;