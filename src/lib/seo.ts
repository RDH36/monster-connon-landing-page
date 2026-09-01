/** Constantes et helpers d'URL partagés par les metadata, le sitemap et le robots. */

export const SITE_URL = "https://monster-cannon.dzeryhago.com";

export const LOCALES = ["fr", "en"] as const;

/**
 * Chemins des pages. Les slugs ne sont pas localisés (pas de `pathnames`
 * dans le routing next-intl) : la seule différence entre langues est le préfixe.
 */
export const ROUTES = [
  "",
  "/confidentialite-jeu",
  "/conditions-jeu",
  "/confidentialite",
  "/conditions",
] as const;

/** FR est servi sans préfixe (`localePrefix: "as-needed"`), EN sous `/en`. */
export function localizedPath(locale: string, route: string) {
  if (locale === "en") return `/en${route}`;
  return route === "" ? "/" : route;
}

export function urlFor(locale: string, route: string) {
  return new URL(localizedPath(locale, route), SITE_URL).toString();
}

/** Canonique + hreflang pour une page donnée, dans les deux langues. */
export function alternatesFor(locale: string, route: string) {
  return {
    canonical: localizedPath(locale, route),
    languages: {
      fr: localizedPath("fr", route),
      en: localizedPath("en", route),
      "x-default": localizedPath("fr", route),
    },
  };
}
