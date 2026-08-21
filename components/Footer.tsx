import Link from "next/link";
import { NAV_ALL } from "@/lib/data";
import PillButton from "./PillButton";
import { KontourLogo } from "./BrandGlyph";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0d0101]">
      <div className="mx-auto max-w-[1800px] px-6 py-24 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.04] text-[#FFF7F7] tracking-tight">
              Let&apos;s build a brand
              <br />
              that stays in memory.
            </h2>
            <div className="mt-8">
              <PillButton label="Start a Project" href="/contact" variant="primary" size="lg" />
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.16em] text-[#BABABA] sm:grid-cols-4">
            {NAV_ALL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit transition-colors duration-200 hover:text-[#FF5100]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-[#BABABA] sm:flex-row sm:items-center">
          <KontourLogo size="sm" />
          <span className="text-[13px] tracking-wider text-[#BABABA]/80">
            © {new Date().getFullYear()} KONTOUR STUDIOS. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
