import { t as e } from "./Keyboard.CpsLyzdv.js";
import { _ as t, g as n } from "./useOverflow.Dq483xd0.js";
var r = n(), i = `inline-flex h-[1.375rem] min-w-[1.375rem] shrink-0 items-center justify-center rounded-sm border border-b-2 border-border-strong bg-surface px-1.5 font-mono text-caption leading-none font-medium whitespace-nowrap text-muted`;
function a({ children: n, label: a, className: o }) {
	return (0, r.jsx)(e, {
		className: t(i, o),
		children: a === void 0 ? n : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`span`, {
			"aria-hidden": !0,
			children: n
		}), (0, r.jsx)(`span`, {
			className: `sr-only`,
			children: a
		})] })
	});
}
export { a as t };
