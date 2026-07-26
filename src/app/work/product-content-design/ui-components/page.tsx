import { AllExamplesLink } from "@/components/case-studies/product-content-design/AllExamplesLink";
import { CaseStudySectionNav } from "@/components/case-studies/product-content-design/CaseStudySectionNav";
import { UiComponentsGallery } from "@/components/case-studies/product-content-design/UiComponentsGallery";
import { WritingExampleSampleNav } from "@/components/case-studies/product-content-design/WritingExampleSampleNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { getProductContentExampleNav } from "@/data/product-content-design-nav";
import { productContentDesignHub } from "@/data/product-content-design";
import { uiComponentSections, uiComponentsGallery } from "@/data/ui-components";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: `${uiComponentsGallery.title} | ${productContentDesignHub.title} | ${profile.name}`,
  description: uiComponentsGallery.description,
};

export default function UiComponentsPage() {
  const nav = getProductContentExampleNav(uiComponentsGallery.slug);

  if (!nav) notFound();

  return (
    <>
      <Header />
      <main className="writing-case-study case-study-main-with-nav flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <AllExamplesLink />

            <header className="mt-6 max-w-prose">
              <p className="text-sm font-medium text-primary">{productContentDesignHub.title}</p>
              <h1 className="mt-2 text-[clamp(1.75rem,5vw,2.5rem)] font-heading font-bold leading-[1.12] tracking-tight text-foreground text-balance">
                {uiComponentsGallery.title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {uiComponentsGallery.description}
              </p>
            </header>

            <div className="writing-example-layout mt-12 sm:mt-14 lg:grid lg:grid-cols-[minmax(10rem,12rem)_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-14">
              <aside className="hidden md:block">
                <CaseStudySectionNav sections={uiComponentSections} variant="desktop" />
              </aside>

              <div className="min-w-0">
                <CaseStudySectionNav sections={uiComponentSections} variant="mobile" />
                <UiComponentsGallery items={uiComponentsGallery.items} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WritingExampleSampleNav
        current={nav.current}
        prev={nav.prev}
        next={nav.next}
        index={nav.index}
        total={nav.total}
      />
      <Footer />
    </>
  );
}
