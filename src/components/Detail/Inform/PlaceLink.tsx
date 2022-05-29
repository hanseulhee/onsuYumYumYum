import { css, Theme } from "@emotion/react";
import Link from "next/link";

function PlaceLink() {
  return (
    <div css={introduceWrapper}>
      <div css={nameWrapper}>
        <span css={placeName}>가게이름</span>
      </div>
      <div css={buttonWrapper}>
        <a href="tel:010-1234-456">
          <span css={linkButton}>전화</span>
        </a>
        <span css={linkButton}>지도보기</span>
        <span css={linkButton}>공유</span>
        <Link href="/Review">
          <a>
            <span css={linkButton}>리뷰보기</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PlaceLink;

const nameWrapper = css`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
`;

const placeName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.5rem;
`;

const buttonWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const introduceWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 0.6rem 0 0.4rem 0;
  background-color: ${theme.color.fullWhite};
`;

const linkButton = (theme: Theme) => css`
  color: ${theme.color.grey900};
  font-size: 0.95rem;
`;
