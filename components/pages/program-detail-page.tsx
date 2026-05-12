import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { programs, getProgramIcon } from "@/assets/programs";
import { info } from "@/assets/info";
import { FreeBookingButton } from "@/components/FreeBookingButton";

interface Props {
  slug: string;
}

export default async function ProgramDetailPage({ slug }: Props) {
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

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
  const translated = programsData.find((p) => p.slug === slug) || program;
  const detailT = await getTranslations("programs.detail");
  const benefits = detailT.raw("benefits") as string[];
  const commonT = await getTranslations("common");
  const Icon = getProgramIcon(program.slug);

  return (
    <main>
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pattern.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <Link
            href="/programs"
            className="mb-8 inline-flex items-center text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground"
          >
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            {detailT("backToPrograms")}
          </Link>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Icon className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
                {translated.title}
              </h1>
              <p className="mt-4 text-xl text-primary-foreground/80">
                {translated.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {detailT("title")}
              </h2>
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {detailT("joinPrefix")}{" "}
                  <strong className="text-primary">{translated.title}</strong>
                  {detailT("joinDescription")}
                </p>
                <h3 className="mt-8 text-xl font-bold text-foreground">
                  {detailT("benefitsTitle")}
                </h3>
                <ul className="mt-4 space-y-3">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">
                    {translated.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {commonT("monthly")}
                  </div>
                </div>

                <div className="space-y-4 border-y border-border py-6">
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {t("audience")}
                      </div>
                      <div className="text-sm font-medium">
                        {translated.audience}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {t("sessions")}
                      </div>
                      <div className="text-sm font-medium">
                        {translated.sessions}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {t("duration")}
                      </div>
                      <div className="text-sm font-medium">
                        {translated.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    variant="outline"
                    className="w-full border-green-600/20 text-green-700 hover:bg-green-50"
                    size="lg"
                    asChild
                  >
                    <a
                      href={info.whatsapp(
                        `السلام عليكم أرغب بالتسجيل في برنامج ${program.title}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="ml-2 h-5 w-5" />
                      {detailT("contactWhatsapp")}
                    </a>
                  </Button>
                  <FreeBookingButton />
                </div>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {commonT("noHiddenFees")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
