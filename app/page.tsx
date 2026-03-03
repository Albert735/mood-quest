import Navbar from '@/components/layout/Navbar';
import MoodSearchBar from '@/components/mood/MoodSearchBar';
import MoodChips from '@/components/mood/MoodChips';
import TrendingSection from '@/components/trending/TrendingSection';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Discover music for your mood.
        </h1>
        <p className="text-xl text-muted-foreground">
          Tell us how you feel or pick a mood to find the perfect playlist.
        </p>
        <MoodSearchBar />
        <MoodChips />
      </section>

      <TrendingSection />
    </main>
  );
}
