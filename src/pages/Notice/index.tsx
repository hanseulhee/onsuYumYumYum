import { css } from "@emotion/react";
import InformCard from "components/Card/InformCard";
import bgLottieHi from "assets/lottieJSON/cardHi.json";
import bgLottieComm from "assets/lottieJSON/cardComm.json";
import bgLottieInquiry from "assets/lottieJSON/cardInquiry.json";
import bgLottieReview from "assets/lottieJSON/cardReview.json";
import Intro from "components/Notice/Intro";

function Notice() {
  return (
    <main css={mainSizeWrapper}>
      <Intro />
      <InformCard
        lottieData={bgLottieHi}
        introSummary="오늘 뭐 먹지? 맛집이 어딜까?"
        summary="온수냠냠냠에서 온수역 맛집들을 한눈에 확인할 수 있어요"
        url="/Introduce"
      />
      <InformCard
        lottieData={bgLottieComm}
        introSummary="온수역 맛집이 있다면 언제든 제보해주세요"
        summary="모두가 자유롭게 소통할 수 있어요"
        url="/Notice/Report"
      />
      <InformCard
        lottieData={bgLottieReview}
        introSummary="특별하고 생생한 후기페이지"
        summary="개발자의 찐 후기를 통해 본인만의 맛집을 찾길 응원해요"
        url="/Review"
      />
      <InformCard
        lottieData={bgLottieInquiry}
        introSummary="온수냠냠냠의 성장을 위해"
        summary="어떤 문제든 편하게 문의해주세요"
        url="/Inquiry"
      />
    </main>
  );
}

export default Notice;

const mainSizeWrapper = css`
  position: relative;
  margin: 1.25rem 1.25rem 0;
  padding-bottom: 2.5rem;
`;
