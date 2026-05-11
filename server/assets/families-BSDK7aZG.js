import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { c as createLucideIcon, B as Button, L as Link, f as familiesImg, H as Heart } from "./router-BU3yadDs.js";
import { P as PageHero } from "./PageHero-CTKHGNAw.js";
import { C as Check } from "./check-DU4jwBNb.js";
import { S as Search, C as Calendar, a as Star } from "./star-RWVJ_lPI.js";
import { M as MessageCircle } from "./message-circle-gANDOHP5.js";
import { U as Users } from "./users-C34auVsD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function FamiliesPage() {
  const benefits = [{
    i: Search,
    t: "You're in control",
    d: "Choose your worker, set the schedule, agree on the rate. No middleman, no rotating staff."
  }, {
    i: Heart,
    t: "Consistency matters",
    d: "Build a long-term relationship with someone who truly knows your child."
  }, {
    i: Shield,
    t: "Verified & insured",
    d: "Every worker is police-checked, WWCC-verified and covered by our insurance."
  }, {
    i: MessageCircle,
    t: "Free to browse",
    d: "View profiles, send messages and meet workers before you commit. Pay only when you book."
  }, {
    i: Calendar,
    t: "Flexible booking",
    d: "One-off help, regular weekly support or 24/7 care — it's up to you."
  }, {
    i: Users,
    t: "Specialist skills",
    d: "Filter by experience: autism, ADHD, complex needs, sensory support and more."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PageHero, { eyebrow: "For Families", title: "The right care, on your terms", subtitle: "Browse hundreds of local support workers experienced with children with disability. Connect directly, no agency fees, no compromises.", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Search workers near me" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: "How it works" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: familiesImg, alt: "Support worker with child", loading: "lazy", width: 1280, height: 896, className: "rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold", children: "Care that fits your family" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Every child is different. Find someone who shares your values, understands your child's needs and becomes a trusted part of your family." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["Browse profiles, photos, videos and reviews", "Message workers privately before you commit", "Read verified reviews from other families", "Set your own rate or browse by budget", "Cancel or change bookings anytime"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 mt-0.5 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: x })
        ] }, x)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold text-center max-w-2xl mx-auto", children: "Why families choose CareNest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-5", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 shadow-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-xl bg-gradient-warm grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.i, { className: "size-5 text-accent-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-lg", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: b.d })
      ] }, b.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border p-10 md:p-14 shadow-card text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-10 mx-auto text-accent", fill: "currentColor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl md:text-2xl font-display font-semibold leading-snug", children: `"Finding Maya was the best thing that's happened to our family this year. She's patient, joyful and our son adores her."` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "— Lauren, parent of an 8-year-old in Melbourne" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", className: "mt-8", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Start your search" }) })
    ] }) })
  ] });
}
export {
  FamiliesPage as component
};
