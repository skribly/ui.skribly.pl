import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Ht as t, Kt as n, N as r, P as i, Vt as a, Xt as o } from "./useOverflow.Dq483xd0.js";
import { n as s } from "./react-dom.B9zIfLd2.js";
var c = e(s(), 1), l = (0, c.createContext)({}), u = (0, c.forwardRef)(function(e, s) {
	[e, s] = a(e, s, l);
	let { isDisabled: u, isInvalid: d, isReadOnly: f, onHoverStart: p, onHoverChange: m, onHoverEnd: h, ...g } = e;
	u ??= !!e[`aria-disabled`] && e[`aria-disabled`] !== `false`, d ??= !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`;
	let { hoverProps: _, isHovered: v } = r({
		onHoverStart: p,
		onHoverChange: m,
		onHoverEnd: h,
		isDisabled: u
	}), { isFocused: y, isFocusVisible: b, focusProps: x } = i({ within: !0 }), S = t({
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
	return c.createElement(n.div, {
		...o(g, x, _),
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
