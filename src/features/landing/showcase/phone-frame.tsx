import { cn } from "@/lib/utils";

/**
 * Cadre iPhone 16 — même construction que les device frames de screenshoot-app :
 * châssis noir en 9/19,5, coins très arrondis, Dynamic Island en pilule.
 *
 * Le contenu du jeu est en 9/16 (captures Android 1080×1920), plus large que
 * l'écran d'un iPhone : l'appelant l'affiche en `object-contain` pour ne rien
 * rogner. L'écran est très légèrement plus clair que le noir pur pour que la
 * Dynamic Island reste lisible sur les bandes.
 */
export function PhoneFrame({
  children,
  className,
  screenClassName,
  glow = true,
}: {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
  glow?: boolean;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {glow && (
        <div className="pointer-events-none absolute -inset-6 rounded-[60px] bg-primary/25 blur-3xl" />
      )}

      <div className="relative aspect-[9/19.5] rounded-[12%] bg-black p-[3%] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.14)]">
        {/* Tranche titane : bouton action, volumes, veille */}
        <span className="absolute -left-[2px] top-[14%] h-[3.5%] w-[2px] rounded-l bg-[#2c2c2e]" />
        <span className="absolute -left-[2px] top-[21%] h-[6%] w-[2px] rounded-l bg-[#2c2c2e]" />
        <span className="absolute -left-[2px] top-[29%] h-[6%] w-[2px] rounded-l bg-[#2c2c2e]" />
        <span className="absolute -right-[2px] top-[23%] h-[9%] w-[2px] rounded-r bg-[#2c2c2e]" />

        <div
          className={cn(
            "relative size-full overflow-hidden rounded-[9%] bg-[#101014]",
            screenClassName,
          )}
        >
          {children}

          {/* Dynamic Island */}
          <span className="absolute left-1/2 top-[1.3%] z-10 h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
          {/* Indicateur d'accueil */}
          <span className="absolute bottom-[1%] left-1/2 z-10 h-[0.5%] w-[32%] -translate-x-1/2 rounded-full bg-white/60" />
        </div>
      </div>
    </div>
  );
}
