import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck, Heart, Users, Sparkles, Star, MessageCircle, Calendar, ArrowRight, Check } from "lucide-react";
import heroImg from "@/assets/hero-care.jpg";
import familiesImg from "@/assets/families.jpg";
import workersImg from "@/assets/workers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareNest — Trusted local care for children with disability" },
      { name: "description", content: "Connect directly with trusted local support workers and service providers for children with disability. Verified, flexible and affordable." },
      { property: "og:title", content: "CareNest — Trusted local care for children with disability" },
      { property: "og:description", content: "Connect directly with trusted local support workers and service providers for children with disability." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-soft">
              <Sparkles className="size-3.5 text-accent" /> Trusted by 12,000+ families
            </span>
            <h1 className="text-fluid-5xl font-bold tracking-tight">
              Find trusted care for your <span className="text-primary">amazing child</span>.
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-xl leading-relaxed">
              CareNest connects families with verified local support workers, therapists and service providers experienced in caring for children with disability.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/families">Find a care worker <ArrowRight className="size-4" /></Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/workers">Become a provider</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-primary" /> Police checked</div>
              <div className="flex items-center gap-1.5"><Star className="size-4 text-accent" fill="currentColor" /> 4.9 average rating</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img src={heroImg} alt="Care worker reading with a child in a wheelchair" width={1536} height={1024} className="relative rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card hidden md:flex items-center gap-3 max-w-xs">
              <div className="size-10 rounded-full bg-gradient-warm grid place-items-center"><Heart className="size-5 text-accent-foreground" fill="currentColor" /></div>
              <div>
                <p className="font-semibold text-sm">98% of families</p>
                <p className="text-xs text-muted-foreground">find a match within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card/50">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "12,000+", l: "Families supported" },
            { v: "8,500+", l: "Verified care workers" },
            { v: "200+", l: "Local communities" },
            { v: "4.9★", l: "Average rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-fluid-2xl font-bold text-primary font-display">{s.v}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two paths */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-fluid-3xl font-bold">Care that works for everyone</h2>
          <p className="mt-3 text-muted-foreground">Whether you're seeking support or providing it, CareNest brings you together.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/families" className="group rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
            <img src={familiesImg} alt="Family receiving support" loading="lazy" width={1280} height={896} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-smooth duration-500" />
            <div className="p-7">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">For Families</span>
              <h3 className="text-2xl font-bold mt-2">Find your perfect match</h3>
              <p className="text-muted-foreground mt-2">Browse verified profiles, read reviews and choose the support worker who fits your child's unique needs.</p>
              <span className="inline-flex items-center gap-1 mt-5 font-medium text-primary">Learn more <ArrowRight className="size-4 group-hover:translate-x-1 transition-smooth" /></span>
            </div>
          </Link>
          <Link to="/workers" className="group rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
            <img src={workersImg} alt="Support worker with a child" loading="lazy" width={1280} height={896} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-smooth duration-500" />
            <div className="p-7">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">For Care Workers</span>
              <h3 className="text-2xl font-bold mt-2">Build a meaningful career</h3>
              <p className="text-muted-foreground mt-2">Set your hours, choose your clients, and earn more by working directly with families who need you.</p>
              <span className="inline-flex items-center gap-1 mt-5 font-medium text-primary">Join CareNest <ArrowRight className="size-4 group-hover:translate-x-1 transition-smooth" /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-soft py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-fluid-3xl font-bold">How CareNest works</h2>
            <p className="mt-3 text-muted-foreground">Three simple steps to confident, consistent care.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Search, t: "Search & shortlist", d: "Tell us what you need. Browse profiles of local workers with the right skills, experience and personality." },
              { i: MessageCircle, t: "Message & meet", d: "Chat with workers, ask questions, and meet for free before you decide. No commitment, no pressure." },
              { i: Calendar, t: "Book & manage", d: "Book sessions, track hours, and pay securely — all in one place. Workers get paid, you get peace of mind." },
            ].map((s, idx) => (
              <div key={s.t} className="bg-card rounded-2xl p-7 shadow-card relative">
                <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-soft">
                  <s.i className="size-6 text-primary-foreground" />
                </div>
                <span className="absolute top-6 right-6 text-5xl font-bold font-display text-primary/10">0{idx+1}</span>
                <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-fluid-3xl font-bold">Loved by families and workers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "We found the most amazing support worker for our son. She truly understands his needs and he absolutely lights up when she arrives.", n: "Sarah M.", r: "Parent, Brisbane" },
            { q: "CareNest has given me the freedom to choose families I love working with. The platform is simple and I get paid on time, every time.", n: "Jess T.", r: "Support Worker" },
            { q: "After years of agency rotations, having one consistent person has been life-changing for our daughter. Thank you CareNest.", n: "David & Anh", r: "Parents, Sydney" },
          ].map((t) => (
            <figure key={t.n} className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex gap-0.5 text-accent mb-3">
                {Array.from({length:5}).map((_,i)=><Star key={i} className="size-4" fill="currentColor" />)}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-sm">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Safety section */}
      <section className="container-page py-20">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 text-primary-foreground relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-80 rounded-full bg-primary-glow opacity-30 blur-3xl" />
          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-xs font-medium">
                <ShieldCheck className="size-3.5" /> Safety first
              </span>
              <h2 className="text-fluid-3xl font-bold mt-4">Your child's safety is our priority</h2>
              <p className="mt-4 opacity-90 leading-relaxed">Every worker on CareNest is identity-verified, police-checked and reference-screened. We provide insurance, secure payments and 24/7 support.</p>
              <Button variant="warm" size="lg" className="mt-6" asChild>
                <Link to="/safety">Learn about safety <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
            <ul className="grid gap-3">
              {["National Police Check on every worker", "Working with Children Check verified", "$20M public liability insurance", "Secure in-app messaging & payments", "24/7 customer support team"].map((x) => (
                <li key={x} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <Check className="size-5 mt-0.5 shrink-0" /><span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <Users className="size-12 mx-auto text-primary" />
          <h2 className="text-fluid-3xl font-bold mt-4">Ready to find the right care?</h2>
          <p className="mt-3 text-muted-foreground">Join thousands of families who have found their perfect match on CareNest.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Button variant="hero" size="xl" asChild><Link to="/signup">Get started for free</Link></Button>
            <Button variant="outline" size="xl" asChild><Link to="/contact">Talk to our team</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
