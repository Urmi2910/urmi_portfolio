import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { ResumeToolbar } from "@/components/resume/ResumeToolbar";
import { profile } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${profile.name} | Resume`,
  description: profile.intro,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <ResumeToolbar />
      <ResumeDocument />
    </div>
  );
}
