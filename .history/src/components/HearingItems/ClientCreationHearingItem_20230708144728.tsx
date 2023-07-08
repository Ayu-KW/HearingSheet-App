import React from "react";

export const initialFields = [
  { label: "会社名", type: "text", value: "", placeholder: "テストで入れてます" },
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
  { label: "既存サイト：備考", type: "textarea", value: "", placeholder: "" },
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
        <div key={index} className="grid grid-cols-3 w-[700px]">
          <p className="w-fit whitespace-nowrap col-span-1 p-2">
            {field.label.startsWith("既存サイト：") ? (
              <span className="text-red-600">{field.label}</span>
            ) : field.label.startsWith("新規サイト：") ? (
              <span className="text-blue-600">{field.label}</span>
            ) : (
              field.label
            )}
          </p>
          {(() => {
            switch (field.type) {
              case "text":
                return (
                  <input
                    type="text"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2 overflow-hidden break-words"
                    style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
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
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2 break-words"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              case "number":
                return (
                  <input
                    type="number"
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2 no-spin break-words"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                    onFocus={(e) =>
                      e.target.addEventListener(
                        "wheel",
                        (e) => {
                          e.preventDefault();
                        },
                        { passive: false }
                      )
                    }
                  />
                );
              case "textarea":
                return (
                  <textarea
                    className="bg-gray-200 rounded-sm p-2 w-full col-span-2 break-words"
                    value={field.value || ""}
                    placeholder={field.placeholder}
                    onChange={(event) => handleFieldChange(index, event)}
                  />
                );
              default:
                return null;
            }
          })()}
          {(index === 5 || index === 6 || index === 10) && (
            <div className="border-t border-gray-300 col-span-3"></div>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};
