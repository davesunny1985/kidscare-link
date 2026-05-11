import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Heart, Users, Sparkles, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CareNest — Our story and mission" },
      { name: "description", content: "We're on a mission to make finding trusted care for disabled children easier, kinder and more human." },
      { property: "og:title", content: "About CareNest" },
      { property: "og:description", content: "Our mission to make finding trusted care for disabled children easier and kinder." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { i: Heart, t: "Children first", d: "Every decision begins with what's best for the child." },
    { i: Users, t: "Family-led", d: "Families know their child best. We give them the tools to lead." },
    { i: Sparkles, t: "Quality care", d: "We hold every worker to a high standard — every time." },
    { i: Globe, t: "Inclusion always", d: "We believe everyone deserves to belong, contribute and thrive." },
  ];
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Care is personal. So are we."
        subtitle="CareNest was founded by parents and care workers who knew the system could be better — kinder, simpler and more connected."
      />

      <section className="container-page py-20 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold">Our story</h2>
        <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>CareNest started in 2021 when two families struggled to find consistent, quality support for their children. Frustrated by long wait times, agency fees and rotating staff, they imagined something different — a place where families could connect directly with the people who'd care for their kids.</p>
          <p>Today, CareNest supports over 12,000 families across Australia. Every day we work to make the experience of finding care more human — for families and for the incredible workers who choose this profession.</p>
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What we believe</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="bg-card rounded-2xl p-6 text-center shadow-card border border-border/60">
                <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center mx-auto"><v.i className="size-6 text-primary-foreground" /></div>
                <h3 className="mt-4 font-bold text-lg">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="text-3xl font-bold">Join us</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Whether you're a family, a care worker or a service provider — there's a place for you at CareNest.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="lg" asChild><Link to="/signup">Get started</Link></Button>
          <Button variant="outline" size="lg" asChild><Link to="/contact">Contact us</Link></Button>
        </div>
      </section>
    </>
  );
}
