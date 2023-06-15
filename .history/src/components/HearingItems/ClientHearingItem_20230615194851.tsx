import React from "react";

export const ClientHearingItem = ({ clientPage }: any) => {
  const HearingItem = [
    { title: "会社名", text: clientPage.ClientComponyName },
    { title: "サービス名", text: clientPage.ClientServiceName || "（未入力）" },
    { title: "業種", text: "データ未設定" },
    { title: "最終ヒアリング日時", text: "データ未設定" },
    { title: "企業サイド：担当者名", text: "データ未設定" },
    { title: "制作サイド：担当者名", text: clientPage.InputRepPerson || "ー" },
    { title: "既存サイト：有無", text: "データ未設定" },
    { title: "既存サイト：悩み", text: "データ未設定" },
    { title: "既存サイト：ＵＲＬ", text: "データ未設定" },
    { title: "既存サイト：ページ構成", text: "データ未設定" },
    { title: "既存サイト：構成", text: "データ未設定" },
    { title: "既存サイト：備考", text: "データ未設定" },
    { title: "新規サイト：案件カテゴリ", text: "データ未設定" },
    { title: "新規サイト：ページ構成", text: "データ未設定" },
    { title: "新規サイト：公開予定次期", text: "データ未設定" },
  ];
  return (
    <React.Fragment>
      {HearingItem.map((item, index) => {
        const dtClassName =
          index === 0
            ? "col-span-1 bg-cyan-600 text-white font-bold px-2 py-3"
            : "col-span-1 bg-cyan-600 text-white font-bold px-2 py-3 border-t border-t-gray-300 border-dashed";
        const ddClassName =
          index === 0
            ? "col-span-3 px-2 py-3"
            : "col-span-3 px-2 py-3 border-t border-t-gray-300 border-dashed";
        return (
          <React.Fragment key={index}>
            <dt className={dtClassName}>{item.title}</dt>
            <dd className={ddClassName}>{item.text}</dd>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
