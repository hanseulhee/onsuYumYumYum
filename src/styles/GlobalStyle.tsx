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
    text-rendering: geometricPrecision;
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body {
    background-color: ${theme.color.fullWhite};
    color: ${theme.color.black};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

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

  p {
    margin: 1rem 0;
    letter-spacing: -0.05em;
    line-height: 1.625;
    font-weight: 400;
  }

  details > summary {
    list-style: none;
  }

  details > summary::-webkit-details-marker {
    display: none;
  }

  summary {
    all: unset;
    cursor: pointer;
    outline: none;
  }

  ul,
  li {
    list-style: none;
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    margin: 0 0 0.625rem 0;
    letter-spacing: -0.05em;
    line-height: 1.5;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.25rem;
  }
`;
