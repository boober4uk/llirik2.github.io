"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 px-6 text-sm text-muted sm:flex-row sm:items-center">
        <div>
          <span className="text-ink">
            © {year} {siteConfig.handle}
          </span>
          <span className="mx-2">·</span>
          {t(siteConfig.footerTagline)}
        </div>
        <code className="font-mono text-xs text-muted/70">{siteConfig.footerSnippet}</code>
      </div>
    </footer>
  );
}
