type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

export function formatPrice(amount: number, currency: "RUB" | "USD", lang: "ru" | "en"): string {
  try {
    const locale = lang === "ru" ? "ru-RU" : "en-US";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "RUB" ? 0 : 2
    }).format(amount);
  } catch {
    return `${amount} ${currency}`;
  }
}

export function formatDate(iso: string, lang: "ru" | "en"): string {
  try {
    return new Date(iso).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "long"
    });
  } catch {
    return iso;
  }
}
