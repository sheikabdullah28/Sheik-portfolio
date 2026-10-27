"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B]">

      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-[92%] max-w-7xl items-center justify-between gap-16">

        <HeroContent />

        <HeroImage />

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-3 w-1 rounded-full bg-orange-400"></div>
        </div>
      </div>

    </section>
  );
}