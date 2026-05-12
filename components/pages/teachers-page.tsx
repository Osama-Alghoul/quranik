import Image from "next/image";
import { Award, BookOpen, Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function TeachersPage() {
  const t = await getTranslations("teachers");
  const common = await getTranslations("common");
  const items = t.raw("items") as {
    name: string;
    specialty: string;
    experience: string;
    bio: string;
    certifications: string[];
  }[];

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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((teacher) => (
              <div
                key={teacher.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-secondary">
                  <Image
                    src="/images/teacher-placeholder.jpg"
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {teacher.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-accent">
                    {teacher.specialty}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {teacher.bio}
                  </p>

                  <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4 text-accent" />
                      <span>{teacher.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="h-4 w-4 text-accent" />
                      <span>{common("online")}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {teacher.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="flex items-center gap-1 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        <Award className="h-3 w-3" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
