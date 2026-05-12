import {
  Sprout,
  Sun,
  Scroll,
  type LucideIcon,
} from "lucide-react";

export const programs = [
  {
    slug: "gheras-gaza",
    title: "غراس غزة",
    description: "ابنك يبني جيلاً قرآنياً بمداد صمود غزة",
    audience: "أطفال 4 - 14 سنة",
    sessions: "4 حصص / الشهر",
    duration: "30 دقيقة لكل حصة",
    price: "59$",
  },
  {
    slug: "noor-gaza",
    title: "نور غزة",
    description: "تلاوة متقنة تضيء قلبك وتسند معلماً صامداً",
    audience: "بالغون",
    sessions: "8 حصص / الشهر",
    duration: "30 دقيقة لكل حصة",
    price: "99$",
  },
  {
    slug: "sanad-gaza",
    title: "سند غزة",
    description: "نيل شرف الاجازة السندية بكونك سنداً لأهلها",
    audience: "طالبو الاجازة",
    sessions: "12 حصص / الشهر",
    duration: "60 دقيقة لكل حصة",
    price: "149$",
  },
];

const programIconMap: Record<string, LucideIcon> = {
  "gheras-gaza": Sprout,
  "noor-gaza": Sun,
  "sanad-gaza": Scroll,
};

export function getProgramIcon(slug: string): LucideIcon {
  return programIconMap[slug] || Sprout;
}
