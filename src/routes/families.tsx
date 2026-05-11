import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Search, Heart, Users, MessageCircle, Calendar, Shield, Star, Check } from "lucide-react";
import img from "@/assets/families.jpg";

export const Route = createFileRoute("/families")({
  head: () => ({
    meta: [
      { title: "For Families — Find trusted care workers | CareNest" },
      { name: "description", content: "Search verified local support workers experienced with children with disability. Browse profiles, message directly and book on your terms." },
      { property: "og:title", content: "For Families — CareNest" },
      { property: "og:description", content: "Find trusted local care workers for your child." },
      { property: "og:image", content: img },
    ],
  }),
  component: FamiliesPage,
});

function FamiliesPage() {
  const benefits = [
    { i: Search, t: "You're in control", d: "Choose your worker, set the schedule, agree on the rate. No middleman, no rotating staff." },
    { i: Heart, t: "Consistency matters", d: "Build a long-term relationship with someone who truly knows your child." },
    { i: Shield, t: "Verified & insured", d: "Every worker is police-checked, WWCC-verified and covered by our insurance." },
    { i: MessageCircle, t: "Free to browse", d: "View profiles, send messages and meet workers before you commit. Pay only when you book." },
    { i: Calendar, t: "Flexible booking", d: "One-off help, regular weekly support or 24/7 care — it's up to you." },
    { i: Users, t: "Specialist skills", d: "Filter by experience: autism, ADHD, complex needs, sensory support and more." },
  ];
  return (
    <>
      <PageHero
        eyebrow="For Families"
        title="The right care, on your terms"
        subtitle="Browse hundreds of local support workers experienced with children with disability. Connect directly, no agency fees, no compromises."
      >
        <Button variant="hero" size="xl" asChild><Link to="/signup">Search workers near me</Link></Button>
        <Button variant="outline" size="xl" asChild><Link to="/how-it-works">How it works</Link></Button>
      </PageHero>

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={img} alt="Support worker with child" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Care that fits your family</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Every child is different. Find someone who shares your values, understands your child's needs and becomes a trusted part of your family.</p>
            <ul className="mt-6 space-y-3">
              {["Browse profiles, photos, videos and reviews","Message workers privately before you commit","Read verified reviews from other families","Set your own rate or browse by budget","Cancel or change bookings anytime"].map((x) => (
                <li key={x} className="flex items-start gap-3"><Check className="size-5 mt-0.5 text-primary shrink-0" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold text-center max-w-2xl mx-auto">Why families choose CareNest</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.t} className="bg-card rounded-2xl p-6 shadow-card border border-border/60">
                <div className="size-11 rounded-xl bg-gradient-warm grid place-items-center"><b.i className="size-5 text-accent-foreground" /></div>
                <h3 className="mt-4 font-bold text-lg">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-14 shadow-card text-center max-w-3xl mx-auto">
          <Star className="size-10 mx-auto text-accent" fill="currentColor" />
          <p className="mt-5 text-xl md:text-2xl font-display font-semibold leading-snug">"Finding Maya was the best thing that's happened to our family this year. She's patient, joyful and our son adores her."</p>
          <p className="mt-4 text-sm text-muted-foreground">— Lauren, parent of an 8-year-old in Melbourne</p>
          <Button variant="hero" size="lg" className="mt-8" asChild><Link to="/signup">Start your search</Link></Button>
        </div>
      </section>
    </>
  );
}
