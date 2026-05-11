import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { c as createLucideIcon, H as Heart, B as Button, L as Link } from "./router-BU3yadDs.js";
import { P as PageHero } from "./PageHero-CTKHGNAw.js";
import { U as Users } from "./users-C34auVsD.js";
import { S as Sparkles } from "./sparkles-B61nMuiq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
function AboutPage() {
  const values = [{
    i: Heart,
    t: "Children first",
    d: "Every decision begins with what's best for the child."
  }, {
    i: Users,
    t: "Family-led",
    d: "Families know their child best. We give them the tools to lead."
  }, {
    i: Sparkles,
    t: "Quality care",
    d: "We hold every worker to a high standard — every time."
  }, {
    i: Globe,
    t: "Inclusion always",
    d: "We believe everyone deserves to belong, contribute and thrive."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About", title: "Care is personal. So are we.", subtitle: "CareNest was founded by parents and care workers who knew the system could be better — kinder, simpler and more connected." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-2xl font-bold", children: "Our story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4 text-muted-foreground leading-relaxed text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CareNest started in 2021 when two families struggled to find consistent, quality support for their children. Frustrated by long wait times, agency fees and rotating staff, they imagined something different — a place where families could connect directly with the people who'd care for their kids." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, CareNest supports over 12,000 families across Australia. Every day we work to make the experience of finding care more human — for families and for the incredible workers who choose this profession." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold text-center", children: "What we believe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 text-center shadow-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-primary grid place-items-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.i, { className: "size-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-lg", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.d })
      ] }, v.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "Join us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Whether you're a family, a care worker or a service provider — there's a place for you at CareNest." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Get started" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact us" }) })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
