import { Client } from "@notionhq/client";

// NotionAPI機能（Notionインテグレーショントークンを元に）
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
