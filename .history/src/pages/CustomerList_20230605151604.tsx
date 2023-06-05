import React from "react";

const CustomerList = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto border-2 border-teal-200">
          <p className="mt-2">これまでに登録した顧客一覧リストです。</p>
          <p className="">リスト内情報の確認と編集はこちらから行えます。</p>
        </div>
      </div>
    </>
  );
};

export default CustomerList;
