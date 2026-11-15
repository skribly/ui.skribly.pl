import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Q as n, an as r, dn as i, fn as a, gn as o, hn as s, mn as c, on as l, pn as u, sn as d, st as f } from "./doc.DoLlUurT.js";
import { r as p } from "./useFormReset.ClC-r4N4.js";
import { i as m } from "./useFormValidation.CExHgpbK.js";
import { n as h } from "./Text.CWB1nGTv.js";
import { t as g } from "./useToggle.CVY5ACZc.js";
import { n as _ } from "./react-dom.B9zIfLd2.js";
import { i as v } from "./ToggleButton.DdDl1WJr.js";
import { t as y } from "./VisuallyHidden.DNi0NmtP.js";
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
var x = e(_(), 1), S = (0, x.createContext)(null), C = (0, x.createContext)(null), w = (0, x.createContext)(null), T = (0, x.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...g } = e;
	[e, t] = l(g, t, S);
	let { validationBehavior: _ } = u(m) || {}, y = e.validationBehavior ?? _ ?? `native`, T = c((0, x.useMemo)(() => o(n, e.inputRef === void 0 ? null : e.inputRef), [n, e.inputRef])), E = v(e), D = b({
		...a(e),
		children: typeof e.children == `function` || e.children,
		validationBehavior: y
	}, E, T), { descriptionProps: O, errorMessageProps: k, isSelected: A, isDisabled: j, isReadOnly: M, isInvalid: N, validationDetails: P, validationErrors: F } = D, I = d({
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
	}), L = f(e, { global: !0 });
	return delete L.id, delete L.onClick, x.createElement(i.div, {
		...s(L, I),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": A || void 0,
		"data-disabled": j || void 0,
		"data-readonly": M || void 0,
		"data-invalid": N || void 0,
		"data-required": e.isRequired || void 0
	}, x.createElement(r, { values: [
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
}), E = (0, x.forwardRef)(function(e, r) {
	let { labelProps: a, inputProps: o, isSelected: c, isDisabled: l, isReadOnly: u, isPressed: p, isInvalid: m, inputRef: h, defaultClassName: g, isRequired: _ } = (0, x.useContext)(w), { isFocused: v, isFocusVisible: b, focusProps: S } = t(), T = l || u, E = (0, x.useContext)(C), { hoverProps: D, isHovered: O } = n({
		...e,
		isDisabled: T
	}), k = d({
		...e,
		defaultClassName: g,
		values: {
			isSelected: c,
			isPressed: p,
			isHovered: O,
			isFocused: v,
			isFocusVisible: b,
			isDisabled: l,
			isReadOnly: u,
			isInvalid: m,
			isRequired: _ || !1,
			state: E
		}
	}), A = f(e, { global: !0 });
	return delete A.id, delete A.onClick, x.createElement(i.label, {
		...s(A, a, D, k),
		ref: r,
		slot: e.slot || void 0,
		"data-selected": c || void 0,
		"data-pressed": p || void 0,
		"data-hovered": O || void 0,
		"data-focused": v || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": l || void 0,
		"data-readonly": u || void 0,
		"data-invalid": m || void 0,
		"data-required": _ || void 0
	}, x.createElement(y, { elementType: `span` }, x.createElement(`input`, {
		...s(o, S),
		ref: h
	})), k.children);
});
export { E as n, T as t };
