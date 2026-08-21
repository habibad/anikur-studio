"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import PillButton from "./PillButton";
import Reveal from "./Reveal";
import { BrandCapsuleGlyph } from "./BrandGlyph";

export default function ServicesAccordion() {
  // Default open to [02] VISUAL IDENTITY (index 1) as in reference Image 3
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative mx-auto max-w-[1800px] px-6 py-28 md:px-12 lg:px-16 bg-[#0d0101]">
      {/* Section Header */}
      <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <Reveal className="max-w-3xl">
          <h2 className="text-display text-4xl font-extrabold uppercase leading-[1] text-[#FFF7F7] sm:text-6xl lg:text-7xl tracking-tight">
            CLEAR SYSTEMS FOR
            <br />
            BRAN
            <BrandCapsuleGlyph size="inline" className="mx-[0.08em]" />
            GROWTH.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="max-w-xs text-xs md:text-sm leading-relaxed text-[#BABABA] lg:text-right font-normal">
          <p>
            Strategy, identity, content and campaigns connected into one clear
            structure, identity, content and campaigns
          </p>
        </Reveal>
      </div>

      {/* Accordion List with Crisp White Dividers */}
      <div className="border-t border-white/15">
        {SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={service.index} className="border-b border-white/15">
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={isActive}
                className="group flex w-full items-center justify-between py-8 text-left transition-colors duration-300 md:py-10"
              >
                {/* Index [01], [02], [03], [04] */}
                <span className="w-12 shrink-0 font-mono text-sm tracking-widest text-[#BABABA] md:w-20">
                  [{service.index}]
                </span>

                {/* Service Title */}
                <span
                  className={`text-display flex-1 text-2xl uppercase tracking-tight transition-colors duration-300 sm:text-4xl md:text-5xl lg:text-6xl ${
                    isActive
                      ? "text-[#FFF7F7] font-bold"
                      : "text-white/80 group-hover:text-[#FFF7F7] font-medium"
                  }`}
                >
                  {service.title}
                </span>

                {/* Circular Toggle Button: White ↗ for open, Dark ↘ for closed */}
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-14 md:w-14 shadow-md ${
                    isActive
                      ? "bg-[#FFF7F7] text-[#100101]"
                      : "border border-white/15 bg-white/[0.06] text-[#FFF7F7] group-hover:border-white/40 group-hover:bg-white/[0.1]"
                  }`}
                >
                  {isActive ? (
                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />
                  )}
                </motion.span>
              </button>

              {/* Expandable Accordion Body */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="accordion-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.4 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-10 pb-12 pt-2 md:grid-cols-12 md:pl-20">
                      {/* Left Column: Eyebrow + CTA */}
                      <div className="flex flex-col justify-between gap-6 md:col-span-4">
                        <p className="whitespace-pre-line text-xs font-medium leading-relaxed tracking-wider uppercase text-[#BABABA]">
                          {service.eyebrow}
                        </p>
                        <div className="pt-4">
                          <PillButton
                            label="Start a Project"
                            href="/contact"
                            variant="primary"
                          />
                        </div>
                      </div>

                      {/* Right Column: 3 Paragraphs */}
                      <div className="flex flex-col gap-5 md:col-span-8">
                        {service.paragraphs.map((para, pIdx) => (
                          <p
                            key={pIdx}
                            className="max-w-2xl text-xs md:text-sm leading-relaxed text-[#D4D4D4] font-normal"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
