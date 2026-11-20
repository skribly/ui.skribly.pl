import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { H as t, Ht as n, I as r, Kt as i, N as a, P as o, Vt as s, Xt as c, dt as l, lt as u, pt as d, q as f } from "./useOverflow.Dq483xd0.js";
import { n as p } from "./react-dom.B9zIfLd2.js";
function m(e, n) {
	let { elementType: i = `a`, onPress: a, onPressStart: o, onPressEnd: s, onPressChange: p, onClick: m, isDisabled: h, ...g } = e, _ = {};
	i !== `a` && (_ = {
		role: `link`,
		tabIndex: h ? void 0 : 0
	});
	let { focusableProps: v } = f(e, n), { pressProps: y, isPressed: b } = r({
		onPress: a,
		onPressStart: o,
		onPressEnd: s,
		onPressChange: p,
		onClick: m,
		isDisabled: h,
		ref: n
	}), x = t(g, { labelable: !0 }), S = c(v, y), C = d(), w = l(e);
	return {
		isPressed: b,
		linkProps: c(x, w, {
			...S,
			..._,
			"aria-disabled": h || void 0,
			"aria-current": e[`aria-current`],
			onClick: (t) => {
				y.onClick?.(t), u(t, C, e.href, e.routerOptions);
			}
		})
	};
}
var h = e(p(), 1), g = (0, h.createContext)(null), _ = (0, h.forwardRef)(function(e, r) {
	[e, r] = s(e, r, g);
	let l = e.href && !e.isDisabled ? `a` : `span`, { linkProps: u, isPressed: d } = m({
		...e,
		elementType: l
	}, r), f = i[l], { hoverProps: p, isHovered: _ } = a(e), { focusProps: v, isFocused: y, isFocusVisible: b } = o(), x = n({
		...e,
		defaultClassName: `react-aria-Link`,
		values: {
			isCurrent: !!e[`aria-current`],
			isDisabled: e.isDisabled || !1,
			isPressed: d,
			isHovered: _,
			isFocused: y,
			isFocusVisible: b
		}
	}), S = t(e, { global: !0 });
	return delete S.onClick, h.createElement(f, {
		ref: r,
		slot: e.slot || void 0,
		...c(S, x, u, p, v),
		"data-focused": y || void 0,
		"data-hovered": _ || void 0,
		"data-pressed": d || void 0,
		"data-focus-visible": b || void 0,
		"data-current": !!e[`aria-current`] || void 0,
		"data-disabled": e.isDisabled || void 0
	}, x.children);
});
export { g as n, _ as t };
