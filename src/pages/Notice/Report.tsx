import { css, Theme } from "@emotion/react";
import IntroText from "components/Text/IntroText";
import { motion } from "framer-motion";
import {
  defaultFadeInUpVariants,
  staggerOne,
  defaultFadeInLeftVariants,
} from "constants/motion";

function Report() {
  return (
    <main css={mainSizeWrapper}>
      <div css={itemWrapper}>
        <IntroText title="온수역 맛집을 제보해주세요!" subTitle="Report" />
        <motion.div
          css={stepWrapper}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerOne}
        >
          <motion.span css={stepSummary} variants={defaultFadeInLeftVariants}>
            STEP 1
          </motion.span>
          <motion.span variants={defaultFadeInUpVariants}>
            식당 이름, 맛있는 메뉴부터 한줄평 등등 <br />
            온수냠냠냠은 아주 사소한 내용까지 환영합니다.
          </motion.span>
        </motion.div>
        <div css={gifWrapper}>
          <img src="/images/reportMail.gif" alt="gif" css={mailGif} />
        </div>
        <div>
          <motion.div
            css={finishWrapper}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={staggerOne}
          >
            <motion.span css={stepSummary} variants={defaultFadeInLeftVariants}>
              Finish
            </motion.span>
            <motion.span variants={defaultFadeInUpVariants}>
              사용자님이 제보해주신 정보를 바탕으로 검토 후 사이트에 적용될
              예정입니다.
              <br />
              여러분의 제보로 함께 만들어가는 온수냠냠냠, 많은 참여
              부탁드립니다. 🙇🏻‍♂️
            </motion.span>
          </motion.div>
        </div>
        <div css={buttonWrapper}>
          <a href="mailto: 3021062@gmail.com" css={button}>
            제보하기
          </a>
        </div>
      </div>
    </main>
  );
}

export default Report;

const mainSizeWrapper = css`
  position: relative;
  min-height: 100%;
  width: 100%;
`;

const itemWrapper = (theme: Theme) => css`
  margin: 1.25rem 1.25rem 2rem;
  font-size: 0.93rem;
  font-weight: ${theme.fontWeight.light};
  opacity: 0.98;
  line-height: 2;
`;

const gifWrapper = css`
  position: relative;
  display: flex;
  justify-content: center;
`;

const mailGif = css`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const stepSummary = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.25rem;
`;

const stepWrapper = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
`;

const finishWrapper = css`
  display: flex;
  flex-direction: column;
  margin: 2.7rem 0;
`;

const buttonWrapper = css`
  width: 100%;
`;

const button = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.65rem 0;
  border-radius: 5px;
  background-color: ${theme.color.yellow};
  color: ${theme.color.black};
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.85rem;
`;
