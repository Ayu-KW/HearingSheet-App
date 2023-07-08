import React from "react";

const CustomerCreation = () => {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-700">
          ヒアリング情報
          <br className="md:hidden" />
          <span className="md:inline-block"> </span>
          新規登録画面
        </h2>
        <div className="text-left w-fit m-auto mt-4">
          <p className="">登録したい顧客情報・ヒアリング情報</p>
          <p className="">「必須」と書いてある項目は必ず記述してください。</p>
          <p className="">
            また内容修正については「顧客一覧」より該当顧客を選択し、修正を行なってください。
          </p>
        </div>
      </div>
    </main>
  );
};

export default CustomerCreation;
