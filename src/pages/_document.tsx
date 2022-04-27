import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63100352/158023445-57c487a7-f57c-403e-9c16-4e9e7b164d06.png"
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