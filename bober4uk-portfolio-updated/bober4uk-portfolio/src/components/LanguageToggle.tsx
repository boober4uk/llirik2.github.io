"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-border bg-white/[0.02] p-1 text-xs font-medium",
        className
      )}
    >
      {(["ru", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            lang === code ? "bg-accent/15 text-accent" : "text-muted hover:text-ink"
          )}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
