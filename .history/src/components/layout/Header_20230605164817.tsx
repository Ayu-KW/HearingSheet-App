import Head from "next/head";
import LinkButton from "../common/Button/LinkButton";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Head>
        <title>
          <Link href={"/"}>ヒアリングシートアプリ</Link>
        </title>
      </Head>
      <header className="bg-sky-600 p-4 text-white flex justify-around items-center fixed top-0 w-full shadow-md">
        <h1 className="text-2xl font-bold">ヒアリングシートアプリ</h1>
        <nav className="flex gap-6 items-center font-bold">
          <p>新規登録</p>
          <Link href={"/CustomerList"}>顧客一覧</Link>
          <p>本アプリについて</p>
          <LinkButton style={"bg-rose-400 hover:bg-rose-300"}>ログアウト</LinkButton>
        </nav>
      </header>
    </>
  );
};