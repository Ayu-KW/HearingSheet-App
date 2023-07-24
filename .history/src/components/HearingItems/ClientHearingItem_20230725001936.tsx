import React from "react";

export const ClientHearingItem = ({ clientPage }: any) => {
  // 日本時間で表示する
  const formatDate = (dateString: string) => {
    if (!dateString) return "（未入力）";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };
  // 予算「¥100,000」で表記
  const formatBudget = (budget: string) => {
    const num = parseFloat(budget);
    return num.toLocaleString("ja-JP", {
      style: "currency",
      currency: "JPY",
    });
  };
  const HearingItem = [
    { title: "会社名", text: clientPage.ClientComponyName },
    { title: "サービス名", text: clientPage.ClientServiceName || "（未入力）" },
    { title: "業種", text: clientPage.ClientIndustries || "（未入力）" },
    { title: "企業サイド：担当者名", text: clientPage.ClientRepPerson || "（未入力）" },
    { title: "制作サイド：担当者名", text: clientPage.InputRepPerson2 || "ー" },
    {
      title: "ヒアリング日時",
      text: formatDate(clientPage.ClientHearingDay || "（未入力）"),
    },
    {
      title: "既存サイト：有無",
      text: clientPage.ExistingSite_Availability || "（未入力）",
    },
    { title: "既存サイト：悩み", text: clientPage.ExistingSite_Trouble || "ー" },
    { title: "既存サイト：ＵＲＬ", text: clientPage.ExistingSite_URL || "ー" },
    {
      title: "既存サイト：ページ構成",
      text: clientPage.ExistingSite_PageConfiguration || "ー",
    },
    { title: "既存サイト：備考", text: clientPage.ExistingSite_Note || "ー" },
    { title: "新規サイト：案件カテゴリ", text: clientPage.NewSite_Usage || "（未入力）" },
    { title: "新規サイト：目的", text: clientPage.NewSite_Objective || "（未入力）" },
    {
      title: "新規サイト：ページ構成",
      text: clientPage.NewSite_PageConfiguration || "（未入力）",
    },
    {
      title: "新規サイト：公開予定次期",
      text: clientPage.NewSite_OpeningPreferredDate || "（未入力）",
    },
    {
      title: "新規サイト：予算",
      text: formatBudget(clientPage.NewSite_Budget || "（未入力）"),
    },
    { title: "新規サイト：備考", text: clientPage.NewSite_Note || "ー" },
  ];
  return (
    <React.Fragment>
      {HearingItem.map((item, index) => {
        const dtClassName =
          index === 0
            ? "col-span-1 bg-cyan-600 text-white font-bold px-2 py-1 md:py-3"
            : item.title.startsWith("既存サイト：")
            ? "col-span-1 bg-cyan-800 text-white font-bold px-2 py-1 md:py-3 border-t border-t-gray-300 border-dashed"
            : "col-span-1 bg-cyan-600 text-white font-bold px-2 py-1 md:py-3 border-t border-t-gray-300 border-dashed";

        const ddClassName =
          index === 0
            ? "col-span-3 px-2 py-2 md:py-3"
            : "col-span-3 px-2 py-2 md:py-3 border-t border-t-gray-300 border-dashed";

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
