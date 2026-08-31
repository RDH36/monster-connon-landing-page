import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { SHOT_HEIGHT, SHOT_WIDTH, shotSrc } from "@/features/landing/assets";

type Shot = { key: string; tag: string; caption: string };

/** Captures réelles du jeu, servies dans la langue de la route. */
export function Screenshots() {
  const t = useTranslations("screenshots");
  const locale = useLocale();
  const items = t.raw("items") as Shot[];

  return (
    <section id="screenshots" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t.rich("heading", {
            hl: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          {t("subheading")}
        </p>

        {/* Défilement horizontal sur mobile, grille au-delà. */}
        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
          {items.map((shot) => (
            <li
              key={shot.key}
              className="w-[220px] shrink-0 snap-center md:w-auto"
            >
              <Image
                src={shotSrc(shot.key, locale)}
                alt={shot.caption}
                width={SHOT_WIDTH}
                height={SHOT_HEIGHT}
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 30vw, 220px"
                loading="lazy"
                className="w-full rounded-[22px] border-[3px] border-ink shadow-[0_14px_32px_-16px_rgba(0,0,0,0.85)]"
              />
              <p className="mt-3 font-display text-xs uppercase tracking-wider text-label-gold">
                {shot.tag}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {shot.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
