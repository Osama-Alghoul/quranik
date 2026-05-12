import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { programs } from "@/assets/programs";
import ProgramDetailPage from "@/components/pages/program-detail-page";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  const t = await getTranslations({ locale, namespace: "programs" });
  const items = t.raw("items") as { slug: string; title: string; description: string }[];
  const translated = items.find((p) => p.slug === slug);

  return {
    title: translated?.title || program.title,
    description: translated?.description || program.description,
  };
}

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProgramDetailPage slug={slug} />;
}
