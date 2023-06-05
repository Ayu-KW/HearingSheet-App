import React from "react";

const CustomerList = () => {
  return (
    <>
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto mt-4">
          <p className="">これまでに登録した顧客一覧リストです。</p>
          <p>
            リスト内データの<span className="font-bold text-sky-600">確認と編集</span>
            はこちらから行えます。
          </p>
          <p>
            なおデータの
            <span className="font-bold text-rose-500">
              削除については直接Notionデータベース
            </span>
            から行う。
          </p>
        </div>
      </div>
      <section>
        <table className="table-fixed w-auto m-auto border border-blue-400">
          <tr className="border-b border-b-blue-400 text-center">
            <th className="border-r border-r-blue-400 p-2">No</th>
            <th className="border-r border-r-blue-400 p-2 w-2/5">会社名／サービス名</th>
            <th className="border-r border-r-blue-400 p-2">担当者名</th>
            <th className="border-r border-r-blue-400 p-2">ヒアリング実施日</th>
            <th className="border-r border-r-blue-400 p-2">果物</th>
          </tr>
          <tr>
            <td className="border-r border-r-blue-400 p-2">1</td>
            <td className="border-r border-r-blue-400 p-2">イチゴ</td>
            <td className="border-r border-r-blue-400 p-2">イチゴ</td>
            <td className="border-r border-r-blue-400 p-2">イチゴ</td>
          </tr>
        </table>
      </section>
    </>
  );
};

export default CustomerList;
