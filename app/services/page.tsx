import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesAccordion from "@/components/ServicesAccordion";

export const metadata: Metadata = {
  title: "Services — anikur Studios",
  description:
    "Brand strategy, visual identity, social media marketing and digital campaigns, connected into one clear brand system.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Everything a brand needs to be understood."
          description="Four disciplines, one connected system — strategy, identity, content and campaigns working from the same source of truth."
        />
        <ServicesAccordion />
      </main>
      <Footer />
    </>
  );
}
