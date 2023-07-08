import React from "react";

export const ClientHearingItem = ({ clientPage }: any) => {
  const HearingItem = [
    { title: "会社名", text: clientPage.ClientComponyName },
    { title: "サービス名", text: clientPage.ClientServiceName || "（未入力）" },
    { title: "業種", text: clientPage.ClientIndustries || "（未入力）" },
    { title: "企業サイド：担当者名", text: clientPage.ClientRepPerson || "（未入力）" },
    { title: "制作サイド：担当者名", text: clientPage.InputRepPerson || "ー" },
    { title: "ヒアリング日時", text: clientPage.ClientHearingDay || "（未入力）" },
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
    { title: "新規サイト：予算", text: clientPage.NewSite_Budget || "（未入力）" },
    { title: "新規サイト：備考", text: clientPage.NewSite_Note || "ー" },
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

export const ClientCreationHearingItem = (handleFieldChange: any) => {
  const HearingItem = [
    { label: "会社名", type: "text", value: "" },
    { label: "サービス名", type: "text", value: "" },
    { label: "業種", type: "text", value: "" },
    { label: "企業サイド：担当者名", type: "text", value: "" },
    { label: "制作サイド：担当者名", type: "text", value: "" },
    { label: "ヒアリング日時", type: "text", value: "" },
    { label: "既存サイト：有無", type: "select", value: "", options: ["有", "無"] },
    { label: "既存サイト：悩み", type: "text", value: "" },
    { label: "既存サイト：ＵＲＬ", type: "text", value: "" },
    { label: "既存サイト：ページ構成", type: "text", value: "" },
    { label: "既存サイト：備考", type: "text", value: "" },
    { label: "新規サイト：案件カテゴリ", type: "text", value: "" },
    { label: "新規サイト：目的", type: "text", value: "" },
    { label: "新規サイト：ページ構成", type: "text", value: "" },
    { label: "新規サイト：公開予定次期", type: "text", value: "" },
    { label: "新規サイト：予算", type: "text", value: "" },
    { label: "新規サイト：備考", type: "text", value: "" },
  ];
  return (
    <React.Fragment>
      {HearingItem.map((field, index) => (
        <div key={index} className="grid grid-cols-3 items-center w-[700px]">
          <p className="w-fit whitespace-nowrap col-span-1">{field.label}</p>
          {field.type === "text" ? (
            <input
              type="text"
              className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
              value={field.value || ""}
              onChange={(event) => handleFieldChange(index, event)}
            />
          ) : field.type === "select" ? (
            <select
              className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
              value={field.value || ""}
              onChange={(event) => handleFieldChange(index, event)}
            >
              <option value="">選択してください</option>
              {field.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      ))}
    </React.Fragment>
  );
};
