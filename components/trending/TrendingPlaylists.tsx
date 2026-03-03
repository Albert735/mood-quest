import PlaylistCard from '../playlist/PlaylistCard';

export default function TrendingPlaylists() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="min-w-[200px]">
          <PlaylistCard />
        </div>
      ))}
    </div>
  );
}
