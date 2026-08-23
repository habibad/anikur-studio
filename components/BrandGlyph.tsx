"use client";

import React from "react";
import Link from "next/link";

interface BrandCapsuleGlyphProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "inline";
}

/**
 * BrandCapsuleGlyph renders the signature pill/capsule shaped glyph
 * replacing the 'D' character in anikur STUDIOS brand typography.
 */
export function BrandCapsuleGlyph({
  className = "",
  size = "inline",
}: BrandCapsuleGlyphProps) {
  const sizeClasses = {
    sm: "w-5 h-[0.75rem] border-[1.5px] -translate-y-[0.05em]",
    md: "w-7 h-4 border-[2px] -translate-y-[0.06em]",
    lg: "w-10 h-6 border-[2.5px] -translate-y-[0.08em]",
    xl: "w-12 h-7 md:w-16 md:h-9 border-[2.5px] md:border-[3.5px] -translate-y-[0.08em]",
    inline: "w-[1.65em] h-[0.65em] border-[0.09em] -translate-y-[0.06em]",
  };

  return (
    <span
      className={`inline-block rounded-full border-current align-middle transition-transform duration-300 ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    />
  );
}

/**
 * Stacked 2-line official anikur Studios logo with signature brand capsule
 */
export function AnikurLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const textSizes = {
    sm: "text-[16px] leading-[1.05]",
    md: "text-[22px] leading-[1.05]",
    lg: "text-[26px] leading-[1.05]",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-stretch justify-center font-extrabold uppercase text-[#FFF7F7] transition-opacity hover:opacity-90 min-w-[135px] md:min-w-[155px] ${textSizes[size]} ${className}`}
    >
      <div className="w-full flex items-center justify-between">
        <span>A</span>
        <span>N</span>
        <span>I</span>
        <span>K</span>
        <span>U</span>
        <span>R</span>
      </div>
      <div className="w-full flex items-center justify-between mt-[2px]">
        <span>STU</span>
        <span
          className="mx-[0.06em] inline-block h-[0.68em] w-[2.2em] rounded-full border-[0.15em] border-[#FFF7F7] align-middle"
          aria-hidden="true"
        />
        <span>IOS</span>
      </div>
    </Link>
  );
}

export const KontourLogo = AnikurLogo;
export const anikurLogo = AnikurLogo;

