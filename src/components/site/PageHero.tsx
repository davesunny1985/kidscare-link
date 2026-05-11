import { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="bg-gradient-hero">
      <div className="container-page py-16 md:py-24 text-center max-w-3xl mx-auto">
        {eyebrow && <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-4">{eyebrow}</span>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
