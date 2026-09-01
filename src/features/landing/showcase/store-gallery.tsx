import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import {
  SHOT_HEIGHT,
  SHOT_WIDTH,
  STORE_SHOTS,
  storeShotSrc,
} from "@/features/landing/assets";

/**
 * Les captures de la fiche Google Play, telles quelles — bandes de légende
 * comprises. La page raconte donc exactement la même histoire que le store.
 */
export function StoreGallery() {
  const t = useTranslations("store");
  const locale = useLocale();
  const alts = t.raw("alts") as string[];

  return (
    <section id="screenshots" className="py-20">
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
        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6">
          {STORE_SHOTS.map((key, i) => (
            <li key={key} className="w-[190px] shrink-0 snap-center md:w-auto">
              <Image
                src={storeShotSrc(key, locale)}
                alt={alts[i] ?? ""}
                width={SHOT_WIDTH}
                height={SHOT_HEIGHT}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 190px"
                loading="lazy"
                className="w-full rounded-[18px] border-[3px] border-ink shadow-[0_6px_0_0_var(--ink)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
