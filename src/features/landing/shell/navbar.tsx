import { useTranslations } from "next-intl";
import Image from "next/image";

import { LanguageSwitcher } from "@/components/language-switcher";
import { LOGO_SRC } from "@/features/landing/assets";

import { PlayButton } from "./play-badge";

export function Navbar() {
  const t = useTranslations("nav");

  const links = [
    { href: "#features", label: t("game") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 text-lg">
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
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-extrabold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <PlayButton />
        </div>
      </nav>
    </header>
  );
}
