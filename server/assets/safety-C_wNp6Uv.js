import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { c as createLucideIcon, B as Button, L as Link } from "./router-BU3yadDs.js";
import { P as PageHero } from "./PageHero-CTKHGNAw.js";
import { S as ShieldCheck } from "./shield-check-B3C_PlDK.js";
import { M as MessageCircle } from "./message-circle-gANDOHP5.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
];
const LifeBuoy = createLucideIcon("life-buoy", __iconNode$1);
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
function SafetyPage() {
  const items = [{
    i: BadgeCheck,
    t: "Identity verified",
    d: "Every worker confirms their identity with government ID before joining."
  }, {
    i: FileCheck,
    t: "Police & WWCC checks",
    d: "We verify a current National Police Check and Working with Children Check."
  }, {
    i: ShieldCheck,
    t: "$20M insurance",
    d: "Public liability cover protects families and workers on every booking."
  }, {
    i: Lock,
    t: "Secure payments",
    d: "Funds are held safely and only released after each session is delivered."
  }, {
    i: MessageCircle,
    t: "In-app messaging",
    d: "Keep all your conversations in one secure, monitored place."
  }, {
    i: LifeBuoy,
    t: "24/7 support",
    d: "Our team is always one tap away if anything doesn't feel right."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Safety & Trust", title: "Care you can count on", subtitle: "Every layer of CareNest is designed to keep your family safe and your peace of mind intact." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.i, { className: "size-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-bold text-lg", children: it.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: it.d })
    ] }, it.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-14 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-fluid-2xl font-bold", children: "Worried about something?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 opacity-90", children: "Our trust & safety team is available 24/7. We'll listen, investigate and act." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "warm", size: "lg", className: "mt-6", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact safety team" }) })
    ] }) })
  ] });
}
export {
  SafetyPage as component
};
