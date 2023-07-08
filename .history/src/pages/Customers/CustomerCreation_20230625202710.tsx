import React from "react";

const CustomerCreation = () => {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-700">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto mt-4">
          <p className="">これまでに登録した顧客一覧リストです。</p>
          <p>
            リスト内データの<span className="">「確認と編集」</span>
            はこちらから行えます。
          </p>
          <p>
            なおデータの
            <span className="">「削除については直接Notionデータベース」</span>
            から行ってください。
          </p>
        </div>
      </div>
      <p>顧客新規登録・CustomerCreationコンポーネント</p>
    </main>
  );
};

export default CustomerCreation;
