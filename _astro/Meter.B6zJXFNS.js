import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { U as t, W as n, X as r, cn as i, dn as a, hn as o, on as s, sn as c, st as l } from "./doc.DoLlUurT.js";
import { n as u } from "./react-dom.B9zIfLd2.js";
function d(e) {
	let { progressBarProps: n, labelProps: r } = t(e);
	return {
		meterProps: {
			...n,
			role: `meter`
		},
		labelProps: r
	};
}
var f = e(u(), 1), p = (0, f.createContext)(null), m = (0, f.forwardRef)(function(e, t) {
	[e, t] = s(e, t, p);
	let { value: u = 0, minValue: m = 0, maxValue: h = 100 } = e;
	u = n(u, m, h);
	let g = h - m, [_, v] = i(!e[`aria-label`] && !e[`aria-labelledby`]), { meterProps: y, labelProps: b } = d({
		...e,
		label: v
	}), x = g === 0 ? 0 : (u - m) / g * 100, S = c({
		...e,
		defaultClassName: `react-aria-Meter`,
		values: {
			percentage: x,
			valueText: y[`aria-valuetext`]
		}
	}), C = l(e, { global: !0 });
	return f.createElement(a.div, {
		...o(C, S, y),
		ref: t,
		slot: e.slot || void 0
	}, f.createElement(r.Provider, { value: {
		...b,
		ref: _,
		elementType: `span`
	} }, S.children));
});
export { m as t };
