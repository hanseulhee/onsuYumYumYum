import Lottie from "lottie-react";

interface ILottieWrapper {
  lottieData: object;
}

function LottieWrapper({ lottieData }: ILottieWrapper) {
  return <Lottie animationData={lottieData} loop={true} autoplay={true} />;
}

export default LottieWrapper;
