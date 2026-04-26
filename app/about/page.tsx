import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target, Award, Heart } from "lucide-react";
export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرف على رؤية قرآنيك ورسالتها وقيمها في تعليم القرآن الكريم بأسلوب عصري وأصيل.",
};

const values = [
  {
    icon: Award,
    title: "الإتقان",
    description: "نسعى لتقديم أعلى مستوى من الجودة في التعليم والمتابعة.",
  },
  {
    icon: Heart,
    title: "الأمانة",
    description: "نحمل أمانة تعليم كتاب الله بإخلاص ومسؤولية.",
  },
  {
    icon: Eye,
    title: "الوضوح",
    description: "نؤمن بالشفافية في المناهج والأسعار والتقارير.",
  },
  {
    icon: Target,
    title: "الاستمرارية",
    description: "نبني عادات تعليمية مستدامة تدوم مع الطالب.",
  },
];

export default function AboutPage() {
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
            {"من نحن"}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {"تعرف على قصة قرآنيك ورؤيتنا لمستقبل تعليم القرآن الكريم"}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Vision */}
            <div className="rounded-xl border border-border bg-card p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-card-foreground">
                {"رؤيتنا"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {
                  "أن نكون منصة رائدة في تعليم القرآن الكريم وعلومه بأسلوب عصري يجمع بين الأصالة والتقنية، ونصل بالعلم الشرعي إلى كل بيت في العالم."
                }
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-xl border border-border bg-card p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-card-foreground">
                {"رسالتنا"}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {
                  "توفير تجربة تعليمية منظمة، واضحة، وآمنة تساعد الطالب على التقدم بثقة وثبات في رحلته مع كتاب الله، من خلال معلمين متخصصين ونظام متابعة دقيق."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
            <Image
              src="/images/about.jpeg"
              alt="بيئة دراسة قرآنية"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              {"قيمنا"}
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              {"القيم التي تحركنا"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
