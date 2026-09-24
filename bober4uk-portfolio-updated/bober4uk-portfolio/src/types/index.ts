export type Lang = "ru" | "en";

export type LocalizedText = {
  ru: string;
  en: string;
};

export type LocalizedList = {
  ru: string[];
  en: string[];
};

export type ProjectTag = "order" | "own" | "tips";

export type Project = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  features: LocalizedList;
  tags: ProjectTag[];
  category: LocalizedText;
  version: string[];
  date: string;
  cover: string;
  downloadUrl?: string;
  rating?: number;
  feedback?: LocalizedText;
  price?: {
    amount: number;
    currency: "RUB" | "USD";
    estimated?: boolean;
  };
};

export type SkillGroup = {
  label: LocalizedText;
  items: string[];
};
