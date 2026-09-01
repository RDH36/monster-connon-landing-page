import { cn } from "@/lib/utils";

/**
 * Cadre téléphone au style de la landing Flipia, mesuré sur son rendu :
 * châssis noir, bord de 2,7 % identique sur les quatre côtés, coins
 * **circulaires** (un rayon en % donne des coins elliptiques sur un cadre deux
 * fois plus haut que large), Dynamic Island en pilule.
 *
 * Une seule chose diffère de la référence, et elle est imposée par le média :
 * l'écran est en 9/16, le format natif du trailer et des captures. Un écran
 * d'iPhone en 9/18,9 obligerait soit à rogner 9 % de chaque côté (ce qui
 * ampute le HUD du jeu), soit à laisser des bandes. Le châssis est donc un
 * peu moins élancé, mais l'image est intégrale.
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
        <div className="pointer-events-none absolute -inset-6 rounded-[60px] bg-primary/15 blur-3xl" />
      )}

      <div className="relative rounded-[38px] bg-black p-[2.7%] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.55)]">
        <div
          className={cn(
            "relative aspect-[9/16] w-full overflow-hidden rounded-[30px] bg-black",
            screenClassName,
          )}
        >
          {children}

          {/* Dynamic Island : le centre du HUD du jeu est vide, elle ne masque rien. */}
          <span className="absolute left-1/2 top-[1.6%] z-10 h-[2.6%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}
