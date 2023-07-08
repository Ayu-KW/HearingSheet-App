import { ClientCreationHearingItem } from "@/components/HearingItems/ClientCreationHearingItem";
import React, { useState } from "react";

const CustomerCreation = () => {
  const [fields, setFields] = useState([
    { label: "会社名", type: "text", value: "" },
    { label: "サービス名", type: "text", value: "" },
    { label: "業種", type: "text", value: "" },
    { label: "企業サイド：担当者名", type: "text", value: "" },
    { label: "制作サイド：担当者名", type: "text", value: "" },
    { label: "ヒアリング日時", type: "text", value: "" },
    {
      label: "既存サイト：有無",
      type: "select",
      value: "",
      options: ["有", "無"],
    },
    { label: "既存サイト：悩み", type: "text", value: "" },
    { label: "既存サイト：ＵＲＬ", type: "url", value: "" },
    { label: "既存サイト：ページ構成", type: "text", value: "" },
    { label: "既存サイト：備考", type: "text", value: "" },
    {
      label: "新規サイト：案件カテゴリ",
      type: "select",
      value: "",
      options: ["新サイト作成", "リニューアル", "既存サイト修正", "その他"],
    },
    { label: "新規サイト：目的", type: "text", value: "" },
    { label: "新規サイト：ページ構成", type: "text", value: "" },
    { label: "新規サイト：公開予定次期", type: "text", value: "" },
    { label: "新規サイト：予算", type: "number", value: "" },
    { label: "新規サイト：備考", type: "text", value: "" },
  ]);

  const handleFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updatedFields = [...fields];
    updatedFields[index].value = event.target.value;
    setFields(updatedFields);
  };

  const handleSubmit = () => {
    console.log(fields);
  };

  return (
    <main className="xl:w-2/3 lg:w-11/12 m-auto font-mono py-[100px] md:py-[150px] px-[30px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-sky-700">
          ヒアリング情報
          <br className="md:hidden" />
          <span className="md:inline-block">&nbsp;</span>
          新規登録画面
        </h2>
        <div className="text-left w-fit m-auto mt-4">
          <p>
            登録したい
            <span className="font-bold">「顧客情報」</span>や
            <span className="font-bold">「ヒアリング情報」</span>を記述してください。
          </p>
          <p>
            その際<span className="font-bold">「必須」</span>
            と書いてある項目は必ず記述してください。
          </p>
          <p>
            また内容修正については「顧客一覧」より該当顧客を選択し、修正を行なってください。
          </p>
        </div>
      </div>
      <section className="py-5 px-10 m-auto border-sky-300 border shadow-lg shadow-slate-200 w-fit grid gap-y-1.5">
        <ClientCreationHearingItem
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
          onClick={handleSubmit}
        >
          送信
        </button>
      </section>
    </main>
  );
};

export default CustomerCreation;
