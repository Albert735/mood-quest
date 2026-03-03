import { NextResponse } from "next/server";
import { searchByMood } from "@/lib/spotify";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mood = searchParams.get("mood");

  if (!mood)
    return NextResponse.json({ error: "Mood is required" }, { status: 400 });

  try {
    const results = await searchByMood(mood);
    return NextResponse.json(results);
  } catch {
    return NextResponse.json({ error: "Failed to search" }, { status: 500 });
  }
}
