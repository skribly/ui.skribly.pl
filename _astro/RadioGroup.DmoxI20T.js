import { I as e, L as t } from "./doc.C_PtMNUB.js";
import { t as n } from "./Text.3KJW7jIs.js";
import { n as r, r as i, t as a } from "./RadioGroup.D4jkgPTw.js";
import { d as o, f as s, i as c, u as l } from "./styles.Dduhw011.js";
var u = e();
function d({ children: e, description: r, className: o, ...s }) {
	return (0, u.jsxs)(a, {
		...s,
		className: t(`flex min-w-0 flex-col gap-0.5`, o),
		children: [(0, u.jsxs)(i, {
			className: `group flex min-h-6 w-fit max-w-full cursor-default items-start gap-2.5 py-0.5 text-body text-fg data-disabled:cursor-not-allowed data-disabled:text-muted`,
			children: [(0, u.jsx)(`span`, {
				"aria-hidden": `true`,
				className: t(`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border border-border-strong bg-input transition-colors group-data-hovered:border-muted group-data-selected:border-accent group-data-invalid:border-danger group-data-disabled:border-border group-data-disabled:bg-sunken`, c),
				children: (0, u.jsx)(`span`, { className: `size-2 scale-0 rounded-full bg-accent transition-transform group-data-selected:scale-100 group-data-disabled:bg-muted forced-colors:bg-[Highlight] motion-reduce:transition-none` })
			}), (0, u.jsx)(`span`, {
				className: `min-w-0 break-words`,
				children: e
			})]
		}), r ? (0, u.jsx)(n, {
			slot: `description`,
			className: `pl-6.5 text-caption break-words text-muted`,
			children: r
		}) : null]
	});
}
function f({ label: e, description: n, errorMessage: i, status: a, requiredLabel: c, optionalLabel: d, orientation: f = `vertical`, children: p, className: m, ...h }) {
	return (0, u.jsxs)(r, {
		...h,
		orientation: f,
		className: t(`flex min-w-0 flex-col gap-1.5`, m),
		children: [
			(0, u.jsx)(s, {
				isRequired: h.isRequired,
				requiredLabel: c,
				optionalLabel: d,
				children: e
			}),
			(0, u.jsx)(`div`, {
				className: t(`flex gap-x-5 gap-y-1`, f === `horizontal` ? `flex-row flex-wrap` : `flex-col`),
				children: p
			}),
			(0, u.jsx)(o, {
				description: n,
				status: a
			}),
			(0, u.jsx)(l, { children: i })
		]
	});
}
export { d as n, f as t };
