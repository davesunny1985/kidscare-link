import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Log in | CareNest" }, { name: "description", content: "Log in to your CareNest account." }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="container-page py-20">
      <div className="max-w-md mx-auto bg-card border border-border rounded-3xl p-8 shadow-card">
        <div className="flex justify-center"><span className="size-12 rounded-2xl bg-gradient-primary grid place-items-center"><Heart className="size-6 text-primary-foreground" fill="currentColor" /></span></div>
        <h1 className="text-2xl font-bold text-center mt-4">Welcome back</h1>
        <p className="text-center text-muted-foreground text-sm mt-1">Log in to your CareNest account</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
          <div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" required /></div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Log in</Button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-6">No account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link></p>
      </div>
    </section>
  );
}
