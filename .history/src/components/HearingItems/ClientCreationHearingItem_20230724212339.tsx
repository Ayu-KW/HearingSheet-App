import React from "react";

export const initialFields = [
  {
    label: "会社名",
    type: "text",
    value: "",
    placeholder: "例：〇〇株式会社",
    description: "会社名を入力（個人事業主の場合は「個人事業主」）",
  },
  {
    label: "サービス名",
    type: "text",
    value: "",
    placeholder: "例：〇〇サービス",
    description: "サービス名を入力（無ければ空白にする）",
  },
  {
    label: "業種",
    type: "text",
    value: "",
    placeholder: "例：〇〇業",
    description: "該当する業界を入力",
  },
  {
    label: "企業サイド：担当者名",
    type: "text",
    value: "",
    placeholder: "例：山田 太郎",
    description: "ヒアリングさせてもらえる方の名前を入力",
  },
  {
    label: "制作サイド：担当者名",
    type: "text",
    value: "",
    placeholder: "例：田中 二郎",
    description: "ヒアリングを行った者の名前を入力",
  },
  {
    label: "ヒアリング日時",
    type: "datetime-local",
    value: "",
    placeholder: "",
    description: "ヒアリングの日付を入力",
  },
  {
    label: "既存サイト：有無",
    type: "select",
    value: "",
    options: ["有", "無", "その他"],
    description: "既存サイトの有無を選択（その他の場合は、備考欄に追記）",
  },
  {
    label: "既存サイト：悩み",
    type: "textarea",
    value: "",
    placeholder: "例：問い合わせが来ない",
    description: "既存サイトでの悩みを入力",
  },
  {
    label: "既存サイト：ＵＲＬ",
    type: "url",
    value: "",
    placeholder: "例：sample.co.jp",
    description: "既存サイトのURLを入力",
  },
  {
    label: "既存サイト：ページ構成",
    type: "textarea",
    value: "",
    placeholder: "例：トップページ＋下層ページ２ｐ（会社概要、問い合わせ）",
    description: "既存サイトのページ構成を入力",
  },
  {
    label: "既存サイト：備考",
    type: "textarea",
    value: "",
    placeholder: "",
    description: "既存サイトに関する備考を入力",
  },
  {
    label: "新規サイト：案件カテゴリ",
    type: "select",
    value: "",
    options: ["新サイト作成", "リニューアル", "既存サイト修正", "その他"],
    description: "新規サイトの案件カテゴリを選択（その他の場合は、備考欄に追記）",
  },
  {
    label: "新規サイト：目的",
    type: "textarea",
    value: "",
    placeholder: "例：より多くのお客様に見てもらいたい",
    description: "新規サイトの目的を入力",
  },
  {
    label: "新規サイト：ページ構成",
    type: "textarea",
    value: "",
    placeholder:
      "トップページ＋下層ページ５ｐ（会社概要、サービス内容、概要、問い合わせ）",
    description: "新規サイトのページ構成を入力",
  },
  {
    label: "新規サイト：公開予定次期",
    type: "text",
    value: "",
    placeholder: "例：２０２３年７月頃までに公開したい",
    description: "新規サイトの公開予定日を入力",
  },
  {
    label: "新規サイト：予算",
    type: "number",
    value: "",
    placeholder: "例：500000",
    description: "新規サイトの予算を入力（半角数字のみ、カンマなし）",
  },
  {
    label: "新規サイト：備考",
    type: "textarea",
    value: "",
    placeholder: "",
    description: "新規サイトに関する備考を入力してください。",
  },
];

export const ClientCreationHearingItem = ({ fields, handleFieldChange }: any) => {
  if (isSent) {
    return (
      <div>
        <p className="text-green-600 font-bold mt-4">送信完了</p>
      </div>
    );
  }
  return (
    <React.Fragment>
      {fields.map((field: any, index: number) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <h3 className="px-2 text-xl font-bold border-b border-b-gray-400 w-auto mt-5">
              基本情報
            </h3>
          )}
          {index === 6 && (
            <h3 className="px-2 text-xl font-bold border-b border-b-gray-400 w-auto mt-5">
              既存サイト
            </h3>
          )}
          {index === 11 && (
            <h3 className="px-2 text-xl font-bold border-b border-b-gray-400 w-auto mt-5">
              新規サイト
            </h3>
          )}
          <div className="lg:grid grid-cols-3 w-full lg:w-[700px] p-2">
            <p className="w-fit whitespace-nowrap col-span-1 lg:pt-8">{field.label}</p>
            {(() => {
              switch (field.type) {
                case "text":
                case "url":
                case "number":
                case "datetime-local":
                  return (
                    <div
                      className={`w-full col-span-2 before:content-[${field.description}] before:text-gray-400 before:text-xs`}
                    >
                      {field.description && (
                        <span className="text-gray-400 text-xs">{field.description}</span>
                      )}
                      {field.type === "textarea" ? (
                        <textarea
                          className="bg-gray-200 rounded-sm p-2 w-full col-span-2 break-words"
                          value={field.value || ""}
                          placeholder={field.placeholder}
                          onChange={(event) => handleFieldChange(index, event)}
                        />
                      ) : (
                        <input
                          type={field.type}
                          className={`bg-gray-200 rounded-sm p-2 w-full overflow-hidden break-words${
                            field.type === "number" ? " no-spin" : ""
                          }`}
                          style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                          value={field.value || ""}
                          placeholder={field.placeholder}
                          onChange={(event) => handleFieldChange(index, event)}
                        />
                      )}
                    </div>
                  );
                case "textarea":
                  return (
                    <div
                      className={`w-full col-span-2 before:content-[${field.description}] before:text-gray-400 before:text-xs`}
                    >
                      {field.description && (
                        <span className="text-gray-400 text-xs">{field.description}</span>
                      )}
                      {field.type === "textarea" ? (
                        <textarea
                          className="bg-gray-200 rounded-sm p-2 w-full col-span-2 break-words min-h-[120px]"
                          value={field.value || ""}
                          placeholder={field.placeholder}
                          onChange={(event) => handleFieldChange(index, event)}
                        />
                      ) : (
                        <input
                          type={field.type}
                          className={`bg-gray-200 rounded-sm p-2 w-full overflow-hidden break-words${
                            field.type === "number" ? " no-spin" : ""
                          }`}
                          style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                          value={field.value || ""}
                          placeholder={field.placeholder}
                          onChange={(event) => handleFieldChange(index, event)}
                        />
                      )}
                    </div>
                  );
                case "select":
                  return (
                    <div
                      className={`w-full col-span-2 before:content-[${field.description}] before:text-gray-400 before:text-xs`}
                    >
                      {field.description && (
                        <span className="text-gray-400 text-xs">{field.description}</span>
                      )}
                      <select
                        className="bg-gray-200 rounded-sm p-2 w-full col-span-2"
                        value={field.value || ""}
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
                default:
                  return null;
              }
            })()}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
