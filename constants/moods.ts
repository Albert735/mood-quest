import { Mood } from '../types';

export const MOODS: Mood[] = [
  { id: 'happy', label: 'Happy', emoji: '😊', seedGenres: ['pop', 'happy'] },
  { id: 'sad', label: 'Sad', emoji: '😢', seedGenres: ['acoustic', 'sad'] },
  { id: 'energetic', label: 'Energetic', emoji: '⚡', seedGenres: ['dance', 'electronic'] },
  { id: 'chill', label: 'Chill', emoji: '🧘', seedGenres: ['lo-fi', 'chill'] },
  { id: 'focus', label: 'Focus', emoji: '🧠', seedGenres: ['classical', 'ambient'] },
];
