import React from "react";

export const AboutThisApp = () => {
  return (
    <>
      <div className="bg-green-200 text-center">
        <h2 className="text-3xl font-bold">このアプリについて</h2>
        <p className="mt-2">本アプリの使い方や概要についてはこちらをご覧ください。</p>
      </div>
      <section className="my-8">
        <h3 className="text-xl">1.概要</h3>
        <p>このアプリケーションは、以下の技術で作成されています。</p>
        <table className="table-auto bg-gray-400 p-2">
          <thead>
            <tr>
              <th>技術カテゴリ</th>
              <th>技術名称</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
