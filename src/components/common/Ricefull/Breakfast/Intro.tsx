import { css, Theme } from "@emotion/react";
import Image from "next/image";

function Intro() {
  return (
    <div css={fullSizeWrapper}>
      <div css={wrapper}>
        <div css={enterprise}>
          <Image
            src="/images/enterpriseLogo.png"
            alt="농림축산식품부 로고"
            width={13}
            height={13}
          />
          농림축산식품부 X
          <Image
            src="/images/seoulLogo.png"
            alt="서울시 로고"
            width={13}
            height={13}
          />
          서울시
        </div>
        <Image
          src="/images/breakfast.png"
          alt="천원의 아침밥 홍보 이미지"
          width={600}
          height={750}
        />
      </div>
    </div>
  );
}

export default Intro;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const wrapper = (theme: Theme) => css`
  position: relative;
  width: 80%;
  min-height: auto;
  border-radius: 1rem;
  overflow: hidden;
`;

const enterprise = (theme: Theme) => css`
  display: flex;
  align-items: center;
  background-color: #6cb3f9;
  color: ${theme.color.fullWhite};
  font-weight: ${theme.fontWeight.bold};
  padding: 0.2rem 1rem;
  font-size: 0.7rem;
  gap: 0.3rem;
`;
