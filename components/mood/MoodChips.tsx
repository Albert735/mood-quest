"use client";

import { MOODS } from "@/constants/moods";
import { Mood } from "@/types";

interface Props {
  selected: string | null;
  onSelect: (mood: string) => void;
}

export default function MoodChips({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap max-w-2xl gap-3 justify-center">
      {MOODS.map((mood: Mood) => (
        <button
          key={mood.id}
          onClick={() => onSelect(mood.label)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full 
          backdrop-blur-md border text-sm font-medium
          hover:scale-105 active:scale-95
          transition-all duration-300 shadow-sm
          ${
            selected === mood.label
              ? "bg-green-500 border-green-400 text-black"
              : "bg-white/10 border-white/20 text-white/80 hover:bg-white/20 hover:text-white"
          }`}
        >
          {mood.label}
        </button>
      ))}
    </div>
  );
}
