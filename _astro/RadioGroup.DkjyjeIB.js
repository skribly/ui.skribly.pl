import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Bt as r, F as i, H as a, Ht as o, I as s, Jt as c, Kt as l, N as u, Nt as d, P as f, Rt as p, Ut as m, Vt as h, X as g, Xt as _, Yt as v, Zt as y, j as b, q as x, qt as S } from "./useOverflow.Dq483xd0.js";
import { r as C, t as w } from "./useFormReset.BBxMt31i.js";
import { c as T, i as E, n as D, t as O } from "./useFormValidation.L_5g13Dg.js";
import { c as k, r as A, s as j } from "./FocusScope.aBBixRPA.js";
import { n as M } from "./Text.DXbJB4jb.js";
import { t as N } from "./useSlot.BxFMosV_.js";
import { n as P } from "./react-dom.B9zIfLd2.js";
import { t as F } from "./useControlledState.DijOhE0s.js";
import { t as I } from "./VisuallyHidden.CPLGlJAY.js";
var L = new WeakMap(), R = e(P(), 1);
function z(e, t, n) {
	let { value: r, children: i, "aria-label": o, "aria-labelledby": c, onPressStart: l, onPressEnd: u, onPressChange: d, onPress: f, onPressUp: p, onClick: m } = e, h = e.isDisabled || t.isDisabled, g = t.selectedValue === r, v = (e) => {
		e.stopPropagation(), t.setSelectedValue(r);
	}, { pressProps: y, isPressed: b } = s({
		onPressStart: l,
		onPressEnd: u,
		onPressChange: d,
		onPress: f,
		onPressUp: p,
		onClick: m,
		isDisabled: h
	}), { pressProps: S, isPressed: C } = s({
		onPressStart: l,
		onPressEnd: u,
		onPressChange: d,
		onPressUp: p,
		onClick: m,
		isDisabled: h,
		onPress(e) {
			f?.(e), t.setSelectedValue(r), n.current?.focus();
		}
	}), { focusableProps: T } = x(_(e, { onFocus: () => t.setLastFocusedValue(r) }), n), E = _(y, T), D = a(e, { labelable: !0 }), k = -1;
	t.selectedValue == null ? (t.lastFocusedValue === r || t.lastFocusedValue == null) && (k = 0) : t.selectedValue === r && (k = 0), h && (k = void 0);
	let { name: A, form: j, descriptionId: M, errorMessageId: P, validationBehavior: F } = L.get(t);
	w(n, t.defaultSelectedValue, t.setSelectedValue), O({ validationBehavior: F }, t, n);
	let I = N();
	return {
		labelProps: _(S, (0, R.useMemo)(() => ({
			onClick: (e) => e.preventDefault(),
			onMouseDown: (e) => e.preventDefault()
		}), [])),
		inputProps: _(D, {
			...E,
			type: `radio`,
			name: A,
			form: j,
			tabIndex: k,
			disabled: h,
			required: t.isRequired && F === `native`,
			checked: g,
			value: r,
			onChange: v,
			"aria-describedby": [
				e[`aria-describedby`],
				I.id,
				t.isInvalid ? P : null,
				M
			].filter(Boolean).join(` `) || void 0
		}),
		descriptionProps: I,
		isDisabled: h,
		isSelected: g,
		isPressed: b || C
	};
}
function B(e, r) {
	let { name: o, form: s, isReadOnly: c, isRequired: l, isDisabled: u, orientation: f = `vertical`, validationBehavior: m = `aria` } = e, { direction: h } = t(), { isInvalid: v, validationErrors: y, validationDetails: b } = r.displayValidation, { labelProps: x, fieldProps: S, descriptionProps: C, errorMessageProps: w } = D({
		...e,
		labelElementType: `span`,
		isInvalid: r.isInvalid,
		errorMessage: e.errorMessage || y
	}), T = a(e, { labelable: !0 }), { focusWithinProps: E } = i({
		onBlurWithin(t) {
			e.onBlur?.(t), r.selectedValue || r.setLastFocusedValue(null);
		},
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	function O(e, t) {
		let n = A(t.currentTarget, {
			from: d(t),
			accept: (e) => e instanceof p(e).HTMLInputElement && e.type === `radio`
		}), i;
		return e === `next` ? (i = n.nextNode(), i ||= (n.currentNode = t.currentTarget, n.firstChild())) : (i = n.previousNode(), i ||= (n.currentNode = t.currentTarget, n.lastChild())), i ? (i.focus(), r.setSelectedValue(i.value), !0) : !1;
	}
	let { keyboardProps: k } = g({
		shortcuts: {
			ArrowRight: (e) => O(h === `rtl` && f !== `vertical` ? `prev` : `next`, e),
			ArrowLeft: (e) => O(h === `rtl` && f !== `vertical` ? `next` : `prev`, e),
			ArrowDown: (e) => O(`next`, e),
			ArrowUp: (e) => O(`prev`, e)
		},
		allowRepeats: !0
	}), j = n(o);
	return L.set(r, {
		name: j,
		form: s,
		descriptionId: C.id,
		errorMessageId: w.id,
		validationBehavior: m
	}), {
		radioGroupProps: _(T, {
			role: `radiogroup`,
			...k,
			"aria-invalid": r.isInvalid || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-readonly": c || void 0,
			"aria-required": l || void 0,
			"aria-disabled": u || void 0,
			"aria-orientation": f,
			...S,
			...E
		}),
		labelProps: x,
		descriptionProps: C,
		errorMessageProps: w,
		isInvalid: v,
		validationErrors: y,
		validationDetails: b
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
var W = (0, R.createContext)(null), G = (0, R.createContext)(null), K = (0, R.createContext)(null), q = (0, R.forwardRef)(function(e, t) {
	[e, t] = h(e, t, W);
	let { validationBehavior: n } = c(E) || {}, i = e.validationBehavior ?? n ?? `native`, s = U({
		...e,
		validationBehavior: i
	}), [u, d] = m(!e[`aria-label`] && !e[`aria-labelledby`]), { radioGroupProps: f, labelProps: p, descriptionProps: g, errorMessageProps: v, ...y } = B({
		...e,
		label: d,
		validationBehavior: i
	}, s), x = o({
		...e,
		values: {
			orientation: e.orientation || `vertical`,
			isDisabled: s.isDisabled,
			isReadOnly: s.isReadOnly,
			isRequired: s.isRequired,
			isInvalid: s.isInvalid,
			state: s
		},
		defaultClassName: `react-aria-RadioGroup`
	}), S = a(e, { global: !0 });
	return R.createElement(l.div, {
		..._(S, x, f),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `vertical`,
		"data-invalid": s.isInvalid || void 0,
		"data-disabled": s.isDisabled || void 0,
		"data-readonly": s.isReadOnly || void 0,
		"data-required": s.isRequired || void 0
	}, R.createElement(r, { values: [
		[K, s],
		[b, {
			...p,
			ref: u,
			elementType: `span`
		}],
		[M, { slots: {
			description: g,
			errorMessage: v
		} }],
		[C, y]
	] }, R.createElement(k, null, x.children)));
}), J = (0, R.createContext)(null), Y = (0, R.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...i } = e;
	[e, t] = h(i, t, G);
	let s = R.useContext(K), c = v((0, R.useMemo)(() => y(n, e.inputRef === void 0 ? null : e.inputRef), [n, e.inputRef])), u = z({
		...S(e),
		children: typeof e.children == `function` || e.children
	}, s, c), { descriptionProps: d, isSelected: f, isDisabled: p } = u, m = o({
		...e,
		defaultClassName: `react-aria-RadioField`,
		values: {
			isSelected: f,
			isDisabled: p,
			isReadOnly: s.isReadOnly,
			isInvalid: s.isInvalid,
			isRequired: s.isRequired
		}
	}), g = a(e, { global: !0 });
	return delete g.id, delete g.onClick, R.createElement(l.div, {
		..._(g, m),
		ref: t,
		"data-selected": f || void 0,
		"data-disabled": p || void 0,
		"data-readonly": s.isReadOnly || void 0,
		"data-invalid": s.isInvalid || void 0,
		"data-required": s.isRequired || void 0
	}, R.createElement(r, { values: [
		[j, { isSelected: f }],
		[J, {
			...u,
			inputRef: c,
			defaultClassName: `react-aria-RadioButton`
		}],
		[M, { slots: { description: d } }]
	] }, m.children));
}), X = (0, R.forwardRef)(function(e, t) {
	let { labelProps: n, inputProps: r, isSelected: i, isDisabled: s, isPressed: c, defaultClassName: d, inputRef: p } = (0, R.useContext)(J), m = R.useContext(K), { isFocused: h, isFocusVisible: g, focusProps: v } = f(), y = s || m.isReadOnly, { hoverProps: b, isHovered: x } = u({
		...e,
		isDisabled: y
	}), S = o({
		...e,
		defaultClassName: d,
		values: {
			isSelected: i,
			isPressed: c,
			isHovered: x,
			isFocused: h,
			isFocusVisible: g,
			isDisabled: s,
			isReadOnly: m.isReadOnly,
			isInvalid: m.isInvalid,
			isRequired: m.isRequired
		}
	}), C = a(e, { global: !0 });
	return delete C.id, delete C.onClick, R.createElement(l.label, {
		..._(C, n, b, S),
		ref: t,
		"data-selected": i || void 0,
		"data-pressed": c || void 0,
		"data-hovered": x || void 0,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		"data-disabled": s || void 0,
		"data-readonly": m.isReadOnly || void 0,
		"data-invalid": m.isInvalid || void 0,
		"data-required": m.isRequired || void 0
	}, R.createElement(I, { elementType: `span` }, R.createElement(`input`, {
		..._(r, v),
		ref: p
	})), S.children);
});
export { q as n, X as r, Y as t };
