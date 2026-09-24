"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs text-accent/80">{siteConfig.aboutEyebrow}</p>
        </Reveal>

        <div className="mt-6 grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {t({ ru: "Обо мне", en: "About" })}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{t(siteConfig.aboutIntro)}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">{t(siteConfig.aboutDetail)}</p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.value} className="rounded-2xl border border-border bg-white/[0.02] p-4 md:p-5">
                    <div className="font-display text-2xl font-semibold text-accent md:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs leading-snug text-muted">{t(stat.label)}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-border bg-surface/60 p-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-accent/90">
                  <code>{siteConfig.aboutSnippet}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
