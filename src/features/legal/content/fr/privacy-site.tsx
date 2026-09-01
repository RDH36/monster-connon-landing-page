import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function PrivacySiteFr() {
  return (
    <>
      <p>
        La présente politique explique comment nous traitons tes données
        personnelles lorsque tu utilises le site de{" "}
        <strong>Monster Cannon</strong> (« le Site ») et le jeu mobile Monster
        Cannon (« le Jeu »). Nous attachons une grande importance à la
        protection de ta vie privée et nous conformons au Règlement Général sur la
        Protection des Données (RGPD).
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>Raymond Dzery Hago</strong>, développeur
        indépendant de Monster Cannon. Pour toute question relative à tes données,
        tu peux nous contacter à l&apos;adresse :{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>2. Données que nous collectons</h2>
      <h3>Sur le Site</h3>
      <p>
        Le Site est une page de présentation : il ne contient{" "}
        <strong>aucun formulaire</strong> et ne te demande{" "}
        <strong>aucune donnée personnelle</strong> — ni adresse e-mail, ni compte,
        ni inscription.
      </p>
      <ul>
        <li>
          <strong>Données techniques</strong> : données strictement nécessaires au
          fonctionnement du site (adresse IP, type de navigateur), traitées de
          façon anonyme à des fins de sécurité et de mesure d&apos;audience.
        </li>
      </ul>
      <h3>Dans le jeu</h3>
      <ul>
        <li>
          <strong>Progression de jeu</strong> : ton record, ton or et tes canons
          sont enregistrés <strong>localement sur ton appareil</strong> (aucun
          compte requis). Le détail des données envoyées par le jeu —
          statistiques d&apos;usage anonymes et classement mondial — figure sur la
          page « Confidentialité du jeu ».
        </li>
        <li>
          <strong>Publicités récompensées</strong> : le Jeu utilise une régie
          publicitaire tierce (p. ex. Unity Ads / Google AdMob) pour proposer des
          pubs <strong>optionnelles</strong>. Ces régies peuvent collecter un
          identifiant publicitaire et des données techniques selon leurs propres
          politiques.
        </li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <ul>
        <li>
          Assurer le bon fonctionnement et la sécurité du Site —{" "}
          <strong>base légale : notre intérêt légitime</strong>.
        </li>
        <li>
          Diffuser des publicités récompensées dans le Jeu —{" "}
          <strong>base légale : ton consentement</strong>, recueilli dans le Jeu.
        </li>
      </ul>

      <h2>4. Durée de conservation</h2>
      <p>
        Les journaux techniques de l&apos;hébergeur du Site sont conservés le temps
        nécessaire à la sécurité et à la mesure d&apos;audience, puis supprimés.
        Aucune donnée personnelle n&apos;est stockée par le Site.
      </p>

      <h2>5. Partage de tes données</h2>
      <p>
        Nous ne vendons jamais tes données. Le Site ne les partage qu&apos;avec son
        hébergeur, agissant pour notre compte. Les données traitées dans le cadre
        du Jeu (statistiques anonymes, régies publicitaires) sont décrites sur la
        page « Confidentialité du jeu ».
      </p>

      <h2>6. Tes droits</h2>
      <p>
        Conformément au RGPD, tu disposes d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement, de limitation, d&apos;opposition et de
        portabilité de tes données. Pour exercer ces droits, écris-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Tu peux également
        introduire une réclamation auprès de l&apos;autorité de protection des
        données compétente.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Le Site utilise uniquement des cookies strictement nécessaires à son
        fonctionnement. Aucun cookie publicitaire ni de pistage tiers n&apos;est
        déposé sur le Site.
      </p>

      <h2>8. Mineurs</h2>
      <p>
        Le Site n&apos;est pas destiné aux enfants de moins de 13 ans. Il ne
        collecte aucune donnée les concernant, puisqu&apos;il n&apos;en collecte
        aucune.
      </p>

      <h2>9. Modifications</h2>
      <p>
        Nous pouvons mettre à jour cette politique. Toute modification importante
        sera signalée sur cette page, avec une date de mise à jour actualisée.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pour toute question, contacte-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
