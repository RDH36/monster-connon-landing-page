import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function PrivacySiteEn() {
  return (
    <>
      <p>
        This policy explains how we process your personal data when you use the{" "}
        <strong>Monster Cannon</strong> pre-registration website (&quot;the
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
      <h3>On the pre-registration site</h3>
      <ul>
        <li>
          <strong>Email address</strong>: which you provide voluntarily to join the
          waitlist and be notified of the launch.
        </li>
        <li>
          <strong>Beta preference</strong>: optional indication that you want to
          take part in the beta test.
        </li>
        <li>
          <strong>Technical data</strong>: data strictly necessary for the site to
          work (IP address, browser type), processed anonymously for security and
          audience measurement.
        </li>
      </ul>
      <h3>In the game (coming soon)</h3>
      <ul>
        <li>
          <strong>Game progress</strong>: your high score, coins and skins are
          stored <strong>locally on your device</strong> (no account required, no
          data sent to our servers).
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
          Keeping you informed about the launch and beta access —{" "}
          <strong>legal basis: your consent</strong>.
        </li>
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
        Your email address is kept until the Game launches and for a reasonable
        period afterwards, or until you request to unsubscribe. You can unsubscribe
        at any time via the link in each of our emails.
      </p>

      <h2>5. Sharing your data</h2>
      <p>
        We never sell your data. We share it only with our technical providers
        (hosting, email delivery service) acting on our behalf, as well as with ad
        networks within the Game. These providers are required to protect your data.
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
        The Site is not intended for children under 13. If you are a minor, ask your
        parents&apos; permission before submitting your email address.
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
