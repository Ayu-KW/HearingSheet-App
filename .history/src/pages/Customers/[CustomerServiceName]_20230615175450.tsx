import LinkButton from "@/components/common/Button/LinkButton";
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
      <p>Company Name: {clientPage.ClientComponyName}</p>
      <p>Service Name: {clientPage.ClientServiceName || "（未入力）"}</p>
      <p>制作側 担当者: {clientPage.InputRepPerson || "ー"}</p>
      <dl className="grid grid-cols-5 border border-blue-400">
        <dt className="col-span-1 bg-sky-500 text-white px-2 py-3">会社名</dt>
        <dd className="col-span-3 px-2 py-3">{clientPage.ClientComponyName}</dd>
        <dd className="col-span-1 p-2 flex">
          <LinkButton url={"/"} style={"bg-sky-300 py-1 px-2"}>
            編集
          </LinkButton>
          <LinkButton url={"/"} style={"bg-sky-300 py-1 px-2"}>
            編集
          </LinkButton>
        </dd>
      </dl>
    </main>
  );
};

export default CustomerServiceName;
