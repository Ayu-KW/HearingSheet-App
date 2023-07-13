// pages/api/add-page.js
import { Client } from "@notionhq/client";

export default async function createPage(req: any, res: any) {
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID as string, // 操作するデータベースのIDを指定します
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: "New Page Title", // 新しいページのタイトルを指定します
              },
            },
          ],
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error creating page" });
  }
}
