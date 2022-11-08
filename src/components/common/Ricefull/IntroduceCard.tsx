import { css, Theme } from "@emotion/react";
import Image from "next/image";

interface Props {
  img: string;
  title: string;
  summary: string;
}

function IntroduceCard({ img, title, summary }: Props) {
  return (
    <div css={cardSizeWrapper}>
      <div css={imgWrapper}>
        <Image src={`/images/${img}`} alt="introduce img" css={imgCss} layout="fill" priority />
      </div>
      <div css={contentSizeWrapper}>
        <span css={titleCss}>{title}</span>
        <span css={summaryCss}>{summary}</span>
      </div>
    </div>
  );
}

export default IntroduceCard;

const cardSizeWrapper = css`
  height: 100%;
  width: 100%;
  border-radius: 18px;
  margin: 2.5rem 1rem 0 0;
`;

const imgWrapper = css`
  position: relative;
  overflow: hidden;
  width: 15rem;
  height: 15rem;
  border-radius: 18px 18px 0 0;
`;

const imgCss = css`
  width: 100%;
  height: 100%;
`;

const contentSizeWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: 0 0 18px 18px;
  line-height: 2rem;
  text-align: left;
  font-weight: ${theme.fontWeight.bold};
  background-color: ${theme.color.grey100};
  width: 15rem;
  height: 13.5rem;
`;

const titleCss = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.1rem;
`;

const summaryCss = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 0.95rem;
`;
