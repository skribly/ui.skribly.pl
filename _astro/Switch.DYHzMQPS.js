import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Bt as t, H as n, Ht as r, Jt as i, Kt as a, N as o, P as s, Vt as c, Xt as l, Yt as u, Zt as d, qt as f } from "./useOverflow.Dq483xd0.js";
import { r as p } from "./useFormReset.BBxMt31i.js";
import { i as m } from "./useFormValidation.L_5g13Dg.js";
import { n as h } from "./Text.DXbJB4jb.js";
import { t as g } from "./useToggle.BTs-J-IS.js";
import { n as _ } from "./react-dom.B9zIfLd2.js";
import { i as v } from "./ToggleButton.D_YySXWN.js";
import { t as y } from "./VisuallyHidden.CPLGlJAY.js";
function b(e, t, n) {
	let { labelProps: r, inputProps: i, isSelected: a, ...o } = g(e, t, n);
	return {
		labelProps: r,
		inputProps: {
			...i,
			role: `switch`,
			checked: a
		},
		isSelected: a,
		...o
	};
}
var x = e(_(), 1), S = (0, x.createContext)(null), C = (0, x.createContext)(null), w = (0, x.createContext)(null), T = (0, x.forwardRef)(function(e, o) {
	let { inputRef: s = null, ...g } = e;
	[e, o] = c(g, o, S);
	let { validationBehavior: _ } = i(m) || {}, y = e.validationBehavior ?? _ ?? `native`, T = u((0, x.useMemo)(() => d(s, e.inputRef === void 0 ? null : e.inputRef), [s, e.inputRef])), E = v(e), D = b({
		...f(e),
		children: typeof e.children == `function` || e.children,
		validationBehavior: y
	}, E, T), { descriptionProps: O, errorMessageProps: k, isSelected: A, isDisabled: j, isReadOnly: M, isInvalid: N, validationDetails: P, validationErrors: F } = D, I = r({
		...e,
		defaultClassName: `react-aria-SwitchField`,
		values: {
			isSelected: A,
			isDisabled: j,
			isReadOnly: M,
			isInvalid: N,
			isRequired: e.isRequired || !1,
			state: E
		}
	}), L = n(e, { global: !0 });
	return delete L.id, delete L.onClick, x.createElement(a.div, {
		...l(L, I),
		ref: o,
		slot: e.slot || void 0,
		"data-selected": A || void 0,
		"data-disabled": j || void 0,
		"data-readonly": M || void 0,
		"data-invalid": N || void 0,
		"data-required": e.isRequired || void 0
	}, x.createElement(t, { values: [
		[C, E],
		[w, {
			...D,
			inputRef: T,
			defaultClassName: `react-aria-SwitchButton`,
			isRequired: e.isRequired
		}],
		[h, { slots: {
			description: O,
			errorMessage: k
		} }],
		[p, {
			isInvalid: N,
			validationDetails: P,
			validationErrors: F
		}]
	] }, I.children));
}), E = (0, x.forwardRef)(function(e, t) {
	let { labelProps: i, inputProps: c, isSelected: u, isDisabled: d, isReadOnly: f, isPressed: p, isInvalid: m, inputRef: h, defaultClassName: g, isRequired: _ } = (0, x.useContext)(w), { isFocused: v, isFocusVisible: b, focusProps: S } = s(), T = d || f, E = (0, x.useContext)(C), { hoverProps: D, isHovered: O } = o({
		...e,
		isDisabled: T
	}), k = r({
		...e,
		defaultClassName: g,
		values: {
			isSelected: u,
			isPressed: p,
			isHovered: O,
			isFocused: v,
			isFocusVisible: b,
			isDisabled: d,
			isReadOnly: f,
			isInvalid: m,
			isRequired: _ || !1,
			state: E
		}
	}), A = n(e, { global: !0 });
	return delete A.id, delete A.onClick, x.createElement(a.label, {
		...l(A, i, D, k),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": u || void 0,
		"data-pressed": p || void 0,
		"data-hovered": O || void 0,
		"data-focused": v || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": d || void 0,
		"data-readonly": f || void 0,
		"data-invalid": m || void 0,
		"data-required": _ || void 0
	}, x.createElement(y, { elementType: `span` }, x.createElement(`input`, {
		...l(c, S),
		ref: h
	})), k.children);
});
export { E as n, T as t };
