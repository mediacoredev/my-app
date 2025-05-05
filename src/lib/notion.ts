import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function queryDatabase(databaseId: string) {
  const res = await notion.databases.query({ database_id: databaseId });
  return res.results;
}

export default notion;
