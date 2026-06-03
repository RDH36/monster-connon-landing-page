import { useTranslations } from "next-intl";

type Pain = { icon: string; title: string; body: string };

export function Problem() {
  const t = useTranslations("problem");
  const pains = t.raw("pains") as Pain[];

  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("heading")}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-3xl">{pain.icon}</span>
              <h3 className="mt-4 font-semibold">{pain.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pain.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground">
          {t("agitation")}
        </p>
      </div>
    </section>
  );
}
