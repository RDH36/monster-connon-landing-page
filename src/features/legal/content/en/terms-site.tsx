import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function TermsSiteEn() {
  return (
    <>
      <p>
        These terms of use (the &quot;Terms&quot;) govern access to and use of the{" "}
        <strong>Monster Cannon</strong> website (&quot;the Site&quot;) and the
        Monster Cannon mobile game (&quot;the Game&quot;). By using the Site, you accept these Terms.
      </p>

      <h2>1. Purpose</h2>
      <p>
        The Site&apos;s sole purpose is to present the Game and to link to its
        Google Play listing. It offers no form, no account and no sign-up.
      </p>

      <h2>2. How the Game evolves</h2>
      <p>
        The Game is <strong>published and updated regularly</strong>. The features
        and content described on the Site match the version live at the time of
        writing and may change from one update to the next.
      </p>

      <h2>3. Personal data</h2>
      <p>
        The Site collects no personal data. The details are in our{" "}
        <Link href="/confidentialite">Privacy Policy</Link>.
      </p>

      <h2>4. The Game&apos;s business model</h2>
      <p>
        The Game is <strong>free (free-to-play)</strong> and contains{" "}
        <strong>no in-app purchases</strong>. It offers{" "}
        <strong>optional rewarded ads</strong>: you freely choose to watch them in
        exchange for in-game advantages. No forced ads are imposed. The content and
        advantages obtained in the game have no real monetary value and are neither
        exchangeable nor refundable.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The name &quot;Monster Cannon&quot;, the logos, graphics, characters, text
        and all elements of the Site and the Game are protected and remain the
        exclusive property of their author (Raymond Dzery Hago). Any unauthorized reproduction or
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
