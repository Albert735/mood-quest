export default function MoodSearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto flex items-center gap-3">
      {/* Glass Icon */}
      <div
        className="flex items-center justify-center 
        h-14 w-14 rounded-full 
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        shadow-lg
        hover:bg-white/20
        transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-white/70"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      {/* Glass Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="How are you feeling today?"
          className="w-full rounded-full 
            bg-white/10 backdrop-blur-xl 
            border border-white/20 
            px-6 py-4 
            text-white placeholder:text-white/50 
            shadow-lg
            focus:outline-none 
            focus:ring-2 focus:ring-emerald-500 
            focus:border-emerald-500
            hover:bg-white/15
            transition-all duration-300"
        />
      </div>
    </div>
  );
}
