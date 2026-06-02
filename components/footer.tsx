import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/programs", label: "البرامج" },
    // { href: "/teachers", label: "المعلمون" },
  ],
  support: [
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "الشروط والأحكام" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-lg"
                />
              </div>
              <span className="text-xl font-bold">قرآنيك</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              أكاديمية تعليمية إلكترونية متخصصة في تعليم القرآن وعلومه للأطفال
              والشباب والبالغين.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              التنقل
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              الدعم
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()} {"قرآنيك"}
          </p>
        </div>
      </div>
    </footer>
  );
}
