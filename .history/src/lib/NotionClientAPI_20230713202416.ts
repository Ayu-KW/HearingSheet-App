// NotionClientAPI.ts
import { Client } from "@notionhq/client";

export default async function createPage(clientData: any) {
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

  //

  (async () => {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID as string,
      },
      properties: {
        "Grocery item": {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Tomatoes",
              },
            },
          ],
        },
        Price: {
          type: "number",
          number: 1.49,
        },
        "Last ordered": {
          type: "date",
          date: {
            start: "2021-05-11",
          },
        },
      },
    });
    console.log(response);
  })();
  //

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID as string,
      },
      properties: {
        CompanyName: {
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

    return response; // レスポンスを返す
  } catch (error: any) {
    throw new Error("Error creating page: " + error.message);
  }
}
