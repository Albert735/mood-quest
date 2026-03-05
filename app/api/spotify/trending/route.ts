// app/api/spotify/trending/route.ts
import { NextResponse } from "next/server";
import { getTrendingPlaylists, getTrendingTracks } from "@/lib/spotify";

export async function GET() {
  try {
    // Fetch playlists and tracks concurrently
    const [playlists, tracks] = await Promise.all([
      getTrendingPlaylists(20).catch((err) => {
        // ← change 30 to 20
        console.error("Failed to fetch playlists:", err);
        return [];
      }),
      getTrendingTracks(12).catch((err) => {
        console.error("Failed to fetch tracks:", err);
        return [];
      }),
    ]);
    console.log("Playlists:", playlists);
    console.log("Tracks:", tracks);

    return NextResponse.json({ playlists, tracks });
  } catch (error) {
    console.error("Trending route error:", error);
    return NextResponse.json(
      { playlists: [], tracks: [], error: "Failed to fetch trending data" },
      { status: 500 },
    );
  }
}
