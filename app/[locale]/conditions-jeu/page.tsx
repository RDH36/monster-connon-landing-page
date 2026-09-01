import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TermsGameEn from "@/features/legal/content/en/terms-game";
import TermsGameFr from "@/features/legal/content/fr/terms-game";
import { LegalLayout } from "@/features/legal/legal-layout";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPages.termsGame" });
  return {
    title: `${t("title")} · Monster Cannon`,
    description: t("description"),
    alternates: alternatesFor(locale, "/conditions-jeu"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.termsGame" });

  return (
    <LegalLayout title={t("title")} updatedAt={t("updatedAt")}>
      {locale === "en" ? <TermsGameEn /> : <TermsGameFr />}
    </LegalLayout>
  );
}
