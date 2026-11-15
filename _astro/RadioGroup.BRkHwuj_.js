import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Q as n, Qt as r, X as i, an as a, cn as o, dn as s, et as c, fn as l, ft as u, gn as d, hn as f, ht as p, mn as m, on as h, pn as g, rn as _, sn as v, st as y, tt as b, vn as x, vt as S } from "./doc.DoLlUurT.js";
import { r as C, t as w } from "./useFormReset.ClC-r4N4.js";
import { c as T, i as E, n as D, t as O } from "./useFormValidation.CExHgpbK.js";
import { c as k, r as A, s as j } from "./FocusScope.bOWhljI-.js";
import { n as M } from "./Text.CWB1nGTv.js";
import { t as N } from "./useSlot.C8u3PjSG.js";
import { n as P } from "./react-dom.B9zIfLd2.js";
import { t as F } from "./useControlledState.DijOhE0s.js";
import { t as I } from "./VisuallyHidden.DNi0NmtP.js";
var L = new WeakMap(), R = e(P(), 1);
function z(e, t, n) {
	let { value: r, children: i, "aria-label": a, "aria-labelledby": o, onPressStart: s, onPressEnd: c, onPressChange: l, onPress: d, onPressUp: p, onClick: m } = e, h = e.isDisabled || t.isDisabled, g = t.selectedValue === r, _ = (e) => {
		e.stopPropagation(), t.setSelectedValue(r);
	}, { pressProps: v, isPressed: x } = b({
		onPressStart: s,
		onPressEnd: c,
		onPressChange: l,
		onPress: d,
		onPressUp: p,
		onClick: m,
		isDisabled: h
	}), { pressProps: S, isPressed: C } = b({
		onPressStart: s,
		onPressEnd: c,
		onPressChange: l,
		onPressUp: p,
		onClick: m,
		isDisabled: h,
		onPress(e) {
			d?.(e), t.setSelectedValue(r), n.current?.focus();
		}
	}), { focusableProps: T } = u(f(e, { onFocus: () => t.setLastFocusedValue(r) }), n), E = f(v, T), D = y(e, { labelable: !0 }), k = -1;
	t.selectedValue == null ? (t.lastFocusedValue === r || t.lastFocusedValue == null) && (k = 0) : t.selectedValue === r && (k = 0), h && (k = void 0);
	let { name: A, form: j, descriptionId: M, errorMessageId: P, validationBehavior: F } = L.get(t);
	w(n, t.defaultSelectedValue, t.setSelectedValue), O({ validationBehavior: F }, t, n);
	let I = N();
	return {
		labelProps: f(S, (0, R.useMemo)(() => ({
			onClick: (e) => e.preventDefault(),
			onMouseDown: (e) => e.preventDefault()
		}), [])),
		inputProps: f(D, {
			...E,
			type: `radio`,
			name: A,
			form: j,
			tabIndex: k,
			disabled: h,
			required: t.isRequired && F === `native`,
			checked: g,
			value: r,
			onChange: _,
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
		isPressed: x || C
	};
}
function B(e, t) {
	let { name: n, form: i, isReadOnly: a, isRequired: o, isDisabled: s, orientation: l = `vertical`, validationBehavior: u = `aria` } = e, { direction: d } = S(), { isInvalid: m, validationErrors: h, validationDetails: g } = t.displayValidation, { labelProps: v, fieldProps: b, descriptionProps: C, errorMessageProps: w } = D({
		...e,
		labelElementType: `span`,
		isInvalid: t.isInvalid,
		errorMessage: e.errorMessage || h
	}), T = y(e, { labelable: !0 }), { focusWithinProps: E } = c({
		onBlurWithin(n) {
			e.onBlur?.(n), t.selectedValue || t.setLastFocusedValue(null);
		},
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	function O(e, n) {
		let i = A(n.currentTarget, {
			from: r(n),
			accept: (e) => e instanceof _(e).HTMLInputElement && e.type === `radio`
		}), a;
		return e === `next` ? (a = i.nextNode(), a ||= (i.currentNode = n.currentTarget, i.firstChild())) : (a = i.previousNode(), a ||= (i.currentNode = n.currentTarget, i.lastChild())), a ? (a.focus(), t.setSelectedValue(a.value), !0) : !1;
	}
	let { keyboardProps: k } = p({
		shortcuts: {
			ArrowRight: (e) => O(d === `rtl` && l !== `vertical` ? `prev` : `next`, e),
			ArrowLeft: (e) => O(d === `rtl` && l !== `vertical` ? `next` : `prev`, e),
			ArrowDown: (e) => O(`next`, e),
			ArrowUp: (e) => O(`prev`, e)
		},
		allowRepeats: !0
	}), j = x(n);
	return L.set(t, {
		name: j,
		form: i,
		descriptionId: C.id,
		errorMessageId: w.id,
		validationBehavior: u
	}), {
		radioGroupProps: f(T, {
			role: `radiogroup`,
			...k,
			"aria-invalid": t.isInvalid || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-readonly": a || void 0,
			"aria-required": o || void 0,
			"aria-disabled": s || void 0,
			"aria-orientation": l,
			...b,
			...E
		}),
		labelProps: v,
		descriptionProps: C,
		errorMessageProps: w,
		isInvalid: m,
		validationErrors: h,
		validationDetails: g
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
	let { validationBehavior: n } = g(E) || {}, r = e.validationBehavior ?? n ?? `native`, c = U({
		...e,
		validationBehavior: r
	}), [l, u] = o(!e[`aria-label`] && !e[`aria-labelledby`]), { radioGroupProps: d, labelProps: p, descriptionProps: m, errorMessageProps: _, ...b } = B({
		...e,
		label: u,
		validationBehavior: r
	}, c), x = v({
		...e,
		values: {
			orientation: e.orientation || `vertical`,
			isDisabled: c.isDisabled,
			isReadOnly: c.isReadOnly,
			isRequired: c.isRequired,
			isInvalid: c.isInvalid,
			state: c
		},
		defaultClassName: `react-aria-RadioGroup`
	}), S = y(e, { global: !0 });
	return R.createElement(s.div, {
		...f(S, x, d),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `vertical`,
		"data-invalid": c.isInvalid || void 0,
		"data-disabled": c.isDisabled || void 0,
		"data-readonly": c.isReadOnly || void 0,
		"data-required": c.isRequired || void 0
	}, R.createElement(a, { values: [
		[K, c],
		[i, {
			...p,
			ref: l,
			elementType: `span`
		}],
		[M, { slots: {
			description: m,
			errorMessage: _
		} }],
		[C, b]
	] }, R.createElement(k, null, x.children)));
}), J = (0, R.createContext)(null), Y = (0, R.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = h(r, t, G);
	let i = R.useContext(K), o = m((0, R.useMemo)(() => d(n, e.inputRef === void 0 ? null : e.inputRef), [n, e.inputRef])), c = z({
		...l(e),
		children: typeof e.children == `function` || e.children
	}, i, o), { descriptionProps: u, isSelected: p, isDisabled: g } = c, _ = v({
		...e,
		defaultClassName: `react-aria-RadioField`,
		values: {
			isSelected: p,
			isDisabled: g,
			isReadOnly: i.isReadOnly,
			isInvalid: i.isInvalid,
			isRequired: i.isRequired
		}
	}), b = y(e, { global: !0 });
	return delete b.id, delete b.onClick, R.createElement(s.div, {
		...f(b, _),
		ref: t,
		"data-selected": p || void 0,
		"data-disabled": g || void 0,
		"data-readonly": i.isReadOnly || void 0,
		"data-invalid": i.isInvalid || void 0,
		"data-required": i.isRequired || void 0
	}, R.createElement(a, { values: [
		[j, { isSelected: p }],
		[J, {
			...c,
			inputRef: o,
			defaultClassName: `react-aria-RadioButton`
		}],
		[M, { slots: { description: u } }]
	] }, _.children));
}), X = (0, R.forwardRef)(function(e, r) {
	let { labelProps: i, inputProps: a, isSelected: o, isDisabled: c, isPressed: l, defaultClassName: u, inputRef: d } = (0, R.useContext)(J), p = R.useContext(K), { isFocused: m, isFocusVisible: h, focusProps: g } = t(), _ = c || p.isReadOnly, { hoverProps: b, isHovered: x } = n({
		...e,
		isDisabled: _
	}), S = v({
		...e,
		defaultClassName: u,
		values: {
			isSelected: o,
			isPressed: l,
			isHovered: x,
			isFocused: m,
			isFocusVisible: h,
			isDisabled: c,
			isReadOnly: p.isReadOnly,
			isInvalid: p.isInvalid,
			isRequired: p.isRequired
		}
	}), C = y(e, { global: !0 });
	return delete C.id, delete C.onClick, R.createElement(s.label, {
		...f(C, i, b, S),
		ref: r,
		"data-selected": o || void 0,
		"data-pressed": l || void 0,
		"data-hovered": x || void 0,
		"data-focused": m || void 0,
		"data-focus-visible": h || void 0,
		"data-disabled": c || void 0,
		"data-readonly": p.isReadOnly || void 0,
		"data-invalid": p.isInvalid || void 0,
		"data-required": p.isRequired || void 0
	}, R.createElement(I, { elementType: `span` }, R.createElement(`input`, {
		...f(a, g),
		ref: d
	})), S.children);
});
export { q as n, X as r, Y as t };
