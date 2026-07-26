import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { WorkshopPresentationDeck } from "./presentation/WorkshopSlides";

export function WorkshopPresentation() {
  return (
    <div className="workshop-presentation min-h-screen bg-white">
      <Link
        href="/work/ux-writing-practice"
        className="fixed left-[clamp(1rem,3vw,2rem)] top-[clamp(1rem,3vw,1.5rem)] z-20 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-[#737373] shadow-sm ring-1 ring-[#EAEAEA] backdrop-blur-sm transition-colors hover:text-[#0a0a0a]"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        Back
      </Link>

      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-[clamp(2.5rem,8vh,5rem)] px-[clamp(1rem,3vw,2.5rem)] py-[clamp(4rem,10vh,6rem)]">
        <WorkshopPresentationDeck variant="presentation" />
      </div>
    </div>
  );
}
