import { useTranslations } from "next-intl";

import { Reveal } from "@/components/reveal";

import { PlayBadge } from "@/features/landing/shell/play-badge";

export function FinalCta() {
  const t = useTranslations("finalCta");
  const trust = t.raw("trust") as string[];

  return (
    <section id="jouer" className="band-forest relative overflow-hidden py-24">
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-paper sm:text-5xl">
          {t.rich("heading", {
            hl: (chunks) => (
              <span className="text-gold">{chunks}</span>
            ),
          })}
        </h2>

        <p className="mt-5 max-w-xl text-lg text-primary-light">
          {t("supporting")}
        </p>

        <div className="mt-8 flex justify-center">
          <PlayBadge />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-light">
          {trust.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
