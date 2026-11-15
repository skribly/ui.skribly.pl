import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Nt as n, cn as r, ct as i, et as a, fn as o, gn as s, jt as c, kt as l, nt as u, pt as d, sn as f } from "./doc.C_PtMNUB.js";
import { n as p } from "./react-dom.B9zIfLd2.js";
function m(e, t) {
	let { elementType: r = `a`, onPress: a, onPressStart: o, onPressEnd: f, onPressChange: p, onClick: m, isDisabled: h, ...g } = e, _ = {};
	r !== `a` && (_ = {
		role: `link`,
		tabIndex: h ? void 0 : 0
	});
	let { focusableProps: v } = d(e, t), { pressProps: y, isPressed: b } = u({
		onPress: a,
		onPressStart: o,
		onPressEnd: f,
		onPressChange: p,
		onClick: m,
		isDisabled: h,
		ref: t
	}), x = i(g, { labelable: !0 }), S = s(v, y), C = n(), w = c(e);
	return {
		isPressed: b,
		linkProps: s(x, w, {
			...S,
			..._,
			"aria-disabled": h || void 0,
			"aria-current": e[`aria-current`],
			onClick: (t) => {
				y.onClick?.(t), l(t, C, e.href, e.routerOptions);
			}
		})
	};
}
var h = e(p(), 1), g = (0, h.createContext)(null), _ = (0, h.forwardRef)(function(e, n) {
	[e, n] = f(e, n, g);
	let c = e.href && !e.isDisabled ? `a` : `span`, { linkProps: l, isPressed: u } = m({
		...e,
		elementType: c
	}, n), d = o[c], { hoverProps: p, isHovered: _ } = t(e), { focusProps: v, isFocused: y, isFocusVisible: b } = a(), x = r({
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
	}), S = i(e, { global: !0 });
	return delete S.onClick, h.createElement(d, {
		ref: n,
		slot: e.slot || void 0,
		...s(S, x, l, p, v),
		"data-focused": y || void 0,
		"data-hovered": _ || void 0,
		"data-pressed": u || void 0,
		"data-focus-visible": b || void 0,
		"data-current": !!e[`aria-current`] || void 0,
		"data-disabled": e.isDisabled || void 0
	}, x.children);
});
export { g as n, _ as t };
