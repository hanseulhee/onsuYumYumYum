import { css } from "@emotion/react";
import PlaceCard from "components/Card/PlaceCard";
import Footer from "components/Footer";
import Carousel from "components/common/Main/Carousel";
import useGetRestaurant from "hooks/api/useGetRestaurant";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import useScrollRestoration from "hooks/useScrollRestoration";
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
        {isLoading ? "로딩중 🍔🍕🍟🌭🍿🥞🍗" : "데이터를 모두 확인했습니다."}
      </div>

      <Footer />
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
