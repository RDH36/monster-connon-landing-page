import { cn } from "@/lib/utils";

/**
 * Cadre téléphone repris des captures ASO du Play Store
 * (screenshoot-app → projects/monster-cannon/components/Layout.tsx), châssis
 * sombre et liseré fin pour que ça se lise comme un appareil.
 *
 * Le ratio 1080/1920 est porté par l'écran, pas par le châssis : c'est celui
 * du trailer et des captures, donc le média remplit l'écran au pixel près et
 * le tour reste d'épaisseur égale sur les quatre côtés.
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

      <div className="relative rounded-[30px] border-2 border-[#07050c] bg-[#100b1a] p-[3%] shadow-[0_30px_60px_-15px_rgba(10,5,20,0.85),inset_0_0_0_1px_rgba(255,255,255,0.07)]">
        <div
          className={cn(
            "relative aspect-[1080/1920] w-full overflow-hidden rounded-[21px] bg-[#241C3B]",
            screenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
