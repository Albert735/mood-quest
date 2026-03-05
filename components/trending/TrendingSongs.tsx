import { Track } from "@/types";
import { buildPlatformLinks } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";

interface TrendingSongsProps {
  tracks: Track[];
}

export default function TrendingSongs({ tracks }: TrendingSongsProps) {
  if (!tracks || tracks.length === 0) {
    return (
      <p className="text-white/50 py-8 text-center italic">
        No trending songs found...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tracks.map((track, index) => {
        const links = buildPlatformLinks(track.id, track.title, "track");

        return (
          <div
            key={track.id}
            className="group flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden shadow-lg">
              {track.coverUrl ? (
                <Image
                  src={track.coverUrl}
                  alt={track.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-white/10 flex items-center justify-center text-2xl">
                  🎵
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white truncate text-base">
                {track.title}
              </h4>
              <p className="text-sm text-white/50 truncate">{track.artist}</p>
            </div>

            <div className="flex gap-2 pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={links.spotify}
                target="_blank"
                className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-black"
                title="Open in Spotify"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.215.353-.679.467-1.032.252-2.859-1.747-6.458-2.141-10.697-1.171-.404.093-.811-.161-.904-.565-.093-.404.161-.811.565-.904 4.636-1.06 8.614-.61 11.815 1.348.353.216.467.679.253 1.032zm1.464-3.26c-.271.442-.846.582-1.288.31-3.272-2.012-8.259-2.593-12.128-1.417-.497.151-1.026-.13-1.177-.627-.151-.498.13-1.027.627-1.178 4.417-1.341 9.917-.687 13.656 1.614.442.272.583.846.31 1.288zm.126-3.414C15.938 8.441 10.74 8.27 7.74 9.181c-.551.167-1.127-.146-1.294-.697-.167-.551.146-1.127.697-1.294 3.444-1.045 9.179-.845 12.822 1.317.493.293.655.932.362 1.425-.293.493-.932.655-1.425.362z" />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
