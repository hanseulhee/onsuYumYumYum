import { css, Theme } from "@emotion/react";
import Carousel from "components/common/Main/Carousel";
import Footer from "components/Footer";

function Home() {
  return (
    <div css={wrapper}>
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;

const wrapper = css`
  position: relative;
  height: 100vh;
  width: 100%;
`;
