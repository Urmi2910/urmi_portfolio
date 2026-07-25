import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "filled" | "tonal" | "outlined" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: boolean;
  children: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  filled:
    "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm hover:shadow-md",
  tonal:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
  outlined:
    "border border-outline/40 text-primary hover:bg-primary/5 active:bg-primary/10",
  ghost: "text-primary hover:bg-primary/10 active:bg-primary/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 min-h-[44px] px-5 text-sm",
  md: "h-11 min-h-[44px] px-6 text-label",
  lg: "h-12 min-h-[48px] px-8 text-label",
};

export function Button({
  variant = "filled",
  size = "md",
  href,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
