import { useTranslations } from "next-intl";

import { PlayBadge } from "@/features/landing/shell/play-badge";

export function FinalCta() {
  const t = useTranslations("finalCta");
  const trust = t.raw("trust") as string[];

  return (
    <section id="jouer" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-primary/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t.rich("heading", {
            hl: (chunks) => (
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
        </h2>

        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          {t("supporting")}
        </p>

        <div className="mt-8 flex justify-center">
          <PlayBadge />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {trust.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
