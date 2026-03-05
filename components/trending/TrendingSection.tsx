import { Playlist, Track } from "@/types";
import { FlipCard } from "@/components/animate-ui/components/community/flip-card";
import TrendingSongs from "./TrendingSongs";

interface TrendingSectionProps {
  playlists: Playlist[];
  tracks: Track[];
  loading: boolean;
  title?: string;
  onClear?: () => void;
}

export default function TrendingSection({
  playlists,
  tracks = [],
  loading,
  title = "Trending Now",
  onClear,
}: TrendingSectionProps) {
  if (loading) {
    return (
      <section className="py-8 space-y-12">
        <div className="flex items-center justify-between">
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
    <section className="py-8 space-y-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {onClear && (
          <button
            onClick={onClear}
            className="text-sm px-4 py-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            ✕ Clear Search
          </button>
        )}
      </div>

      {/* Trending Songs Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center text-sm">
            🎵
          </span>
          Top Tracks
        </h3>
        <TrendingSongs tracks={tracks} />
      </div>

      {/* Playlists Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white/90 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm">
            💿
          </span>
          Featured Playlists
        </h3>
        {!playlists || playlists.length === 0 ? (
          <div className="py-12 text-center rounded-3xl border border-dashed border-white/10 bg-white/5">
            <p className="text-white/40 text-lg italic">
              No playlists found for this mood.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {playlists.map((playlist) => (
              <FlipCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
