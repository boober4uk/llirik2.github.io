"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/data/site";

const ALL_SKILLS = skillGroups.flatMap((g) => g.items);

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs text-accent/80">{siteConfig.skillsEyebrow}</p>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {t(siteConfig.skillsTitle)}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 max-w-md text-muted">{t(siteConfig.skillsSubtitle)}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label.en} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-white/[0.02] p-6">
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted">{t(group.label)}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-white/[0.02] px-3 py-1.5 text-sm text-ink transition-colors hover:border-border-hover hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-14 overflow-hidden border-y border-border py-4">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
            {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, i) => (
              <span key={i} className="font-mono text-sm text-muted/70">
                {skill}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent" />
        </div>
      </Reveal>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_28s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </section>
  );
}
