import { css, Theme } from "@emotion/react";
import useScrollRestoration from "hooks/useScrollRestoration";
import Image from "next/image";

function Cafe() {
  useScrollRestoration();
  return (
    <div css={fullSizeWrapper}>
      {" "}
      <div css={imgWrapper}>
        <Image
          src="/images/slide7.png"
          alt="img"
          width="100%"
          height="48rem"
          layout="responsive"
          priority
        />
      </div>
      <span></span>
    </div>
  );
}

export default Cafe;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: ${theme.color.fullWhite};
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
`;

const inWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 0.2rem;
`;
