import { GuidelinesCaseStudy } from "@/components/case-studies/guidelines/GuidelinesCaseStudy";
import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { guidelinesCaseStudy } from "@/data/guidelines-case-study";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${guidelinesCaseStudy.title} | ${profile.name}`,
  description: guidelinesCaseStudy.subtitle,
};

export default function GuidelinesCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="guidelines-page case-study-main-with-nav flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 bg-surface pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <GuidelinesCaseStudy />
          </div>
        </section>
      </main>
      <PortfolioCaseStudyNav slug="guidelines" />
      <Footer />
    </>
  );
}
