import { AllExamplesLink } from "@/components/case-studies/product-content-design/AllExamplesLink";
import { UiComponentsGallery } from "@/components/case-studies/product-content-design/UiComponentsGallery";
import { WritingExampleSampleNav } from "@/components/case-studies/product-content-design/WritingExampleSampleNav";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { getProductContentExampleNav } from "@/data/product-content-design-nav";
import { productContentDesignHub } from "@/data/product-content-design";
import { uiComponentsGallery } from "@/data/ui-components";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: `${uiComponentsGallery.title} | ${productContentDesignHub.title} | ${profile.name}`,
  description: uiComponentsGallery.description,
};

export default function MicrocopyExamplesPage() {
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

            <header className="writing-case-study-hero mt-6 md:mt-8">
              <p className="text-sm font-medium text-primary">{productContentDesignHub.title}</p>
              <h1 className="case-study-hero-title mt-2 text-balance">{uiComponentsGallery.title}</h1>
              <p className="case-study-hero-subtitle mt-3 max-w-3xl">{uiComponentsGallery.description}</p>
            </header>

            <div className="mt-12 sm:mt-14">
              <UiComponentsGallery items={uiComponentsGallery.items} />
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
