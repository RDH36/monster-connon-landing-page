import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { LOGO_SRC, PLAY_URL } from "@/features/landing/assets";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const prefix = locale === "fr" ? "" : `/${locale}`;
  const year = new Date().getFullYear();
  const credits = t.raw("credits") as string[];

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2 font-bold">
          <Image
            src={LOGO_SRC}
            alt=""
            width={30}
            height={23}
            className="h-7 w-auto"
          />
          <span>
            Monster<span className="text-accent"> Cannon</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">{t("tagline")}</p>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            {t("play")}
          </a>
          <a href={`${prefix}/#faq`} className="hover:text-foreground">
            {t("faq")}
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

      {/* Crédits exigés par les licences des assets utilisés dans le jeu. */}
      <div className="mx-auto mt-8 max-w-6xl px-4 text-center">
        <p className="font-display text-[11px] uppercase tracking-wider text-dim-purple">
          {t("creditsTitle")}
        </p>
        {credits.map((line) => (
          <p key={line} className="mt-1 text-xs text-muted-foreground">
            {line}
          </p>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {t("copyright", { year })}
      </p>
    </footer>
  );
}
