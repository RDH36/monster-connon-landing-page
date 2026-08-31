import { cn } from "@/lib/utils";

/** Châssis de téléphone cartoon : encadre le trailer et les captures verticales. */
export function PhoneFrame({
  children,
  className,
  glow = true,
  /** Ratio de l'écran : le trailer et les captures sont en 9/16. */
  aspect = "aspect-[9/16]",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  aspect?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {glow && (
        <div className="pointer-events-none absolute -inset-6 rounded-[60px] bg-primary/25 blur-3xl" />
      )}

      <div
        className={cn(
          "relative rounded-[44px] border-[3px] border-[#0d0618] bg-gradient-to-b from-[#241338] to-[#0d0618] p-[9px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_0_0_2px_rgba(255,214,74,0.12)]",
          aspect,
        )}
      >
        {/* Boutons latéraux */}
        <span className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-l bg-[#0d0618]" />
        <span className="absolute -right-[3px] top-20 h-7 w-[3px] rounded-r bg-[#0d0618]" />
        <span className="absolute -right-[3px] top-32 h-12 w-[3px] rounded-r bg-[#0d0618]" />

        <div className="relative h-full overflow-hidden rounded-[36px] bg-[#0d0618]">
          {children}
          {/* Encoche caméra */}
          <span className="absolute left-1/2 top-2 z-10 size-2.5 -translate-x-1/2 rounded-full bg-black/80 ring-2 ring-black/40" />
          {/* Barre de navigation gestuelle */}
          <span className="absolute bottom-2 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
