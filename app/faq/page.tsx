import type { Metadata } from "next";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description:
    "إجابات على الأسئلة الأكثر شيوعًا حول برامج قرآنيك والاشتراك والدروس.",
};

const faqCategories = [
  {
    title: "الأسئلة التشغيلية",
    description: "كل ما يهم ولي الأمر والمؤثرين حول المعلمين والخدمة.",
    items: [
      {
        question: 'من هم المعلمون في "قرآنيك"؟',
        answer:
          "نخبة من الحفاظ والمجازين من قطاع غزة، تم اختيارهم بناءً على كفاءتهم في التجويد، وأساليبهم التربوية الحديثة في التعامل مع الأطفال.",
      },
      {
        question: "هل الخدمة مدفوعة؟ ولماذا؟",
        answer:
          "نعم، هي خدمة مدفوعة برسوم اشتراك مدروسة. الهدف هو ضمان استدامة المشروع وتوفير دخل كريم ومستدام لمعلمينا في غزة، بما يحفظ كرامتهم ويدعم صمودهم.",
      },
      {
        question: "ما هي الفئات العمرية المستهدفة؟",
        answer:
          "نستهدف الأطفال والناشئة في دول المهجر، مع وجود برامج مخصصة للبالغين الراغبين في تصحيح التلاوة أو نيل الإجازة.",
      },
    ],
  },
  {
    title: "الأسئلة التقنية",
    description: "معلومات حول كيفية تقديم الدروس والمتطلبات التقنية.",
    items: [
      {
        question: "كيف يتم تقديم الدروس؟",
        answer:
          "عبر منصة تفاعلية (أونلاين) تتيح التواصل المباشر (صوت وصورة) بين المعلم والطالب، مع أدوات لمتابعة الحفظ والتقييم الدوري.",
      },
      {
        question: "هل أحتاج لسرعة إنترنت عالية؟",
        answer:
          "تم تحسين المنصة لتعمل بأقل استهلاك للبيانات وبجودة عالية، لتتجاوز تحديات الاتصال وتضمن استمرارية الحصة دون انقطاع.",
      },
    ],
  },
  {
    title: "الأسئلة القانونية والخصوصية",
    description: "التزاماتنا تجاه حماية بياناتكم وحقوقكم القانونية.",
    items: [
      {
        question: "ما هي سياسة الخصوصية وحماية بيانات أطفالي؟",
        answer:
          "نلتزم بأعلى معايير حماية البيانات العالمية. جميع المعلومات الشخصية مشفرة، ولا يتم تسجيل الحصص إلا بموافقة كتابية من ولي الأمر ولأغراض الجودة فقط.",
      },
      {
        question: "هل يمكنني إلغاء الاشتراك واسترداد الأموال؟",
        answer:
          'نعم، توضح اتفاقية "شروط الخدمة" حقوقك في الإلغاء والاسترداد ضمن مدد زمنية محددة، لضمان العدالة للطرفين (المشترك والمعلم).',
      },
      //   {
      //     question: 'ما هي المرجعية القانونية للمنصة؟',
      //     answer:
      //       '"قرآنيك" مسجلة ككيان رسمي يعمل وفق القوانين المنظمة للتعليم عن بُعد، وتخضع اتفاقية الاستخدام للأطر القانونية التي تحمي حقوق المستهلك والمعلم على حد سواء.',
      //   },
    ],
  },
  {
    title: "الأثر والمصداقية",
    description: "شفافية العمل ووصول الدعم لمستحقيه في غزة.",
    items: [
      {
        question: "كيف أتأكد أن مساهمتي تصل للمعلم في غزة فعلاً؟",
        answer:
          "المنصة تعتمد نظاماً مالياً شفافاً. يتم تحويل المستحقات للمعلمين بشكل دوري، ونحن مؤسسة قائمة على تمكين الكادر البشري في غزة وليس مجرد وسيط.",
      },
      {
        question: "هل توفرون تجربة مجانية؟",
        answer:
          "نعم، نوفر حصة تقييمية أولى مجانية ليتعرف الطالب على المعلم والمنهج قبل الالتزام بأي اشتراك مالي.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
              {"الأسئلة الشائعة"}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              {"إجابات على أكثر الأسئلة شيوعًا حول خدماتنا وبرامجنا"}
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="space-y-16">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-6">
                  <div className="border-r-4 border-primary pr-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${catIndex}-${index}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-right text-base font-bold text-foreground hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
