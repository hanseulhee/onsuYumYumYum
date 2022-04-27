import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap"
        />
        <link
          rel="icon"
          href="%PUBLIC_URL%/poster.png"
        />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        <meta property="og:title" content="온수냠냠냠" />
        <meta
          property="og:description"
          content="온수역의 맛집을 소개하는 서비스 온수냠냠냠(onsuyumyumyum)입니다."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
