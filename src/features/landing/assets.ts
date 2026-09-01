/**
 * Assets et liens externes de la landing.
 * Les médias viennent du dépôt du jeu (Assets/docs/landing) et sont copiés dans public/game.
 */

/**
 * ⚠️ L'identifiant contient une faute de frappe (« mosnter ») figée à la publication
 * sur le Play Store : ne surtout pas la « corriger », l'URL pointerait dans le vide.
 */
export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.rdh36.mosntercannon";

export const TRAILER_SRC = "/game/trailer_720.mp4";
export const TRAILER_POSTER = "/game/poster.jpg";

/** Les captures existent en deux langues, suffixées _fr / _en. */
export type ShotLocale = "fr" | "en";

export function shotLocale(locale: string): ShotLocale {
  return locale === "fr" ? "fr" : "en";
}

export function shotSrc(key: string, locale: string) {
  return `/game/${key}_${shotLocale(locale)}.jpg`;
}

/** Sprite du Blob King, le boss de la vague 10 — sert de logo au site. */
export const LOGO_SRC = "/blob-king.png";

/** Badge officiel Google Play, décliné par langue. */
export function playBadgeSrc(locale: string) {
  return `/badges/google-play-${shotLocale(locale)}.png`;
}

/** Format natif des captures (1080×1920). */
export const SHOT_WIDTH = 1080;
export const SHOT_HEIGHT = 1920;
