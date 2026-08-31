import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function PrivacySiteEn() {
  return (
    <>
      <p>
        This policy explains how we process your personal data when you use the{" "}
        <strong>Monster Cannon</strong> website (&quot;the
        Site&quot;) and, in time, the Monster Cannon mobile game (&quot;the
        Game&quot;). We care deeply about protecting your privacy and comply with
        the General Data Protection Regulation (GDPR).
      </p>

      <h2>1. Data controller</h2>
      <p>
        The data controller is <strong>RDH</strong>, independent developer of
        Monster Cannon. For any question about your data, you can contact us at:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>2. Data we collect</h2>
      <h3>On the Site</h3>
      <p>
        The Site is a presentation page: it contains{" "}
        <strong>no form</strong> and asks you for{" "}
        <strong>no personal data</strong> — no email address, no account, no
        sign-up.
      </p>
      <ul>
        <li>
          <strong>Technical data</strong>: data strictly necessary for the site to
          work (IP address, browser type), processed anonymously for security and
          audience measurement.
        </li>
      </ul>
      <h3>In the game</h3>
      <ul>
        <li>
          <strong>Game progress</strong>: your high score, gold and cannons are
          stored <strong>locally on your device</strong> (no account required).
          What the game does send — anonymous usage statistics and the global
          leaderboard — is detailed on the &quot;Game privacy&quot; page.
        </li>
        <li>
          <strong>Rewarded ads</strong>: the Game uses a third-party ad network
          (e.g. Unity Ads / Google AdMob) to offer <strong>optional</strong> ads.
          These networks may collect an advertising identifier and technical data
          under their own policies.
        </li>
      </ul>

      <h2>3. Purposes and legal bases</h2>
      <ul>
        <li>
          Ensuring the proper operation and security of the Site —{" "}
          <strong>legal basis: our legitimate interest</strong>.
        </li>
        <li>
          Serving rewarded ads in the Game —{" "}
          <strong>legal basis: your consent</strong>, collected in the Game.
        </li>
      </ul>

      <h2>4. Retention period</h2>
      <p>
        The Site host&apos;s technical logs are kept for as long as needed for
        security and audience measurement, then deleted. The Site stores no
        personal data.
      </p>

      <h2>5. Sharing your data</h2>
      <p>
        We never sell your data. The Site shares it only with its host, acting on
        our behalf. The data processed within the Game (anonymous statistics, ad
        networks) is described on the &quot;Game privacy&quot; page.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Under the GDPR, you have the right to access, rectification, erasure,
        restriction, objection and portability of your data. To exercise these
        rights, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        You may also lodge a complaint with the relevant data protection authority.
      </p>

      <h2>7. Cookies</h2>
      <p>
        The Site uses only cookies strictly necessary for its operation. No
        advertising or third-party tracking cookies are placed on the Site.
      </p>

      <h2>8. Minors</h2>
      <p>
        The Site is not intended for children under 13. It collects no data about
        them, since it collects none at all.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update this policy. Any material change will be indicated on this
        page, with an updated revision date.
      </p>

      <h2>10. Contact</h2>
      <p>
        For any question, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
