import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // Fetch tracklist + cover for a playlist
  return NextResponse.json({ playlist: { id, tracks: [] } });
}
