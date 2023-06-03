import Head from "next/head";

export const Header = () => {
  return (
    <>
      <Head>
        <title>ヒアリングシートアプリ</title>
        {/* ファビコン・アップルタッチアイコン */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/SiteLogo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <header className="bg-sky-600 p-4 text-white flex justify-around">
        <h1 className="text-2xl font-bold">ヒアリングシートアプリ</h1>
        <nav className="flex gap-6 items-center font-bold">
          <p>新規登録</p>
          <p>顧客一覧</p>
          <p>本アプリについて</p>
          <button className="bg-rose-400 rounded-md py-1 px-2 hover:bg-rose-300 duration-500">
            ログアウト
          </button>
        </nav>
      </header>
    </>
  );
};
