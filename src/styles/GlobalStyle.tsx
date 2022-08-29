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
    font-family: "Noto Sans KR", sans-serif;
    font-display: swap;
    word-break: keep-all;
  }

  html,
  body {
    background-color: ${theme.color.fullWhite};
    color: ${theme.color.black};
  }

  ul,
  li,
  img {
    all: unset;
  }

  button,
  a {
    all: unset;
    cursor: pointer;
  }

  hr {
    height: 1px;
    width: 100%;
    border: none;
    background-color: #d5d8dd;
  }
`;
