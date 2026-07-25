import { PortfolioCard } from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/portfolio";
import { LayoutGrid } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="section-flow-child scroll-section pb-10 pt-2 sm:pb-14 sm:pt-4 md:pb-20"
    >
      <div className="container-page">
        <SectionHeading icon={LayoutGrid} title="Portfolio" tone="background" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-5 lg:gap-6">
          {caseStudies.map((study, index) => (
            <PortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
