export type Mood = {
  id: string;
  label: string;
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

export interface Playlist {
  id: string;
  name: string; // Spotify uses "name" not "title"
  description: string;
  images: { url: string }[]; // Spotify returns an array of images
  external_urls: { spotify: string };
  owner: { display_name: string };
  tracks: { total: number };
}

export type PlaylistCardData = {
  title: string;
  image: string;
  mood: string;
  curator: string;
  description: string;
  stats: {
    likes: number;
    tracks: number;
  };
};
