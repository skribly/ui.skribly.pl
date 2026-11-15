import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { I as t, L as n, j as r, z as i } from "./doc.C_PtMNUB.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { t as o } from "./Link.DGRKZkR4.js";
var s = e(a(), 1);
function c(e, t, n = 1) {
	if (t <= n * 2 + 5) return Array.from({ length: Math.max(t, 0) }, (e, t) => t + 1);
	let r = Math.max(2, Math.min(e - n, t - n * 2 - 2)), i = Math.min(t - 1, Math.max(e + n, n * 2 + 3)), a = Array.from({ length: i - r + 1 }, (e, t) => r + t);
	return [
		1,
		...r > 2 ? [`gap-start`] : [],
		...a,
		...i < t - 1 ? [`gap-end`] : [],
		t
	];
}
var l = t(), u = `inline-flex h-control-sm min-w-control-sm pointer-coarse:h-11 pointer-coarse:min-w-11 cursor-pointer items-center justify-center gap-1 rounded-md border border-border-strong bg-surface px-2 text-caption font-medium text-fg no-underline transition-colors data-hovered:bg-hover data-pressed:bg-sunken data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 [&_svg]:size-4`, d = `aria-[current=page]:border-accent aria-[current=page]:bg-accent aria-[current=page]:text-accent-fg aria-[current=page]:font-semibold forced-colors:aria-[current=page]:border-2 forced-colors:aria-[current=page]:border-[Highlight]`;
function f({ page: e, getHref: t, onChange: n, isDisabled: r = !1, isCurrent: a = !1, label: c, rel: u, className: d, children: f }) {
	let p = (0, s.useCallback)((t) => n?.(e), [n, e]), m = {
		...c === void 0 ? {} : { "aria-label": c },
		...a ? { "aria-current": `page` } : {},
		className: d
	};
	return t ? (0, l.jsx)(o, {
		...m,
		...r ? { isDisabled: !0 } : {
			href: t(e),
			onPress: p
		},
		...u ? { rel: u } : {},
		children: f
	}) : (0, l.jsx)(i, {
		...m,
		isDisabled: r,
		onPress: p,
		children: f
	});
}
function p({ label: e, page: t, pageCount: i, getHref: a, onChange: o, previousLabel: s, nextLabel: p, firstLabel: m, lastLabel: h, pageLabel: g, statusLabel: _, summary: v, siblings: y = 1, className: b }) {
	let x = c(t, i, y);
	return (0, l.jsxs)(`nav`, {
		"aria-label": e,
		className: n(`@container flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 text-caption`, b),
		children: [v ? (0, l.jsx)(`p`, {
			className: `m-0 text-muted`,
			children: v
		}) : null, (0, l.jsxs)(`div`, {
			className: `flex items-center gap-1`,
			children: [
				m === void 0 ? null : (0, l.jsx)(f, {
					page: 1,
					getHref: a,
					onChange: o,
					isDisabled: t <= 1,
					label: m,
					className: n(u, `@md:hidden`),
					children: (0, l.jsx)(r, {
						name: `chevron.double-left`,
						"aria-hidden": `true`
					})
				}),
				(0, l.jsxs)(f, {
					page: t - 1,
					getHref: a,
					onChange: o,
					isDisabled: t <= 1,
					rel: `prev`,
					className: u,
					children: [(0, l.jsx)(r, {
						name: `chevron.left`,
						"aria-hidden": `true`
					}), (0, l.jsx)(`span`, {
						className: `sr-only @sm:not-sr-only`,
						children: s
					})]
				}),
				(0, l.jsx)(`ul`, {
					className: `m-0 hidden list-none items-center gap-1 p-0 @md:flex`,
					children: x.map((e) => typeof e == `number` ? (0, l.jsx)(`li`, { children: (0, l.jsx)(f, {
						page: e,
						getHref: a,
						onChange: o,
						isCurrent: e === t,
						label: g(e),
						className: n(u, d),
						children: e
					}) }, e) : (0, l.jsx)(`li`, {
						"aria-hidden": `true`,
						className: `inline-grid min-w-6 place-items-center text-muted`,
						children: `…`
					}, e))
				}),
				(0, l.jsx)(`p`, {
					"aria-live": `polite`,
					className: `m-0 px-2 font-medium whitespace-nowrap text-fg @md:hidden`,
					children: _(t, i)
				}),
				(0, l.jsxs)(f, {
					page: t + 1,
					getHref: a,
					onChange: o,
					isDisabled: t >= i,
					rel: `next`,
					className: u,
					children: [(0, l.jsx)(`span`, {
						className: `sr-only @sm:not-sr-only`,
						children: p
					}), (0, l.jsx)(r, {
						name: `chevron.right`,
						"aria-hidden": `true`
					})]
				}),
				h === void 0 ? null : (0, l.jsx)(f, {
					page: i,
					getHref: a,
					onChange: o,
					isDisabled: t >= i,
					label: h,
					className: n(u, `@md:hidden`),
					children: (0, l.jsx)(r, {
						name: `chevron.double-right`,
						"aria-hidden": `true`
					})
				})
			]
		})]
	});
}
export { p as t };
