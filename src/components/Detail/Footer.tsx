import { css, Theme } from "@emotion/react";

function Footer() {
  return (
    <div css={wrapper}>
      <div css={inWrapper}>
        <span css={title}>유의사항</span>
        <div>
          <span css={linkTitle}>
            메뉴 사진은 식당 홈페이지 및 서비스 사용자와 개발자가 직접 찍은
            사진으로 실제 조리된 음식과 다를 수 있습니다.
            <br /> <br />
            메뉴 항목과 가격은 각 매장의 사정에 따라 기재된 내용과 다를 수
            있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const wrapper = (theme: Theme) => css`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 10rem;
  color: #d5d8dd;
  background-color: ${theme.color.grey100};
  font-size: 13px;
  font-weight: ${theme.fontWeight.light};
`;

const inWrapper = css`
  padding: 0 1.3rem;
`;

const title = (theme: Theme) => css`
  all: unset;
  color: ${theme.color.grey500};
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.88rem;
`;

const linkTitle = (theme: Theme) => css`
  all: unset;
  color: ${theme.color.grey900};
`;
