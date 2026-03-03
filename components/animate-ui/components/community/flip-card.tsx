"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Playlist } from "@/types";
import { buildPlatformLinks } from "@/lib/spotify";
import Link from "next/link";
import NextImage from "next/image";

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export function FlipCard({ playlist }: { playlist: Playlist }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const toggleFlip = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const image = playlist.images?.[0]?.url;
  const links = buildPlatformLinks(playlist.id, playlist.name);

  return (
    <div
      className="relative w-44 h-64 md:w-60 md:h-80 perspective-[1200px] cursor-pointer"
      onClick={toggleFlip}
      onMouseEnter={() => !isTouchDevice && setIsFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setIsFlipped(false)}
    >
      {/* FRONT */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {image ? (
          <NextImage
            src={image}
            alt={playlist.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-white/10 flex items-center justify-center text-5xl">
            🎵
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-0 p-5">
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight truncate">
            {playlist.name}
          </h3>
          <p className="text-xs md:text-sm text-white/60 mt-1">
            {playlist.owner?.display_name ?? "Spotify"} •{" "}
            {playlist.tracks?.total ?? 0} tracks
          </p>
        </div>
      </motion.div>

      {/* BACK */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-5 flex flex-col justify-between backface-hidden"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white truncate">
            {playlist.name}
          </h3>
          <p className="text-sm text-white/50 mt-1">
            {playlist.owner?.display_name ?? "Spotify"}
          </p>
          <p className="text-xs text-white/40 mt-3 leading-relaxed line-clamp-3">
            {playlist.description || "No description available."}
          </p>
        </div>

        {/* Stats */}
        <div className="text-sm text-white/40 flex justify-between">
          <span>{playlist.tracks?.total ?? 0} tracks</span>
        </div>

        {/* Platform Links */}
        <div className="flex flex-col gap-2">
          <Link
            href={links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2 rounded-full bg-green-500 hover:bg-green-400 active:scale-95 transition-all text-sm font-medium text-black text-center"
          >
            Open in Spotify
          </Link>
          <div className="flex gap-2">
            <Link
              href={links.apple}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-xs font-medium text-white text-center"
            >
              Apple
            </Link>
            <Link
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-xs font-medium text-white text-center"
            >
              YT Music
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
