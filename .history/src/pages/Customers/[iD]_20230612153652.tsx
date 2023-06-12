import { getSingleClientData } from "@/lib/NotionAPI";
import React from "react";

// NotionAPIデータ取得（「ID」というプロパティ名のみ）
export const getStaticProps = async ({ params }: any) => {
  const clientPage = await getSingleClientData(params.iD);
  return {
    props: {
      clientPage,
    },
    revalidate: 60,
  };
};

// 動的パスを実装
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { iD: "CUS-1" } }],
    fallback: "blocking",
  };
};

const iD = () => {
  return (
    <div>
      <p></p>
      Test
    </div>
  );
};

export default iD;
