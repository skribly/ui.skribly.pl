import { I as e, L as t } from "./doc.C_PtMNUB.js";
import { a as n, c as r, o as i, u as a } from "./Dialog.1Jdfd_U0.js";
import { t as o } from "./Keyboard.DA1lzqms.js";
import { n as s, r as c, t as l } from "./portal.-REG5w-J.js";
var u = e();
function d({ trigger: e, children: i, emptyLabel: o, placement: d = `bottom end`, isOpen: f, defaultOpen: p, onOpenChange: m, container: h, className: g, ..._ }) {
	let v = o === void 0 ? {} : { renderEmptyState: () => (0, u.jsx)(`p`, {
		className: `px-2.5 py-2 text-caption text-muted`,
		children: o
	}) };
	return (0, u.jsxs)(n, {
		...s(f, p, m),
		children: [e, (0, u.jsx)(a, {
			...c(h),
			placement: d,
			offset: 6,
			containerPadding: 12,
			className: t(l, `z-(--sk-z-modal) min-w-48 max-w-[min(20rem,calc(100vw-1.5rem))] overflow-y-auto`, g),
			children: (0, u.jsx)(r, {
				..._,
				...v,
				className: `flex flex-col p-1 outline-none`,
				children: i
			})
		})]
	});
}
var f = `group/item flex min-h-control-sm cursor-default items-center gap-2 rounded-md px-2.5 py-1.5 text-body outline-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2 data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus forced-colors:data-focused:bg-[Highlight] forced-colors:data-focused:text-[HighlightText]`, p = {
	default: `text-fg data-focused:bg-hover data-pressed:bg-selected`,
	danger: `text-danger data-focused:bg-danger-soft data-pressed:bg-danger-soft`
};
function m({ children: e, description: t, icon: n, shortcut: r }) {
	return (0, u.jsxs)(u.Fragment, { children: [
		n ? (0, u.jsx)(`span`, {
			"aria-hidden": !0,
			className: `flex size-4 shrink-0 items-center justify-center text-muted group-data-[focused]/item:text-current`,
			children: n
		}) : null,
		(0, u.jsxs)(`span`, {
			className: `flex min-w-0 flex-1 flex-col`,
			children: [(0, u.jsx)(`span`, {
				className: `[overflow-wrap:anywhere]`,
				children: e
			}), t ? (0, u.jsxs)(u.Fragment, { children: [` `, (0, u.jsx)(`span`, {
				className: `text-caption text-muted [overflow-wrap:anywhere]`,
				children: t
			})] }) : null]
		}),
		r ? (0, u.jsx)(o, {
			className: `ml-3 shrink-0 font-sans text-caption text-muted`,
			children: r
		}) : null
	] });
}
function h({ children: e, description: n, icon: r, shortcut: a, tone: o = `default`, className: s, textValue: c, ...l }) {
	return (0, u.jsx)(i, {
		...l,
		...c === void 0 ? typeof e == `string` ? { textValue: e } : {} : { textValue: c },
		className: t(f, p[o], s),
		children: (0, u.jsx)(m, {
			...n === void 0 ? {} : { description: n },
			...r === void 0 ? {} : { icon: r },
			...a === void 0 ? {} : { shortcut: a },
			children: e
		})
	});
}
export { d as a, p as i, m as n, f as r, h as t };
