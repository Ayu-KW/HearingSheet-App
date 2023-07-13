// NotionClientAPI.ts
import { Client } from "@notionhq/client";

export default async function createPage(clientData: any) {
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

  try {
    // const response = await notion.pages.create({
    //   parent: {
    //     database_id: process.env.NOTION_DATABASE_ID as string,
    //   },
    //   properties: {
    //     CompanyName: {
    //       title: [
    //         {
    //           text: {
    //             content: clientData.CompanyName,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
    // return response; // レスポンスを返す
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_API_TOKEN as string,
      },
      properties: {
        CompanyName: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "テスト送信です",
              },
            },
          ],
        },
      },
    });
    console.log(response);
  } catch (error: any) {
    throw new Error("Error creating page: " + error.message);
  }
}
