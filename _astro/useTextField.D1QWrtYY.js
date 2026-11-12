import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, D as r, E as i, Et as a, Pt as o, Tt as s, _ as c, _t as l, j as u, v as d } from "./createLucideIcon.npgQlVHx.js";
import { c as f, n as p, t as m } from "./useFormValidation.CKcLNQoz.js";
import { t as h } from "./useControlledState.DijOhE0s.js";
import { t as g } from "./useFormReset.B5f8O4ea.js";
var _ = e(t(), 1), v = (0, _.createContext)({}), y = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, b = r(function(e, t) {
	[e, t] = s(e, t, v);
	let { hoverProps: r, isHovered: i } = c({
		...e,
		isDisabled: e.disabled
	}), { isFocused: l, isFocusVisible: u, focusProps: f } = d({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = a({
		...e,
		values: {
			isHovered: i,
			isFocused: l,
			isFocusVisible: u,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-Input`
	});
	return _.createElement(n.input, {
		...o(y(e), f, r),
		...m,
		ref: t,
		"data-focused": l || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": i || void 0,
		"data-focus-visible": u || void 0,
		"data-invalid": p || void 0
	});
});
function x(e, t) {
	let { inputElementType: n = `input`, isDisabled: r = !1, isRequired: a = !1, isReadOnly: s = !1, type: c = `text`, validationBehavior: d = `aria` } = e, [v, y] = h(e.value, e.defaultValue || ``, e.onChange), { focusableProps: b } = u(e, t), x = f({
		...e,
		value: v
	}), { isInvalid: S, validationErrors: C, validationDetails: w } = x.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = p({
		...e,
		isInvalid: S,
		errorMessage: e.errorMessage || C
	}), k = i(e, { labelable: !0 }), A = {
		type: c,
		pattern: e.pattern
	}, [j] = (0, _.useState)(v);
	return g(t, e.defaultValue ?? j, y), m(e, x, t), {
		labelProps: T,
		inputProps: o(k, n === `input` ? A : void 0, {
			disabled: r,
			readOnly: s,
			required: a && d === `native`,
			"aria-required": a && d === `aria` || void 0,
			"aria-invalid": S || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-activedescendant": e[`aria-activedescendant`],
			"aria-autocomplete": e[`aria-autocomplete`],
			"aria-haspopup": e[`aria-haspopup`],
			"aria-controls": e[`aria-controls`],
			value: v,
			onChange: (e) => y(l(e).value),
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
