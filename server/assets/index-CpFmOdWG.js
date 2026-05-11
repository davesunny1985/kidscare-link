import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { c as createLucideIcon, B as Button, L as Link, H as Heart, f as familiesImg, w as workersImg } from "./router-BU3yadDs.js";
import { S as Sparkles } from "./sparkles-B61nMuiq.js";
import { S as ShieldCheck } from "./shield-check-B3C_PlDK.js";
import { a as Star, S as Search, C as Calendar } from "./star-RWVJ_lPI.js";
import { M as MessageCircle } from "./message-circle-gANDOHP5.js";
import { C as Check } from "./check-DU4jwBNb.js";
import { U as Users } from "./users-C34auVsD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
const heroImg = "/assets/hero-care-Ddx9IZ98.jpg";
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid md:grid-cols-2 gap-8 md:gap-12 items-center section-y", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-accent" }),
          " Trusted by 12,000+ families"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-fluid-5xl font-bold tracking-tight", children: [
          "Find trusted care for your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "amazing child" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fluid-lg text-muted-foreground max-w-xl leading-relaxed", children: "CareNest connects families with verified local support workers, therapists and service providers experienced in caring for children with disability." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/families", children: [
            "Find a care worker ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/workers", children: "Become a provider" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-primary" }),
            " Police checked"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 text-accent", fill: "currentColor" }),
            " 4.9 average rating"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Care worker reading with a child in a wheelchair", width: 1536, height: 1024, className: "relative rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card hidden md:flex items-center gap-3 max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-gradient-warm grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-5 text-accent-foreground", fill: "currentColor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "98% of families" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "find a match within 48 hours" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [{
      v: "12,000+",
      l: "Families supported"
    }, {
      v: "8,500+",
      l: "Verified care workers"
    }, {
      v: "200+",
      l: "Local communities"
    }, {
      v: "4.9★",
      l: "Average rating"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fluid-2xl font-bold text-primary font-display", children: s.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mt-1", children: s.l })
    ] }, s.l)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold", children: "Care that works for everyone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Whether you're seeking support or providing it, CareNest brings you together." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/families", className: "group rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: familiesImg, alt: "Family receiving support", loading: "lazy", width: 1280, height: 896, className: "w-full aspect-[16/10] object-cover group-hover:scale-105 transition-smooth duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent uppercase tracking-wider", children: "For Families" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-2", children: "Find your perfect match" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Browse verified profiles, read reviews and choose the support worker who fits your child's unique needs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 mt-5 font-medium text-primary", children: [
              "Learn more ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-smooth" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/workers", className: "group rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workersImg, alt: "Support worker with a child", loading: "lazy", width: 1280, height: 896, className: "w-full aspect-[16/10] object-cover group-hover:scale-105 transition-smooth duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent uppercase tracking-wider", children: "For Care Workers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-2", children: "Build a meaningful career" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Set your hours, choose your clients, and earn more by working directly with families who need you." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 mt-5 font-medium text-primary", children: [
              "Join CareNest ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-smooth" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold", children: "How CareNest works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Three simple steps to confident, consistent care." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        i: Search,
        t: "Search & shortlist",
        d: "Tell us what you need. Browse profiles of local workers with the right skills, experience and personality."
      }, {
        i: MessageCircle,
        t: "Message & meet",
        d: "Chat with workers, ask questions, and meet for free before you decide. No commitment, no pressure."
      }, {
        i: Calendar,
        t: "Book & manage",
        d: "Book sessions, track hours, and pay securely — all in one place. Workers get paid, you get peace of mind."
      }].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-7 shadow-card relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "size-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-6 right-6 text-5xl font-bold font-display text-primary/10", children: [
          "0",
          idx + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed", children: s.d })
      ] }, s.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold", children: "Loved by families and workers" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        q: "We found the most amazing support worker for our son. She truly understands his needs and he absolutely lights up when she arrives.",
        n: "Sarah M.",
        r: "Parent, Brisbane"
      }, {
        q: "CareNest has given me the freedom to choose families I love working with. The platform is simple and I get paid on time, every time.",
        n: "Jess T.",
        r: "Support Worker"
      }, {
        q: "After years of agency rotations, having one consistent person has been life-changing for our daughter. Thank you CareNest.",
        n: "David & Anh",
        r: "Parents, Sydney"
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-accent mb-3", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4", fill: "currentColor" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-foreground/90 leading-relaxed", children: [
          '"',
          t.q,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: t.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.r })
        ] })
      ] }, t.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-primary p-10 md:p-14 text-primary-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 size-80 rounded-full bg-primary-glow opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-xs font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3.5" }),
            " Safety first"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold mt-4", children: "Your child's safety is our priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 opacity-90 leading-relaxed", children: "Every worker on CareNest is identity-verified, police-checked and reference-screened. We provide insurance, secure payments and 24/7 support." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "warm", size: "lg", className: "mt-6", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/safety", children: [
            "Learn about safety ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3", children: ["National Police Check on every worker", "Working with Children Check verified", "$20M public liability insurance", "Secure in-app messaging & payments", "24/7 customer support team"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 bg-white/10 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: x })
        ] }, x)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-12 mx-auto text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold mt-4", children: "Ready to find the right care?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Join thousands of families who have found their perfect match on CareNest." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Get started for free" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to our team" }) })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
