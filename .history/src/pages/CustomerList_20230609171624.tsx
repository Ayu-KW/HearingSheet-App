import LinkButton from "@/components/common/Button/LinkButton";
import { getAllClientData } from "@/lib/NotionAPI";
import React, { ReactNode } from "react";

// NotionAPIデータ取得（Notionデータベースの顧客情報・全て）
export const getStaticProps = async () => {
  const allClientData = await getAllClientData();
  return {
    props: {
      allClientData,
    },
    revalidate: 60 * 60,
  };
};

type ClientData = {
  ClientIdPrefix: string;
  ClientIdNumber: number;
  ClientComponyName: string;
  ClientServiceName: string;
  ClientHearingDay: string;
  InputRepPerson: string;
};

// allClientDataの型を何で受け取るか調べる
const CustomerList = (allClientData: ClientData[]) => {
  console.log(allClientData[1]);
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
      <table className="table-fixed w-auto m-auto border border-blue-400">
        <thead className="bg-sky-600 text-white">
          <tr className="border-b border-b-blue-400">
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r border-r-blue-400 p-2 text-center">1</td>
            <td className="border-r border-r-blue-400 p-2">
              くま株式会社／Kuma Engineering Service
            </td>
            <td className="border-r border-r-blue-400 p-2 text-center">クマさん</td>
            <td className="border-r border-r-blue-400 p-2 text-center">2023/6/5(月)</td>
            <td className="border-r border-r-blue-400 p-2 text-center">
              <LinkButton
                style="bg-teal-500 hover:bg-teal-300 text-white py-1 px-2"
                url={"/CustomerDetail"}
              >
                詳細
              </LinkButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </main>
  );
};

export default CustomerList;
