import { getTranslations } from "next-intl/server";

import {
  PLAY_URL,
  PORTFOLIO_URL,
  STORE_SHOTS,
  storeShotSrc,
} from "@/features/landing/assets";
import { SITE_URL, urlFor } from "@/lib/seo";

type Qa = { q: string; a: string };

/**
 * Données structurées schema.org : une fiche VideoGame (ce que Google lit pour
 * relier la page à l'app) et la FAQ, éligible aux résultats enrichis.
 *
 * Rien d'inventé ici : aucune note ni aucun compteur d'installations, tant
 * qu'on ne peut pas les sourcer dans la Play Console.
 */
export async function StructuredData({ locale }: { locale: string }) {
  const meta = await getTranslations({ locale, namespace: "meta" });
  const faq = await getTranslations({ locale, namespace: "faq" });
  const items = faq.raw("items") as Qa[];

  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Monster Cannon",
    url: urlFor(locale, ""),
    description: meta("description"),
    inLanguage: ["fr", "en"],
    applicationCategory: "GameApplication",
    gamePlatform: "Android",
    operatingSystem: "Android",
    playMode: "SinglePlayer",
    image: `${SITE_URL}/og.jpg`,
    screenshot: STORE_SHOTS.map(
      (key) => `${SITE_URL}${storeShotSrc(key, locale)}`,
    ),
    downloadUrl: PLAY_URL,
    installUrl: PLAY_URL,
    author: {
      "@type": "Person",
      name: "Raymond Dzery Hago",
      url: PORTFOLIO_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Raymond Dzery Hago",
      url: PORTFOLIO_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: PLAY_URL,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(game) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
