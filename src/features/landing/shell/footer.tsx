import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import {
  LOGO_SRC,
  PLAY_URL,
  PORTFOLIO_URL,
} from "@/features/landing/assets";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const prefix = locale === "fr" ? "" : `/${locale}`;
  const year = new Date().getFullYear();
  const credits = t.raw("credits") as string[];

  return (
    <footer className="band-forest py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap font-bold">
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

        <p className="text-sm text-primary-light">{t("tagline")}</p>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-primary-light">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            {t("play")}
          </a>
          <a href={`${prefix}/#faq`} className="hover:text-gold">
            {t("faq")}
          </a>
          <Link href="/confidentialite-jeu" className="hover:text-gold">
            {t("privacyGame")}
          </Link>
          <Link href="/conditions-jeu" className="hover:text-gold">
            {t("termsGame")}
          </Link>
          <Link href="/confidentialite" className="hover:text-gold">
            {t("privacySite")}
          </Link>
          <Link href="/conditions" className="hover:text-gold">
            {t("termsSite")}
          </Link>
        </nav>
      </div>

      {/* Crédits exigés par les licences des assets utilisés dans le jeu. */}
      <div className="mx-auto mt-8 max-w-6xl px-4 text-center">
        <p className="font-display text-[11px] uppercase tracking-wider text-gold">
          {t("creditsTitle")}
        </p>
        {credits.map((line) => (
          <p key={line} className="mt-1 text-xs text-primary-light">
            {line}
          </p>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-primary-light">
        {t.rich("copyright", {
          year,
          a: (chunks) => (
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-2 hover:text-paper"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </footer>
  );
}
