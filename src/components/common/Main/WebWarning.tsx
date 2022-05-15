import { css, Theme } from "@emotion/react";
import PhoneLottie from "components/common/Main/PhoneLottie";

function WebWarning() {
  return (
    <div css={wrapper}>
      <div css={itemWrapper}>
        <div css={itemSizeWrapper}>
          <div css={itemInWrapper}>
            <PhoneLottie />
            <h1 css={introText}>
              <span css={warning}>잠깐!</span> <br /> 데스크톱 환경은 지원하지
              않아요.
            </h1>
            <h2 css={subSummary}>
              화면의 크기를 줄이거나, 모바일 환경으로 접속해주세요.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebWarning;

const wrapper = (theme: Theme) => css`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  color: ${theme.color.white};
  z-index: 100;
`;

const itemWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const itemSizeWrapper = css`
  height: 100%;
  margin: 0px auto;
`;

const itemInWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const warning = css`
  font-size: 1.75rem;
`;

const introText = (theme: Theme) => css`
  font-size: 1.19rem;
  font-weight: ${theme.fontWeight.bold};
  letter-spacing: 0.02px;
`;

const subSummary = (theme: Theme) => css`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.light};
  color: rgba(255, 255, 255, 0.8);
`;
