import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import CTA from "../src/components/CTA";
import Footer from "../src/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}