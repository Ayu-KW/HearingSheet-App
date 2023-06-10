import { Client } from "@notionhq/client";

// NotionAPI機能（Notionインテグレーショントークンを元に）
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Notionデータベースの顧客情報を全て取得（NotionデータベースIDを元に）
export const getAllClientData = async () => {
  const clientData = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
  const allClientData = clientData.results;
  return allClientData;
};

// async：非同期処理、APIを使用する時は基本的に行う
export const getAllClientData = async () => {
  // await：非同期処理が完了するまで一時停止する
  // query：お問い合わせ、どういう条件のもとデータをとってくるのか
  const clientData = await notion.databases.query({
    // データベースを指定（IDを入力：envファイルからもってくる）
    // as string：強制的に文字型に変換する（エラー解消）
    database_id: process.env.NOTION_DATABASE_ID as string,
    // いくつページを取得するのか？（デフォルトは100なので書かなくてもOK）
    page_size: 100,
  });
  // 上記で呼び出したデータベースの中身（クエリ）を変数に格納
  const allPosts = clientData.results;
  // クエリを返す
  return allPosts;
};
