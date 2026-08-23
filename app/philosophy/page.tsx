import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PhilosophySection from "@/components/PhilosophySection";

export const metadata: Metadata = {
  title: "Philosophy — anikur Studios",
  description:
    "Clear brands stay in memory. The thinking behind how anikur Studios builds brand systems.",
};

export default function PhilosophyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Philosophy"
          title="Recognition is built, not luck."
          description="Clarity creates the first connection. Consistency is what turns it into trust."
        />
        <PhilosophySection />
      </main>
      <Footer />
    </>
  );
}
