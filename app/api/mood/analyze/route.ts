import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await req.json();
  // Call AI to analyze mood
  return NextResponse.json({ mood: "happy", query: "cheerful pop" });
}
