import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة',
  description: 'إجابات على الأسئلة الأكثر شيوعًا حول برامج قرآنيك والاشتراك والدروس.',
}

const faqs = [
  {
    question: 'كيف تتم الدروس؟',
    answer:
      'الدروس تتم عبر لقاءات مباشرة أونلاين مع المعلم باستخدام تطبيقات مؤتمرات الفيديو، مع متابعة وتقارير مفصلة بعد كل جلسة.',
  },
  {
    question: 'هل يمكن اختيار المعلم؟',
    answer:
      'نعم، يمكنك استعراض جميع المعلمين المتاحين والاطلاع على ملفاتهم الشخصية واختيار المعلم المناسب قبل الاشتراك.',
  },
  {
    question: 'هل الاشتراك شهري؟',
    answer:
      'الاشتراك يكون مرة واحدة لكل دورة. لا توجد رسوم شهرية مخفية أو التزامات إضافية.',
  },
  {
    question: 'ما هي المنصات المستخدمة للدروس؟',
    answer:
      'نستخدم أحدث منصات التواصل المرئي مثل Zoom وGoogle Meet لضمان جودة عالية في الصوت والصورة.',
  },
  {
    question: 'هل يمكنني تغيير موعد الدرس؟',
    answer:
      'نعم، نوفر مرونة كاملة في تحديد المواعيد. يمكنك تغيير موعد الدرس بالتنسيق مع المعلم مسبقًا.',
  },
  {
    question: 'هل البرامج مناسبة لغير الناطقين بالعربية؟',
    answer:
      'نعم، لدينا معلمون متخصصون في تدريس غير الناطقين بالعربية بأساليب تعليمية مصممة خصيصًا لهم.',
  },
  {
    question: 'كيف أتابع تقدم ابني/ابنتي؟',
    answer:
      'نوفر تقارير مفصلة بعد كل لقاء تُرسل مباشرة للوالدين، تشمل ما تم تعلمه ونقاط القوة والتحسين والتوصيات.',
  },
  {
    question: 'هل يوجد ضمان استرداد؟',
    answer:
      'نعم، نوفر فترة تجريبية. إذا لم تكن راضيًا عن الخدمة خلال الأسبوع الأول، يمكنك استرداد المبلغ كاملًا.',
  },
]

export default function FAQPage() {
  return (
    <>
      <Navbar />
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
              {'الأسئلة الشائعة'}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              {'إجابات على أكثر الأسئلة شيوعًا حول خدماتنا وبرامجنا'}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
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
        </section>
      </main>
      <Footer />
    </>
  )
}
