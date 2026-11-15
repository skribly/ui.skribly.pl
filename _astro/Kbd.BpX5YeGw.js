import { t as e } from "./Keyboard.DA1lzqms.js";
import { I as t, L as n } from "./doc.C_PtMNUB.js";
var r = t(), i = `inline-flex h-[1.375rem] min-w-[1.375rem] shrink-0 items-center justify-center rounded-sm border border-b-2 border-border-strong bg-surface px-1.5 font-mono text-caption leading-none font-medium whitespace-nowrap text-muted`;
function a({ children: t, label: a, className: o }) {
	return (0, r.jsx)(e, {
		className: n(i, o),
		children: a === void 0 ? t : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, {
			"aria-hidden": !0,
			children: t
		}), (0, r.jsx)(`span`, {
			className: `sr-only`,
			children: a
		})] })
	});
}
export { a as t };
