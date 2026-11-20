import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Bt as t, H as n, Ht as r, Jt as i, Kt as a, N as o, P as s, U as c, Ut as l, Vt as u, Xt as d, j as f, qt as p } from "./useOverflow.Dq483xd0.js";
import { r as m } from "./useFormReset.BBxMt31i.js";
import { n as h } from "./Autocomplete.CGc8yklO.js";
import { i as g } from "./useFormValidation.L_5g13Dg.js";
import { n as _ } from "./Group.C0q10xim.js";
import { n as v, t as y } from "./useTextField.BpC71hWm.js";
import { n as b } from "./react-dom.B9zIfLd2.js";
import { n as x } from "./Text.DXbJB4jb.js";
var S = e(b(), 1), C = (0, S.createContext)({}), w = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, T = (0, S.forwardRef)(function(e, t) {
	[e, t] = u(e, t, C);
	let { hoverProps: n, isHovered: i } = o(e), { isFocused: c, isFocusVisible: l, focusProps: f } = s({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = r({
		...e,
		values: {
			isHovered: i,
			isFocused: c,
			isFocusVisible: l,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-TextArea`
	});
	return S.createElement(a.textarea, {
		...d(w(e), f, n),
		...m,
		ref: t,
		"data-focused": c || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": i || void 0,
		"data-focus-visible": l || void 0,
		"data-invalid": p || void 0
	});
}), E = (0, S.createContext)(null), D = c(function(e, o) {
	[e, o] = u(e, o, E);
	let { validationBehavior: s } = i(g) || {}, c = e.validationBehavior ?? s ?? `native`, d = (0, S.useRef)(null);
	[e, d] = u(e, d, h);
	let [b, w] = l(!e[`aria-label`] && !e[`aria-labelledby`]), [T, D] = (0, S.useState)(`input`), { labelProps: O, inputProps: k, descriptionProps: A, errorMessageProps: j, ...M } = y({
		...p(e),
		inputElementType: T,
		label: w,
		validationBehavior: c
	}, d), N = (0, S.useCallback)((e) => {
		d.current = e, e && D(e instanceof HTMLTextAreaElement ? `textarea` : `input`);
	}, [d]), P = r({
		...e,
		values: {
			isDisabled: e.isDisabled || !1,
			isInvalid: M.isInvalid,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: `react-aria-TextField`
	}), F = n(e, { global: !0 });
	return delete F.id, S.createElement(a.div, {
		...F,
		...P,
		ref: o,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": M.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, S.createElement(t, { values: [
		[f, {
			...O,
			ref: b
		}],
		[v, {
			...k,
			ref: N
		}],
		[C, {
			...k,
			ref: N
		}],
		[_, {
			role: `presentation`,
			isInvalid: M.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[x, { slots: {
			description: A,
			errorMessage: j
		} }],
		[m, M]
	] }, P.children));
});
export { T as n, D as t };
