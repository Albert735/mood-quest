import { NextResponse } from "next/server";
import { getTrendingPlaylists, getTrendingTracks } from "@/lib/spotify";

export async function GET() {
  console.log("CLIENT_ID:", process.env.SPOTIFY_CLIENT_ID);
  console.log("CLIENT_SECRET:", process.env.SPOTIFY_CLIENT_SECRET);

  try {
    const [playlists, tracks] = await Promise.all([
      getTrendingPlaylists(10),
      getTrendingTracks(10),
    ]);
    return NextResponse.json({ playlists, tracks });
  } catch (error) {
    console.error("Trending error:", error); // ← also log the actual error
    return NextResponse.json(
      { error: "Failed to fetch trending data" },
      { status: 500 },
    );
  }
}
