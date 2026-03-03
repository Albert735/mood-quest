import { Playlist, Track } from "@/types";
import { FlipCard } from "@/components/animate-ui/components/community/flip-card";

interface TrendingSectionProps {
  playlists: Playlist[];
  tracks: Track[];
  loading: boolean;
  title?: string;
  onClear?: () => void; // ← add this
}

export default function TrendingSection({
  playlists,
  loading,
  title = "Trending Now",
  onClear,
}: TrendingSectionProps) {
  if (loading) {
    return (
      <section className="py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="aspect-[4/5] rounded-3xl bg-white/5 animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {onClear && (
          <button
            onClick={onClear}
            className="text-sm text-white/50 hover:text-white transition"
          >
            ✕ Clear
          </button>
        )}
      </div>

      {!playlists || playlists.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-white/50 text-lg">
            No playlists found for this mood.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {playlists.map((playlist) => (
            <FlipCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      )}
    </section>
  );
}
