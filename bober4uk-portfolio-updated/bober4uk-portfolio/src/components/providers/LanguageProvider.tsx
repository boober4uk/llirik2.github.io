"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, LocalizedText } from "@/types";

const LANG_KEY = "site_lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "ru" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(LANG_KEY, next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (text: LocalizedText) => text[lang] ?? text.ru
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
