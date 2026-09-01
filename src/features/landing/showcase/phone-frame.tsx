import { cn } from "@/lib/utils";

/**
 * Cadre iPhone calé sur la landing de Flipia, mesuré au pixel sur son rendu :
 * châssis 9/18,9, bord de 2,7 % identique sur les quatre côtés, Dynamic
 * Island en pilule, et surtout des coins **circulaires** : un rayon en %
 * donnerait des coins elliptiques (7 % de la largeur contre 7 % de la
 * hauteur), ce qui se voit immédiatement sur un cadre deux fois plus haut
 * que large. Mesuré chez Flipia : 37 px sur un châssis de 290 px de large.
 *
 * L'écran est rempli d'un bord à l'autre (`object-cover` côté appelant) :
 * c'est ce qui fait lire l'ensemble comme un téléphone. Le trailer étant en
 * 9/16, il perd environ 9 % de chaque côté — préféré à des bandes.
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

      <div className="relative aspect-[9/18.9] rounded-[38px] bg-black p-[2.7%] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.55)]">
        <div
          className={cn(
            "relative size-full overflow-hidden rounded-[30px] bg-black",
            screenClassName,
          )}
        >
          {children}

          {/* Dynamic Island */}
          <span className="absolute left-1/2 top-[1.3%] z-10 h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}
