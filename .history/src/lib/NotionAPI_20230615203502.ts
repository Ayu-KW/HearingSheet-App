import { Client } from "@notionhq/client";

// NotionAPI機能
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Notionデータベースの顧客情報を全て取得
export const getAllClientData = async () => {
  const clientData = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    page_size: 100,
    sorts: [
      {
        property: "InputDay",
        direction: "descending",
      },
    ],
  });
  const allClientData = clientData.results;
  // 顧客情報１つずつのプロパティを取り出す
  return allClientData;
  // return allClientData.map((clientData) => {
  //   return getClientDataProperties(clientData);
  // });
};

// Notionデータベースのプロパティを指定する
const getClientDataProperties = (clientData: any) => {
  return {
    ClientComponyName: clientData.properties?.CompanyName?.title[0]?.plain_text || "",
    ClientServiceName: clientData.properties?.ServiceName?.rich_text[0]?.plain_text || "",
    ClientHearingDay: clientData.properties?.HearingDay?.date?.start || "",
    InputRepPerson: clientData.properties?.InputRepPerson?.people[0]?.name || "",
    ClientHearingDay: clientData.properties?.HearingDay?.people[0]?.name || "",
  };
};

// 会社名＆サービス名合致・Notionデータベースの顧客情報を限定的に取得
export const getSingleClientData = async (companyName: string, serviceName: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "CompanyName",
          formula: {
            string: {
              equals: companyName,
            },
          },
        },
        {
          property: "ServiceName",
          formula: {
            string: {
              equals: serviceName,
            },
          },
        },
      ],
    },
  });
  const clientPage = response.results[0];
  return getClientDataProperties(clientPage);
};
