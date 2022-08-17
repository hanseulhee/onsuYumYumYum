import { css, Theme } from "@emotion/react";
import PlaceCard from "components/Card/PlaceCard";
import Carousel from "components/common/Main/Carousel";
import Footer from "components/Footer";
import storeData from "../assets/stores/stores";

function Home() {
  return (
    <div css={wrapper}>
      <Carousel />
      <div css={inWrapper}>
        {storeData.모두.map((store) => (
          <PlaceCard
            key={store.name}
            title={store.name}
            summary={store.summary}
            img={store.menuImg}
          />
        ))}
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
`;

const inWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;
