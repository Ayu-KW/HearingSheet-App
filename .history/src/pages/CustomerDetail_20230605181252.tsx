import React from "react";

const CustomerDetail = () => {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">顧客詳細</h2>
        <p className="">テスト株式会社/テストサービス</p>
        <div className="text-left w-fit m-auto mt-4">
          <p></p>
          <p>
            なおデータの
            <span className="font-bold text-orange-400">
              削除については直接Notionデータベース
            </span>
            から行う。
          </p>
        </div>
      </div>
    </main>
  );
};

export default CustomerDetail;
