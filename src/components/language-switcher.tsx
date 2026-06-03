"use client";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-1 font-display text-xs">
      <Link
        href={pathname}
        locale="fr"
        className={cn(
          "transition-colors",
          locale === "fr"
            ? "text-accent"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        FR
      </Link>
      <span className="text-ink-soft">/</span>
      <Link
        href={pathname}
        locale="en"
        className={cn(
          "transition-colors",
          locale === "en"
            ? "text-accent"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </Link>
    </div>
  );
}
