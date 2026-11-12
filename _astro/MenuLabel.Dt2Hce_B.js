import { a as e, c as t, o as n, s as r, u as i } from "./Dialog.BHaijp-q.js";
import { s as a } from "./useLoadMoreSentinel.DKpPMiER.js";
import { t as o } from "./Keyboard.qx6AryGY.js";
import { n as s, t as c } from "./jsx-runtime.yrTYNGQT.js";
import { n as l, r as u, t as d } from "./portal.-REG5w-J.js";
var f = c();
function p({ trigger: n, children: r, emptyLabel: a, placement: o = `bottom end`, isOpen: c, defaultOpen: p, onOpenChange: m, container: h, className: g, ..._ }) {
	let v = a === void 0 ? {} : { renderEmptyState: () => (0, f.jsx)(`p`, {
		className: `px-2.5 py-2 text-caption text-muted`,
		children: a
	}) };
	return (0, f.jsxs)(e, {
		...l(c, p, m),
		children: [n, (0, f.jsx)(i, {
			...u(h),
			placement: o,
			offset: 6,
			containerPadding: 12,
			className: s(d, `z-(--sk-z-modal) min-w-48 max-w-[min(20rem,calc(100vw-1.5rem))] overflow-y-auto`, g),
			children: (0, f.jsx)(t, {
				..._,
				...v,
				className: `flex flex-col p-1 outline-none`,
				children: r
			})
		})]
	});
}
var m = `group/item flex min-h-control-sm cursor-default items-center gap-2 rounded-md px-2.5 py-1.5 text-body outline-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focused:bg-[Highlight] forced-colors:data-focused:text-[HighlightText]`, h = {
	default: `text-fg data-focused:bg-hover data-pressed:bg-selected`,
	danger: `text-danger data-focused:bg-danger-soft data-pressed:bg-danger-soft`
};
function g({ children: e, description: t, icon: n, shortcut: r }) {
	return (0, f.jsxs)(f.Fragment, { children: [
		n ? (0, f.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 items-center justify-center text-muted group-data-[focused]/item:text-current`,
			children: n
		}) : null,
		(0, f.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 flex-col`,
			children: [(0, f.jsx)(`span`, {
				className: `[overflow-wrap:anywhere]`,
				children: e
			}), t ? (0, f.jsxs)(f.Fragment, { children: [` `, (0, f.jsx)(`span`, {
				className: `text-caption text-muted [overflow-wrap:anywhere]`,
				children: t
			})] }) : null]
		}),
		r ? (0, f.jsx)(o, {
			className: `ml-3 shrink-0 font-sans text-caption text-muted`,
			children: r
		}) : null
	] });
}
function _({ children: e, description: t, icon: r, shortcut: i, tone: a = `default`, className: o, textValue: c, ...l }) {
	return (0, f.jsx)(n, {
		...l,
		...c === void 0 ? typeof e == `string` ? { textValue: e } : {} : { textValue: c },
		className: s(m, h[a], o),
		children: (0, f.jsx)(g, {
			...t === void 0 ? {} : { description: t },
			...r === void 0 ? {} : { icon: r },
			...i === void 0 ? {} : { shortcut: i },
			children: e
		})
	});
}
function v({ label: e, children: t, className: n, ...i }) {
	return (0, f.jsxs)(r, {
		...i,
		className: s(`flex flex-col [&:not(:first-child)]:mt-1 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-border [&:not(:first-child)]:pt-1`, n),
		children: [(0, f.jsx)(a, {
			className: `px-2.5 pt-1.5 pb-1 text-label font-semibold text-muted uppercase`,
			children: e
		}), t]
	});
}
export { h as a, m as i, _ as n, p as o, g as r, v as t };
