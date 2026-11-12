import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { E as t, Pt as n, _t as r, b as i, j as a } from "./createLucideIcon.npgQlVHx.js";
import { t as o } from "./useFormReset.B5f8O4ea.js";
import { c as s, o as c, t as l } from "./useFormValidation.CKcLNQoz.js";
import { t as u } from "./useSlot.7PcnTpQp.js";
import { n as d } from "./react-dom.B9zIfLd2.js";
var f = e(d(), 1);
function p(e, d, p) {
	let { isDisabled: m = !1, isReadOnly: h = !1, value: g, name: _, form: v, children: y, isRequired: b, validationBehavior: x = `aria`, "aria-label": S, "aria-labelledby": C, "aria-describedby": w, onPressStart: T, onPressEnd: E, onPressChange: D, onPress: O, onPressUp: k, onClick: A } = e, j = s({
		...e,
		value: d.isSelected
	}), { isInvalid: M, validationErrors: N, validationDetails: P } = j.displayValidation;
	l(e, j, p);
	let F = (e) => {
		e.stopPropagation(), d.setSelected(r(e).checked);
	}, { pressProps: I, isPressed: L } = i({
		onPressStart: T,
		onPressEnd: E,
		onPressChange: D,
		onPress: O,
		onPressUp: k,
		onClick: A,
		isDisabled: m
	}), [R, z] = (0, f.useState)(!1), { pressProps: B } = i({
		onPressStart(e) {
			e.pointerType === `keyboard` || e.pointerType === `virtual` ? e.continuePropagation() : (T?.(e), D?.(!0), z(!0));
		},
		onPressEnd(e) {
			e.pointerType === `keyboard` || e.pointerType === `virtual` ? e.continuePropagation() : (E?.(e), D?.(!1), z(!1));
		},
		onPressUp(e) {
			e.pointerType === `keyboard` || e.pointerType === `virtual` ? e.continuePropagation() : k?.(e);
		},
		onClick: A,
		onPress(t) {
			if (t.pointerType === `keyboard` || t.pointerType === `virtual`) {
				t.continuePropagation();
				return;
			}
			O?.(t), d.toggle(), p.current?.focus();
			let { [c]: n } = e, { commitValidation: r } = n || j;
			r();
		},
		isDisabled: m || h
	}), { focusableProps: V } = a(e, p), H = n(I, V), U = t(e, { labelable: !0 });
	o(p, d.defaultSelected, d.setSelected);
	let W = u(), G = u();
	return {
		labelProps: n(B, { onClick: (e) => e.preventDefault() }),
		inputProps: n(U, {
			checked: d.isSelected,
			"aria-required": b && x === `aria` || void 0,
			required: b && x === `native`,
			"aria-invalid": M || e.validationState === `invalid` || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-controls": e[`aria-controls`],
			"aria-readonly": h || void 0,
			"aria-describedby": [
				W.id,
				G.id,
				w
			].filter(Boolean).join(` `) || void 0,
			onChange: F,
			disabled: m,
			...g == null ? {} : { value: g },
			name: _,
			form: v,
			type: `checkbox`,
			...H
		}),
		descriptionProps: W,
		errorMessageProps: G,
		isSelected: d.isSelected,
		isPressed: L || R,
		isDisabled: m,
		isReadOnly: h,
		isInvalid: M || e.validationState === `invalid`,
		validationErrors: N,
		validationDetails: P
	};
}
export { p as t };
