"use client";

import { motion } from "framer-motion";
import { RevealStagger, staggerItem } from "./Reveal";

const VALUES = [
  {
    title: "Clarity first",
    text: "Every decision is judged by one question: does this make the brand easier to understand? If not, it doesn't ship.",
  },
  {
    title: "Systems, not one-offs",
    text: "A logo isn't an identity and a post isn't a campaign. We build the underlying structure everything else comes from.",
  },
  {
    title: "Structured process",
    text: "Strategy before visuals, visuals before content, content before campaigns — the order protects the outcome.",
  },
  {
    title: "Built to last",
    text: "We design for recognition over years, not for a single launch moment. Consistency compounds.",
  },
];

export default function AboutValues() {
  return (
    <RevealStagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
      {VALUES.map((v) => (
        <motion.div
          key={v.title}
          variants={staggerItem}
          className="bg-kontour-black-deep p-8"
        >
          <h3 className="text-display text-xl uppercase text-soft-white">
            {v.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-studio-gray">
            {v.text}
          </p>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
