import React from "react";

export const initialFields = [
  { label: "会社名", type: "text", value: "", placeholder: "テストで入れてます" },
  { label: "サービス名", type: "text", value: "", placeholder: "" },
  { label: "業種", type: "text", value: "", placeholder: "" },
  { label: "企業サイド：担当者名", type: "text", value: "", placeholder: "" },
  { label: "制作サイド：担当者名", type: "text", value: "", placeholder: "" },
  { label: "ヒアリング日時", type: "text", value: "", placeholder: "" },
  { label: "既存サイト：有無", type: "select", value: "", options: ["有", "無"] },
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
  const isFirstLabelGroup = (index: number) => {
    if (index >= 0 && index < fields.length) {
      const currentLabel = fields[index].label;
      if (currentLabel.startsWith("既存サイト：")) {
        for (let i = index - 1; i >= 0; i--) {
          const previousLabel = fields[i].label;
          if (
            previousLabel.startsWith("既存サイト：") ||
            previousLabel.startsWith("新規サイト：")
          ) {
            return false;
          }
        }
        return true;
      } else if (currentLabel.startsWith("新規サイト：")) {
        for (let i = index - 1; i >= 0; i--) {
          const previousLabel = fields[i].label;
          if (
            previousLabel.startsWith("新規サイト：") ||
            previousLabel.startsWith("既存サイト：")
          ) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  };

  return (
    <React.Fragment>
      {fields.map((field: any, index: number) => (
        <div key={index} className="grid grid-cols-3 w-[700px]">
          <div
            className={`col-span-3 ${
              isFirstLabelGroup(index) ? "border-t-2 border-gray-300" : ""
            }`}
          >
            <p className="w-fit whitespace-nowrap p-2">{field.label}</p>
            {(() => {
              switch (field.type) {
                case "text":
                  return (
                    <div className="relative">
                      <span className="absolute top-0 left-0 bg-gray-300 w-1 h-full"></span>
                      <input
                        type="text"
                        className="bg-gray-200 rounded-sm p-2 w-full overflow-hidden break-words"
                        style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                        value={field.value || ""}
                        placeholder={field.placeholder}
                        onChange={(event) => handleFieldChange(index, event)}
                      />
                    </div>
                  );
                case "select":
                  return (
                    <div className="relative">
                      <span className="absolute top-0 left-0 bg-gray-300 w-1 h-full"></span>
                      <select
                        className="bg-gray-200 rounded-sm p-2 w-full"
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
                    </div>
                  );
                case "url":
                  return (
                    <div className="relative">
                      <span className="absolute top-0 left-0 bg-gray-300 w-1 h-full"></span>
                      <input
                        type="url"
                        className="bg-gray-200 rounded-sm p-2 w-full break-words"
                        value={field.value || ""}
                        placeholder={field.placeholder}
                        onChange={(event) => handleFieldChange(index, event)}
                      />
                    </div>
                  );
                case "number":
                  return (
                    <div className="relative">
                      <span className="absolute top-0 left-0 bg-gray-300 w-1 h-full"></span>
                      <input
                        type="number"
                        className="bg-gray-200 rounded-sm p-2 w-full no-spin break-words"
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
                    </div>
                  );
                case "textarea":
                  return (
                    <div className="relative">
                      <span className="absolute top-0 left-0 bg-gray-300 w-1 h-full"></span>
                      <textarea
                        className="bg-gray-200 rounded-sm p-2 w-full break-words"
                        value={field.value || ""}
                        placeholder={field.placeholder}
                        onChange={(event) => handleFieldChange(index, event)}
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
