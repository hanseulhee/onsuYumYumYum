import { css, Theme } from "@emotion/react";
import TopCss from "components/common/Category/TopCss";

function TopLink() {
  return (
    <header css={wrapper}>
      <TopCss path="/" category="홈" />
      <TopCss path="/Category/Alone" category="혼밥" />
      <TopCss path="/Category/Dining" category="회식" />
      <TopCss path="/Category/Hangover" category="해장" />
      <TopCss path="/Category/CostEffect" category="가성비" />
    </header>
  );
}

export default TopLink;

const wrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0 5px;
`;