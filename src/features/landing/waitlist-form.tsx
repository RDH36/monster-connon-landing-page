"use client";

import { Bell, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  className?: string;
  variant?: "default" | "play";
};

export function WaitlistForm({ className, variant = "default" }: WaitlistFormProps) {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [beta, setBeta] = useState(true);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // TODO: brancher le service de capture d'email (Resend / Mailchimp / route API).
    // Handler factice pour l'instant.
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setEmail("");
    toast.success(t("toastTitle"), {
      description: beta ? t("toastBeta") : t("toastNoBeta"),
    });
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full max-w-md", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          aria-label={t("emailPlaceholder")}
          className="h-13 flex-1 rounded-[18px] border-[3px] border-ink bg-paper px-4 text-base font-extrabold text-ink shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5),0_4px_0_0_var(--ink)] outline-none placeholder:text-ink/40 focus:border-accent"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-game btn-game-hp btn-game-active h-13 shrink-0 disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Bell className="size-5" />
          )}
          {variant === "play" ? t("buttonPlay") : t("button")}
        </button>
      </div>

      <label className="mt-3 flex items-center gap-2 text-sm font-bold text-muted-foreground">
        <input
          type="checkbox"
          checked={beta}
          onChange={(e) => setBeta(e.target.checked)}
          className="size-4 accent-[var(--hp)]"
        />
        {t("beta")}
      </label>

      <p className="mt-2 text-xs font-bold text-dim-purple">
        {t.rich("microcopy", {
          a: (chunks) => (
            <Link
              href="/confidentialite"
              className="text-label-gold underline underline-offset-2"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </form>
  );
}
