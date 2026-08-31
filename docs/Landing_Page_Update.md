# Mise à jour de la landing page — Monster Cannon

Brief pour mettre à jour <https://monster-connon-landing-page.vercel.app> (routes `/fr` et `/en`).
Écrit le 2026-08-30, à partir du jeu en version **v1.1.1** (code Play 13).

Tout ce qui est marqué ✅ a été vérifié dans le code du jeu. Tout ce qui est marqué ⚠️ est une
affirmation actuellement en ligne que **personne n'a vérifiée** : à mesurer avant de la laisser.

## Contenu de ce dossier

Les rushes du trailer (`Recordings/`) ne sont **pas** dans le dépôt git : tout ce qui est
nécessaire à la landing page a donc été copié ici.

| Fichier | Quoi | Où l'utiliser |
|---|---|---|
| `trailer_720.mp4` | Trailer 34 s, 720×1280, musique + SFX (en anglais) | Hero, en autoplay muet |
| `poster.jpg` | Image d'affiche du trailer | Attribut `poster` de la vidéo |
| `01_vague_dense_*.jpg` | Vague saturée, explosion en cours | « difficulté infinie » |
| `02_boss_*.jpg` | Combat de boss | « boss tous les 10 niveaux » |
| `03_boosts_*.jpg` | Écran de choix de boost en fin de vague | « progression roguelike » |
| `04_histoire_*.jpg` | Les monstres emportent l'or, bulle de dialogue | section « L'histoire » |
| `06_combo_*.jpg` | Combo x9, pluie de pièces | « physique satisfaisante » |
| `07_boutique_canons_*.jpg` | Boutique de canons, prix en or | « cosmétique uniquement » |
| `08_quetes_*.jpg` | Quêtes du jour + succès à paliers | « objectifs à long terme » |
| `09_classement_*.jpg` | Classement mondial (vague atteinte) | « compare-toi au monde » |

**Chaque capture existe dans les deux langues** : suffixe `_fr` pour la route `/fr`, `_en` pour
`/en` (par exemple `03_boosts_fr.jpg` et `03_boosts_en.jpg`). Le trailer, lui, n'existe qu'en
anglais.

Toutes les images sont en 1080×1920 (sauf `04_histoire_*.jpg`, recadrées pour retirer les bandes
noires de la cinématique).

---

## 1. Ce que la page raconte aujourd'hui

Structure actuelle : header + CTA « Pre-register » → hero « AIM. BOUNCE. DESTROY EVERYTHING. » →
3 problèmes du mobile gaming → solution → 7 blocs de fonctionnalités → tableau comparatif →
avantages de la préinscription → specs techniques → FAQ (7 questions) → footer.

Le fond est bon et n'a pas besoin d'être réécrit. Ce qui manque, c'est **la preuve** : la page
décrit un jeu que le visiteur ne voit jamais. Aucune vidéo, aucune capture d'écran, un badge
Google Play non cliquable.

---

## 2. Ce qui existe vraiment dans le jeu (à jour)

À utiliser tel quel, ce sont des faits vérifiés :

- ✅ **Une histoire en ouverture** : une cinématique de ~11 s au tout premier lancement — des
  monstres viennent voler l'or du canon endormi. C'est ce qui justifie que les monstres lâchent
  de l'or quand on les détruit. Passable d'un bouton.
- ✅ **Vagues infinies**, combat en temps réel (le canon a un temps de recharge, les monstres
  avancent tout seuls).
- ✅ **5 boss**, aux vagues 10, 20, 30, 40 et 50 : Blob King, Speedy, Guardian, Splitter, Overlord.
- ✅ **4 boosts de run** proposés en fin de vague : Boulet Robuste (traverse +1 ennemi), Réserve
  de Boulets (+1 boulet), Boulet Lourd (+1 dégât), Canon Rapide (recharge −0,5 s).
- ✅ **Laboratoire** : 4 améliorations permanentes payées en or — 3 montent au niveau 8, les PV du
  canon au niveau 3. Le coût est quadratique : chaque niveau demande plusieurs parties.
- ✅ **21 canons** à débloquer, dont 4 gratuits ; les autres coûtent de 12 000 à 400 000 or.
- ✅ **Succès et quêtes** : 8 chaînes de succès à paliers + 3 quêtes du jour tirées chaque jour,
  payées en or.
- ✅ **Classement en ligne** mondial sur la meilleure vague atteinte.
- ✅ **FR / EN**, changeable dans les réglages.

### Monétisation — les chiffres exacts

C'est la promesse forte de la page, donc elle doit être exacte :

- ✅ **Aucune publicité interstitielle**, aucune pub imposée. Elles ont été retirées du jeu.
- ✅ **Uniquement des pubs à récompense, lancées par le joueur** : revivre après la mort
  (5 fois par jour maximum) et doubler l'or d'une partie (2 fois par jour maximum).
- ✅ **Aucun achat intégré.** L'économie est 100 % or gagné en jouant. Les gemmes payantes ont
  été abandonnées.
- ✅ Les canons sont **purement cosmétiques** : aucun n'améliore les statistiques.

Formulation possible pour la page : « Deux boutons de pub dans tout le jeu, et c'est toi qui
décides d'appuyer. Rien à acheter. »

---

## 3. À corriger sur la page

