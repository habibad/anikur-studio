"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PillButton from "./PillButton";
import { BrandCapsuleGlyph } from "./BrandGlyph";

const STUDIO_EASE = [0.16, 1, 0.3, 1] as const;

const EQUALIZER_BARS = [
  35, 55, 25, 75, 45, 85, 40, 65, 30, 50, 80, 45, 70, 35, 60, 90, 50, 75, 40,
];

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Title & Top-Right Label GSAP ScrollTrigger letter-by-letter scrub reveal
      if (headerRef.current) {
        const letters = headerRef.current.querySelectorAll(".gsap-philosophy-letter");
        gsap.fromTo(
          letters,
          { opacity: 0.05, y: 16, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: { amount: 1.2, ease: "none" },
            ease: "none",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              end: "bottom 55%",
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Right Column Copy Paragraphs GSAP ScrollTrigger letter-by-letter scrub reveal
      if (copyRef.current) {
        const copyLetters = copyRef.current.querySelectorAll(".gsap-copy-letter");
        gsap.fromTo(
          copyLetters,
          { opacity: 0.05, y: 14, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: { amount: 1.5, ease: "none" },
            ease: "none",
            scrollTrigger: {
              trigger: copyRef.current,
              start: "top 85%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      }

      // 3. Bottom Model Lockup (Delayed Start at top 68%, Sequential: Image -> Glow -> Watermark)
      if (lockupRef.current) {
        const glow = lockupRef.current.querySelector(".gsap-lockup-glow");
        const watermark = lockupRef.current.querySelector(".gsap-lockup-watermark");
        const image = lockupRef.current.querySelector(".gsap-lockup-image");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: lockupRef.current,
            start: "top 68%", // Only starts after user scrolls further down into view
            toggleActions: "play reverse play reverse",
          },
        });

        // 1. Model Image Cutout comes in FIRST
        tl.fromTo(
          image,
          { opacity: 0, y: 80, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.15, ease: "power3.out" },
          0
        );

        // 2. Background Glow comes in SECOND
        tl.fromTo(
          glow,
          { opacity: 0, scale: 0.8, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.25, ease: "power3.out" },
          0.28
        );

        // 3. STUDIOS Watermark Text comes in THIRD
        tl.fromTo(
          watermark,
          { opacity: 0, y: 90, scale: 0.96 },
          { opacity: 0.95, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
          0.52
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderWordLetters = (word: string, extraClass = "") => (
    <span className={`inline-block whitespace-nowrap ${extraClass}`}>
      {word.split("").map((char, i) => (
        <span key={i} className="gsap-philosophy-letter inline-block">
          {char}
        </span>
      ))}
    </span>
  );

  const renderParagraphLetters = (words: string[]) => (
    <p className="text-[16px] leading-relaxed text-white font-normal flex flex-wrap gap-x-[0.25em]">
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, cIdx) => (
            <span key={cIdx} className="gsap-copy-letter inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-28 md:pt-36 pb-0 bg-[#0d0101] flex flex-col justify-between select-none"
    >
      <div className="relative z-20 mx-auto max-w-[1800px] px-6 md:px-12 lg:px-16 w-full">
        {/* Header Row (Left Headline + Right Philosophy Label) */}
        <div ref={headerRef} className="flex items-start justify-between">
          <div>
            <h2 className="text-display max-w-3xl text-4xl font-extrabold uppercase leading-[1] text-[#FFF7F7] sm:text-6xl lg:text-7xl tracking-tight">
              {/* CLEAR */}
              {renderWordLetters("CLEAR")}
              <br />
              {/* BRAN [Glyph] S STAY */}
              {renderWordLetters("BRAN")}
              <span className="gsap-philosophy-letter inline-block align-middle mx-[0.08em]">
                <BrandCapsuleGlyph size="inline" />
              </span>
              {renderWordLetters("S", "mr-[0.25em]")}
              {renderWordLetters("STAY")}
              <br />
              {/* IN MEMORY. */}
              {renderWordLetters("IN", "mr-[0.25em]")}
              {renderWordLetters("MEMORY.")}
            </h2>
          </div>

          <div className="pt-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BABABA]">
              {renderWordLetters("Philosophy")}
            </span>
          </div>
        </div>

        {/* 3-Column Content Layout */}
        <div className="relative mt-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Analytics Widgets */}
          <div className="flex flex-col gap-5 lg:col-span-4 z-30 pb-4">
            {/* Widget 1: Identity Scope */}
            <motion.div
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.2, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 1.15, ease: STUDIO_EASE }}
              className="rounded-3xl border border-white/15 bg-[rgba(24,8,8,0.85)] p-6 backdrop-blur-2xl shadow-xl max-w-sm origin-bottom"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#BABABA]">
                Identity Scope:
              </p>
              <p className="text-display mt-2 text-2xl font-light text-[#FFF7F7] md:text-3xl">
                $18,000
              </p>

              <div className="mt-5 flex items-center justify-between text-[12px] font-medium text-[#BABABA]">
                <span>Progress</span>
                <span className="text-[#FF5100] font-bold">70%</span>
              </div>

              {/* Segmented vertical bars */}
              <div className="mt-2.5 flex h-3.5 gap-[3px] overflow-hidden">
                {Array.from({ length: 22 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: i * 0.02, duration: 0.35 }}
                    className={`h-full w-full origin-bottom rounded-xs ${
                      i < 15 ? "bg-[#FF5100]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Widget 2: Campaign Scope */}
            <motion.div
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.2, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 1.15, delay: 0.12, ease: STUDIO_EASE }}
              className="rounded-3xl border border-white/15 bg-[rgba(24,8,8,0.85)] p-6 backdrop-blur-2xl shadow-xl max-w-sm origin-bottom"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#BABABA]">
                Campaign Scope:
              </p>
              <p className="text-display mt-2 text-2xl font-light text-[#FFF7F7] md:text-3xl">
                $11,500
              </p>

              {/* Dynamic Equalizer Visualizer */}
              <div className="mt-5 flex h-14 items-end gap-[3px] overflow-hidden">
                {EQUALIZER_BARS.map((heightPct, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${heightPct}%` }}
                    viewport={{ amount: 0.2 }}
                    transition={{
                      delay: idx * 0.025,
                      duration: 0.5,
                      ease: STUDIO_EASE,
                    }}
                    className={`w-full rounded-xs transition-all ${
                      idx % 3 === 0
                        ? "bg-[#FF5100]"
                        : idx % 2 === 0
                        ? "bg-[#EE0000]"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center Spacer Column for model headroom */}
          <div className="hidden lg:col-span-4 lg:block" />

          {/* Right Column: Philosophy Copy & CTA with Letter-by-Letter Scrub Reveal */}
          <div ref={copyRef} className="flex flex-col gap-6 lg:col-span-4 z-30 pb-4 max-w-md">
            {renderParagraphLetters([
              "A", "brand", "becomes", "truly", "memorable", "when", "people", "can",
              "understand", "it", "quickly", "and", "recognize", "it", "without",
              "extra", "effort.", "Clarity", "creates", "the", "first", "strong", "connection."
            ])}

            {renderParagraphLetters([
              "Consistency", "turns", "that", "connection", "into", "lasting", "trust.",
              "When", "the", "same", "visual", "logic", "appears", "across", "every",
              "brand", "touchpoint,", "the", "brand", "starts", "to", "feel", "familiar."
            ])}

            {renderParagraphLetters([
              "Recognition", "is", "not", "a", "random", "effect.", "It", "is", "built",
              "through", "form,", "contrast,", "repetition", "and", "a", "clear",
              "system", "that", "keeps", "the", "brand", "present", "in", "people's", "minds."
            ])}

            <div className="pt-2">
              <PillButton label="Start a Project" href="/contact" variant="primary" size="lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Layered Watermark & Center Model Lockup with GSAP ScrollTrigger Sequential Entrance & Reverse Exit */}
      <div
        ref={lockupRef}
        className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[560px] -mt-16 sm:-mt-24 md:-mt-32 flex items-end justify-center overflow-hidden"
      >
        {/* Layer 0: Radiant Ambient Spotlight Glow */}
        <div
          aria-hidden="true"
          className="gsap-lockup-glow pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[450px] w-[750px] rounded-full opacity-95 blur-[120px] select-none z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, #FF5100 0%, #EE0000 45%, rgba(255, 81, 0, 0.2) 75%, transparent 85%)",
          }}
        />

        {/* Layer 1: Giant Watermark STUDIOS */}
        <div className="gsap-lockup-watermark absolute inset-x-0 bottom-0 z-10 flex justify-center text-center pointer-events-none select-none overflow-hidden w-full">
          <span className="block font-black uppercase text-[22vw] sm:text-[20vw] md:text-[18.5vw] lg:text-[17.5vw] leading-[0.8] tracking-tighter text-[#FFF7F7]">
            STUDIOS
          </span>
        </div>

        {/* Layer 2: Female Model Cutout Profile */}
        <div className="gsap-lockup-image absolute inset-x-0 bottom-0 z-20 mx-auto h-full w-full max-w-[420px] lg:max-w-[480px] pointer-events-none flex items-end justify-center">
          <div className="relative h-full w-full">
            <Image
              src="/images/anikur-photo-cutout.png"
              alt="Female silhouette profile with warm rim lighting"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
