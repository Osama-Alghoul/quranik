import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/assets/programs";

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "البرنامج غير موجود",
    };
  }

  return {
    title: program.title,
    description: program.description,
  };
}

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
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
            العودة لجميع البرامج
          </Link>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <program.icon className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
                {program.title}
              </h1>
              <p className="mt-4 text-xl text-primary-foreground/80">
                {program.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Main Info */}
            <div className="lg:col-span-1">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                تفاصيل البرنامج
              </h2>
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  انضم إلينا في برنامج{" "}
                  <strong className="text-primary">{program.title}</strong>، حيث
                  نقدم لك تجربة تعليمية متميزة تهدف إلى بناء علاقة قوية ومثمرة
                  مع القرآن الكريم. يتميز هذا البرنامج بخطة مدروسة ومتابعة
                  مستمرة لضمان أفضل النتائج.
                </p>
                <h3 className="mt-8 text-xl font-bold text-foreground">
                  ماذا ستحصل عليه في هذا البرنامج؟
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "دروس تفاعلية مباشرة مع معلمين متخصصين",
                    "خطة تعليمية مخصصة تناسب مستواك وأهدافك",
                    "تقارير متابعة دورية بعد كل لقاء",
                    "بيئة تعليمية محفزة وداعمة",
                    "مرونة في اختيار المواعيد المناسبة لك",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar / Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">
                    {program.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    اشتراك شهري
                  </div>
                </div>

                <div className="space-y-4 border-y border-border py-6">
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        الجمهور المستهدف
                      </div>
                      <div className="text-sm font-medium">
                        {program.audience}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        عدد الحصص
                      </div>
                      <div className="text-sm font-medium">
                        {program.sessions}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">
                        مدة الحصة
                      </div>
                      <div className="text-sm font-medium">
                        {program.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 w-full" size="lg" asChild>
                  <Link href={`/contact?program=${program.slug}`}>
                    اشترك الآن
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  لا توجد رسوم خفية، ادفع فقط ثمن الحصص
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
