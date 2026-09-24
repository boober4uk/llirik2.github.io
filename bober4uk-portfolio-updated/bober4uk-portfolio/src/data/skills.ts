import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    label: { ru: "Datapack-ядро", en: "Datapack core" },
    items: [
      "Minecraft Datapacks",
      ".mcfunction",
      "Commands",
      "Macros",
      "Storage"
    ]
  },
  {
    label: { ru: "Игровая логика", en: "Game logic" },
    items: ["Scoreboards", "Predicates", "Loot Tables", "NBT", "Functions"]
  },
  {
    label: { ru: "Вокруг проекта", en: "Around the project" },
    items: ["Resource Packs", "Git", "GitHub", "JSON"]
  }
];
