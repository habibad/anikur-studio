"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "./PillButton";
import Reveal from "./Reveal";
import { BrandCapsuleGlyph } from "./BrandGlyph";

const EQUALIZER_BARS = [
  35, 55, 25, 75, 45, 85, 40, 65, 30, 50, 80, 45, 70, 35, 60, 90, 50, 75, 40,
];

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-0 bg-[#0d0101] flex flex-col justify-between">
      <div className="relative z-20 mx-auto max-w-[1800px] px-6 md:px-12 lg:px-16 w-full">
        {/* Header Row */}
        <div className="flex items-start justify-between">
          <Reveal>
            <h2 className="text-display max-w-3xl text-4xl font-extrabold uppercase leading-[1] text-[#FFF7F7] sm:text-6xl lg:text-7xl tracking-tight">
              CLEAR
              <br />
              BRAN
              <BrandCapsuleGlyph size="inline" className="mx-[0.08em]" />
              S STAY
              <br />
              IN MEMORY.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BABABA]">
              Philosophy
            </span>
          </Reveal>
        </div>

        {/* 3-Column Content Layout */}
        <div className="relative mt-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Analytics Widgets */}
          <div className="flex flex-col gap-5 lg:col-span-4 z-30 pb-4">
            {/* Widget 1: Identity Scope */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/15 bg-[rgba(24,8,8,0.85)] p-6 backdrop-blur-2xl shadow-xl max-w-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#BABABA]">
                Identity Scope:
              </p>
              <p className="text-display mt-2 text-2xl font-light text-[#FFF7F7] md:text-3xl">
                $18,000
              </p>

              <div className="mt-5 flex items-center justify-between text-[11px] font-medium text-[#BABABA]">
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
                    viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/15 bg-[rgba(24,8,8,0.85)] p-6 backdrop-blur-2xl shadow-xl max-w-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#BABABA]">
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
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.025,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
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

          {/* Right Column: Philosophy Copy & CTA */}
          <div className="flex flex-col gap-6 lg:col-span-4 z-30 pb-4 max-w-md">
            <p className="text-xs md:text-sm leading-relaxed text-[#D4D4D4] font-normal">
              A brand becomes truly memorable when people can understand it
              quickly and recognize it without extra effort. Clarity creates the
              first strong connection.
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-[#D4D4D4] font-normal">
              Consistency turns that connection into lasting trust. When the same
              visual logic appears across every brand touchpoint, the brand starts
              to feel familiar.
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-[#D4D4D4] font-normal">
              Recognition is not a random effect. It is built through form,
              contrast, repetition and a clear system that keeps the brand
              present in people&apos;s minds.
            </p>

            <div className="pt-2">
              <PillButton label="Start a Project" href="/contact" variant="primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Layered Watermark & Center Model Lockup matching Image 2 */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[560px] -mt-16 sm:-mt-24 md:-mt-32 flex items-end justify-center overflow-hidden">
        {/* Radiant Ambient Glow Behind Female Model */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[450px] w-[750px] rounded-full opacity-95 blur-[120px] select-none z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, #FF5100 0%, #EE0000 45%, rgba(255, 81, 0, 0.2) 75%, transparent 85%)",
          }}
        />

        {/* Layer 1: Giant Watermark STUDIOS */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center text-center pointer-events-none select-none">
          <span className="block font-black uppercase text-[22vw] sm:text-[20vw] md:text-[18.5vw] lg:text-[17.5vw] leading-[0.8] tracking-tighter text-[#FFF7F7] opacity-95">
            STUDIOS
          </span>
        </div>

        {/* Layer 2: Female Model Cutout Profile overlapping STUDIOS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 z-20 mx-auto h-full w-full max-w-[420px] lg:max-w-[480px] pointer-events-none flex items-end justify-center"
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/philosophy-female.png"
              alt="Female silhouette profile with warm rim lighting"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
