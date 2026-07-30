import { UxWritingPracticeHub } from "@/components/case-studies/ux-writing-practice/UxWritingPracticeHub";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { uxWritingPracticeHub } from "@/data/ux-writing-practice";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${uxWritingPracticeHub.title} | ${profile.name}`,
  description: uxWritingPracticeHub.overview,
};

export default function WritingBeyondProductsPage() {
  return (
    <>
      <Header />
      <main className="ux-writing-practice-page flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 bg-surface pb-16 sm:pb-20 md:pb-24">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <UxWritingPracticeHub />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
