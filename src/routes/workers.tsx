import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Briefcase, DollarSign, Clock, Heart, GraduationCap, Sparkles, Check } from "lucide-react";
import img from "@/assets/workers.jpg";

export const Route = createFileRoute("/workers")({
  head: () => ({
    meta: [
      { title: "For Care Workers — Build your career | CareNest" },
      { name: "description", content: "Set your own rate, choose your hours and work with families who value you. Join Australia's leading marketplace for disability support workers." },
      { property: "og:title", content: "For Care Workers — CareNest" },
      { property: "og:description", content: "Build a meaningful, flexible career caring for children with disability." },
      { property: "og:image", content: img },
    ],
  }),
  component: WorkersPage,
});

function WorkersPage() {
  const perks = [
    { i: DollarSign, t: "Earn more", d: "Keep up to 90% of what you charge. Set your own rate and get paid weekly." },
    { i: Clock, t: "Flexible hours", d: "Work when, where and how often you want — fit care around your life." },
    { i: Heart, t: "Meaningful work", d: "Build long-term relationships with families who value the care you provide." },
    { i: GraduationCap, t: "Free training", d: "Access ongoing professional development modules at no cost." },
    { i: Sparkles, t: "Tools to grow", d: "Showcase your profile, collect reviews and grow your client base." },
    { i: Briefcase, t: "Insured & supported", d: "Public liability cover and 24/7 support whenever you need help." },
  ];
  return (
    <>
      <PageHero
        eyebrow="For Care Workers"
        title="A better way to work in care"
        subtitle="Choose your clients, set your rate and do what you love — without the agency taking a cut."
      >
        <Button variant="hero" size="xl" asChild><Link to="/signup">Apply to join</Link></Button>
        <Button variant="outline" size="xl" asChild><Link to="/how-it-works">How it works</Link></Button>
      </PageHero>

      <section className="container-page py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-fluid-3xl font-bold">Care work, reimagined</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">CareNest gives you the freedom of being your own boss, with the tools, training and protection of a trusted platform behind you.</p>
          <ul className="mt-6 space-y-3">
            {["Free to join — no monthly fees","You keep more of what you earn","Choose families that match your skills","Get paid securely and on time","Access free training and resources","24/7 support team and community"].map((x) => (
              <li key={x} className="flex items-start gap-3"><Check className="size-5 mt-0.5 text-primary shrink-0" /><span>{x}</span></li>
            ))}
          </ul>
        </div>
        <img src={img} alt="Care worker with child" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" />
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="container-page">
          <h2 className="text-fluid-3xl font-bold text-center">Everything you need to thrive</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {perks.map((p) => (
              <div key={p.t} className="bg-card rounded-2xl p-6 shadow-card border border-border/60">
                <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center"><p.i className="size-5 text-primary-foreground" /></div>
                <h3 className="mt-4 font-bold text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-14 text-center max-w-3xl mx-auto shadow-elegant">
          <h2 className="text-fluid-3xl font-bold">Ready to start?</h2>
          <p className="mt-4 opacity-90">Apply in under 10 minutes. Our team will guide you through verification and you'll be ready to connect with families.</p>
          <Button variant="warm" size="xl" className="mt-7" asChild><Link to="/signup">Apply to become a CareNest worker</Link></Button>
        </div>
      </section>
    </>
  );
}
