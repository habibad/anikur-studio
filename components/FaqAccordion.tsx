"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-white/10">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="border-b border-white/10">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="text-display text-lg text-soft-white sm:text-xl">
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-soft-white"
              >
                <Plus size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-sm leading-relaxed text-studio-gray">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
