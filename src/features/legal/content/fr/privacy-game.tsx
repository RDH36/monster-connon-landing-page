import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function PrivacyGameFr() {
  return (
    <>
      <p>
        La présente politique décrit comment le jeu mobile{" "}
        <strong>Monster Cannon</strong> (« le Jeu ») traite tes données lorsque tu
        y joues. Elle est conçue pour répondre aux exigences de Google Play et au
        Règlement Général sur la Protection des Données (RGPD).
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le Jeu est édité par <strong>RDH</strong>, développeur indépendant.
        Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>2. Principe : pas de compte, sauvegarde locale</h2>
      <p>
        Le Jeu se joue <strong>sans inscription ni compte</strong>. Nous ne te
        demandons aucune donnée personnelle identifiante (nom, e-mail, téléphone).
        Ta progression (record, or, canons débloqués, améliorations du
        laboratoire, succès, paramètres) est stockée{" "}
        <strong>en local sur ton appareil</strong>. Deux exceptions, décrites
        ci-dessous : la <strong>meilleure vague atteinte</strong>, envoyée au
        classement mondial, et des <strong>statistiques d&apos;usage anonymes</strong>.
      </p>

      <h2>3. Statistiques d&apos;usage anonymes</h2>
      <p>
        Depuis le 30 août 2026, le Jeu envoie des{" "}
        <strong>statistiques d&apos;usage anonymes</strong> à{" "}
        <strong>PostHog</strong>, notre sous-traitant d&apos;analyse (serveurs
        situés aux États-Unis). Sont transmis :
      </p>
      <ul>
        <li>
          des <strong>événements de progression</strong> (vague atteinte, boosts
          choisis) ;
        </li>
        <li>les publicités à récompense visionnées et les achats en or ;</li>
        <li>
          la <strong>langue</strong>, le <strong>modèle d&apos;appareil</strong>{" "}
          et la <strong>version de l&apos;application</strong>.
        </li>
      </ul>
      <p>
        <strong>
          Aucun compte, aucune adresse e-mail, aucune donnée de contact
        </strong>{" "}
        n&apos;est transmis. Ces données servent uniquement à{" "}
        <strong>équilibrer le jeu et détecter les plantages</strong>. Elles sont
        chiffrées en transit et conservées <strong>12 mois maximum</strong>, puis
        supprimées. Voir la{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité de PostHog
        </a>
        .
      </p>

      <h2>4. Classement mondial</h2>
      <p>
        Si tu joues connecté, la <strong>meilleure vague atteinte</strong> est
        envoyée au classement en ligne pour t&apos;y positionner. Aucune donnée
        identifiante n&apos;y est associée.
      </p>

      <h2>5. Données traitées par des services tiers</h2>
      <h3>Publicités récompensées</h3>
      <p>
        Le Jeu propose des publicités{" "}
        <strong>récompensées et facultatives</strong> fournies par des régies
        tierces (par exemple <strong>Google AdMob</strong> et/ou{" "}
        <strong>Unity Ads</strong>). Pour diffuser ces publicités, ces régies
        peuvent collecter et traiter :
      </p>
      <ul>
        <li>
          un <strong>identifiant publicitaire</strong> (Android Advertising ID) ;
        </li>
        <li>
          des <strong>données techniques</strong> de l&apos;appareil (modèle,
          système, langue, adresse IP approximative) ;
        </li>
        <li>des informations d&apos;interaction avec les publicités.</li>
      </ul>
      <p>
        Ces traitements sont régis par les politiques de confidentialité de ces
        prestataires :{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google / AdMob
        </a>{" "}
        et{" "}
        <a
          href="https://unity.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unity
        </a>
        .
      </p>

      <h2>6. Finalités et bases légales</h2>
      <ul>
        <li>
          Permettre le fonctionnement du Jeu et sauvegarder ta progression en
          local — <strong>exécution du service</strong>.
        </li>
        <li>
          Diffuser des publicités récompensées que tu choisis de regarder —{" "}
          <strong>ton consentement</strong>, recueilli dans le Jeu avant la
          diffusion.
        </li>
        <li>
          Mesurer l&apos;usage du Jeu de façon anonyme pour l&apos;équilibrer et
          corriger les plantages — <strong>intérêt légitime</strong>.
        </li>
        <li>
          Afficher ta meilleure vague dans le classement mondial —{" "}
          <strong>exécution du service</strong>.
        </li>
      </ul>

      <h2>7. Permissions de l&apos;appareil</h2>
      <p>
        Le Jeu utilise l&apos;<strong>accès à Internet</strong> uniquement pour
        charger les publicités récompensées, envoyer les statistiques d&apos;usage
        anonymes et mettre à jour le classement mondial. Il ne demande pas
        l&apos;accès à tes contacts, à ta localisation précise, à ton micro ni à
        tes photos.
      </p>

      <h2>8. Confidentialité des enfants</h2>
      <p>
        Le Jeu n&apos;est pas spécifiquement destiné aux enfants de moins de 13
        ans. Conformément aux règles de Google Play et aux lois applicables, les
        publicités sont configurées de manière appropriée. Si tu es parent et
        penses que ton enfant nous a transmis des données, contacte-nous pour
        toute demande de suppression.
      </p>

      <h2>9. Conservation et suppression</h2>
      <p>
        Les données de progression restent sur ton appareil jusqu&apos;à ce que tu{" "}
        <strong>désinstalles le Jeu</strong> ou effaces ses données, ce qui les
        supprime définitivement. Tu peux à tout moment réinitialiser ou supprimer
        ton identifiant publicitaire dans les <strong>paramètres Android</strong>{" "}
        (Confidentialité &gt; Annonces). Les statistiques d&apos;usage anonymes
        sont conservées 12 mois au maximum.
      </p>

      <h2>10. Tes droits</h2>
      <p>
        Conformément au RGPD, tu disposes d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement, de limitation, d&apos;opposition et de
        portabilité. Comme nous ne stockons aucune donnée identifiante sur nos
        serveurs — les statistiques d&apos;usage sont anonymes et le classement ne
        contient que ta meilleure vague — ces droits s&apos;exercent principalement
        via ton appareil et les paramètres des régies publicitaires. Pour toute demande, écris-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Tu peux aussi
        saisir l&apos;autorité de protection des données compétente.
      </p>

      <h2>11. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures raisonnables pour protéger le Jeu. Aucune
        méthode de transmission ou de stockage n&apos;étant totalement sûre, nous
        ne pouvons garantir une sécurité absolue.
      </p>

      <h2>12. Modifications</h2>
      <p>
        Cette politique peut être mise à jour, notamment en cas d&apos;évolution du
        Jeu ou des régies publicitaires. La date de mise à jour figure en haut de
        cette page.
      </p>

      <h2>13. Contact</h2>
      <p>
        Pour toute question relative à la confidentialité du Jeu, écris-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
