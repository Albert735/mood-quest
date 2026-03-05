// components/playlist/PlaylistCard.tsx
import { Playlist } from "@/types";
import { buildPlatformLinks } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";

interface Props {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: Props) {
  const links = buildPlatformLinks(playlist.id, playlist.name, "playlist");
  const image = playlist.images?.[0]?.url;

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
      <div className="aspect-square relative bg-white/5">
        {image ? (
          <Image
            src={image}
            alt={playlist.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
            🎵
          </div>
        )}
      </div>
      <div className="p-3 space-y-1">
        <h3 className="font-semibold text-white truncate">{playlist.name}</h3>
        <p className="text-sm text-white/50 truncate">
          {playlist.owner?.display_name ?? "Spotify"}
        </p>
        <p className="text-xs text-white/30">
          {playlist.tracks?.total ?? 0} tracks
        </p>
      </div>
      <div className="px-3 pb-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link
          href={links.spotify}
          target="_blank"
          className="flex-1 text-center text-xs py-1.5 rounded-full bg-green-500 text-black font-medium hover:bg-green-400 transition"
        >
          Spotify
        </Link>
        <Link
          href={links.apple}
          target="_blank"
          className="flex-1 text-center text-xs py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          Apple
        </Link>
        <Link
          href={links.youtube}
          target="_blank"
          className="flex-1 text-center text-xs py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          YT Music
        </Link>
      </div>
    </div>
  );
}
