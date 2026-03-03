import { MOODS } from "@/constants/moods";
import { Mood } from "@/types";

export default function MoodChips() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {MOODS.map((mood: Mood) => (
        <button
          key={mood.id}
          className="flex items-center gap-2 px-5 py-2 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20 
          text-white/80 text-sm font-medium
          hover:bg-white/20 hover:text-white
          hover:scale-105 active:scale-95
          transition-all duration-300 shadow-sm"
        >
          <span className="text-base">{mood.emoji}</span>
          {mood.label}
        </button>
      ))}
    </div>
  );
}
