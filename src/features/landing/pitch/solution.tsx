import { useTranslations } from "next-intl";

import { Reveal } from "@/components/reveal";

type Benefit = { icon: string; title: string; body: string };

export function Solution() {
  const t = useTranslations("solution");
  const benefits = t.raw("benefits") as Benefit[];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("valueProp")}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={i * 80}
              className="card-paper p-6"
            >
              <span className="text-3xl">{b.icon}</span>
              <h3 className="mt-4 text-lg font-black">{b.title}</h3>
              <p className="mt-2 text-ink-soft">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
