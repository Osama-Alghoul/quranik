import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { programs } from "@/assets/programs";
import { getProgramIcon } from "@/assets/programs";

export default async function ProgramsPreviewSection() {
  const t = await getTranslations("home.programsPreview");

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {t("badge")}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = getProgramIcon(program.slug);
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="mb-1 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <span className="text-sm font-bold text-primary">
                      {program.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
