import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>온수냠냠냠</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;