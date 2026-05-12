import { getTranslations } from "next-intl/server";

export default async function TestimonialsSection() {
  const t = await getTranslations("home.testimonials");
  const items = t.raw("items") as { name: string; role: string; quote: string }[];

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            {t("badge")}
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {`"${item.quote}"`}
              </p>
              <div>
                <p className="font-bold text-card-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
