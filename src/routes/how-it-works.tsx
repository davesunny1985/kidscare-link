import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { UserPlus, Search, MessageCircle, Calendar, CreditCard, Star } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works | CareNest" },
      { name: "description", content: "Six simple steps to find and book trusted care for your child on CareNest." },
      { property: "og:title", content: "How CareNest works" },
      { property: "og:description", content: "Six simple steps to find and book trusted care for your child." },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const steps = [
    { i: UserPlus, t: "Create your free account", d: "Tell us about your child, your needs and your location. Takes less than 5 minutes." },
    { i: Search, t: "Search local providers", d: "Browse verified worker profiles, filter by experience, availability and rate." },
    { i: MessageCircle, t: "Message and meet", d: "Chat with workers privately. Arrange a free meet-and-greet before you commit." },
    { i: Calendar, t: "Book sessions", d: "Schedule one-offs, recurring weekly support or longer-term care, all in the app." },
    { i: CreditCard, t: "Secure payments", d: "Pay through CareNest. Funds are released after each session — fair for everyone." },
    { i: Star, t: "Review and grow", d: "Leave reviews, build long-term relationships and adjust as your child's needs change." },
  ];
  return (
    <>
      <PageHero eyebrow="How it works" title="Simple, safe, and built around you" subtitle="From signup to your first session in days, not weeks." />
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div key={s.t} className="bg-card border border-border rounded-2xl p-7 shadow-card flex gap-5">
              <div className="shrink-0">
                <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-soft"><s.i className="size-6 text-primary-foreground" /></div>
              </div>
              <div>
                <span className="text-xs font-semibold text-accent">STEP {idx+1}</span>
                <h3 className="font-bold text-xl mt-1">{s.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" asChild><Link to="/signup">Sign up free</Link></Button>
            <Button variant="outline" size="xl" asChild><Link to="/contact">Ask a question</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
