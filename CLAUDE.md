# Monster Cannon — Landing Page

Landing page du jeu mobile *Monster Cannon* (arcade roguelike hypercasual cozy cartoon, Android/Google Play, F2P sans pub forcée ni achat intégré). Le jeu est **publié** : l'objectif unique de la page est le **clic vers la fiche Google Play**. Pas de formulaire, pas de capture d'email.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config CSS-first dans `app/globals.css`)
- **shadcn/ui** (style new-york) — `src/components/ui/`
- **next-intl** — i18n **FR/EN** (routing `[locale]`, FR par défaut sans préfixe, EN sur `/en`)
- **lucide-react** — icônes
- **@vercel/analytics** — mesure d'audience sans cookie (déclarée dans `/confidentialite`)

> Pas de TanStack Query (landing statique). Pas de theme toggle : le design system est mono-thème.

## i18n (next-intl)

- Locales : `fr` (défaut, `/`) et `en` (`/en`). Config dans `src/i18n/` (`routing.ts`, `navigation.ts`, `request.ts`), middleware racine `middleware.ts`, plugin dans `next.config.ts`.
- Catalogues : `messages/fr.json` + `messages/en.json` (toute la landing). Les composants utilisent `useTranslations` ; les tableaux via `t.raw(...)`, le rich text via `t.rich(...)` avec le tag `<hl>`.
- **Toujours** importer `Link`/`usePathname`/`redirect` depuis `@/i18n/navigation` (pas `next/link`) pour les liens internes, afin de préserver la locale. Sélecteur de langue : `src/components/language-switcher.tsx`.
- Pages légales : titres/dates/descriptions dans `messages` (`legalPages.*`) ; le **corps** est en composants par locale dans `src/features/legal/content/{fr,en}/` (la page choisit selon `locale`).

## Design System (v2 — papier + terrain, direction validée le 1er sept. 2026)

Look **cozy cartoon** (réfs Clash Royale / Candy Crush). Le violet twilight de la v1 a été
abandonné : il « faisait IA ». La page alterne désormais **papier crème** et **bandes vert
terrain**, comme les captures ASO du Play Store où la carte claire est posée sur une bande de
couleur. Aucun dégradé flou nulle part — que des aplats et des bords francs.

