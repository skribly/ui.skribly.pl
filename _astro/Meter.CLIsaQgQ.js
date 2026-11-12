import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, Dt as n, E as r, Et as i, Pt as a, Tt as o, c as s, h as c, l } from "./createLucideIcon.npgQlVHx.js";
import { n as u } from "./react-dom.B9zIfLd2.js";
function d(e) {
	let { progressBarProps: t, labelProps: n } = s(e);
	return {
		meterProps: {
			...t,
			role: `meter`
		},
		labelProps: n
	};
}
var f = e(u(), 1), p = (0, f.createContext)(null), m = (0, f.forwardRef)(function(e, s) {
	[e, s] = o(e, s, p);
	let { value: u = 0, minValue: m = 0, maxValue: h = 100 } = e;
	u = l(u, m, h);
	let g = h - m, [_, v] = n(!e[`aria-label`] && !e[`aria-labelledby`]), { meterProps: y, labelProps: b } = d({
		...e,
		label: v
	}), x = g === 0 ? 0 : (u - m) / g * 100, S = i({
		...e,
		defaultClassName: `react-aria-Meter`,
		values: {
			percentage: x,
			valueText: y[`aria-valuetext`]
		}
	}), C = r(e, { global: !0 });
	return f.createElement(t.div, {
		...a(C, S, y),
		ref: s,
		slot: e.slot || void 0
	}, f.createElement(c.Provider, { value: {
		...b,
		ref: _,
		elementType: `span`
	} }, S.children));
});
export { m as t };
