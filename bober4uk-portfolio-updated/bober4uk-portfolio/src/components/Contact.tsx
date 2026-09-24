"use client";

import { ArrowUpRight, Copy } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { DiscordIcon, ModrinthIcon, TelegramIcon, YoutubeIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  telegram: TelegramIcon,
  discord: DiscordIcon,
  youtube: YoutubeIcon,
  modrinth: ModrinthIcon
};

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  function copyHandle(handle: string) {
    navigator.clipboard?.writeText(handle).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs text-accent/80">{siteConfig.contactEyebrow}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t(siteConfig.contactTitle)}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-md text-muted">{t(siteConfig.contactSubtitle)}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9">
            <MagneticButton className="inline-block">
              <a
                href={siteConfig.socials[0].href ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-accent-strong"
              >
                {t(siteConfig.contactCta)}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.socials.map((social) => {
              const Icon = ICONS[social.id];
              const content = (
                <>
                  <Icon className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-ink">{social.label}</div>
                    <div className="text-xs text-muted">{social.handle}</div>
                  </div>
                </>
              );

              const className =
                "flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-border-hover";

              return social.href ? (
                <a key={social.id} href={social.href} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <button
                  key={social.id}
                  type="button"
                  onClick={() => copyHandle(social.handle)}
                  className={`${className} text-left`}
                >
                  {content}
                  <Copy size={14} className="ml-auto text-muted" />
                </button>
              );
            })}
          </div>
          {copied && <p className="mt-3 text-xs text-accent">{t({ ru: "Скопировано", en: "Copied" })}</p>}
        </Reveal>
      </div>
    </section>
  );
}
