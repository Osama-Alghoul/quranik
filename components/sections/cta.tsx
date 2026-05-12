import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { FreeBookingButton } from "@/components/FreeBookingButton";

export default async function CTASection() {
  const t = await getTranslations("home.cta");

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
          {t("title")}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
          {t("description")}
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <Link href="/contact">
              {t("button")}
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
