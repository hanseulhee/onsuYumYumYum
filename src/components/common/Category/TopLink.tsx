import { css, Theme } from "@emotion/react";
import TopCategory from "components/common/Category/TopCategory";

function TopLink() {
  return (
    <header css={wrapper}>
      <TopCategory path="/" category="홈" />
      <TopCategory path="/Category/Alone" category="혼밥" />
      <TopCategory path="/Category/Dining" category="회식" />
      <TopCategory path="/Category/Hangover" category="해장" />
      <TopCategory path="/Category/CostEffect" category="가성비" />
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