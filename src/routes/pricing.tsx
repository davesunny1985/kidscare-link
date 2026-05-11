import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Simple, transparent | CareNest" },
      { name: "description", content: "Free to join. No subscription. A small platform fee on bookings keeps CareNest running." },
      { property: "og:title", content: "Pricing — CareNest" },
      { property: "og:description", content: "Free to join. Transparent platform fee on bookings." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const tiers = [
    { name: "Families", price: "Free", note: "to join", features: ["Browse unlimited workers", "Free messaging", "Free meet & greets", "Pay only when you book", "10% booking fee included"], cta: "Find a worker", link: "/families" },
    { name: "Care workers", price: "Free", note: "to join", featured: true, features: ["Free profile and listing", "Set your own rate", "Keep up to 90% earnings", "Free training and support", "Weekly secure payouts"], cta: "Apply now", link: "/workers" },
    { name: "Providers", price: "Custom", note: "for organisations", features: ["Multiple worker profiles", "Centralised dashboard", "Dedicated account manager", "Bulk verification", "API & invoicing"], cta: "Talk to sales", link: "/contact" },
  ];
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple, transparent pricing" subtitle="No subscriptions, no surprises. Pay only when care happens." />
      <section className="container-page py-20 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`relative rounded-3xl p-8 shadow-card border ${t.featured ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant" : "bg-card border-border"}`}>
            {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Most popular</span>}
            <h3 className="text-xl font-bold">{t.name}</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-bold font-display">{t.price}</span>
              <span className={t.featured ? "opacity-80" : "text-muted-foreground"}>{t.note}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 items-start"><Check className="size-5 shrink-0 mt-0.5" /><span>{f}</span></li>
              ))}
            </ul>
            <Button variant={t.featured ? "warm" : "hero"} size="lg" className="w-full mt-8" asChild><Link to={t.link}>{t.cta}</Link></Button>
          </div>
        ))}
      </section>
    </>
  );
}
