import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ヒアリングシートアプリ</title>
        {/* ファビコン・アップルタッチアイコン */}
        <link rel="apple-touch-icon" sizes="180x180" href="/public/images/SiteLogo.svg" />
        <link
          rel="icon"
          href="/public/images/SiteLogo.svg"
          type="image/svg"
          sizes="<generated>"
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
