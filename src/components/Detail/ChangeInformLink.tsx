import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { underline } from "styles/css/underline";

function ChangeInformLink() {
  return (
    <div css={sizeWrapper}>
      <span css={subName}>수정</span>
      <Link href="/ChangeInform">
        <a css={goLink}>
          <span>정보 수정 제안하기</span>
        </a>
      </Link>
    </div>
  );
}

export default ChangeInformLink;

const sizeWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.23rem 0;
`;

const subName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.grey500};
  font-size: 0.75rem;
  margin-right: 0.65rem;
`;

const goLink = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.black};
  font-size: 0.92rem;

  ${underline(theme)};
`;
