"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { STATS } from "@/lib/data";
import Reveal, { RevealStagger, staggerItem } from "./Reveal";
import { BrandCapsuleGlyph, KontourLogo } from "./BrandGlyph";

export default function MarketCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : STATS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < STATS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-[#0d0101]">
      {/* Radiant Top-Right Ambient Glow Field matching reference Image 2 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-20 h-[800px] w-[800px] md:h-[1000px] md:w-[1000px] rounded-full opacity-95 blur-[120px] select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #FF5100 0%, #EE0000 42%, rgba(255, 81, 0, 0.25) 70%, transparent 88%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1800px] px-6 md:px-12 lg:px-16">
        {/* Top Header Row */}
        <Reveal className="mb-10 flex items-center justify-between">
          <KontourLogo size="sm" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BABABA]">
            Creative studio
          </span>
        </Reveal>

        {/* Big Editorial Headline */}
        <Reveal delay={0.1}>
          <h2 className="text-display max-w-5xl text-4xl font-extrabold uppercase leading-[1.04] text-[#FFF7F7] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            WE SHAPE BRANDS WITH
            <br />
            CLARITY AN
            <BrandCapsuleGlyph size="inline" className="mx-[0.08em]" />
            STRUCTURE
            <br />
            INTO RECOGNITION
            <br />
            THAT LASTS
          </h2>
          <p className="mt-6 max-w-md text-xs md:text-sm leading-relaxed text-[#BABABA] font-normal">
            KONTOUR STUDIOS is a marketing agency and creative studio building
            clear brand systems for modern market presence.
          </p>
        </Reveal>

        {/* Controls & 3 Stat Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          {/* Controls Column */}
          <Reveal delay={0.15} className="flex flex-row items-center justify-between lg:col-span-3 lg:flex-col lg:items-start lg:gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BABABA]">
              Market Presence
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF7F7] text-[#100101] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next card"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5100] text-[#FFF7F7] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md shadow-[#FF5100]/40"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </Reveal>

          {/* 3 Stat Cards Horizontal Grid */}
          <div className="lg:col-span-9">
            <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  variants={staggerItem}
                  animate={{
                    opacity: i === currentIndex ? 1 : 0.85,
                    scale: i === currentIndex ? 1.02 : 0.98,
                  }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setCurrentIndex(i)}
                  className="cursor-pointer"
                >
                  <StatCard stat={stat} isActive={i === currentIndex} />
                </motion.div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  isActive,
}: {
  stat: (typeof STATS)[number];
  isActive: boolean;
}) {
  const baseCard = `relative flex h-80 md:h-[350px] flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 shadow-xl ${
    isActive
      ? "ring-2 ring-[#FF5100] shadow-[0_20px_45px_rgba(255,81,0,0.25)]"
      : "border border-white/15"
  }`;

  // Card 2: High Contrast Pure White Card
  if (stat.variant === "light") {
    return (
      <div className={`${baseCard} bg-[#FFF7F7] text-[#100101] shadow-[0_20px_40px_rgba(255,255,255,0.08)]`}>
        <p className="text-display text-5xl font-light tracking-tight md:text-6xl text-[#100101]">
          {stat.value}
        </p>
        <div>
          <p className="text-base font-bold tracking-tight text-[#100101]">
            {stat.title}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-black/80 font-normal">
            {stat.description}
          </p>
        </div>
      </div>
    );
  }

  // Card 3: Editorial Silhouette with Portrait
  if (stat.variant === "photo") {
    return (
      <div className={`${baseCard} bg-[#140202] text-[#FFF7F7]`}>
        <Image
          src="/images/stat-bucket-hat.png"
          alt="Client satisfaction model portrait"
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />
        {/* Subtle Gradient Blend to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100101]/95 via-[#100101]/30 to-transparent" />

        <div className="relative z-10">
          <p className="text-display text-5xl font-light tracking-tight md:text-6xl text-[#FFF7F7]">
            {stat.value}
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-base font-bold tracking-tight text-[#FFF7F7]">
            {stat.title}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[#BABABA]">
            {stat.description}
          </p>
        </div>
      </div>
    );
  }

  // Card 1: Glowing Red/Orange Fluid Mesh Backdrop
  return (
    <div className={`${baseCard} text-[#FFF7F7] overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, #FF3B00 0%, #EE0000 35%, #FF5100 65%, #100101 90%)",
        }}
      />
      <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-[#EE0000]/80 blur-3xl animate-glow-shift" />
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#FF7700]/70 blur-2xl animate-glow-shift-slow" />

      <div className="relative z-10">
        <p className="text-display text-5xl font-light tracking-tight md:text-6xl text-[#FFF7F7]">
          {stat.value}
        </p>
      </div>

      <div className="relative z-10">
        <p className="text-base font-bold tracking-tight text-[#FFF7F7]">
          {stat.title}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-[#FFF7F7]/90 font-normal">
          {stat.description}
        </p>
      </div>
    </div>
  );
}
