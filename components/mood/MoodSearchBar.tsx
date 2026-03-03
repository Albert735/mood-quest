export default function MoodSearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input 
        type="text" 
        placeholder="How are you feeling?" 
        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
