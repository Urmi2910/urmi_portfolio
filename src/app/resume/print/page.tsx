import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${profile.name} | Resume`,
  robots: "noindex",
};

export default function ResumePrintPage() {
  return (
    <div className="min-h-screen bg-background">
      <ResumeDocument />
    </div>
  );
}
