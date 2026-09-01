"use client";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  // Le sélecteur ne vit que dans la navbar verte : couleurs pensées pour ce fond.
  return (
    <div className="flex items-center gap-1 font-display text-xs">
      <Link
        href={pathname}
        locale="fr"
        className={cn(
          "transition-colors",
          locale === "fr"
            ? "text-gold"
            : "text-primary-light hover:text-paper",
        )}
      >
        FR
      </Link>
      <span className="text-primary-light/50">/</span>
      <Link
        href={pathname}
        locale="en"
        className={cn(
          "transition-colors",
          locale === "en"
            ? "text-gold"
            : "text-primary-light hover:text-paper",
        )}
      >
        EN
      </Link>
    </div>
  );
}
