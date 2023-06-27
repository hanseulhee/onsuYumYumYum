import { css, Theme } from "@emotion/react";
import HelpIcon from "@mui/icons-material/Help";
import Link from "next/link";

function Introduce() {
  return (
    <section css={sizeWrapper}>
      <div css={contentWrapper}>
        <p css={titleContent}>후기페이지</p>
        <div css={questionMarkWrapper}>
          <Link href="/Review/Introduce" passHref>
            <HelpIcon css={questionMark} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Introduce;

const sizeWrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.3rem 0rem 0rem 1.2rem;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const titleContent = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1rem;
  color: ${theme.color.black};

  line-height: 1.1rem;
  margin-right: 0.3rem;
  letter-spacing: -0.02rem;
`;

const questionMarkWrapper = css`
  padding-top: 0.25rem;
`;

const questionMark = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-size: 1.12rem;
`;
