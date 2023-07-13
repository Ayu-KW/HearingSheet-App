import {
  ClientCreationHearingItem,
  initialFields,
} from "@/components/HearingItems/ClientCreationHearingItem";
import { addClientData } from "@/lib/NotionAPI";
import React, { useState } from "react";

const CustomerCreation = () => {
  const [fields, setFields] = useState(initialFields);

  const handleFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updatedFields = [...fields];
    updatedFields[index].value = event.target.value;
    setFields(updatedFields);
  };
  const handleSubmit = async () => {
    try {
    // 現在の日時を取得
    const currentDate = new Date();
      // フォームの入力値をクライアントデータとして作成
      const clientData = {
        InputDay: ,
        CompanyName: fields[0].value,
        ServiceName: fields[1].value,
      };
      // クライアントデータをNotionデータベースに追加
      await addClientData(clientData);
      console.log("データが送信されました");
    } catch (error) {
      console.error("エラー:", error);
    }
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
      <section className="py-10 px-10 m-auto border-sky-300 border shadow-lg shadow-slate-200 w-fit grid gap-y-1.5">
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
