import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, _n as n, cn as r, ct as i, et as a, fn as o, gn as s, hn as c, mn as l, on as u, pn as d, sn as f } from "./doc.C_PtMNUB.js";
import { r as p } from "./useFormReset.Cf-RVIHo.js";
import { i as m } from "./useFormValidation.DOqf-YmE.js";
import { n as h } from "./Text.3KJW7jIs.js";
import { t as g } from "./useToggle.Bpyc5L_9.js";
import { n as _ } from "./react-dom.B9zIfLd2.js";
import { i as v } from "./ToggleButton.D3fOu9dM.js";
import { t as y } from "./VisuallyHidden.BNHsLrt2.js";
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
	let { inputRef: a = null, ...g } = e;
	[e, t] = f(g, t, S);
	let { validationBehavior: _ } = l(m) || {}, y = e.validationBehavior ?? _ ?? `native`, T = c((0, x.useMemo)(() => n(a, e.inputRef === void 0 ? null : e.inputRef), [a, e.inputRef])), E = v(e), D = b({
		...d(e),
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
	}), L = i(e, { global: !0 });
	return delete L.id, delete L.onClick, x.createElement(o.div, {
		...s(L, I),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": A || void 0,
		"data-disabled": j || void 0,
		"data-readonly": M || void 0,
		"data-invalid": N || void 0,
		"data-required": e.isRequired || void 0
	}, x.createElement(u, { values: [
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
}), E = (0, x.forwardRef)(function(e, n) {
	let { labelProps: c, inputProps: l, isSelected: u, isDisabled: d, isReadOnly: f, isPressed: p, isInvalid: m, inputRef: h, defaultClassName: g, isRequired: _ } = (0, x.useContext)(w), { isFocused: v, isFocusVisible: b, focusProps: S } = a(), T = d || f, E = (0, x.useContext)(C), { hoverProps: D, isHovered: O } = t({
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
	}), A = i(e, { global: !0 });
	return delete A.id, delete A.onClick, x.createElement(o.label, {
		...s(A, c, D, k),
		ref: n,
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
		...s(l, S),
		ref: h
	})), k.children);
});
export { E as n, T as t };
