# Monster Cannon — Landing Page

Landing page du jeu mobile *Monster Cannon* (arcade roguelike hypercasual cozy cartoon, Android/Google Play, F2P sans pub forcée ni achat intégré). Le jeu est **publié** : l'objectif unique de la page est le **clic vers la fiche Google Play**. Pas de formulaire, pas de capture d'email.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config CSS-first dans `app/globals.css`)
- **shadcn/ui** (style new-york) — `src/components/ui/`
- **next-themes** — mono-thème **twilight** (forcé via `forcedTheme="dark"`)
- **next-intl** — i18n **FR/EN** (routing `[locale]`, FR par défaut sans préfixe, EN sur `/en`)
- **lucide-react** — icônes

> Pas de TanStack Query (landing statique). Pas de theme toggle : le design system est mono-thème.

## i18n (next-intl)

- Locales : `fr` (défaut, `/`) et `en` (`/en`). Config dans `src/i18n/` (`routing.ts`, `navigation.ts`, `request.ts`), middleware racine `middleware.ts`, plugin dans `next.config.ts`.
- Catalogues : `messages/fr.json` + `messages/en.json` (toute la landing). Les composants utilisent `useTranslations` ; les tableaux via `t.raw(...)`, le rich text via `t.rich(...)` avec le tag `<hl>`.
- **Toujours** importer `Link`/`usePathname`/`redirect` depuis `@/i18n/navigation` (pas `next/link`) pour les liens internes, afin de préserver la locale. Sélecteur de langue : `src/components/language-switcher.tsx`.
- Pages légales : titres/dates/descriptions dans `messages` (`legalPages.*`) ; le **corps** est en composants par locale dans `src/features/legal/content/{fr,en}/` (la page choisit selon `locale`).

## Design System (source : handoff Claude Design v1.0, RDH36)

Look **cozy cartoon** (réfs Clash Royale / Candy Crush), fond twilight violet.

- **Polices** : `Lilita One` (titres, boutons — tout ce qui claque) + `Nunito` 800 (corps). `Lilita One` est appliqué automatiquement aux `h1..h4` (base layer).
- **Palette** (tokens dans `app/globals.css`) :
  - Primary `#7A3FC8` (violet), Primary-dark `#4A2390`
  - Accent / Gold `#FFB627` / `#FFD64A`
  - Ink (contours) `#2B1638`, Ink-soft (bordures cartes) `#5A3B7A`
  - Paper `#FFFAEB`, Background `#1A0E2E`, Card `#2B1638`
  - HP/positif `#62D547`, Boss `#FF3D81`, Gem `#2EE0CF`, Danger `#FF5A3F`
- **Utilitaires custom** (`@utility` Tailwind v4) :
  - `title-stroke` — titre cartoon (contour ink + ombre violette)
  - `bg-twilight` — fond dégradé + halos or/violet
  - `btn-game` / `btn-game-hp` (vert) / `btn-game-gold` / `btn-game-active` — boutons chunky 3D
  - `eyebrow-gold` — pilule eyebrow dorée
  - `card-paper` — carte papier cartoon
- **Radii** : sm 10 / md 18 / lg 26 / xl 36 px.
- Couleurs jeu exposées en utilitaires : `text-gold`, `text-hp`, `text-boss`, `text-gem`, `text-ink`, `bg-paper`, `border-ink-soft`, `text-label-gold`, `text-primary-light`, etc.

Le bundle de design original est dans `docs/` (référence). Les composants sections utilisent les tokens sémantiques shadcn (remappés sur la palette) → changer un token met à jour toute la page.

## Structure

```
app/
  layout.tsx        # polices Lilita/Nunito, metadata SEO, Providers, Toaster, lang="fr"
  providers.tsx     # ThemeProvider forcedTheme="dark"
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
    showcase/       # hero, trailer, phone-frame, screenshots
    pitch/          # solution, features, faq, final-cta
  features/legal/   # legal-layout.tsx (+ CONTACT_EMAIL = raymond.dzeryhago36@gmail.com)
public/
  game/             # trailer_720.mp4, poster.jpg, 7 captures × FR/EN (copiés du dépôt du jeu)
  badges/           # badge officiel Google Play (FR/EN), à servir sans modification
  og.jpg            # image Open Graph / Twitter
docs/
  LANDING_PAGE.md   # spec copywriting (source de vérité du contenu)
  Landing_Page_Update.md  # brief de mise à jour v1.1.1 (source des faits affichés)
```

Alias d'import : `@/*` → `./src/*`, `@/app/*` → `./app/*`.

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
