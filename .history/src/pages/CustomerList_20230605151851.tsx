import React from "react";

const CustomerList = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto mt-2 p-3 border-double border border-blue-200 rounded-lg">
          <p>これまでに登録した顧客一覧リストです。</p>
          <p>リスト内情報の確認と編集はこちらから行えます。</p>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
