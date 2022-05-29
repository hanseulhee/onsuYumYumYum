import { css, Theme } from "@emotion/react";
import LottieWrapper from "components/common/LottieWrapper";
import bgLottieData from "assets/lottieJSON/questionMark.json";

function QuestionLottie() {
  return (
    <div css={wrapper}>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default QuestionLottie;

const wrapper = css`
  width: 85%;
  height: 50%;
`;
