import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية',
  description: 'سياسة الخصوصية الخاصة بمنصة قرآنيك لتعليم القرآن الكريم.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background py-20 lg:py-28">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            {'سياسة الخصوصية'}
          </h1>

          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'مقدمة'}</h2>
              <p>
                {'نحن في قرآنيك نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام منصتنا.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'المعلومات التي نجمعها'}</h2>
              <p className="mb-3">{'نقوم بجمع المعلومات التالية:'}</p>
              <ul className="list-inside list-disc space-y-2 pr-4">
                <li>{'الاسم الكامل وبيانات التواصل (البريد الإلكتروني، رقم الهاتف)'}</li>
                <li>{'معلومات الدفع عند الاشتراك في البرامج'}</li>
                <li>{'بيانات التقدم التعليمي والتقارير'}</li>
                <li>{'معلومات تقنية مثل عنوان IP ونوع المتصفح'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'كيف نستخدم المعلومات'}</h2>
              <ul className="list-inside list-disc space-y-2 pr-4">
                <li>{'تقديم الخدمات التعليمية وإدارة الاشتراكات'}</li>
                <li>{'إرسال التقارير والتحديثات المتعلقة بالتقدم'}</li>
                <li>{'تحسين تجربة المستخدم وتطوير المنصة'}</li>
                <li>{'التواصل معك بشأن استفساراتك'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'حماية البيانات'}</h2>
              <p>
                {'نتخذ إجراءات أمنية صارمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير. نستخدم تقنيات تشفير حديثة ونلتزم بأفضل الممارسات الأمنية.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'حقوقك'}</h2>
              <p>
                {'يحق لك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها في أي وقت. يمكنك التواصل معنا عبر البريد الإلكتروني لممارسة هذه الحقوق.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'التواصل'}</h2>
              <p>
                {'لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني:'}{' '}
                <span className="font-medium text-foreground" dir="ltr">info@quranik.com</span>
              </p>
            </section>

            <p className="text-sm text-muted-foreground/70">
              {'آخر تحديث: فبراير 2026'}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
