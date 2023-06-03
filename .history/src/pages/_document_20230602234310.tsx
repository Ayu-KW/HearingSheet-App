import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ヒアリングシートアプリ</title>
        {/* ファビコン */}
        <link rel="icon" href="SiteLogo.svg" />
        {/* アップルタッチアイコン */}
        <link rel="apple-touch-icon" sizes="180x180" href="/public/images/SiteLogo.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/images/SiteLogo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/images/SiteLogo.svg"
        />
      </Head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
