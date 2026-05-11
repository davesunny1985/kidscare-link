import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, FileCheck, Lock, LifeBuoy, BadgeCheck, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Trust | CareNest" },
      { name: "description", content: "Police checks, WWCC verification, secure payments and 24/7 support — how CareNest keeps your family safe." },
      { property: "og:title", content: "Safety & Trust — CareNest" },
      { property: "og:description", content: "Police checks, WWCC verification and 24/7 support keeping your family safe." },
    ],
  }),
  component: SafetyPage,
});

function SafetyPage() {
  const items = [
    { i: BadgeCheck, t: "Identity verified", d: "Every worker confirms their identity with government ID before joining." },
    { i: FileCheck, t: "Police & WWCC checks", d: "We verify a current National Police Check and Working with Children Check." },
    { i: ShieldCheck, t: "$20M insurance", d: "Public liability cover protects families and workers on every booking." },
    { i: Lock, t: "Secure payments", d: "Funds are held safely and only released after each session is delivered." },
    { i: MessageCircle, t: "In-app messaging", d: "Keep all your conversations in one secure, monitored place." },
    { i: LifeBuoy, t: "24/7 support", d: "Our team is always one tap away if anything doesn't feel right." },
  ];
  return (
    <>
      <PageHero eyebrow="Safety & Trust" title="Care you can count on" subtitle="Every layer of CareNest is designed to keep your family safe and your peace of mind intact." />
      <section className="container-page py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it) => (
          <div key={it.t} className="bg-card border border-border rounded-2xl p-6 shadow-card">
            <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center"><it.i className="size-6 text-primary-foreground" /></div>
            <h3 className="mt-5 font-bold text-lg">{it.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </section>
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Worried about something?</h2>
          <p className="mt-3 opacity-90">Our trust & safety team is available 24/7. We'll listen, investigate and act.</p>
          <Button variant="warm" size="lg" className="mt-6" asChild><Link to="/contact">Contact safety team</Link></Button>
        </div>
      </section>
    </>
  );
}
