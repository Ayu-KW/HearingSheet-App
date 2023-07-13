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

    //
    (async () => {
      const response = await notion.pages.create({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID as string,
        },
        properties: {
          CompanyName: {
            type: "title",
            title: [
              {
                type: "text",
                text: {
                  content: clientData.CompanyName,
                },
              },
            ],
          },
        },
      });
      console.log(response);
    })();
    //

    return response; // レスポンスを返す
  } catch (error: any) {
    throw new Error("Error creating page: " + error.message);
  }
}
