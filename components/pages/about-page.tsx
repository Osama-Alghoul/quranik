import Image from "next/image";
import { Eye, Target, Award, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";

const valueIcons = [Award, Heart, Eye, Target] as const;

export default async function AboutPage() {
  const t = await getTranslations("about");
  const values = t.raw("values.items") as { title: string; description: string }[];

  return (
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
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-card-foreground">
                {t("vision.title")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("vision.description")}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-card-foreground">
                {t("mission.title")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("mission.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
            <Image
              src="/images/about.jpeg"
              alt={t("imageAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              {t("values.badge")}
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              {t("values.title")}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
