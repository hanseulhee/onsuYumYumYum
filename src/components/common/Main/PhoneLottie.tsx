import { css, Theme } from "@emotion/react";
import LottieWrapper from "components/common/LottieWrapper";
import bgLottieData from "assets/lottieJSON/phone.json";

function PhoneLottie() {
  return (
    <div css={wrapper}>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default PhoneLottie;

const wrapper = css`
  width: 85%;
  height: 50%;
`;
