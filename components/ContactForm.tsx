"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fieldClass =
  "w-full border-b border-white/15 bg-transparent py-4 text-sm text-soft-white placeholder:text-studio-gray/70 focus:border-kontour-orange focus:outline-none transition-colors duration-300";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <input required placeholder="Full name" className={fieldClass} />
        <input required type="email" placeholder="Email address" className={fieldClass} />
      </div>
      <input placeholder="Company" className={fieldClass} />
      <textarea
        required
        placeholder="Tell us about the project"
        rows={4}
        className={`${fieldClass} resize-none`}
      />

      <div className="pt-4">
        <motion.button
          type="submit"
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="group inline-flex items-center gap-3 rounded-full bg-soft-white py-1.5 pl-6 pr-1.5 text-sm font-medium text-kontour-black"
        >
          <span>{submitted ? "Sent — we'll be in touch" : "Send Message"}</span>
          <motion.span
            variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-kontour-black text-soft-white"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </motion.button>
      </div>
    </form>
  );
}
