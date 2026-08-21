"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealStagger, staggerItem } from "./Reveal";
import { TEAM } from "@/lib/data";

export default function TeamGrid() {
  return (
    <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
      {TEAM.map((member, i) => (
        <motion.div
          key={member.name}
          variants={staggerItem}
          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-kontour-black-deep p-6"
        >
          <Image
            src={`https://i.pravatar.cc/500?img=${i + 12}`}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="400px"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            style={{ mixBlendMode: "luminosity" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kontour-black via-kontour-black/40 to-transparent transition-opacity duration-500 group-hover:from-signal-red/70" />
          <div className="relative">
            <h3 className="text-display text-xl uppercase text-soft-white">
              {member.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-studio-gray">
              {member.role}
            </p>
          </div>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
