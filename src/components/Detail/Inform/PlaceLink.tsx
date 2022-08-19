import { css, Theme } from "@emotion/react";
import Link from "next/link";

interface Props {
  name?: string;
  phone?: string;
}

function PlaceLink({ name, phone }: Props) {
  return (
    <div css={introduceWrapper}>
      <div css={nameWrapper}>
        <span css={placeName}>{name}</span>
      </div>
      <div css={buttonWrapper}>
        <a href={`tel:${phone}`}>
          <span css={linkButton}>전화</span>
        </a>
        <Link href="/Map">
          <a>
            <span css={linkButton}>지도보기</span>
          </a>
        </Link>
        <span css={linkButton}>공유</span>
        <Link href="/Review">
          <a>
            <span css={linkButton}>후기보기</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PlaceLink;

const introduceWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 0.6rem 0 1.1rem 0;
  background-color: ${theme.color.fullWhite};
`;

const nameWrapper = css`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0 1.1rem;
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

const linkButton = (theme: Theme) => css`
  color: ${theme.color.grey900};
  font-size: 0.95rem;
`;
