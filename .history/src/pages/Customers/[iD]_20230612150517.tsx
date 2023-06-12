import { getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

// NotionAPIデータ取得（「ID」がNotionデータベースの顧客情報・全て）
export const getStaticProps = async ({ params }: any) => {
  const clientPage = await getSingleClientData(params.iD);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

//
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "CUS-1" } }],
    fallback: "blocking",
  };
};

const iD = () => {
  return <div>Test</div>;
};

export default iD;
