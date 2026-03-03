import { MOODS } from '@/constants/moods';

export default function MoodChips() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {MOODS.map((mood) => (
        <button 
          key={mood.id}
          className="px-4 py-1 rounded-full border hover:bg-muted transition-colors"
        >
          {mood.emoji} {mood.label}
        </button>
      ))}
    </div>
  );
}
