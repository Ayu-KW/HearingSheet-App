import { getAllClientData } from "@/lib/NotionAPI";
import React from "react";

export const getStaticProps = async ({ params }: any) => {
  // 上記で作成したgetSinglePost関数（Slugプロパティで判定、一致するものを取得）を実行
  // 引数としてURL（params）のslug
  const post = await getSinglePost(params.slug);
  // propsとして「URLのslugと一致するSlugプロパティの情報（post）」を返す
  return {
    props: {
      post,
    },
    // 60秒ごとに更新（再構築）
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const allClientData = await getAllClientData();
  const paths = allClientData.map(({ clientData }) => ({ params: { clientData } }));
  return {
    paths,
    fallback: "blocking",
  };
};

const CustomerTest = () => {
  return <div>Test</div>;
};

export default CustomerTest;
