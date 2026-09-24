"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { HeroVisual } from "@/components/HeroVisual";
import { MagneticButton } from "@/components/MagneticButton";
import { siteConfig } from "@/data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <CursorGlow />

      <div className="absolute left-[8%] top-28 hidden select-none font-mono text-[10px] uppercase tracking-[0.35em] text-accent/30 lg:block">
        SYSTEM / DATAPACK / 2026
      </div>

      <div className="mx-auto grid max-w-content items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted shadow-[0_0_30px_rgba(124,232,169,0.04)]"
          >
            <Sparkles size={12} className="text-accent" />
            {t(siteConfig.status)}
          </motion.div>

          <motion.h1
            variants={reduceMotion ? undefined : item}
            className="font-display text-[18vw] font-semibold leading-[0.82] tracking-[-0.07em] text-ink sm:text-7xl md:text-[7.2rem]"
          >
            <span className="hero-gradient-text">{siteConfig.heroTitle[0]}</span>
          </motion.h1>

          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted/70"
          >
            <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
            <span>{t(siteConfig.role)}</span>
          </motion.div>

          <motion.p
            variants={reduceMotion ? undefined : item}
            className="mt-7 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            {t(siteConfig.heroSubtitle)}
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-void transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_10px_35px_rgba(124,232,169,0.2)]"
              >
                {t(siteConfig.heroCtaPrimary)}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-border-hover hover:bg-white/[0.03]"
              >
                {t(siteConfig.heroCtaSecondary)}
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9, x: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mx-auto mt-20 flex max-w-content items-center gap-3 px-6 text-xs text-muted"
      >
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        {t(siteConfig.scrollHint)}
        <span className="h-px w-14 bg-gradient-to-r from-border to-transparent" />
      </motion.div>
    </section>
  );
}
