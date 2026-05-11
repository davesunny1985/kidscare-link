import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Home, Activity, Brain, GraduationCap, Smile, Bus, Stethoscope, Puzzle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Disability support for children | CareNest" },
      { name: "description", content: "Personal care, therapy support, community access, in-home help and respite for children with disability." },
      { property: "og:title", content: "Services — CareNest" },
      { property: "og:description", content: "Personal care, therapy support, community access and respite for children with disability." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    { i: Home, t: "In-home support", d: "Daily living help in the comfort of your home — meals, routines, personal care and more." },
    { i: Activity, t: "Community access", d: "Trips to the park, swimming, sports, library — building skills and confidence in the community." },
    { i: Brain, t: "Behaviour support", d: "Workers experienced in autism, ADHD, sensory processing and complex behaviours." },
    { i: GraduationCap, t: "After-school care", d: "Pickups, homework help, play and routines that work for your family." },
    { i: Smile, t: "Respite care", d: "Take a break, knowing your child is in safe and loving hands. Hourly, overnight or longer." },
    { i: Bus, t: "Transport & outings", d: "Safe, reliable transport to therapy, school and activities — drivers experienced with assistive equipment." },
    { i: Stethoscope, t: "Complex care", d: "Workers with high-intensity skills: PEG feeding, seizure management, mobility transfers and more." },
    { i: Puzzle, t: "Therapy support", d: "Implement strategies from your OT, speech, physio or psychology team between sessions." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Support for every part of life"
        subtitle="From a few hours a week to round-the-clock care, CareNest has providers experienced in every aspect of supporting children with disability."
      >
        <Button variant="hero" size="xl" asChild><Link to="/signup">Find your service</Link></Button>
      </PageHero>

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.t} className="group bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
              <div className="size-12 rounded-xl bg-gradient-warm grid place-items-center group-hover:scale-110 transition-smooth"><s.i className="size-6 text-accent-foreground" /></div>
              <h3 className="mt-5 font-bold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-gradient-soft p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Not sure what you need?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Our friendly team can help you understand your options and find the right support for your child.</p>
          <Button variant="hero" size="lg" className="mt-6" asChild><Link to="/contact">Talk to us</Link></Button>
        </div>
      </section>
    </>
  );
}
