// NotionClientAPI.ts
import { Client } from "@notionhq/client";

export default async function createPage(clientData: any) {
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID as string,
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: clientData.CompanyName,
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
