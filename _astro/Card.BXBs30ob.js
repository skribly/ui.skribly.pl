import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, t as r } from "./jsx-runtime.yrTYNGQT.js";
var i = e(t(), 1), a = r(), o = (0, i.createContext)(null), s = {
	raised: `bg-surface shadow-sm`,
	flat: `bg-surface`,
	sunken: `bg-sunken`
}, c = {
	none: ``,
	sm: `p-3`,
	md: `p-4`
}, l = new Set([
	`section`,
	`article`,
	`aside`
]);
function u({ as: e = `div`, variant: t = `raised`, padding: r = `md`, className: u, children: d, ...f }) {
	let p = (0, i.useId)(), [m, h] = (0, i.useState)(null), g = (0, i.useCallback)((e) => (h(e), () => h((t) => t === e ? null : t)), []), _ = (0, i.useMemo)(() => ({
		titleId: p,
		register: g
	}), [p, g]), v = l.has(e) && m && !f[`aria-label`] && !f[`aria-labelledby`];
	return (0, a.jsx)(o.Provider, {
		value: _,
		children: (0, a.jsx)(e, {
			...f,
			...v ? { "aria-labelledby": m } : {},
			className: n(`min-w-0 rounded-lg border border-border text-fg`, s[t], c[r], u),
			children: d
		})
	});
}
function d({ actions: e, className: t, children: r, ...i }) {
	return (0, a.jsxs)(`div`, {
		...i,
		className: n(`flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-border px-4 py-3`, t),
		children: [(0, a.jsx)(`div`, {
			className: `min-w-0 flex-1`,
			children: r
		}), e ? (0, a.jsx)(`div`, {
			className: `flex flex-wrap items-center gap-2`,
			children: e
		}) : null]
	});
}
var f = {
	1: `h1`,
	2: `h2`,
	3: `h3`,
	4: `h4`,
	5: `h5`,
	6: `h6`
};
function p({ level: e = 2, icon: t, id: r, className: s, children: c, ...l }) {
	let u = (0, i.useContext)(o), d = r ?? u?.titleId, p = u?.register;
	(0, i.useEffect)(() => p && d ? p(d) : void 0, [p, d]);
	let m = f[e];
	return (0, a.jsxs)(m, {
		...l,
		...d ? { id: d } : {},
		className: n(`flex min-w-0 items-center gap-2 text-title font-semibold text-fg`, s),
		children: [t ? (0, a.jsx)(`span`, {
			"aria-hidden": `true`,
			className: `flex shrink-0 text-muted [&_svg]:size-4`,
			children: t
		}) : null, (0, a.jsx)(`span`, {
			className: `min-w-0 break-words`,
			children: c
		})]
	});
}
function m({ className: e, ...t }) {
	return (0, a.jsx)(`div`, {
		...t,
		className: n(`min-w-0 p-4 text-body`, e)
	});
}
var h = {
	start: `justify-start`,
	end: `justify-end`,
	between: `justify-between`
};
function g({ align: e = `end`, className: t, ...r }) {
	return (0, a.jsx)(`div`, {
		...r,
		className: n(`flex flex-wrap items-center gap-2 border-t border-border px-4 py-3`, h[e], t)
	});
}
export { p as a, d as i, m as n, g as r, u as t };
