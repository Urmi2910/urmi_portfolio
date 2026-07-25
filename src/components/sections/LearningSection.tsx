import { learningIntro, learningItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap } from "lucide-react";

export function LearningSection() {
  return (
    <section id="learning" className="section-learning scroll-section py-12 sm:py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          icon={GraduationCap}
          title="Continuous learning"
          description={learningIntro}
        />

        <ol className="mt-8 divide-y divide-border/25 sm:mt-10">
          {learningItems.map((item) => (
            <li key={item.id} className="py-5 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-heading text-base font-semibold text-foreground sm:text-lg">
                  {item.title}
                </p>
                <span className="text-sm font-medium tabular-nums text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
              {item.learned ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.learned}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
