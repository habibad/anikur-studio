"use client";

import { motion } from "framer-motion";
import { RevealStagger, staggerItem } from "./Reveal";

const PROJECTS = [
  { name: "Vantra Finance", category: "Brand Strategy · Visual Identity", year: "2026" },
  { name: "Orolume Jewelry", category: "Visual Identity · Campaign", year: "2025" },
  { name: "Nordvale Outdoor", category: "Brand Strategy · Social", year: "2025" },
  { name: "Halcyon Wellness", category: "Visual Identity · Digital Campaign", year: "2025" },
  { name: "Fernweg Travel", category: "Brand Strategy · Identity · Social", year: "2024" },
  { name: "Marrow Studio", category: "Visual Identity", year: "2024" },
];

export default function ProjectsList() {
  return (
    <RevealStagger className="border-t border-white/10">
      {PROJECTS.map((p, i) => (
        <motion.a
          key={p.name}
          href="/contact"
          variants={staggerItem}
          className="group flex flex-col justify-between gap-3 border-b border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6 sm:px-4"
        >
          <span className="w-12 shrink-0 font-mono text-sm text-studio-gray">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-display flex-1 text-2xl uppercase tracking-tight text-soft-white transition-colors duration-300 group-hover:text-kontour-orange sm:text-4xl">
            {p.name}
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-studio-gray">
            {p.category}
          </span>
          <span className="text-xs text-studio-gray">{p.year}</span>
        </motion.a>
      ))}
    </RevealStagger>
  );
}
