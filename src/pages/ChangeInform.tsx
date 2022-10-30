import { css, Theme } from "@emotion/react";
import QuestionLottie from "components/Detail/QuestionLottie";

function ChangeInform() {
  return (
    <div css={wrapper}>
      <div css={introWrapper}>
        <QuestionLottie />
        <div css={introTextWrapper}>
          <span>
            <strong>나와있는 정보</strong>와 <strong>다른 정보</strong>가
            있나요?
          </span>
          <span>온수냠냠냠에 제보해주세요!</span>
        </div>
        <span css={subText}>확인 후 업데이트 될 예정입니다.</span>
        <a href="mailto: 3021062@gmail.com">
          <button css={button}>제보하기</button>
        </a>
      </div>
    </div>
  );
}

export default ChangeInform;

const wrapper = css`
  position: relative;
  width: 100%;
  margin: 6.8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const introWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const introTextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.19rem;
  margin-top: 0.9rem;
`;

const subText = (theme: Theme) => css`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.light};
  margin: 0.8rem 0 1.4rem 0;
`;

const button = (theme: Theme) => css`
  position: relative;
  background-color: ${theme.color.white};
  padding: 0.15rem 7.3rem;
  height: 2.5rem;
  border-radius: 5px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.85rem;
  color: ${theme.color.black};
`;
