import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { objectedStores, IStore } from "assets/stores/stores";
import { css, Theme } from "@emotion/react";
import Footer from "components/Detail/Footer";
import MenuList from "components/Detail/Menu/MenuList";
import PlaceInform from "components/Detail/Inform/PlaceInform";
import PlaceIntro from "components/Detail/Inform/PlaceLink";
import ChangeInformLink from "components/Detail/ChangeInformLink";
import SectionKeyword from "components/common/SectionKeyword";

function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentStore, setCurrentStore] = useState<IStore | null>(null);

  useEffect(() => {
    if (typeof slug !== "string") {
      return;
    }
    if (!objectedStores[slug]) {
      return;
    }
    setCurrentStore(objectedStores[slug]);
  }, [slug, router]);

  return (
    <div css={fullSizeWrapper}>
      <div css={itemSortWrapper}>
        <div css={imgWrapper}>
          <img src={currentStore?.locationImg} alt="img" css={imgSize} />
        </div>
        <div css={informWrapper}>
          <PlaceIntro name={currentStore?.name} phone={currentStore?.phone} />
          <PlaceInform title="전화" summary={currentStore?.phone} />
          <PlaceInform title="위치" summary={currentStore?.location} />
          <div css={timeWrapper}>
            <span css={subName}>영업시간</span>
            <details css={detailsWrapper}>
              <summary>자세히 보기</summary>
              <ul css={ulWrapper}>
                {currentStore?.time.map((each) => (
                  <li css={timeList} key={currentStore.name}>
                    {each}
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <ChangeInformLink />
        </div>
      </div>
      <SectionKeyword name="메뉴" />
      <div>
        {currentStore?.menu.map((each) => (
          <MenuList
            key={each.id}
            name={each.name}
            price={each.price}
            img={each.menuImg}
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
  padding-bottom: 3.85rem;
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
