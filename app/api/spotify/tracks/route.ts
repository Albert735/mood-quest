import { NextResponse } from "next/server";
import { getTrendingTracks } from "@/lib/spotify";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Parse limit safely and clamp between 1 and 50
  let limit = Number(searchParams.get("limit")) || 6;
  limit = Math.min(Math.max(limit, 1), 50);

  try {
    const tracks = await getTrendingTracks(limit);

    // Safety check: ensure it's an array
    if (!Array.isArray(tracks)) {
      console.warn("Spotify returned invalid tracks:", tracks);
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(tracks);
  } catch (error) {
    console.error("Trending tracks error:", error);

    return NextResponse.json(
      { error: "Failed to fetch trending tracks", tracks: [] },
      { status: 500 },
    );
  }
}
