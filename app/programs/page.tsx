import type { Metadata } from "next";
import Image from "next/image";
import { Clock, UserCheck, Calendar, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "البرامج",
  description:
    "استعرض برامج قرآنيك المتنوعة: حفظ القرآن، تصحيح التلاوة، التجويد، الحديث والفقه، وبرامج الأطفال.",
};

import { programs } from "@/assets/programs";

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
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
            {"برامجنا التعليمية"}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {"برامج متنوعة ومنظمة تناسب جميع الأعمار والمستويات"}
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <program.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="mb-3 text-2xl font-bold text-card-foreground hover:text-primary transition-colors">
                        {program.title}
                      </h2>
                    </div>
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>

                    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {"الفئة المستهدفة"}
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
                            {"عدد الحصص"}
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
                            {"مدة الحصة"}
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
                            {"السعر"}
                          </p>
                          <p className="text-sm font-bold text-primary">
                            {program.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="flex flex-wrap items-center gap-3">
                      <Button asChild size="lg" className="px-8">
                        <a
                          href={info.whatsapp(
                            `السلام عليكم أرغب بالتسجيل في برنامج ${program.title}`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {"اشترك الآن"}
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
                          {"تفاصيل البرنامج"}
                        </Link>
                      </Button>
                    </div> */}
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
