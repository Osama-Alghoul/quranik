import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FAQPage from "@/components/pages/faq-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default FAQPage;
