import { css, Theme } from "@emotion/react";
import IntroText from "components/Text/IntroText";
import Footer from "components/Footer";
import OneLineContent from "components/Text/OneLineContent";

function Introduce() {
  return (
    <main css={mainSizeWrapper}>
      <div css={itemSizeWrapper}>
        <IntroText title="후기페이지가 뭔가요?" subTitle="Review" />
        <div css={summaryWrapper}>
          <OneLineContent summary="안녕하세요 온수역 맛집 소개 서비스 온수냠냠냠입니다 ! 👋🏻 👋🏻" />
          <OneLineContent summary="후기페이지는 온수역 식당들의 생생한 후기를 볼 수 있는 공간입니다." />
          <OneLineContent summary="개발자의 주관적인 생각이 들어가 있어 재미로 봐주시면 감사하겠습니다. 🙇🏻‍♂️" />
          <OneLineContent summary="상시 업데이트될 예정이며 후기 페이지를 통해 식당 정보 이외에도 다양한 정보까지 가져가시길 바랍니다 ! 🍔🍕🍟🌭🍿🥞🍗" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Introduce;

const mainSizeWrapper = css`
  position: relative;
  width: 100%;
`;

const itemSizeWrapper = css`
  margin: 1.25rem 1.25rem 9rem;
`;

const summaryWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
  opacity: 0.98;
  line-height: 2;
`;
