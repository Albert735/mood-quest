import PlaylistCard from "./PlaylistCard";

export default function PlaylistGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <p className="text-white/30 col-span-full text-center py-10 italic">
        Select a mood to discover playlists...
      </p>
    </div>
  );
}
