import { css, Theme } from "@emotion/react";
import PlaceCard from "components/Card/PlaceCard";
import Carousel from "components/common/Main/Carousel";
import Footer from "components/Footer";

function Home() {
  return (
    <div css={wrapper}>
      <Carousel />
      <div css={inWrapper}>
        <PlaceCard
          title="돈내고 돈먹기"
          summary="착한 가격의 생삼겹살집"
          img="/images/slide4.png"
        />
        <PlaceCard
          title="돈내고 돈먹기"
          summary="착한 가격의 생삼겹살집"
          img="/images/slide4.png"
        />
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
