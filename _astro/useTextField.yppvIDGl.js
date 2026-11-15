import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { $ as n, Q as r, Qt as i, ct as a, dn as o, ft as s, hn as c, on as l, sn as u, st as d } from "./doc.DoLlUurT.js";
import { c as f, n as p, t as m } from "./useFormValidation.CExHgpbK.js";
import { t as h } from "./useControlledState.DijOhE0s.js";
import { t as g } from "./useFormReset.ClC-r4N4.js";
var _ = e(t(), 1), v = (0, _.createContext)({}), y = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, b = a(function(e, t) {
	[e, t] = l(e, t, v);
	let { hoverProps: i, isHovered: a } = r({
		...e,
		isDisabled: e.disabled
	}), { isFocused: s, isFocusVisible: d, focusProps: f } = n({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = u({
		...e,
		values: {
			isHovered: a,
			isFocused: s,
			isFocusVisible: d,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-Input`
	});
	return _.createElement(o.input, {
		...c(y(e), f, i),
		...m,
		ref: t,
		"data-focused": s || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": a || void 0,
		"data-focus-visible": d || void 0,
		"data-invalid": p || void 0
	});
});
function x(e, t) {
	let { inputElementType: n = `input`, isDisabled: r = !1, isRequired: a = !1, isReadOnly: o = !1, type: l = `text`, validationBehavior: u = `aria` } = e, [v, y] = h(e.value, e.defaultValue || ``, e.onChange), { focusableProps: b } = s(e, t), x = f({
		...e,
		value: v
	}), { isInvalid: S, validationErrors: C, validationDetails: w } = x.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = p({
		...e,
		isInvalid: S,
		errorMessage: e.errorMessage || C
	}), k = d(e, { labelable: !0 }), A = {
		type: l,
		pattern: e.pattern
	}, [j] = (0, _.useState)(v);
	return g(t, e.defaultValue ?? j, y), m(e, x, t), {
		labelProps: T,
		inputProps: c(k, n === `input` ? A : void 0, {
			disabled: r,
			readOnly: o,
			required: a && u === `native`,
			"aria-required": a && u === `aria` || void 0,
			"aria-invalid": S || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-activedescendant": e[`aria-activedescendant`],
			"aria-autocomplete": e[`aria-autocomplete`],
			"aria-haspopup": e[`aria-haspopup`],
			"aria-controls": e[`aria-controls`],
			value: v,
			onChange: (e) => y(i(e).value),
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
