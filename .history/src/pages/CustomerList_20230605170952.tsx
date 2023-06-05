import LinkButton from "@/components/common/Button/LinkButton";
import React from "react";

const CustomerList = () => {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">顧客一覧リスト</h2>
        <div className="text-left w-fit m-auto mt-4">
          <p className="">これまでに登録した顧客一覧リストです。</p>
          <p>
            リスト内データの<span className="font-bold text-sky-600">確認と編集</span>
            はこちらから行えます。
          </p>
          <p>
            なおデータの
            <span className="font-bold text-orange-400">
              削除については直接Notionデータベース
            </span>
            から行う。
          </p>
        </div>
      </div>
      <table className="table-fixed w-auto m-auto border border-blue-400">
        {/* <tr className="border-b border-b-blue-400 text-center">
          <th className="border-r border-r-blue-400 p-2 text-center">No</th>
          <th className="border-r border-r-blue-400 p-2 w-1/2 text-center">
            会社名／サービス名
          </th>
          <th className="border-r border-r-blue-400 p-2 text-center">
            ヒアリング
            <br />
            担当者名
          </th>
          <th className="border-r border-r-blue-400 p-2 text-center">
            ヒアリング
            <br />
            実施日
          </th>
          <th className="border-r border-r-blue-400 p-2 text-center"></th>
        </tr> */}
        {/* <tr>
          <td className="border-r border-r-blue-400 p-2 text-center">1</td>
          <td className="border-r border-r-blue-400 p-2">
            テスト株式会社／テストサービス
          </td>
          <td className="border-r border-r-blue-400 p-2 text-center">テストさん</td>
          <td className="border-r border-r-blue-400 p-2 text-center">2023/6/5(月)</td>
          <td className="border-r border-r-blue-400 p-2 text-center">
            <LinkButton style="bg-blue-600 hover:bg-blue-400 text-white">詳細</LinkButton>
          </td>
        </tr> */}
      </table>
    </main>
  );
};

export default CustomerList;
