import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesAccordion from "@/components/ServicesAccordion";
import MarketCards from "@/components/MarketCards";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesAccordion />
        <MarketCards />
        <PhilosophySection />
      </main>
      <Footer />
    </>
  );
}
