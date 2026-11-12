import { t as e } from "./Text.DxhsPAdy.js";
import { n as t, r as n, t as r } from "./RadioGroup.3hBt4gq8.js";
import { n as i, t as a } from "./jsx-runtime.yrTYNGQT.js";
import { d as o, f as s, i as c, u as l } from "./styles.MHrEldHY.js";
var u = a();
function d({ children: t, description: a, className: o, ...s }) {
	return (0, u.jsxs)(r, {
		...s,
		className: i(`flex min-w-0 flex-col gap-0.5`, o),
		children: [(0, u.jsxs)(n, {
			className: `group flex min-h-6 w-fit max-w-full cursor-default items-start gap-2.5 py-0.5 text-body text-fg data-disabled:cursor-not-allowed data-disabled:text-muted`,
			children: [(0, u.jsx)(`span`, {
				"aria-hidden": `true`,
				className: i(`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-border-strong bg-input transition-colors group-data-hovered:border-muted group-data-selected:border-accent group-data-invalid:border-danger group-data-disabled:border-border group-data-disabled:bg-sunken`, c),
				children: (0, u.jsx)(`span`, { className: `size-2 scale-0 rounded-full bg-accent transition-transform group-data-selected:scale-100 group-data-disabled:bg-muted forced-colors:bg-[Highlight] motion-reduce:transition-none` })
			}), (0, u.jsx)(`span`, {
				className: `min-w-0 break-words`,
				children: t
			})]
		}), a ? (0, u.jsx)(e, {
			slot: `description`,
			className: `pl-6.5 text-caption break-words text-muted`,
			children: a
		}) : null]
	});
}
function f({ label: e, description: n, errorMessage: r, status: a, requiredLabel: c, optionalLabel: d, orientation: f = `vertical`, children: p, className: m, ...h }) {
	return (0, u.jsxs)(t, {
		...h,
		orientation: f,
		className: i(`flex min-w-0 flex-col gap-1.5`, m),
		children: [
			(0, u.jsx)(s, {
				isRequired: h.isRequired,
				requiredLabel: c,
				optionalLabel: d,
				children: e
			}),
			(0, u.jsx)(`div`, {
				className: i(`flex gap-x-5 gap-y-1`, f === `horizontal` ? `flex-row flex-wrap` : `flex-col`),
				children: p
			}),
			(0, u.jsx)(o, {
				description: n,
				status: a
			}),
			(0, u.jsx)(l, { children: r })
		]
	});
}
export { d as n, f as t };
