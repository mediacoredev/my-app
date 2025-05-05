import { NextResponse } from 'next/server';
import { queryDatabase } from '@/lib/notion';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get('db')!;
  const id = process.env[`NOTION_DATABASE_ID_${db.toUpperCase()}`];
  if (!id) return NextResponse.json({ error: 'Missing database ID' }, { status: 400 });
  const data = await queryDatabase(id);
  return NextResponse.json(data);
}
