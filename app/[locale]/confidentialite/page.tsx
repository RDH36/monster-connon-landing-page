import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import PrivacySiteEn from "@/features/legal/content/en/privacy-site";
import PrivacySiteFr from "@/features/legal/content/fr/privacy-site";
import { LegalLayout } from "@/features/legal/legal-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPages.privacySite" });
  return { title: `${t("title")} — Monster Cannon`, description: t("description") };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.privacySite" });

  return (
    <LegalLayout title={t("title")} updatedAt={t("updatedAt")}>
      {locale === "en" ? <PrivacySiteEn /> : <PrivacySiteFr />}
    </LegalLayout>
  );
}
