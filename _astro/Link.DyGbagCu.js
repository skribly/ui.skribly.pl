import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, Pt as i, Tt as a, Y as o, Z as s, _ as c, b as l, j as u, q as d, v as f } from "./createLucideIcon.npgQlVHx.js";
import { n as p } from "./react-dom.B9zIfLd2.js";
function m(e, t) {
	let { elementType: r = `a`, onPress: a, onPressStart: c, onPressEnd: f, onPressChange: p, onClick: m, isDisabled: h, ...g } = e, _ = {};
	r !== `a` && (_ = {
		role: `link`,
		tabIndex: h ? void 0 : 0
	});
	let { focusableProps: v } = u(e, t), { pressProps: y, isPressed: b } = l({
		onPress: a,
		onPressStart: c,
		onPressEnd: f,
		onPressChange: p,
		onClick: m,
		isDisabled: h,
		ref: t
	}), x = n(g, { labelable: !0 }), S = i(v, y), C = s(), w = o(e);
	return {
		isPressed: b,
		linkProps: i(x, w, {
			...S,
			..._,
			"aria-disabled": h || void 0,
			"aria-current": e[`aria-current`],
			onClick: (t) => {
				y.onClick?.(t), d(t, C, e.href, e.routerOptions);
			}
		})
	};
}
var h = e(p(), 1), g = (0, h.createContext)(null), _ = (0, h.forwardRef)(function(e, o) {
	[e, o] = a(e, o, g);
	let s = e.href && !e.isDisabled ? `a` : `span`, { linkProps: l, isPressed: u } = m({
		...e,
		elementType: s
	}, o), d = t[s], { hoverProps: p, isHovered: _ } = c(e), { focusProps: v, isFocused: y, isFocusVisible: b } = f(), x = r({
		...e,
		defaultClassName: `react-aria-Link`,
		values: {
			isCurrent: !!e[`aria-current`],
			isDisabled: e.isDisabled || !1,
			isPressed: u,
			isHovered: _,
			isFocused: y,
			isFocusVisible: b
		}
	}), S = n(e, { global: !0 });
	return delete S.onClick, h.createElement(d, {
		ref: o,
		slot: e.slot || void 0,
		...i(S, x, l, p, v),
		"data-focused": y || void 0,
		"data-hovered": _ || void 0,
		"data-pressed": u || void 0,
		"data-focus-visible": b || void 0,
		"data-current": !!e[`aria-current`] || void 0,
		"data-disabled": e.isDisabled || void 0
	}, x.children);
});
export { g as n, _ as t };
