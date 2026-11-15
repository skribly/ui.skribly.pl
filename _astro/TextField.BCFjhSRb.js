import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Z as n, cn as r, ct as i, et as a, fn as o, gn as s, ln as c, lt as l, mn as u, on as d, pn as f, sn as p } from "./doc.C_PtMNUB.js";
import { r as m } from "./useFormReset.Cf-RVIHo.js";
import { n as h } from "./Autocomplete.BYGvWyUq.js";
import { i as g } from "./useFormValidation.DOqf-YmE.js";
import { n as _ } from "./Group.CmTJ4Xbt.js";
import { n as v, t as y } from "./useTextField.DqlAegV0.js";
import { n as b } from "./react-dom.B9zIfLd2.js";
import { n as x } from "./Text.3KJW7jIs.js";
var S = e(b(), 1), C = (0, S.createContext)({}), w = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, T = (0, S.forwardRef)(function(e, n) {
	[e, n] = p(e, n, C);
	let { hoverProps: i, isHovered: c } = t(e), { isFocused: l, isFocusVisible: u, focusProps: d } = a({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), f = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = r({
		...e,
		values: {
			isHovered: c,
			isFocused: l,
			isFocusVisible: u,
			isDisabled: e.disabled || !1,
			isInvalid: f
		},
		defaultClassName: `react-aria-TextArea`
	});
	return S.createElement(o.textarea, {
		...s(w(e), d, i),
		...m,
		ref: n,
		"data-focused": l || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": c || void 0,
		"data-focus-visible": u || void 0,
		"data-invalid": f || void 0
	});
}), E = (0, S.createContext)(null), D = l(function(e, t) {
	[e, t] = p(e, t, E);
	let { validationBehavior: a } = u(g) || {}, s = e.validationBehavior ?? a ?? `native`, l = (0, S.useRef)(null);
	[e, l] = p(e, l, h);
	let [b, w] = c(!e[`aria-label`] && !e[`aria-labelledby`]), [T, D] = (0, S.useState)(`input`), { labelProps: O, inputProps: k, descriptionProps: A, errorMessageProps: j, ...M } = y({
		...f(e),
		inputElementType: T,
		label: w,
		validationBehavior: s
	}, l), N = (0, S.useCallback)((e) => {
		l.current = e, e && D(e instanceof HTMLTextAreaElement ? `textarea` : `input`);
	}, [l]), P = r({
		...e,
		values: {
			isDisabled: e.isDisabled || !1,
			isInvalid: M.isInvalid,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: `react-aria-TextField`
	}), F = i(e, { global: !0 });
	return delete F.id, S.createElement(o.div, {
		...F,
		...P,
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": M.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, S.createElement(d, { values: [
		[n, {
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
