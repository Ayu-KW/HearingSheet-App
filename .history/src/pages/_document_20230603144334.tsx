import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ヒアリングシートアプリ</title>
        {/* ファビコン・アップルタッチアイコン */}
        <link rel="apple-touch-icon" sizes="180x180" href="/public/images/SiteLogo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
