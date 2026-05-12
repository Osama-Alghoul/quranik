"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Clock, CheckCircle, Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { info } from "@/assets/info";
import { toast } from "sonner";
import { Turnstile } from "@marsidev/react-turnstile";

export function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

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
      turnstileToken,
    };

    if (!turnstileToken) {
      toast.error(t("form.securityError"));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitted(true);
      toast.success(t("form.successTitle"));
    } catch {
      toast.error(t("form.genericError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
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
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {t("hero.description")}
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                {t("info.title")}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {t("info.description")}
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${info.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-fit items-start gap-4 rounded-xl p-2 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t("info.email")}</p>
                    <p className="text-sm text-muted-foreground" dir="ltr">
                      {info.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${info.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-fit items-start gap-4 hover:bg-secondary/50 p-2 rounded-xl group transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t("info.whatsapp")}</p>
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
                    <p className="font-bold text-foreground">{t("info.workingHours")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("info.weekdays")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("info.friday")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    {t("form.successTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("form.successDescription")}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    {t("form.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    {t("form.title")}
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("form.fullName")}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t("form.namePlaceholder")}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("form.email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("form.emailPlaceholder")}
                        dir="ltr"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("form.phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("form.subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t("form.subjectPlaceholder")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("form.messagePlaceholder")}
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex justify-center">
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => setTurnstileToken(token)}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() => setTurnstileToken(null)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading || !turnstileToken}
                  >
                    {loading ? (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="ml-2 h-4 w-4" />
                    )}
                    {loading ? t("form.sending") : t("form.send")}
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
