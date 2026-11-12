import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { r as n, s as r } from "./createLucideIcon.npgQlVHx.js";
import { n as i, t as a } from "./jsx-runtime.yrTYNGQT.js";
var o = e(t(), 1), s = `outline-offset-(--sk-focus-offset) data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus`, c = `relative inline-flex max-w-full min-w-0 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border text-center font-medium leading-tight wrap-break-word no-underline select-none transition-[background-color,border-color,color,box-shadow,transform] duration-(--sk-duration-fast) ease-out data-pressed:translate-y-px motion-reduce:data-pressed:translate-y-0 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-pending:cursor-wait [&_svg]:shrink-0 forced-colors:data-disabled:border-[GrayText] forced-colors:data-disabled:text-[GrayText] forced-colors:data-disabled:opacity-100`, l = {
	primary: `border-transparent bg-accent text-accent-fg data-hovered:bg-accent-strong data-pressed:bg-accent-strong`,
	outline: `border-border-strong bg-surface text-fg data-hovered:bg-hover data-pressed:bg-selected`,
	ghost: `border-transparent bg-transparent text-fg data-hovered:bg-hover data-pressed:bg-selected`,
	danger: `border-danger bg-surface text-danger data-hovered:bg-danger-soft data-pressed:bg-danger-soft data-pressed:shadow-[inset_0_0_0_1px_var(--sk-danger)]`,
	"danger-solid": `border-transparent bg-danger text-danger-fg data-hovered:bg-[color-mix(in_oklab,var(--sk-danger)_86%,var(--sk-fg))] data-pressed:bg-[color-mix(in_oklab,var(--sk-danger)_78%,var(--sk-fg))]`,
	success: `border-transparent bg-ok text-ok-fg data-hovered:bg-[color-mix(in_oklab,var(--sk-ok)_86%,var(--sk-fg))] data-pressed:bg-[color-mix(in_oklab,var(--sk-ok)_78%,var(--sk-fg))]`,
	warning: `border-warn bg-warn-soft text-warn data-hovered:shadow-[inset_0_0_0_1px_var(--sk-warn)] data-pressed:shadow-[inset_0_0_0_2px_var(--sk-warn)]`
}, u = {
	sm: `min-h-control-sm px-2.5 py-1 text-caption [&_svg]:size-3.5`,
	md: `min-h-control-md px-3 py-1.5 text-body [&_svg]:size-4`,
	lg: `min-h-control-lg px-4 py-2 text-body [&_svg]:size-[1.125rem]`
}, d = {
	sm: `size-control-sm px-0 py-0`,
	md: `size-control-md px-0 py-0`,
	lg: `size-control-lg px-0 py-0`
};
function f(e, t, n) {
	return i(c, s, l[e], u[t], n);
}
var p = `max-w-[min(20rem,calc(100vw-2rem))] rounded-md border border-transparent bg-fg px-2 py-1 text-caption text-bg shadow-md wrap-break-word data-entering:animate-fade`, m = a(), h = `inline-block size-[1em] shrink-0 rounded-full border-2 border-current border-r-transparent animate-spin motion-reduce:animate-none motion-reduce:border-dotted`;
function g({ label: e }) {
	return e === void 0 ? (0, m.jsx)(`span`, {
		"aria-hidden": !0,
		className: h
	}) : (0, m.jsx)(r, {
		isIndeterminate: !0,
		"aria-label": e,
		className: `inline-flex`,
		children: (0, m.jsx)(`span`, {
			"aria-hidden": !0,
			className: h
		})
	});
}
var _ = (0, o.forwardRef)(function({ variant: e = `primary`, size: t = `md`, pendingLabel: r, className: i, children: a, ...s }, c) {
	let l = (0, o.useCallback)((e) => (0, m.jsxs)(m.Fragment, { children: [e.isPending ? (0, m.jsx)(g, { label: r }) : null, typeof a == `function` ? a(e) : a] }), [a, r]);
	return (0, m.jsx)(n, {
		...s,
		ref: c,
		className: f(e, t, i),
		children: l
	});
});
export { p as a, d as i, f as n, s as r, _ as t };
