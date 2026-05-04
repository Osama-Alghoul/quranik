import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased">
        <Toaster position="bottom-center" />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
