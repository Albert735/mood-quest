import { NextResponse } from 'next/server';

export async function GET() {
  // Mock trending data
  return NextResponse.json({ playlists: [], tracks: [] });
}
