import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { F as n, I as r } from "./doc.DoLlUurT.js";
import { a as i, i as a, t as o } from "./Button.D4_9kLv-.js";
import { n as s, t as c } from "./Tooltip.B3QowDfW.js";
var l = e(t(), 1), u = n();
function d({ content: e, container: t, placement: n = `top`, isDisabled: r = !1, children: a }) {
	return (0, u.jsxs)(s, {
		delay: 500,
		closeDelay: 150,
		isDisabled: r,
		children: [a, (0, u.jsx)(c, {
			placement: n,
			offset: 6,
			className: i,
			...t ? { UNSTABLE_portalContainer: t } : {},
			children: e
		})]
	});
}
var f = (0, l.forwardRef)(function({ label: e, size: t = `md`, variant: n = `ghost`, tooltip: i = !0, tooltipPlacement: s = `top`, container: c, className: l, ...f }, p) {
	let m = (0, u.jsx)(o, {
		...f,
		ref: p,
		"aria-label": e,
		size: t,
		variant: n,
		className: r(a[t], l)
	});
	return i ? (0, u.jsx)(d, {
		content: e,
		container: c,
		placement: s,
		children: m
	}) : m;
});
export { d as n, f as t };
