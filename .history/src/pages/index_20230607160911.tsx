import LinkButton from "@/components/common/Button/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-14">
        <h2 className="font-bold text-4xl text-sky-700 mb-4">
          ヒアリングシートアプリ
          <br />
          トップページ
        </h2>
        <p className="">
          Webサイト制作の工程「ヒアリング」時に使用する情報管理アプリケーションです。
        </p>
        <p className="mt-1"></p>
      </div>
      <section className="mb-14">
        <div className="flex justify-center gap-5 mb-5">
          <LinkButton
            url={"/"}
            style="bg-sky-500 hover:bg-cyan-400 text-white py-5 px-10 text-center text-2xl"
          >
            新規登録
            <span className="block pt-2 text-sm">
              ヒアリング・顧客情報の新規登録はこちら
            </span>
          </LinkButton>
          <LinkButton
            url={"/"}
            style="bg-sky-500 hover:bg-cyan-400 py-5 px-10 text-white text-center text-2xl"
          >
            顧客一覧
            <span className="block pt-2 text-sm">
              ヒアリング・顧客情報の新規登録はこちら
            </span>
          </LinkButton>
        </div>
        <div className="lg:w-2/3 bg-slate-200 border-2 border-gray-400 border-dotted p-4 mb-14">
          <h3 className="text-xl text-cyan-800 font-bold mb-2">本アプリの使い方など</h3>
          <p>
            本アプリの詳しい使い方については
            <Link href={"/AboutThisApp"} className=" inline-block text-sky-400 font-bold">
              「本アプリについて」
            </Link>
            のページをご覧ください。
          </p>
          <p>また</p>
        </div>
      </section>
      <section className="border-t border-t-gray-300 pt-10">
        <h3 className="text-2xl text-cyan-800 font-bold mb-4">問い合わせ</h3>
        <dl className="lg:w-2/3 grid grid-cols-3 gap-0.5">
          <dt className="bg-cyan-600 text-white font-bold p-2 col-span-1">製作者</dt>
          <dd className="bg-gray-200 p-2 col-span-2">かわばた あゆ（Kawabata Ayu）</dd>
          <dt className="bg-cyan-600 text-white font-bold p-2 col-span-1">
            GitHubアカウント
          </dt>
          <dd className="bg-gray-200 p-2 col-span-2">
            <Link href={"https://github.com/Ayu-KW"} className="text-sky-400">
              アカウント名:Ayu-KW
            </Link>
          </dd>
        </dl>
      </section>
    </main>
  );
}
