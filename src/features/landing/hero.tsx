import { useTranslations } from "next-intl";
import Image from "next/image";

import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  const t = useTranslations("hero");
  const tags = t.raw("tags") as string[];

  return (
    <section
      id="top"
      className="bg-twilight relative overflow-hidden border-b-[3px] border-ink"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="eyebrow-gold text-xs sm:text-sm">{t("badge")}</span>

          <div>
            <h1 className="title-stroke font-display text-5xl leading-[0.95] sm:text-6xl">
              {t("titleLine1")}
              <br />
              <span className="text-accent">{t("titleLine2")}</span>
            </h1>
          </div>

          <p className="max-w-md text-lg font-bold text-primary-light">
            {t.rich("subtitle", {
              hl: (chunks) => (
                <span className="text-label-gold">{chunks}</span>
              ),
            })}
          </p>

          <div id="waitlist" className="w-full">
            <WaitlistForm />
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border-2 border-gold/70 bg-white/5 px-3 py-1 font-display text-[11px] tracking-wider text-label-gold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[60px] bg-primary/25 blur-3xl" />

      {/* Châssis du téléphone */}
      <div className="relative aspect-[9/19] rounded-[44px] border-[3px] border-[#0d0618] bg-gradient-to-b from-[#241338] to-[#0d0618] p-[9px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_0_0_2px_rgba(255,214,74,0.12)]">
        {/* Boutons latéraux */}
        <span className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-l bg-[#0d0618]" />
        <span className="absolute -right-[3px] top-20 h-7 w-[3px] rounded-r bg-[#0d0618]" />
        <span className="absolute -right-[3px] top-32 h-12 w-[3px] rounded-r bg-[#0d0618]" />

        {/* Écran : capture réelle du jeu */}
        <div className="relative h-full overflow-hidden rounded-[36px] bg-[#82d6ff]">
          <Image
            src="/cannon.jpg"
            alt="Monster Cannon"
            fill
            priority
            sizes="300px"
            className="object-cover"
          />
          {/* encoche caméra */}
          <span className="absolute left-1/2 top-2 z-10 size-2.5 -translate-x-1/2 rounded-full bg-black/80 ring-2 ring-black/40" />
          {/* barre de navigation gestuelle */}
          <span className="absolute bottom-2 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
