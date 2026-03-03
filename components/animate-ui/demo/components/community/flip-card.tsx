"use client";

import { FlipCard } from "@/components/animate-ui/components/community/flip-card";

const playlistData = {
  title: "Late Night Vibes",
  mood: "Chill",
  image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  curator: "MoodQuest",
  description: "Smooth R&B and mellow beats perfect for late night relaxation.",
  stats: {
    likes: 12450,
    tracks: 42,
  },
};

export const FlipCardDemo = () => {
  return <FlipCard data={playlistData} />;
};
