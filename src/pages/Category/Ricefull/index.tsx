import { css, Theme } from "@emotion/react";
import ErrorIcon from "@mui/icons-material/Error";
import WeeklyMenuCard from "components/Card/WeeklyMenuCard";
import IntroduceLinkButton from "components/common/Ricefull/IntroduceLinkButton";
import SectionKeyword from "components/common/SectionKeyword";
import Footer from "components/Footer";
import useGetRicefull from "hooks/api/useGetRicefull";
import useScrollRestoration from "hooks/useScrollRestoration";
import Image from "next/image";
import Loading from "pages/Loading";

function Ricefull() {
  useScrollRestoration();
  const { babfullMenus, isLoading } = useGetRicefull();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div css={fullSizeWrapper}>
      <div css={imgWrapper}>
        <Image
          src="/images/riceFullPoster.png"
          alt="img"
          width="100%"
          height="48rem"
          layout="responsive"
          priority
        />
      </div>
      <div css={contentWrapper}>
        <ErrorIcon css={exclamationMark} />
        <span css={noticeSummary}>모든 식단의 가격은 5,300원입니다.</span>
      </div>
      <IntroduceLinkButton />
      <div>
        <SectionKeyword name="주간 메뉴" />
        <div css={cardWrapper}>
          <div css={contentWrapper}>
            <span css={noticeSummary}>
              개발자의 졸업으로 밥full의 주간 메뉴는 정기적으로는 업데이트 되지
              않습니다.
              <br />
              메뉴 업데이트를 해주실 수 있는 분은 하단의 메일로 연락
              부탁드립니다. 감사합니다 🙂
              <br />
              <br />
            </span>
          </div>
          <div css={contentWrapper}>
            {/* <span css={noticeSummary}>
              *주간 메뉴는 매주 월요일 업데이트됩니다.
            </span> */}
          </div>
          {babfullMenus?.content.map((menu) => {
            return (
              <WeeklyMenuCard
                key={menu.id}
                date={menu.menuDate}
                foods={menu.foods}
                deliciousFood={menu.deliciousFood}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ricefull;

const fullSizeWrapper = (theme: Theme) => css`
  position: relative;
  width: 100%;
  /* min-height: 100%; */
  min-height: auto;
  background-color: ${theme.color.fullWhite};
`;

const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
`;

const cardWrapper = css`
  display: flex;
  flex-direction: column;
  min-height: 2.4rem;
  height: auto;
`;

const noticeSummary = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 0.65rem;
  color: ${theme.color.grey500};
  margin-bottom: 0.3rem;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0.2rem 0 0 0.6rem;
`;

const exclamationMark = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-right: 0.1rem;
`;
