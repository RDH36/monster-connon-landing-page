import { cn } from "@/lib/utils";

/**
 * Cadre iPhone repris de screenshoot-app (`DeviceFrame iphone-15-pro` avec les
 * surcharges du projet Flipia) : châssis noir en 9/19,5, coins à 7 %, bord de
 * 2 %, écran à 5 %, Dynamic Island en pilule.
 *
 * Le trailer est en 9/16, plus large que l'écran d'un iPhone : l'appelant
 * l'affiche en `object-contain` par-dessus un fond flouté, plutôt que de le
 * rogner et d'amputer le HUD du jeu.
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

      <div className="relative aspect-[9/19.5] rounded-[7%] bg-black p-[2%] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.55)]">
        <div
          className={cn(
            "relative size-full overflow-hidden rounded-[5%] bg-black",
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
