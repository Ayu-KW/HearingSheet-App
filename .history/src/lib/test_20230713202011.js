import { Client } from "@notionhq/client";
import { getAllNotes } from "./markdown.js";

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

async function main() {
  const notion = new Client({ auth: token });

  const notes = getAllNotes("notes");
  const failedNotes = [];

  for (const note of notes) {
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        // 各ノート（ページ）のプロパティ
        properties: {
          // プロパティ名はcase sensitiveっぽいので注意
          Name: {
            type: "title",
            title: [{ text: { content: note.name } }],
          },
        },
        // ページの中身
        children: note.body,
      });
    } catch (e) {
      console.error(`${note.name}の追加に失敗: `, e);
      failedNotes.push(note.name);
    }
  }

  console.log("ページ作成に失敗したノート: ", failedNotes);
}

main();
