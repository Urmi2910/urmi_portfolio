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

      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] text-center">
        <header className="w-full max-w-sm border-b border-border/50 pb-2.5">
          <p className="font-heading text-base font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
          <p className="mt-1 text-sm font-medium text-primary">{profile.tagline}</p>
        </header>

        <div className="mt-3 flex w-full max-w-sm flex-col items-center">
          <h1
            id="small-screen-title"
            className="font-heading text-[clamp(1.25rem,4.5vw,1.625rem)] font-bold leading-snug tracking-tight text-foreground text-balance"
          >
            Best viewed on a larger screen
          </h1>

          <Image
            src="/images/small-screen-notice.png"
            alt=""
            width={640}
            height={640}
            priority
            className="-mt-1 h-auto w-full max-w-[min(100vw-3rem,14rem)] object-contain"
          />

          <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Thanks for stopping by. Please open this portfolio on a laptop, desktop, or tablet.
          </p>
        </div>
      </div>
    </div>
  );
}
