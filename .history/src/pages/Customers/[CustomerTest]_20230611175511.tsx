import React from "react";

export const getStaticPaths = async () => {
  // getAllPosts（１つずつの記事データ全体を取得）、非同期処理を行う（他の処理と同時進行）
  const allPosts = await getAllPosts();
  // 記事１つずつのslugを取得して、paramsのslugとして出力されるようにする
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
  return {
    // pathsとして設定（paths:pathsの記述を省略形式で記述）
    paths,
    fallback: "blocking",
  };
};

const CustomerTest = () => {
  return <div>Test</div>;
};

export default CustomerTest;
