import { PropsWithChildren, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import BottomLink from "components/common/Category/BottomLink";
import { ErrorBoundary } from "components/common/ErrorBoundary";
import WebWarning from "components/common/Main/WebWarning";
import Nav from "components/Nav";
import { useMediaQuery } from "hooks/useMediaQuery";
import useWindowSize from "hooks/useWindowSize";
import * as gtag from "libs/gtag";
import { RecoilRoot } from "recoil";

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
            {/* {isWeb ? <WebWarning /> : ""} */}
            <Script
              defer
              crossOrigin="anonymous"
              src="https://developers.kakao.com/sdk/js/kakao.js"
            />
            <Layout>
              <Nav searchField={searchField} setSearchField={setSearchField} />
              <Component {...pageProps} searchField={searchField} />
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
