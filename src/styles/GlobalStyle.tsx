import { Global, Theme, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    word-break: keep-all;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${theme.color.fullWhite};
    color: ${theme.color.black};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  button,
  a,
  ul,
  li {
    all: unset;
    cursor: pointer;
  }
`;