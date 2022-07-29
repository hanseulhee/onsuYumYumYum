import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import BottomLink from "components/common/Category/BottomLink";
import Nav from "components/Nav";
import WebWarning from "components/common/Main/WebWarning";
import { useMediaQuery } from "hooks/useMediaQuery";

declare global {
  interface Window {
    kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const isWeb = useMediaQuery(769);

  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>온수냠냠냠</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GlobalStyle />
      {isWeb ? <WebWarning /> : ""}
      <NextUIProvider>
        <Nav />
        <Component {...pageProps} />
        <BottomLink />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
