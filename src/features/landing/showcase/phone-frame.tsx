import { cn } from "@/lib/utils";

/**
 * Cadre téléphone repris au pixel des exports ASO
 * (screenshoot-app → exports/monster-cannon/.../iphone-6.9). Mesuré sur un
 * export 1320 px : châssis de 1280 px de large, bord de 45 px sur les quatre
 * côtés (3,5 %), rayon de 123 px (9,6 %), corps repeint en encre brune #2A2118 pour la palette papier.
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
        <div className="pointer-events-none absolute -inset-6 rounded-[60px] bg-primary/15 blur-3xl" />
      )}

      <div className="relative rounded-[29px] border-2 border-[#5A4A34] bg-[#2A2118] p-[3.5%] shadow-[0_30px_60px_-15px_rgba(42,33,24,0.45)]">
        <div
          className={cn(
            "relative aspect-[1080/1920] w-full overflow-hidden rounded-[24px] bg-[#1B160F]",
            screenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
