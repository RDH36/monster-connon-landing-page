import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { LOGO_SRC } from "@/features/landing/assets";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/features/landing/shell/footer";

export const CONTACT_EMAIL = "raymond.dzeryhago36@gmail.com";

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  const t = useTranslations("legal");

  return (
    <>
      <header className="sticky top-0 z-50 border-b-[3px] border-ink/60 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg">
            <Image
              src={LOGO_SRC}
              alt=""
              width={40}
              height={31}
              priority
              className="h-10 w-auto"
            />
            <span className="font-display tracking-wide">
              MONSTER<span className="text-accent"> CANNON</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-extrabold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {t("back")}
          </Link>
        </nav>
      </header>

      <main className="bg-twilight flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="title-stroke font-display text-4xl sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-bold text-dim-purple">
            {t("updatedLabel")} : {updatedAt}
          </p>
          <article className="legal-prose mt-10">{children}</article>
        </div>
      </main>

      <Footer />
    </>
  );
}
