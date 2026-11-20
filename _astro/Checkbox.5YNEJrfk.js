import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Bt as t, F as n, H as r, Ht as i, Jt as a, Kt as o, N as s, P as c, Ut as l, Vt as u, Xt as d, Yt as f, Zt as p, j as m, qt as h } from "./useOverflow.Dq483xd0.js";
import { r as g } from "./useFormReset.BBxMt31i.js";
import { a as _, c as v, i as y, n as b, o as x, s as S } from "./useFormValidation.L_5g13Dg.js";
import { n as C } from "./Text.DXbJB4jb.js";
import { t as w } from "./useToggle.BTs-J-IS.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { i as E } from "./ToggleButton.D_YySXWN.js";
import { t as D } from "./useControlledState.DijOhE0s.js";
import { t as O } from "./VisuallyHidden.CPLGlJAY.js";
var k = new WeakMap();
function A(e, t) {
	let { isDisabled: i, name: a, form: o, validationBehavior: s = `aria` } = e, { isInvalid: c, validationErrors: l, validationDetails: u } = t.displayValidation, { labelProps: f, fieldProps: p, descriptionProps: m, errorMessageProps: h } = b({
		...e,
		labelElementType: `span`,
		isInvalid: c,
		errorMessage: e.errorMessage || l
	});
	k.set(t, {
		name: a,
		form: o,
		descriptionId: m.id,
		errorMessageId: h.id,
		validationBehavior: s
	});
	let g = r(e, { labelable: !0 }), { focusWithinProps: _ } = n({
		onBlurWithin: e.onBlur,
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	return {
		groupProps: d(g, {
			role: `group`,
			"aria-disabled": i || void 0,
			...p,
			..._
		}),
		labelProps: f,
		descriptionProps: m,
		errorMessageProps: h,
		isInvalid: c,
		validationErrors: l,
		validationDetails: u
	};
}
var j = e(T(), 1);
function M(e, t, n) {
	let { labelProps: r, inputProps: i, descriptionProps: a, errorMessageProps: o, isSelected: s, isPressed: c, isDisabled: l, isReadOnly: u, isInvalid: f, validationErrors: p, validationDetails: m } = w(e, t, n), { isIndeterminate: h } = e;
	return (0, j.useEffect)(() => {
		n.current && (n.current.indeterminate = !!h);
	}), {
		labelProps: d(r, (0, j.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), [])),
		inputProps: i,
		descriptionProps: a,
		errorMessageProps: o,
		isSelected: s,
		isPressed: c,
		isDisabled: l,
		isReadOnly: u,
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
var F = (0, j.createContext)(null), I = (0, j.createContext)(null), L = (0, j.createContext)(null), R = (0, j.createContext)(null), z = (0, j.forwardRef)(function(e, n) {
	[e, n] = u(e, n, L);
	let { validationBehavior: s } = a(y) || {}, c = e.validationBehavior ?? s ?? `native`, f = P({
		...e,
		validationBehavior: c
	}), [p, h] = l(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: _, labelProps: v, descriptionProps: b, errorMessageProps: x, ...S } = A({
		...e,
		label: h,
		validationBehavior: c
	}, f), w = i({
		...e,
		values: {
			isDisabled: f.isDisabled,
			isReadOnly: f.isReadOnly,
			isRequired: e.isRequired || !1,
			isInvalid: f.isInvalid,
			state: f
		},
		defaultClassName: `react-aria-CheckboxGroup`
	}), T = r(e, { global: !0 });
	return j.createElement(o.div, {
		...d(T, w, _),
		ref: n,
		slot: e.slot || void 0,
		"data-readonly": f.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": f.isInvalid || void 0,
		"data-disabled": e.isDisabled || void 0
	}, j.createElement(t, { values: [
		[R, f],
		[m, {
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
}), B = (0, j.createContext)(null), V = (0, j.forwardRef)(function(e, n) {
	let { inputRef: a = null, ...s } = e;
	[e, n] = u(s, n, I);
	let c = (0, j.useContext)(R), [l, f] = H(e, a), { descriptionProps: p, errorMessageProps: m, isSelected: h, isDisabled: _, isReadOnly: v, isInvalid: y, validationDetails: b, validationErrors: x } = l, S = i({
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
	}), w = r(e, { global: !0 });
	return delete w.id, delete w.onClick, j.createElement(o.div, {
		...d(w, S),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": h || void 0,
		"data-indeterminate": e.isIndeterminate || void 0,
		"data-disabled": _ || void 0,
		"data-readonly": v || void 0,
		"data-invalid": y || void 0,
		"data-required": e.isRequired || void 0
	}, j.createElement(t, { values: [
		[B, {
			...l,
			inputRef: f,
			defaultClassName: `react-aria-CheckboxButton`,
			isIndeterminate: e.isIndeterminate,
			isRequired: e.isRequired
		}],
		[C, { slots: {
			description: p,
			errorMessage: m
		} }],
		[g, c ? null : {
			isInvalid: y,
			validationDetails: b,
			validationErrors: x
		}]
	] }, S.children));
});
function H(e, t) {
	let { validationBehavior: n } = a(y) || {}, r = e.validationBehavior ?? n ?? `native`, i = (0, j.useContext)(R), o = f((0, j.useMemo)(() => p(t, e.inputRef === void 0 ? null : e.inputRef), [t, e.inputRef])), s = {
		...h(e),
		children: typeof e.children == `function` || e.children,
		value: e.value,
		validationBehavior: r
	};
	return [i ? N(s, i, o) : M(s, E(e), o), o];
}
var U = (0, j.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = u(r, t, F);
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
}), W = (0, j.forwardRef)(function(e, t) {
	let { labelProps: n, inputProps: a, isSelected: l, isDisabled: u, isReadOnly: f, isPressed: p, isInvalid: m, inputRef: h, defaultClassName: g, isIndeterminate: _, isRequired: v } = (0, j.useContext)(B), { isFocused: y, isFocusVisible: b, focusProps: x } = c(), S = u || f, { hoverProps: C, isHovered: w } = s({
		...e,
		isDisabled: S
	}), T = i({
		...e,
		defaultClassName: g,
		values: {
			isSelected: l,
			isIndeterminate: _ || !1,
			isPressed: p,
			isHovered: w,
			isFocused: y,
			isFocusVisible: b,
			isDisabled: u,
			isReadOnly: f,
			isInvalid: m,
			isRequired: v || !1
		}
	}), E = r(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(o.label, {
		...d(E, n, C, T),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": l || void 0,
		"data-indeterminate": _ || void 0,
		"data-pressed": p || void 0,
		"data-hovered": w || void 0,
		"data-focused": y || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": u || void 0,
		"data-readonly": f || void 0,
		"data-invalid": m || void 0,
		"data-required": v || void 0
	}, j.createElement(O, { elementType: `span` }, j.createElement(`input`, {
		...d(a, x),
		ref: h
	})), T.children);
});
export { F as a, V as i, z as n, I as o, W as r, U as t };
