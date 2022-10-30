import { css, Theme } from "@emotion/react";
import IntroText from "components/Text/IntroText";
import Footer from "components/Footer";
import OneLineContent from "components/Text/OneLineContent";

function Introduce() {
  return (
    <main css={mainSizeWrapper}>
      <div css={itemSizeWrapper}>
        <IntroText title="온수냠냠냠이 뭔가요?" subTitle="Welcome" />
        <div css={summaryWrapper}>
          <OneLineContent summary="안녕하세요 온수역 맛집 소개 서비스 온수냠냠냠입니다 ! 👋🏻 👋🏻" />

          <OneLineContent
            summary="빠르게 흘러가는 시간 속에서 다들 밥은 드셨는지, 식사 시간은 즐겁게
            보내셨는지 궁금합니다."
          />

          <OneLineContent
            summary="저희 온수냠냠냠은 온수역의 식당들을 소개하고 맛집들을 즐겨보실 수
            있는 서비스입니다."
          />

          <OneLineContent summary="온수냠냐미로 이 서비스를 이미 알고 계셨던 분도 있을 거라 생각합니다." />

          <OneLineContent
            summary="1탄이었던 온수냠냐미가 부족한 서비스였음에도 불구하고 많은 분이
            찾아주셔서 정말 감사드린다는 말씀 전하고 싶습니다. 🙇🏻‍♂️"
          />

          <OneLineContent
            summary="저뿐만 아니라 많은 사람들에게 필요한 서비스임을 더욱 알게 되었고 더
            발전된 모습으로"
          />

          <OneLineContent
            highlight="온수냠냐미 2탄 온수냠냠냠"
            summary="을
            개발하고자 노력했습니다."
          />

          <OneLineContent
            summary="온수냠냠냠은 여러분의 한 끼 고민 해결과 온수역 상권 활성화를 위한
            목적으로,"
          />

          <OneLineContent
            summary="아담하지만 맛집들로 이루어진 온수역에서 즐거운 시간 보내셨으면
            좋겠습니다."
          />

          <OneLineContent
            summary="저는 누구보다 음식을 좋아하는 사람으로 온수냠냠냠에 항상 많은 노력을
            하고 있으니 언제든 다시 방문해주세요."
          />

          <OneLineContent highlight="이곳에서 모두 오늘도 배부른 하루 보내시길 바랍니다 ! 🍔🍕🍟🌭🍿🥞🍗" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default Introduce;

const mainSizeWrapper = css`
  position: relative;
  min-height: 100%;
  width: 100%;
`;

const itemSizeWrapper = css`
  margin: 1.25rem 1.25rem 2rem;
`;

const summaryWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
  opacity: 0.98;
  line-height: 2;
`;
