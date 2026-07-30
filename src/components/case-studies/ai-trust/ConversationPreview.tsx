"use client";

import { conversationScenarios } from "@/data/ai-trust-case-study";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ConversationPreview() {
  const [activeId, setActiveId] = useState(conversationScenarios[0]?.id);
  const scenario = conversationScenarios.find((s) => s.id === activeId) ?? conversationScenarios[0];

  return (
    <div className="ai-conversation-preview rounded-[var(--radius-lg)] border border-border bg-surface/40 p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        {conversationScenarios.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-md",
              activeId === item.id
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground ring-1 ring-outline/10 hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="space-y-3 rounded-[var(--radius-lg)] bg-background p-4 ring-1 ring-outline/10">
        {scenario?.messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "max-w-[90%] rounded-[var(--radius-md)] px-3 py-2.5 text-sm leading-relaxed",
              message.role === "user"
                ? "ml-auto bg-primary/10 text-foreground"
                : "bg-surface text-foreground"
            )}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}
