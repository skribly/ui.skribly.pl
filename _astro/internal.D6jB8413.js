import { r as e } from "./createLucideIcon.npgQlVHx.js";
import { t } from "./Checkbox.BCm1SjuK.js";
import { t as n } from "./check.CUpC8LgP.js";
import { t as r } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as i } from "./grip-vertical.C2vK4xYQ.js";
import { t as a } from "./inbox.DqDi_P3k.js";
import { t as o } from "./loader-circle.ja8phR5Y.js";
import { t as s } from "./minus.D36Muiio.js";
import { n as c, t as l } from "./jsx-runtime.yrTYNGQT.js";
var u = l(), d = `animate-spin motion-reduce:animate-none [.a11y-reduce-motion_&]:animate-none`;
function f({ kind: e, children: t, className: n }) {
	return e === `loading` ? (0, u.jsxs)(`output`, {
		className: c(`flex items-center justify-center gap-2 px-4 py-8 text-body text-muted`, n),
		children: [(0, u.jsx)(o, {
			"aria-hidden": `true`,
			className: c(`size-4 shrink-0`, d)
		}), (0, u.jsx)(`span`, { children: t })]
	}) : e === `error` ? (0, u.jsxs)(`div`, {
		role: `alert`,
		className: c(`flex items-center justify-center gap-2 px-4 py-8 text-body font-medium text-danger`, n),
		children: [(0, u.jsx)(r, {
			"aria-hidden": `true`,
			className: `size-4 shrink-0`
		}), (0, u.jsx)(`span`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: t
		})]
	}) : (0, u.jsxs)(`div`, {
		className: c(`flex flex-col items-center justify-center gap-2 px-4 py-8 text-center text-body text-muted`, n),
		children: [(0, u.jsx)(a, {
			"aria-hidden": `true`,
			className: `size-5 shrink-0`
		}), (0, u.jsx)(`div`, {
			className: `min-w-0 [overflow-wrap:anywhere]`,
			children: t
		})]
	});
}
function p({ emptyState: e, isLoading: t, loadingLabel: n, error: r }) {
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
function m({ isSelected: e, isIndeterminate: t, isDisabled: r }) {
	return (0, u.jsx)(`span`, {
		"aria-hidden": `true`,
		className: c(`grid size-4 place-items-center rounded-sm border transition-colors`, e || t ? `border-accent bg-accent text-accent-fg` : `border-border-strong bg-input`, r && `opacity-50`),
		children: t ? (0, u.jsx)(s, {
			className: `size-3`,
			strokeWidth: 3
		}) : e ? (0, u.jsx)(n, {
			className: `size-3`,
			strokeWidth: 3
		}) : null
	});
}
function h({ label: e }) {
	return (0, u.jsx)(t, {
		slot: `selection`,
		...e === void 0 ? {} : { "aria-label": e },
		className: `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm outline-hidden data-disabled:cursor-not-allowed data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:[&>span]:border-accent`,
		children: m
	});
}
function g({ label: t }) {
	return (0, u.jsx)(e, {
		slot: `drag`,
		...t === void 0 ? {} : { "aria-label": t },
		className: `inline-grid size-6 shrink-0 cursor-grab place-items-center rounded-sm text-muted outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-hovered:text-fg data-pressed:cursor-grabbing`,
		children: (0, u.jsx)(i, {
			"aria-hidden": `true`,
			className: `size-4`
		})
	});
}
var _ = `outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus`, v = `data-selected:bg-selected data-selected:shadow-[inset_3px_0_0_var(--sk-accent)] forced-colors:data-selected:bg-[Highlight] forced-colors:data-selected:text-[HighlightText]`;
export { p as a, _ as i, g as n, v as o, h as r, d as s, f as t };
