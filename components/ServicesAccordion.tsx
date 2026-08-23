"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/data";
import PillButton from "./PillButton";
import { BrandCapsuleGlyph } from "./BrandGlyph";

const STUDIO_EASE = [0.16, 1, 0.3, 1] as const;

export default function ServicesAccordion() {
  // Default open to [02] VISUAL IDENTITY (index 1)
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Title & Paragraph GSAP ScrollTrigger letter-by-letter scrub reveal (completes early)
      if (headerRef.current) {
        const letters = headerRef.current.querySelectorAll(".gsap-header-letter");
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
              end: "bottom 60%", // Completes header reveal when header is in top half of screen
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Accordion List Items GSAP ScrollTrigger reveal (starts AFTER header finishes)
      itemsRef.current.forEach((item) => {
        if (!item) return;

        const divider = item.querySelector(".gsap-divider");
        const number = item.querySelector(".gsap-index");
        const title = item.querySelector(".gsap-title");
        const btn = item.querySelector(".gsap-btn");

        const targets = [number, title, btn].filter(Boolean);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%", // Triggers AFTER header title is fully revealed
            toggleActions: "play none none reverse",
          },
        });

        // Expand border divider horizontally
        if (divider) {
          tl.fromTo(
            divider,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1.2, ease: "power4.out" },
            0
          );
        }

        // Stagger entrance of row elements & clear props so hover/active CSS state is pristine
        tl.fromTo(
          targets,
          { opacity: 0, y: 35, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(targets, { clearProps: "transform,filter" });
            },
          },
          0.1
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    // Recalibrate GSAP ScrollTrigger trigger positions after accordion expand/collapse height changes
    setTimeout(() => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }, 450);
  };

  return (
    <section
      ref={containerRef}
      className="relative mx-auto max-w-[1800px] px-6 py-28 md:px-12 lg:px-16 bg-[#0d0101] overflow-hidden select-none"
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
      >
        <div className="max-w-3xl">
          <h2 className="text-display text-4xl font-extrabold uppercase leading-[1] text-[#FFF7F7] sm:text-6xl lg:text-7xl tracking-tight">
            {/* CLEAR */}
            <span className="inline-block whitespace-nowrap mr-[0.25em]">
              {"CLEAR".split("").map((char, i) => (
                <span key={i} className="gsap-header-letter inline-block">
                  {char}
                </span>
              ))}
            </span>
            {/* SYSTEMS */}
            <span className="inline-block whitespace-nowrap mr-[0.25em]">
              {"SYSTEMS".split("").map((char, i) => (
                <span key={i} className="gsap-header-letter inline-block">
                  {char}
                </span>
              ))}
            </span>
            {/* FOR */}
            <span className="inline-block whitespace-nowrap">
              {"FOR".split("").map((char, i) => (
                <span key={i} className="gsap-header-letter inline-block">
                  {char}
                </span>
              ))}
            </span>
            <br />
            {/* BRAN */}
            <span className="inline-block whitespace-nowrap">
              {"BRAN".split("").map((char, i) => (
                <span key={i} className="gsap-header-letter inline-block">
                  {char}
                </span>
              ))}
            </span>
            {/* Capsule Glyph */}
            <span className="gsap-header-letter inline-block align-middle mx-[0.08em]">
              <BrandCapsuleGlyph size="inline" />
            </span>
            {/* GROWTH. */}
            <span className="inline-block whitespace-nowrap">
              {"GROWTH.".split("").map((char, i) => (
                <span key={i} className="gsap-header-letter inline-block">
                  {char}
                </span>
              ))}
            </span>
          </h2>
        </div>

        <div className="max-w-xs text-[16px] leading-relaxed text-white lg:text-right font-normal">
          <p className="flex flex-wrap lg:justify-end gap-x-[0.25em]">
            {[
              "Strategy,",
              "identity,",
              "content",
              "and",
              "campaigns",
              "connected",
              "into",
              "one",
              "clear",
              "structure,",
              "identity,",
              "content",
              "and",
              "campaigns",
            ].map((word, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="gsap-header-letter inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div>
        {SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative origin-bottom"
            >
              {/* Expanding White/Glass Border Line */}
              <div className="gsap-divider h-[1px] w-full bg-white/15" />

              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={isActive}
                className="group flex w-full items-center justify-between py-8 text-left transition-colors duration-300 md:py-10 cursor-pointer"
              >
                {/* Index [01], [02], [03], [04] */}
                <span className="gsap-index w-12 shrink-0 font-mono text-sm tracking-widest text-[#BABABA] md:w-20">
                  [{service.index}]
                </span>

                {/* Service Title */}
                <span
                  className={`gsap-title text-display flex-1 text-2xl uppercase tracking-tight transition-all duration-400 sm:text-4xl md:text-5xl lg:text-6xl ${
                    isActive
                      ? "text-[#FFF7F7] font-bold translate-x-1 sm:translate-x-2"
                      : "text-white/80 group-hover:text-[#FFF7F7] group-hover:translate-x-1 sm:group-hover:translate-x-2 font-medium"
                  }`}
                >
                  {service.title}
                </span>

                {/* Circular Toggle Button with Smooth Rotating Arrow */}
                <motion.span
                  animate={{ rotate: isActive ? 0 : 135 }}
                  transition={{ duration: 0.45, ease: STUDIO_EASE }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className={`gsap-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:h-14 md:w-14 shadow-md ${
                    isActive
                      ? "bg-[#FFF7F7] text-[#100101]"
                      : "border border-white/15 bg-white/[0.06] text-[#FFF7F7] group-hover:border-white/40 group-hover:bg-white/[0.12]"
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />
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
                        height: { duration: 0.48, ease: STUDIO_EASE },
                        opacity: { duration: 0.32, delay: 0.06, ease: "easeOut" },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.38, ease: STUDIO_EASE },
                        opacity: { duration: 0.2, ease: "easeIn" },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 22, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.08, ease: STUDIO_EASE }}
                      className="grid grid-cols-1 gap-10 pb-12 pt-2 md:grid-cols-12 md:pl-20"
                    >
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

                      {/* Right Column: Paragraphs */}
                      <div className="flex flex-col gap-5 md:col-span-8">
                        {service.paragraphs.map((para, pIdx) => (
                          <motion.p
                            key={pIdx}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.12 + pIdx * 0.07, ease: STUDIO_EASE }}
                            className="max-w-2xl text-[16px] leading-relaxed text-white font-normal"
                          >
                            {para}
                          </motion.p>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        {/* Bottom Closing Divider Line */}
        <div className="h-[1px] w-full bg-white/15" />
      </div>
    </section>
  );
}
