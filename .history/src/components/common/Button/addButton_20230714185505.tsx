import React from "react";

type Props = {
  fields: any;
  children: string;
};

const AddButton = ({ fields, children }: Props) => {
  // 対応する項目を指定
  const clientData = {
    CompanyName: fields[0].value,
    ServiceName: fields[1].value,
    Industries: fields[2].value,
    CompanyRepPerson: fields[3].value,
    InputRepPerson_2: fields[4].value,
    HearingDay: fields[5].value,
  };
  // 確認用ログ確認
  // console.log({ clientData }, clientData);
  // ボタンを押すとデータベースに追加される
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/create-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });
      if (response.ok) {
        console.log("データが送信されました");
      } else {
        throw new Error("Error creating page");
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
};

export default AddButton;
