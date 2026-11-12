import { t as e } from "./check.CUpC8LgP.js";
import { t } from "./minus.D36Muiio.js";
import { i as n, r } from "./Checkbox.BCm1SjuK.js";
import { n as i, t as a } from "./jsx-runtime.yrTYNGQT.js";
import { d as o, i as s, p as c, u as l } from "./styles.MHrEldHY.js";
var u = a();
function d({ children: a, description: d, errorMessage: f, status: p, requiredLabel: m, className: h, ...g }) {
	return (0, u.jsxs)(n, {
		...g,
		className: i(`flex min-w-0 flex-col gap-1`, h),
		children: [
			(0, u.jsxs)(r, {
				className: `group flex min-h-6 w-fit max-w-full cursor-default items-start gap-2.5 py-0.5 text-body text-fg data-disabled:cursor-not-allowed data-disabled:text-muted`,
				children: [(0, u.jsxs)(`span`, {
					"aria-hidden": `true`,
					className: i(`mt-0.5 grid size-4 shrink-0 place-items-center rounded-sm border border-border-strong bg-input text-accent-fg transition-colors group-data-hovered:border-muted group-data-pressed:scale-95 group-data-selected:border-accent group-data-selected:bg-accent group-data-indeterminate:border-accent group-data-indeterminate:bg-accent group-data-invalid:border-danger group-data-disabled:border-border group-data-disabled:bg-sunken group-data-disabled:text-muted motion-reduce:group-data-pressed:scale-100 forced-colors:group-data-selected:bg-[Highlight] forced-colors:group-data-indeterminate:bg-[Highlight]`, s),
					children: [(0, u.jsx)(e, {
						strokeWidth: 3,
						className: `hidden size-3 group-[[data-selected]:not([data-indeterminate])]:block forced-colors:text-[HighlightText]`
					}), (0, u.jsx)(t, {
						strokeWidth: 3,
						className: `hidden size-3 group-data-indeterminate:block forced-colors:text-[HighlightText]`
					})]
				}), (0, u.jsxs)(`span`, {
					className: `min-w-0 break-words`,
					children: [a, (0, u.jsx)(c, {
						isRequired: g.isRequired,
						requiredLabel: m
					})]
				})]
			}),
			(0, u.jsx)(o, {
				description: d,
				status: p,
				className: `pl-6.5`
			}),
			(0, u.jsx)(l, {
				className: `pl-6.5`,
				children: f
			})
		]
	});
}
export { d as t };
