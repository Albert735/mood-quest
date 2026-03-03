"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlaylistCardData } from "@/types";

export function FlipCard({ data }: { data: PlaylistCardData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const toggleFlip = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      className="relative w-44 h-64 md:w-60 md:h-80 perspective-[1200px] cursor-pointer"
      onClick={toggleFlip}
      onMouseEnter={() => !isTouchDevice && setIsFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setIsFlipped(false)}
    >
      {/* FRONT */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden 
                   shadow-lg hover:shadow-2xl 
                   transition-shadow duration-300
                   backface-hidden"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover"
        />

        {/* Smooth gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t 
                        from-black/80 via-black/40 to-transparent"
        />

        {/* Text */}
        <div className="absolute bottom-0 p-5">
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
            {data.title}
          </h3>
          <p className="text-xs md:text-sm text-white/60 mt-1">
            {data.mood} • {data.curator}
          </p>
        </div>
      </motion.div>

      {/* BACK */}
      <motion.div
        className="absolute inset-0 rounded-3xl 
                   bg-white/5 backdrop-blur-xl 
                   border border-white/10 
                   shadow-xl p-5 
                   flex flex-col justify-between
                   backface-hidden"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <div>
          <h3 className="text-lg font-semibold text-white">{data.title}</h3>
          <p className="text-sm text-white/60 mt-3 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="mt-4 text-sm text-white/50 flex justify-between">
          <span>{data.stats.likes.toLocaleString()} Likes</span>
          <span>{data.stats.tracks} Tracks</span>
        </div>

        <button
          className="mt-6 w-full py-2.5 rounded-full 
                           bg-emerald-500/90 
                           hover:bg-emerald-500 
                           active:scale-95 
                           transition-all duration-200 
                           text-sm font-medium"
        >
          ▶ Play Now
        </button>
      </motion.div>
    </div>
  );
}
