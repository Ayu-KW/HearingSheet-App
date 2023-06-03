import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ファビコン・アップルタッチアイコン */}
          <link rel="apple-touch-icon" sizes="180x180" href="/images/SiteLogo.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/svg" sizes="32x32" href="/images/SiteLogo.svg" />
          <link rel="icon" type="image/svg" sizes="16x16" href="/images/SiteLogo.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
