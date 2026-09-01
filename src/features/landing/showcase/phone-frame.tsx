import { cn } from "@/lib/utils";

/**
 * Cadre téléphone repris au pixel des exports ASO
 * (screenshoot-app → exports/monster-cannon/.../iphone-6.9). Mesuré sur un
 * export 1320 px : châssis de 1280 px de large, bord de 45 px sur les quatre
 * côtés (3,5 %), rayon de 123 px (9,6 %), corps #2A2140 avec un liseré clair.
 *
 * Le ratio 1080/1920 est porté par l'écran, pas par le châssis : c'est celui
 * du trailer et des captures, donc le média remplit l'écran au pixel près.
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

      <div className="relative rounded-[29px] border-2 border-[#413654] bg-[#2A2140] p-[3.5%] shadow-[0_30px_60px_-15px_rgba(30,18,60,0.8)]">
        <div
          className={cn(
            "relative aspect-[1080/1920] w-full overflow-hidden rounded-[24px] bg-[#241C3B]",
            screenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
