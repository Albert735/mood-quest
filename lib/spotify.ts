import { Playlist, Track } from "@/types";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

// ─── Cache Token ───────────────────────────────────────────────
let cachedToken: { access_token: string; expires_at: number } | null = null;

export const getAccessToken = async (): Promise<string> => {
  const now = Date.now();
  if (cachedToken && cachedToken.expires_at > now) {
    return cachedToken.access_token;
  }

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) throw new Error("Failed to get Spotify access token");

  const data = await res.json();
  cachedToken = {
    access_token: data.access_token,
    expires_at: now + (data.expires_in - 60) * 1000, // buffer
  };

  return data.access_token;
};

// ─── Interfaces ────────────────────────────────────────────────
interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string }[];
  };
  duration_ms: number;
  preview_url: string | null;
  external_urls: { spotify: string };
}

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  owner: { display_name: string };
  tracks: { total: number };
  external_urls: { spotify: string };
}

// ─── Helpers ───────────────────────────────────────────────────
const isValidPlaylist = (item: any): item is SpotifyPlaylist =>
  item != null && typeof item.id === "string";

const isValidTrack = (item: any): item is SpotifyTrack =>
  item != null && typeof item.id === "string";

// ─── Trending Playlists ─────────────────────────────────────────
export const getTrendingPlaylists = async (limit = 10): Promise<Playlist[]> => {
  const token = await getAccessToken();

  const res = await fetch(
    `https://api.spotify.com/v1/search?q=top+hits+2024&type=playlist&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch trending playlists");

  const data = await res.json();
  if (!data.playlists?.items) return [];

  return data.playlists.items
    .filter(isValidPlaylist)
    .map((item: SpotifyPlaylist) => ({
      id: item.id,
      name: item.name || "No Name",
      description: item.description || "",
      images: Array.isArray(item.images) ? item.images : [],
      owner: item.owner || { display_name: "Unknown" },
      tracks: item.tracks || { total: 0 },
      external_urls: item.external_urls || { spotify: "" },
    }));
};

// ─── Trending Tracks ────────────────────────────────────────────
export const getTrendingTracks = async (limit = 10): Promise<Track[]> => {
  const token = await getAccessToken();

  const res = await fetch(
    `https://api.spotify.com/v1/search?q=trending+2024&type=track&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch trending tracks");

  const data = await res.json();
  if (!data.tracks?.items) return [];

  return data.tracks.items.filter(isValidTrack).map((item: SpotifyTrack) => ({
    id: item.id,
    title: item.name || "No Title",
    artist: item.artists?.[0]?.name || "Unknown Artist",
    album: item.album?.name || "Unknown Album",
    duration: item.duration_ms || 0,
    coverUrl: item.album?.images?.[0]?.url || "",
    previewUrl: item.preview_url || "",
    externalUrl: item.external_urls?.spotify || "",
  }));
};

// ─── Search by Mood ─────────────────────────────────────────────
export const searchByMood = async (
  mood: string,
  limit = 12,
): Promise<{ playlists: Playlist[]; tracks: Track[] }> => {
  const token = await getAccessToken();

  const [playlistsRes, tracksRes] = await Promise.all([
    fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        mood,
      )}&type=playlist&limit=${limit}`,
      { headers: { Authorization: `Bearer ${token}` } },
    ),
    fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        mood,
      )}&type=track&limit=${limit}`,
      { headers: { Authorization: `Bearer ${token}` } },
    ),
  ]);

  if (!playlistsRes.ok || !tracksRes.ok) throw new Error("Search failed");

  const [playlistsData, tracksData] = await Promise.all([
    playlistsRes.json(),
    tracksRes.json(),
  ]);

  const playlists: Playlist[] =
    playlistsData.playlists?.items
      ?.filter(isValidPlaylist)
      .map((item: SpotifyPlaylist) => ({
        id: item.id,
        name: item.name || "No Name",
        description: item.description || "",
        images: Array.isArray(item.images) ? item.images : [],
        owner: item.owner || { display_name: "Unknown" },
        tracks: item.tracks || { total: 0 },
        external_urls: item.external_urls || { spotify: "" },
      })) || [];

  const tracks: Track[] =
    tracksData.tracks?.items
      ?.filter(isValidTrack)
      .map((item: SpotifyTrack) => ({
        id: item.id,
        title: item.name || "No Title",
        artist: item.artists?.[0]?.name || "Unknown Artist",
        album: item.album?.name || "Unknown Album",
        duration: item.duration_ms || 0,
        coverUrl: item.album?.images?.[0]?.url || "",
        previewUrl: item.preview_url || "",
        externalUrl: item.external_urls?.spotify || "",
      })) || [];

  return { playlists, tracks };
};

// ─── Get Playlist Tracks ────────────────────────────────────────
export const getPlaylistTracks = async (
  playlistId: string,
  limit = 10,
): Promise<Track[]> => {
  const token = await getAccessToken();

  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch playlist tracks");

  const data = await res.json();
  if (!data.items) return [];

  return data.items
    .map((item: any) => item?.track)
    .filter(isValidTrack)
    .map((track: SpotifyTrack) => ({
      id: track.id,
      title: track.name || "No Title",
      artist: track.artists?.[0]?.name || "Unknown Artist",
      album: track.album?.name || "Unknown Album",
      duration: track.duration_ms || 0,
      coverUrl: track.album?.images?.[0]?.url || "",
      previewUrl: track.preview_url || "",
      externalUrl: track.external_urls?.spotify || "",
    }));
};

// ─── Deep Links ───────────────────────────────────────────────
export const buildPlatformLinks = (spotifyId: string, query: string) => ({
  spotify: `https://open.spotify.com/playlist/${spotifyId}`,
  apple: `https://music.apple.com/search?term=${encodeURIComponent(query)}`,
  youtube: `https://music.youtube.com/search?q=${encodeURIComponent(query)}`,
});
