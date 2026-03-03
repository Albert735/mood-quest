import { create } from 'zustand';
import { Mood } from '../types';

interface MoodState {
  selectedMood: Mood | null;
  searchQuery: string;
  setSelectedMood: (mood: Mood | null) => void;
  setSearchQuery: (query: string) => void;
}

export const useMoodStore = create<MoodState>((set) => ({
  selectedMood: null,
  searchQuery: '',
  setSelectedMood: (mood) => set({ selectedMood: mood }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
