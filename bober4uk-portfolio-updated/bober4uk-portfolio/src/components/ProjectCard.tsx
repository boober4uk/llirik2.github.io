"use client";

import Image from "next/image";
import { Download, Star } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";
import type { Project } from "@/types";

const TAG_LABEL = {
  order: siteConfig.filters.order,
  own: siteConfig.filters.own,
  tips: { ru: "Чаевые", en: "Tips" }
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_20px_60px_-15px_rgba(124,232,169,0.25)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.cover}
          alt={t(project.title)}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/0 to-void/0" />
        <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-void/70 px-2 py-1 font-mono text-[11px] text-muted backdrop-blur">
          {project.version.join(", ")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted"
            >
              {t(TAG_LABEL[tag])}
            </span>
          ))}
          {typeof project.rating === "number" && project.rating > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-[11px] text-accent">
              <Star size={11} className="fill-accent" /> {project.rating.toFixed(1)}
            </span>
          )}
        </div>

        <h3 className="font-display text-lg font-semibold text-ink">{t(project.title)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t(project.description)}</p>

        {project.feedback && (
          <p className="mt-4 border-l-2 border-accent/40 pl-3 text-xs italic leading-relaxed text-muted">
            “{t(project.feedback)}”
          </p>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="text-xs text-muted">
            {project.price ? (
              <>
                {project.price.estimated ? `${t({ ru: "прим. ", en: "est. " })}` : ""}
                <span className="font-medium text-ink">
                  {formatPrice(project.price.amount, project.price.currency, lang)}
                </span>
              </>
            ) : (
              t(project.category)
            )}
          </div>
          {project.downloadUrl && project.downloadUrl !== "#" && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-strong"
            >
              <Download size={13} />
              {t({ ru: "Скачать", en: "Download" })}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
