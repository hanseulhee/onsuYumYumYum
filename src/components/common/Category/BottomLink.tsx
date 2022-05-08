import { css, Theme } from "@emotion/react";
import BottomCss from "components/common/Category/BottomCss";

function BottomLink() {
    return (
        <footer css={wrapper}>
            <div css={itemWrapper}>
                <div css={itemInWrapper}>
                    <BottomCss path="/" category="홈" num={0} />
                    <BottomCss path="/Map" category="지도" num={1} />
                    <BottomCss path="/Review" category="후기" num={2} />
                    <BottomCss path="/Profile/Alarm" category="알람" num={3} />
                    <BottomCss path="/Profile/Mypage" category="마이페이지" num={4} />
                </div>
            </div>
        </footer>
    );
}

export default BottomLink;

const wrapper = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.85rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${theme.color.border};
  background-color: ${theme.color.fullWhite};
  padding: 0px 2px;
`;

const itemWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
`;

const itemInWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;