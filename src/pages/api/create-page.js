// pages/api/create-page.js
import createPage from "@/lib/NotionAPI";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const clientData = req.body; // リクエストボディからデータを取得する方法に応じて修正してください
      const response = await createPage(clientData);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Error creating page" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
