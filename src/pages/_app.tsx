import { css, ThemeProvider } from "@emotion/react";
import { ErrorBoundary } from "components/common/ErrorBoundary";
import Nav from "components/Nav";
import BottomLink from "components/Nav/BottomLink";
import { useMediaQuery } from "hooks/useMediaQuery";
import useWindowSize from "hooks/useWindowSize";
import * as gtag from "libs/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { PropsWithChildren, useEffect } from "react";
import { RecoilRoot } from "recoil";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/Theme";

declare global {
  interface Window {
    Kakao: any;
  }
}

let vh = 0;

function MyApp({ Component, pageProps }: AppProps) {
  useASCIICode();
  useEffect(() => {
    const id = "kakao-sdk";
    if (document.getElementById(id) == null) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.onload = () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APPKEY);
        window.Kakao.isInitialized();
      };
      document.head.append(script);
    }
  }, []);

  const isWeb = useMediaQuery(769);
  const router = useRouter();
  const searchPath = router.asPath === "/Search";

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>온수냠냠냠</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <ErrorBoundary>
        <RecoilRoot>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {/* 데스크톱 환경일 경우 경고 뜨게 함 */}
            {/* {isWeb ? <WebWarning /> : ""} */}
            <Script
              defer
              crossOrigin="anonymous"
              src="https://developers.kakao.com/sdk/js/kakao.js"
            />
            <Layout>
              {searchPath ? "" : <Nav />}
              <Component {...pageProps} />
              <BottomLink />
            </Layout>
          </ThemeProvider>
        </RecoilRoot>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;

function Layout({ children }: PropsWithChildren<{}>) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return <div css={layoutCss}>{children}</div>;
}

const layoutCss = css`
  min-height: calc(var(--var, 1vh) * 100);
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

function useASCIICode() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(` 
----------------------------------
----------------------------------    
-----##-----------------(#--------
-----##-----------------#$--------
-----@@-----------------@##~###---
-----@;-----------------##--------
-----!#-----------------=@--------
-----##-----------------&#~;###---
-----##@#@:##;=@#-------@#--------     
------------------------##--------  
----------------------------------
-------##:$###+####;@@#$##-------- 
-------##---------------##--------
-------;#---------------##--------
-------##---------------:#--------
-------##---------------##--------
-------#=~##*@@###@@@@##=@--------
----------------------------------
----------------------------------
`);
    }
  });
}
