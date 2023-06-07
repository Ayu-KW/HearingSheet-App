import LinkButton from "@/components/common/Button/LinkButton";
import AboutThisApp from "./AboutThisApp";
import CustomerList from "./CustomerList";

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
        <div>
          <LinkButton url={"/"} style="">
            新規登録
          </LinkButton>
        </div>
      </section>
    </main>
  );
}
