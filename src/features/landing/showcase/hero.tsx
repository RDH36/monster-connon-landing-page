import { useTranslations } from "next-intl";

import { PlayBadge } from "@/features/landing/shell/play-badge";

import { Trailer } from "./trailer";

export function Hero() {
  const t = useTranslations("hero");
  const tPlay = useTranslations("play");
  const tags = t.raw("tags") as string[];

  return (
    <section
      id="top"
      className="bg-twilight relative overflow-hidden border-b-[3px] border-ink"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="eyebrow-gold text-xs sm:text-sm">{t("badge")}</span>

          <h1 className="title-stroke font-display text-5xl leading-[0.95] sm:text-6xl">
            {t("titleLine1")}
            <br />
            <span className="text-accent">{t("titleLine2")}</span>
          </h1>

          <p className="max-w-md text-lg font-bold text-primary-light">
            {t.rich("subtitle", {
              hl: (chunks) => <span className="text-label-gold">{chunks}</span>,
            })}
          </p>

          <div className="flex flex-col items-start gap-2">
            <PlayBadge />
            <span className="pl-1 text-xs font-bold text-dim-purple">
              {tPlay("note")}
            </span>
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

        <Trailer />
      </div>
    </section>
  );
}
