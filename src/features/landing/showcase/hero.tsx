import { useTranslations } from "next-intl";

import { Reveal } from "@/components/reveal";

import { HERO_BG_POSTER, HERO_BG_SRC } from "@/features/landing/assets";
import { PlayBadge } from "@/features/landing/shell/play-badge";

import { Trailer } from "./trailer";

export function Hero() {
  const t = useTranslations("hero");
  const tPlay = useTranslations("play");

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="eyebrow-gold text-xs sm:text-sm">{t("badge")}</span>

          <h1 className="title-stroke font-display text-5xl leading-[0.95] sm:text-6xl">
            {t("titleLine1")}
            <br />
            <span className="text-paper">{t("titleLine2")}</span>
          </h1>

          <p className="max-w-md text-lg font-bold text-paper/85">
            {t.rich("subtitle", {
              hl: (chunks) => <span className="text-gold">{chunks}</span>,
            })}
          </p>

          <div className="flex flex-col items-start gap-2">
            <PlayBadge />
            <span className="pl-1 text-xs font-bold text-paper/60">
              {tPlay("note")}
            </span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Trailer />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Le trailer en fond, comme les fiches Google Play sur le web : la version
 * paysage a ses bords floutés, elle remplit donc la largeur sans bandes noires.
 * Vidéo réservée au desktop : sur mobile on sert l'affiche, pas 2,6 Mo.
 */
function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url(${HERO_BG_POSTER})` }}
      />
      <video
        src={HERO_BG_SRC}
        poster={HERO_BG_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 hidden size-full object-cover lg:block"
      />
      {/* Voile noir : le texte papier doit rester lisible par-dessus le gameplay. */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
    </div>
  );
}
