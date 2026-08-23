"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnikurLogo } from "./BrandGlyph";

const STRIPES = [
  { bg: "#0d0101" },
  { bg: "linear-gradient(135deg, #FF5100 0%, #EE0000 100%)" },
  { bg: "#0d0101" },
  { bg: "linear-gradient(135deg, #EE0000 0%, #FF3B00 100%)" },
  { bg: "#0d0101" },
  { bg: "linear-gradient(135deg, #FF5100 0%, #EE0000 100%)" },
  { bg: "#0d0101" },
];

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    // Intercept internal link clicks to trigger curtain wipe BEFORE changing route
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("#") &&
        href !== pathname &&
        !target.getAttribute("target") &&
        !isNavigating
      ) {
        e.preventDefault();
        pendingHref.current = href;
        setIsNavigating(true);
        runEnterAnimation(href);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [pathname, isNavigating]);

  const runEnterAnimation = (targetHref: string) => {
    if (!containerRef.current || !stripesRef.current.length) return;

    const stripes = stripesRef.current.filter(Boolean);

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    });

    // 1. Enable pointer events to block interactions during transition
    gsap.set(containerRef.current, { pointerEvents: "auto" });

    // 2. Wipe in horizontal stripes from left to right
    tl.fromTo(
      stripes,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.48, stagger: 0.04 }
    );

    // 3. Fade in glowing brand emblem in center of curtain
    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.85, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.35, ease: "power3.out" },
        "-=0.25"
      );
    }

    // 4. Change Next.js route while screen is 100% covered by curtain
    tl.add(() => {
      router.push(targetHref);
    });

    // 5. Short pause to ensure route content renders behind covered screen
    tl.to({}, { duration: 0.18 });

    // 6. Fade out center emblem
    if (logoRef.current) {
      tl.to(logoRef.current, {
        opacity: 0,
        scale: 1.1,
        filter: "blur(6px)",
        duration: 0.25,
        ease: "power2.in",
      });
    }

    // 7. Wipe out horizontal stripes to the right to reveal new page cleanly
    tl.to(
      stripes,
      {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.48,
        stagger: 0.04,
        onComplete: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, { pointerEvents: "none" });
          }
          setIsNavigating(false);
          pendingHref.current = null;
        },
      },
      "-=0.1"
    );
  };

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] flex flex-col h-screen w-screen overflow-hidden select-none"
    >
      {/* 7 Horizontal Skewed Liquid Stripes (Default initial scaleX is 0 to avoid initial page load flash) */}
      {STRIPES.map((stripe, index) => (
        <div
          key={index}
          ref={(el) => {
            stripesRef.current[index] = el;
          }}
          className="h-[14.285vh] w-full border-b border-[#FF5100]/20 shadow-2xl relative"
          style={{
            background: stripe.bg,
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      ))}

      {/* Center Luxury Brand Emblem & Pulsing Halo Badge */}
      <div
        ref={logoRef}
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center opacity-0"
      >
        {/* Ambient Halo Glow */}
        <div
          aria-hidden="true"
          className="absolute h-64 w-64 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #FF5100 0%, #EE0000 60%, transparent 80%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3 bg-[rgba(13,1,1,0.75)] px-8 py-5 rounded-2xl border border-white/15 backdrop-blur-xl shadow-2xl">
          <AnikurLogo size="sm" />
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFF7F7]">
            anikur STUDIOS
          </span>
        </div>
      </div>
    </div>
  );
}
