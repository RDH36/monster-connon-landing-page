import { useTranslations } from "next-intl";

type Benefit = { icon: string; title: string; body: string };

export function Solution() {
  const t = useTranslations("solution");
  const benefits = t.raw("benefits") as Benefit[];

  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("valueProp")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="text-3xl">{b.icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
