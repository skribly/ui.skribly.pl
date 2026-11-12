import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, Dt as n, E as r, Et as i, Ft as a, L as o, Lt as s, Mt as c, Nt as l, P as u, Pt as d, St as f, Tt as p, _ as m, _t as h, b as g, h as _, j as v, jt as y, v as b, wt as x, y as S } from "./createLucideIcon.npgQlVHx.js";
import { r as C, t as w } from "./useFormReset.B5f8O4ea.js";
import { c as T, i as E, n as D, t as O } from "./useFormValidation.CKcLNQoz.js";
import { c as k, r as A, s as j } from "./FocusScope.Ba7RJw7M.js";
import { n as M } from "./Text.DxhsPAdy.js";
import { t as N } from "./useSlot.7PcnTpQp.js";
import { n as P } from "./react-dom.B9zIfLd2.js";
import { t as F } from "./useControlledState.DijOhE0s.js";
import { t as I } from "./VisuallyHidden.DXeJgMmE.js";
var L = new WeakMap(), R = e(P(), 1);
function z(e, t, n) {
	let { value: i, children: a, "aria-label": o, "aria-labelledby": s, onPressStart: c, onPressEnd: l, onPressChange: u, onPress: f, onPressUp: p, onClick: m } = e, h = e.isDisabled || t.isDisabled, _ = t.selectedValue === i, y = (e) => {
		e.stopPropagation(), t.setSelectedValue(i);
	}, { pressProps: b, isPressed: x } = g({
		onPressStart: c,
		onPressEnd: l,
		onPressChange: u,
		onPress: f,
		onPressUp: p,
		onClick: m,
		isDisabled: h
	}), { pressProps: S, isPressed: C } = g({
		onPressStart: c,
		onPressEnd: l,
		onPressChange: u,
		onPressUp: p,
		onClick: m,
		isDisabled: h,
		onPress(e) {
			f?.(e), t.setSelectedValue(i), n.current?.focus();
		}
	}), { focusableProps: T } = v(d(e, { onFocus: () => t.setLastFocusedValue(i) }), n), E = d(b, T), D = r(e, { labelable: !0 }), k = -1;
	t.selectedValue == null ? (t.lastFocusedValue === i || t.lastFocusedValue == null) && (k = 0) : t.selectedValue === i && (k = 0), h && (k = void 0);
	let { name: A, form: j, descriptionId: M, errorMessageId: P, validationBehavior: F } = L.get(t);
	w(n, t.defaultSelectedValue, t.setSelectedValue), O({ validationBehavior: F }, t, n);
	let I = N();
	return {
		labelProps: d(S, (0, R.useMemo)(() => ({
			onClick: (e) => e.preventDefault(),
			onMouseDown: (e) => e.preventDefault()
		}), [])),
		inputProps: d(D, {
			...E,
			type: `radio`,
			name: A,
			form: j,
			tabIndex: k,
			disabled: h,
			required: t.isRequired && F === `native`,
			checked: _,
			value: i,
			onChange: y,
			"aria-describedby": [
				e[`aria-describedby`],
				I.id,
				t.isInvalid ? P : null,
				M
			].filter(Boolean).join(` `) || void 0
		}),
		descriptionProps: I,
		isDisabled: h,
		isSelected: _,
		isPressed: x || C
	};
}
function B(e, t) {
	let { name: n, form: i, isReadOnly: a, isRequired: c, isDisabled: l, orientation: p = `vertical`, validationBehavior: m = `aria` } = e, { direction: g } = o(), { isInvalid: _, validationErrors: v, validationDetails: y } = t.displayValidation, { labelProps: b, fieldProps: x, descriptionProps: C, errorMessageProps: w } = D({
		...e,
		labelElementType: `span`,
		isInvalid: t.isInvalid,
		errorMessage: e.errorMessage || v
	}), T = r(e, { labelable: !0 }), { focusWithinProps: E } = S({
		onBlurWithin(n) {
			e.onBlur?.(n), t.selectedValue || t.setLastFocusedValue(null);
		},
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	function O(e, n) {
		let r = A(n.currentTarget, {
			from: h(n),
			accept: (e) => e instanceof f(e).HTMLInputElement && e.type === `radio`
		}), i;
		return e === `next` ? (i = r.nextNode(), i ||= (r.currentNode = n.currentTarget, r.firstChild())) : (i = r.previousNode(), i ||= (r.currentNode = n.currentTarget, r.lastChild())), i ? (i.focus(), t.setSelectedValue(i.value), !0) : !1;
	}
	let { keyboardProps: k } = u({
		shortcuts: {
			ArrowRight: (e) => O(g === `rtl` && p !== `vertical` ? `prev` : `next`, e),
			ArrowLeft: (e) => O(g === `rtl` && p !== `vertical` ? `next` : `prev`, e),
			ArrowDown: (e) => O(`next`, e),
			ArrowUp: (e) => O(`prev`, e)
		},
		allowRepeats: !0
	}), j = s(n);
	return L.set(t, {
		name: j,
		form: i,
		descriptionId: C.id,
		errorMessageId: w.id,
		validationBehavior: m
	}), {
		radioGroupProps: d(T, {
			role: `radiogroup`,
			...k,
			"aria-invalid": t.isInvalid || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-readonly": a || void 0,
			"aria-required": c || void 0,
			"aria-disabled": l || void 0,
			"aria-orientation": p,
			...x,
			...E
		}),
		labelProps: b,
		descriptionProps: C,
		errorMessageProps: w,
		isInvalid: _,
		validationErrors: v,
		validationDetails: y
	};
}
var V = Math.round(Math.random() * 1e10), H = 0;
function U(e) {
	let t = (0, R.useMemo)(() => e.name || `radio-group-${V}-${++H}`, [e.name]), [n, r] = F(e.value, e.defaultValue ?? null, e.onChange), [i] = (0, R.useState)(n), [a, o] = (0, R.useState)(null), s = T({
		...e,
		value: n
	}), c = (t) => {
		!e.isReadOnly && !e.isDisabled && (r(t), s.commitValidation());
	}, l = s.displayValidation.isInvalid;
	return {
		...s,
		name: t,
		selectedValue: n,
		defaultSelectedValue: e.value === void 0 ? e.defaultValue ?? null : i,
		setSelectedValue: c,
		lastFocusedValue: a,
		setLastFocusedValue: o,
		isDisabled: e.isDisabled || !1,
		isReadOnly: e.isReadOnly || !1,
		isRequired: e.isRequired || !1,
		validationState: e.validationState || (l ? `invalid` : null),
		isInvalid: l
	};
}
var W = (0, R.createContext)(null), G = (0, R.createContext)(null), K = (0, R.createContext)(null), q = (0, R.forwardRef)(function(e, a) {
	[e, a] = p(e, a, W);
	let { validationBehavior: o } = c(E) || {}, s = e.validationBehavior ?? o ?? `native`, l = U({
		...e,
		validationBehavior: s
	}), [u, f] = n(!e[`aria-label`] && !e[`aria-labelledby`]), { radioGroupProps: m, labelProps: h, descriptionProps: g, errorMessageProps: v, ...y } = B({
		...e,
		label: f,
		validationBehavior: s
	}, l), b = i({
		...e,
		values: {
			orientation: e.orientation || `vertical`,
			isDisabled: l.isDisabled,
			isReadOnly: l.isReadOnly,
			isRequired: l.isRequired,
			isInvalid: l.isInvalid,
			state: l
		},
		defaultClassName: `react-aria-RadioGroup`
	}), S = r(e, { global: !0 });
	return R.createElement(t.div, {
		...d(S, b, m),
		ref: a,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `vertical`,
		"data-invalid": l.isInvalid || void 0,
		"data-disabled": l.isDisabled || void 0,
		"data-readonly": l.isReadOnly || void 0,
		"data-required": l.isRequired || void 0
	}, R.createElement(x, { values: [
		[K, l],
		[_, {
			...h,
			ref: u,
			elementType: `span`
		}],
		[M, { slots: {
			description: g,
			errorMessage: v
		} }],
		[C, y]
	] }, R.createElement(k, null, b.children)));
}), J = (0, R.createContext)(null), Y = (0, R.forwardRef)(function(e, n) {
	let { inputRef: o = null, ...s } = e;
	[e, n] = p(s, n, G);
	let c = R.useContext(K), u = l((0, R.useMemo)(() => a(o, e.inputRef === void 0 ? null : e.inputRef), [o, e.inputRef])), f = z({
		...y(e),
		children: typeof e.children == `function` || e.children
	}, c, u), { descriptionProps: m, isSelected: h, isDisabled: g } = f, _ = i({
		...e,
		defaultClassName: `react-aria-RadioField`,
		values: {
			isSelected: h,
			isDisabled: g,
			isReadOnly: c.isReadOnly,
			isInvalid: c.isInvalid,
			isRequired: c.isRequired
		}
	}), v = r(e, { global: !0 });
	return delete v.id, delete v.onClick, R.createElement(t.div, {
		...d(v, _),
		ref: n,
		"data-selected": h || void 0,
		"data-disabled": g || void 0,
		"data-readonly": c.isReadOnly || void 0,
		"data-invalid": c.isInvalid || void 0,
		"data-required": c.isRequired || void 0
	}, R.createElement(x, { values: [
		[j, { isSelected: h }],
		[J, {
			...f,
			inputRef: u,
			defaultClassName: `react-aria-RadioButton`
		}],
		[M, { slots: { description: m } }]
	] }, _.children));
}), X = (0, R.forwardRef)(function(e, n) {
	let { labelProps: a, inputProps: o, isSelected: s, isDisabled: c, isPressed: l, defaultClassName: u, inputRef: f } = (0, R.useContext)(J), p = R.useContext(K), { isFocused: h, isFocusVisible: g, focusProps: _ } = b(), v = c || p.isReadOnly, { hoverProps: y, isHovered: x } = m({
		...e,
		isDisabled: v
	}), S = i({
		...e,
		defaultClassName: u,
		values: {
			isSelected: s,
			isPressed: l,
			isHovered: x,
			isFocused: h,
			isFocusVisible: g,
			isDisabled: c,
			isReadOnly: p.isReadOnly,
			isInvalid: p.isInvalid,
			isRequired: p.isRequired
		}
	}), C = r(e, { global: !0 });
	return delete C.id, delete C.onClick, R.createElement(t.label, {
		...d(C, a, y, S),
		ref: n,
		"data-selected": s || void 0,
		"data-pressed": l || void 0,
		"data-hovered": x || void 0,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		"data-disabled": c || void 0,
		"data-readonly": p.isReadOnly || void 0,
		"data-invalid": p.isInvalid || void 0,
		"data-required": p.isRequired || void 0
	}, R.createElement(I, { elementType: `span` }, R.createElement(`input`, {
		...d(o, _),
		ref: f
	})), S.children);
});
export { q as n, X as r, Y as t };
