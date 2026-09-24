import type { LocalizedText } from "@/types";

export const siteConfig = {
  name: "Bober4uk",
  handle: "bober4uk",
  url: "https://bober4uk.ru",
  discordId: "982175024255471626",

  role: {
    ru: "Разработчик датапаков для Minecraft",
    en: "Minecraft Datapack Developer"
  } satisfies LocalizedText,

  status: {
    ru: "Открыт для заказов",
    en: "Available for projects"
  } satisfies LocalizedText,

  heroTitle: ["Bober4uk"],

  heroSubtitle: {
    ru: "Я создаю сложные и производительные датапаки для Minecraft — уникальные механики, игровые режимы и системы для серверов.",
    en: "I build complex, high-performance Minecraft datapacks — custom mechanics, game modes and server systems."
  } satisfies LocalizedText,

  heroCtaPrimary: { ru: "Смотреть проекты", en: "View projects" } satisfies LocalizedText,
  heroCtaSecondary: { ru: "Связаться", en: "Contact me" } satisfies LocalizedText,
  scrollHint: { ru: "Листай вниз", en: "Scroll" } satisfies LocalizedText,

  aboutEyebrow: "function bober4uk:about",
  aboutIntro: {
    ru: "Разрабатываю датапаки (.mcfunction) для Minecraft уже 3 года. Два года плотно занимался механиками на командных блоках, последний год — полностью перешёл на оптимизированный код и датапаки любой сложности.",
    en: "I've been building Minecraft datapacks (.mcfunction) for 3 years. Two of them were spent deep in command-block mechanics, and the last one fully on optimized code and datapacks of any complexity."
  } satisfies LocalizedText,
  aboutDetail: {
    ru: "Хорошо знаком с современными фишками движка: макросы, работа со storage, динамические массивы, кастомные триггеры. К каждому проекту отношусь ответственно — весь код проходит краш-тест перед сдачей.",
    en: "Comfortable with the engine's modern features: macros, storage, dynamic arrays, custom triggers. Every project gets treated seriously — all code is crash-tested before delivery."
  } satisfies LocalizedText,
  aboutSnippet: "execute as @a at @s run function bober4uk:load",

  stats: [
    { value: "3+", label: { ru: "года в разработке", en: "years building" } as LocalizedText },
    { value: "10+", label: { ru: "датапаков и карт", en: "datapacks & maps" } as LocalizedText },
    { value: "100%", label: { ru: "кастомные системы", en: "custom-built systems" } as LocalizedText }
  ],

  projectsEyebrow: "function bober4uk:projects",
  projectsTitle: { ru: "Избранные проекты", en: "Selected projects" } satisfies LocalizedText,
  projectsSubtitle: {
    ru: "Часть систем и датапаков, которые я реализовал.",
    en: "Some of the systems and datapacks I've built."
  } satisfies LocalizedText,

  filters: {
    all: { ru: "Все", en: "All" } as LocalizedText,
    order: { ru: "Заказ", en: "Order" } as LocalizedText,
    own: { ru: "Своя инициатива", en: "Own project" } as LocalizedText
  },

  skillsEyebrow: "function bober4uk:skills",
  skillsTitle: { ru: "Инструменты и навыки", en: "Tools & skills" } satisfies LocalizedText,
  skillsSubtitle: {
    ru: "Технологии, с которыми я работаю каждый день.",
    en: "The stack I reach for on every project."
  } satisfies LocalizedText,

  terminalEyebrow: "function bober4uk:whoami",
  terminalLines: [
    { command: "whoami", output: "bober4uk" },
    { command: "specialization", output: "Minecraft Datapack Development" },
    { command: "status", output: "available_for_projects: true" }
  ],

  contactEyebrow: "function bober4uk:contact",
  contactTitle: { ru: "Есть идея?", en: "Have an idea?" } satisfies LocalizedText,
  contactSubtitle: {
    ru: "Расскажи о своём проекте или идее для датапака — обсудим и превратим в рабочий код.",
    en: "Tell me about your Minecraft project or datapack idea — let's talk it through and turn it into working code."
  } satisfies LocalizedText,
  contactCta: { ru: "Написать в Telegram", en: "Message on Telegram" } satisfies LocalizedText,

  footerTagline: {
    ru: "Разработчик датапаков для Minecraft",
    en: "Minecraft Datapack Developer"
  } satisfies LocalizedText,
  footerSnippet: "function bober4uk:goodbye",

  socials: [
    {
      id: "telegram",
      label: "Telegram",
      handle: "@booober4uk",
      href: "https://t.me/booober4uk"
    },
    {
      id: "discord",
      label: "Discord",
      handle: "boober4uk",
      href: null
    },
    {
      id: "youtube",
      label: "YouTube",
      handle: "@boober4uk",
      href: "https://www.youtube.com/@boober4uk"
    },
    {
      id: "modrinth",
      label: "Modrinth",
      handle: "bober4uk",
      href: "https://modrinth.com/user/bober4uk"
    }
  ]
};
