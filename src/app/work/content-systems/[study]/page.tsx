import { SystemStudyDetail } from "@/components/case-studies/content-systems/SystemStudyLayouts";
import { SystemStudyNav } from "@/components/case-studies/content-systems/SystemStudyNav";
import { SystemStudyScrollReset } from "@/components/case-studies/content-systems/SystemStudyScrollReset";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { contentSystemsHub, getSystemStudy, systemStudies } from "@/data/content-systems";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ study: string }>;
}

export async function generateStaticParams() {
  return systemStudies.map((study) => ({ study: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { study: slug } = await params;
  const study = getSystemStudy(slug);
  if (!study) return { title: "System Not Found" };
  return {
    title: `${study.title} | ${contentSystemsHub.title} | ${profile.name}`,
    description: study.teaser,
  };
}

export default async function SystemStudyPage({ params }: PageProps) {
  const { study: slug } = await params;
  const study = getSystemStudy(slug);

  if (!study) notFound();

  const index = systemStudies.findIndex((item) => item.slug === slug);
  const prev = index > 0 ? systemStudies[index - 1] : undefined;
  const next = index < systemStudies.length - 1 ? systemStudies[index + 1] : undefined;

  return (
    <>
      <Header />
      <main className="content-systems-study case-study-main-with-nav flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 pb-8 sm:pb-10">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-5xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:py-10">
            <SystemStudyScrollReset slug={slug}>
              <SystemStudyDetail study={study} />
            </SystemStudyScrollReset>
          </div>
        </section>
      </main>
      <SystemStudyNav
        current={study}
        prev={prev}
        next={next}
        index={index}
        total={systemStudies.length}
      />
      <Footer />
    </>
  );
}
