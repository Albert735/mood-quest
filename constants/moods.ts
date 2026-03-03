import { Mood } from "../types";

export const MOODS: Mood[] = [
  { id: "happy", label: "Happy", seedGenres: ["pop", "happy"] },
  { id: "sad", label: "Sad", seedGenres: ["acoustic", "sad"] },
  { id: "energetic", label: "Energetic", seedGenres: ["dance", "electronic"] },
  { id: "chill", label: "Chill", seedGenres: ["lo-fi", "chill"] },
  { id: "focus", label: "Focus", seedGenres: ["classical", "ambient"] },
  { id: "romantic", label: "Romantic", seedGenres: ["romance", "ballad"] },
  { id: "party", label: "Party", seedGenres: ["party", "dance"] },
];
