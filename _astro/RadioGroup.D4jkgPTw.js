import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Z as r, _n as i, cn as a, ct as o, et as s, fn as c, gn as l, gt as u, hn as d, in as f, ln as p, mn as m, nt as h, on as g, pn as _, pt as v, sn as y, tt as b, yn as x, yt as S } from "./doc.C_PtMNUB.js";
import { r as C, t as w } from "./useFormReset.Cf-RVIHo.js";
import { c as T, i as E, n as D, t as O } from "./useFormValidation.DOqf-YmE.js";
import { c as k, r as A, s as j } from "./FocusScope.DSjTtRFm.js";
import { n as M } from "./Text.3KJW7jIs.js";
import { t as N } from "./useSlot.CWRcu-xc.js";
import { n as P } from "./react-dom.B9zIfLd2.js";
import { t as F } from "./useControlledState.DijOhE0s.js";
import { t as I } from "./VisuallyHidden.BNHsLrt2.js";
var L = new WeakMap(), R = e(P(), 1);
function z(e, t, n) {
	let { value: r, children: i, "aria-label": a, "aria-labelledby": s, onPressStart: c, onPressEnd: u, onPressChange: d, onPress: f, onPressUp: p, onClick: m } = e, g = e.isDisabled || t.isDisabled, _ = t.selectedValue === r, y = (e) => {
		e.stopPropagation(), t.setSelectedValue(r);
	}, { pressProps: b, isPressed: x } = h({
		onPressStart: c,
		onPressEnd: u,
		onPressChange: d,
		onPress: f,
		onPressUp: p,
		onClick: m,
		isDisabled: g
	}), { pressProps: S, isPressed: C } = h({
		onPressStart: c,
		onPressEnd: u,
		onPressChange: d,
		onPressUp: p,
		onClick: m,
		isDisabled: g,
		onPress(e) {
			f?.(e), t.setSelectedValue(r), n.current?.focus();
		}
	}), { focusableProps: T } = v(l(e, { onFocus: () => t.setLastFocusedValue(r) }), n), E = l(b, T), D = o(e, { labelable: !0 }), k = -1;
	t.selectedValue == null ? (t.lastFocusedValue === r || t.lastFocusedValue == null) && (k = 0) : t.selectedValue === r && (k = 0), g && (k = void 0);
	let { name: A, form: j, descriptionId: M, errorMessageId: P, validationBehavior: F } = L.get(t);
	w(n, t.defaultSelectedValue, t.setSelectedValue), O({ validationBehavior: F }, t, n);
	let I = N();
	return {
		labelProps: l(S, (0, R.useMemo)(() => ({
			onClick: (e) => e.preventDefault(),
			onMouseDown: (e) => e.preventDefault()
		}), [])),
		inputProps: l(D, {
			...E,
			type: `radio`,
			name: A,
			form: j,
			tabIndex: k,
			disabled: g,
			required: t.isRequired && F === `native`,
			checked: _,
			value: r,
			onChange: y,
			"aria-describedby": [
				e[`aria-describedby`],
				I.id,
				t.isInvalid ? P : null,
				M
			].filter(Boolean).join(` `) || void 0
		}),
		descriptionProps: I,
		isDisabled: g,
		isSelected: _,
		isPressed: x || C
	};
}
function B(e, t) {
	let { name: r, form: i, isReadOnly: a, isRequired: s, isDisabled: c, orientation: d = `vertical`, validationBehavior: p = `aria` } = e, { direction: m } = S(), { isInvalid: h, validationErrors: g, validationDetails: _ } = t.displayValidation, { labelProps: v, fieldProps: y, descriptionProps: C, errorMessageProps: w } = D({
		...e,
		labelElementType: `span`,
		isInvalid: t.isInvalid,
		errorMessage: e.errorMessage || g
	}), T = o(e, { labelable: !0 }), { focusWithinProps: E } = b({
		onBlurWithin(n) {
			e.onBlur?.(n), t.selectedValue || t.setLastFocusedValue(null);
		},
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	function O(e, r) {
		let i = A(r.currentTarget, {
			from: n(r),
			accept: (e) => e instanceof f(e).HTMLInputElement && e.type === `radio`
		}), a;
		return e === `next` ? (a = i.nextNode(), a ||= (i.currentNode = r.currentTarget, i.firstChild())) : (a = i.previousNode(), a ||= (i.currentNode = r.currentTarget, i.lastChild())), a ? (a.focus(), t.setSelectedValue(a.value), !0) : !1;
	}
	let { keyboardProps: k } = u({
		shortcuts: {
			ArrowRight: (e) => O(m === `rtl` && d !== `vertical` ? `prev` : `next`, e),
			ArrowLeft: (e) => O(m === `rtl` && d !== `vertical` ? `next` : `prev`, e),
			ArrowDown: (e) => O(`next`, e),
			ArrowUp: (e) => O(`prev`, e)
		},
		allowRepeats: !0
	}), j = x(r);
	return L.set(t, {
		name: j,
		form: i,
		descriptionId: C.id,
		errorMessageId: w.id,
		validationBehavior: p
	}), {
		radioGroupProps: l(T, {
			role: `radiogroup`,
			...k,
			"aria-invalid": t.isInvalid || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-readonly": a || void 0,
			"aria-required": s || void 0,
			"aria-disabled": c || void 0,
			"aria-orientation": d,
			...y,
			...E
		}),
		labelProps: v,
		descriptionProps: C,
		errorMessageProps: w,
		isInvalid: h,
		validationErrors: g,
		validationDetails: _
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
	[e, t] = y(e, t, W);
	let { validationBehavior: n } = m(E) || {}, i = e.validationBehavior ?? n ?? `native`, s = U({
		...e,
		validationBehavior: i
	}), [u, d] = p(!e[`aria-label`] && !e[`aria-labelledby`]), { radioGroupProps: f, labelProps: h, descriptionProps: _, errorMessageProps: v, ...b } = B({
		...e,
		label: d,
		validationBehavior: i
	}, s), x = a({
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
	}), S = o(e, { global: !0 });
	return R.createElement(c.div, {
		...l(S, x, f),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || `vertical`,
		"data-invalid": s.isInvalid || void 0,
		"data-disabled": s.isDisabled || void 0,
		"data-readonly": s.isReadOnly || void 0,
		"data-required": s.isRequired || void 0
	}, R.createElement(g, { values: [
		[K, s],
		[r, {
			...h,
			ref: u,
			elementType: `span`
		}],
		[M, { slots: {
			description: _,
			errorMessage: v
		} }],
		[C, b]
	] }, R.createElement(k, null, x.children)));
}), J = (0, R.createContext)(null), Y = (0, R.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = y(r, t, G);
	let s = R.useContext(K), u = d((0, R.useMemo)(() => i(n, e.inputRef === void 0 ? null : e.inputRef), [n, e.inputRef])), f = z({
		..._(e),
		children: typeof e.children == `function` || e.children
	}, s, u), { descriptionProps: p, isSelected: m, isDisabled: h } = f, v = a({
		...e,
		defaultClassName: `react-aria-RadioField`,
		values: {
			isSelected: m,
			isDisabled: h,
			isReadOnly: s.isReadOnly,
			isInvalid: s.isInvalid,
			isRequired: s.isRequired
		}
	}), b = o(e, { global: !0 });
	return delete b.id, delete b.onClick, R.createElement(c.div, {
		...l(b, v),
		ref: t,
		"data-selected": m || void 0,
		"data-disabled": h || void 0,
		"data-readonly": s.isReadOnly || void 0,
		"data-invalid": s.isInvalid || void 0,
		"data-required": s.isRequired || void 0
	}, R.createElement(g, { values: [
		[j, { isSelected: m }],
		[J, {
			...f,
			inputRef: u,
			defaultClassName: `react-aria-RadioButton`
		}],
		[M, { slots: { description: p } }]
	] }, v.children));
}), X = (0, R.forwardRef)(function(e, n) {
	let { labelProps: r, inputProps: i, isSelected: u, isDisabled: d, isPressed: f, defaultClassName: p, inputRef: m } = (0, R.useContext)(J), h = R.useContext(K), { isFocused: g, isFocusVisible: _, focusProps: v } = s(), y = d || h.isReadOnly, { hoverProps: b, isHovered: x } = t({
		...e,
		isDisabled: y
	}), S = a({
		...e,
		defaultClassName: p,
		values: {
			isSelected: u,
			isPressed: f,
			isHovered: x,
			isFocused: g,
			isFocusVisible: _,
			isDisabled: d,
			isReadOnly: h.isReadOnly,
			isInvalid: h.isInvalid,
			isRequired: h.isRequired
		}
	}), C = o(e, { global: !0 });
	return delete C.id, delete C.onClick, R.createElement(c.label, {
		...l(C, r, b, S),
		ref: n,
		"data-selected": u || void 0,
		"data-pressed": f || void 0,
		"data-hovered": x || void 0,
		"data-focused": g || void 0,
		"data-focus-visible": _ || void 0,
		"data-disabled": d || void 0,
		"data-readonly": h.isReadOnly || void 0,
		"data-invalid": h.isInvalid || void 0,
		"data-required": h.isRequired || void 0
	}, R.createElement(I, { elementType: `span` }, R.createElement(`input`, {
		...l(i, v),
		ref: m
	})), S.children);
});
export { q as n, X as r, Y as t };
