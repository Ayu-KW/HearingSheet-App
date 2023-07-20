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
  // return allClientData;
  return allClientData.map((clientData) => {
    return getClientDataProperties(clientData);
  });
};

// Notionデータベースのプロパティを指定する
// ？：型定義において「any」以外にする方法を模索したい（先に機能実装を優先させる）
const getClientDataProperties = (clientData: any) => {
  return {
    InputDay: clientData.created_time || "",
    ClientComponyName: clientData.properties?.CompanyName?.title[0]?.plain_text || "",
    ClientServiceName: clientData.properties?.ServiceName?.rich_text[0]?.plain_text || "",
    ClientHearingDay: clientData.properties?.HearingDay?.date?.start || "",
    InputRepPerson: clientData.properties?.InputRepPerson?.people[0]?.name || "",
    ClientIndustries: clientData.properties?.Industries?.rich_text[0]?.plain_text || "",
    ClientRepPerson:
      clientData.properties?.ClientRepPerson?.rich_text[0]?.plain_text || "",
    ExistingSite_Availability:
      clientData.properties?.ExistingSite_Availability?.select?.name || "",
    ExistingSite_Trouble:
      clientData.properties?.ExistingSite_Trouble?.rich_text[0]?.plain_text || "",
    ExistingSite_URL: clientData.properties?.ExistingSite_Trouble?.url || "",
    ExistingSite_PageConfiguration:
      clientData.properties?.ExistingSite_PageConfiguration?.rich_text[0]?.plain_text ||
      "",
    ExistingSite_Note:
      clientData.properties?.ExistingSite_Note?.rich_text[0]?.plain_text || "",
    NewSite_Usage: clientData.properties?.NewSite_Usage?.select?.name || "",
    NewSite_Objective:
      clientData.properties?.NewSite_Objective?.rich_text[0]?.plain_text || "",
    NewSite_PageConfiguration:
      clientData.properties?.NewSite_PageConfiguration?.rich_text[0]?.plain_text || "",
    NewSite_OpeningPreferredDate:
      clientData.properties?.NewSite_OpeningPreferredDate?.rich_text[0]?.plain_text || "",
    NewSite_Note: clientData.properties?.NewSite_Note?.number || "",
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
// データをNotionデータベースに追加する
export default async function createPage(clientData: any) {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  // プロパティの種類を定義（title以外）
  const createTitleProperty = (fieldName: string, fieldValue: string) => {
    return {
      [fieldName]: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: fieldValue,
            },
          },
        ],
      },
    };
  };
  const createRichTextProperty = (fieldName: string, fieldValue: string) => {
    return {
      [fieldName]: {
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            text: {
              content: fieldValue,
            },
          },
        ],
      },
    };
  };
  const createSelectProperty = (fieldName: string, fieldValue: string) => {
    return {
      [fieldName]: {
        type: "select",
        select: {
          name: fieldValue,
        },
      },
    };
  };
  const createNumberProperty = (fieldName: string, fieldValue: number) => {
    return {
      [fieldName]: {
        type: "number",
        number: fieldValue,
      },
    };
  };
  const createUrlProperty = (fieldName: string, fieldValue: string) => {
    return {
      [fieldName]: {
        type: "url",
        url: fieldValue,
      },
    };
  };
  const createDateProperty = (fieldName: string, fieldValue: string) => {
    return {
      [fieldName]: {
        type: "date",
        date: {
          start: fieldValue,
        },
      },
    };
  };
  // 出力
  try {
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
        ...createRichTextProperty("ServiceName", clientData.ServiceName || ""),
        ...createRichTextProperty("Industries", clientData.Industries),
        ...createRichTextProperty("CompanyRepPerson", clientData.CompanyRepPerson),
        ...createRichTextProperty("InputRepPerson_2", clientData.InputRepPerson_2),
        ...createDateProperty("HearingDay", clientData.HearingDay),
        ...createSelectProperty(
          "ExistingSite_Availability",
          clientData.ExistingSite_Availability
        ),
        ...createRichTextProperty(
          "ExistingSite_Trouble",
          clientData.ExistingSite_Trouble
        ),
        ...createUrlProperty("ExistingSite_URL", clientData.ExistingSite_URL),
        ...createRichTextProperty(
          "ExistingSite_PageConfiguration",
          clientData.ExistingSite_PageConfiguration
        ),
        ...createRichTextProperty("ExistingSite_Note", clientData.ExistingSite_Note),
        ...createSelectProperty("NewSite_Usage", clientData.NewSite_Usage),
        ...createRichTextProperty("NewSite_Objective", clientData.NewSite_Objective),
        ...createRichTextProperty(
          "NewSite_PageConfiguration",
          clientData.NewSite_PageConfiguration
        ),
        ...createRichTextProperty(
          "NewSite_OpeningPreferredDate",
          clientData.NewSite_OpeningPreferredDate
        ),
        ...createNumberProperty("NewSite_Budget", parseFloat(clientData.NewSite_Budget)),
        ...createRichTextProperty("NewSite_Note", clientData.NewSite_Note),
      },
    });
    // console.log(response);
  } catch (error: any) {
    throw new Error("Error creating page: " + error.message);
  }
}
