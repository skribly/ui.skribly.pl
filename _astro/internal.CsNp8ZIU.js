import { A as e, F as t, I as n, R as r } from "./doc.DoLlUurT.js";
import { t as i } from "./Checkbox.64MvRCxA.js";
var a = t(), o = `animate-spin motion-reduce:animate-none [.a11y-reduce-motion_&]:animate-none`;
function s({ kind: t, children: r, className: i }) {
	return t === `loading` ? (0, a.jsxs)(`output`, {
		className: n(`flex items-center justify-center gap-2 px-4 py-8 text-body text-muted`, i),
		children: [(0, a.jsx)(e, {
			name: `status.loading`,
			"aria-hidden": `true`,
			className: n(`size-4 shrink-0`, o)
		}), (0, a.jsx)(`span`, { children: r })]
	}) : t === `error` ? (0, a.jsxs)(`div`, {
		role: `alert`,
		className: n(`flex items-center justify-center gap-2 px-4 py-8 text-body font-medium text-danger`, i),
		children: [(0, a.jsx)(e, {
			name: `status.error`,
			"aria-hidden": `true`,
			className: `size-4 shrink-0`
		}), (0, a.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: r
		})]
	}) : (0, a.jsxs)(`div`, {
		className: n(`flex flex-col items-center justify-center gap-2 px-4 py-8 text-center text-body text-muted`, i),
		children: [(0, a.jsx)(e, {
			name: `nav.inbox`,
			"aria-hidden": `true`,
			className: `size-5 shrink-0`
		}), (0, a.jsx)(`div`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: r
		})]
	});
}
function c({ emptyState: e, isLoading: t, loadingLabel: n, error: r }) {
	return r != null && r !== !1 ? {
		kind: `error`,
		content: r
	} : t ? {
		kind: `loading`,
		content: n
	} : e == null ? null : {
		kind: `empty`,
		content: e
	};
}
function l({ isSelected: t, isIndeterminate: r, isDisabled: i }) {
	return (0, a.jsx)(`span`, {
		"aria-hidden": `true`,
		className: n(`grid size-4 place-items-center rounded-sm border transition-colors`, t || r ? `border-accent bg-accent text-accent-fg` : `border-border-strong bg-input`, i && `opacity-50`),
		children: r ? (0, a.jsx)(e, {
			name: `action.remove`,
			className: `size-3`,
			strokeWidth: 3
		}) : t ? (0, a.jsx)(e, {
			name: `action.check`,
			className: `size-3`,
			strokeWidth: 3
		}) : null
	});
}
function u({ label: e }) {
	return (0, a.jsx)(i, {
		slot: `selection`,
		...e === void 0 ? {} : { "aria-label": e },
		className: `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm outline-hidden data-disabled:cursor-not-allowed data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:[&>span]:border-accent`,
		children: l
	});
}
function d({ label: t }) {
	return (0, a.jsx)(r, {
		slot: `drag`,
		...t === void 0 ? {} : { "aria-label": t },
		className: `inline-grid size-6 shrink-0 cursor-grab place-items-center rounded-sm text-muted outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-hovered:text-fg data-pressed:cursor-grabbing`,
		children: (0, a.jsx)(e, {
			name: `action.drag`,
			"aria-hidden": `true`,
			className: `size-4`
		})
	});
}
var f = `outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus`, p = `data-selected:bg-selected data-selected:shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`;
export { c as a, f as i, d as n, p as o, u as r, o as s, s as t };
