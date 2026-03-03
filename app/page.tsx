"use client";

import { useState } from "react";
import HeroMusic from "@/components/trending/hero-music";
import { MorphingText } from "@/components/ui/morphing-text";
import MoodSearchBar from "@/components/mood/MoodSearchBar";
import MoodChips from "@/components/mood/MoodChips";
import TrendingSection from "@/components/trending/TrendingSection";
import { useTrending } from "@/hooks/useTrending";
import { useMoodSearch } from "@/hooks/useMoodSearch";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const {
    playlists: trending,
    tracks: trendingTracks,
    loading: trendingLoading,
  } = useTrending();
  const { results, loading: searchLoading, search, reset } = useMoodSearch();

  const handleMoodSelect = (mood: string) => {
    // Deselect if same mood clicked again
    if (selectedMood === mood) {
      setSelectedMood(null);
      reset();
    } else {
      setSelectedMood(mood);
      search(mood);
    }
  };

  const handleSearchSubmit = (mood: string) => {
    setSelectedMood(null); // clear chip selection
    search(mood);
  };

  const handleClearSearch = () => {
    setSelectedMood(null);
    reset();
  };

  // Use mood results if available, otherwise fall back to trending
  const displayPlaylists = results?.playlists ?? trending;
  const displayTracks = results?.tracks ?? trendingTracks;
  const isSearching = searchLoading || trendingLoading;
  const hasResults = !!results;

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-18">
      <HeroMusic />

      <section className="flex flex-col items-center justify-between gap-18 text-center h-100">
        <MorphingText
          className="text-3xl font-bold tracking-tight sm:text-6xl max-w-5xl mb-10"
          texts={[
            "Discover music for your mood.",
            "Find the perfect playlist for your mood.",
            "Explore music for your mood.",
          ]}
        />

        <MoodSearchBar onSearch={handleSearchSubmit} />
        <MoodChips selected={selectedMood} onSelect={handleMoodSelect} />
      </section>

      <TrendingSection
        playlists={displayPlaylists}
        tracks={displayTracks}
        loading={isSearching}
        title={
          hasResults
            ? `Results for "${selectedMood ?? "your mood"}"`
            : "Trending Now"
        }
        onClear={hasResults ? handleClearSearch : undefined}
      />
    </main>
  );
}
