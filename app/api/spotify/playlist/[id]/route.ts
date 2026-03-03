import { NextResponse } from "next/server";
import { getPlaylistTracks } from "@/lib/spotify";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const tracks = await getPlaylistTracks(params.id);
    return NextResponse.json({ tracks });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch tracks" },
      { status: 500 },
    );
  }
}
