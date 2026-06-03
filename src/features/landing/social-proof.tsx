import { useTranslations } from "next-intl";

type Perk = { icon: string; title: string; body: string };

export function SocialProof() {
  const t = useTranslations("social");
  const perks = t.raw("perks") as Perk[];
  const trust = t.raw("trust") as string[];

  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t("heading")}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <span className="text-4xl">{p.icon}</span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
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
