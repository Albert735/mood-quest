"use client";

import { useState } from "react";
import { Playlist, Track } from "@/types";

interface SearchResults {
  playlists: Playlist[];
  tracks: Track[];
}

export const useMoodSearch = () => {
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (mood: string) => {
    if (!mood.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/spotify/search?mood=${encodeURIComponent(mood)}`,
      );
      if (!res.ok) throw new Error("Search failed");
      const data = await res.json();
      setResults(data);
    } catch {
      setError("Could not fetch results");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => setResults(null);

  return { results, loading, error, search, reset };
};
