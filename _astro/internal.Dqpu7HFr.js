import { I as e, L as t, j as n, z as r } from "./doc.C_PtMNUB.js";
import { t as i } from "./Checkbox.TwqnTrT7.js";
var a = e(), o = `animate-spin motion-reduce:animate-none [.a11y-reduce-motion_&]:animate-none`;
function s({ kind: e, children: r, className: i }) {
	return e === `loading` ? (0, a.jsxs)(`output`, {
		className: t(`flex items-center justify-center gap-2 px-4 py-8 text-body text-muted`, i),
		children: [(0, a.jsx)(n, {
			name: `status.loading`,
			"aria-hidden": `true`,
			className: t(`size-4 shrink-0`, o)
		}), (0, a.jsx)(`span`, { children: r })]
	}) : e === `error` ? (0, a.jsxs)(`div`, {
		role: `alert`,
		className: t(`flex items-center justify-center gap-2 px-4 py-8 text-body font-medium text-danger`, i),
		children: [(0, a.jsx)(n, {
			name: `status.error`,
			"aria-hidden": `true`,
			className: `size-4 shrink-0`
		}), (0, a.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: r
		})]
	}) : (0, a.jsxs)(`div`, {
		className: t(`flex flex-col items-center justify-center gap-2 px-4 py-8 text-center text-body text-muted`, i),
		children: [(0, a.jsx)(n, {
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
function l({ isSelected: e, isIndeterminate: r, isDisabled: i }) {
	return (0, a.jsx)(`span`, {
		"aria-hidden": `true`,
		className: t(`grid size-4 place-items-center rounded-sm border transition-colors`, e || r ? `border-accent bg-accent text-accent-fg` : `border-border-strong bg-input`, i && `opacity-50`),
		children: r ? (0, a.jsx)(n, {
			name: `action.remove`,
			className: `size-3`,
			strokeWidth: 3
		}) : e ? (0, a.jsx)(n, {
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
function d({ label: e }) {
	return (0, a.jsx)(r, {
		slot: `drag`,
		...e === void 0 ? {} : { "aria-label": e },
		className: `inline-grid size-6 shrink-0 cursor-grab place-items-center rounded-sm text-muted outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-hovered:text-fg data-pressed:cursor-grabbing`,
		children: (0, a.jsx)(n, {
			name: `action.drag`,
			"aria-hidden": `true`,
			className: `size-4`
		})
	});
}
var f = `outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus`, p = `data-selected:bg-selected data-selected:shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`;
export { c as a, f as i, d as n, p as o, u as r, o as s, s as t };
