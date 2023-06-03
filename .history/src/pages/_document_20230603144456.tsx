import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ヒアリングシートアプリ</title>
        {/* ファビコン・アップルタッチアイコン */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/SiteLogo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/SiteLogo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/SiteLogo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
