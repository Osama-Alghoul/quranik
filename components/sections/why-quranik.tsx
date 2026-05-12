import { BookOpen, GraduationCap, ClipboardCheck, Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";

const iconMap = [BookOpen, GraduationCap, ClipboardCheck, Calendar] as const;

export default async function WhyQuranikSection() {
  const t = await getTranslations("home.whyQuranik");
  const features = t.raw("features") as { title: string; description: string }[];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {t("badge")}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
