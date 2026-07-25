"use client";

import { profile } from "@/data/portfolio";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { Briefcase, ChevronDown, Lightbulb } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="section-experience scroll-section py-12 sm:py-20 md:py-24">
      <div className="container-page">
        <SectionHeading icon={Briefcase} title="Experience" tone="surface" />

        <ol className="mt-10 flex flex-col gap-5 sm:mt-12 sm:gap-6">
          {profile.experience.map((job, i) => {
            const isOpen = openIndex === i;

            return (
              <li
                key={`${job.company}-${job.period}`}
                data-open={isOpen}
                className="card-experience"
              >
                <div className="flex gap-3 sm:gap-4 md:gap-5">
                  <CompanyLogo
                    company={job.company}
                    logoSrc={job.logoSrc}
                    logoSrcSet={job.logoSrcSet}
                    logoFit={job.logoFit}
                    size="md"
                    className="mt-1"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                      {job.role}
                    </h3>

                    <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base">
                      <span className="font-semibold text-primary">{job.company}</span>
                      <span
                        className="text-lg font-black leading-none text-muted-foreground"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      <span className="font-medium tabular-nums text-muted-foreground">
                        {job.period}
                      </span>
                    </p>

                    <p className="mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
                      {job.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-sm text-base text-primary transition-md hover:gap-2 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary touch-manipulation"
                    >
                      <Lightbulb className="block h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                      Responsibilities
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                        strokeWidth={2.5}
                      />
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                        isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3.5 border-l-2 border-primary/25 pl-5">
                          {job.learnings.map((learning, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]"
                            >
                              <span
                                className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40"
                                aria-hidden="true"
                              />
                              {learning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
