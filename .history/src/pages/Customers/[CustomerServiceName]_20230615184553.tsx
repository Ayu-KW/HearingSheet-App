import { ClientHearingItem } from "@/components/HearingItems/ClientHearingItem";
import { getAllClientData, getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

// ページコンポーネントに渡す情報（元データ）
export const getStaticPaths = async () => {
  const allClientData = await getAllClientData();
  const paths = allClientData.map(({ CompanyName, ServiceName }: any) => {
    const slug = `${CompanyName}_${ServiceName}`;
    return {
      params: {
        CustomerServiceName: slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

// 指定されたパラメーターに対応するデータを返す
export const getStaticProps = async ({ params }: any) => {
  const [companyName, serviceName] = params.CustomerServiceName.split("_");
  const clientPage = await getSingleClientData(companyName, serviceName);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

const CustomerServiceName = ({ clientPage }: any) => {
  console.log(clientPage);
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-700">顧客詳細ページ</h2>
        <p className="text-2xl mt-2">
          {clientPage.ClientComponyName} / {clientPage.ClientServiceName || "（未入力）"}
        </p>
      </div>
      <dl className="grid grid-cols-4 border border-cyan-600">
        <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3">会社名</dt>
        <dd className="col-span-3 px-2 py-3">{clientPage.ClientComponyName}</dd>
        <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed">
          サービス名
        </dt>
        <dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
          {clientPage.ClientServiceName || "（未入力）"}
        </dd>
        <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed">
          業種
        </dt>
        <dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
          {}
        </dd>
        <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed">
          企業サイド：担当者名
        </dt>
        <dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
          {}
        </dd>
        <dt className="col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed">
          制作サイド：担当者名
        </dt>
        <dd className="col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed">
          {}
        </dd>
      </dl>
      <dl className="grid grid-cols-4 border border-cyan-600 mt-5">
        <ClientHearingItem />
      </dl>
    </main>
  );
};

export default CustomerServiceName;
