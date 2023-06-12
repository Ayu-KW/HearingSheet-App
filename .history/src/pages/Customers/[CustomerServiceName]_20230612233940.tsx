import { getAllClientData, getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

// NotionAPIデータ取得（「ID」というプロパティ名のみ）
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

// 動的パスを実装
// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { iD: "CUS-1" } }],
//     fallback: "blocking",
//   };
// };
// 動的パスを実装
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

const CustomerServiceName = ({ clientPage }: Object) => {
  console.log(clientPage);
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <p>Company Name: {clientPage.CompanyName}</p>
      <p>Service Name: {clientPage.ServiceName}</p>
    </main>
  );
};

export default CustomerServiceName;
