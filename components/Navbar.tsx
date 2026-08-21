"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/data";
import { KontourLogo } from "./BrandGlyph";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-500 ${scrolled
          ? "border-b border-white/10 bg-[#0d0101]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-full max-w-[1800px] items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Left Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LEFT.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[16px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${active && item.href === "/"
                    ? "text-[#FF5100]"
                    : "text-[#FFF7F7]/80 hover:text-[#FFF7F7]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Center Stacked Brand Logo with Capsule Glyph matching reference */}
        <div className="flex items-center">
          <KontourLogo size="md" />
        </div>

        {/* Right Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_RIGHT.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[16px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${active
                    ? "text-[#FFF7F7]"
                    : "text-[#FFF7F7]/80 hover:text-[#FFF7F7]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#FFF7F7] transition-colors hover:border-[#FF5100] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#0d0101]/95 px-8 py-10 backdrop-blur-2xl md:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{
                background: "radial-gradient(circle, #EE0000 0%, #FF5100 50%, transparent 80%)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-2">
              {[...NAV_LEFT, ...NAV_RIGHT].map((item, idx) => {
                const active = isLinkActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-white/5 py-4 text-sm font-semibold tracking-[0.18em] uppercase transition-colors ${active ? "text-[#FF5100]" : "text-[#FFF7F7] hover:text-[#FF5100]"
                        }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5100]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
