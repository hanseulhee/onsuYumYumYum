import { css } from "@emotion/react";
import TopCategory from "components/common/Category/TopCategory";

function TopLink() {
  return (
    <header css={wrapper}>
      <TopCategory path="/" category="홈" />
      <TopCategory path="/Category/Alone" category="혼밥" />
      <TopCategory path="/Category/Dining" category="회식" />
      <TopCategory path="/Category/Hangover" category="해장" />
      <TopCategory path="/Category/CostEffect" category="가성비" />
      <TopCategory path="/Category/Ricefull" category="밥full" />
    </header>
  );
}

export default TopLink;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0 5px;
  height: auto;
  padding-bottom: 0.5rem;
`;
