import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { c as createLucideIcon, B as Button, L as Link } from "./router-BU3yadDs.js";
import { P as PageHero } from "./PageHero-CTKHGNAw.js";
import { S as Search, C as Calendar, a as Star } from "./star-RWVJ_lPI.js";
import { M as MessageCircle } from "./message-circle-gANDOHP5.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
function HowItWorksPage() {
  const steps = [{
    i: UserPlus,
    t: "Create your free account",
    d: "Tell us about your child, your needs and your location. Takes less than 5 minutes."
  }, {
    i: Search,
    t: "Search local providers",
    d: "Browse verified worker profiles, filter by experience, availability and rate."
  }, {
    i: MessageCircle,
    t: "Message and meet",
    d: "Chat with workers privately. Arrange a free meet-and-greet before you commit."
  }, {
    i: Calendar,
    t: "Book sessions",
    d: "Schedule one-offs, recurring weekly support or longer-term care, all in the app."
  }, {
    i: CreditCard,
    t: "Secure payments",
    d: "Pay through CareNest. Funds are released after each session — fair for everyone."
  }, {
    i: Star,
    t: "Review and grow",
    d: "Leave reviews, build long-term relationships and adjust as your child's needs change."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "How it works", title: "Simple, safe, and built around you", subtitle: "From signup to your first session in days, not weeks." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: steps.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-7 shadow-card flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "size-6 text-primary-foreground" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-accent", children: [
            "STEP ",
            idx + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mt-1", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: s.d })
        ] })
      ] }, s.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "Ready to get started?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Sign up free" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Ask a question" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  HowItWorksPage as component
};
