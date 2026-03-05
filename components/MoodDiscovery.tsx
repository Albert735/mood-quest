"use client";

import { useState } from "react";
import MoodSearchBar from "@/components/mood/MoodSearchBar";
import MoodChips from "@/components/mood/MoodChips";
import TrendingSection from "@/components/trending/TrendingSection";
import { useTrending } from "@/hooks/useTrending";
import { useMoodSearch } from "@/hooks/useMoodSearch";

export default function MoodDiscovery() {
  const { playlists, tracks, loading: trendingLoading } = useTrending();
  const { results, loading: searchLoading, search, reset } = useMoodSearch();
  const [activeMood, setActiveMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    if (activeMood === mood) {
      setActiveMood(null);
      reset();
    } else {
      setActiveMood(mood);
      search(mood);
    }
  };

  const handleSearch = (query: string) => {
    setActiveMood(null);
    search(query);
  };

  const displayPlaylists = results?.playlists ?? playlists;
  const displayTracks = results?.tracks ?? tracks;
  const isLoading = trendingLoading || searchLoading;

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <MoodSearchBar onSearch={handleSearch} />
        <MoodChips selected={activeMood} onSelect={handleMoodSelect} />
      </div>

      <TrendingSection
        playlists={displayPlaylists}
        tracks={displayTracks}
        loading={isLoading}
      />
    </>
  );
}
