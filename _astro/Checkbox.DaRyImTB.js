import { _ as e, d as t, g as n } from "./useOverflow.Dq483xd0.js";
import { i as r, r as i } from "./Checkbox.5YNEJrfk.js";
import { d as a, i as o, p as s, u as c } from "./styles.C2ztr1zV.js";
var l = n();
function u({ children: n, description: u, errorMessage: d, status: f, requiredLabel: p, className: m, ...h }) {
	return (0, l.jsxs)(r, {
		...h,
		className: e(`flex min-w-0 flex-col gap-1`, m),
		children: [
			(0, l.jsxs)(i, {
				className: `group flex min-h-6 w-fit max-w-full cursor-default items-start gap-2.5 py-0.5 text-body text-fg data-disabled:cursor-not-allowed data-disabled:text-muted`,
				children: [(0, l.jsxs)(`span`, {
					"aria-hidden": `true`,
					className: e(`mt-0.5 grid size-4 shrink-0 place-items-center rounded-sm border border-border-strong bg-input text-accent-fg transition-colors group-data-hovered:border-muted group-data-pressed:scale-95 group-data-selected:border-accent group-data-selected:bg-accent group-data-indeterminate:border-accent group-data-indeterminate:bg-accent group-data-invalid:border-danger group-data-disabled:border-border group-data-disabled:bg-sunken group-data-disabled:text-muted motion-reduce:group-data-pressed:scale-100 forced-colors:group-data-selected:bg-[Highlight] forced-colors:group-data-indeterminate:bg-[Highlight]`, o),
					children: [(0, l.jsx)(t, {
						name: `action.check`,
						strokeWidth: 3,
						className: `hidden size-3 group-[[data-selected]:not([data-indeterminate])]:block forced-colors:text-[HighlightText]`
					}), (0, l.jsx)(t, {
						name: `action.remove`,
						strokeWidth: 3,
						className: `hidden size-3 group-data-indeterminate:block forced-colors:text-[HighlightText]`
					})]
				}), (0, l.jsxs)(`span`, {
					className: `min-w-0 break-words`,
					children: [n, (0, l.jsx)(s, {
						isRequired: h.isRequired,
						requiredLabel: p
					})]
				})]
			}),
			(0, l.jsx)(a, {
				description: u,
				status: f,
				className: `pl-6.5`
			}),
			(0, l.jsx)(c, {
				className: `pl-6.5`,
				children: d
			})
		]
	});
}
export { u as t };
