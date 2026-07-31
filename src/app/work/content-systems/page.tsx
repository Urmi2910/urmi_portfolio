import { ContentSystemsCaseStudy } from "@/components/case-studies/content-systems/ContentSystemsCaseStudy";
import { PortfolioCaseStudyNav } from "@/components/case-studies/shared/PortfolioCaseStudyNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
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
        <section className="relative border-b border-border/50 bg-surface pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <ContentSystemsCaseStudy />
          </div>
        </section>
      </main>
      <PortfolioCaseStudyNav slug="content-systems" />
      <Footer />
    </>
  );
}
