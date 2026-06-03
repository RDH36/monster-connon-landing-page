import { setRequestLocale } from "next-intl/server";

import { Faq } from "@/features/landing/faq";
import { Features } from "@/features/landing/features";
import { FinalCta } from "@/features/landing/final-cta";
import { Footer } from "@/features/landing/footer";
import { FreeComparison } from "@/features/landing/free-comparison";
import { Hero } from "@/features/landing/hero";
import { Navbar } from "@/features/landing/navbar";
import { Problem } from "@/features/landing/problem";
import { SocialProof } from "@/features/landing/social-proof";
import { Solution } from "@/features/landing/solution";

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
        <Problem />
        <Solution />
        <Features />
        <FreeComparison />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
