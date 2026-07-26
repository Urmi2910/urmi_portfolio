import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningItems, profile } from "@/data/portfolio";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";

export function ResumeDocument() {
  const linkedinLabel = profile.linkedin.replace(/^https?:\/\/(www\.)?/, "");

  return (
    <article className="resume-document pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="container-page max-w-4xl">
        <header className="overflow-hidden rounded-[var(--radius-lg)] bg-surface shadow-sm ring-1 ring-outline/10 sm:rounded-[var(--radius-xl)]">
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-label text-muted-foreground">{profile.title}</p>
            <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-title font-heading text-primary">{profile.tagline}</p>

            <dl className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-foreground hover:text-primary">
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="text-foreground hover:text-primary">
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">LinkedIn</dt>
                <dd>
                  <Link href={profile.linkedin} className="text-foreground hover:text-primary">
                    {linkedinLabel}
                  </Link>
                </dd>
              </div>
              {profile.workSamples ? (
                <div>
                  <dt className="sr-only">Work samples</dt>
                  <dd>
                    <Link href={profile.workSamples} className="text-foreground hover:text-primary">
                      Work samples
                    </Link>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </header>

        <section className="mt-8 sm:mt-10">
          <p className="text-base leading-relaxed text-foreground/90">{profile.intro}</p>
        </section>

        <section className="mt-10">
          <SectionHeading icon={Sparkles} title="Skills" tone="background" />
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 sm:mt-14">
          <SectionHeading icon={Briefcase} title="Experience & responsibilities" tone="background" />

          <ol className="mt-8 flex flex-col gap-4">
            {profile.experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="resume-job break-inside-avoid rounded-[var(--radius-lg)] bg-surface p-4 shadow-sm ring-1 ring-outline/10 sm:p-5"
              >
                <div className="flex gap-3 sm:gap-4">
                  <CompanyLogo
                    company={job.company}
                    logoSrc={job.logoSrc}
                    logoSrcSet={job.logoSrcSet}
                    logoFit={job.logoFit}
                    size="md"
                    className="mt-0.5"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-base font-semibold leading-snug text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                      <span className="font-heading font-semibold text-primary">{job.company}</span>
                      <span className="text-lg font-black leading-none text-muted-foreground" aria-hidden="true">
                        ·
                      </span>
                      <span className="font-medium tabular-nums text-muted-foreground">{job.period}</span>
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">{job.companyAbout}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

                    <ul className="mt-3 space-y-2 border-l-2 border-primary/20 pl-4">
                      {job.learnings.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-primary/40"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 sm:mt-14">
          <SectionHeading icon={GraduationCap} title="Continuous education" tone="background" />

          <ol className="mt-8 divide-y divide-border/25">
            {learningItems.map((item) => (
              <li key={item.id} className="break-inside-avoid py-4 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-heading text-base font-semibold text-foreground">{item.title}</p>
                  <span className="text-sm font-medium tabular-nums text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
