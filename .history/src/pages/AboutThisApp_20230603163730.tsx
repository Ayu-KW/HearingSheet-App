import React from "react";

export const AboutThisApp = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold">このアプリについて</h2>
        <p className="mt-2">本アプリの使い方や概要についてはこちらをご覧ください。</p>
      </div>
      <section className="m-auto my-8 lg:w-5/6">
        <h3 className="py-1 px-3 bg-cyan-50 border-cyan-500 border-y-2 border-solid text-xl">
          1.概要
        </h3>
        <p className="mt-2">このアプリケーションは、以下の技術で作成されています。</p>
        <table className="w-3/4 m-auto my-4 bg-white rounded-md ">
          <thead>
            <tr className="bg-blue-100 border-y border-y-blue-200">
              <th className="whitespace-nowrap w-1/3 p-2 border-r border-x-blue-300">
                技術カテゴリ
              </th>
              <th className="whitespace-nowrap p-2">技術名称</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
