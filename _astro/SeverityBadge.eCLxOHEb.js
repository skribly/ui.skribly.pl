import { F as e, I as t, j as n } from "./doc.DoLlUurT.js";
var r = e(), i = n(`chevron.double-up`), a = n(`chevron.up`), o = n(`action.remove`), s = n(`chevron.down`), c = n(`status.info`), l = {
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
function d({ severity: e, className: n, children: i, ...a }) {
	let o = u[e];
	return (0, r.jsxs)(`span`, {
		...a,
		"data-severity": e,
		className: t(`inline-flex max-w-full min-w-0 items-center gap-1 rounded-full border border-transparent py-0.5 ps-1.5 pe-2 align-middle text-caption font-semibold whitespace-nowrap`, l[e], n),
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
