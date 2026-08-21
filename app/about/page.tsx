import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import MarketCards from "@/components/MarketCards";
import Reveal from "@/components/Reveal";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "About Us — Kontour Studios",
  description:
    "Kontour Studios is a marketing agency and creative studio building clear brand systems for modern market presence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About us"
          title="A studio built around one idea: clarity."
          description="Kontour Studios is a marketing agency and creative studio building clear brand systems for modern market presence."
        />

        <section className="mx-auto max-w-[1800px] px-6 pb-24 md:px-12 lg:px-16">
          <Reveal className="max-w-3xl text-lg leading-relaxed text-studio-gray sm:text-xl">
            <p>
              We started Kontour Studios because most brand work we saw was
              either all strategy with no distinctive visual voice, or all
              visuals with no strategic backbone. We build both at once, as
              one connected system — so a brand doesn&apos;t just look
              different, it makes sense.
            </p>
          </Reveal>

          <AboutValues />
        </section>

        <MarketCards />
      </main>
      <Footer />
    </>
  );
}
