import { Theme, css } from "@emotion/react";
import ErrorIcon from "@mui/icons-material/Error";
import PlaceCard from "components/Card/PlaceCard";
import Footer from "components/Footer";
import Carousel from "components/common/Main/Carousel";
import useGetRestaurant from "hooks/api/useGetRestaurant";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useScrollRestoration from "hooks/useScrollRestoration";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import theme from "styles/Theme/theme";

function Home() {
  useScrollRestoration();
  const [pageNumber, setPageNumber] = useState(0);

  const { intersectionTargetRef } = useIntersectionObserver({
    callback: useCallback(
      (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
        if (entry[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
          observer.unobserve(entry[0].target);
        }
      },
      []
    ),
  });

  const { restaurants, isLoading } = useGetRestaurant(pageNumber);
  const [combinedRestaurants, setCombinedRestaurants] = useState<
    IGetRestaurantDataContent[]
  >([]);

  useEffect(() => {
    setCombinedRestaurants((prevCombinedRestaurants) => {
      const uniqueNewRestaurants = restaurants.filter((newRestaurant) => {
        return !prevCombinedRestaurants.some(
          (prevRestaurant) => prevRestaurant.id === newRestaurant.id
        );
      });
      return [...prevCombinedRestaurants, ...uniqueNewRestaurants];
    });
  }, [pageNumber, restaurants]);

  return (
    <div css={wrapper}>
      <Carousel />

      <div css={contentWrapper}>
        <ErrorIcon css={exclamationMark} />
        <span css={noticeSummary}>
          2024.07.05부로 서비스가 종료되었습니다. 관련 내용은&nbsp;
          <Link href="/End" passHref>
            <b>해당 링크</b>
          </Link>
          에서 확인하실 수 있습니다.
        </span>
      </div>

      <div css={inWrapper}>
        {combinedRestaurants.map((restaurant) => {
          return (
            <PlaceCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.name}
              summary={restaurant.summary}
              img={restaurant?.outsideImage.s3Url}
            />
          );
        })}
      </div>

      <div ref={intersectionTargetRef} css={dataStatus}>
        {/* {isLoading ? "로딩중 🍔🍕🍟🌭🍿🥞🍗" : "데이터를 모두 확인했습니다."} */}
        <Link href={"https://onsu-yum-yumi.vercel.app/"} passHref>
          온수냠냐미로 이동하기
        </Link>
      </div>

      <div css={footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

const wrapper = css`
  min-height: 100%;
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

const inWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;

const dataStatus = css`
  font-size: 0.7rem;
  text-align: center;
  margin-bottom: 1.45rem;
  color: ${theme.color.grey500};
  font-weight: ${theme.fontWeight.bold};
`;

const contentWrapper = css`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0 0.7rem 0rem;

  b {
    cursor: pointer;
    color: #ffa200;
    border-bottom: 1px solid #ffc800;
  }
`;

const noticeSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.69rem;
  color: ${theme.color.grey500};
`;

const exclamationMark = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-size: 1rem;

  margin-right: 0.1rem;
`;

const footerWrapper = css`
  position: absolute;
  bottom: 0;
`;
