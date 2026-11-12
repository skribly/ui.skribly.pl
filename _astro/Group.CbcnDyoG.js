import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, Et as n, Pt as r, Tt as i, _ as a, v as o } from "./createLucideIcon.npgQlVHx.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1), l = (0, c.createContext)({}), u = (0, c.forwardRef)(function(e, s) {
	[e, s] = i(e, s, l);
	let { isDisabled: u, isInvalid: d, isReadOnly: f, onHoverStart: p, onHoverChange: m, onHoverEnd: h, ...g } = e;
	u ??= !!e[`aria-disabled`] && e[`aria-disabled`] !== `false`, d ??= !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`;
	let { hoverProps: _, isHovered: v } = a({
		onHoverStart: p,
		onHoverChange: m,
		onHoverEnd: h,
		isDisabled: u
	}), { isFocused: y, isFocusVisible: b, focusProps: x } = o({ within: !0 }), S = n({
		...e,
		values: {
			isHovered: v,
			isFocusWithin: y,
			isFocusVisible: b,
			isDisabled: u,
			isInvalid: d
		},
		defaultClassName: `react-aria-Group`
	});
	return c.createElement(t.div, {
		...r(g, x, _),
		...S,
		ref: s,
		role: e.role ?? `group`,
		slot: e.slot ?? void 0,
		"data-focus-within": y || void 0,
		"data-hovered": v || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": u || void 0,
		"data-invalid": d || void 0,
		"data-readonly": f || void 0
	}, S.children);
});
export { l as n, u as t };
