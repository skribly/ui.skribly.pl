import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { H as n, Ht as r, Kt as i, N as a, Nt as o, P as s, U as c, Vt as l, Xt as u, q as d } from "./useOverflow.Dq483xd0.js";
import { t as f } from "./useControlledState.DijOhE0s.js";
import { t as p } from "./useFormReset.BBxMt31i.js";
import { c as m, n as h, t as g } from "./useFormValidation.L_5g13Dg.js";
var _ = e(t(), 1), v = (0, _.createContext)({}), y = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, b = c(function(e, t) {
	[e, t] = l(e, t, v);
	let { hoverProps: n, isHovered: o } = a({
		...e,
		isDisabled: e.disabled
	}), { isFocused: c, isFocusVisible: d, focusProps: f } = s({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = r({
		...e,
		values: {
			isHovered: o,
			isFocused: c,
			isFocusVisible: d,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-Input`
	});
	return _.createElement(i.input, {
		...u(y(e), f, n),
		...m,
		ref: t,
		"data-focused": c || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": o || void 0,
		"data-focus-visible": d || void 0,
		"data-invalid": p || void 0
	});
});
function x(e, t) {
	let { inputElementType: r = `input`, isDisabled: i = !1, isRequired: a = !1, isReadOnly: s = !1, type: c = `text`, validationBehavior: l = `aria` } = e, [v, y] = f(e.value, e.defaultValue || ``, e.onChange), { focusableProps: b } = d(e, t), x = m({
		...e,
		value: v
	}), { isInvalid: S, validationErrors: C, validationDetails: w } = x.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = h({
		...e,
		isInvalid: S,
		errorMessage: e.errorMessage || C
	}), k = n(e, { labelable: !0 }), A = {
		type: c,
		pattern: e.pattern
	}, [j] = (0, _.useState)(v);
	return p(t, e.defaultValue ?? j, y), g(e, x, t), {
		labelProps: T,
		inputProps: u(k, r === `input` ? A : void 0, {
			disabled: i,
			readOnly: s,
			required: a && l === `native`,
			"aria-required": a && l === `aria` || void 0,
			"aria-invalid": S || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-activedescendant": e[`aria-activedescendant`],
			"aria-autocomplete": e[`aria-autocomplete`],
			"aria-haspopup": e[`aria-haspopup`],
			"aria-controls": e[`aria-controls`],
			value: v,
			onChange: (e) => y(o(e).value),
			autoComplete: e.autoComplete,
			autoCapitalize: e.autoCapitalize,
			maxLength: e.maxLength,
			minLength: e.minLength,
			name: e.name,
			form: e.form,
			placeholder: e.placeholder,
			inputMode: e.inputMode,
			autoCorrect: e.autoCorrect,
			spellCheck: e.spellCheck,
			enterKeyHint: e.enterKeyHint,
			onCopy: e.onCopy,
			onCut: e.onCut,
			onPaste: e.onPaste,
			onCompositionEnd: e.onCompositionEnd,
			onCompositionStart: e.onCompositionStart,
			onCompositionUpdate: e.onCompositionUpdate,
			onSelect: e.onSelect,
			onBeforeInput: e.onBeforeInput,
			onInput: e.onInput,
			...b,
			...E
		}),
		descriptionProps: D,
		errorMessageProps: O,
		isInvalid: S,
		validationErrors: C,
		validationDetails: w
	};
}
export { v as n, b as r, x as t };
