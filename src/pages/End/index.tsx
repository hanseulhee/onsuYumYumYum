import { css, Theme } from '@emotion/react'
import Footer from 'components/Footer'
import IntroText from 'components/Text/IntroText'
import OneLineContent from 'components/Text/OneLineContent'

function End() {
  return (
    <main css={mainSizeWrapper}>
      <div css={itemSizeWrapper}>
        <IntroText title="온수냠냠냠 서비스 종료" subTitle="End" />
        <div css={summaryWrapper}>
          <OneLineContent summary="안녕하세요 온수역 맛집 소개 서비스 온수냠냠냠입니다 ! 👋🏻 👋🏻" />

          <OneLineContent
            highlight="2024년 12월 1일부로 온수냠냠냠 서비스를 종료"
            summary="하고자 합니다."
          />

          <OneLineContent summary="저희 두 명의 개발자의 졸업으로 해당 서비스의 관리를 지속하기 어려운 상황이 되어, 이와 같은 결정을 내리게 되었습니다." />

          <OneLineContent summary="2022년도 ‘온수냠냐미’로 시작한 서비스는 사용자들의 많은 피드백을 기반으로 발전하여 현재의 ‘온수냠냠냠’으로 성장할 수 있었습니다. 그 결과, 현재까지 5,600명의 누적 사용자를 기록할 수 있었습니다. " />

          <OneLineContent summary="홍보뿐만 아니라 채널톡과 메일 등을 통해 보내주신 식당 제보와 소중한 의견들까지, 따뜻한 참여가 있었기에 온수냠냠냠이 이렇게 빛날 수 있었던 것 같습니다. 🙇🏻‍♂️🙇🏻‍♀️" />

          <OneLineContent summary="온수냠냠냠을 위해 도움을 주신 모든 분께 감사의 인사를 전하며 글을 마치도록 하겠습니다." />

          <OneLineContent highlight="감사합니다! 🍔🍕🍟🌭🍿🥞🍗" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
export default End

const mainSizeWrapper = css`
  position: relative;
  min-height: 100%;
  width: 100%;
`

const itemSizeWrapper = css`
  margin: 1.25rem 1.25rem 2rem;
`

const summaryWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: ${theme.fontWeight.light};
  opacity: 0.98;
  line-height: 2;
`
