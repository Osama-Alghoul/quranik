import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { cookies } from "next/headers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "قرآنيك | Quranik - أكاديمية تعليم القرآن الكريم",
    template: "%s | قرآنيك",
  },
  icons: {
    icon: "/images/logo.png",
  },
  description:
    "أكاديمية تعليمية إلكترونية متخصصة في تعليم القرآن وعلومه للأطفال والشباب والبالغين، عبر نظام تعليمي منظم وتقارير متابعة بعد كل لقاء.",
  keywords: ["قرآن", "تعليم", "تجويد", "حفظ", "أونلاين", "قرآنيك"],
};

export const viewport: Viewport = {
  themeColor: "#1B4332",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const c = await cookies();
  const locale = c.get("NEXT_LOCALE")?.value || "ar";

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={cairo.variable}>
      <body className="font-sans antialiased">
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
