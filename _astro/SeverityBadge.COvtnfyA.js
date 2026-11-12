import { t as e } from "./chevron-down.sj8BBp0l.js";
import { t } from "./chevron-up.BUNHHnRW.js";
import { t as n } from "./chevrons-up.BVgUGqqJ.js";
import { t as r } from "./info.D9DvH9cK.js";
import { t as i } from "./minus.D36Muiio.js";
import { n as a, t as o } from "./jsx-runtime.yrTYNGQT.js";
var s = o(), c = {
	critical: `bg-danger text-danger-fg`,
	high: `bg-danger-soft text-danger`,
	medium: `bg-warn-soft text-warn`,
	low: `bg-info-soft text-info`,
	info: `bg-sunken text-muted`
}, l = {
	critical: n,
	high: t,
	medium: i,
	low: e,
	info: r
};
function u({ severity: e, className: t, children: n, ...r }) {
	let i = l[e];
	return (0, s.jsxs)(`span`, {
		...r,
		"data-severity": e,
		className: a(`inline-flex max-w-full min-w-0 items-center gap-1 rounded-full border border-transparent py-0.5 ps-1.5 pe-2 align-middle text-caption font-semibold whitespace-nowrap`, c[e], t),
		children: [(0, s.jsx)(i, {
			"aria-hidden": !0,
			focusable: `false`,
			className: `size-3 shrink-0`,
			strokeWidth: 2.5
		}), (0, s.jsx)(`span`, {
			className: `min-w-0 truncate`,
			children: n
		})]
	});
}
export { u as t };
