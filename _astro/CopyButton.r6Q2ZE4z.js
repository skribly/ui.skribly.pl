import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { I as t, L as n, M as r, j as i } from "./doc.C_PtMNUB.js";
import { n as a } from "./react-dom.B9zIfLd2.js";
import { i as o, t as s } from "./Button.df3csLrB.js";
import { n as c } from "./IconButton.Bqgi69Iz.js";
var l = e(a(), 1), u = t(), d = {
	idle: r(`action.copy`),
	copied: r(`action.check`),
	failed: r(`status.error`)
};
function f({ text: e, label: t, copiedLabel: r, failedLabel: a, iconOnly: f = !1, resetAfter: p = 2e3, onCopy: m, onCopyError: h, container: g, variant: _ = `outline`, size: v = `md`, className: y, onHoverChange: b, onFocusChange: x, ...S }) {
	let [C, w] = (0, l.useState)(`idle`), [T, E] = (0, l.useState)(!1), [D, O] = (0, l.useState)(!1), k = (0, l.useRef)(0);
	(0, l.useEffect)(() => {
		if (C !== `copied` || T || D) return;
		let e = setTimeout(() => w(`idle`), p);
		return () => clearTimeout(e);
	}, [
		C,
		T,
		D,
		p
	]);
	let A = (0, l.useCallback)(async () => {
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
	]), j = (0, l.useCallback)(() => {
		w(`idle`), A();
	}, [A]), M = (0, l.useCallback)((e) => {
		E(e), b?.(e);
	}, [b]), N = (0, l.useCallback)((e) => {
		O(e), x?.(e);
	}, [x]), P = d[C], F = _ === `outline` || _ === `ghost` ? {
		idle: ``,
		copied: `text-ok`,
		failed: `text-danger`
	}[C] : ``, I = C === `copied` ? r : t, L = C === `failed`, R = (0, u.jsxs)(s, {
		...S,
		variant: _,
		size: v,
		onPress: j,
		onHoverChange: M,
		onFocusChange: N,
		"data-state": C,
		...f ? { "aria-label": t } : {},
		className: n(f && o[v], y),
		children: [(0, u.jsx)(P, {
			"aria-hidden": !0,
			className: F
		}), f ? null : (0, u.jsx)(`span`, {
			className: `min-w-0`,
			children: I
		})]
	});
	return (0, u.jsxs)(`span`, {
		className: `inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1`,
		children: [f ? (0, u.jsx)(c, {
			content: I,
			container: g,
			children: R
		}) : R, (0, u.jsx)(`output`, {
			"aria-live": `polite`,
			className: L ? `inline-flex max-w-full items-start gap-1 text-caption text-danger` : `sr-only`,
			children: L ? (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(i, {
				name: `status.error`,
				"aria-hidden": !0,
				className: `mt-px size-3.5 shrink-0`
			}), (0, u.jsx)(`span`, {
				className: `min-w-0 wrap-break-word`,
				children: a
			})] }) : C === `copied` ? r : null
		})]
	});
}
export { f as t };
