import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, Ft as i, Mt as a, Nt as o, Pt as s, Tt as c, _ as l, jt as u, v as d, wt as f } from "./createLucideIcon.npgQlVHx.js";
import { r as p } from "./useFormReset.B5f8O4ea.js";
import { i as m } from "./useFormValidation.CKcLNQoz.js";
import { n as h } from "./Text.DxhsPAdy.js";
import { t as g } from "./useToggle.BjfKX6Zr.js";
import { n as _ } from "./react-dom.B9zIfLd2.js";
import { u as v } from "./slugs.CpBgIMWb.js";
import { t as y } from "./VisuallyHidden.DXeJgMmE.js";
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
var x = e(_(), 1), S = (0, x.createContext)(null), C = (0, x.createContext)(null), w = (0, x.createContext)(null), T = (0, x.forwardRef)(function(e, l) {
	let { inputRef: d = null, ...g } = e;
	[e, l] = c(g, l, S);
	let { validationBehavior: _ } = a(m) || {}, y = e.validationBehavior ?? _ ?? `native`, T = o((0, x.useMemo)(() => i(d, e.inputRef === void 0 ? null : e.inputRef), [d, e.inputRef])), E = v(e), D = b({
		...u(e),
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
	return delete L.id, delete L.onClick, x.createElement(t.div, {
		...s(L, I),
		ref: l,
		slot: e.slot || void 0,
		"data-selected": A || void 0,
		"data-disabled": j || void 0,
		"data-readonly": M || void 0,
		"data-invalid": N || void 0,
		"data-required": e.isRequired || void 0
	}, x.createElement(f, { values: [
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
}), E = (0, x.forwardRef)(function(e, i) {
	let { labelProps: a, inputProps: o, isSelected: c, isDisabled: u, isReadOnly: f, isPressed: p, isInvalid: m, inputRef: h, defaultClassName: g, isRequired: _ } = (0, x.useContext)(w), { isFocused: v, isFocusVisible: b, focusProps: S } = d(), T = u || f, E = (0, x.useContext)(C), { hoverProps: D, isHovered: O } = l({
		...e,
		isDisabled: T
	}), k = r({
		...e,
		defaultClassName: g,
		values: {
			isSelected: c,
			isPressed: p,
			isHovered: O,
			isFocused: v,
			isFocusVisible: b,
			isDisabled: u,
			isReadOnly: f,
			isInvalid: m,
			isRequired: _ || !1,
			state: E
		}
	}), A = n(e, { global: !0 });
	return delete A.id, delete A.onClick, x.createElement(t.label, {
		...s(A, a, D, k),
		ref: i,
		slot: e.slot || void 0,
		"data-selected": c || void 0,
		"data-pressed": p || void 0,
		"data-hovered": O || void 0,
		"data-focused": v || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": u || void 0,
		"data-readonly": f || void 0,
		"data-invalid": m || void 0,
		"data-required": _ || void 0
	}, x.createElement(y, { elementType: `span` }, x.createElement(`input`, {
		...s(o, S),
		ref: h
	})), k.children);
});
export { E as n, T as t };
