import { I as e, L as t } from "./doc.C_PtMNUB.js";
var n = e(), r = {
	neutral: `bg-sunken text-fg group-data-selected:bg-accent group-data-selected:text-accent-fg group-aria-[current=page]:bg-accent group-aria-[current=page]:text-accent-fg`,
	accent: `bg-accent text-accent-fg`
};
function i({ value: e, max: i = 99, label: a, tone: o = `neutral`, className: s, ...c }) {
	let l = e > i ? `${i}+` : String(e);
	return (0, n.jsx)(`span`, {
		...c,
		className: t(`inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-sm px-1 text-label font-semibold tabular-nums forced-colors:border forced-colors:border-current`, r[o], s),
		children: a === void 0 ? l : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(`span`, {
			"aria-hidden": `true`,
			children: l
		}), (0, n.jsx)(`span`, {
			className: `sr-only`,
			children: a
		})] })
	});
}
export { i as t };
