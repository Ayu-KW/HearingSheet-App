import React from "react";

const CustomerCreation = () => {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-700">
          ヒアリング情報
          <br className="md:hidden" />
          <span className="md:inline-block">&nbsp;</span>
          新規登録画面
        </h2>
        <div className="text-left w-fit m-auto mt-4">
          <p>登録したい「顧客情報」や「ヒアリング情報」を記述してください。</p>
          <p>その際「必須」と書いてある項目は必ず記述してください。</p>
          <p>
            また内容修正については「顧客一覧」より該当顧客を選択し、修正を行なってください。
          </p>
        </div>
      </div>
    </main>
  );
};

export default CustomerCreation;
