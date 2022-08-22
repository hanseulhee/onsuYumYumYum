import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/logo.png"
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
}

export default MyDocument;
