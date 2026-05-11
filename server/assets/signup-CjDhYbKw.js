import { r as reactExports, W as jsxRuntimeExports } from "./server-CpcsGo62.js";
import { H as Heart, B as Button, L as Link } from "./router-BU3yadDs.js";
import { L as Label, I as Input } from "./label-D-_ZTA7f.js";
import { U as Users } from "./users-C34auVsD.js";
import { B as Briefcase } from "./briefcase-B3NTA4fd.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function SignupPage() {
  const [role, setRole] = reactExports.useState("family");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto bg-card border border-border rounded-3xl p-8 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-12 rounded-2xl bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-6 text-primary-foreground", fill: "currentColor" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-center mt-4", children: "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm mt-1", children: "Free to join. No credit card required." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mt-6 p-1 bg-muted rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setRole("family"), className: `rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-smooth ${role === "family" ? "bg-card shadow-sm" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4" }),
        " Family"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setRole("worker"), className: `rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-smooth ${role === "worker" ? "bg-card shadow-sm" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-4" }),
        " Care worker"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fullname", children: "Full name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "fullname", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", variant: "hero", size: "lg", className: "w-full", children: [
        "Create ",
        role === "family" ? "family" : "worker",
        " account"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-6", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary font-medium hover:underline", children: "Log in" })
    ] })
  ] }) });
}
export {
  SignupPage as component
};
