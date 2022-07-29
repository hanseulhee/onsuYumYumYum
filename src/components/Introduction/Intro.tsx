import { css, Theme } from "@emotion/react";

function Intro() {
  return (
    <div css={sizeWrapper}>
      <h2 css={title}>온수냠냠냠</h2>
      <span css={subTitle}>
        온수역의 맛집들로 <b>맛있는</b> 하루를
      </span>
    </div>
  );
}

export default Intro;

const sizeWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.02rem;
`;

const subTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  line-height: 3.6rem;
  font-size: 1rem;
`;
