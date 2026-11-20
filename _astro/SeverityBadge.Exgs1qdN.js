import { _ as e, f as t, g as n } from "./useOverflow.Dq483xd0.js";
var r = n(), i = t(`chevron.double-up`), a = t(`chevron.up`), o = t(`action.remove`), s = t(`chevron.down`), c = t(`status.info`), l = {
	critical: `bg-danger text-danger-fg`,
	high: `bg-danger-soft text-danger`,
	medium: `bg-warn-soft text-warn`,
	low: `bg-info-soft text-info`,
	info: `bg-sunken text-muted`
}, u = {
	critical: i,
	high: a,
	medium: o,
	low: s,
	info: c
};
function d({ severity: t, className: n, children: i, ...a }) {
	let o = u[t];
	return (0, r.jsxs)(`span`, {
		...a,
		"data-severity": t,
		className: e(`inline-flex max-w-full min-w-0 items-center gap-1 rounded-full border border-transparent py-0.5 ps-1.5 pe-2 align-middle text-caption font-semibold whitespace-nowrap`, l[t], n),
		children: [(0, r.jsx)(o, {
			"aria-hidden": !0,
			focusable: `false`,
			className: `size-3 shrink-0`,
			strokeWidth: 2.5
		}), (0, r.jsx)(`span`, {
			className: `min-w-0 truncate`,
			children: i
		})]
	});
}
export { d as t };
