import { Link } from "@/i18n/navigation";
import { CONTACT_EMAIL } from "@/features/legal/legal-layout";

export default function TermsGameEn() {
  return (
    <>
      <p>
        These terms (the &quot;EULA&quot; — End User License Agreement) govern your
        use of the <strong>Monster Cannon</strong> mobile game (&quot;the
        Game&quot;). By downloading, installing or playing the Game, you accept
        these terms. If you do not accept them, do not install or use the Game.
      </p>

      <h2>1. License to use</h2>
      <p>
        We grant you a{" "}
        <strong>
          personal, limited, non-exclusive, non-transferable and revocable
        </strong>{" "}
        license to install and use the Game on a device you own or control, strictly
        for <strong>personal and non-commercial</strong> purposes. You do not
        become the owner of any part of the Game.
      </p>

      <h2>2. Save and progress</h2>
      <p>
        The Game works <strong>without an account</strong>: your progress (high
        score, gold, cannons, achievements) is stored{" "}
        <strong>locally on your device</strong>. As a result:
      </p>
      <ul>
        <li>
          uninstalling the Game, resetting the device or switching devices may
          cause the <strong>permanent loss of your progress</strong>;
        </li>
        <li>
          we cannot restore lost progress, as we keep no copy on our servers.
        </li>
      </ul>

      <h2>3. Virtual currencies and items</h2>
      <p>
        The Game contains a virtual currency (gold) and items (cannons,
        upgrades). These elements:
      </p>
      <ul>
        <li>
          have <strong>no real monetary value</strong> and cannot be exchanged for
          money or goods outside the Game;
        </li>
        <li>
          are <strong>neither transferable nor refundable</strong>, except where
          required by law;
        </li>
        <li>
          are licensed to you for use within the Game only, and may be adjusted,
          balanced or removed for gameplay reasons.
        </li>
      </ul>

      <h2>4. Rewarded ads</h2>
      <p>
        The Game is <strong>free</strong> and offers{" "}
        <strong>optional rewarded ads</strong>: you freely choose to watch them to
        obtain an advantage (for example reviving or doubling your coins). No forced
        ads are imposed. Ads are provided by third-party networks whose data
        processing is described in our{" "}
        <Link href="/confidentialite-jeu">game privacy policy</Link>.
      </p>

      <h2>5. In-app purchases (if any)</h2>
      <p>
        If in-app purchases are offered, they are processed by the app store
        (Google Play) under its own terms. Any purchase grants a license to use
        virtual items within the Game, with no real value. Refund requests are
        subject to the relevant store&apos;s policy.
      </p>

      <h2>6. Code of conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>cheat, use cheat software, bots, mods or automation tools;</li>
        <li>exploit bugs or flaws to gain an unfair advantage;</li>
        <li>
          modify, decompile, disassemble or reverse-engineer the Game, except as
          permitted by law;
        </li>
        <li>
          attempt to access, disrupt or damage the Game or its related services.
        </li>
      </ul>
      <p>
        Any breach may lead to the <strong>suspension or revocation</strong> of
        your license to use the Game.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The Game, its name &quot;Monster Cannon&quot;, its graphics, characters,
        music, text, code and all its elements are protected and remain the
        exclusive property of their author (Raymond Dzery Hago). No rights are granted to you
        beyond the license above.
      </p>

      <h2>8. Updates, availability and discontinuation</h2>
      <p>
        We may <strong>update, modify, suspend or discontinue</strong> all or part
        of the Game at any time, without notice, in particular for technical,
        balancing or commercial reasons. We do not guarantee uninterrupted
        availability.
      </p>

      <h2>9. Warranties and liability</h2>
      <p>
        The Game is provided &quot;<strong>as is</strong>&quot;, without warranty of
        being error-free. To the extent permitted by law, we disclaim any liability
        for indirect damages, loss of progress or unavailability of the Game.
        Nothing limits your mandatory legal rights as a consumer.
      </p>

      <h2>10. Minors</h2>
      <p>
        If you are a minor, you declare that you use the Game with the consent of
        your parents or legal guardian, who are responsible for supervising your
        use, including any purchases.
      </p>

      <h2>11. App store</h2>
      <p>
        The Game is distributed via Google Play. The app store&apos;s terms apply in
        addition to these and prevail in the event of conflict on the matters they
        govern (payment, refunds, distribution).
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms are governed by the law applicable at the author&apos;s place of
        residence, subject to mandatory consumer protection laws. Any dispute will
        be submitted to the competent courts.
      </p>

      <h2>13. Contact</h2>
      <p>
        For any question about the Game, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
