import { css, Theme } from "@emotion/react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import IntroduceCard from "components/common/Ricefull/IntroduceCard";
import Footer from "components/Footer";
import Details from "components/Text/Details";
import OneLineContent from "components/Text/OneLineContent";
import { qna } from "constants/qna";

function Introduce() {
  return (
    <main css={mainSizeWrapper}>
      <div css={introSizeWrapper}>
        <h2 css={introTitle}>성공회대 밥full</h2>
        <span css={introSubTitle}>한식당</span>
        <div css={summaryWrapper}>
          <OneLineContent summary="밥full은 인천부평지역자활센터에서 운영하는 식당으로 2022년 9월 22일부터 영업을 시작하였습니다." />
          <OneLineContent summary="성공회대학교 미가엘관 1층에 위치하며 영업시간은 오전 11시 30분부터 낮 12시 30분까지입니다." />
          <OneLineContent
            summary="
        주메뉴는 백반으로 운영되고 있으며 금액은 5,300원이고, 현금/카드 결제 모두 가능합니다."
          />
        </div>
      </div>
      <div css={itemSizeWrapper}>
        <div css={marginWrapper}>
          <h3 css={sectionTitle}>내부 사진</h3>
          <div css={cardWrapper}>
            <div css={cardInWrapper}>
              <IntroduceCard
                img="babfullServing.jpg"
                title="자율 배식"
                summary="자율 배식으로 이루어지고 있어요."
              />
              <IntroduceCard
                img="babfullFood.jpg"
                title="음식"
                summary="하루 약 150명 정도의 식수 인원을 기준으로 음식을 준비하고 있어요."
              />
              <IntroduceCard
                img="babfullRestaurant.jpg"
                title="청결"
                summary="밥full은 위생을 신경 쓰며 깨끗하고 청결하게 유지되고 있어요."
              />
              <IntroduceCard
                img="kiosk.jpg"
                title="주문"
                summary="키오스크로 주문할 수 있어요."
              />
            </div>
          </div>
        </div>
        <div css={marginWrapper}>
          <h3 css={sectionTitle}>자주 묻는 질문</h3>
          <div>
            {qna.map((item, index) => (
              <Details
                key={index}
                title={item.question}
                content={item.answer}
              />
            ))}
          </div>
        </div>

        <div css={marginWrapper}>
          <h3 css={sectionTitle}>Contect</h3>
          <div css={contectWrapper}>
            <a href="tel: 02-2610-4438" css={aTagCss}>
              <div css={contectEachWrapper}>
                <span css={contectIcon}>
                  <CallIcon />
                </span>
                02-2610-4438
              </div>
            </a>
            <a href="mailto:3021062@gmail.com" css={aTagCss}>
              <div css={contectEachWrapper}>
                <span css={contectIcon}>
                  <EmailIcon />
                </span>
                3021062@gmail.com
              </div>
            </a>
          </div>
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

const introSizeWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.25rem auto;
`;

const introTitle = (theme: Theme) => css`
  font-size: 1.9rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 2;
  margin: 0;
`;

const introSubTitle = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
`;

const itemSizeWrapper = css`
  margin: 1.25rem 1.25rem 2rem;
`;

const summaryWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
  line-height: 2;
  margin: 0.8rem 1.25rem;
`;

const cardWrapper = css`
  align-self: flex-start;
  width: 100%;
  overflow-x: auto;
`;

const cardInWrapper = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: grab;
`;

const sectionTitle = (theme: Theme) => css`
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 30px;
`;

const marginWrapper = css`
  margin: 1rem 0 5rem 0;
`;

const contectWrapper = css`
  display: flex;
  flex-direction: column;
`;

const contectIcon = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.color.yellow};
  font-weight: ${theme.fontWeight.bold};
  margin-right: 0.6rem;
`;

const contectEachWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.25rem 0;
  padding: 0.72rem 0.8rem;
  background-color: ${theme.color.grey100};
  border-radius: 5px;
`;

const aTagCss = css`
  all: unset;
`;
