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
              <td className="p-2 border-r border-r-gray-300 border-dashed">
                フロントサイド
              </td>
              <td className="p-2">
                <p>HTML/CSS（Tailwind.CSS）</p>
                <p>JavaScript（Next.js）</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-r border-r-gray-300 border-dashed border-t border-t-blue-100">
                データベース
                <br />
                その他
              </td>
              <td className="p-2 border-t border-t-blue-100 border-dashed">
                Notion（NotionAPI・notion/client）
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="m-auto my-8 lg:w-5/6 leading-loose">
        <h3 className="mb-4 py-1 px-3 bg-cyan-50 text-xl border-cyan-500 border-y-4 border-double">
          2.使い方
        </h3>
        <p>このアプリケーションは、以下の技術で作成されています。</p>
      </section>
      <section className="m-auto my-8 lg:w-5/6 leading-loose">
        <h3 className="mb-4 py-1 px-3 bg-cyan-50 text-xl border-cyan-500 border-y-4 border-double">
          3.製作者メッセージ
        </h3>
        <div className="">
          <p>
            初めまして。製作者の「かわばたあゆ（Kawabata
            Ayu）」と申します。名古屋在住、27歳の主婦です。
          </p>
          <p>
            2023年6月現在ではエンジニア転職（Web系）を目指しながら独学で学習しており、8月以降から本格的に転職活動を行おうとしております。
          </p>
          <p></p>
        </div>
        <div>
          <h4 className="text-lg w-fit px-1 before:content-[''] before:w-3 before: text-slate-600">
            本アプリを制作した背景
          </h4>
          <p>
            このヒアリングシートアプリを制作した背景として「駆け出しのWebサイト制作の大変さ」を味わった経験があった為です。
          </p>
        </div>
      </section>
    </>
  );
};
