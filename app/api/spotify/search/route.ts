import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');
  // Search Spotify by mood keyword
  return NextResponse.json({ playlists: [] });
}
