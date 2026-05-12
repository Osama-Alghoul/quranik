import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  UserCheck,
  ArrowLeft,
  Calendar,
  DollarSign,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { info } from "@/assets/info";
import { programs, getProgramIcon } from "@/assets/programs";

export default async function ProgramsPage() {
  const t = await getTranslations("programs");
  const programsData = t.raw("items") as {
    slug: string;
    title: string;
    description: string;
    audience: string;
    sessions: string;
    duration: string;
    price: string;
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
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {programsData.map((program) => {
              const Icon = getProgramIcon(program.slug);
              const original = programs.find((p) => p.slug === program.slug);
              return (
                <div
                  key={program.slug}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex-1">
                      <Link
                        href={`/programs/${program.slug}`}
                        className="mb-4 flex items-center gap-3"
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="mb-3 text-2xl font-bold text-card-foreground hover:text-primary transition-colors">
                          {program.title}
                        </h2>
                      </Link>
                      <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                        {program.description}
                      </p>

                      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-2">
                          <UserCheck className="h-4 w-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {t("audience")}
                            </p>
                            <p className="text-sm font-medium text-card-foreground">
                              {program.audience}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {t("sessions")}
                            </p>
                            <p className="text-sm font-medium text-card-foreground">
                              {program.sessions}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {t("duration")}
                            </p>
                            <p className="text-sm font-medium text-card-foreground">
                              {program.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {t("price")}
                            </p>
                            <p className="text-sm font-bold text-primary">
                              {program.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <Button asChild size="lg" className="px-8">
                          <a
                            href={info.whatsapp(
                              `السلام عليكم أرغب بالتسجيل في برنامج ${original?.title || program.title}`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("subscribe")}
                            <ArrowLeft className="mr-2 h-4 w-4" />
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          size="lg"
                          asChild
                          className="border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30 hover:text-primary"
                        >
                          <Link href={`/programs/${program.slug}`}>
                            {t("details")}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
