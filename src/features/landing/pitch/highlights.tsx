import { useTranslations } from "next-intl";

import { Reveal } from "@/components/reveal";

import { PlayBadge } from "@/features/landing/shell/play-badge";

/** Bande verte sous le hero : la promesse en une ligne, le CTA, et les faits en pilules. */
export function Highlights() {
  const t = useTranslations("highlights");
  const pills = t.raw("pills") as string[];

  return (
    <section className="band-forest py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-xl text-primary-light">{t("body")}</p>

          <div className="mt-8">
            <PlayBadge />
          </div>
        </Reveal>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {pills.map((pill, i) => (
            <Reveal
              as="li"
              key={pill}
              delay={i * 60}
              className="rounded-full border-2 border-gold/70 bg-black/15 px-4 py-1.5 font-display text-[11px] tracking-wider text-gold"
            >
              {pill}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
