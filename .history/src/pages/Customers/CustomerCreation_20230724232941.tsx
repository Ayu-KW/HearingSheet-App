import {
  ClientCreationHearingItem,
  initialFields,
} from "@/components/HearingItems/ClientCreationHearingItem";
import AddButton from "@/components/common/Button/AddButton";
import LinkButton from "@/components/common/Button/LinkButton";
import React, { useEffect, useState } from "react";

const CustomerCreation = () => {
  // 入力欄の情報を管理
  const [fields, setFields] = useState(initialFields);
  // 送信完了の状態を管理
  const [isSent, setIsSent] = useState(false);
  // 入力欄の内容を画面に反映させる
  const resetFields = () => {
    const resetFields = initialFields.map((field) => ({ ...field, value: "" }));
    setFields(resetFields);
  };

  const handleFieldChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const updatedFields = [...fields];
    updatedFields[index].value = event.target.value;
    setFields(updatedFields);
  };

  // 確認用
  useEffect(() => {
    console.log("リセット後のfields:", fields);
  }, [fields]);

  return (
    <main className="xl:w-2/3 lg:w-11/12 m-auto font-mono py-[100px] md:py-[150px] px-4">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl font-bold text-sky-700">
          ヒアリング情報
          <br className="md:hidden" />
          <span className="hidden md:inline-block">&nbsp;</span>
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
      <section className="py-5 lg:py-10 px-5 lg:px-10 m-auto border-sky-300 border shadow-lg shadow-slate-200 md:w-fit grid gap-y-1.5">
        {isSent ? (
          <>
            <h3 className="text-2xl font-bold text-center">送信完了</h3>
            <p className="">
              新規データの追加・送信完了いたしました。
              <br />
              念の為、
              <LinkButton
                url={"CustomerList"}
                style={
                  "inline-block text-sky-500 font-bold hover:text-orange-400 hover:duration-200"
                }
              >
                顧客一覧ページ
              </LinkButton>
              にてデータが追加されているご確認ください。
            </p>
            <LinkButton url={"/"} style={"mt-3 mx-auto p-2 w-fit bg-sky-500 text-white"}>
              トップに戻る
            </LinkButton>
          </>
        ) : (
          <>
            <ClientCreationHearingItem
              fields={fields}
              handleFieldChange={handleFieldChange}
            />
            <AddButton fields={fields} setIsSent={setIsSent} setFields={setFields}>
              送信
            </AddButton>
          </>
        )}
      </section>
    </main>
  );
};

export default CustomerCreation;
