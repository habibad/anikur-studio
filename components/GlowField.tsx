"use client";

import React from "react";

interface GlowFieldProps {
  className?: string;
  variant?: "hero" | "market" | "bottom" | "subtle";
}

export default function GlowField({
  className = "",
  variant = "hero",
}: GlowFieldProps) {
  if (variant === "market") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute select-none overflow-visible ${className}`}
      >
        {/* Right Section Glow - Intense & Blazing Orange-Red */}
        <div
          className="absolute -right-20 top-1/4 h-[750px] w-[750px] md:h-[950px] md:w-[950px] rounded-full opacity-95 blur-[120px] animate-glow-shift-slow"
          style={{
            background:
              "radial-gradient(circle, #FF5100 0%, #EE0000 40%, rgba(255, 81, 0, 0.3) 65%, transparent 80%)",
          }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-[550px] w-[550px] rounded-full opacity-80 blur-[100px] animate-glow-shift"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 110, 0, 0.9) 0%, rgba(238, 0, 0, 0.5) 45%, transparent 75%)",
          }}
        />
      </div>
    );
  }

  if (variant === "bottom") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute select-none overflow-visible ${className}`}
      >
        {/* Bottom Section Glow - Fiery Backlight behind STUDIOS */}
        <div
          className="absolute left-1/2 bottom-0 h-[650px] w-[1100px] -translate-x-1/2 translate-y-1/6 rounded-full opacity-95 blur-[110px] animate-glow-shift"
          style={{
            background:
              "radial-gradient(circle, #FF5100 0%, #EE0000 45%, rgba(255, 81, 0, 0.35) 65%, transparent 80%)",
          }}
        />
        <div
          className="absolute left-1/2 bottom-10 h-[450px] w-[700px] -translate-x-1/2 rounded-full opacity-70 blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 140, 0, 0.8) 0%, rgba(238, 0, 0, 0.4) 50%, transparent 75%)",
          }}
        />
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute select-none overflow-visible ${className}`}
      >
        <div
          className="absolute h-[450px] w-[450px] rounded-full opacity-60 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 81, 0, 0.5) 0%, rgba(238, 0, 0, 0.25) 55%, transparent 75%)",
          }}
        />
      </div>
    );
  }

  // Hero variant (Blazing Top-Left Hero Glow)
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none overflow-visible ${className}`}
    >
      <div
        className="absolute -left-20 -top-20 h-[800px] w-[800px] md:h-[1050px] md:w-[1050px] rounded-full opacity-95 blur-[110px] animate-glow-shift"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #FF5100 0%, #EE0000 40%, rgba(238, 0, 0, 0.3) 65%, transparent 80%)",
        }}
      />
      <div
        className="absolute left-1/4 top-10 h-[600px] w-[600px] rounded-full opacity-65 blur-[120px] animate-glow-shift-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 120, 0, 0.8) 0%, rgba(238, 0, 0, 0.35) 50%, transparent 75%)",
        }}
      />
    </div>
  );
}
