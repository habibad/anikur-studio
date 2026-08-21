import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ — Kontour Studios",
  description: "Answers to common questions about working with Kontour Studios.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="FAQ"
          title="Questions, answered clearly."
          description="Can't find what you're looking for? Reach out and we'll answer directly."
        />
        <section className="mx-auto max-w-[1800px] px-6 pb-28 md:px-12 lg:px-16">
          <FaqAccordion />
        </section>
      </main>
      <Footer />
    </>
  );
}
