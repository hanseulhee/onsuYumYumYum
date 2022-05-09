import Lottie, { Options } from "react-lottie";

interface ILottieWrapper {
  lottieData: object;
}

function LottieWrapper({ lottieData }: ILottieWrapper) {
  const lottieOptions: Options = {
    animationData: lottieData,
    loop: true,
    autoplay: true,
  };

  return <Lottie options={lottieOptions} isClickToPauseDisabled />;
}

export default LottieWrapper;