import { css, Theme } from "@emotion/react";
import BottomCategory from "components/common/Category/BottomCategory";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function BottomLink() {
  return (
    <footer css={wrapper}>
      <div css={itemWrapper}>
        <div css={itemInWrapper}>
          <BottomCategory path="/" category="홈" icon={<HomeIcon />} />
          <BottomCategory path="/Map" category="지도" icon={<MapIcon />} />
          <BottomCategory
            path="/Notice"
            category="공지"
            icon={<AccountCircleIcon />}
          />
          <BottomCategory
            path="/Review"
            category="후기"
            icon={<NotificationsActiveIcon />}
          />
        </div>
      </div>
    </footer>
  );
}

export default BottomLink;

const wrapper = (theme: Theme) => css`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.85rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  border-top: 1px solid ${theme.color.border};
  background-color: ${theme.color.fullWhite};
  padding: 0px 2px;
  z-index: 10;
`;

const itemWrapper = css`
  position: relative;
  width: 100%;
`;

const itemInWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
