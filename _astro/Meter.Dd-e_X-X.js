import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { H as t, Ht as n, Kt as r, T as i, Ut as a, Vt as o, Xt as s, j as c, w as l } from "./useOverflow.Dq483xd0.js";
import { n as u } from "./react-dom.B9zIfLd2.js";
function d(e) {
	let { progressBarProps: t, labelProps: n } = l(e);
	return {
		meterProps: {
			...t,
			role: `meter`
		},
		labelProps: n
	};
}
var f = e(u(), 1), p = (0, f.createContext)(null), m = (0, f.forwardRef)(function(e, l) {
	[e, l] = o(e, l, p);
	let { value: u = 0, minValue: m = 0, maxValue: h = 100 } = e;
	u = i(u, m, h);
	let g = h - m, [_, v] = a(!e[`aria-label`] && !e[`aria-labelledby`]), { meterProps: y, labelProps: b } = d({
		...e,
		label: v
	}), x = g === 0 ? 0 : (u - m) / g * 100, S = n({
		...e,
		defaultClassName: `react-aria-Meter`,
		values: {
			percentage: x,
			valueText: y[`aria-valuetext`]
		}
	}), C = t(e, { global: !0 });
	return f.createElement(r.div, {
		...s(C, S, y),
		ref: l,
		slot: e.slot || void 0
	}, f.createElement(c.Provider, { value: {
		...b,
		ref: _,
		elementType: `span`
	} }, S.children));
});
export { m as t };
