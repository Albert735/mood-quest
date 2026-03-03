import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text } = await req.json();
  // Call AI to analyze mood
  return NextResponse.json({ mood: 'happy', query: 'cheerful pop' });
}
