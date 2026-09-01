import { cn } from "@/lib/utils";

/**
 * Cadre téléphone repris des captures ASO du Play Store
 * (screenshoot-app → projects/monster-cannon/components/Layout.tsx), avec un
 * châssis noirci et un vrai bord d'écran pour que ça se lise comme un appareil.
 *
 * Le ratio 1080/1920 est celui des captures et du trailer : le média remplit
 * l'écran en `object-cover` sans rien perdre sur les côtés.
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

      <div className="relative aspect-[1080/1920] rounded-[32px] border-[3px] border-[#07050c] bg-[#100b1a] p-[4.5%] shadow-[0_30px_60px_-15px_rgba(10,5,20,0.85),inset_0_0_0_1px_rgba(255,255,255,0.07)]">
        <div
          className={cn(
            "relative size-full overflow-hidden rounded-[16px] bg-[#241C3B] ring-1 ring-black/60",
            screenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
