import { getTranslations } from "next-intl/server";
import { info } from "@/assets/info";

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");
  const sections = t.raw("sections") as {
    title: string;
    content?: string;
    items?: { title?: string; content?: string }[] | string[];
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
            const isBlueBox = section.title?.includes("حماية بيانات");

            return (
              <section
                key={i}
                className={
                  isHighlight
                    ? "rounded-2xl bg-primary/5 p-6 border border-primary/10"
                    : isBlueBox
                      ? "rounded-xl border border-blue-200 bg-blue-50 p-5 text-blue-900"
                      : undefined
                }
              >
                <h2 className="mb-3 text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                {section.content && (
                  <p className={isBlueBox ? "mb-3" : ""}>
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="list-inside list-disc space-y-3 pr-4">
                    {section.items.map((item, j) => {
                      if (typeof item === "string") {
                        return <li key={j}>{item}</li>;
                      }
                      return (
                        <li key={j}>
                          {item.title && (
                            <span className="font-bold text-foreground">
                              {item.title}
                            </span>
                          )}
                          {item.content}
                        </li>
                      );
                    })}
                  </ul>
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
                {info.email}
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
