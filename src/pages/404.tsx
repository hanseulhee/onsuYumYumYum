import { css, Theme } from "@emotion/react";
import Link from "next/link";

function NotFound() {
  return (
    <div css={itemWrapper}>
      <div css={itemInWrapper}>
        <div css={contentWrapper}>
          <h1 css={introText}>헉.. 페이지를 찾을 수 없어요.</h1>
          <span css={subSummary}>
            <span>요청하신 결과를 찾을 수 없어요.</span>
            <span>입력한 URL이 올바른지 확인해주세요.</span>
          </span>
        </div>
        <Link href="/">
          <a>
            <button css={mainButton}>메인으로 돌아가기</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

const itemWrapper = css`
  width: 100%;
  min-height: 100%;
  margin: 9rem auto;
`;

const itemInWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const contentWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const introText = (theme: Theme) => css`
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.yellow};
  letter-spacing: 0.02px;
`;

const subSummary = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: ${theme.fontWeight.light};
  margin: 1rem 0 1.6rem 0;
`;

const mainButton = (theme: Theme) => css`
  position: relative;
  background-color: ${theme.color.white};
  padding: 0.15rem 6.5rem;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.black};
`;
