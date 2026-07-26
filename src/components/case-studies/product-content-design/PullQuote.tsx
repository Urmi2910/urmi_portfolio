import { cn } from "@/lib/utils";

export function PullQuote({
  quote,
  className,
}: {
  quote: string;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "writing-pull-quote relative my-10 border-l-[3px] border-primary pl-5 sm:my-12 sm:pl-8",
        className
      )}
    >
      <p className="font-heading text-xl font-semibold leading-snug text-foreground sm:text-2xl md:text-[1.65rem] md:leading-snug">
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}
