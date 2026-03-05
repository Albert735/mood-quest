// components/trending/TrendingPlaylists.tsx
import PlaylistCard from "../playlist/PlaylistCard";
import { Playlist } from "@/types";

export default function TrendingPlaylists({
  playlists,
}: {
  playlists: Playlist[];
}) {
  if (!playlists || playlists.length === 0) {
    return (
      <p className="text-white/50 py-8 text-center">No playlists available</p>
    );
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {playlists.map((playlist) => (
        <div key={playlist.id} className="min-w-[200px]">
          <PlaylistCard playlist={playlist} />
        </div>
      ))}
    </div>
  );
}
