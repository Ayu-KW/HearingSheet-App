import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title></title>
        {/* ファビコン */}
        <link rel="icon" href="SiteLogo.svg" />
        {/* アップルタッチアイコン */}
        <link rel="apple-touch-icon" href="SiteLogo.svg" />
      </Head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
