import { css, Theme } from "@emotion/react";
import Footer from "components/Detail/Footer";
import MenuList from "components/Detail/Menu/MenuList";
import PlaceInform from "components/Detail/Inform/PlaceInform";
import PlaceIntro from "components/Detail/Inform/PlaceLink";
import PlaceTime from "components/Detail/Inform/PlaceTime";
import Category from "components/Detail/Menu/Category";
import ChangeInformLink from "components/common/ChangeInformLink";
import Image from "next/image";

function Detail() {
  return (
    <div css={fullSizeWrapper}>
      <div css={itemSortWrapper}>
        <div css={imgWrapper}>
          <Image
            src="/images/mando.jpg"
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div css={informWrapper}>
          <PlaceIntro />
          <PlaceInform title="전화" summary="050-1234-5678" />
          <PlaceInform
            title="위치"
            summary="경기 수원시 권선구"
          />
          <PlaceTime title="영업시간" summary="12:00에 영업 시작 ▾" />
          <ChangeInformLink />
        </div>
      </div>
      <Category />
      <div css={menuWrapper}>
        <MenuList />
      </div>
      <Footer />
    </div>
  );
}

export default Detail;

const fullSizeWrapper = css`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: 3.85rem;
  margin-top: 0.9rem;
`;

const itemSortWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 12.2rem;
`;

const informWrapper = css`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 0 1.3rem;
`;

const menuWrapper = css`
  margin: 1.25rem 0;
`;