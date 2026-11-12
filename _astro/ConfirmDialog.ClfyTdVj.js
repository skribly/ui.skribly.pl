import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { t } from "./triangle-exclamation-point.BJJ-nXau.js";
import { n } from "./react-dom.B9zIfLd2.js";
import { t as r } from "./Button.DRxd_7vr.js";
import { S as i } from "./doc.D2PtmWN6.js";
import { t as a } from "./Modal.BEIjpKzW.js";
import { t as o } from "./jsx-runtime.yrTYNGQT.js";
var s = e(n(), 1), c = o();
function l(e, t, n) {
	let [r, i] = (0, s.useState)(t);
	return [e ?? r, (0, s.useCallback)((e) => {
		i(e), n?.(e);
	}, [n])];
}
function u({ title: e, children: n, confirmLabel: o, cancelLabel: u, tone: d = `default`, onConfirm: f, onCancel: p, error: m, errorDetails: h, errorToneLabel: g, pendingLabel: _, trigger: v, isOpen: y, defaultOpen: b = !1, onOpenChange: x, container: S, className: C }) {
	let [w, T] = l(y, b, x), [E, D] = (0, s.useState)(!1), O = d === `danger`, k = (0, s.useCallback)((e) => {
		E || (e || p?.(), T(e));
	}, [
		E,
		p,
		T
	]), A = (0, s.useCallback)(async () => {
		D(!0);
		try {
			await f(), T(!1);
		} catch {} finally {
			D(!1);
		}
	}, [f, T]), j = (0, s.useCallback)(() => k(!1), [k]), M = (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(r, {
		variant: `outline`,
		onPress: j,
		isDisabled: E,
		autoFocus: O,
		children: u
	}), (0, c.jsx)(r, {
		variant: O ? `danger` : `primary`,
		onPress: A,
		autoFocus: !O,
		isPending: E,
		..._ === void 0 ? {} : { pendingLabel: _ },
		children: o
	})] }), N = O ? (0, c.jsx)(t, {
		size: 20,
		className: `text-danger`
	}) : void 0;
	return (0, c.jsx)(a, {
		role: `alertdialog`,
		size: `sm`,
		title: e,
		...n === void 0 ? {} : { description: n },
		...N ? { icon: N } : {},
		...v === void 0 ? {} : { trigger: v },
		...S === void 0 ? {} : { container: S },
		...C === void 0 ? {} : { className: C },
		isOpen: w,
		onOpenChange: k,
		isDismissable: !1,
		isKeyboardDismissDisabled: E,
		footer: M,
		children: m ? (0, c.jsx)(i, {
			tone: `danger`,
			title: m,
			urgent: !0,
			...g === void 0 ? {} : { toneLabel: g },
			children: h
		}) : void 0
	});
}
export { u as t };
