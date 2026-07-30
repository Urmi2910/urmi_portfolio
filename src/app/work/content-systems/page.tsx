import { ContentSystemsCaseStudy } from "@/components/case-studies/content-systems/ContentSystemsCaseStudy";
import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { contentSystemsCaseStudy } from "@/data/content-systems-case-study";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${contentSystemsCaseStudy.title} | ${profile.name}`,
  description: contentSystemsCaseStudy.subtitle,
};

export default function ContentSystemsCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="content-systems-page flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <ContentSystemsCaseStudy />
      </main>
      <PortfolioCaseStudyNav slug="content-systems" />
      <Footer />
    </>
  );
}
