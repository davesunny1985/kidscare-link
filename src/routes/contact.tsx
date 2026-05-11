import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CareNest — We're here to help" },
      { name: "description", content: "Get in touch with the CareNest team. Email, phone or send a message — we typically reply within 24 hours." },
      { property: "og:title", content: "Contact CareNest" },
      { property: "og:description", content: "Get in touch with the CareNest team — we're here to help." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="We're here to help" subtitle="Have a question, need advice, or want to chat about your situation? Our team is ready." />
      <section className="container-page py-20 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1 space-y-6">
          {[
            { i: Mail, t: "Email", v: "hello@carenest.example" },
            { i: Phone, t: "Phone", v: "1300 CARE NEST" },
            { i: MapPin, t: "Office", v: "Sydney, Australia" },
            { i: Clock, t: "Hours", v: "Mon–Fri, 8am–8pm AEST" },
          ].map((c) => (
            <div key={c.t} className="flex gap-3">
              <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center shrink-0"><c.i className="size-5 text-primary-foreground" /></div>
              <div>
                <p className="font-semibold text-sm">{c.t}</p>
                <p className="text-muted-foreground text-sm">{c.v}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          className="md:col-span-2 bg-card border border-border rounded-2xl p-7 shadow-card space-y-5"
          onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Thanks! We'll be in touch soon."); }}
        >
          {sent ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold">Message received 💛</h3>
              <p className="mt-3 text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" required /></div>
                <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="topic">I'm a…</Label>
                <select id="topic" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Family looking for care</option>
                  <option>Care worker</option>
                  <option>Service provider</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2"><Label htmlFor="msg">How can we help?</Label><Textarea id="msg" rows={5} required /></div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Send message</Button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
