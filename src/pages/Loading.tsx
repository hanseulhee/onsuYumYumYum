import { css } from "@emotion/react";
import LottieWrapper from "components/common/LottieWrapper";
import bgLottieData from "assets/lottieJSON/loading.json";

function Loading() {
  return (
    <div css={sizeWrapper}>
      <div css={sizeInWrapper}>
        <LottieWrapper lottieData={bgLottieData} />
      </div>
    </div>
  );
}

export default Loading;

const sizeWrapper = css`
  width: 100%;
  min-height: 100%;
`;

const sizeInWrapper = css`
  width: 100%;
  height: 430px;
`;
