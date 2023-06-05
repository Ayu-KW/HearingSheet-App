import React from "react";

const CustomerList = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto mt-2 p-3 border border-blue-200 rounded-lg">
          <p>これまでに登録した顧客一覧リストです。</p>
          <p>
            リスト内データの<span className="font-bold text-sky-700">確認と編集</span>
            はこちらから行えます。
          </p>
          <p>なお、データの削除については</p>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
