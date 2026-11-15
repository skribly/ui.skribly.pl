import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { L as t, X as n, an as r, cn as i, dn as a, fn as o, on as s, pn as c, sn as l, st as u, vt as d } from "./doc.DoLlUurT.js";
import { r as f } from "./useFormReset.ClC-r4N4.js";
import { i as p } from "./useFormValidation.Drb6gvQC.js";
import { n as m } from "./Group.FJVraJu6.js";
import { n as h } from "./useTextField.CoryCHp2.js";
import { n as g } from "./Text.CWB1nGTv.js";
import { n as _, t as v } from "./useNumberFieldState.Cd2p0iSU.js";
import { n as y } from "./react-dom.B9zIfLd2.js";
var b = e(y(), 1), x = (0, b.createContext)(null), S = (0, b.createContext)(null), C = (0, b.forwardRef)(function(e, y) {
	[e, y] = s(e, y, x);
	let { validationBehavior: C } = c(p) || {}, w = e.validationBehavior ?? C ?? `native`, { locale: T } = d(), E = v({
		...e,
		locale: T,
		validationBehavior: w
	}), D = (0, b.useRef)(null), [O, k] = i(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: A, groupProps: j, inputProps: M, incrementButtonProps: N, decrementButtonProps: P, descriptionProps: F, errorMessageProps: I, ...L } = _({
		...o(e),
		label: k,
		validationBehavior: w
	}, E, D), R = l({
		...e,
		values: {
			state: E,
			isDisabled: e.isDisabled || !1,
			isInvalid: L.isInvalid || !1,
			isRequired: e.isRequired || !1,
			isReadOnly: e.isReadOnly || !1
		},
		defaultClassName: `react-aria-NumberField`
	}), z = u(e, { global: !0 });
	return delete z.id, b.createElement(r, { values: [
		[S, E],
		[m, j],
		[h, {
			...M,
			ref: D
		}],
		[n, {
			...A,
			ref: O
		}],
		[t, { slots: {
			increment: N,
			decrement: P
		} }],
		[g, { slots: {
			description: F,
			errorMessage: I
		} }],
		[f, L]
	] }, b.createElement(a.div, {
		...z,
		...R,
		ref: y,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": L.isInvalid || void 0
	}), e.name && b.createElement(`input`, {
		type: `hidden`,
		name: e.name,
		form: e.form,
		value: isNaN(E.numberValue) ? `` : E.numberValue,
		disabled: e.isDisabled || void 0
	}));
});
export { C as t };
