import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Q as n, X as r, an as i, cn as a, ct as o, dn as s, fn as c, hn as l, on as u, pn as d, sn as f, st as p } from "./doc.DoLlUurT.js";
import { r as m } from "./useFormReset.ClC-r4N4.js";
import { n as h } from "./Autocomplete.D4ncqRMy.js";
import { i as g } from "./useFormValidation.Drb6gvQC.js";
import { n as _ } from "./Group.FJVraJu6.js";
import { n as v, t as y } from "./useTextField.CoryCHp2.js";
import { n as b } from "./react-dom.B9zIfLd2.js";
import { n as x } from "./Text.CWB1nGTv.js";
var S = e(b(), 1), C = (0, S.createContext)({}), w = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, T = (0, S.forwardRef)(function(e, r) {
	[e, r] = u(e, r, C);
	let { hoverProps: i, isHovered: a } = n(e), { isFocused: o, isFocusVisible: c, focusProps: d } = t({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = f({
		...e,
		values: {
			isHovered: a,
			isFocused: o,
			isFocusVisible: c,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-TextArea`
	});
	return S.createElement(s.textarea, {
		...l(w(e), d, i),
		...m,
		ref: r,
		"data-focused": o || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": a || void 0,
		"data-focus-visible": c || void 0,
		"data-invalid": p || void 0
	});
}), E = (0, S.createContext)(null), D = o(function(e, t) {
	[e, t] = u(e, t, E);
	let { validationBehavior: n } = d(g) || {}, o = e.validationBehavior ?? n ?? `native`, l = (0, S.useRef)(null);
	[e, l] = u(e, l, h);
	let [b, w] = a(!e[`aria-label`] && !e[`aria-labelledby`]), [T, D] = (0, S.useState)(`input`), { labelProps: O, inputProps: k, descriptionProps: A, errorMessageProps: j, ...M } = y({
		...c(e),
		inputElementType: T,
		label: w,
		validationBehavior: o
	}, l), N = (0, S.useCallback)((e) => {
		l.current = e, e && D(e instanceof HTMLTextAreaElement ? `textarea` : `input`);
	}, [l]), P = f({
		...e,
		values: {
			isDisabled: e.isDisabled || !1,
			isInvalid: M.isInvalid,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: `react-aria-TextField`
	}), F = p(e, { global: !0 });
	return delete F.id, S.createElement(s.div, {
		...F,
		...P,
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": M.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, S.createElement(i, { values: [
		[r, {
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
