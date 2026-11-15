import { A as e, F as t, I as n, Z as r, j as i } from "./doc.DoLlUurT.js";
import { t as a } from "./Text.CWB1nGTv.js";
import { n as o } from "./useFormReset.ClC-r4N4.js";
var s = t(), c = {
	ok: i(`status.ok`),
	info: i(`status.info`),
	warn: i(`status.warning`),
	danger: i(`status.error`)
}, l = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
};
function u({ isRequired: e, requiredLabel: t, optionalLabel: n }) {
	return e ? t ? (0, s.jsx)(`span`, {
		"aria-hidden": `true`,
		className: `ml-1.5 font-normal text-muted`,
		children: t
	}) : (0, s.jsx)(`span`, {
		"aria-hidden": `true`,
		className: `ml-0.5 text-danger`,
		children: `*`
	}) : n ? (0, s.jsxs)(s.Fragment, { children: [` `, (0, s.jsx)(`span`, {
		className: `ml-1 font-normal text-muted`,
		children: n
	})] }) : null;
}
function d({ children: e, elementType: t, className: i, ...a }) {
	return (0, s.jsxs)(r, {
		...t ? { elementType: t } : {},
		className: n(`w-fit text-caption font-medium text-fg`, i),
		children: [(0, s.jsx)(`span`, { children: e }), (0, s.jsx)(u, { ...a })]
	});
}
function f({ status: e }) {
	let t = c[e.tone];
	return (0, s.jsxs)(`span`, {
		className: n(`flex items-start gap-1.5 font-medium`, l[e.tone]),
		children: [(0, s.jsx)(t, {
			"aria-hidden": `true`,
			className: `mt-px size-3.5 shrink-0`
		}), (0, s.jsx)(`span`, {
			className: `min-w-0 break-words`,
			children: e.message
		})]
	});
}
function p({ description: e, status: t, aside: r, asideIsOver: i = !1, className: o }) {
	return !e && !t && !r ? null : (0, s.jsxs)(a, {
		slot: `description`,
		elementType: `div`,
		className: n(`flex min-w-0 flex-col gap-1 text-caption break-words text-muted`, o),
		children: [e || r ? (0, s.jsxs)(`span`, {
			className: `flex items-start justify-between gap-3`,
			children: [
				(0, s.jsx)(`span`, {
					className: `min-w-0`,
					children: e
				}),
				` `,
				r ? (0, s.jsx)(`span`, {
					className: n(`shrink-0 tabular-nums`, i && `font-medium text-danger`),
					children: r
				}) : null
			]
		}) : null, t ? (0, s.jsx)(`output`, {
			className: `block`,
			children: (0, s.jsx)(f, { status: t })
		}) : null]
	});
}
function m({ children: t, className: r }) {
	return (0, s.jsx)(o, {
		className: n(`flex items-start gap-1.5 text-caption font-medium break-words text-danger`, r),
		children: (n) => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(e, {
			name: `status.error`,
			"aria-hidden": `true`,
			className: `mt-px size-3.5 shrink-0`
		}), (0, s.jsx)(`span`, {
			className: `min-w-0`,
			children: typeof t == `function` ? t(n) : t ?? n.validationErrors.join(` `)
		})] })
	});
}
var h = `flex min-w-0 flex-col gap-1.5`, g = `h-control-md w-full min-w-0 rounded-md border border-border-strong bg-input px-2.5 text-base text-fg transition-colors placeholder:text-muted sm:text-body data-hovered:border-muted data-invalid:border-danger aria-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted read-only:bg-sunken`, _ = `flex h-control-md w-full min-w-0 items-center rounded-md border border-border-strong bg-input text-fg transition-colors hover:border-muted has-[input:focus-visible]:outline-(length:--sk-focus-width) has-[input:focus-visible]:outline-offset-(--sk-focus-offset) has-[input:focus-visible]:outline-focus has-[input:focus-visible]:outline-solid has-[[aria-invalid=true]]:border-danger data-invalid:border-danger data-disabled:cursor-not-allowed data-disabled:border-border data-disabled:bg-sunken data-disabled:text-muted`, v = `h-full min-w-0 flex-1 bg-transparent px-2.5 text-base text-fg outline-none placeholder:text-muted sm:text-body disabled:cursor-not-allowed`, y = `group-data-focus-visible:outline-(length:--sk-focus-width) group-data-focus-visible:outline-offset-(--sk-focus-offset) group-data-focus-visible:outline-focus group-data-focus-visible:outline-solid`, b = `outline-none data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-offset-(--sk-focus-offset) data-focus-visible:outline-focus data-focus-visible:outline-solid`, x = `max-w-[calc(100vw-1.5rem)] overflow-auto rounded-lg border border-border bg-surface text-fg shadow-lg outline-none data-entering:animate-fade`, S = `group flex min-h-control-md cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-body text-fg outline-none select-none data-hovered:bg-hover data-focused:bg-hover data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:-outline-offset-2 data-focus-visible:outline-focus data-focus-visible:outline-solid data-selected:font-medium data-disabled:cursor-not-allowed data-disabled:text-muted`, C = `inline-grid size-6 shrink-0 cursor-default place-items-center rounded-sm text-muted transition-colors outline-none data-hovered:bg-hover data-hovered:text-fg data-pressed:bg-selected data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-focus-visible:outline-solid data-disabled:cursor-not-allowed data-disabled:opacity-50`;
export { v as a, C as c, p as d, d as f, y as i, g as l, f as m, b as n, S as o, u as p, _ as r, x as s, h as t, m as u };
