"use client";

import { profile } from "@/data/portfolio";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { Briefcase, ChevronDown, Lightbulb } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const toggleViewportTopRef = useRef<number | null>(null);

  const toggleResponsibilities = useCallback((index: number) => {
    setOpenIndex((current) => {
      if (current === index) {
        return null;
      }

      if (window.matchMedia("(max-width: 767px)").matches) {
        const toggle = toggleRefs.current[index];
        toggleViewportTopRef.current = toggle?.getBoundingClientRect().top ?? null;
      }

      return index;
    });
  }, []);

  useLayoutEffect(() => {
    if (openIndex === null) return;

    const targetTop = toggleViewportTopRef.current;
    if (targetTop === null) return;

    toggleViewportTopRef.current = null;

    const toggle = toggleRefs.current[openIndex];
    if (!toggle) return;

    const fixScroll = () => {
      const delta = toggle.getBoundingClientRect().top - targetTop;
      if (Math.abs(delta) > 0.5) {
        window.scrollBy({ top: delta, left: 0, behavior: "auto" });
      }
    };

    fixScroll();
    requestAnimationFrame(() => {
      fixScroll();
      requestAnimationFrame(fixScroll);
    });

    const timeoutId = window.setTimeout(fixScroll, 60);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [openIndex]);

  return (
    <section id="experience" className="section-experience scroll-section py-12 sm:py-20 md:py-24">
      <div className="container-page">
        <SectionHeading icon={Briefcase} title="Experience" tone="surface" />

        <ol className="experience-list mt-8 flex flex-col gap-5 sm:mt-12 sm:gap-6">
          {profile.experience.map((job, i) => {
            const isOpen = openIndex === i;
            const panelId = `experience-responsibilities-${i}`;

            return (
              <li
                key={`${job.company}-${job.period}`}
                data-open={isOpen}
                className="card-experience"
              >
                <div className="experience-card-layout">
                  <div className="experience-card-top">
                    <div className="experience-job-header-row">
                      <CompanyLogo
                        company={job.company}
                        logoSrc={job.logoSrc}
                        logoSrcSet={job.logoSrcSet}
                        logoFit={job.logoFit}
                        size="md"
                        className="experience-card-logo mt-0.5 shrink-0 md:mt-1"
                      />

                      <div className="experience-job-header min-w-0 flex-1">
                        <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
                          {job.role}
                        </h3>

                        <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm sm:text-base">
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
                      </div>
                    </div>

                    <div className="experience-card-body min-w-0">
                      <p className="max-w-3xl text-[0.9375rem] leading-[1.7] text-foreground/90 sm:text-base">
                        {job.companyAbout}
                      </p>
                      <p className="mt-2 max-w-3xl text-[0.9375rem] leading-[1.7] text-muted-foreground sm:text-base">
                        {job.summary}
                      </p>

                      <button
                        type="button"
                        id={`${panelId}-toggle`}
                        ref={(node) => {
                          toggleRefs.current[i] = node;
                        }}
                        onClick={() => toggleResponsibilities(i)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className={cn(
                          "experience-responsibilities-toggle mt-3 flex w-full min-h-[40px] touch-manipulation items-center justify-between gap-2 rounded-[var(--radius-md)] border px-3 py-2.5 text-left transition-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          "border-primary/20 bg-primary/[0.06] text-primary active:bg-primary/10",
                          "md:mt-4 md:inline-flex md:w-auto md:min-h-[44px] md:justify-start md:gap-1.5 md:rounded-sm md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:gap-2 md:hover:text-primary/80",
                          isOpen && "border-primary/30 bg-primary/[0.09] md:border-0 md:bg-transparent"
                        )}
                      >
                        <span className="inline-flex min-w-0 items-center gap-1.5 text-[0.8125rem] font-medium sm:text-sm md:gap-2 md:text-base">
                          <Lightbulb
                            className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                          <span>Responsibilities</span>
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`${panelId}-toggle`}
                    aria-hidden={!isOpen}
                    className={cn(
                      "experience-responsibilities-panel",
                      isOpen ? "mt-3 max-md:block md:mt-4" : "max-md:hidden md:mt-4",
                      "max-md:overflow-visible md:grid md:transition-[grid-template-rows,opacity] md:duration-300 md:ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:md:transition-none",
                      isOpen
                        ? "md:grid-rows-[1fr] md:opacity-100"
                        : "md:grid-rows-[0fr] md:opacity-0"
                    )}
                  >
                    <div className="experience-panel-inner max-md:overflow-visible md:min-h-0 md:overflow-hidden">
                      <div className="experience-panel-content rounded-[var(--radius-md)] border border-outline/10 bg-surface/70 p-4 md:border-0 md:bg-transparent md:p-0">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/75 md:sr-only">
                          Key responsibilities
                        </p>
                        <ul className="space-y-2.5 pl-0 md:space-y-3 md:border-l-2 md:border-primary/25 md:pl-5">
                          {job.learnings.map((learning, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-[0.9375rem] leading-[1.65] text-muted-foreground sm:text-base"
                            >
                              <span
                                className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40"
                                aria-hidden="true"
                              />
                              <span>{learning}</span>
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
