import Head from "next/head";

export const Header = () => {
  return (
    <>
      <Head>
        <title></title>
        {/* ファビコン */}
        <link rel="icon" href="favicon.ico" />
        {/* <!-- アップルタッチアイコン --> */}
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
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
