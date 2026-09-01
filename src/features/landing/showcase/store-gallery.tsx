import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { Reveal } from "@/components/reveal";

import {
  STORE_SHOTS,
  STORE_SHOT_HEIGHT,
  STORE_SHOT_WIDTH,
  storeShotSrc,
} from "@/features/landing/assets";

/**
 * Les captures du store, telles quelles, bandes de légende comprises.
 * La page raconte donc exactement la même histoire que la fiche.
 */
export function StoreGallery() {
  const t = useTranslations("store");
  const locale = useLocale();
  const alts = t.raw("alts") as string[];

  return (
    <section id="screenshots" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.rich("heading", {
              hl: (chunks) => <span className="text-accent">{chunks}</span>,
            })}
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            {t("subheading")}
          </p>
        </Reveal>

        {/* Défilement horizontal sur mobile, grille au-delà. */}
        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6">
          {STORE_SHOTS.map((key, i) => (
            <Reveal
              as="li"
              key={key}
              delay={i * 70}
              className="w-[190px] shrink-0 snap-center md:w-auto"
            >
              <Image
                src={storeShotSrc(key, locale)}
                alt={alts[i] ?? ""}
                width={STORE_SHOT_WIDTH}
                height={STORE_SHOT_HEIGHT}
                sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 190px"
                loading="lazy"
                className="w-full rounded-[18px] border-[3px] border-ink shadow-[0_6px_0_0_var(--ink)]"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
