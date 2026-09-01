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
          <strong>Mesure d&apos;audience</strong> : le Site utilise{" "}
          <strong>Vercel Web Analytics</strong>, un outil de statistiques{" "}
          <strong>sans cookie</strong>. Il compte les pages vues et retient le
          site référent, le pays, le type d&apos;appareil et le navigateur.
          L&apos;adresse IP n&apos;est pas conservée : elle sert uniquement à
          calculer un identifiant de visite anonyme, renouvelé chaque jour et
          impossible à relier à une personne ou à suivre d&apos;un site à
          l&apos;autre. Voir la{" "}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité de Vercel Analytics
          </a>
          .
        </li>
        <li>
          <strong>Journaux techniques</strong> : les données nécessaires au
          fonctionnement et à la sécurité du site (adresse IP, type de
          navigateur), conservées par l&apos;hébergeur puis supprimées.
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
          Mesurer l&apos;audience du Site de façon anonyme et sans cookie —{" "}
          <strong>base légale : notre intérêt légitime</strong>. Aucun
          consentement n&apos;est requis puisque rien n&apos;est déposé sur ton
          appareil et qu&apos;aucune donnée personnelle n&apos;est conservée.
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
        hébergeur <strong>Vercel</strong>, qui assure aussi la mesure
        d&apos;audience, et qui agit pour notre compte. Les données traitées dans le cadre
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
        Le Site ne dépose <strong>aucun cookie</strong> : ni cookie publicitaire,
        ni cookie de pistage, ni même de cookie de mesure d&apos;audience — l&apos;outil
        de statistiques utilisé fonctionne sans en poser. C&apos;est pourquoi tu ne
        vois aucune bannière de consentement.
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
