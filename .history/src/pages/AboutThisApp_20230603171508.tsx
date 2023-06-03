import React from "react";

export const AboutThisApp = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold">このアプリについて</h2>
        <p className="mt-2">本アプリの使い方や概要についてはこちらをご覧ください。</p>
      </div>
      <section className="m-auto my-8 lg:w-5/6 leading-loose">
        <h3 className="mb-4 py-1 px-3 bg-cyan-50 text-xl border-cyan-500 border-y-4 border-double">
          1.概要
        </h3>
        <p className="">このアプリケーションは、以下の技術で作成されています。</p>
        <table className="w-3/4 bg-white rounded-md border-y border-y-blue-200">
          <thead>
            <tr className="bg-blue-50 border-b border-b-blue-100">
              <th className="whitespace-nowrap w-1/3 p-2 border-r border-r-gray-300 border-dashed">
                技術カテゴリ
              </th>
              <th className="whitespace-nowrap p-2">技術名称</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-r border-r-gray-300 border-dashed ">1</td>
              <td className="p-2">2</td>
            </tr>
            <tr className="border-b border-b-blue-100">
              <td className="p-2 border-r border-r-gray-300 border-dashed">1</td>
              <td className="p-2">2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
