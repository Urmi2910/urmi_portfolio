import { GeometricDecor } from "@/components/ui/GeometricDecor";
import { profile } from "@/data/portfolio";
import Image from "next/image";

export function SmallScreenGate() {
  return (
    <div
      className="small-screen-gate fixed inset-0 z-[200] flex flex-col bg-background md:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="small-screen-title"
    >
      <GeometricDecor variant="hero" />

      <header className="relative z-10 border-b border-border/50 bg-background/80 px-[clamp(1rem,4vw,1.5rem)] pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm">
        <p className="font-heading text-base font-semibold text-foreground">{profile.name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{profile.title}</p>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="flex max-w-sm flex-col items-center">
          <Image
            src="/images/small-screen-notice.png"
            alt=""
            width={640}
            height={640}
            priority
            className="h-auto w-full max-w-[min(100vw-3rem,18rem)] object-contain"
          />
          <h1
            id="small-screen-title"
            className="mt-8 font-heading text-[clamp(1.375rem,5vw,1.75rem)] font-bold leading-snug tracking-tight text-foreground text-balance"
          >
            Best viewed on a larger screen
          </h1>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
            Thanks for stopping by. Please open this portfolio on a laptop, desktop, or tablet.
          </p>
        </div>
      </div>
    </div>
  );
}
