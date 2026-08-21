import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Team — Kontour Studios",
  description: "The strategists, designers and directors behind Kontour Studios.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Team"
          title="Small studio. Senior hands on every project."
          description="No account layers between you and the people doing the work."
        />

        <section className="mx-auto max-w-[1800px] px-6 pb-28 md:px-12 lg:px-16">
          <TeamGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
