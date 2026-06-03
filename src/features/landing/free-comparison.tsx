import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

type Row = { others: string; us: string };

export function FreeComparison() {
  const t = useTranslations("free");
  const rows = t.raw("rows") as Row[];

  return (
    <section id="gratuit" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t.rich("heading", {
            hl: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 font-semibold text-muted-foreground">
              {t("othersTitle")}
            </p>
            <ul className="space-y-3">
              {rows.map((r) => (
                <li
                  key={r.others}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                  {r.others}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-[3px] border-hp bg-card p-6 shadow-[0_0_32px_-8px_var(--hp)]">
            <p className="mb-4 font-display text-hp">{t("usTitle")}</p>
            <ul className="space-y-3">
              {rows.map((r) => (
                <li key={r.us} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {r.us}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
