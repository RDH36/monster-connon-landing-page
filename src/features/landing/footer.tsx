import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const prefix = locale === "fr" ? "" : `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 font-bold">
          <span>💥</span>
          <span>
            Monster<span className="text-accent"> Cannon</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">{t("tagline")}</p>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <a href={`${prefix}/#faq`} className="hover:text-foreground">
            {t("faq")}
          </a>
          <a href={`${prefix}/#waitlist`} className="hover:text-foreground">
            {t("preRegister")}
          </a>
          <Link href="/confidentialite-jeu" className="hover:text-foreground">
            {t("privacyGame")}
          </Link>
          <Link href="/conditions-jeu" className="hover:text-foreground">
            {t("termsGame")}
          </Link>
          <Link href="/confidentialite" className="hover:text-foreground">
            {t("privacySite")}
          </Link>
          <Link href="/conditions" className="hover:text-foreground">
            {t("termsSite")}
          </Link>
        </nav>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {t("copyright", { year })}
      </p>
    </footer>
  );
}
