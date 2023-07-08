import React from "react";

export const initialFields = [
  {
    label: "会社名",
    type: "text",
    value: "",
    placeholder: "個人事業主の場合は「個人事業主」",
    description: "会社名を入力してください。",
  },
  {
    label: "サービス名",
    type: "text",
    value: "",
    placeholder: "無ければ空白にする",
    description: "サービス名を入力してください。",
  },
  {
    label: "業種",
    type: "text",
    value: "",
    placeholder: "例：リフォーム工事業",
    description: "業種を入力してください。",
  },
  {
    label: "企業サイド：担当者名",
    type: "text",
    value: "",
    placeholder: "ヒアリングさせてもらえる方の名前",
    description: "企業サイドの担当者名を入力してください。",
  },
  {
    label: "制作サイド：担当者名",
    type: "text",
    value: "",
    placeholder: "ヒアリングを担当したの名前",
    description: "制作サイドの担当者名を入力してください。",
  },
  {
    label: "ヒアリング日時",
    type: "text",
    value: "",
    placeholder: "初回ヒアリング日時",
    description: "ヒアリングの日時を入力してください。",
  },
  {
    label: "既存サイト：有無",
    type: "select",
    value: "",
    options: ["有", "無"],
    description: "既存サイトの有無を選択してください。",
  },
  {
    label: "既存サイト：悩み",
    type: "text",
    value: "",
    placeholder: "",
    description: "既存サイトの悩みを入力してください。",
  },
  {
    label: "既存サイト：ＵＲＬ",
    type: "url",
    value: "",
    placeholder: "",
    description: "既存サイトのURLを入力してください。",
  },
  {
    label: "既存サイト：ページ構成",
    type: "text",
    value: "",
    placeholder: "",
    description: "既存サイトのページ構成を入力してください。",
  },
  {
    label: "既存サイト：備考",
    type: "textarea",
    value: "",
    placeholder: "",
    description: "既存サイトに関する備考を入力してください。",
  },
  {
    label: "新規サイト：案件カテゴリ",
    type: "select",
    value: "",
    options: ["新サイト作成", "リニューアル", "既存サイト修正", "その他"],
    description: "新規サイトの案件カテゴリを選択してください。",
  },
  {
    label: "新規サイト：目的",
    type: "text",
    value: "",
    placeholder: "",
    description: "新規サイトの目的を入力してください。",
  },
  {
    label: "新規サイト：ページ構成",
    type: "text",
    value: "",
    placeholder: "",
    description: "新規サイトのページ構成を入力してください。",
  },
  {
    label: "新規サイト：公開予定次期",
    type: "text",
    value: "",
    placeholder: "",
    description: "新規サイトの公開予定日を入力してください。",
  },
  {
    label: "新規サイト：予算",
    type: "number",
    value: "",
    placeholder: "",
    description: "新規サイトの予算を入力してください。",
  },
  {
    label: "新規サイト：備考",
    type: "text",
    value: "",
    placeholder: "",
    description: "新規サイトに関する備考を入力してください。",
  },
];

export const ClientCreationHearingItem = ({ fields, handleFieldChange }: any) => {
  return (
    <React.Fragment>
      {fields.map((field: any, index: number) => (
        <div key={index} className="grid grid-cols-3 w-[700px]">
          <p className="w-fit whitespace-nowrap col-span-1 p-2">{field.label}</p>
          {(() => {
            switch (field.type) {
              case "text":
                return (
                  <div
                    className={`p-2 w-full col-span-2 before:content-[${field.description}] before:text-gray-400 before:text-xs before:top-0`}
                  >
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
          {(index === 5 || index === 10) && (
            <span className="border-t border-gray-300 col-span-3 mt-5 mb-3"></span>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};
