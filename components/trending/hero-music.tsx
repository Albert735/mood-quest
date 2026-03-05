"use client";

import React, { useEffect, useState } from "react";
import { Marquee } from "@/components/ui/marquee";
import { Track, Playlist } from "@/types";
import { buildPlatformLinks } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";

export default function HeroMusic() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/spotify/trending");
        const data = await res.json();
        setTracks(
          data && Array.isArray(data.tracks) ? data.tracks.slice(0, 12) : [],
        );
      } catch (err) {
        console.error("HeroMusic: Failed to fetch trending tracks:", err);
        setTracks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
  }, []);

  const cards =
    loading || tracks.length === 0 ? Array.from({ length: 6 }) : tracks;

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-8">
      <Marquee pauseOnHover className="w-full [--duration:22s]">
        {cards.map((track: any, index) => {
          const links = track?.id
            ? buildPlatformLinks(track.id, track.title, "track")
            : null;

          return (
            <div
              key={track?.id ?? index}
              className="h-52 w-44 md:h-64 md:w-60 shrink-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mx-2 relative overflow-hidden"
            >
              {loading || !track?.coverUrl ? (
                <div className="h-full w-full bg-white/10 animate-pulse rounded-2xl" />
              ) : (
                <>
                  <Image
                    src={track.coverUrl}
                    alt={track.title}
                    fill
                    className="object-cover rounded-2xl"
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 hover:opacity-100 transition-opacity flex flex-col gap-1">
                    <h3 className="text-sm md:text-base text-white truncate">
                      {track.title}
                    </h3>
                    <p className="text-xs text-white/60 truncate">
                      {track.artist}
                    </p>
                    {links && (
                      <div className="flex gap-2 mt-2">
                        <Link
                          href={links.spotify}
                          target="_blank"
                          className="flex-1 py-1 rounded-full bg-green-500 hover:bg-green-400 text-xs font-medium text-black text-center"
                        >
                          Spotify
                        </Link>
                        <Link
                          href={links.apple}
                          target="_blank"
                          className="flex-1 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white text-center"
                        >
                          Apple
                        </Link>
                        <Link
                          href={links.youtube}
                          target="_blank"
                          className="flex-1 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white text-center"
                        >
                          YT Music
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
