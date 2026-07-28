import { learningIntro, learningItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap } from "lucide-react";

export function LearningSection() {
  return (
    <section id="learning" className="section-learning scroll-section section-spacing">
      <div className="container-page learning-section-content">
        <SectionHeading
          icon={GraduationCap}
          title="Continuous learning"
          description={learningIntro}
          tone="surface"
          stickyScope="title"
        />

        <ol className="mt-8 divide-y divide-border/25 sm:mt-10">
          {learningItems.map((item) => (
            <li key={item.id} className="py-5 first:pt-0 last:pb-0">
              <p className="font-heading text-base font-semibold text-foreground sm:text-lg">
                {item.title}
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm sm:text-base">
                <span className="font-semibold text-primary">{item.institution}</span>
                <span className="text-lg font-black leading-none text-muted-foreground" aria-hidden="true">
                  ·
                </span>
                <span className="font-medium tabular-nums text-muted-foreground">{item.year}</span>
              </p>
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