- **Polices** : `Titan One` (gros titres + boutons) + `Nunito` (corps, 700 par défaut).
  `Titan One` est une fonte d'affiche : elle n'est appliquée qu'aux **`h1`/`h2`**. Les `h3`/`h4`
  — titres de cartes, questions de FAQ — restent sur `Nunito` en 900, sinon c'est illisible en
  petit (leçon apprise : tout mettre en fonte d'affiche a rendu la page pénible à lire).
- **Palette** (tokens dans `app/globals.css`) :
  - Papier `#FFF3D8` (fond), Carte `#FFFAEB`, Encre `#2A2118` (contours + texte), Encre douce `#6E5C44`
  - Vert terrain `#1E4526` (navbar, footer, bandes), Vert sombre `#12290F`, Vert clair `#B7CDBB`
  - Or `#FFD64A` / Accent `#FFB627` (remplissages), Accent sombre `#C25E07` (texte accent sur papier)
  - `--label-gold` `#8A4A0A` : la version lisible de l'or sur fond papier
  - HP `#4FA82F`, Boss `#FF3D81`, Gem `#17A89B`, Danger `#D93B1F`
- **Utilitaires custom** (`@utility` Tailwind v4) :
  - `title-stroke` — titre cartoon (rempli en or, contour encre, ombre accent-dark)
  - `bg-paper-dots` — fond papier + trame de points façon BD
  - `band-forest` — bande verte pleine largeur (captures, footer)
  - `btn-game` / `btn-game-hp` / `btn-game-gold` / `btn-game-active` — boutons chunky 3D
  - `eyebrow-gold` — pilule eyebrow dorée
  - `card-paper` — carte papier cartoon (contour encre 3 px + ombre dure)
- **Apparition au défilement** : `src/components/reveal.tsx` (IntersectionObserver) + les règles
  `[data-reveal]` dans `globals.css`. Le masquage n'a lieu que si `data-js` est posé sur `<html>`
  par le script inline du layout **et** hors `prefers-reduced-motion` : sans JS, rien ne disparaît.
  Utiliser `as="li"` dans les listes et `delay` pour échelonner une grille.
- **Radii** : sm 10 / md 18 / lg 26 / xl 36 px.
- Le site est en thème **clair** (`colorScheme: light`, plus de classe `dark`).

Le bundle de design original est dans `docs/` (référence de la v1 violette). Les composants
sections utilisent les tokens sémantiques shadcn (remappés sur la palette) → changer un token met
à jour toute la page.

## Structure

```
app/
  [locale]/layout.tsx # polices Lilita/Nunito, metadata SEO, thème clair
  page.tsx          # assemble les sections
  globals.css       # design system complet (palette, polices, @utility)
  confidentialite-jeu/  # Confidentialité DU JEU (RGPD + Google Play) — pour la fiche store
  conditions-jeu/       # Conditions d'utilisation DU JEU (CLUF/EULA)
  confidentialite/      # Confidentialité du site (aucune donnée collectée)
  conditions/           # Conditions du site
src/
  components/ui/    # composants shadcn (accordion, sonner, + button/card/input/badge)
  lib/utils.ts      # helper cn()
  features/landing/
    assets.ts       # PLAY_URL + helpers de chemins vers public/game
    shell/          # navbar, footer, play-badge (badge officiel + bouton navbar)
    showcase/       # hero, trailer, phone-frame, store-gallery
                    # phone-frame reprend le DeviceFrame iphone-15-pro de
                    # screenshoot-app (surcharges Flipia : rounded 7%, p 2%)
    pitch/          # highlights, steps, solution, features, faq, final-cta
  features/legal/   # legal-layout.tsx (+ CONTACT_EMAIL = contact@dzeryhago.com)
public/
  game/             # trailer_720.mp4 + poster.jpg (vertical, cadre téléphone)
                    # hero_bg.mp4 + poster (trailer paysage réencodé, fond du hero)
  store/            # les 6 captures du store × FR/EN (exports screenshoot-app,
                    # format App Store iPhone 6.9 : plus haut que l'export Play)
  badges/           # badge officiel Google Play (FR/EN), à servir sans modification
  og.jpg            # image Open Graph / Twitter
docs/
  LANDING_PAGE.md   # spec copywriting (source de vérité du contenu)
  Landing_Page_Update.md  # brief de mise à jour v1.1.1 (source des faits affichés)
```

Alias d'import : `@/*` → `./src/*`, `@/app/*` → `./app/*`.

## SEO

- `src/lib/seo.ts` — `SITE_URL`, la liste des `ROUTES` et les helpers d'URL. **Toute nouvelle page
  doit être ajoutée à `ROUTES`** : le sitemap et les hreflang en découlent.
- `app/sitemap.ts` et `app/robots.ts` — générés par Next (le middleware next-intl les ignore, son
  matcher exclut les chemins contenant un point).
- Canonique + `hreflang` fr/en/x-default sur chaque page, via `alternatesFor(locale, route)`.
- Données structurées dans `src/features/landing/structured-data.tsx` : `VideoGame` (lie la page à
  la fiche Play) + `FAQPage` (résultats enrichis). **Jamais de note ni de compteur d'installations**
  tant qu'ils ne sont pas sourcés dans la Play Console.
- `SITE_URL` = `https://monstercannon.dzeryhago.com` (sous-domaine du portfolio de Raymond).

## Scripts

- `pnpm dev` — serveur de dev
- `pnpm build` — build production (page entièrement statique)
- `pnpm lint` — ESLint (règles Next + react-hooks 19)
- `pnpm ts` — typecheck (`tsc --noEmit`)

## À faire (TODO produit)

- **Chiffres à mesurer** : « 60 FPS » et le poids de téléchargement ne sont pas mesurés ; la page dit seulement « fluide, pensé pour 60 FPS » et n'annonce aucun poids. À relever dans la Play Console avant de les afficher.
- **Play Console** : le formulaire « Sécurité des données » doit déclarer PostHog (identifiants d'appareil + données d'utilisation, collectées, non partagées, chiffrées en transit) — sinon l'envoi est rejeté.

## Conventions

- Tout en **français** (UI + copy). Tutoiement, ton fun/arcade.
- Max 250 lignes par fichier, max 7 fichiers par dossier (règles globales Raymond).
- Jamais de faux avis ni de compteurs inventés. Tout chiffre affiché doit être vérifiable dans le jeu (voir `docs/Landing_Page_Update.md`).
