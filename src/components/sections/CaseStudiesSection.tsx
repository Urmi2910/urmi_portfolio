import { PortfolioCard } from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/portfolio";
import { LayoutGrid } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="section-portfolio scroll-section section-spacing"
    >
      <div className="container-page">
        <SectionHeading icon={LayoutGrid} title="Portfolio" tone="surface" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-5 lg:gap-6">
          {caseStudies.map((study, index) => (
            <PortfolioCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
