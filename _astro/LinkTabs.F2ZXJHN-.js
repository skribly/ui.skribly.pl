import { t as e } from "./Link.B8StT9b2.js";
import { _ as t, g as n } from "./useOverflow.Dq483xd0.js";
import { t as r } from "./ChipCount.Bd_9T2X6.js";
var i = `flex min-w-0 max-w-full gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:thin]`, a = `group relative inline-flex min-w-6 cursor-pointer items-center gap-2 px-3 text-body font-medium text-muted transition-colors focus-visible:-outline-offset-2 [&_svg]:size-4 [&_svg]:shrink-0`, o = `h-control-md shrink-0 rounded-t-md whitespace-nowrap`, s = `min-h-control-md w-full justify-start rounded-r-md py-1.5 text-left`, c = `hover:text-fg hover:bg-hover data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-sunken data-selected:text-fg aria-[current=page]:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent aria-disabled:cursor-not-allowed aria-disabled:opacity-50`, l = `pointer-events-none absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent forced-color-adjust-none forced-colors:bg-[Highlight]`, u = `pointer-events-none absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-accent forced-color-adjust-none forced-colors:bg-[Highlight]`, d = n();
function f({ label: n, items: s, currentId: u, className: f }) {
	return (0, d.jsx)(`nav`, {
		"aria-label": n,
		className: t(`min-w-0 border-b border-border`, f),
		children: (0, d.jsx)(`ul`, {
			className: t(i, `m-0 list-none p-0`),
			children: s.map((n) => {
				let i = n.id === u;
				return (0, d.jsx)(`li`, {
					className: `flex shrink-0`,
					children: (0, d.jsxs)(e, {
						href: n.href,
						...i ? { "aria-current": `page` } : {},
						...n.isDisabled ? { isDisabled: !0 } : {},
						className: t(a, c, o, `no-underline`),
						children: [
							n.icon,
							(0, d.jsx)(`span`, { children: n.label }),
							n.count === void 0 ? null : ` `,
							n.count === void 0 ? null : (0, d.jsx)(r, {
								value: n.count,
								...n.countLabel === void 0 ? {} : { label: n.countLabel }
							}),
							i ? (0, d.jsx)(`span`, {
								"aria-hidden": `true`,
								className: l
							}) : null
						]
					})
				}, n.id);
			})
		})
	});
}
export { c as a, u as c, l as i, a as n, i as o, o as r, s, f as t };
