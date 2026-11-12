import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, D as n, Dt as r, E as i, Et as a, Mt as o, Pt as s, Tt as c, _ as l, h as u, jt as d, v as f, wt as p } from "./createLucideIcon.npgQlVHx.js";
import { r as m } from "./useFormReset.B5f8O4ea.js";
import { n as h } from "./Autocomplete.BUqxPt-N.js";
import { i as g } from "./useFormValidation.CKcLNQoz.js";
import { n as _ } from "./Group.CbcnDyoG.js";
import { n as v, t as y } from "./useTextField.D1QWrtYY.js";
import { n as b } from "./react-dom.B9zIfLd2.js";
import { n as x } from "./Text.DxhsPAdy.js";
var S = e(b(), 1), C = (0, S.createContext)({}), w = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, T = (0, S.forwardRef)(function(e, n) {
	[e, n] = c(e, n, C);
	let { hoverProps: r, isHovered: i } = l(e), { isFocused: o, isFocusVisible: u, focusProps: d } = f({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = a({
		...e,
		values: {
			isHovered: i,
			isFocused: o,
			isFocusVisible: u,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-TextArea`
	});
	return S.createElement(t.textarea, {
		...s(w(e), d, r),
		...m,
		ref: n,
		"data-focused": o || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": i || void 0,
		"data-focus-visible": u || void 0,
		"data-invalid": p || void 0
	});
}), E = (0, S.createContext)(null), D = n(function(e, n) {
	[e, n] = c(e, n, E);
	let { validationBehavior: s } = o(g) || {}, l = e.validationBehavior ?? s ?? `native`, f = (0, S.useRef)(null);
	[e, f] = c(e, f, h);
	let [b, w] = r(!e[`aria-label`] && !e[`aria-labelledby`]), [T, D] = (0, S.useState)(`input`), { labelProps: O, inputProps: k, descriptionProps: A, errorMessageProps: j, ...M } = y({
		...d(e),
		inputElementType: T,
		label: w,
		validationBehavior: l
	}, f), N = (0, S.useCallback)((e) => {
		f.current = e, e && D(e instanceof HTMLTextAreaElement ? `textarea` : `input`);
	}, [f]), P = a({
		...e,
		values: {
			isDisabled: e.isDisabled || !1,
			isInvalid: M.isInvalid,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: `react-aria-TextField`
	}), F = i(e, { global: !0 });
	return delete F.id, S.createElement(t.div, {
		...F,
		...P,
		ref: n,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": M.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, S.createElement(p, { values: [
		[u, {
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
