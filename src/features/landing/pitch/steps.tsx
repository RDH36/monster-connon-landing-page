import { useTranslations } from "next-intl";

type Step = { title: string; body: string };

/** « Comment on joue », repris mot pour mot de la fiche Play. */
export function Steps() {
  const t = useTranslations("steps");
  const items = t.raw("items") as Step[];

  return (
    <section className="band-forest py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-primary-light">
          {t("subheading")}
        </p>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, i) => (
            <li key={step.title} className="card-paper p-5">
              <span className="flex size-9 items-center justify-center rounded-full border-2 border-ink bg-gold font-display text-base text-ink">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-black">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
