import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/assets/programs";
import { FreeBookingButton } from "@/components/FreeBookingButton";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pattern.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
        <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          {"أكاديمية تعليمية متخصصة"}
        </span>
        <h1 className="max-w-4xl text-balance text-3xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          {"تعلم القرآن الكريم بمرشدين متخصصين - أونلاين وبخطوات منظمة"}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {
            "قرآنيك أكاديمية تعليمية إلكترونية متخصصة في تعليم القرآن وعلومه للأطفال والشباب والبالغين، عبر نظام تعليمي منظم وتقارير متابعة بعد كل لقاء."
          }
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <Link href="/contact">
              ابدأ الآن
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
          <FreeBookingButton />
          <Button

            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/80"
            asChild
          >
            <Link href="/programs">استعرض البرامج</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WhyQuranikSection() {
  const features = [
    {
      icon: BookOpen,
      title: "منهج منظم وخطط دراسية واضحة",
      description: "خطط تعليمية مدروسة تناسب كل مستوى وتضمن التقدم المستمر.",
    },
    {
      icon: GraduationCap,
      title: "معلمون معتمدون بخبرة تربوية",
      description: "نخبة من المعلمين الحاصلين على إجازات وشهادات معتمدة.",
    },
    {
      icon: ClipboardCheck,
      title: "تقارير متابعة بعد كل لقاء",
      description: "نظام متابعة دقيق يقيس التقدم ويحدد نقاط التحسين.",
    },
    {
      icon: Calendar,
      title: "مرونة في المواعيد والدراسة أونلاين",
      description: "اختر الوقت المناسب لك وتعلم من أي مكان في العالم.",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {"لماذا قرآنيك؟"}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"تجربة تعليمية متكاملة ومميزة"}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramsPreviewSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {"برامجنا"}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"برامج تعليمية متنوعة تناسب الجميع"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={`/programs/${program.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <program.icon className="h-6 w-6 text-accent" />
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
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/programs">عرض جميع البرامج</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "اختر البرنامج المناسب",
      description: "استعرض برامجنا المتنوعة واختر ما يناسب مستواك وأهدافك.",
    },
    {
      number: "02",
      title: "اشترك وادفع مرة واحدة",
      description: "اشتراك بسيط ودفع لمرة واحدة لكل دورة بدون رسوم مخفية.",
    },
    {
      number: "03",
      title: "تابع دروسك واستلم تقاريرك",
      description: "تعلّم مع معلمك واحصل على تقارير أداء مفصلة بعد كل لقاء.",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {"كيف تعمل المنصة؟"}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"ثلاث خطوات بسيطة للبدء"}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "طالب حفظ",
      quote:
        "تجربة رائعة! المعلمون محترفون والمتابعة بعد كل لقاء ساعدتني على التقدم بشكل ملحوظ.",
    },
    {
      name: "فاطمة عبدالله",
      role: "أم لطالبتين",
      quote:
        "بناتي يستمتعن بالحصص كثيرًا. البرنامج منظم والتقارير تطمئنني على تقدمهن.",
    },
    {
      name: "عمر خالد",
      role: "طالب تجويد",
      quote: "تعلمت أحكام التجويد بشكل عملي ومبسط. أنصح الجميع بهذه المنصة.",
    },
  ];

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {"آراء الطلاب"}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"ماذا يقول طلابنا"}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <p className="font-bold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
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
      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
          {"ابدأ رحلتك في تعلم القرآن اليوم"}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
          {
            "انضم إلى آلاف الطلاب الذين يتعلمون القرآن الكريم مع قرآنيك بأسلوب منظم ومحترف."
          }
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <Link href="/contact">
              سجّل الآن
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="mt-4">
            <FreeBookingButton />
          </div>
        </div>

      </div>
    </section>
  );
}
