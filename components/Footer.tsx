import Link from "next/link";
import { NAV_ALL } from "@/lib/data";
import PillButton from "./PillButton";
import { KontourLogo } from "./BrandGlyph";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-kontour-black-deep">
      <div className="mx-auto max-w-[1800px] px-6 py-20 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-display text-3xl font-light uppercase leading-tight text-soft-white sm:text-4xl lg:text-5xl">
              Let&apos;s build a brand
              <br />
              that stays in memory.
            </p>
            <div className="mt-8">
              <PillButton label="Start a Project" href="/contact" variant="primary" />
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs font-semibold uppercase tracking-[0.2em] text-studio-gray sm:grid-cols-4">
            {NAV_ALL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit transition-colors hover:text-kontour-orange"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-xs text-studio-gray sm:flex-row sm:items-center">
          <KontourLogo size="sm" />
          <span className="text-[11px] tracking-wider text-studio-gray/80">
            © {new Date().getFullYear()} KONTOUR STUDIOS. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
