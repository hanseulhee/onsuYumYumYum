import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import { useEffect, useState } from "react";
import BottomLink from "components/common/Category/BottomLink";
import Nav from "components/Nav";
import WebWarning from "components/common/Main/WebWarning";
import { useMediaQuery } from "hooks/useMediaQuery";
import { ErrorBoundary } from "components/common/ErrorBoundary";
import { useRouter } from "next/router";
import * as gtag from "libs/gtag";
import { hotjar } from "react-hotjar";

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const isWeb = useMediaQuery(769);
  const [searchField, setSearchField] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    hotjar.initialize(3120226, 6);
  }, []);

  return (
    <>
      <Head>
        <title>온수냠냠냠</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ErrorBoundary>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          {isWeb ? <WebWarning /> : ""}
          <NextUIProvider>
            <Nav searchField={searchField} setSearchField={setSearchField} />
            <Component {...pageProps} searchField={searchField} />
            <BottomLink />
          </NextUIProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
