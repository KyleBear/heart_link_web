import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Screenshots } from "@/components/Screenshots";
import { SafetyTrust } from "@/components/SafetyTrust";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Screenshots />
        <SafetyTrust />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
