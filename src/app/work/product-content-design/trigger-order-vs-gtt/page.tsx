import { TriggerOrderCaseStudy } from "@/components/case-studies/trigger-order/TriggerOrderCaseStudy";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { triggerOrderCaseStudy } from "@/data/trigger-order-case-study";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${triggerOrderCaseStudy.title} | ${profile.name}`,
  description: triggerOrderCaseStudy.subtitle,
};

export default function TriggerOrderCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="writing-case-study flex-1 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-20">
        <section className="relative border-b border-border/50 pb-12 sm:pb-16 md:pb-20">
          <GeometricDecor variant="section" />
          <div className="relative mx-auto w-full max-w-2xl px-[clamp(1rem,4vw,1.5rem)] py-8 md:max-w-5xl md:py-10">
            <TriggerOrderCaseStudy />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
