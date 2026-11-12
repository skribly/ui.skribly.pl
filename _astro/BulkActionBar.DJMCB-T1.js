import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { n, r } from "./createLucideIcon.npgQlVHx.js";
import { t as i } from "./Toolbar.DKs4r6Oh.js";
import { t as a } from "./x.CmkLFRDJ.js";
import { n as o, t as s } from "./jsx-runtime.yrTYNGQT.js";
var c = e(t(), 1), l = s();
function u({ count: e, countLabel: t, "aria-label": s, children: u, onClear: d, clearLabel: f, sticky: p = !1, announce: m = !1, className: h }) {
	let g = e === 0, _ = (0, c.useRef)(null), v = (0, c.useRef)(null), y = (0, c.useRef)(-1 / 0), b = (0, c.useCallback)(() => {
		y.current = performance.now();
	}, []), x = (0, c.useMemo)(() => ({
		isDisabled: g,
		onPressStart: b
	}), [g, b]);
	return (0, c.useEffect)(() => {
		if (!g || performance.now() - y.current > 2e3) return;
		let e = document.activeElement;
		(!e || e === document.body || _.current?.contains(e)) && v.current?.focus();
	}, [g]), (0, l.jsxs)(i, {
		ref: _,
		"aria-label": s,
		"data-empty": g || void 0,
		className: o(`flex min-h-control-lg flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border px-3 py-2 text-body transition-colors`, g ? `border-border bg-surface text-muted` : `border-accent bg-accent-soft text-fg shadow-[inset_3px_0_0_var(--sk-accent)]`, p && !g && `sticky bottom-2 z-(--sk-z-sticky) shadow-md`, h),
		children: [
			(0, l.jsx)(`span`, {
				ref: v,
				tabIndex: -1,
				...m ? {
					"aria-live": `polite`,
					"aria-atomic": !0
				} : {},
				className: `me-auto min-w-0 rounded-sm font-medium tabular-nums outline-hidden [overflow-wrap:anywhere] focus-visible:outline-solid focus-visible:outline-(length:--sk-focus-width) focus-visible:outline-focus`,
				children: t(e)
			}),
			(0, l.jsx)(n.Provider, {
				value: x,
				children: (0, l.jsx)(`div`, {
					className: `flex flex-wrap items-center gap-2`,
					children: u
				})
			}),
			d && !g ? (0, l.jsxs)(r, {
				onPress: d,
				onPressStart: b,
				className: `inline-flex h-control-sm min-w-6 items-center gap-1 rounded-md px-2 text-caption font-medium text-fg outline-hidden data-focus-visible:outline-solid data-focus-visible:outline-(length:--sk-focus-width) data-focus-visible:outline-focus data-hovered:bg-hover data-pressed:bg-selected`,
				children: [(0, l.jsx)(a, {
					"aria-hidden": `true`,
					className: `size-3.5`
				}), f]
			}) : null
		]
	});
}
export { u as t };
