/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { css, Theme } from "@emotion/react";
import Footer from "components/Detail/Footer";
import PlaceInform from "components/Detail/Inform/PlaceInform";
import PlaceIntro from "components/Detail/Inform/PlaceLink";
import ChangeInformLink from "components/Detail/ChangeInformLink";
import SectionKeyword from "components/common/SectionKeyword";
import { underline } from "styles/css/underline";
import useGetRestaurantById from "hooks/api/useGetRestaurantById";
import MenuList from "components/Detail/Menu/MenuList";
import Loading from "pages/Loading";

function Detail() {
  const {
    query: { detailId },
  } = useRouter();

  const { restaurant, restaurantMenu, isLoading } = useGetRestaurantById({
    detailId,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div css={fullSizeWrapper}>
      <div css={itemSortWrapper}>
        <div css={imgWrapper}>
          <img
            src={restaurant?.insideImage.s3Url}
            alt={restaurant?.name}
            css={imgSize}
          />
        </div>
        <div css={informWrapper}>
          <PlaceIntro
            name={restaurant?.name}
            phone={restaurant?.phone}
            reviewLink="https://www.onsuyum.com/Review"
          />
          <PlaceInform title="전화" summary={restaurant?.phone} />
          <PlaceInform title="위치" summary={restaurant?.location} />
          <div css={timeWrapper}>
            <span css={subName}>영업시간</span>
            <details css={detailsWrapper}>
              <summary css={summaryCss}>자세히 보기</summary>
              <ul css={ulWrapper}>
                {restaurant?.time ? (
                  restaurant?.time.map((each, index) => (
                    <li css={timeList} key={index}>
                      {each}
                    </li>
                  ))
                ) : (
                  <li css={timeList}>정보 없음</li>
                )}
              </ul>
            </details>
          </div>
          <ChangeInformLink />
        </div>
      </div>
      <SectionKeyword name="메뉴" />
      <div>
        {restaurantMenu.map((each) => (
          <MenuList
            key={each.id}
            name={each.name}
            price={each.price}
            menuImage={each.menuImage}
          />
        ))}
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
  margin-top: 0.9rem;
`;

const itemSortWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.1rem;
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 14rem;
`;

const imgSize = css`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const informWrapper = css`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 0 1.3rem;
`;

const timeWrapper = css`
  display: flex;
  flex-direction: row;
  margin: 0.23rem 0;
`;

const subName = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.grey500};
  font-size: 0.75rem;
  margin-right: 0.65rem;
  margin-top: 0.14rem;
`;

const detailsWrapper = (theme: Theme) => css`
  font-size: 0.92rem;
  font-weight: ${theme.fontWeight.light};
  background-color: ${theme.color.fullWhite};
  color: ${theme.color.black};
`;

const summaryCss = (theme: Theme) => css`
  ${underline(theme)}
`;

const ulWrapper = css`
  all: unset;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const timeList = css`
  margin: 0;
  font-size: 0.92rem;
`;
