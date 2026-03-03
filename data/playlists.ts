import { PlaylistCardData } from "@/types";

export const playlists: PlaylistCardData[] = [
  {
    title: "Deep Focus Flow",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
    mood: "Productive",
    curator: "MoodQuest",
    description: "Instrumental beats and ambient soundscapes to help you get into the zone and stay there.",
    stats: {
      likes: 1240,
      tracks: 45
    }
  },
  {
    title: "Midnight Melancholy",
    image: "https://images.unsplash.com/photo-1582032404227-6217f0c29159?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mood: "Sad",
    curator: "Sarah J.",
    description: "For those quiet nights when you just need to feel the music. Soft piano and cinematic strings.",
    stats: {
      likes: 850,
      tracks: 32
    }
  },
  {
    title: "Sunrise Energy",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    mood: "Happy",
    curator: "Alex Rivera",
    description: "Upbeat tracks to kickstart your morning with positivity and driving rhythms.",
    stats: {
      likes: 2100,
      tracks: 50
    }
  },
  {
    title: "Rainy Day Jazz",
    image: "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=800&auto=format&fit=crop",
    mood: "Calm",
    curator: "Jazz Master",
    description: "Smooth saxophone and gentle percussion perfect for a cozy afternoon indoors.",
    stats: {
      likes: 3400,
      tracks: 60
    }
  }
];
