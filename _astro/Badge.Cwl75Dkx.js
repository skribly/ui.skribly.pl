import { n as e, t } from "./jsx-runtime.yrTYNGQT.js";
var n = t(), r = {
	neutral: `bg-sunken text-fg`,
	accent: `bg-accent-soft text-accent-text`,
	ok: `bg-ok-soft text-ok`,
	warn: `bg-warn-soft text-warn`,
	danger: `bg-danger-soft text-danger`,
	info: `bg-info-soft text-info`
}, i = {
	sm: `min-h-4 px-1.5 text-label`,
	md: `min-h-5 px-2 text-caption`
};
function a({ tone: t = `neutral`, size: a = `md`, icon: o, className: s, children: c, ...l }) {
	return (0, n.jsxs)(`span`, {
		...l,
		className: e(`inline-flex max-w-full min-w-0 items-center gap-1 rounded-full border border-transparent py-0.5 align-middle font-medium whitespace-nowrap`, r[t], i[a], s),
		children: [o ? (0, n.jsx)(`span`, {
			"aria-hidden": !0,
			className: `inline-flex shrink-0 [&>svg]:size-3`,
			children: o
		}) : null, (0, n.jsx)(`span`, {
			className: `min-w-0 truncate`,
			children: c
		})]
	});
}
export { a as t };
