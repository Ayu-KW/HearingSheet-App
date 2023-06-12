import { getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

// NotionAPIデータ取得（「ID」というプロパティ名のみ）
export const getStaticProps = async ({ params }: any) => {
  const { companyName, serviceName } = params;
  const clientPage = await getSingleClientData(companyName, serviceName);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

// 動的パスを実装
export const getStaticPaths = async () => {
  const allClientData = await getAllClientData();
  return {
    paths: [{ params: { iD: "CUS-1" } }],
    fallback: "blocking",
  };
};

const iD = () => {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      <p></p>
      Test
    </main>
  );
};

export default iD;
