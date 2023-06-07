import LinkButton from "@/components/common/Button/LinkButton";

export default function Home() {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl">
          ヒアリングシートアプリ
          <br />
          トップページ
        </h2>
        <p className="mt-4">
          Webサイト制作の工程「ヒアリング」時に使用する情報管理アプリケーションです。
        </p>
        <p className="mt-1"></p>
      </div>
      <section className="mb-10">
        <div className="flex justify-center gap-5">
          <LinkButton
            url={"/"}
            style="bg-cyan-500 hover:bg-cyan-400 text-white py-5 px-10 text-center text-2xl"
          >
            新規登録
            <span className="block pt-2 text-sm">
              ヒアリング・顧客情報の新規登録はこちら
            </span>
          </LinkButton>
          <LinkButton
            url={"/"}
            style="bg-cyan-500 hover:bg-cyan-400 py-5 px-10 text-white text-center text-2xl"
          >
            顧客一覧
          </LinkButton>
        </div>
      </section>
      <section className="bg-slate-200 border-2 border-gray-400 border-dotted p-4">
        <h3 className="text-xl">本サイトの使い方など</h3>
      </section>
    </main>
  );
}
