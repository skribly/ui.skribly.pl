import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./check.CUpC8LgP.js";
import { t as n } from "./circle-exclamation-point.DRCkYbzg.js";
import { t as r } from "./copy.BkyZ8mHn.js";
import { n as i } from "./react-dom.B9zIfLd2.js";
import { n as a, t as o } from "./jsx-runtime.yrTYNGQT.js";
import { i as s, t as c } from "./Button.DRxd_7vr.js";
import { n as l } from "./IconButton.DlwxSF13.js";
var u = e(i(), 1), d = o(), f = {
	idle: r,
	copied: t,
	failed: n
};
function p({ text: e, label: t, copiedLabel: r, failedLabel: i, iconOnly: o = !1, resetAfter: p = 2e3, onCopy: m, onCopyError: h, container: g, variant: _ = `outline`, size: v = `md`, className: y, onHoverChange: b, onFocusChange: x, ...S }) {
	let [C, w] = (0, u.useState)(`idle`), [T, E] = (0, u.useState)(!1), [D, O] = (0, u.useState)(!1), k = (0, u.useRef)(0);
	(0, u.useEffect)(() => {
		if (C !== `copied` || T || D) return;
		let e = setTimeout(() => w(`idle`), p);
		return () => clearTimeout(e);
	}, [
		C,
		T,
		D,
		p
	]);
	let A = (0, u.useCallback)(async () => {
		let t = ++k.current;
		try {
			let n = typeof e == `function` ? await e() : e;
			await navigator.clipboard.writeText(n), t === k.current && w(`copied`), m?.(n);
		} catch (e) {
			t === k.current && w(`failed`), h?.(e);
		}
	}, [
		e,
		m,
		h
	]), j = (0, u.useCallback)(() => {
		w(`idle`), A();
	}, [A]), M = (0, u.useCallback)((e) => {
		E(e), b?.(e);
	}, [b]), N = (0, u.useCallback)((e) => {
		O(e), x?.(e);
	}, [x]), P = f[C], F = _ === `outline` || _ === `ghost` ? {
		idle: ``,
		copied: `text-ok`,
		failed: `text-danger`
	}[C] : ``, I = C === `copied` ? r : t, L = C === `failed`, R = (0, d.jsxs)(c, {
		...S,
		variant: _,
		size: v,
		onPress: j,
		onHoverChange: M,
		onFocusChange: N,
		"data-state": C,
		...o ? { "aria-label": t } : {},
		className: a(o && s[v], y),
		children: [(0, d.jsx)(P, {
			"aria-hidden": !0,
			className: F
		}), o ? null : (0, d.jsx)(`span`, {
			className: `min-w-0`,
			children: I
		})]
	});
	return (0, d.jsxs)(`span`, {
		className: `inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1`,
		children: [o ? (0, d.jsx)(l, {
			content: I,
			container: g,
			children: R
		}) : R, (0, d.jsx)(`output`, {
			"aria-live": `polite`,
			className: L ? `inline-flex max-w-full items-start gap-1 text-caption text-danger` : `sr-only`,
			children: L ? (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(n, {
				"aria-hidden": !0,
				className: `mt-px size-3.5 shrink-0`
			}), (0, d.jsx)(`span`, {
				className: `min-w-0 wrap-break-word`,
				children: i
			})] }) : C === `copied` ? r : null
		})]
	});
}
export { p as t };
