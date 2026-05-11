import { W as jsxRuntimeExports } from "./server-CpcsGo62.js";
function PageHero({ eyebrow, title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page section-y text-center max-w-3xl mx-auto", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-4", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-fluid-5xl font-bold tracking-tight", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-fluid-lg text-muted-foreground leading-relaxed", children: subtitle }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children })
  ] }) });
}
export {
  PageHero as P
};
