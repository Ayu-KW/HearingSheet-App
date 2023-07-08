import React from "react";

export const initialFields = [
  { label: "会社名", type: "text", value: "", placeholder: "会社名を入力" },
  { label: "サービス名", type: "text", value: "", placeholder: "" },
  { label: "業種", type: "text", value: "", placeholder: "" },
  { label: "企業サイド：担当者名", type: "text", value: "", placeholder: "" },
  { label: "制作サイド：担当者名", type: "text", value: "", placeholder: "" },
  { label: "ヒアリング日時", type: "text", value: "", placeholder: "" },
  {
    label: "既存サイト：有無",
    type: "select",
    value: "",
    options: ["有", "無"],
  },
  { label: "既存サイト：悩み", type: "text", value: "", placeholder: "" },
  { label: "既存サイト：ＵＲＬ", type: "url", value: "", placeholder: "" },
  { label: "既存サイト：ページ構成", type: "text", value: "", placeholder: "" },
  { label: "既存サイト：備考", type: "text", value: "", placeholder: "" },
  {
    label: "新規サイト：案件カテゴリ",
    type: "select",
    value: "",
    options: ["新サイト作成", "リニューアル", "既存サイト修正", "その他"],
  },
  { label: "新規サイト：目的", type: "text", value: "", placeholder: "" },
  { label: "新規サイト：ページ構成", type: "text", value: "", placeholder: "" },
  { label: "新規サイト：公開予定次期", type: "text", value: "", placeholder: "" },
  { label: "新規サイト：予算", type: "number", value: "", placeholder: "" },
  { label: "新規サイト：備考", type: "text", value: "", placeholder: "" },
];

export const ClientCreationHearingItem = ({ fields, handleFieldChange }: any) => {
  return (
    <React.Fragment>
      {fields.map((field: any, index: number) => (
        <div key={index} className="grid grid-cols-3 items-center w-[700px]">
          <p className="w-fit whitespace-nowrap col-span-1">{field.label}</p>
          {(() => {
            switch (field.type) {
              case "text":
                return (
                  <input
                    type="text"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              case "select":
                return (
                  <select
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                  >
                    <option value="">選択してください</option>
                    {field.options?.map((option: any, optionIndex: number) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                );
              case "url":
                return (
                  <input
                    type="url"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              case "number":
                return (
                  <input
                    type="number"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
      ))}
    </React.Fragment>
  );
};
