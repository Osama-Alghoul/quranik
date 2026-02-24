import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'الشروط والأحكام',
  description: 'الشروط والأحكام الخاصة باستخدام منصة قرآنيك التعليمية.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background py-20 lg:py-28">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            {'الشروط والأحكام'}
          </h1>

          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'القبول بالشروط'}</h2>
              <p>
                {'باستخدامك لمنصة قرآنيك، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا لم تكن موافقًا على أي من هذه الشروط، يرجى عدم استخدام المنصة.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'الخدمات المقدمة'}</h2>
              <p>
                {'توفر قرآنيك خدمات تعليمية إلكترونية تشمل دروس حفظ القرآن، التجويد، تصحيح التلاوة، والعلوم الشرعية عبر لقاءات مباشرة أونلاين مع معلمين متخصصين.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'الاشتراك والدفع'}</h2>
              <ul className="list-inside list-disc space-y-2 pr-4">
                <li>{'الاشتراك يكون لمرة واحدة لكل دورة'}</li>
                <li>{'الأسعار محددة لكل برنامج ومعلنة بشكل واضح'}</li>
                <li>{'يتم الدفع عبر وسائل الدفع الإلكتروني المتاحة'}</li>
                <li>{'يمكن استرداد المبلغ خلال الأسبوع الأول من الاشتراك'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'التزامات الطالب'}</h2>
              <ul className="list-inside list-disc space-y-2 pr-4">
                <li>{'الالتزام بمواعيد الدروس المتفق عليها'}</li>
                <li>{'احترام المعلمين والتعامل بأخلاق إسلامية'}</li>
                <li>{'تقديم معلومات صحيحة عند التسجيل'}</li>
                <li>{'عدم تسجيل أو مشاركة محتوى الدروس بدون إذن'}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'إلغاء الاشتراك'}</h2>
              <p>
                {'يمكن للطالب طلب إلغاء الاشتراك والاسترداد خلال الأسبوع الأول. بعد ذلك، لا يمكن استرداد المبلغ ولكن يمكن تأجيل الدروس المتبقية لفترة لاحقة.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'حقوق الملكية الفكرية'}</h2>
              <p>
                {'جميع المحتويات والمواد التعليمية المقدمة عبر المنصة هي ملك لقرآنيك ومحمية بموجب قوانين الملكية الفكرية. لا يجوز نسخها أو توزيعها بدون إذن كتابي مسبق.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'تعديل الشروط'}</h2>
              <p>
                {'نحتفظ بحق تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على المنصة.'}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">{'التواصل'}</h2>
              <p>
                {'لأي استفسارات حول الشروط والأحكام، يرجى التواصل معنا عبر البريد الإلكتروني:'}{' '}
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