| Endroit | Problème | Quoi faire |
|---|---|---|
| Specs techniques | ⚠️ « 60 FPS » | Le jeu vise 60 FPS et utilise le frame pacing Android, mais ça n'a **jamais été mesuré** sur un appareil d'entrée de gamme. Soit on mesure, soit on écrit « fluide, pensé pour 60 FPS ». |
| Specs techniques | ⚠️ « moins de 100 Mo » | L'AAB fait ~80 Mo, mais **ce n'est pas la taille de téléchargement** : la Play Console affiche la taille réelle par appareil, toujours plus faible. Relever le chiffre dans la console avant de l'afficher. |
| Préinscription | ⚠️ « Discord communautaire » | Le lien n'existe pas dans le jeu. Ne le promettre que si le serveur est ouvert. |
| Préinscription | ⚠️ « cosmétique de lancement exclusif » | Rien dans le jeu ne distingue aujourd'hui un joueur préinscrit. Soit on l'implémente, soit on retire la promesse. |
| Badge Google Play | Non cliquable | Voir §4 : c'est le changement le plus important. |
| Footer | « In development » | À basculer en « Disponible sur Google Play » le jour de la sortie. |

---

## 4. Ce qu'il faut ajouter

### a. Le trailer (priorité 1)

Un visiteur doit voir le jeu bouger dans les 5 premières secondes de scroll.

- `trailer_720.mp4` (dans ce dossier) est déjà encodé pour le web : H.264, `faststart`,
  720×1280, 6 Mo. La version pleine qualité 1080×1920 reste dans `Recordings/montages/` sur la
  machine de dev.
- À poser dans un cadre de téléphone, en **autoplay muet + boucle**, avec un bouton pour activer
  le son. C'est un format vertical : il ne faut pas l'étirer en 16:9.
- Utiliser `poster.jpg` en attribut `poster` pour éviter le cadre noir au chargement.

### b. Des captures d'écran

Huit par langue, soit 16 fichiers (voir le tableau plus haut), chacune illustrant une promesse
différente de la page. Toutes ont été capturées dans le jeu en v1.1.1.

La monnaie s'appelle **« gold » en anglais et « or » en français**, partout : le jeu mélangeait
« pièces », « coins » et « gold » selon les écrans, tout a été aligné côté jeu (v1.1.1). Employer
les mêmes mots dans les textes de la page.

### c. Le lien Play Store

Le jour de la publication, remplacer le badge inerte par le vrai lien :
`https://play.google.com/store/apps/details?id=com.rdh36.mosntercannon`

⚠️ Attention : l'identifiant contient une faute de frappe (`mosnter`) qui **ne peut plus être
changée** une fois l'app publiée. C'est invisible pour les joueurs, mais il ne faut pas
« corriger » l'URL sur la page, sinon elle pointe dans le vide.

Tant que ce n'est pas publié, garder le formulaire de préinscription — mais alors le badge doit
dire « bientôt », pas ressembler à un bouton de téléchargement.

### d. Une section « L'histoire »

La cinématique d'intro est un angle que la page n'exploite pas du tout, alors que c'est ce qui
distingue le jeu d'un clone : un canon endormi, des monstres qui lui volent son or, et toute la
boucle de jeu qui en découle. Deux phrases + une capture de la cinématique suffisent.

FR : « Ils ont volé l'or du canon pendant qu'il dormait. Chaque monstre détruit en lâche un peu. »
EN : « They robbed the cannon's gold while it slept. Every monster you destroy drops some back. »

---

## 5. Confidentialité — action obligatoire

Depuis le 30/08/2026, le jeu envoie des **statistiques d'usage anonymes via PostHog** (US) :
événements de progression (vague atteinte, boosts choisis), pubs à récompense visionnées, achats
en or, langue, modèle d'appareil, version de l'app. Aucun compte, aucune adresse e-mail, aucune
donnée de contact.

Deux choses à mettre à jour, elles sont liées :

1. **La page de confidentialité du jeu** (`/{lang}/confidentialite-jeu`, liée depuis les réglages
   du jeu) doit mentionner PostHog comme sous-traitant, la nature des données, la finalité
   (améliorer l'équilibrage et détecter les plantages) et la durée de conservation.
2. **Le formulaire « Sécurité des données » de la Play Console** doit déclarer la même chose :
   identifiants d'appareil + données d'utilisation, *collectées*, *non partagées*, chiffrées en
   transit. Une déclaration incohérente avec le comportement réel de l'app fait rejeter l'envoi.

Le jeu expose déjà un interrupteur technique pour couper la collecte (`Telemetry.SetEnabled`),
mais **il n'est branché sur aucun bouton des réglages**. Si tu vises l'Europe, c'est le
complément naturel à cette mise à jour.

---

## 6. Crédits à faire figurer

Le jeu affiche déjà ces crédits dans ses réglages ; les licences demandent qu'ils soient
accessibles, la landing page est un bon endroit pour les reprendre en pied de page :

- Icônes : Twemoji (CC BY 4.0) — Lorc, game-icons.net (CC BY 3.0)
- Sons : rubberduck — Musique : 3xBlast — OpenGameArt (CC0)

---

## 7. Checklist

- [ ] Trailer intégré en autoplay muet dans un cadre de téléphone, avec poster
- [ ] Les 8 captures intégrées, dans la bonne langue selon la route (`_fr` / `_en`)
- [ ] Section « L'histoire » (cinématique d'intro)
- [ ] Chiffres de monétisation remplacés par les vrais (5 revives / 2 doublements par jour, 0 achat)
- [ ] Ajout des contenus absents de la page : 5 boss, 21 canons, succès et quêtes, classement mondial
- [ ] Affirmations ⚠️ mesurées ou reformulées (60 FPS, taille, Discord, cosmétique de préinscription)
- [ ] Page de confidentialité mise à jour avec PostHog
- [ ] Formulaire Sécurité des données rempli dans la Play Console
- [ ] Lien Play Store activé le jour de la sortie (attention à la faute dans l'identifiant)
