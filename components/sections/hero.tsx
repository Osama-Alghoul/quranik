import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { FreeBookingButton } from "@/components/FreeBookingButton";

export default async function HeroSection() {
  const t = await getTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-primary">
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
          {t("badge")}
        </span>
        <h1 className="max-w-4xl text-balance text-3xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <Link href="/contact">
              {t("cta")}
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
            <Link href="/programs">{t("browsePrograms")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
