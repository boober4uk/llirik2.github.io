"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type DiscordStatus = "online" | "idle" | "dnd" | "offline" | "loading";

const STATUS_STYLES: Record<Exclude<DiscordStatus, "loading">, { dot: string; text: string; label: { ru: string; en: string } }> = {
  online: { dot: "bg-accent shadow-[0_0_10px_#7CE8A9]", text: "text-accent", label: { ru: "Онлайн", en: "Online" } },
  idle: { dot: "bg-amber-400 shadow-[0_0_10px_#fbbf24]", text: "text-amber-400", label: { ru: "Отошёл", en: "Idle" } },
  dnd: { dot: "bg-rose-400 shadow-[0_0_10px_#fb7185]", text: "text-rose-400", label: { ru: "Не беспокоить", en: "Do not disturb" } },
  offline: { dot: "bg-white/30", text: "text-muted", label: { ru: "Не в сети", en: "Offline" } }
};

export function DiscordStatusBadge() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<DiscordStatus>("loading");

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${siteConfig.discordId}`);
        const json = await res.json();
        if (!cancelled && json?.success) {
          setStatus(json.data.discord_status as DiscordStatus);
        }
      } catch {
        if (!cancelled) setStatus("offline");
      }
    }

    poll();
    const id = window.setInterval(poll, 30000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  if (status === "loading") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30" />
        {t({ ru: "Проверка статуса…", en: "Checking status…" })}
      </span>
    );
  }

  const style = STATUS_STYLES[status];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs">
      <span className={cn("h-1.5 w-1.5 rounded-full", style.dot)} />
      <span className={style.text}>{t(style.label)}</span>
      <span className="text-muted">· Discord</span>
    </span>
  );
}
