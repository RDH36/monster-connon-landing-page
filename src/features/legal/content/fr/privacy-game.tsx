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
        Ta progression (record, pièces, gemmes, skins, succès, paramètres) est
        stockée <strong>uniquement en local sur ton appareil</strong> et
        n&apos;est pas transmise à nos serveurs.
      </p>

      <h2>3. Données traitées par des services tiers</h2>
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

      <h2>4. Finalités et bases légales</h2>
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
      </ul>

      <h2>5. Permissions de l&apos;appareil</h2>
      <p>
        Le Jeu utilise l&apos;<strong>accès à Internet</strong> uniquement pour
        charger les publicités récompensées. Il ne demande pas l&apos;accès à tes
        contacts, à ta localisation précise, à ton micro ni à tes photos.
      </p>

      <h2>6. Confidentialité des enfants</h2>
      <p>
        Le Jeu n&apos;est pas spécifiquement destiné aux enfants de moins de 13
        ans. Conformément aux règles de Google Play et aux lois applicables, les
        publicités sont configurées de manière appropriée. Si tu es parent et
        penses que ton enfant nous a transmis des données, contacte-nous pour
        toute demande de suppression.
      </p>

      <h2>7. Conservation et suppression</h2>
      <p>
        Les données de progression restent sur ton appareil jusqu&apos;à ce que tu{" "}
        <strong>désinstalles le Jeu</strong> ou effaces ses données, ce qui les
        supprime définitivement. Tu peux à tout moment réinitialiser ou supprimer
        ton identifiant publicitaire dans les <strong>paramètres Android</strong>{" "}
        (Confidentialité &gt; Annonces).
      </p>

      <h2>8. Tes droits</h2>
      <p>
        Conformément au RGPD, tu disposes d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement, de limitation, d&apos;opposition et de
        portabilité. Comme nous ne stockons aucune donnée personnelle sur nos
        serveurs, ces droits s&apos;exercent principalement via ton appareil et
        les paramètres des régies publicitaires. Pour toute demande, écris-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Tu peux aussi
        saisir l&apos;autorité de protection des données compétente.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures raisonnables pour protéger le Jeu. Aucune
        méthode de transmission ou de stockage n&apos;étant totalement sûre, nous
        ne pouvons garantir une sécurité absolue.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Cette politique peut être mise à jour, notamment en cas d&apos;évolution du
        Jeu ou des régies publicitaires. La date de mise à jour figure en haut de
        cette page.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative à la confidentialité du Jeu, écris-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
