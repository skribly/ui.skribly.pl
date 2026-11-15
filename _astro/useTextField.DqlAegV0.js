import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { $ as n, $t as r, cn as i, ct as a, et as o, fn as s, gn as c, lt as l, pt as u, sn as d } from "./doc.C_PtMNUB.js";
import { t as f } from "./useControlledState.DijOhE0s.js";
import { t as p } from "./useFormReset.Cf-RVIHo.js";
import { c as m, n as h, t as g } from "./useFormValidation.DOqf-YmE.js";
var _ = e(t(), 1), v = (0, _.createContext)({}), y = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, b = l(function(e, t) {
	[e, t] = d(e, t, v);
	let { hoverProps: r, isHovered: a } = n({
		...e,
		isDisabled: e.disabled
	}), { isFocused: l, isFocusVisible: u, focusProps: f } = o({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), p = !!e[`aria-invalid`] && e[`aria-invalid`] !== `false`, m = i({
		...e,
		values: {
			isHovered: a,
			isFocused: l,
			isFocusVisible: u,
			isDisabled: e.disabled || !1,
			isInvalid: p
		},
		defaultClassName: `react-aria-Input`
	});
	return _.createElement(s.input, {
		...c(y(e), f, r),
		...m,
		ref: t,
		"data-focused": l || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": a || void 0,
		"data-focus-visible": u || void 0,
		"data-invalid": p || void 0
	});
});
function x(e, t) {
	let { inputElementType: n = `input`, isDisabled: i = !1, isRequired: o = !1, isReadOnly: s = !1, type: l = `text`, validationBehavior: d = `aria` } = e, [v, y] = f(e.value, e.defaultValue || ``, e.onChange), { focusableProps: b } = u(e, t), x = m({
		...e,
		value: v
	}), { isInvalid: S, validationErrors: C, validationDetails: w } = x.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = h({
		...e,
		isInvalid: S,
		errorMessage: e.errorMessage || C
	}), k = a(e, { labelable: !0 }), A = {
		type: l,
		pattern: e.pattern
	}, [j] = (0, _.useState)(v);
	return p(t, e.defaultValue ?? j, y), g(e, x, t), {
		labelProps: T,
		inputProps: c(k, n === `input` ? A : void 0, {
			disabled: i,
			readOnly: s,
			required: o && d === `native`,
			"aria-required": o && d === `aria` || void 0,
			"aria-invalid": S || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-activedescendant": e[`aria-activedescendant`],
			"aria-autocomplete": e[`aria-autocomplete`],
			"aria-haspopup": e[`aria-haspopup`],
			"aria-controls": e[`aria-controls`],
			value: v,
			onChange: (e) => y(r(e).value),
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
