export default function MoodSearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 w-full rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 hover:bg-white/15">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-white/60"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="How are you feeling today?"
          className="bg-transparent outline-none w-full text-white placeholder:text-white/50"
        />
      </div>
    </div>
  );
}
