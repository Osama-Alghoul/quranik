import type { Metadata } from "next";
import { info } from "@/assets/info";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "نلتزم في مؤسسة قرآنيك بأعلى معايير الشفافية وحماية بيانات أطفالكم، لضمان بيئة تعليمية آمنة وموثوقة.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-background py-20 lg:py-28">
      <article className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
          {"سياسة الخصوصية"}
        </h1>

        <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
          <section className="rounded-2xl bg-primary/5 p-6 border border-primary/10">
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {"مقدمة"}
            </h2>
            <p>
              {
                'في "قرآنيك"، نؤمن بأن الثقة هي حجر الأساس لمؤسستنا. نحن لا ننظر لبياناتكم كأرقام، بل كأمانة نتحمل مسؤوليتها. كـ "مؤسسة خدمة مجتمعية"، تلتزم "قرآنيك" بأعلى معايير الشفافية في جمع واستخدام وحماية بياناتكم، لضمان بيئة تعليمية آمنة وموثوقة لأطفالكم.'
              }
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">
              {"1. ما هي البيانات التي نجمعها؟"}
            </h2>
            <p className="mb-4">
              {
                "نحن نجمع الحد الأدنى من البيانات الضرورية فقط لتقديم خدمتنا التعليمية، وتشمل:"
              }
            </p>
            <ul className="list-inside list-disc space-y-3 pr-4">
              <li>
                <span className="font-bold text-foreground">
                  {"بيانات التسجيل:"}
                </span>
                {
                  " الاسم، البريد الإلكتروني، رقم الهاتف، ومعلومات الطالب (العمر، المستوى الدراسي)."
                }
              </li>
              <li>
                <span className="font-bold text-foreground">
                  {"بيانات التواصل:"}
                </span>
                {" لضمان التنسيق الفعال للحصص التعليمية بين المهجر وغزة."}
              </li>
              <li>
                <span className="font-bold text-foreground">
                  {"بيانات الأداء:"}
                </span>
                {
                  " ملاحظات المعلمين حول مستوى الطالب، لضمان متابعة تطور الحفظ والتجويد."
                }
              </li>
              <li>
                <span className="font-bold text-foreground">
                  {"بيانات المدفوعات:"}
                </span>
                {
                  " (لا تُحفظ على خوادمنا)، بل تتم عبر بوابات دفع آمنة عالمية تضمن سرية بياناتكم المالية."
                }
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {"2. كيف نستخدم بياناتكم؟"}
            </h2>
            <ul className="list-inside list-disc space-y-3 pr-4">
              <li>
                <span className="font-bold text-foreground">
                  {"تقديم الخدمة:"}
                </span>
                {" لتنظيم الجداول الدراسية والتواصل بين الطالب والمعلم."}
              </li>
              <li>
                <span className="font-bold text-foreground">
                  {"جودة التعليم:"}
                </span>
                {" لتحليل الأداء التعليمي وتطوير المناهج بما يخدم الطالب."}
              </li>
              <li>
                <span className="font-bold text-foreground">
                  {"الأثر المجتمعي:"}
                </span>
                {
                  " نستخدم البيانات الإحصائية (غير الشخصية) لنُظهر للمانحين وشركاء الأثر كيف يساهم اشتراككم في تمكين المعلمين في غزة، دون الكشف عن هويات الأفراد."
                }
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-blue-900">
            <h2 className="mb-3 text-xl font-bold">
              {"3. حماية بيانات الأطفال (أولوية قصوى)"}
            </h2>
            <p className="mb-3">
              {"بما أن فئتنا المستهدفة أطفال، فإننا نتبع سياسات حماية مشددة:"}
            </p>
            <ul className="list-inside list-disc space-y-2 pr-4">
              <li>{"لا نجمع أي بيانات إلا بموافقة صريحة من ولي الأمر."}</li>
              <li>
                {
                  "لا يتم التواصل بين المعلم والطالب إلا من خلال المنصة الرسمية أو القنوات المعتمدة التي تخضع لإشراف إداري."
                }
              </li>
              <li>
                {
                  "يمنع منعاً باتاً استغلال بيانات الأطفال لأي أغراض تسويقية خارجية."
                }
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {"4. طرف ثالث (الشفافية)"}
            </h2>
            <p>
              {
                "نحن نستخدم أدوات تقنية (منصات تعليمية، بوابات دفع، برامج تواصل) لتقديم الخدمة. هؤلاء الشركاء يلتزمون معنا بمعايير خصوصية صارمة، ولا يملكون صلاحية الوصول لبياناتكم إلا بالقدر اللازم لإتمام الخدمة فقط."
              }
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {"5. حقكم في البيانات"}
            </h2>
            <p className="mb-3">
              {"بصفتكم شركاءنا في هذه الرسالة، لكم كامل الحق في:"}
            </p>
            <ul className="list-inside list-disc space-y-2 pr-4">
              <li>{"الاطلاع على البيانات الخاصة بكم أو بأطفالكم."}</li>
              <li>{"تصحيح أي معلومات غير دقيقة."}</li>
              <li>
                {
                  "طلب حذف البيانات نهائياً من سجلاتنا في حال الرغبة بإنهاء الاشتراك."
                }
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {"6. التزامنا في ظل الظروف الاستثنائية"}
            </h2>
            <p>
              {
                "نحن نتعهد بحماية بياناتكم في جميع الظروف. حتى في حال حدوث أي طوارئ في غزة، فإن بياناتكم محفوظة على خوادم سحابية محمية، ولا يمكن الوصول إليها إلا من قبل الفريق الإداري المعتمد لضمان استمرارية الخدمة."
              }
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <h2 className="mb-3 text-xl font-bold text-foreground">
              {"التواصل"}
            </h2>
            <p>
              {
                "لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني:"
              }{" "}
              <span className="font-medium text-foreground" dir="ltr">
                {info.email}
              </span>
            </p>
          </section>

          <p className="text-sm text-muted-foreground/70">
            {"آخر تحديث: أبريل 2026"}
          </p>
        </div>
      </article>
    </main>
  );
}
