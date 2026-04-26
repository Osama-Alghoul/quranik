import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  GraduationCap,
  Users,
  BookMarked,
  Clock,
  UserCheck,
  ClipboardCheck,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "البرامج",
  description:
    "استعرض برامج قرآنيك المتنوعة: حفظ القرآن، تصحيح التلاوة، التجويد، الحديث والفقه، وبرامج الأطفال.",
};

const programs = [
  {
    icon: BookOpen,
    title: "حفظ القرآن",
    description:
      "برنامج حفظ القرآن مصمم بخطة تدريجية تناسب مستوى الطالب، مع متابعة مستمرة وتقارير بعد كل لقاء. يشمل البرنامج مراجعة دورية وتثبيتًا للحفظ السابق.",
    audience: "الأطفال والشباب والبالغين",
    duration: "6 أشهر - سنتين",
    tracking: "تقرير مفصل بعد كل لقاء",
  },
  {
    icon: Headphones,
    title: "تصحيح التلاوة",
    description:
      "برنامج متخصص في تصحيح النطق وأداء الحروف والكلمات القرآنية، مع معلمين ذوي خبرة في تدريس الناطقين بالعربية وغيرها.",
    audience: "جميع المستويات",
    duration: "3 - 6 أشهر",
    tracking: "تقييم دوري ومتابعة أسبوعية",
  },
  {
    icon: GraduationCap,
    title: "التجويد",
    description:
      "إتقان أحكام التجويد نظريًا وتطبيقيًا من خلال دروس تفاعلية مع معلمين متخصصين، مع تمارين عملية على آيات من القرآن الكريم.",
    audience: "المبتدئون والمتوسطون",
    duration: "3 - 6 أشهر",
    tracking: "اختبارات دورية وتقارير تقدم",
  },
  {
    icon: BookMarked,
    title: "الحديث والفقه",
    description:
      "تعلم أساسيات الحديث النبوي الشريف والفقه الإسلامي بأسلوب ميسر ومنهجي يناسب مختلف المستويات.",
    audience: "الشباب والبالغين",
    duration: "3 - 12 شهر",
    tracking: "متابعة شهرية مع تقارير",
  },
  {
    icon: Users,
    title: "برامج الأطفال",
    description:
      "برامج تعليمية ممتعة وتفاعلية مصممة خصيصًا للأطفال، تجمع بين التعلم واللعب لبناء علاقة حب مع القرآن الكريم منذ الصغر.",
    audience: "الأطفال من 5 إلى 12 سنة",
    duration: "مستمر طوال العام",
    tracking: "تقارير للوالدين بعد كل لقاء",
  },
];

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
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="mb-3 text-2xl font-bold text-card-foreground">
                        {program.title}
                      </h2>
                      <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                        {program.description}
                      </p>

                      <div className="mb-6 grid gap-4 sm:grid-cols-3">
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
                          <Clock className="h-4 w-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {"المدة المتوقعة"}
                            </p>
                            <p className="text-sm font-medium text-card-foreground">
                              {program.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClipboardCheck className="h-4 w-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {"آلية المتابعة"}
                            </p>
                            <p className="text-sm font-medium text-card-foreground">
                              {program.tracking}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button asChild>
                        <Link href="/contact">
                          {"اشترك الآن"}
                          <ArrowLeft className="mr-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
