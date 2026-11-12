import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, Dt as r, E as i, Et as a, L as o, Mt as s, Tt as c, h as l, jt as u, n as d, t as f, wt as p } from "./createLucideIcon.npgQlVHx.js";
import { i as m } from "./useFormValidation.CKcLNQoz.js";
import { n as h, t as g } from "./useNumberFieldState.CL10pJl5.js";
import { n as _ } from "./Text.DxhsPAdy.js";
import { r as v } from "./useFormReset.B5f8O4ea.js";
import { n as y } from "./Group.CbcnDyoG.js";
import { n as b } from "./useTextField.D1QWrtYY.js";
var x = e(t(), 1), S = (0, x.createContext)(null), C = (0, x.createContext)(null), w = (0, x.forwardRef)(function(e, t) {
	[e, t] = c(e, t, S);
	let { validationBehavior: f } = s(m) || {}, w = e.validationBehavior ?? f ?? `native`, { locale: T } = o(), E = g({
		...e,
		locale: T,
		validationBehavior: w
	}), D = (0, x.useRef)(null), [O, k] = r(!e[`aria-label`] && !e[`aria-labelledby`]), { labelProps: A, groupProps: j, inputProps: M, incrementButtonProps: N, decrementButtonProps: P, descriptionProps: F, errorMessageProps: I, ...L } = h({
		...u(e),
		label: k,
		validationBehavior: w
	}, E, D), R = a({
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
	return delete z.id, x.createElement(p, { values: [
		[C, E],
		[y, j],
		[b, {
			...M,
			ref: D
		}],
		[l, {
			...A,
			ref: O
		}],
		[d, { slots: {
			increment: N,
			decrement: P
		} }],
		[_, { slots: {
			description: F,
			errorMessage: I
		} }],
		[v, L]
	] }, x.createElement(n.div, {
		...z,
		...R,
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": L.isInvalid || void 0
	}), e.name && x.createElement(`input`, {
		type: `hidden`,
		name: e.name,
		form: e.form,
		value: isNaN(E.numberValue) ? `` : E.numberValue,
		disabled: e.isDisabled || void 0
	}));
}), T = {
	name: `rotate-ccw`,
	size: 24,
	node: [[`path`, {
		d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,
		key: `1357e3`
	}], [`path`, {
		d: `M3 3v5h5`,
		key: `1xhq8a`
	}]]
};
T.node;
var E = f(T);
export { w as n, E as t };
