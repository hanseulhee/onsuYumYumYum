import { css } from "@emotion/react";
import PlaceCard from "components/Card/PlaceCard";
import Carousel from "components/common/Main/Carousel";
import Footer from "components/Footer";
import useScrollRestoration from "hooks/useScrollRestoration";
import useGetRestaurant from "hooks/api/useGetRestaurant";
import { API_BASE_URL } from "constants/common";

function Home() {
  useScrollRestoration();
  const { restaurants } = useGetRestaurant();

  return (
    <div css={wrapper}>
      <Carousel />
      <div css={inWrapper}>
        {restaurants.map((restaurant) => {
          return (
            <PlaceCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.name}
              summary={restaurant.summary}
              img={`${API_BASE_URL}/api/images/${restaurant?.outsideImage.id}`}
            />
          );
        })}
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
  padding-bottom: 3.85rem;
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
