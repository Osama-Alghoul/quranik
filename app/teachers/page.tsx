import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "المعلمون",
  description:
    "تعرف على فريق معلمي قرآنيك المتخصصين في تعليم القرآن الكريم وعلومه.",
};

const teachers = [
  {
    name: "الشيخ أحمد عبدالرحمن",
    specialty: "حفظ القرآن والتجويد",
    experience: "10 سنوات",
    bio: "معلم قرآن حاصل على إجازة بالسند المتصل في القراءات العشر، متخصص في تدريس الحفظ والتجويد للناطقين بالعربية.",
    certifications: ["إجازة في القراءات العشر", "شهادة تربوية معتمدة"],
  },
  {
    name: "الأستاذ محمد الحسن",
    specialty: "تصحيح التلاوة",
    experience: "8 سنوات",
    bio: "معلم قرآن بخبرة 8 سنوات في تدريس التجويد وتصحيح التلاوة للناطقين بالعربية وغير العربية.",
    certifications: ["إجازة في رواية حفص عن عاصم", "دبلوم تعليم اللغة العربية"],
  },
  {
    name: "الأستاذة نورة السالم",
    specialty: "برامج الأطفال",
    experience: "6 سنوات",
    bio: "متخصصة في تعليم القرآن للأطفال بأساليب تفاعلية وممتعة، مع خبرة واسعة في التربية الإسلامية.",
    certifications: ["بكالوريوس دراسات إسلامية", "شهادة في علم نفس الطفل"],
  },
  {
    name: "الشيخ يوسف العمري",
    specialty: "الحديث والفقه",
    experience: "12 سنة",
    bio: "متخصص في تدريس الحديث النبوي والفقه الإسلامي بمنهجية علمية واضحة تناسب المبتدئين والمتقدمين.",
    certifications: ["ماجستير في الحديث الشريف", "إجازة في الكتب الستة"],
  },
  {
    name: "الأستاذة مريم الزهراء",
    specialty: "التجويد وتحسين الأداء",
    experience: "7 سنوات",
    bio: "معلمة تجويد متخصصة في تحسين الأداء القرآني، مع خبرة في تدريس الطالبات من مختلف الأعمار.",
    certifications: ["إجازة في التجويد", "دبلوم في المناهج التعليمية"],
  },
  {
    name: "الشيخ عبدالله الكريم",
    specialty: "حفظ القرآن للمتقدمين",
    experience: "15 سنة",
    bio: "من أبرز المعلمين في مجال الحفظ والمراجعة، متخصص في إعداد الطلاب المتقدمين للإجازة القرآنية.",
    certifications: ["إجازة عالية في القراءات", "دكتوراه في القرآن وعلومه"],
  },
];

export default function TeachersPage() {
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
            {"معلمونا"}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {"نخبة من المعلمين المتخصصين الحاصلين على إجازات وشهادات معتمدة"}
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <div
                key={teacher.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
              >
                {/* Photo Placeholder */}
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
                      <span>{"أونلاين"}</span>
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
