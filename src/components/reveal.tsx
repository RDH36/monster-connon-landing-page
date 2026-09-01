"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode, RefObject } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Décalage en ms, pour échelonner les éléments d'une même grille. */
  delay?: number;
  as?: ElementType;
};

type TagProps = {
  ref?: RefObject<HTMLElement | null>;
  className?: string;
  style?: CSSProperties;
  "data-reveal"?: string;
  children?: ReactNode;
};

/**
 * Apparition au défilement. Le contenu est rendu normalement côté serveur :
 * c'est le script inline du layout qui pose `data-js` sur <html> et permet au
 * CSS de masquer les éléments avant le premier rendu. Sans JS, ou si le
 * visiteur a demandé moins d'animations, rien n'est jamais masqué.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  const Tag = as as ElementType<TagProps>;

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={shown ? "in" : ""}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
