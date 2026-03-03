import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  // Fetch tracklist + cover for a playlist
  return NextResponse.json({ playlist: { id, tracks: [] } });
}
