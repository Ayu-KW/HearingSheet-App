import Head from "next/head";
import { Button } from "../common/Button";

export const Header = () => {
  return (
    <>
      <Head>
        <title>ヒアリングシートアプリ</title>
      </Head>
      <header className="bg-sky-600 p-4 text-white flex justify-around">
        <h1 className="text-2xl font-bold">ヒアリングシートアプリ</h1>
        <nav className="flex gap-6 items-center font-bold">
          <p>新規登録</p>
          <p>顧客一覧</p>
          <p>本アプリについて</p>
          <Button className="bg-rose-400">ログアウト</Button>
        </nav>
      </header>
    </>
  );
};
