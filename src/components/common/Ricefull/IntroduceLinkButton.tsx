import { css, Theme } from "@emotion/react";
import Link from "next/link";

function IntroduceLinkButton() {
  return (
    <div css={SizeWrapper}>
      <div css={SizeInWrapper}>
        <Link href="/Category/Ricefull/introduce">
          <a>
            <div css={rankPageLink}>
              <span>
                온수냠냠냠 <span css={highlight}>X</span> 밥full
              </span>
              <span css={subSummary}>
                밥full에 관한 자세한 정보를 보실 수 있습니다.
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default IntroduceLinkButton;

const SizeWrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.2rem 0.6rem 0.9rem 0.6rem;
`;

const SizeInWrapper = css`
  width: 100%;
`;

const rankPageLink = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.8rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.black};
  background-color: ${theme.color.grey100};
`;

const subSummary = (theme: Theme) => css`
  font-size: 0.81rem;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.color.grey500};
`;

const highlight = (theme: Theme) => css`
  color: ${theme.color.yellow};
`;
