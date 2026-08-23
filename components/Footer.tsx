"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NAV_ALL } from "@/lib/data";
import PillButton from "./PillButton";
import { AnikurLogo } from "./BrandGlyph";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll(".gsap-footer-letter");
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
              trigger: titleRef.current,
              start: "top 95%",
              end: "bottom bottom",
              scrub: 1,
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
        <span key={i} className="gsap-footer-letter inline-block">
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <footer ref={containerRef} className="relative border-t border-white/10 bg-[#0d0101] select-none">
      <div className="mx-auto max-w-[1800px] px-6 py-24 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <div ref={titleRef}>
              <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.04] text-[#FFF7F7] tracking-tight">
                {/* Line 1: Let's build a brand */}
                {renderWordLetters("Let's", "mr-[0.25em]")}
                {renderWordLetters("build", "mr-[0.25em]")}
                {renderWordLetters("a", "mr-[0.25em]")}
                {renderWordLetters("brand")}
                <br />
                {/* Line 2: that stays in memory. */}
                {renderWordLetters("that", "mr-[0.25em]")}
                {renderWordLetters("stays", "mr-[0.25em]")}
                {renderWordLetters("in", "mr-[0.25em]")}
                {renderWordLetters("memory.")}
              </h2>
            </div>
            <div className="mt-8">
              <PillButton label="Start a Project" href="/contact" variant="primary" size="lg" />
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.16em] text-[#BABABA] sm:grid-cols-4">
            {NAV_ALL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit transition-colors duration-200 hover:text-[#FF5100]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-[#BABABA] sm:flex-row sm:items-center">
          <AnikurLogo size="sm" />
          <span className="text-[13px] tracking-wider text-[#BABABA]/80">
            © {new Date().getFullYear()} anikur STUDIOS. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
