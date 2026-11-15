import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, At as n, Mt as r, Ot as i, Q as a, dn as o, ft as s, hn as c, on as l, sn as u, st as d, tt as f } from "./doc.DoLlUurT.js";
import { n as p } from "./react-dom.B9zIfLd2.js";
function m(e, t) {
	let { elementType: a = `a`, onPress: o, onPressStart: l, onPressEnd: u, onPressChange: p, onClick: m, isDisabled: h, ...g } = e, _ = {};
	a !== `a` && (_ = {
		role: `link`,
		tabIndex: h ? void 0 : 0
	});
	let { focusableProps: v } = s(e, t), { pressProps: y, isPressed: b } = f({
		onPress: o,
		onPressStart: l,
		onPressEnd: u,
		onPressChange: p,
		onClick: m,
		isDisabled: h,
		ref: t
	}), x = d(g, { labelable: !0 }), S = c(v, y), C = r(), w = n(e);
	return {
		isPressed: b,
		linkProps: c(x, w, {
			...S,
			..._,
			"aria-disabled": h || void 0,
			"aria-current": e[`aria-current`],
			onClick: (t) => {
				y.onClick?.(t), i(t, C, e.href, e.routerOptions);
			}
		})
	};
}
var h = e(p(), 1), g = (0, h.createContext)(null), _ = (0, h.forwardRef)(function(e, n) {
	[e, n] = l(e, n, g);
	let r = e.href && !e.isDisabled ? `a` : `span`, { linkProps: i, isPressed: s } = m({
		...e,
		elementType: r
	}, n), f = o[r], { hoverProps: p, isHovered: _ } = a(e), { focusProps: v, isFocused: y, isFocusVisible: b } = t(), x = u({
		...e,
		defaultClassName: `react-aria-Link`,
		values: {
			isCurrent: !!e[`aria-current`],
			isDisabled: e.isDisabled || !1,
			isPressed: s,
			isHovered: _,
			isFocused: y,
			isFocusVisible: b
		}
	}), S = d(e, { global: !0 });
	return delete S.onClick, h.createElement(f, {
		ref: n,
		slot: e.slot || void 0,
		...c(S, x, i, p, v),
		"data-focused": y || void 0,
		"data-hovered": _ || void 0,
		"data-pressed": s || void 0,
		"data-focus-visible": b || void 0,
		"data-current": !!e[`aria-current`] || void 0,
		"data-disabled": e.isDisabled || void 0
	}, x.children);
});
export { g as n, _ as t };
