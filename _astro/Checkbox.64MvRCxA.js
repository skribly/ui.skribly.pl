import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Q as n, X as r, an as i, cn as a, dn as o, et as s, fn as c, gn as l, hn as u, mn as d, on as f, pn as p, sn as m, st as h } from "./doc.DoLlUurT.js";
import { r as g } from "./useFormReset.ClC-r4N4.js";
import { a as _, c as v, i as y, n as b, o as x, s as S } from "./useFormValidation.Drb6gvQC.js";
import { n as C } from "./Text.CWB1nGTv.js";
import { t as w } from "./useToggle.B0pIzgud.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { i as E } from "./ToggleButton.DdDl1WJr.js";
import { t as D } from "./useControlledState.DijOhE0s.js";
import { t as O } from "./VisuallyHidden.DNi0NmtP.js";
var k = new WeakMap();
function A(e, t) {
	let { isDisabled: n, name: r, form: i, validationBehavior: a = `aria` } = e, { isInvalid: o, validationErrors: c, validationDetails: l } = t.displayValidation, { labelProps: d, fieldProps: f, descriptionProps: p, errorMessageProps: m } = b({
		...e,
		labelElementType: `span`,
		isInvalid: o,
		errorMessage: e.errorMessage || c
	});
	k.set(t, {
		name: r,
		form: i,
		descriptionId: p.id,
		errorMessageId: m.id,
		validationBehavior: a
	});
	let g = h(e, { labelable: !0 }), { focusWithinProps: _ } = s({
		onBlurWithin: e.onBlur,
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	return {
		groupProps: u(g, {
			role: `group`,
			"aria-disabled": n || void 0,
			...f,
			..._
		}),
		labelProps: d,
		descriptionProps: p,
		errorMessageProps: m,
		isInvalid: o,
		validationErrors: c,
		validationDetails: l
	};
}
var j = e(T(), 1);
function M(e, t, n) {
	let { labelProps: r, inputProps: i, descriptionProps: a, errorMessageProps: o, isSelected: s, isPressed: c, isDisabled: l, isReadOnly: d, isInvalid: f, validationErrors: p, validationDetails: m } = w(e, t, n), { isIndeterminate: h } = e;
	return (0, j.useEffect)(() => {
		n.current && (n.current.indeterminate = !!h);
	}), {
		labelProps: u(r, (0, j.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), [])),
		inputProps: i,
		descriptionProps: a,
		errorMessageProps: o,
		isSelected: s,
		isPressed: c,
		isDisabled: l,
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
	[e, t] = f(e, t, L);
	let { validationBehavior: n } = p(y) || {}, s = e.validationBehavior ?? n ?? `native`, c = P({
		...e,
		validationBehavior: s
	}), [l, d] = a(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: _, labelProps: v, descriptionProps: b, errorMessageProps: x, ...S } = A({
		...e,
		label: d,
		validationBehavior: s
	}, c), w = m({
		...e,
		values: {
			isDisabled: c.isDisabled,
			isReadOnly: c.isReadOnly,
			isRequired: e.isRequired || !1,
			isInvalid: c.isInvalid,
			state: c
		},
		defaultClassName: `react-aria-CheckboxGroup`
	}), T = h(e, { global: !0 });
	return j.createElement(o.div, {
		...u(T, w, _),
		ref: t,
		slot: e.slot || void 0,
		"data-readonly": c.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": c.isInvalid || void 0,
		"data-disabled": e.isDisabled || void 0
	}, j.createElement(i, { values: [
		[R, c],
		[r, {
			...v,
			ref: l,
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
	[e, t] = f(r, t, I);
	let a = (0, j.useContext)(R), [s, c] = H(e, n), { descriptionProps: l, errorMessageProps: d, isSelected: p, isDisabled: _, isReadOnly: v, isInvalid: y, validationDetails: b, validationErrors: x } = s, S = m({
		...e,
		defaultClassName: `react-aria-CheckboxField`,
		values: {
			isSelected: p,
			isIndeterminate: e.isIndeterminate || !1,
			isDisabled: _,
			isReadOnly: v,
			isInvalid: y,
			isRequired: e.isRequired || !1
		}
	}), w = h(e, { global: !0 });
	return delete w.id, delete w.onClick, j.createElement(o.div, {
		...u(w, S),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": p || void 0,
		"data-indeterminate": e.isIndeterminate || void 0,
		"data-disabled": _ || void 0,
		"data-readonly": v || void 0,
		"data-invalid": y || void 0,
		"data-required": e.isRequired || void 0
	}, j.createElement(i, { values: [
		[B, {
			...s,
			inputRef: c,
			defaultClassName: `react-aria-CheckboxButton`,
			isIndeterminate: e.isIndeterminate,
			isRequired: e.isRequired
		}],
		[C, { slots: {
			description: l,
			errorMessage: d
		} }],
		[g, a ? null : {
			isInvalid: y,
			validationDetails: b,
			validationErrors: x
		}]
	] }, S.children));
});
function H(e, t) {
	let { validationBehavior: n } = p(y) || {}, r = e.validationBehavior ?? n ?? `native`, i = (0, j.useContext)(R), a = d((0, j.useMemo)(() => l(t, e.inputRef === void 0 ? null : e.inputRef), [t, e.inputRef])), o = {
		...c(e),
		children: typeof e.children == `function` || e.children,
		value: e.value,
		validationBehavior: r
	};
	return [i ? N(o, i, a) : M(o, E(e), a), a];
}
var U = (0, j.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = f(r, t, F);
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
}), W = (0, j.forwardRef)(function(e, r) {
	let { labelProps: i, inputProps: a, isSelected: s, isDisabled: c, isReadOnly: l, isPressed: d, isInvalid: f, inputRef: p, defaultClassName: g, isIndeterminate: _, isRequired: v } = (0, j.useContext)(B), { isFocused: y, isFocusVisible: b, focusProps: x } = t(), S = c || l, { hoverProps: C, isHovered: w } = n({
		...e,
		isDisabled: S
	}), T = m({
		...e,
		defaultClassName: g,
		values: {
			isSelected: s,
			isIndeterminate: _ || !1,
			isPressed: d,
			isHovered: w,
			isFocused: y,
			isFocusVisible: b,
			isDisabled: c,
			isReadOnly: l,
			isInvalid: f,
			isRequired: v || !1
		}
	}), E = h(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(o.label, {
		...u(E, i, C, T),
		ref: r,
		slot: e.slot || void 0,
		"data-selected": s || void 0,
		"data-indeterminate": _ || void 0,
		"data-pressed": d || void 0,
		"data-hovered": w || void 0,
		"data-focused": y || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": c || void 0,
		"data-readonly": l || void 0,
		"data-invalid": f || void 0,
		"data-required": v || void 0
	}, j.createElement(O, { elementType: `span` }, j.createElement(`input`, {
		...u(a, x),
		ref: p
	})), T.children);
});
export { F as a, V as i, z as n, I as o, W as r, U as t };
