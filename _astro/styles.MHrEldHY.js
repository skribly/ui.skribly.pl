import { g as e } from "./createLucideIcon.npgQlVHx.js";
import { t } from "./Text.DxhsPAdy.js";
import { n } from "./useFormReset.B5f8O4ea.js";
import { n as r, t as i } from "./jsx-runtime.yrTYNGQT.js";
import { t as a } from "./circle-check.CWwdJPsz.js";
import { t as o } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as s } from "./info.D9DvH9cK.js";
import { t as c } from "./triangle-exclamation-point.BJJ-nXau.js";
var l = i(), u = {
	ok: a,
	info: s,
	warn: c,
	danger: o
}, d = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
};
function f({ isRequired: e, requiredLabel: t, optionalLabel: n }) {
	return e ? t ? (0, l.jsx)(`span`, {
		"aria-hidden": `true`,
		className: `ml-1.5 font-normal text-muted`,
		children: t
	}) : (0, l.jsx)(`span`, {
		"aria-hidden": `true`,
		className: `ml-0.5 text-danger`,
		children: `*`
	}) : n ? (0, l.jsxs)(l.Fragment, { children: [` `, (0, l.jsx)(`span`, {
		className: `ml-1 font-normal text-muted`,
		children: n
	})] }) : null;
}
function p({ children: t, elementType: n, className: i, ...a }) {
	return (0, l.jsxs)(e, {
		...n ? { elementType: n } : {},
		className: r(`w-fit text-caption font-medium text-fg`, i),
		children: [(0, l.jsx)(`span`, { children: t }), (0, l.jsx)(f, { ...a })]
	});
}
function m({ status: e }) {
	let t = u[e.tone];
	return (0, l.jsxs)(`span`, {
		className: r(`flex items-start gap-1.5 font-medium`, d[e.tone]),
		children: [(0, l.jsx)(t, {
			"aria-hidden": `true`,
			className: `mt-px size-3.5 shrink-0`
		}), (0, l.jsx)(`span`, {
			className: `min-w-0 break-words`,
			children: e.message
		})]
	});
}
function h({ description: e, status: n, aside: i, asideIsOver: a = !1, className: o }) {
	return !e && !n && !i ? null : (0, l.jsxs)(t, {
		slot: `description`,
		elementType: `div`,
		className: r(`flex min-w-0 flex-col gap-1 text-caption break-words text-muted`, o),
		children: [e || i ? (0, l.jsxs)(`span`, {
			className: `flex items-start justify-between gap-3`,
			children: [
				(0, l.jsx)(`span`, {
					className: `min-w-0`,
					children: e
				}),
				` `,
				i ? (0, l.jsx)(`span`, {
					className: r(`shrink-0 tabular-nums`, a && `font-medium text-danger`),
					children: i
				}) : null
			]
		}) : null, n ? (0, l.jsx)(`output`, {
			className: `block`,
			children: (0, l.jsx)(m, { status: n })
		}) : null]
	});
}
function g({ children: e, className: t }) {
	return (0, l.jsx)(n, {
		className: r(`flex items-start gap-1.5 text-caption font-medium break-words text-danger`, t),
		children: (t) => (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(o, {
			"aria-hidden": `true`,
			className: `mt-px size-3.5 shrink-0`
		}), (0, l.jsx)(`span`, {
			className: `min-w-0`,
			children: typeof e == `function` ? e(t) : e ?? t.validationErrors.join(` `)
		})] })
	});
}
var _ = `flex min-w-0 flex-col gap-1.5`, v = `h-control-md w-full min-w-0 rounded-md border border-border-strong bg-input px-2.5 text-base text-fg transition-colors placeholder:text-muted sm:text-body data-hovered:border-muted data-invalid:border-danger aria-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted read-only:bg-sunken`, y = `flex h-control-md w-full min-w-0 items-center rounded-md border border-border-strong bg-input text-fg transition-colors hover:border-muted has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-offset-(--sk-focus-offset) has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid has-[[aria-invalid=true]]:border-danger data-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted`, b = `h-full min-w-0 flex-1 bg-transparent px-2.5 text-base text-fg outline-none placeholder:text-muted sm:text-body disabled:cursor-not-allowed`, x = `group-data-focus-visible:outline-(length:--sk-focus-width) group-data-focus-visible:outline-offset-(--sk-focus-offset) group-data-focus-visible:outline-focus group-data-focus-visible:outline-solid`, S = `outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-(--sk-focus-offset) data-focus-visible:outline-focus data-focus-visible:outline-solid`, C = `max-w-[calc(100vw-1.5rem)] overflow-auto rounded-lg border border-border bg-surface text-fg shadow-lg outline-none data-entering:animate-fade`, w = `group flex min-h-control-md cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-body text-fg outline-none select-none data-hovered:bg-hover data-focused:bg-hover data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus data-focus-visible:outline-solid data-selected:font-medium data-disabled:cursor-not-allowed data-disabled:text-muted`, T = `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm text-muted transition-colors outline-none data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-disabled:cursor-not-allowed data-disabled:opacity-50`;
export { b as a, T as c, h as d, p as f, x as i, v as l, m, S as n, w as o, f as p, y as r, C as s, _ as t, g as u };
