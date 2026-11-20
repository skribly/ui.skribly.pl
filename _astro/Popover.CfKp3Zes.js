import { n as e, t, u as n, v as r } from "./Dialog.RIvfrakQ.js";
import { o as i } from "./useOverlayTriggerState.DoeSTtz6.js";
import { _ as a, g as o } from "./useOverflow.Dq483xd0.js";
import { n as s, r as c, t as l } from "./portal.-REG5w-J.js";
var u = o();
function d({ trigger: o, children: d, title: f, label: p, placement: m = `bottom`, showArrow: h = !1, headingLevel: g = 2, isOpen: _, defaultOpen: v, onOpenChange: y, container: b, className: x }) {
	return (0, u.jsxs)(t, {
		...s(_, v, y),
		children: [o, (0, u.jsxs)(n, {
			...c(b),
			placement: m,
			offset: h ? 10 : 6,
			containerPadding: 12,
			className: a(l, `z-(--sk-z-modal) w-max max-w-[min(22rem,calc(100vw-1.5rem))] overflow-y-auto text-body`, x),
			children: [h ? (0, u.jsx)(i, {
				className: `group`,
				children: (0, u.jsx)(`svg`, {
					"data-sk-drawn": `overlay`,
					"aria-hidden": !0,
					viewBox: `0 0 12 12`,
					className: `block size-3 fill-surface stroke-border group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90`,
					children: (0, u.jsx)(`path`, { d: `M0 0 L6 6 L12 0` })
				})
			}) : null, (0, u.jsx)(e, {
				...f === void 0 && p !== void 0 ? { "aria-label": p } : {},
				className: `p-3 outline-none [overflow-wrap:anywhere]`,
				children: ({ close: e }) => (0, u.jsxs)(u.Fragment, { children: [f === void 0 ? null : (0, u.jsx)(r, {
					slot: `title`,
					level: g,
					className: `mb-1 text-body font-semibold`,
					children: f
				}), typeof d == `function` ? d(e) : d] })
			})]
		})]
	});
}
export { d as t };
