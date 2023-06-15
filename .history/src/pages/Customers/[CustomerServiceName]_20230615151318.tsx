import { getAllClientData, getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

// 指定されたパラメーターに対応するデータを返す
// export const getStaticProps = async ({ params }: any) => {
//   const [companyName, serviceName] = params.CustomerServiceName.split("_");
//   const clientPage = await getSingleClientData(companyName, serviceName);
//   return {
//     props: {
//       clientPage,
//     },
//     revalidate: 60,
//   };
// };

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

const CustomerServiceName = ({ clientPage }: any) => {
  console.log(clientPage);
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <p>Company Name: {clientPage.ClientComponyName}</p>
      <p>Service Name: {clientPage.ClientServiceName}</p>
      <p>制作側 担当者: {clientPage.InputRepPerson}</p>
    </main>
  );
};

export default CustomerServiceName;
