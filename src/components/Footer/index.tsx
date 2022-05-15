import { css, Theme } from "@emotion/react";
import Inform from "components/Footer/Inform";
import GoLink from "components/Footer/GoLink";

function Footer() {
  return (
    <div css={wrapper}>
      <div css={inWrapper}>
        <h1 css={title}>온수냠냠냠</h1>
        <div css={informWrapper}>
          <Inform title="문의전화" inform="010-4072-1062" />
          <Inform title="이메일" inform="3021062@gmail.com" />
        </div>
        <hr />
        <div css={linkWrapper}>
          <GoLink path="/" title="이용방법" />
          <GoLink path="/" title="문의사항" />
        </div>
        <span>
          Copyright © Develop, Design by hanseulhee. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;

const wrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 12rem;
  color: #d5d8dd;
  background-color: ${theme.color.lightGrey};
  font-size: 13px;
  font-weight: ${theme.fontWeight.light};
`;

const inWrapper = css`
  padding: 0 20px;
`;

const title = (theme: Theme) => css`
  all: unset;
  color: ${theme.color.grey};
  font-weight: ${theme.fontWeight.bold};
  font-size: 15px;
`;

const linkWrapper = css`
  display: flex;
  flex-direction: row;
`;

const informWrapper = css`
  margin: 8px 0;
`;
