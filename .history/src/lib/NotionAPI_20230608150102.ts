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
  // 指定のプロパティを取り出す
  return allClientData.map((clientData) => {
    return getclientMetaData(clientData);
  });
};

// Notionデータベースの顧客情報のプロパティを取得
const getclientMetaData = (clientData: any) => {};
