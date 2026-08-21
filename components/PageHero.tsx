import Reveal from "./Reveal";
import GlowField from "./GlowField";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 md:pt-48">
      <GlowField variant="hero" className="left-0 top-0 h-full w-full" />
      <div className="relative z-10 mx-auto max-w-[1800px] px-6 md:px-12 lg:px-16">
        <Reveal>
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-studio-gray">
            {eyebrow}
          </span>
          <h1 className="text-display mt-6 max-w-4xl text-[11vw] font-light uppercase leading-[0.95] text-soft-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-studio-gray">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
