import { Marquee } from "@/components/ui/marquee";

export default function HeroMusic() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <Marquee pauseOnHover className="w-full [--duration:22s]">
        {cards.map((_, index) => (
          <div
            key={index}
            className="h-60 w-50 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 mx-2"
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent"></div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
