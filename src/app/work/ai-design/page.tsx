import { AiTrustCaseStudy } from "@/components/case-studies/ai-trust/AiTrustCaseStudy";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { aiTrustCaseStudy } from "@/data/ai-trust-case-study";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${aiTrustCaseStudy.title} | ${profile.name}`,
  description: aiTrustCaseStudy.subtitle,
};

export default function AiDesignCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="ai-trust-flagship flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 bg-surface pb-16 sm:pb-20 md:pb-24">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <AiTrustCaseStudy />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
