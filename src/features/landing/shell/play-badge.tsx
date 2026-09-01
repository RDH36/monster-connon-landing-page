import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { PLAY_URL, playBadgeSrc } from "@/features/landing/assets";
import { cn } from "@/lib/utils";

/** Format natif du badge officiel Google Play (marge de sécurité comprise). */
const BADGE_RATIO = 646 / 250;
const BADGE_HEIGHT = 72;

/**
 * Badge officiel « Disponible sur Google Play ».
 * L'image est servie telle quelle : les règles de marque Google interdisent
 * de la recolorer, de la recadrer ou de retirer sa marge de sécurité.
 */
export function PlayBadge({ className }: { className?: string }) {
  const t = useTranslations("play");
  const locale = useLocale();

  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      <Image
        src={playBadgeSrc(locale)}
        alt={t("badgeAlt")}
        width={Math.round(BADGE_HEIGHT * BADGE_RATIO)}
        height={BADGE_HEIGHT}
        priority
        className="h-[72px] w-auto"
      />
    </a>
  );
}

/**
 * Bouton texte pour la navbar : le badge officiel ne descend pas sous 40 px
 * de hauteur utile, ce qui ne rentre pas dans une barre de 64 px.
 */
export function PlayButton({ className }: { className?: string }) {
  const t = useTranslations("play");

  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-game btn-game-gold btn-game-sm btn-game-active",
        className,
      )}
    >
      <PlayGlyph />
      {t("ctaShort")}
    </a>
  );
}

function PlayGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 shrink-0 fill-current"
    >
      <path d="M5.4 2.3a1.4 1.4 0 0 1 1.5.1l12 8.5a1.4 1.4 0 0 1 0 2.2l-12 8.5a1.4 1.4 0 0 1-2.2-1.1V3.5c0-.5.3-1 .7-1.2Z" />
    </svg>
  );
}
