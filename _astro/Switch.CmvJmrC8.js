import { n as e, t } from "./Switch.7lHuWp2t.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
import { d as i, i as a, u as o } from "./styles.MHrEldHY.js";
import { t as s } from "./check.CUpC8LgP.js";
var c = r();
function l({ className: e }) {
	return (0, c.jsx)(`span`, {
		"aria-hidden": `true`,
		className: n(`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-border-strong bg-sunken p-0.5 transition-colors group-data-hovered:border-muted group-data-selected:border-accent group-data-selected:bg-accent group-data-disabled:border-border group-data-disabled:opacity-60 forced-colors:group-data-selected:bg-[Highlight]`, a, e),
		children: (0, c.jsx)(`span`, {
			className: `grid size-3.5 place-items-center rounded-full bg-muted text-accent shadow-sm transition-transform duration-(--sk-duration-base) ease-out group-data-pressed:scale-90 group-data-selected:translate-x-4 group-data-selected:bg-accent-fg rtl:group-data-selected:-translate-x-4 forced-colors:bg-[CanvasText] forced-colors:group-data-selected:bg-[HighlightText] motion-reduce:group-data-pressed:scale-100`,
			children: (0, c.jsx)(s, {
				strokeWidth: 3.5,
				className: `invisible size-2.5 group-data-selected:visible forced-colors:text-[Highlight]`
			})
		})
	});
}
function u({ children: r, description: a, errorMessage: s, status: u, labelPosition: d = `end`, className: f, ...p }) {
	return (0, c.jsxs)(t, {
		...p,
		className: n(`flex min-w-0 flex-col gap-1`, f),
		children: [
			(0, c.jsxs)(e, {
				className: n(`group flex min-h-6 w-fit max-w-full cursor-default items-center gap-2.5 text-body text-fg data-disabled:cursor-not-allowed data-disabled:text-muted`, d === `start` && `flex-row-reverse`),
				children: [(0, c.jsx)(l, {}), (0, c.jsx)(`span`, {
					className: `min-w-0 break-words`,
					children: r
				})]
			}),
			(0, c.jsx)(i, {
				description: a,
				status: u,
				className: d === `end` ? `pl-11.5` : void 0
			}),
			(0, c.jsx)(o, {
				className: d === `end` ? `pl-11.5` : void 0,
				children: s
			})
		]
	});
}
export { l as n, u as t };
