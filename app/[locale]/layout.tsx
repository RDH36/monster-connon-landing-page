import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Nunito, Titan_One } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { SITE_URL, alternatesFor } from "@/lib/seo";
import "../globals.css";

const titan = Titan_One({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["600", "700", "800", "900"],
  variable: "--font-body",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    applicationName: "Monster Cannon",
    authors: [{ name: "Raymond Dzery Hago" }],
    creator: "Raymond Dzery Hago",
    publisher: "Raymond Dzery Hago",
    alternates: alternatesFor(locale, ""),
    robots: { index: true, follow: true },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      type: "website",
      siteName: "Monster Cannon",
      url: alternatesFor(locale, "").canonical,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
      images: ["/og.jpg"],
    },
    appLinks: {
      android: {
        package: "com.rdh36.mosntercannon",
        app_name: "Monster Cannon",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${titan.variable} ${nunito.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <head>
        {/* Avant le premier rendu : sans ce marqueur, rien n'est masqué. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.dataset.js=""',
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
