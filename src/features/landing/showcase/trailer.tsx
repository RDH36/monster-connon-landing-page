"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import { TRAILER_POSTER, TRAILER_SRC } from "@/features/landing/assets";

import { PhoneFrame } from "./phone-frame";

/**
 * Trailer vertical du jeu : autoplay muet en boucle (seule façon d'obtenir
 * la lecture automatique sur mobile), le son est activable à la demande.
 */
export function Trailer() {
  const t = useTranslations("trailer");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) void video.play();
    setMuted(next);
  }

  return (
    <div className="mx-auto flex w-full max-w-[300px] flex-col items-center gap-3 lg:-translate-y-6">
      <PhoneFrame>
        {/* L'écran d'iPhone est plus étroit que le 9/16 du jeu : plutôt que
            de rogner le HUD, on comble avec l'affiche floutée. */}
        <div
          aria-hidden
          className="absolute inset-0 scale-125 bg-cover bg-center blur-xl brightness-[0.55]"
          style={{ backgroundImage: `url(${TRAILER_POSTER})` }}
        />

        <video
          ref={videoRef}
          src={TRAILER_SRC}
          poster={TRAILER_POSTER}
          aria-label={t("label")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="relative size-full object-contain"
        />

        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? t("soundOn") : t("soundOff")}
          className="absolute bottom-6 right-3 z-10 flex size-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink shadow-[0_3px_0_0_var(--ink)] transition-transform active:translate-y-[2px] active:shadow-none"
        >
          {muted ? (
            <VolumeX className="size-5" />
          ) : (
            <Volume2 className="size-5" />
          )}
        </button>
      </PhoneFrame>

      <p className="text-center text-xs font-bold text-paper/60">
        {t("caption")}
      </p>
    </div>
  );
}
