"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
type Filter = "all" | "order" | "own";

const FILTERS: Filter[] = ["all", "order", "own"];

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs text-accent/80">{siteConfig.projectsEyebrow}</p>
        </Reveal>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {t(siteConfig.projectsTitle)}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 max-w-md text-muted">{t(siteConfig.projectsSubtitle)}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    filter === f
                      ? "border-accent/50 bg-accent/10 text-accent"
                      : "border-border text-muted hover:border-border-hover hover:text-ink"
                  )}
                >
                  {t(siteConfig.filters[f])}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i, 3) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
