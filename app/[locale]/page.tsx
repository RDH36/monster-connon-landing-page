import { setRequestLocale } from "next-intl/server";

import { Faq } from "@/features/landing/pitch/faq";
import { Features } from "@/features/landing/pitch/features";
import { FinalCta } from "@/features/landing/pitch/final-cta";
import { Highlights } from "@/features/landing/pitch/highlights";
import { Solution } from "@/features/landing/pitch/solution";
import { Steps } from "@/features/landing/pitch/steps";
import { Footer } from "@/features/landing/shell/footer";
import { Navbar } from "@/features/landing/shell/navbar";
import { Hero } from "@/features/landing/showcase/hero";
import { StoreGallery } from "@/features/landing/showcase/store-gallery";
import { StructuredData } from "@/features/landing/structured-data";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <StoreGallery />
        <Steps />
        <Solution />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
