import PlaylistCard from "../playlist/PlaylistCard";

export default function TrendingPlaylists({ playlists }: { playlists: any[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {playlists?.map((playlist) => (
        <div key={playlist.id} className="min-w-[200px]">
          <PlaylistCard playlist={playlist} />
        </div>
      ))}
    </div>
  );
}
