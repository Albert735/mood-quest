import MoodSearchBar from "@/components/mood/MoodSearchBar";
import MoodChips from "@/components/mood/MoodChips";
import TrendingSection from "@/components/trending/TrendingSection";
import HeroMusic from "@/components/trending/hero-music";
import { MorphingText } from "@/components/ui/morphing-text";
import { LightRays } from "@/components/ui/light-rays";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-28">
      <LightRays className="absolute inset-0 z-0" color="#054A29" />
      <HeroMusic />
      <section className="flex flex-col items-center justify-between gap-18 text-center h-110 ">
        <MorphingText
          className="text-3xl font-bold tracking-tight sm:text-6xl max-w-5xl mb-10"
          texts={[
            "Discover music for your mood.",
            "Find the perfect playlist for your mood.",
            "Explore music for your mood.",
          ]}
        />

        <div className="flex flex-col items-center gap-6">
          <MoodSearchBar />
          <MoodChips />
        </div>
      </section>

      <TrendingSection />
    </main>
  );
}
