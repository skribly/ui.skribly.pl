import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { G as t, W as n, Z as r, cn as i, ct as a, fn as o, gn as s, ln as c, sn as l } from "./doc.C_PtMNUB.js";
import { n as u } from "./react-dom.B9zIfLd2.js";
function d(e) {
	let { progressBarProps: t, labelProps: r } = n(e);
	return {
		meterProps: {
			...t,
			role: `meter`
		},
		labelProps: r
	};
}
var f = e(u(), 1), p = (0, f.createContext)(null), m = (0, f.forwardRef)(function(e, n) {
	[e, n] = l(e, n, p);
	let { value: u = 0, minValue: m = 0, maxValue: h = 100 } = e;
	u = t(u, m, h);
	let g = h - m, [_, v] = c(!e[`aria-label`] && !e[`aria-labelledby`]), { meterProps: y, labelProps: b } = d({
		...e,
		label: v
	}), x = g === 0 ? 0 : (u - m) / g * 100, S = i({
		...e,
		defaultClassName: `react-aria-Meter`,
		values: {
			percentage: x,
			valueText: y[`aria-valuetext`]
		}
	}), C = a(e, { global: !0 });
	return f.createElement(o.div, {
		...s(C, S, y),
		ref: n,
		slot: e.slot || void 0
	}, f.createElement(r.Provider, { value: {
		...b,
		ref: _,
		elementType: `span`
	} }, S.children));
});
export { m as t };
