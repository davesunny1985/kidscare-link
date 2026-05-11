import { Link, Outlet } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const nav = [
  { to: "/", label: "Home" },
  { to: "/families", label: "For Families" },
  { to: "/workers", label: "For Care Workers" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft group-hover:shadow-glow transition-smooth">
            <Heart className="size-5 text-primary-foreground" fill="currentColor" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">CareNest</span>
        </Link>
        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-2.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-smooth whitespace-nowrap"
              activeProps={{ className: "px-2.5 py-2 text-sm font-semibold text-primary rounded-md whitespace-nowrap" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild><Link to="/login">Log in</Link></Button>
          <Button variant="hero" asChild><Link to="/signup">Get started</Link></Button>
        </div>
        <button className="xl:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-page py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 md:hidden">
              <Button variant="outline" className="flex-1" asChild><Link to="/login">Log in</Link></Button>
              <Button variant="hero" className="flex-1" asChild><Link to="/signup">Get started</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="size-9 rounded-xl bg-gradient-primary grid place-items-center">
              <Heart className="size-5 text-primary-foreground" fill="currentColor" />
            </span>
            <span className="font-display text-lg font-bold">CareNest</span>
          </div>
          <p className="mt-4 text-sm opacity-70 leading-relaxed">
            Connecting families of disabled children with trusted local care workers and support providers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/families" className="hover:opacity-100 hover:underline">For Families</Link></li>
            <li><Link to="/workers" className="hover:opacity-100 hover:underline">For Care Workers</Link></li>
            <li><Link to="/services" className="hover:opacity-100 hover:underline">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:opacity-100 hover:underline">How it works</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 hover:underline">Contact</Link></li>
            <li><Link to="/safety" className="hover:opacity-100 hover:underline">Safety & Trust</Link></li>
            <li><Link to="/pricing" className="hover:opacity-100 hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/privacy" className="hover:opacity-100 hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:opacity-100 hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-page py-5 text-xs opacity-60 flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} CareNest. All rights reserved.</p>
          <p>Made with care for families everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
