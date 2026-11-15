import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { A as t, C as n, F as r } from "./doc.DoLlUurT.js";
import { n as i } from "./react-dom.B9zIfLd2.js";
import { t as a } from "./Button.D4_9kLv-.js";
import { t as o } from "./Modal.CnMJNR6_.js";
var s = e(i(), 1), c = r();
function l(e, t, n) {
	let [r, i] = (0, s.useState)(t);
	return [e ?? r, (0, s.useCallback)((e) => {
		i(e), n?.(e);
	}, [n])];
}
function u({ title: e, children: r, confirmLabel: i, cancelLabel: u, tone: d = `default`, onConfirm: f, onCancel: p, error: m, errorDetails: h, errorToneLabel: g, pendingLabel: _, trigger: v, isOpen: y, defaultOpen: b = !1, onOpenChange: x, container: S, className: C }) {
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
	}, [f, T]), j = (0, s.useCallback)(() => k(!1), [k]), M = (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(a, {
		variant: `outline`,
		onPress: j,
		isDisabled: E,
		autoFocus: O,
		children: u
	}), (0, c.jsx)(a, {
		variant: O ? `danger` : `primary`,
		onPress: A,
		autoFocus: !O,
		isPending: E,
		..._ === void 0 ? {} : { pendingLabel: _ },
		children: i
	})] }), N = O ? (0, c.jsx)(t, {
		name: `status.warning`,
		size: 20,
		className: `text-danger`
	}) : void 0;
	return (0, c.jsx)(o, {
		role: `alertdialog`,
		size: `sm`,
		title: e,
		...r === void 0 ? {} : { description: r },
		...N ? { icon: N } : {},
		...v === void 0 ? {} : { trigger: v },
		...S === void 0 ? {} : { container: S },
		...C === void 0 ? {} : { className: C },
		isOpen: w,
		onOpenChange: k,
		isDismissable: !1,
		isKeyboardDismissDisabled: E,
		footer: M,
		children: m ? (0, c.jsx)(n, {
			tone: `danger`,
			title: m,
			urgent: !0,
			...g === void 0 ? {} : { toneLabel: g },
			children: h
		}) : void 0
	});
}
export { u as t };
