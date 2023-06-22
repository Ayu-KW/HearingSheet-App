import LinkButton from "@/components/common/Button/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="xl:w-2/3 lg:w-11/12 m-auto font-mono py-[150px] px-[30px]">
      <div className="text-center mb-14">
        <h2 className="font-bold text-2xl md:text-4xl text-sky-700 mb-4">
          ヒアリングシートアプリ
          <br />
          トップページ
        </h2>
        <p>Webサイト制作の工程「ヒアリング」時に使用する情報管理アプリケーションです。</p>
        <p className="mt-1"></p>
      </div>
      <section className="mb-14">
        <div className="flex justify-center gap-5 mb-5 flex-wrap">
          <LinkButton
            url={"/Customers/CustomerCreation"}
            style="bg-sky-500 hover:bg-cyan-400 text-white py-5 px-10 text-center text-2xl"
          >
            新規登録
            <span className="block pt-2 text-sm">
              ヒアリング内容・顧客情報の新規登録はこちら
            </span>
          </LinkButton>
          <LinkButton
            url={"/Customers/CustomerList"}
            style="bg-sky-500 hover:bg-cyan-400 py-5 px-10 text-white text-center text-2xl"
          >
            顧客一覧
            <span className="block pt-2 text-sm">
              ヒアリング内容・顧客情報の確認・更新はこちら
            </span>
          </LinkButton>
        </div>
        <div className="bg-slate-200 border-2 border-gray-400 border-dotted p-4 mb-14 leading-relaxed">
          <h3 className="text-xl text-sky-700 font-bold">本アプリの使い方など</h3>
          <p>
            本アプリの詳しい使い方については
            <Link
              href={"/AboutThisApp"}
              className=" inline-block text-sky-500 font-bold hover:text-orange-400 hover:duration-200"
            >
              「本アプリについて」
            </Link>
            のページをご覧ください。
          </p>
          <div className="mt-4">
            <h4 className="font-bold text-sky-700">＜各ページの説明＞</h4>
            <p>新規登録：これからヒアリングする顧客の情報を新しく登録する画面です。</p>
            <p>
              顧客一覧：すでに登録済みの顧客情報を確認・修正（上書き保存）をする画面です。
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-t-gray-300 pt-10">
        <h3 className="text-2xl text-sky-700 font-bold mb-4">連絡先・お問い合わせ</h3>
        <dl className="lg:w-2/3 grid grid-cols-3 gap-0.5">
          <dt className="bg-cyan-600 text-white font-bold p-2 col-span-1 text-center">
            製作者
          </dt>
          <dd className="bg-gray-200 p-2 col-span-2">かわばた あゆ（Kawabata Ayu）</dd>
          <dt className="bg-cyan-600 text-white font-bold p-2 col-span-1 text-center">
            GitHubアカウント
          </dt>
          <dd className="bg-gray-200 p-2 col-span-2">
            <Link
              href={"https://github.com/Ayu-KW"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500"
            >
              アカウント名:Ayu-KW
            </Link>
          </dd>
          <dt className="bg-cyan-600 text-white font-bold p-2 col-span-1 text-center">
            SNSアカウント
          </dt>
          <dd className="bg-gray-200 p-2 col-span-2">
            <Link
              href={"https://twitter.com/oyomechan_fight"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500"
            >
              Twitterアカウント名:@oyomechan_fight
            </Link>
          </dd>
        </dl>
      </section>
    </main>
  );
}
