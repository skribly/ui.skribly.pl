import { n as e, t } from "./jsx-runtime.yrTYNGQT.js";
var n = t(), r = {
	neutral: `bg-accent-soft text-accent-text`,
	danger: `bg-danger-soft text-danger`
};
function i({ icon: t, title: i, description: a, actions: o, headingLevel: s = 3, tone: c = `neutral`, size: l = `md`, bordered: u = !1, className: d, children: f, ...p }) {
	let m = `h${s}`;
	return (0, n.jsxs)(`div`, {
		...p,
		"data-tone": c,
		className: e(`flex w-full min-w-0 flex-col items-center justify-center text-center text-body text-muted`, l === `md` ? `gap-3 px-5 py-10` : `gap-2 px-4 py-6`, u && `rounded-lg border border-dashed border-border-strong`, d),
		children: [
			t ? (0, n.jsx)(`span`, {
				"aria-hidden": !0,
				className: e(`grid shrink-0 place-items-center border border-transparent`, l === `md` ? `size-14 rounded-xl [&>svg]:size-6` : `size-10 rounded-lg [&>svg]:size-5`, r[c]),
				children: t
			}) : null,
			(0, n.jsx)(m, {
				className: e(`max-w-prose font-semibold text-fg wrap-break-word`, l === `md` ? `text-title` : `text-body`),
				children: i
			}),
			a ? (0, n.jsx)(`div`, {
				className: `max-w-prose wrap-break-word`,
				children: a
			}) : null,
			f,
			o ? (0, n.jsx)(`div`, {
				className: `mt-1 flex flex-wrap items-center justify-center gap-2`,
				children: o
			}) : null
		]
	});
}
export { i as t };
