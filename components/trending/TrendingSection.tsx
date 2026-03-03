import Image from "next/image";
import { playlists } from "@/data/playlists";
import { FlipCard } from "@/components/animate-ui/components/community/flip-card";

export default function TrendingSection() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
      {/* Trending content will go here */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {playlists.map((playlist) => (
          <FlipCard key={playlist.title} data={playlist} />
        ))}
      </div>
    </section>
  );
}
