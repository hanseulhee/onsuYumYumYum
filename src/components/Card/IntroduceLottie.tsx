import { css } from "@emotion/react";
import LottieWrapper from "components/common/LottieWrapper";

interface Props {
  lottieData: object;
}

function IntroduceLottie({ lottieData }: Props) {
  return (
    <div css={wrapper}>
      <LottieWrapper lottieData={lottieData} />
    </div>
  );
}

export default IntroduceLottie;

const wrapper = css`
  width: 100%;
  height: 100%;
`;
