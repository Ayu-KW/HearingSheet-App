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
  });
  const allClientData = clientData.results;
  // 顧客情報１つずつのプロパティを取り出す
  return allClientData.map((clientData) => {
    return getClientDataProperties(clientData);
  });
};

// Notionデータベースのプロパティを指定する
const getClientDataProperties = (clientData: any) => {
  return {
    ClientID: clientData.properties.ID,
    ComponyName: clientData.properties.ID,
  };
};
