import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "speed-craft",
    title: { ru: "Speed Craft", en: "Speed Craft" },
    description: {
      ru: "Аркадный режим на выбывание: воссоздай предмет на верстаке за секунды, пока не останется последний игрок.",
      en: "An elimination arcade mode: recreate the item on the crafting table in seconds until one player remains."
    },
    features: {
      ru: [
        "Бесконечные раунды со случайными предметами",
        "4 уровня сложности, по 10 предметов каждый",
        "Система стриков, ускоряющая таймер",
        "Модификаторы: Second Life, Conveyor, Randomizer"
      ],
      en: [
        "Endless rounds with randomized crafting targets",
        "4 difficulty tiers, 10 items each",
        "Streak system that shortens the timer",
        "Modifiers: Second Life, Conveyor, Randomizer"
      ]
    },
    tags: ["own"],
    category: { ru: "Карта", en: "Map" },
    version: ["1.21.11"],
    date: "2026-06-24",
    cover: "/images/projects/preview_map_speed_craft.webp",
    downloadUrl: "#",
    price: { amount: 2000, currency: "RUB", estimated: true }
  },
  {
    id: "damage-to-mini",
    title: { ru: "Damage To Mini", en: "Damage To Mini" },
    description: {
      ru: "Игрок уменьшается при получении урона — чем меньше рост, тем сильнее падает скорость, сила и прыжок.",
      en: "The player shrinks on taking damage — the smaller they get, the more speed, strength and jump height drop."
    },
    features: {
      ru: [
        "Плавная анимация изменения размера",
        "Отдельная кривая для урона, скорости и прыжка",
        "Новый способ регена — вампиризм",
        "Совместим с мультиплеером и другими датапаками"
      ],
      en: [
        "Smooth size-change animation",
        "Separate curve for damage, speed and jump",
        "New regen path — vampirism on kill",
        "Multiplayer-safe and mod-compatible"
      ]
    },
    tags: ["own"],
    category: { ru: "Датапак", en: "Datapack" },
    version: ["1.21.11"],
    date: "2026-06-24",
    cover: "/images/projects/preview_datapack_DTM.webp",
    downloadUrl:
      "https://cdn.modrinth.com/data/eRyi0xHH/versions/VgQtKhs8/dtm.zip?mr_download_reason=standalone&mr_game_version=1.21.11&mr_loader=datapack",
    price: { amount: 350, currency: "RUB", estimated: true }
  },
  {
    id: "rolling-sniffer",
    title: { ru: "Rolling Sniffer", en: "Rolling Sniffer" },
    description: {
      ru: "Управляй нюхачом, используя факел как транспортное средство — с ускорением от семян факела.",
      en: "Ride a sniffer using a torch as a vehicle, with a speed boost from torchflower seeds."
    },
    features: {
      ru: [
        "Команда-триггер для активации управления",
        "Интуитивная схема ввода",
        "Аккуратные визуальные эффекты движения",
        "Лёгкая настройка под свой сервер"
      ],
      en: [
        "Trigger command to enable control mode",
        "Intuitive input scheme",
        "Clean movement visual effects",
        "Easy to configure for your own server"
      ]
    },
    tags: ["own"],
    category: { ru: "Датапак", en: "Datapack" },
    version: ["1.21.1"],
    date: "2025-03-10",
    cover: "/images/projects/preview_datapack_RS.webp",
    downloadUrl:
      "https://cdn.modrinth.com/data/iR5e4XmH/versions/domyEy7F/RollingSniffer.zip?mr_download_reason=standalone",
    rating: 4,
    price: { amount: 200, currency: "RUB", estimated: true }
  },
  {
    id: "prank-datapack",
    title: { ru: "Датапак для пранка", en: "Prank Datapack" },
    description: {
      ru: "Датапак под заказ для видео-пранка друзей — неожиданные события и безопасные, но забавные эффекты.",
      en: "A custom-order datapack for a friend-prank video — unexpected events with safe but hilarious effects."
    },
    features: {
      ru: [
        "Забавные звуковые эффекты",
        "Неожиданные, но безопасные события",
        "Лёгкое включение и отключение",
        "Правки внесены в течение часа после заказа"
      ],
      en: [
        "Playful sound effects",
        "Unexpected but safe trigger events",
        "Easy to toggle on and off",
        "Revisions delivered within the hour"
      ]
    },
    tags: ["order", "tips"],
    category: { ru: "Датапак", en: "Datapack" },
    version: ["1.21.1"],
    date: "2026-06-30",
    cover: "/images/projects/DFP_preview_datapack.webp",
    downloadUrl: "#",
    rating: 5,
    feedback: {
      ru: "Заказал датапак и уже через час получил то что хотел, правки были внесены очень быстро и всё стало так как я хотел, прекрасный сервис, очень рекомендую.",
      en: "Ordered a datapack and had exactly what I wanted within the hour — revisions were done fast, great service, highly recommend."
    },
    price: { amount: 450, currency: "RUB" }
  }
];
