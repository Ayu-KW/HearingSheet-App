import { Client } from "@notionhq/client";

// NotionAPI機能（Notionインテグレーショントークンを元に）
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Notionデータベースの顧客情報を取得（NotionデータベースIDを元に）
export const getAllClientData = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
  const allClientData = posts.results;
  return allClientData;
};

//
