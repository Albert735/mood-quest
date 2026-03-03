"use client";

import { useEffect, useState } from "react";
import { Playlist, Track } from "@/types";

export const useTrending = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      // ← renamed from "fetch" to "fetchTrending"
      try {
        const res = await fetch("/api/spotify/trending");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPlaylists(data.playlists);
        setTracks(data.tracks);
      } catch {
        setError("Could not load trending data");
      } finally {
        setLoading(false);
      }
    };

    fetchTrending(); // ← update the call too
  }, []);

  return { playlists, tracks, loading, error };
};
