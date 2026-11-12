import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, Dt as n, E as r, Et as i, Ft as a, Mt as o, Nt as s, Pt as c, Tt as l, _ as u, h as d, jt as f, v as p, wt as m, y as h } from "./createLucideIcon.npgQlVHx.js";
import { r as g } from "./useFormReset.B5f8O4ea.js";
import { a as _, c as v, i as y, n as b, o as x, s as S } from "./useFormValidation.CKcLNQoz.js";
import { n as C } from "./Text.DxhsPAdy.js";
import { t as w } from "./useToggle.BjfKX6Zr.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { u as E } from "./slugs.CpBgIMWb.js";
import { t as D } from "./useControlledState.DijOhE0s.js";
import { t as O } from "./VisuallyHidden.DXeJgMmE.js";
var k = new WeakMap();
function A(e, t) {
	let { isDisabled: n, name: i, form: a, validationBehavior: o = `aria` } = e, { isInvalid: s, validationErrors: l, validationDetails: u } = t.displayValidation, { labelProps: d, fieldProps: f, descriptionProps: p, errorMessageProps: m } = b({
		...e,
		labelElementType: `span`,
		isInvalid: s,
		errorMessage: e.errorMessage || l
	});
	k.set(t, {
		name: i,
		form: a,
		descriptionId: p.id,
		errorMessageId: m.id,
		validationBehavior: o
	});
	let g = r(e, { labelable: !0 }), { focusWithinProps: _ } = h({
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
var F = (0, j.createContext)(null), I = (0, j.createContext)(null), L = (0, j.createContext)(null), R = (0, j.createContext)(null), z = (0, j.forwardRef)(function(e, a) {
	[e, a] = l(e, a, L);
	let { validationBehavior: s } = o(y) || {}, u = e.validationBehavior ?? s ?? `native`, f = P({
		...e,
		validationBehavior: u
	}), [p, h] = n(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: _, labelProps: v, descriptionProps: b, errorMessageProps: x, ...S } = A({
		...e,
		label: h,
		validationBehavior: u
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
	return j.createElement(t.div, {
		...c(T, w, _),
		ref: a,
		slot: e.slot || void 0,
		"data-readonly": f.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": f.isInvalid || void 0,
		"data-disabled": e.isDisabled || void 0
	}, j.createElement(m, { values: [
		[R, f],
		[d, {
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
	let { inputRef: a = null, ...o } = e;
	[e, n] = l(o, n, I);
	let s = (0, j.useContext)(R), [u, d] = H(e, a), { descriptionProps: f, errorMessageProps: p, isSelected: h, isDisabled: _, isReadOnly: v, isInvalid: y, validationDetails: b, validationErrors: x } = u, S = i({
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
	return delete w.id, delete w.onClick, j.createElement(t.div, {
		...c(w, S),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": h || void 0,
		"data-indeterminate": e.isIndeterminate || void 0,
		"data-disabled": _ || void 0,
		"data-readonly": v || void 0,
		"data-invalid": y || void 0,
		"data-required": e.isRequired || void 0
	}, j.createElement(m, { values: [
		[B, {
			...u,
			inputRef: d,
			defaultClassName: `react-aria-CheckboxButton`,
			isIndeterminate: e.isIndeterminate,
			isRequired: e.isRequired
		}],
		[C, { slots: {
			description: f,
			errorMessage: p
		} }],
		[g, s ? null : {
			isInvalid: y,
			validationDetails: b,
			validationErrors: x
		}]
	] }, S.children));
});
function H(e, t) {
	let { validationBehavior: n } = o(y) || {}, r = e.validationBehavior ?? n ?? `native`, i = (0, j.useContext)(R), c = s((0, j.useMemo)(() => a(t, e.inputRef === void 0 ? null : e.inputRef), [t, e.inputRef])), l = {
		...f(e),
		children: typeof e.children == `function` || e.children,
		value: e.value,
		validationBehavior: r
	};
	return [i ? N(l, i, c) : M(l, E(e), c), c];
}
var U = (0, j.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = l(r, t, F);
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
	let { labelProps: a, inputProps: o, isSelected: s, isDisabled: l, isReadOnly: d, isPressed: f, isInvalid: m, inputRef: h, defaultClassName: g, isIndeterminate: _, isRequired: v } = (0, j.useContext)(B), { isFocused: y, isFocusVisible: b, focusProps: x } = p(), S = l || d, { hoverProps: C, isHovered: w } = u({
		...e,
		isDisabled: S
	}), T = i({
		...e,
		defaultClassName: g,
		values: {
			isSelected: s,
			isIndeterminate: _ || !1,
			isPressed: f,
			isHovered: w,
			isFocused: y,
			isFocusVisible: b,
			isDisabled: l,
			isReadOnly: d,
			isInvalid: m,
			isRequired: v || !1
		}
	}), E = r(e, { global: !0 });
	return delete E.id, delete E.onClick, j.createElement(t.label, {
		...c(E, a, C, T),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": s || void 0,
		"data-indeterminate": _ || void 0,
		"data-pressed": f || void 0,
		"data-hovered": w || void 0,
		"data-focused": y || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": l || void 0,
		"data-readonly": d || void 0,
		"data-invalid": m || void 0,
		"data-required": v || void 0
	}, j.createElement(O, { elementType: `span` }, j.createElement(`input`, {
		...c(o, x),
		ref: h
	})), T.children);
});
export { F as a, V as i, z as n, I as o, W as r, U as t };
