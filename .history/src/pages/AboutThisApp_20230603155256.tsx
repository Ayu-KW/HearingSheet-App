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
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
