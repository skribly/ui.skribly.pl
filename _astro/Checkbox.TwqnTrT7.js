import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Z as n, _n as r, cn as i, ct as a, et as o, fn as s, gn as c, hn as l, ln as u, mn as d, on as f, pn as p, sn as m, tt as h } from "./doc.C_PtMNUB.js";
import { r as g } from "./useFormReset.Cf-RVIHo.js";
import { a as _, c as v, i as y, n as b, o as x, s as S } from "./useFormValidation.DOqf-YmE.js";
import { n as C } from "./Text.3KJW7jIs.js";
import { t as w } from "./useToggle.Bpyc5L_9.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { i as E } from "./ToggleButton.D3fOu9dM.js";
import { t as D } from "./useControlledState.DijOhE0s.js";
import { t as O } from "./VisuallyHidden.BNHsLrt2.js";
var k = new WeakMap();
function A(e, t) {
	let { isDisabled: n, name: r, form: i, validationBehavior: o = `aria` } = e, { isInvalid: s, validationErrors: l, validationDetails: u } = t.displayValidation, { labelProps: d, fieldProps: f, descriptionProps: p, errorMessageProps: m } = b({
		...e,
		labelElementType: `span`,
		isInvalid: s,
		errorMessage: e.errorMessage || l
	});
	k.set(t, {
		name: r,
		form: i,
		descriptionId: p.id,
		errorMessageId: m.id,
		validationBehavior: o
	});
	let g = a(e, { labelable: !0 }), { focusWithinProps: _ } = h({
		onBlurWithin: e.onBlur,
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	return {
		groupProps: c(g, {
			role: `group`,
			"aria-disabled": n || void 0,
			...f,
			..._
		}),
		labelProps: d,
		descriptionProps: p,
		errorMessageProps: m,
		isInvalid: s,
		validationErrors: l,
		validationDetails: u
	};
}
var j = e(T(), 1);
function M(e, t, n) {
	let { labelProps: r, inputProps: i, descriptionProps: a, errorMessageProps: o, isSelected: s, isPressed: l, isDisabled: u, isReadOnly: d, isInvalid: f, validationErrors: p, validationDetails: m } = w(e, t, n), { isIndeterminate: h } = e;
	return (0, j.useEffect)(() => {
		n.current && (n.current.indeterminate = !!h);
	}), {
		labelProps: c(r, (0, j.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), [])),
		inputProps: i,
		descriptionProps: a,
		errorMessageProps: o,
		isSelected: s,
		isPressed: l,
		isDisabled: u,
		isReadOnly: d,
		isInvalid: f,
		validationErrors: p,
		validationDetails: m
	};
}
function N(e, t, n) {
	let r = E({
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isSelected: t.isSelected(e.value),
		defaultSelected: t.defaultValue.includes(e.value),
		onChange(n) {
			n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
		}
	}), { name: i, form: a, descriptionId: o, errorMessageId: s, validationBehavior: c } = k.get(t);
	c = e.validationBehavior ?? c;
	let { realtimeValidation: l } = v({
		...e,
		value: r.isSelected,
		name: void 0,
		validationBehavior: `aria`
	}), u = (0, j.useRef)(S), d = () => {
		t.setInvalid(e.value, l.isInvalid ? l : u.current);
	};
	(0, j.useEffect)(d);
	let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : l, p = c === `native` ? t.displayValidation : f, m = M({
		...e,
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isDisabled: e.isDisabled || t.isDisabled,
		name: e.name || i,
		form: e.form || a,
		isRequired: e.isRequired ?? t.isRequired,
		validationBehavior: c,
		[x]: {
			realtimeValidation: f,
			displayValidation: p,
			resetValidation: t.resetValidation,
			commitValidation: t.commitValidation,
			updateValidation(e) {
				u.current = e, d();
			}
		}
	}, r, n);
	return {
		...m,
		inputProps: {
			...m.inputProps,
			"aria-describedby": [
				m.inputProps[`aria-describedby`],
				t.isInvalid ? s : null,
				o
			].filter(Boolean).join(` `) || void 0
		}
	};
}
function P(e = {}) {
	let [t, n] = D(e.value, e.defaultValue || [], e.onChange), [r] = (0, j.useState)(t), i = !!e.isRequired && t.length === 0, a = (0, j.useRef)(new Map()), o = v({
		...e,
		value: t
	}), s = o.displayValidation.isInvalid;
	return {
		...o,
		value: t,
		defaultValue: e.defaultValue ?? r,
		setValue(t) {
			e.isReadOnly || e.isDisabled || n(t);
		},
		isDisabled: e.isDisabled || !1,
		isReadOnly: e.isReadOnly || !1,
		isSelected(e) {
			return t.includes(e);
		},
		addValue(t) {
			e.isReadOnly || e.isDisabled || n((e) => e.includes(t) ? e : e.concat(t));
		},
		removeValue(r) {
			e.isReadOnly || e.isDisabled || t.includes(r) && n(t.filter((e) => e !== r));
		},
		toggleValue(r) {
			e.isReadOnly || e.isDisabled || (t.includes(r) ? n(t.filter((e) => e !== r)) : n(t.concat(r)));
		},
		setInvalid(e, t) {
			let n = new Map(a.current);
			t.isInvalid ? n.set(e, t) : n.delete(e), a.current = n, o.updateValidation(_(...n.values()));
		},
		validationState: e.validationState ?? (s ? `invalid` : null),
		isInvalid: s,
		isRequired: i
	};
}
var F = (0, j.createContext)(null), I = (0, j.createContext)(null), L = (0, j.createContext)(null), R = (0, j.createContext)(null), z = (0, j.forwardRef)(function(e, t) {
	[e, t] = m(e, t, L);
	let { validationBehavior: r } = d(y) || {}, o = e.validationBehavior ?? r ?? `native`, l = P({
		...e,
		validationBehavior: o
	}), [p, h] = u(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: _, labelProps: v, descriptionProps: b, errorMessageProps: x, ...S } = A({
		...e,
		label: h,
		validationBehavior: o
	}, l), w = i({
		...e,
		values: {
			isDisabled: l.isDisabled,
			isReadOnly: l.isReadOnly,
			isRequired: e.isRequired || !1,
			isInvalid: l.isInvalid,
			state: l
		},
		defaultClassName: `react-aria-CheckboxGroup`
	}), T = a(e, { global: !0 });
	return j.createElement(s.div, {
		...c(T, w, _),
		ref: t,
		slot: e.slot || void 0,
		"data-readonly": l.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": l.isInvalid || void 0,
		"data-disabled": e.isDisabled || void 0
	}, j.createElement(f, { values: [
		[R, l],
		[n, {
			...v,
			ref: p,
			elementType: `span`
		}],
		[C, { slots: {
			description: b,
			errorMessage: x
		} }],
		[g, S]
	] }, w.children));
}), B = (0, j.createContext)(null), V = (0, j.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = m(r, t, I);
	let o = (0, j.useContext)(R), [l, u] = H(e, n), { descriptionProps: d, errorMessageProps: p, isSelected: h, isDisabled: _, isReadOnly: v, isInvalid: y, validationDetails: b, validationErrors: x } = l, S = i({
		...e,
		defaultClassName: `react-aria-CheckboxField`,
		values: {
			isSelected: h,
			isIndeterminate: e.isIndeterminate || !1,
			isDisabled: _,
			isReadOnly: v,
			isInvalid: y,
			isRequired: e.isRequired || !1
		}
	}), w = a(e, { global: !0 });
	return delete w.id, delete w.onClick, j.createElement(s.div, {
		...c(w, S),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": h || void 0,
		"data-indeterminate": e.isIndeterminate || void 0,
		"data-disabled": _ || void 0,
		"data-readonly": v || void 0,
		"data-invalid": y || void 0,
		"data-required": e.isRequired || void 0
	}, j.createElement(f, { values: [
		[B, {
			...l,
			inputRef: u,
			defaultClassName: `react-aria-CheckboxButton`,
			isIndeterminate: e.isIndeterminate,
			isRequired: e.isRequired
		}],
		[C, { slots: {
			description: d,
			errorMessage: p
		} }],
		[g, o ? null : {
			isInvalid: y,
			validationDetails: b,
			validationErrors: x
		}]
	] }, S.children));
});
function H(e, t) {
	let { validationBehavior: n } = d(y) || {}, i = e.validationBehavior ?? n ?? `native`, a = (0, j.useContext)(R), o = l((0, j.useMemo)(() => r(t, e.inputRef === void 0 ? null : e.inputRef), [t, e.inputRef])), s = {
		...p(e),
		children: typeof e.children == `function` || e.children,
		value: e.value,
		validationBehavior: i
	};
	return [a ? N(s, a, o) : M(s, E(e), o), o];
}
var U = (0, j.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = m(r, t, F);
	let [i, a] = H(e, n);
	return j.createElement(B.Provider, { value: {
		...i,
		inputRef: a,
		defaultClassName: `react-aria-Checkbox`,
		isIndeterminate: e.isIndeterminate,
		isRequired: e.isRequired
	} }, j.createElement(W, {
		...e,
		ref: t
	}));
}), W = (0, j.forwardRef)(function(e, n) {
	let { labelProps: r, inputProps: l, isSelected: u, isDisabled: d, isReadOnly: f, isPressed: p, isInvalid: m, inputRef: h, defaultClassName: g, isIndeterminate: _, isRequired: v } = (0, j.useContext)(B), { isFocused: y, isFocusVisible: b, focusProps: x } = o(), S = d || f, { hoverProps: C, isHovered: w } = t({
		...e,
		isDisabled: S
	}), T = i({
		...e,
		defaultClassName: g,
		values: {
			isSelected: u,
			isIndeterminate: _ || !1,
			isPressed: p,
			isHovered: w,
			isFocused: y,
			isFocusVisible: b,
			isDisabled: d,
			isReadOnly: f,
			isInvalid: m,
			isRequired: v || !1
		}
	}), E = a(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(s.label, {
		...c(E, r, C, T),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": u || void 0,
		"data-indeterminate": _ || void 0,
		"data-pressed": p || void 0,
		"data-hovered": w || void 0,
		"data-focused": y || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": d || void 0,
		"data-readonly": f || void 0,
		"data-invalid": m || void 0,
		"data-required": v || void 0
	}, j.createElement(O, { elementType: `span` }, j.createElement(`input`, {
		...c(l, x),
		ref: h
	})), T.children);
});
export { F as a, V as i, z as n, I as o, W as r, U as t };
