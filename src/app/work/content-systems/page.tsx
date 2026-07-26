import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SystemStudyCard } from "@/components/case-studies/content-systems/SystemStudyCard";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { contentSystemsHub, systemStudies } from "@/data/content-systems";
import { profile } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${contentSystemsHub.title} | ${profile.name}`,
  description: contentSystemsHub.description,
};

export default function ContentSystemsPage() {
  return (
    <>
      <Header />
      <main className="content-systems-hub flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />

          <div className="relative mx-auto w-full max-w-4xl px-[clamp(1rem,4vw,1.5rem)]">
            <Link
              href="/#case-studies"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-md hover:bg-primary/5 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              Back to portfolio
            </Link>

            <header className="mt-8 max-w-3xl md:mt-10">
              <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-heading font-bold leading-[1.08] tracking-tight text-foreground text-balance">
                {contentSystemsHub.title}
              </h1>
              <p className="mt-4 text-base font-medium leading-snug text-foreground/90 sm:text-lg">
                {contentSystemsHub.subtitle}
              </p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                {contentSystemsHub.description}
              </p>
            </header>

            <div className="mt-12 space-y-5 sm:mt-14">
              {systemStudies.map((study, index) => (
                <SystemStudyCard key={study.slug} study={study} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
