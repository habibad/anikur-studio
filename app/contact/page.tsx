import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Kontour Studios",
  description: "Start a project with Kontour Studios.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's start with a conversation."
          description="Tell us where the brand is today and where it needs to go. We'll follow up within two working days."
        />

        <section className="mx-auto grid max-w-[1800px] grid-cols-1 gap-16 px-6 pb-28 md:px-12 lg:grid-cols-[1fr_1.2fr] lg:px-16">
          <Reveal className="flex flex-col gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-studio-gray">Email</p>
              <p className="text-display mt-2 text-xl text-soft-white">hello@kontourstudios.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-studio-gray">Phone</p>
              <p className="text-display mt-2 text-xl text-soft-white">+1 (212) 555-0148</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-studio-gray">Studio</p>
              <p className="text-display mt-2 text-xl text-soft-white">
                140 Signal Avenue, New York, NY
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
