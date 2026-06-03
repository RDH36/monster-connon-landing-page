import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function TermsSiteEn() {
  return (
    <>
      <p>
        These terms of use (the &quot;Terms&quot;) govern access to and use of the{" "}
        <strong>Monster Cannon</strong> pre-registration website (&quot;the
        Site&quot;) and, in time, the Monster Cannon mobile game (&quot;the
        Game&quot;). By using the Site, you accept these Terms.
      </p>

      <h2>1. Purpose</h2>
      <p>
        The Site&apos;s sole purpose is to present the Game, which is under
        development, and to let you sign up to a waitlist to be informed of its
        launch and the opening of the beta.
      </p>

      <h2>2. Development status</h2>
      <p>
        The Game is <strong>under development</strong>. The announced features,
        dates and content are indicative and may change. Pre-registration
        guarantees neither a specific release date nor automatic beta access, for
        which places may be limited.
      </p>

      <h2>3. Pre-registration</h2>
      <ul>
        <li>You agree to provide a valid email address belonging to you.</li>
        <li>
          Sign-up is free and with no commitment; you can unsubscribe at any time.
        </li>
        <li>
          We process your address in accordance with our{" "}
          <Link href="/confidentialite">Privacy Policy</Link>.
        </li>
      </ul>

      <h2>4. The Game&apos;s business model</h2>
      <p>
        The Game will be <strong>free (free-to-play)</strong>. It will offer{" "}
        <strong>optional rewarded ads</strong>: you freely choose to watch them in
        exchange for in-game advantages. No forced ads are imposed. The content and
        advantages obtained in the game have no real monetary value and are neither
        exchangeable nor refundable.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The name &quot;Monster Cannon&quot;, the logos, graphics, characters, text
        and all elements of the Site and the Game are protected and remain the
        exclusive property of their author (RDH). Any unauthorized reproduction or
        use is prohibited.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>attempt to harm the operation or security of the Site;</li>
        <li>collect other users&apos; data or impersonate someone;</li>
        <li>use the Site for unlawful or fraudulent purposes.</li>
      </ul>

      <h2>7. External links</h2>
      <p>
        The Site may contain links to third-party services (e.g. Google Play). We
        are not responsible for the content or practices of these third-party
        sites.
      </p>

      <h2>8. Liability</h2>
      <p>
        The Site is provided &quot;as is&quot;, without warranty of continuous
        availability or of being error-free. To the extent permitted by law, we
        disclaim any liability for indirect damages resulting from use of the Site.
      </p>

      <h2>9. Changes to the Terms</h2>
      <p>
        We may change these Terms at any time. The applicable version is the one
        published on this page, whose update date is shown at the top.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the law applicable at the author&apos;s place of
        residence. Any dispute will be submitted to the competent courts, subject to
        consumer protection laws.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any question about these Terms, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
