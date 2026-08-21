"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PillButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PillButton({
  label,
  href,
  variant = "primary",
  onClick,
  className = "",
  size = "md",
}: PillButtonProps) {
  const isPrimary = variant === "primary";

  const paddingClass = isPrimary
    ? size === "lg"
      ? "py-2.5 pl-6 pr-2.5 text-sm md:text-base font-semibold"
      : size === "sm"
      ? "py-1.5 pl-4 pr-1.5 text-xs font-semibold"
      : "py-2 pl-5 pr-2 text-xs md:text-sm font-semibold"
    : size === "lg"
    ? "py-3.5 px-7 text-sm md:text-base font-semibold"
    : size === "sm"
    ? "py-2 px-4 text-xs font-semibold"
    : "py-2.5 px-6 text-xs md:text-sm font-semibold";

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative inline-flex items-center gap-3.5 rounded-full transition-all duration-300 ${
        isPrimary
          ? "bg-[#FFF7F7] text-[#100101] shadow-[0_4px_20px_rgba(255,247,247,0.15)] hover:shadow-[0_4px_25px_rgba(255,81,0,0.25)]"
          : "border border-white/20 bg-white/[0.06] text-[#FFF7F7] backdrop-blur-md hover:border-white/40 hover:bg-white/[0.12]"
      } ${paddingClass} ${className}`}
    >
      <span className="tracking-tight whitespace-nowrap">{label}</span>
      {isPrimary && (
        <span className="flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-kontour-black text-soft-white transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
