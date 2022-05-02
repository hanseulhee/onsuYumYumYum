import { Global, Theme, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    word-break: keep-all;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
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

  input::placeholder {
    font-weight: ${theme.fontWeight.light};
}
`;