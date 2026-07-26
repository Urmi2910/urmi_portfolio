import { WorkshopPresentation } from "@/components/case-studies/ux-writing-practice/WorkshopPresentation";
import { uxWritingPracticeHub } from "@/data/ux-writing-practice";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${uxWritingPracticeHub.presentation.title} | ${profile.name}`,
  description: uxWritingPracticeHub.presentation.summary,
};

export default function WorkshopPresentationPage() {
  return (
    <main className="flex-1 bg-white">
      <WorkshopPresentation />
    </main>
  );
}
