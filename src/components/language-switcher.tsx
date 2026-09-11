"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = { fr: "FR", en: "EN" };

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 border border-[var(--line)] rounded-full p-0.5">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
            l === locale
              ? "bg-[var(--ink)] text-white"
              : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
