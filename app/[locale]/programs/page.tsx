import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ProgramsPage from "@/components/pages/programs-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programs" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default ProgramsPage;
