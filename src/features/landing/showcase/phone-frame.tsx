import { cn } from "@/lib/utils";

/**
 * Cadre téléphone repris des captures ASO du Play Store
 * (screenshoot-app → projects/monster-cannon/components/Layout.tsx) :
 * liseré violet fin, coins modérément arrondis, ni encoche ni Dynamic Island.
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

      <div className="relative aspect-[1080/1920] rounded-[28px] border-2 border-[#3A2D4D] bg-[#2A2140] p-[3%] shadow-[0_30px_60px_-15px_rgba(30,18,60,0.75)]">
        <div
          className={cn(
            "relative size-full overflow-hidden rounded-[22px] bg-[#241C3B]",
            screenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
