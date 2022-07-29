import { css, Theme } from "@emotion/react";
import Link from "next/link";
import IntroduceLottie from "./IntroduceLottie";

interface Props {
  lottieData: object;
  introSummary: string;
  summary: string;
  url: string;
}
function InformCard({ lottieData, introSummary, summary, url }: Props) {
  return (
    <div css={cardSizeWrapper}>
      <div css={lottieWrapper}>
        <IntroduceLottie lottieData={lottieData} />
      </div>
      <div css={contentSizeWrapper}>
        <h4>{introSummary}</h4>

        <h4 css={nextSummaryContent}>{summary}</h4>
        <Link href={url}>
          <a>
            <button css={linkButton}>자세히 보기 →</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default InformCard;

const cardSizeWrapper = css`
  margin-top: 2.5rem;
`;

const lottieWrapper = css`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 16px 16px 0 0;
`;

const contentSizeWrapper = (theme: Theme) => css`
  position: relative;
  padding: 1.75rem;
  border-radius: 0 0 16px 16px;

  line-height: 2rem;
  text-align: left;
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.bold};
  background-color: ${theme.color.grey100};
`;

const nextSummaryContent = (theme: Theme) => css`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.grey900};
`;

const linkButton = (theme: Theme) => css`
  margin-top: 2.5rem;
  padding: 0 1.15rem;
  font-size: 0.83rem;
  line-height: 2.4rem;
  border-radius: 25px;
  background-color: #e6e6e7;
  color: ${theme.color.black};
`;