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
    <header className="sticky top-0 z-50 bg-primary text-paper">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 text-lg">
          <Image
            src={LOGO_SRC}
            alt=""
            width={40}
            height={31}
            priority
            className="h-10 w-auto"
          />
          <span className="font-display tracking-wide text-paper">
            MONSTER<span className="text-gold"> CANNON</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-extrabold text-primary-light transition-colors hover:text-paper"
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
