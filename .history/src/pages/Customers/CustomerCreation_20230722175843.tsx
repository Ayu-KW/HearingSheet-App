import {
  ClientCreationHearingItem,
  initialFields,
} from "@/components/HearingItems/ClientCreationHearingItem";
import AddButton from "@/components/common/Button/AddButton";
import React, { useState } from "react";

const CustomerCreation = () => {
  // 入力欄の情報を管理
  const [fields, setFields] = useState(initialFields);
  // 入力欄の内容を画面に反映させる
  const handleFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updatedFields = [...fields];
    updatedFields[index].value = event.target.value;
    setFields(updatedFields);
  };

  return (
    <main className="xl:w-2/3 lg:w-11/12 m-auto font-mono py-[100px] md:py-[150px] px-4">
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
      <section className="py-10 px-4 lg:px-10 m-auto border-sky-300 border shadow-lg shadow-slate-200 md:w-fit grid gap-y-1.5">
        <ClientCreationHearingItem
          fields={fields}
          handleFieldChange={handleFieldChange}
        />
        <AddButton fields={fields}>送信</AddButton>
      </section>
    </main>
  );
};

export default CustomerCreation;
