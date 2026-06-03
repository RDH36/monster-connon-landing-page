import { useTranslations } from "next-intl";

import { WaitlistForm } from "./waitlist-form";

export function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section className="relative overflow-hidden py-24">
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
          <WaitlistForm variant="play" />
        </div>
      </div>
    </section>
  );
}
