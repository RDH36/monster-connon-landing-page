import { useTranslations } from "next-intl";

type Feature = { emoji: string; tag: string; headline: string; body: string };

export function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Feature[];

  return (
    <section id="features" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t.rich("heading", {
            hl: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h2>

        <div className="mt-12 flex flex-col gap-4">
          {items.map((f) => (
            <div
              key={f.tag}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-secondary text-3xl">
                {f.emoji}
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-wider text-label-gold">
                  {f.tag}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{f.headline}</h3>
                <p className="mt-1 text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
