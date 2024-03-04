import { css, Theme } from "@emotion/react";
import Intro from "components/common/Ricefull/Breakfast/Intro";

function Breakfast() {
  return (
    <div css={fullSizeWrapper}>
      <Intro />
      <div>
        
      </div>
    </div>
  );
}

export default Breakfast;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  min-height: auto;
  background-color: ${theme.color.fullWhite};
`;
