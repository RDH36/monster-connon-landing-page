import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function TermsSiteFr() {
  return (
    <>
      <p>
        Les présentes conditions d&apos;utilisation (« Conditions ») régissent
        l&apos;accès et l&apos;utilisation du site de{" "}
        <strong>Monster Cannon</strong> (« le Site ») et du jeu mobile Monster
        Cannon (« le Jeu »). En utilisant le Site, tu acceptes ces
        Conditions.
      </p>

      <h2>1. Objet</h2>
      <p>
        Le Site a pour seul objet de présenter le Jeu et de renvoyer vers sa fiche
        Google Play. Il ne propose aucun formulaire, aucun compte et aucune
        inscription.
      </p>

      <h2>2. Évolution du Jeu</h2>
      <p>
        Le Jeu est <strong>publié et mis à jour régulièrement</strong>. Les
        fonctionnalités et contenus décrits sur le Site correspondent à la version
        en ligne au moment de la rédaction et peuvent évoluer d&apos;une mise à
        jour à l&apos;autre.
      </p>

      <h2>3. Données personnelles</h2>
      <p>
        Le Site ne collecte aucune donnée personnelle. Le détail figure dans notre{" "}
        <Link href="/confidentialite">Politique de confidentialité</Link>.
      </p>

      <h2>4. Modèle économique du Jeu</h2>
      <p>
        Le Jeu est <strong>gratuit (free-to-play)</strong> et ne contient{" "}
        <strong>aucun achat intégré</strong>. Il propose des publicités{" "}
        <strong>récompensées et facultatives</strong> : tu choisis librement de
        les regarder en échange d&apos;avantages dans le jeu. Aucune publicité
        forcée n&apos;est imposée. Le contenu et les avantages obtenus en
        jeu n&apos;ont aucune valeur monétaire réelle et ne sont ni échangeables ni
        remboursables.
      </p>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        Le nom « Monster Cannon », les logos, graphismes, personnages, textes et
        l&apos;ensemble des éléments du Site et du Jeu sont protégés et demeurent la
        propriété exclusive de leur auteur (Raymond Dzery Hago). Toute reproduction ou utilisation
        non autorisée est interdite.
      </p>

      <h2>6. Utilisation acceptable</h2>
      <p>Tu t&apos;engages à ne pas :</p>
      <ul>
        <li>tenter de nuire au fonctionnement ou à la sécurité du Site ;</li>
        <li>
          collecter les données d&apos;autres utilisateurs ou usurper une identité
          ;
        </li>
        <li>utiliser le Site à des fins illégales ou frauduleuses.</li>
      </ul>

      <h2>7. Liens externes</h2>
      <p>
        Le Site peut contenir des liens vers des services tiers (p. ex. Google
        Play). Nous ne sommes pas responsables du contenu ni des pratiques de ces
        sites tiers.
      </p>

      <h2>8. Responsabilité</h2>
      <p>
        Le Site est fourni « en l&apos;état », sans garantie de disponibilité
        continue ni d&apos;absence d&apos;erreur. Dans les limites permises par la
        loi, nous déclinons toute responsabilité pour les dommages indirects
        résultant de l&apos;utilisation du Site.
      </p>

      <h2>9. Modification des Conditions</h2>
      <p>
        Nous pouvons modifier ces Conditions à tout moment. La version applicable
        est celle publiée sur cette page, dont la date de mise à jour est indiquée
        en haut.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les présentes Conditions sont régies par le droit applicable au lieu de
        résidence de l&apos;auteur. Tout litige sera soumis aux tribunaux
        compétents, sous réserve des dispositions légales protégeant les
        consommateurs.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question concernant ces Conditions, écris-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
