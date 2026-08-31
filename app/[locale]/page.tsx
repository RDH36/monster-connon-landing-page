import { setRequestLocale } from "next-intl/server";

import { Faq } from "@/features/landing/pitch/faq";
import { Features } from "@/features/landing/pitch/features";
import { FinalCta } from "@/features/landing/pitch/final-cta";
import { Solution } from "@/features/landing/pitch/solution";
import { Footer } from "@/features/landing/shell/footer";
import { Navbar } from "@/features/landing/shell/navbar";
import { Hero } from "@/features/landing/showcase/hero";
import { Screenshots } from "@/features/landing/showcase/screenshots";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Solution />
        <Screenshots />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
