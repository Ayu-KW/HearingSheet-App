import React, { useState } from "react";

const CustomerCreation = () => {
  //
  const CustomerCreation = () => {
    const [fields, setFields] = useState([
      { label: "会社名", type: "text", value: "" },
      { label: "メールアドレス", type: "email", value: "" },
    ]);
  };
  const handleFieldChange = (index, event) => {
    const updatedFields = [...fields];
    updatedFields[index].value = event.target.value;
    setFields(updatedFields);
  };
  // 「送信ボタン」クリック時の処理
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
        {/* <div className="flex justify-center items-center gap-4 w-[500px]">
          <p className="w-fit whitespace-nowrap">会社名</p>
          <input type="text" className="bg-gray-200 rounded-sm p-2 w-full" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="w-fit whitespace-nowrap">会社名</p>
          <input type="text" className="bg-gray-200 rounded-sm p-2 w-full" />
        </div> */}
        {fields.map((field, index) => (
          <div key={index} className="flex justify-center items-center gap-4 w-[500px]">
            <p className="w-fit whitespace-nowrap">{field.label}</p>
            {field.type === "text" ? (
              <input
                type="text"
                className="bg-gray-200 rounded-sm p-2 w-full"
                value={field.value || ""}
                onChange={(event) => handleFieldChange(index, event)}
              />
            ) : (
              <select
                className="bg-gray-200 rounded-sm p-2 w-full"
                value={field.value || ""}
                onChange={(event) => handleFieldChange(index, event)}
              >
                <option value="">選択してください</option>
                {/* 選択肢のオプションをここに追加できます */}
              </select>
            )}
          </div>
        ))}
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
