import { getAllClientData } from "@/lib/NotionAPI";
import React from "react";

// getStaticPaths関数：動的なルート（Dynamic Routes）を持つページのパス（URL）を指定するためのもの
export const getStaticPaths = async () => {
  return {
    // paths（パス）の一覧を設定
    // paramsのslugとして、NotionのSlugプロパティを記述
    paths: [
      { params: { slug: "post-1" } },
      { params: { slug: "post-2" } },
      { params: { slug: "post-3" } },
    ],
    // fallback：存在しないページへのアクセスがあったときにどうするか？（上記のpathsで指定した以外のページを表示しようとしたときに）
    // "true"の場合：情報がなくてもクライアント側で新しくページを作ってしまう（表示できるもののみ表示される＝中途半端なHTML）
    // "false"の場合：「404」が表示される
    // "blocking"の場合：サーバー側で新しくページが作られるまで何も表示されない（ページが作られるまで待つ必要がある）
    fallback: "blocking",
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
