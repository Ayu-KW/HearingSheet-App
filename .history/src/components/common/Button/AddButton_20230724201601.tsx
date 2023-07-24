import React from "react";

type Props = {
  fields: any;
  children: string;
  setIsSent: (isSent: boolean) => void;
};

const AddButton = ({ fields, children, setIsSent }: Props) => {
  // 対応する項目を指定
  const clientData = {
    CompanyName: fields[0].value,
    ServiceName: fields[1].value,
    Industries: fields[2].value,
    CompanyRepPerson: fields[3].value,
    InputRepPerson_2: fields[4].value,
    HearingDay: fields[5].value,
    ExistingSite_Availability: fields[6].value,
    ExistingSite_Trouble: fields[7].value,
    ExistingSite_URL: fields[8].value,
    ExistingSite_PageConfiguration: fields[9].value,
    ExistingSite_Note: fields[10].value,
    NewSite_Usage: fields[11].value,
    NewSite_Objective: fields[12].value,
    NewSite_PageConfiguration: fields[13].value,
    NewSite_OpeningPreferredDate: fields[14].value,
    NewSite_Budget: fields[15].value,
    NewSite_Note: fields[16].value,
  };
  // ログ確認用
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
        setIsSent(true);
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
