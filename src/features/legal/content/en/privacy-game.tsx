import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function PrivacyGameEn() {
  return (
    <>
      <p>
        This policy describes how the <strong>Monster Cannon</strong> mobile game
        (&quot;the Game&quot;) handles your data when you play. It is designed to
        meet Google Play requirements and the General Data Protection Regulation
        (GDPR).
      </p>

      <h2>1. Data controller</h2>
      <p>
        The Game is published by <strong>Raymond Dzery Hago</strong>, an independent developer.
        Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>2. Principle: no account, local save</h2>
      <p>
        The Game is played <strong>without registration or an account</strong>. We
        do not ask you for any identifying personal data (name, email, phone). Your
        progress (high score, gold, unlocked cannons, lab upgrades, achievements,
        settings) is stored <strong>locally on your device</strong>. Two
        exceptions, described below: the <strong>best wave you reached</strong>,
        sent to the global leaderboard, and{" "}
        <strong>anonymous usage statistics</strong>.
      </p>

      <h2>3. Anonymous usage statistics</h2>
      <p>
        Since August 30, 2026, the Game sends{" "}
        <strong>anonymous usage statistics</strong> to <strong>PostHog</strong>,
        our analytics processor (servers located in the United States). What is
        sent:
      </p>
      <ul>
        <li>
          <strong>progression events</strong> (wave reached, boosts picked);
        </li>
        <li>rewarded ads watched and gold purchases;</li>
        <li>
          <strong>language</strong>, <strong>device model</strong> and{" "}
          <strong>app version</strong>.
        </li>
      </ul>
      <p>
        <strong>No account, no email address, no contact details</strong> are
        transmitted. This data is used solely to{" "}
        <strong>balance the game and detect crashes</strong>. It is encrypted in
        transit and kept for <strong>12 months at most</strong>, then deleted. See{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostHog&apos;s privacy policy
        </a>
        .
      </p>

      <h2>4. Global leaderboard</h2>
      <p>
        If you play while online, the <strong>best wave you reached</strong> is
        sent to the online leaderboard to rank you. No identifying data is
        attached to it.
      </p>

      <h2>5. Data processed by third-party services</h2>
      <h3>Rewarded ads</h3>
      <p>
        The Game offers <strong>optional rewarded ads</strong> provided by
        third-party networks (for example <strong>Google AdMob</strong> and/or{" "}
        <strong>Unity Ads</strong>). To serve these ads, these networks may collect
        and process:
      </p>
      <ul>
        <li>
          an <strong>advertising identifier</strong> (Android Advertising ID);
        </li>
        <li>
          <strong>technical device data</strong> (model, OS, language, approximate
          IP address);
        </li>
        <li>information about your interactions with the ads.</li>
      </ul>
      <p>
        These processing activities are governed by the privacy policies of these
        providers:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google / AdMob
        </a>{" "}
        and{" "}
        <a
          href="https://unity.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unity
        </a>
        .
      </p>

      <h2>6. Purposes and legal bases</h2>
      <ul>
        <li>
          Enabling the Game to work and saving your progress locally, for the{" "}
          <strong>performance of the service</strong>.
        </li>
        <li>
          Serving rewarded ads that you choose to watch, with{" "}
          <strong>your consent</strong>, collected in the Game before they are
          shown.
        </li>
        <li>
          Measuring how the Game is used, anonymously, to balance it and fix
          crashes, under our <strong>legitimate interest</strong>.
        </li>
        <li>
          Showing your best wave on the global leaderboard, for the{" "}
          <strong>performance of the service</strong>.
        </li>
      </ul>

      <h2>7. Device permissions</h2>
      <p>
        The Game uses <strong>internet access</strong> only to load the rewarded
        ads, send the anonymous usage statistics and update the global
        leaderboard. It does not request access to your contacts, precise
        location, microphone or photos.
      </p>

      <h2>8. Children&apos;s privacy</h2>
      <p>
        The Game is not specifically directed at children under 13. In accordance
        with Google Play rules and applicable laws, ads are configured
        appropriately. If you are a parent and believe your child has provided us
        with data, contact us for any deletion request.
      </p>

      <h2>9. Retention and deletion</h2>
      <p>
        Progress data stays on your device until you{" "}
        <strong>uninstall the Game</strong> or clear its data, which permanently
        deletes it. You can reset or delete your advertising identifier at any time
        in your <strong>Android settings</strong> (Privacy &gt; Ads). Anonymous
        usage statistics are kept for 12 months at most.
      </p>

      <h2>10. Your rights</h2>
      <p>
        Under the GDPR, you have the right to access, rectification, erasure,
        restriction, objection and portability. As we store no identifying data on
        our servers (usage statistics are anonymous and the leaderboard only holds
        your best wave), these rights are mainly exercised via your device and the
        ad networks&apos; settings. For any request, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You may also lodge
        a complaint with the relevant data protection authority.
      </p>

      <h2>11. Security</h2>
      <p>
        We implement reasonable measures to protect the Game. As no method of
        transmission or storage is fully secure, we cannot guarantee absolute
        security.
      </p>

      <h2>12. Changes</h2>
      <p>
        This policy may be updated, in particular if the Game or the ad networks
        change. The update date appears at the top of this page.
      </p>

      <h2>13. Contact</h2>
      <p>
        For any question about the Game&apos;s privacy, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
