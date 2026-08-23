"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/data";
import { BrandCapsuleGlyph, KontourLogo } from "./BrandGlyph";

function CounterNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // Extract number and suffix from string e.g. "100%" -> targetNum: 100, suffix: "%"
  const match = value.match(/(\d+)(.*)/);
  const targetNum = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startTime: number | null = null;
    const duration = 1800; // 1.8s smooth count animation

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth cubic ease-out curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * targetNum);

      setDisplayValue(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(targetNum);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, targetNum]);

  return (
    <p ref={ref} className={className}>
      {displayValue}
      {suffix}
    </p>
  );
}

export default function MarketCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : STATS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < STATS.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Heading & Subtitle GSAP ScrollTrigger letter-by-letter scrub reveal (slow & smooth)
      if (headerRef.current) {
        const letters = headerRef.current.querySelectorAll(".gsap-market-letter");
        gsap.fromTo(
          letters,
          { opacity: 0.05, y: 16, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: { amount: 1.5, ease: "none" },
            ease: "none",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // 2. Stat Cards GSAP ScrollTrigger entrance
      if (cardsRef.current) {
        const cardElements = cardsRef.current.querySelectorAll(".gsap-stat-card");
        gsap.fromTo(
          cardElements,
          { opacity: 0, y: 60, scale: 0.94, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
            onComplete: () => {
              gsap.set(cardElements, { clearProps: "transform,filter" });
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderWordLetters = (word: string, extraClass = "") => (
    <span className={`inline-block whitespace-nowrap ${extraClass}`}>
      {word.split("").map((char, i) => (
        <span key={i} className="gsap-market-letter inline-block">
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-28 md:py-36 bg-[#0d0101] select-none"
    >
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
        <div className="mb-10 flex items-center justify-between">
          <KontourLogo size="sm" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BABABA]">
            Creative studio
          </span>
        </div>

        {/* Big Editorial Headline with GSAP Alphabet Reveal */}
        <div ref={headerRef}>
          <h2 className="text-display max-w-5xl text-4xl font-extrabold uppercase leading-[1.04] text-[#FFF7F7] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            {/* Line 1: WE SHAPE BRANDS WITH */}
            {renderWordLetters("WE", "mr-[0.25em]")}
            {renderWordLetters("SHAPE", "mr-[0.25em]")}
            {renderWordLetters("BRANDS", "mr-[0.25em]")}
            {renderWordLetters("WITH")}
            <br />
            {/* Line 2: CLARITY AN [Glyph] STRUCTURE */}
            {renderWordLetters("CLARITY", "mr-[0.25em]")}
            {renderWordLetters("AN")}
            <span className="gsap-market-letter inline-block align-middle mx-[0.08em]">
              <BrandCapsuleGlyph size="inline" />
            </span>
            {renderWordLetters("STRUCTURE")}
            <br />
            {/* Line 3: INTO RECOGNITION */}
            {renderWordLetters("INTO", "mr-[0.25em]")}
            {renderWordLetters("RECOGNITION")}
            <br />
            {/* Line 4: THAT LASTS */}
            {renderWordLetters("THAT", "mr-[0.25em]")}
            {renderWordLetters("LASTS")}
          </h2>

          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white font-normal flex flex-wrap gap-x-[0.25em]">
            {[
              "KONTOUR",
              "STUDIOS",
              "is",
              "a",
              "marketing",
              "agency",
              "and",
              "creative",
              "studio",
              "building",
              "clear",
              "brand",
              "systems",
              "for",
              "modern",
              "market",
              "presence.",
            ].map((word, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="gsap-market-letter inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>

        {/* Controls & 3 Stat Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          {/* Controls Column */}
          <div className="flex flex-row items-center justify-between lg:col-span-3 lg:flex-col lg:items-start lg:gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BABABA]">
              Market Presence
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF7F7] text-[#100101] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next card"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5100] text-[#FFF7F7] transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md shadow-[#FF5100]/40 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* 3 Stat Cards Horizontal Grid with Smooth GSAP Entrance Motion */}
          <div ref={cardsRef} className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  animate={{
                    scale: i === currentIndex ? 1.02 : 0.98,
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setCurrentIndex(i)}
                  className="gsap-stat-card cursor-pointer origin-bottom"
                >
                  <StatCard stat={stat} isActive={i === currentIndex} />
                </motion.div>
              ))}
            </div>
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
        <CounterNumber
          value={stat.value}
          className="text-display text-5xl font-light tracking-tight md:text-6xl text-[#100101]"
        />
        <div>
          <p className="text-base font-bold tracking-tight text-[#100101]">
            {stat.title}
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-black/80 font-normal">
            {stat.description}
          </p>
        </div>
      </div>
    );
  }

  // Card 3: Editorial Portrait with Anikur's Photo
  if (stat.variant === "photo") {
    return (
      <div className={`${baseCard} bg-[#0d0101] text-[#FFF7F7] group`}>
        {/* Warm Ambient Spotlight Glow behind Anikur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-80 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #FF5100 0%, #EE0000 50%, transparent 80%)",
          }}
        />

        {/* Anikur Portrait Image */}
        <Image
          src="/images/anikur photo.png"
          alt="Anikur portrait"
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Editorial Dark Gradient Layer for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0101] via-[#0d0101]/45 to-[#0d0101]/20 transition-opacity duration-500 group-hover:opacity-85" />

        {/* Card Value Header with Counter */}
        <div className="relative z-10">
          <CounterNumber
            value={stat.value}
            className="text-display text-5xl font-light tracking-tight md:text-6xl text-[#FFF7F7] drop-shadow-md"
          />
        </div>

        {/* Card Footer Info */}
        <div className="relative z-10">
          <p className="text-base font-bold tracking-tight text-[#FFF7F7]">
            {stat.title}
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-white/90 font-normal max-w-[260px]">
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
        <CounterNumber
          value={stat.value}
          className="text-display text-5xl font-light tracking-tight md:text-6xl text-[#FFF7F7]"
        />
      </div>

      <div className="relative z-10">
        <p className="text-base font-bold tracking-tight text-[#FFF7F7]">
          {stat.title}
        </p>
        <p className="mt-2 text-[16px] leading-relaxed text-white font-normal">
          {stat.description}
        </p>
      </div>
    </div>
  );
}
