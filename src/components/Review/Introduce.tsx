import { css, Theme } from "@emotion/react";

function Introduce() {
  return (
    <div css={bgWrapper}>
      <div css={sizeWrapper}>
        <div css={colorWrapper}>
          <h3 css={titleContent}>후기 페이지</h3>
          <span css={explainContent}>
            온수냠냠냠만의 <strong>생생한 후기</strong>를 볼 수 있는 공간으로
            개발자의 주관적인 생각이 들어가 있어 재미로 봐주시면 감사하겠습니다.
            🙇‍♂️😃
            <br />
            <br />
            상시 업데이트될 예정이며 후기 페이지를 통해 식당 정보 이외에도
            다양한 정보까지 가져가시길 바랍니다.
            <br />
            <br />
            오늘도 냠냠냠! 🍖🍔🍰🌭🍿🥞
          </span>
        </div>
      </div>
    </div>
  );
}

export default Introduce;

const bgWrapper = (theme: Theme) => css`
  position: relative;
  background-color: ${theme.color.white};
`;

const sizeWrapper = css`
  position: relative;
  margin: 0.6rem 0;
`;

const colorWrapper = (theme: Theme) => css`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${theme.color.border};
  border-top: 1px solid ${theme.color.border};
`;

const titleContent = css`
  font-size: 0.98rem;
`;

const explainContent = (theme: Theme) => css`
  font-size: 0.88rem;
  word-break: break-word;
  font-weight: ${theme.fontWeight.light};
`;
