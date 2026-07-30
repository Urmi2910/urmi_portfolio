import { AiTrustCaseStudy } from "@/components/case-studies/ai-trust/AiTrustCaseStudy";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
        <AiTrustCaseStudy />
      </main>
      <Footer />
    </>
  );
}
