import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function FAQPage() {
  const t = await getTranslations("faq");
  const categories = t.raw("categories") as {
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  }[];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-pattern.jpg"
              alt=""
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              {t("hero.description")}
            </p>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="space-y-16">
              {categories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-6">
                  <div className="border-r-4 border-primary pr-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${catIndex}-${index}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-right text-base font-bold text-foreground hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
