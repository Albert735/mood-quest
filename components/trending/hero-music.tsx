import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export default function HeroMusic() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <Marquee pauseOnHover className="w-full [--duration:22s]">
        {cards.map((_, index) => (
          <div
            key={index}
            className="h-60 w-50  shrink-0 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 mx-2"
          >
            <Image
              src="/assets/drake.png"
              alt="Card Image"
              fill
              className="object-cover rounded-2xl"
              unoptimized
            />
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#00130C] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#00100A] to-transparent" />
    </div>
  );
}
