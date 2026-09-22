import Hero from "../components/Hero";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}