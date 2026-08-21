"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: custom, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={delay}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className = "",
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
