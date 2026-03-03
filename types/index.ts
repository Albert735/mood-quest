export type Mood = {
  id: string;
  label: string;
  emoji: string;
  seedGenres: string[];
};

export type Platform = "spotify" | "apple" | "youtube";

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  previewUrl?: string;
  externalUrl: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  owner: string;
  tracks: Track[];
  externalUrl: string;
};
