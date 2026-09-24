"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#about", label: { ru: "Обо мне", en: "About" } },
  { href: "#projects", label: { ru: "Проекты", en: "Projects" } },
  { href: "#skills", label: { ru: "Навыки", en: "Skills" } },
  { href: "#contact", label: { ru: "Контакты", en: "Contact" } }
];

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-void/70 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-wide text-ink">
          {siteConfig.handle}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm text-muted transition-colors hover:text-ink"
            >
              {t(item.label)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20"
          >
            {t({ ru: "Давай обсудим", en: "Let's talk" })}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-void/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm text-muted hover:bg-white/[0.03] hover:text-ink"
                >
                  {t(item.label)}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between px-2">
                <LanguageToggle />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                >
                  {t({ ru: "Давай обсудим", en: "Let's talk" })}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
