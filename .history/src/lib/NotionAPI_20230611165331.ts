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
    // IDを基準に昇順（１スタート）
    sorts: [
      {
        property: "ID",
        direction: "ascending",
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

// Notionデータベースのプロパティを指定する;
const getClientDataProperties = (clientData: any) => {
  return {
    ClientIdPrefix: clientData.properties.ID.unique_id.prefix,
    ClientIdNumber: clientData.properties.ID.unique_id.number,
    ClientComponyName:
      clientData.properties.CompanyName.title[0]?.plain_text || "（未入力）",
    ClientServiceName:
      clientData.properties.ServiceName.rich_text[0]?.plain_text || "（未入力）",
    ClientHearingDay: clientData.properties.HearingDay.date?.start || "ー",
    InputRepPerson: clientData.properties.InputRepPerson.people[0]?.name || "ー",
  };
};

// IDの部分を基準・Notionデータベースの顧客情報を限定的に取得
// 修正中
export const getSinglePost = async (slug: any) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  console.log(page);
  return {
    page,
  };
};
