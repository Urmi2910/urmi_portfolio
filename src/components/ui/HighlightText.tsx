import { Fragment } from "react";

export function HighlightText({ text, highlights = [] }: { text: string; highlights?: string[] }) {
  if (!highlights.length) {
    return <>{text}</>;
  }

  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
        return isHighlight ? (
          <strong key={`${part}-${index}`} className="font-semibold text-primary">
            {part}
          </strong>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        );
      })}
    </>
  );
}
