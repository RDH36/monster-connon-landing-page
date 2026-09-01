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

/** Portfolio de l'auteur : le site vit sur un sous-domaine de ce domaine. */
export const PORTFOLIO_URL = "https://dzeryhago.com";

export const TRAILER_SRC = "/game/trailer_720.mp4";

/**
 * Trailer paysage (bords floutés) servi en fond de hero, comme la vidéo
 * d'en-tête des fiches Google Play sur le web. Réencodé léger : il passe
 * sous un voile, sa définition n'a aucune importance.
 */
export const HERO_BG_SRC = "/game/hero_bg.mp4";
export const HERO_BG_POSTER = "/game/hero_bg_poster.jpg";
export const TRAILER_POSTER = "/game/poster.jpg";

/** Les captures existent en deux langues, suffixées _fr / _en. */
export type ShotLocale = "fr" | "en";

export function shotLocale(locale: string): ShotLocale {
  return locale === "fr" ? "fr" : "en";
}

/** Sprite du Blob King, le boss de la vague 10 : sert de logo au site. */
export const LOGO_SRC = "/blob-king.png";

/** Badge officiel Google Play, décliné par langue. */
export function playBadgeSrc(locale: string) {
  return `/badges/google-play-${shotLocale(locale)}.png`;
}

/**
 * Captures du store (bandes de légende comprises), exportées depuis
 * screenshoot-app au format App Store iPhone 6.9 : plus haut que l'export
 * Play, il laisse voir le HUD du bas que celui-ci rognait.
 */
export const STORE_SHOTS = [
  "01-hero",
  "02-gameplay",
  "03-boss",
  "04-boost",
  "05-cannons",
  "07-quests",
] as const;

export function storeShotSrc(key: string, locale: string) {
  return `/store/${key}_${shotLocale(locale)}.jpg`;
}

/** Format natif des exports App Store 6.9. */
export const STORE_SHOT_WIDTH = 1320;
export const STORE_SHOT_HEIGHT = 2868;
