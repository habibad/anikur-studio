import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Projects — anikur Studios",
  description:
    "Brand systems, visual identities and campaigns delivered by anikur Studios.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Projects"
          title="Fifty plus systems built for clarity."
          description="A selection of brand systems, identities and campaigns delivered end to end."
        />

        <section className="mx-auto max-w-[1800px] px-6 pb-28 md:px-12 lg:px-16">
          <ProjectsList />

          <div className="mt-16 flex justify-center">
            <PillButton label="Start a Project" href="/contact" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
