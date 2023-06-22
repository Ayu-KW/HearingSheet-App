import Head from "next/head";
import LinkButton from "../common/Button/LinkButton";
import Link from "next/link";
import HamburgerButton from "../common/Button/HamburgerButton";

export const Header = () => {
  return (
    <>
      <Head>
        <title>ヒアリングシートアプリ</title>
      </Head>
      <header className="bg-sky-600 p-4 text-white flex justify-around items-center fixed top-0 w-full shadow-md">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>ヒアリングシートアプリ</Link>
        </h1>
        <HamburgerButton />
        <nav className="flex gap-6 items-center font-bold">
          <Link
            href={"/Customers/CustomerCreation"}
            className="hover:border-b hover:border-b-white"
          >
            新規登録
          </Link>
          <Link
            href={"/Customers/CustomerList"}
            className="hover:border-b hover:border-b-white"
          >
            顧客一覧
          </Link>
          <Link href={"/AboutThisApp"} className="hover:border-b hover:border-b-white">
            本アプリについて
          </Link>
          <LinkButton style={"bg-rose-400 hover:bg-rose-300 py-1 px-2"} url={"/"}>
            ログアウト
          </LinkButton>
        </nav>
      </header>
    </>
  );
};
