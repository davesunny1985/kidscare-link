import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Users, Briefcase } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [{ title: "Sign up | CareNest" }, { name: "description", content: "Create your free CareNest account — for families and care workers." }],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [role, setRole] = useState<"family" | "worker">("family");
  return (
    <section className="container-page py-20">
      <div className="max-w-md mx-auto bg-card border border-border rounded-3xl p-8 shadow-card">
        <div className="flex justify-center"><span className="size-12 rounded-2xl bg-gradient-primary grid place-items-center"><Heart className="size-6 text-primary-foreground" fill="currentColor" /></span></div>
        <h1 className="text-2xl font-bold text-center mt-4">Create your account</h1>
        <p className="text-center text-muted-foreground text-sm mt-1">Free to join. No credit card required.</p>

        <div className="grid grid-cols-2 gap-2 mt-6 p-1 bg-muted rounded-xl">
          <button onClick={() => setRole("family")} className={`rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-smooth ${role === "family" ? "bg-card shadow-sm" : "text-muted-foreground"}`}><Users className="size-4" /> Family</button>
          <button onClick={() => setRole("worker")} className={`rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-smooth ${role === "worker" ? "bg-card shadow-sm" : "text-muted-foreground"}`}><Briefcase className="size-4" /> Care worker</button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2"><Label htmlFor="fullname">Full name</Label><Input id="fullname" required /></div>
          <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
          <div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" required /></div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Create {role === "family" ? "family" : "worker"} account</Button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link></p>
      </div>
    </section>
  );
}
