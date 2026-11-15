import { o as e } from "./useOverlayTriggerState.DCpCXuwM.js";
import { n as t, t as n } from "./Tooltip.B3QowDfW.js";
import { F as r, I as i } from "./doc.DoLlUurT.js";
import { r as a } from "./portal.-REG5w-J.js";
var o = r();
function s({ content: r, children: s, placement: c = `top`, delay: l = 600, closeDelay: u = 300, isDisabled: d = !1, isOpen: f, defaultOpen: p, onOpenChange: m, container: h, className: g }) {
	return (0, o.jsxs)(t, {
		delay: l,
		closeDelay: u,
		isDisabled: d,
		...f === void 0 ? {} : { isOpen: f },
		...p === void 0 ? {} : { defaultOpen: p },
		...m === void 0 ? {} : { onOpenChange: m },
		children: [s, (0, o.jsxs)(n, {
			...a(h),
			placement: c,
			offset: 8,
			containerPadding: 12,
			className: i(`z-(--sk-z-toast) max-w-[min(18rem,calc(100vw-1.5rem))] rounded-md border border-border bg-surface px-2.5 py-1.5 text-caption font-medium text-fg shadow-md [overflow-wrap:anywhere] data-entering:animate-fade data-exiting:animate-fade data-exiting:[animation-direction:reverse] motion-reduce:animate-none`, g),
			children: [(0, o.jsx)(e, {
				className: `group`,
				children: (0, o.jsx)(`svg`, {
					"data-sk-drawn": `overlay`,
					"aria-hidden": !0,
					viewBox: `0 0 10 10`,
					className: `block size-2.5 fill-surface stroke-border group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90`,
					children: (0, o.jsx)(`path`, { d: `M0 0 L5 5 L10 0` })
				})
			}), r]
		})]
	});
}
export { s as t };
