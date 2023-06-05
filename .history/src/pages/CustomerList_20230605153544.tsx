import React from "react";

const CustomerList = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto mt-2 py-3 px-6 border border-blue-200 rounded-lg">
          <p>これまでに登録した顧客一覧リストです。</p>
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
        <table className="border-solid border-blue-200">
          <tr>
            <th>果物</th>
            <th>味</th>
          </tr>
          <tr>
            <td>イチゴ</td>
            <td>甘い</td>
          </tr>
        </table>
      </section>
    </>
  );
};

export default CustomerList;
