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
        <p className="mt-10">
          Webサイト制作の工程「ヒアリング」時に使用する情報管理アプリケーションです。
        </p>
        <p className="mt-1"></p>
      </div>
      <section>
        <div className="flex justify-center gap-5">
          <LinkButton
            url={"/"}
            style="bg-blue-500 hover:bg-blue-400 text-white py-5 px-10"
          >
            新規登録
            <span className="block">あいうえお</span>
          </LinkButton>
          <LinkButton
            url={"/"}
            style="bg-blue-500 hover:bg-blue-400 py-5 px-10 text-white"
          >
            顧客一覧
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
