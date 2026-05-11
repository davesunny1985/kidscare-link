import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { B as Button, L as Link } from "./router-BU3yadDs.js";
import { P as PageHero } from "./PageHero-CTKHGNAw.js";
import { C as Check } from "./check-DU4jwBNb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function PricingPage() {
  const tiers = [{
    name: "Families",
    price: "Free",
    note: "to join",
    features: ["Browse unlimited workers", "Free messaging", "Free meet & greets", "Pay only when you book", "10% booking fee included"],
    cta: "Find a worker",
    link: "/families"
  }, {
    name: "Care workers",
    price: "Free",
    note: "to join",
    featured: true,
    features: ["Free profile and listing", "Set your own rate", "Keep up to 90% earnings", "Free training and support", "Weekly secure payouts"],
    cta: "Apply now",
    link: "/workers"
  }, {
    name: "Providers",
    price: "Custom",
    note: "for organisations",
    features: ["Multiple worker profiles", "Centralised dashboard", "Dedicated account manager", "Bulk verification", "API & invoicing"],
    cta: "Talk to sales",
    link: "/contact"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Pricing", title: "Simple, transparent pricing", subtitle: "No subscriptions, no surprises. Pay only when care happens." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 grid md:grid-cols-3 gap-6", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-3xl p-8 shadow-card border ${t.featured ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant" : "bg-card border-border"}`, children: [
      t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold", children: "Most popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-bold font-display", children: t.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.featured ? "opacity-80" : "text-muted-foreground", children: t.note })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: t.featured ? "warm" : "hero", size: "lg", className: "w-full mt-8", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: t.link, children: t.cta }) })
    ] }, t.name)) })
  ] });
}
export {
  PricingPage as component
};
