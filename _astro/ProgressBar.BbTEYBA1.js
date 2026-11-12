import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { g as n, s as r } from "./createLucideIcon.npgQlVHx.js";
import { n as i, t as a } from "./jsx-runtime.yrTYNGQT.js";
import { D as o, w as s } from "./doc.D2PtmWN6.js";
var c = e(t(), 1), l = a(), u = {
	accent: `bg-accent`,
	ok: `bg-ok`,
	info: `bg-info`,
	warn: `bg-warn`,
	danger: `bg-danger`
};
function d({ percentage: e, tone: t, size: n, busy: r = !1 }) {
	let a = (0, c.useMemo)(() => ({ width: `${Math.min(100, Math.max(0, e))}%` }), [e]);
	return (0, l.jsx)(`span`, {
		className: i(`relative block w-full overflow-hidden rounded-full border border-transparent bg-hover`, n === `md` ? `h-2` : `h-1.5`),
		children: (0, l.jsx)(`span`, {
			style: a,
			className: i(`block h-full rounded-full transition-[width] duration-(--sk-duration-slow) ease-out forced-colors:bg-[Highlight] forced-colors:forced-color-adjust-none`, u[t], r && `animate-pulse motion-reduce:animate-none in-[.a11y-reduce-motion]:animate-none`)
		})
	});
}
function f({ id: e, tone: t, children: n }) {
	return (0, l.jsxs)(`span`, {
		id: e,
		className: i(`inline-flex items-center gap-1 font-medium`, t === `accent` ? `text-accent-text` : o[t]),
		children: [t === `accent` ? null : (0, l.jsx)(s, {
			tone: t,
			className: `size-3.5`
		}), n]
	});
}
function p({ label: e, hideLabel: t = !1, description: a, tone: o = `accent`, status: s, showValue: u = !0, size: p = `md`, className: m, ...h }) {
	let g = (0, c.useId)(), _ = (0, c.useId)(), v = [
		h[`aria-describedby`],
		s ? g : null,
		a ? _ : null
	].filter(Boolean).join(` `);
	return (0, l.jsx)(r, {
		...h,
		...v ? { "aria-describedby": v } : {},
		className: i(`flex w-full min-w-0 flex-col gap-1.5 text-body text-fg`, m),
		children: ({ percentage: r, valueText: c, isIndeterminate: m }) => (0, l.jsxs)(l.Fragment, { children: [
			(0, l.jsxs)(`span`, {
				className: i(`flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5`, t && !s && (m || !u) && `sr-only`),
				children: [(0, l.jsx)(n, {
					className: i(`min-w-0 font-medium wrap-break-word`, t && `sr-only`),
					children: e
				}), (0, l.jsxs)(`span`, {
					className: `ms-auto inline-flex flex-wrap items-baseline gap-x-2 text-caption text-muted tabular-nums`,
					children: [s ? (0, l.jsx)(f, {
						id: g,
						tone: o,
						children: s
					}) : null, u && !m ? (0, l.jsx)(`span`, {
						"aria-hidden": !0,
						children: c
					}) : null]
				})]
			}),
			(0, l.jsx)(d, {
				percentage: m ? 40 : r ?? 0,
				tone: o,
				size: p,
				busy: m
			}),
			a ? (0, l.jsx)(`span`, {
				id: _,
				className: `text-caption text-muted wrap-break-word`,
				children: a
			}) : null
		] })
	});
}
export { f as n, d as r, p as t };
