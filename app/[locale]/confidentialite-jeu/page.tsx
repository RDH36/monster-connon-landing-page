import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PrivacyGameEn from "@/features/legal/content/en/privacy-game";
import PrivacyGameFr from "@/features/legal/content/fr/privacy-game";
import { LegalLayout } from "@/features/legal/legal-layout";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPages.privacyGame" });
  return {
    title: `${t("title")} — Monster Cannon`,
    description: t("description"),
    alternates: alternatesFor(locale, "/confidentialite-jeu"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.privacyGame" });

  return (
    <LegalLayout title={t("title")} updatedAt={t("updatedAt")}>
      {locale === "en" ? <PrivacyGameEn /> : <PrivacyGameFr />}
    </LegalLayout>
  );
}
