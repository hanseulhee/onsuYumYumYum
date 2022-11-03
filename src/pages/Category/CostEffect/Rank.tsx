import { css, Theme } from "@emotion/react";
import MenuRankCard from "components/common/CostEffect/MenuRankCard";
import useGetRestaurantCostRank from "hooks/api/useGetRestaurantCostRank";
import useScrollRestoration from "hooks/useScrollRestoration";
import Loading from "pages/Loading";
import ErrorIcon from "@mui/icons-material/Error";

function Rank() {
  useScrollRestoration();

  const { restaurantMenuCost, isLoading } = useGetRestaurantCostRank();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div css={fullSizeWrapper}>
      <h1 css={title}>가성비 랭킹</h1>
      <div css={contentWrapper}>
        <ErrorIcon css={exclamationMark} />
        <span css={updateSummary}>
          3100원부터 총 50개의 메뉴를 보실 수 있습니다.
        </span>
      </div>
      <div css={listInWrapper}>
        {restaurantMenuCost.map((restaurant, index) => {
          return (
            <div css={cardSizeWrapper} key={restaurant.id}>
              <span key={index} css={rankingNum}>
                {index + 1}
              </span>
              <MenuRankCard
                restaurantName={restaurant.restaurantName}
                menuImage={restaurant.menuImage}
                menu={restaurant.name}
                price={restaurant.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rank;

const fullSizeWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 1.25rem 1rem 0rem 1rem;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.3rem;
  margin: 0;
`;

const updateSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.65rem;
  color: ${theme.color.grey500};
`;

const listInWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;
`;

const cardSizeWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${theme.color.grey100};
`;

const rankingNum = (theme: Theme) => css`
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.black};
  width: 1.25rem;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const exclamationMark = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-size: 1rem;
  margin-bottom: 0.3rem;
  margin-right: 0.1rem;
`;
