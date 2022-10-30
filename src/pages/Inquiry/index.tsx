import { css, Theme } from "@emotion/react";
import Footer from "components/Footer";
import IntroText from "components/Text/IntroText";
import OneLineContent from "components/Text/OneLineContent";

function Inquiry() {
  return (
    <main css={mainSizeWrapper}>
      <div css={itemSizeWrapper}>
        <IntroText title="문의하기" subTitle="Inquiry" />
        <div css={summaryWrapper}>
          <OneLineContent summary="문의하실 사항이 있으신가요?" />
          <OneLineContent
            summary="온수냠냠냠은 사소한 문의 모두 환영합니다. 궁금한 점부터 일상적인 대화까지
편하게 연락해주세요."
          />
          <OneLineContent summary="하단의 메일 주소로 문의 가능하며 더 빠른 답변을 원하신다면 아래의 채널톡을 이용해주세요!" />
          <OneLineContent summary="온수냠냠냠은 사용자의 관점에서 서비스를 운영하고 더 나은 서비스가 되고자 노력합니다. 저희 서비스를 이용해주셔서 감사드리며 편하게 문의 부탁드립니다. 🙂" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Inquiry;

const mainSizeWrapper = css`
  position: relative;
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
