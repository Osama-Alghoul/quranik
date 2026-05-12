import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tnav = await getTranslations("nav");

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground">
                  ق
                </span>
              </div>
              <span className="text-xl font-bold">{t("brand")}</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              {tnav("home")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: tnav("about") },
                { href: "/programs", label: tnav("programs") },
              ].map((link) => (
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

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              {t("support")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/faq", label: tnav("faq") },
                { href: "/contact", label: tnav("contact") },
                { href: "/privacy", label: t("privacy") },
                { href: "/terms", label: t("terms") },
              ].map((link) => (
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

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            {t("copyright")} &copy; {new Date().getFullYear()} {t("brand")}
          </p>
        </div>
      </div>
    </footer>
  );
}
