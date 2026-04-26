"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { info } from "@/assets/info";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitted(true);
      toast.success("تم إرسال رسالتك بنجاح");
    } catch (error: any) {
      toast.error(error.message || "حدث خطأ ما، يرجى المحاولة لاحقاً");
    } finally {
      setLoading(false);
    }
  }

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
            {"تواصل معنا"}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {"نسعد بتواصلك معنا والإجابة على جميع استفساراتك"}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {"معلومات التواصل"}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {
                  "يمكنك التواصل معنا عبر أي من الطرق التالية وسنقوم بالرد عليك في أقرب وقت ممكن."
                }
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${info.email}`}
                  target="_blank"
                  className="flex w-fit items-start gap-4 rounded-xl p-2 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {"البريد الإلكتروني"}
                    </p>
                    <p className="text-sm text-muted-foreground" dir="ltr">
                      {info.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${info.phone}`}
                  target="_blank"
                  className="flex w-fit items-start gap-4 hover:bg-secondary/50 p-2 rounded-xl group transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{"واتساب"}</p>
                    <p className="text-sm text-muted-foreground" dir="ltr">
                      {info.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{"ساعات العمل"}</p>
                    <p className="text-sm text-muted-foreground">
                      {"السبت - الخميس: 9 صباحًا - 10 مساءً"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {"الجمعة: 4 مساءً - 10 مساءً"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    {"تم إرسال رسالتك بنجاح"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {"سنقوم بالرد عليك في أقرب وقت ممكن. شكرًا لتواصلك معنا."}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    {"إرسال رسالة أخرى"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    {"أرسل لنا رسالة"}
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{"الاسم الكامل"}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="أدخل اسمك"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{"البريد الإلكتروني"}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        dir="ltr"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{"رقم الهاتف (اختياري)"}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+966 50 000 0000"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{"الموضوع"}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="موضوع الرسالة"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{"الرسالة"}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={true}
                  >
                    {/* {loading ? (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="ml-2 h-4 w-4" />
                    )}
                    {loading ? "جاري الإرسال..." : "إرسال الرسالة"} */}
                    جاري العمل قريباً
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
