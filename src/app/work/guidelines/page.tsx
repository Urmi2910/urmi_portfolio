import { GuidelinesCaseStudy } from "@/components/case-studies/guidelines/GuidelinesCaseStudy";
import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
      <main className="guidelines-page flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <GuidelinesCaseStudy />
      </main>
      <PortfolioCaseStudyNav slug="guidelines" />
      <Footer />
    </>
  );
}
