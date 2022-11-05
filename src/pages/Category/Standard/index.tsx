import { css, Theme } from "@emotion/react";
import LottieWrapper from "components/common/LottieWrapper";
import Footer from "components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "constants/motion";
import bgLottieData from "assets/lottieJSON/standard.json";
import ErrorIcon from "@mui/icons-material/Error";

function Standard() {
  return (
    <div css={fullSizeWrapper}>
      <div css={inWrapper}>
        <div css={introWrapper}>
          <span>
            온수냠냠냠의 <br />
            <span css={title}>식당 분류 기준</span>
          </span>
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={bgLottieData} />
          </div>
        </div>
        <div css={contentWrapper}>
          <ErrorIcon css={exclamationMark} />
          <span css={noticeSummary}>
            식당 분류의 기준은 개발자의 통계적인 분석을 토대로 결정된 사항으로
            재밌고 유쾌하게 봐주시길 바랍니다.
          </span>
        </div>

        <div css={summaryWrapper}>
          <motion.div
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span css={category}>혼밥</span>
            <div>
              <p css={summary}>
                - 혼자 먹어도 눈치가 안 보이고 아늑하고 편안한 분위기의 식당
              </p>
              <p css={summary}> - 혼자 식사를 할 수 있는 자리가 있는 식당</p>
              <p css={summary}> - 간편하게 식사할 수 있는 식당</p>
            </div>
          </motion.div>
          <motion.div
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            css={rightStandard}
          >
            <span css={category}>회식</span>
            <div>
              <p css={summary}> - 단체 식사량을 식사 및 포장할 수 있는 식당</p>
              <p css={summary}> - 인원이 많이 들어갈 수 있는 식당</p>
              <p css={summary}> - 호불호가 잘 없는 식당</p>
              <p css={summary}> - 다양한 메뉴를 판매하는 식당</p>
            </div>
          </motion.div>
          <motion.div
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span css={category}>해장</span>
            <div>
              <p css={summary}> - 해장되는 메뉴를 판매하는 식당</p>
              <p css={summary}> - 실제로 개발자가 숙취 해소를 했던 식당</p>
            </div>
          </motion.div>
          <motion.div
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            css={rightStandard}
          >
            <span css={category}>가성비</span>
            <div>
              <p css={summary}> - 대학생에게 부담되지 않는 가격의 식당</p>
              <p css={summary}> - 음식 퀄리티에 비해 가격이 저렴한 식당</p>
            </div>
          </motion.div>

          <div css={reportWrapper}>
            <span>해당 카테고리의</span>
            <span>
              식당을 <strong>제보</strong>하고 싶다면?
            </span>
            <div css={buttonWrapper}>
              <Link href="/Notice/Report">
                <a css={reportButton}>제보하기</a>
              </Link>
              <Link href="/Inquiry">
                <a css={inquiryButton}>문의하기</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Standard;

const fullSizeWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

const inWrapper = css`
  margin-top: 0.9rem;
  padding: 0 1.375rem;
`;

const introWrapper = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const lottieWrapper = css`
  width: 62%;
  height: 60%;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.7rem;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0 2.9rem 0rem;
`;

const noticeSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.69rem;
  color: ${theme.color.grey500};
`;

const exclamationMark = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-right: 0.1rem;
`;

const summaryWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 1rem;
`;

const rightStandard = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 3.7rem 0;
`;

const category = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.13rem;
`;

const summary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 0.96rem;
`;

const reportWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: ${theme.fontWeight.light};
  font-size: 1.33rem;
  margin: 5rem 0;
`;

const buttonWrapper = css`
  width: 100%;
  margin-top: 1rem;
`;

const reportButton = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.9rem 0;
  border-radius: 5px;
  background-color: ${theme.color.yellow};
  color: ${theme.color.black};
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.85rem;
  margin-bottom: 0.1rem;
`;

const inquiryButton = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.9rem 0;
  border-radius: 5px;
  background-color: ${theme.color.border};
  color: ${theme.color.black};
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.85rem;
`;
