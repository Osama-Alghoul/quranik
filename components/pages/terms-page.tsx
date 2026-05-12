import { getTranslations } from "next-intl/server";

export default async function TermsPage() {
  const t = await getTranslations("terms");
  const sections = t.raw("sections") as {
    title: string;
    content?: string;
    items?: string[];
    specialBox?: { title: string; description: string; note?: string };
  }[];

  return (
    <main className="bg-background py-20 lg:py-28">
      <article className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
          {t("title")}
        </h1>

        <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
          {sections.map((section, i) => {
            const isHighlight = i === 0;

            return (
              <section
                key={i}
                className={
                  isHighlight
                    ? "rounded-2xl bg-primary/5 p-6 border border-primary/10"
                    : undefined
                }
              >
                <h2 className="mb-3 text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                {section.content && <p className="mb-4">{section.content}</p>}
                {section.items && (
                  <ul className="list-inside list-disc space-y-3 pr-4">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.specialBox && (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
                    <h3 className="mb-2 font-bold">
                      {section.specialBox.title}
                    </h3>
                    <p>{section.specialBox.description}</p>
                    {section.specialBox.note && (
                      <p className="mt-3 text-sm italic">
                        {section.specialBox.note}
                      </p>
                    )}
                  </div>
                )}
              </section>
            );
          })}

          <section className="pt-8 border-t border-border">
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {t("contact.title")}
            </h2>
            <p>
              {t("contact.content")}{" "}
              <span className="font-medium text-foreground" dir="ltr">
                info@quranik.org
              </span>
            </p>
          </section>

          <p className="text-sm text-muted-foreground/70">
            {t("lastUpdated")}
          </p>
        </div>
      </article>
    </main>
  );
}
