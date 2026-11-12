import { t as e } from "./createLucideIcon.npgQlVHx.js";
import { n as t, t as n, u as r, v as i } from "./Dialog.BHaijp-q.js";
import { o as a } from "./useOverlayTriggerState.OsbwJUOw.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
import { n as c, r as l, t as u } from "./portal.-REG5w-J.js";
var d = {
	name: `circle-question-mark`,
	size: 24,
	node: [
		[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`,
			key: `1mglay`
		}],
		[`path`, {
			d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,
			key: `1u773s`
		}],
		[`path`, {
			d: `M12 17h.01`,
			key: `p32p05`
		}]
	],
	aliases: [`help-circle`, `circle-help`]
};
d.node;
var f = e(d), p = s();
function m({ trigger: e, children: s, title: d, label: f, placement: m = `bottom`, showArrow: h = !1, headingLevel: g = 2, isOpen: _, defaultOpen: v, onOpenChange: y, container: b, className: x }) {
	return (0, p.jsxs)(n, {
		...c(_, v, y),
		children: [e, (0, p.jsxs)(r, {
			...l(b),
			placement: m,
			offset: h ? 10 : 6,
			containerPadding: 12,
			className: o(u, `z-(--sk-z-modal) w-max max-w-[min(22rem,calc(100vw-1.5rem))] overflow-y-auto text-body`, x),
			children: [h ? (0, p.jsx)(a, {
				className: `group`,
				children: (0, p.jsx)(`svg`, {
					"aria-hidden": !0,
					viewBox: `0 0 12 12`,
					className: `block size-3 fill-surface stroke-border group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90`,
					children: (0, p.jsx)(`path`, { d: `M0 0 L6 6 L12 0` })
				})
			}) : null, (0, p.jsx)(t, {
				...d === void 0 && f !== void 0 ? { "aria-label": f } : {},
				className: `p-3 outline-none [overflow-wrap:anywhere]`,
				children: ({ close: e }) => (0, p.jsxs)(p.Fragment, { children: [d === void 0 ? null : (0, p.jsx)(i, {
					slot: `title`,
					level: g,
					className: `mb-1 text-body font-semibold`,
					children: d
				}), typeof s == `function` ? s(e) : s] })
			})]
		})]
	});
}
export { f as n, m as t };
