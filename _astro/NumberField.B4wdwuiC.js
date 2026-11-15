import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { R as t, Z as n, cn as r, ct as i, fn as a, ln as o, mn as s, on as c, pn as l, sn as u, yt as d } from "./doc.C_PtMNUB.js";
import { r as f } from "./useFormReset.Cf-RVIHo.js";
import { i as p } from "./useFormValidation.DOqf-YmE.js";
import { n as m } from "./Group.CmTJ4Xbt.js";
import { n as h } from "./useTextField.DqlAegV0.js";
import { n as g } from "./Text.3KJW7jIs.js";
import { n as _, t as v } from "./useNumberFieldState.CU_TFVDZ.js";
import { n as y } from "./react-dom.B9zIfLd2.js";
var b = e(y(), 1), x = (0, b.createContext)(null), S = (0, b.createContext)(null), C = (0, b.forwardRef)(function(e, y) {
	[e, y] = u(e, y, x);
	let { validationBehavior: C } = s(p) || {}, w = e.validationBehavior ?? C ?? `native`, { locale: T } = d(), E = v({
		...e,
		locale: T,
		validationBehavior: w
	}), D = (0, b.useRef)(null), [O, k] = o(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: A, groupProps: j, inputProps: M, incrementButtonProps: N, decrementButtonProps: P, descriptionProps: F, errorMessageProps: I, ...L } = _({
		...l(e),
		label: k,
		validationBehavior: w
	}, E, D), R = r({
		...e,
		values: {
			state: E,
			isDisabled: e.isDisabled || !1,
			isInvalid: L.isInvalid || !1,
			isRequired: e.isRequired || !1,
			isReadOnly: e.isReadOnly || !1
		},
		defaultClassName: `react-aria-NumberField`
	}), z = i(e, { global: !0 });
	return delete z.id, b.createElement(c, { values: [
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
