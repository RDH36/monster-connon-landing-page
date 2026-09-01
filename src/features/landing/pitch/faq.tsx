import { useTranslations } from "next-intl";

import { Reveal } from "@/components/reveal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { q: string; a: string };

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as QA[];

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="mt-10">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 5) * 50}>
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="text-left text-[17px] font-black text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
