import { s as e } from "./createLucideIcon.npgQlVHx.js";
import { n as t, t as n } from "./jsx-runtime.yrTYNGQT.js";
var r = n(), i = {
	sm: `size-3.5`,
	md: `size-4`,
	lg: `size-6`
};
function a({ size: e }) {
	return (0, r.jsxs)(`svg`, {
		viewBox: `0 0 24 24`,
		fill: `none`,
		"aria-hidden": !0,
		focusable: `false`,
		className: t(`shrink-0 animate-spin text-accent-text motion-reduce:animate-[sk-spin_2.4s_linear_infinite] in-[.a11y-reduce-motion]:animate-[sk-spin_2.4s_linear_infinite]`, i[e]),
		children: [(0, r.jsx)(`circle`, {
			cx: `12`,
			cy: `12`,
			r: `9.5`,
			stroke: `currentColor`,
			strokeWidth: `3`,
			opacity: `0.25`
		}), (0, r.jsx)(`path`, {
			d: `M21.5 12a9.5 9.5 0 0 0-9.5-9.5`,
			stroke: `currentColor`,
			strokeWidth: `3`,
			strokeLinecap: `round`
		})]
	});
}
function o({ label: n, showLabel: i = !1, size: o = `md`, decorative: s = !1, className: c }) {
	return s ? (0, r.jsx)(`span`, {
		"aria-hidden": !0,
		className: t(`inline-flex items-center`, c),
		children: (0, r.jsx)(a, { size: o })
	}) : (0, r.jsxs)(e, {
		isIndeterminate: !0,
		"aria-label": n,
		className: t(`inline-flex max-w-full min-w-0 items-center gap-2 align-middle text-body text-muted`, c),
		children: [(0, r.jsx)(a, { size: o }), i ? (0, r.jsx)(`span`, {
			"aria-hidden": !0,
			className: `min-w-0 wrap-break-word`,
			children: n
		}) : null]
	});
}
export { o as t };
