import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { c as createLucideIcon, B as Button, L as Link, w as workersImg, H as Heart } from "./router-BU3yadDs.js";
import { P as PageHero } from "./PageHero-CTKHGNAw.js";
import { C as Check } from "./check-DU4jwBNb.js";
import { C as Clock } from "./clock-CxYDxlyv.js";
import { G as GraduationCap } from "./graduation-cap-dVPi9kVI.js";
import { S as Sparkles } from "./sparkles-B61nMuiq.js";
import { B as Briefcase } from "./briefcase-B3NTA4fd.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode);
function WorkersPage() {
  const perks = [{
    i: DollarSign,
    t: "Earn more",
    d: "Keep up to 90% of what you charge. Set your own rate and get paid weekly."
  }, {
    i: Clock,
    t: "Flexible hours",
    d: "Work when, where and how often you want — fit care around your life."
  }, {
    i: Heart,
    t: "Meaningful work",
    d: "Build long-term relationships with families who value the care you provide."
  }, {
    i: GraduationCap,
    t: "Free training",
    d: "Access ongoing professional development modules at no cost."
  }, {
    i: Sparkles,
    t: "Tools to grow",
    d: "Showcase your profile, collect reviews and grow your client base."
  }, {
    i: Briefcase,
    t: "Insured & supported",
    d: "Public liability cover and 24/7 support whenever you need help."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PageHero, { eyebrow: "For Care Workers", title: "A better way to work in care", subtitle: "Choose your clients, set your rate and do what you love — without the agency taking a cut.", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Apply to join" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: "How it works" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold", children: "Care work, reimagined" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "CareNest gives you the freedom of being your own boss, with the tools, training and protection of a trusted platform behind you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["Free to join — no monthly fees", "You keep more of what you earn", "Choose families that match your skills", "Get paid securely and on time", "Access free training and resources", "24/7 support team and community"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 mt-0.5 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: x })
        ] }, x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: workersImg, alt: "Care worker with child", loading: "lazy", width: 1280, height: 896, className: "rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold text-center", children: "Everything you need to thrive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-5", children: perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 shadow-card border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-xl bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.i, { className: "size-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-lg", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.d })
      ] }, p.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-14 text-center max-w-3xl mx-auto shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-3xl font-bold", children: "Ready to start?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 opacity-90", children: "Apply in under 10 minutes. Our team will guide you through verification and you'll be ready to connect with families." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "warm", size: "xl", className: "mt-7", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Apply to become a CareNest worker" }) })
    ] }) })
  ] });
}
export {
  WorkersPage as component
};
