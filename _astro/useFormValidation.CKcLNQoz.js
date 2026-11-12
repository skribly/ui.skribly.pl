import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, Ct as r, H as i, It as a, Pt as o, Tt as s, _t as c, m as l, z as u, zt as d } from "./createLucideIcon.npgQlVHx.js";
var f = e(t(), 1);
function p(e, t, n, i) {
	let a = u(n), o = n == null;
	(0, f.useEffect)(() => {
		if (!(o || e.current == null)) return r(e.current, t, a, i);
	}, [
		e,
		t,
		i,
		o
	]);
}
var m = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valueMissing: !1,
	valid: !0
}, h = {
	...m,
	customError: !0,
	valid: !1
}, g = {
	isInvalid: !1,
	validationDetails: m,
	validationErrors: []
}, _ = (0, f.createContext)({}), v = `__reactAriaFormValidationState`;
function y(e) {
	if (e.__reactAriaFormValidationState) {
		let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[v];
		return {
			realtimeValidation: t,
			displayValidation: n,
			updateValidation: r,
			resetValidation: i,
			commitValidation: a
		};
	}
	return b(e);
}
function b(e) {
	let { isInvalid: t, validationState: n, name: r, value: i, builtinValidation: a, validate: o, validationBehavior: s = `aria` } = e;
	n && (t ||= n === `invalid`);
	let c = t === void 0 ? null : {
		isInvalid: t,
		validationErrors: [],
		validationDetails: h
	}, l = (0, f.useMemo)(() => !o || i == null ? null : C(S(o, i)), [o, i]);
	a?.validationDetails.valid && (a = void 0);
	let u = (0, f.useContext)(_), d = (0, f.useMemo)(() => r ? Array.isArray(r) ? r.flatMap((e) => x(u[e])) : x(u[r]) : [], [u, r]), [p, m] = (0, f.useState)(u), [v, y] = (0, f.useState)(!1);
	u !== p && (m(u), y(!1));
	let b = (0, f.useMemo)(() => C(v ? [] : d), [v, d]), T = (0, f.useRef)(g), [E, D] = (0, f.useState)(g), O = (0, f.useRef)(g), k = () => {
		if (!A) return;
		j(!1);
		let e = l || a || T.current;
		w(e, O.current) || (O.current = e, D(e));
	}, [A, j] = (0, f.useState)(!1);
	return (0, f.useEffect)(k), {
		realtimeValidation: c || b || l || a || g,
		displayValidation: s === `native` ? c || b || E : c || b || l || a || E,
		updateValidation(e) {
			s === `aria` && !w(E, e) ? D(e) : T.current = e;
		},
		resetValidation() {
			let e = g;
			w(e, O.current) || (O.current = e, D(e)), s === `native` && j(!1), y(!0);
		},
		commitValidation() {
			s === `native` && j(!0), y(!0);
		}
	};
}
function x(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function S(e, t) {
	if (typeof e == `function`) {
		let n = e(t);
		if (n && typeof n != `boolean`) return x(n);
	}
	return [];
}
function C(e) {
	return e.length ? {
		isInvalid: !0,
		validationErrors: e,
		validationDetails: h
	} : null;
}
function w(e, t) {
	return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
function T(...e) {
	let t = new Set(), n = !1, r = { ...m };
	for (let i of e) {
		for (let e of i.validationErrors) t.add(e);
		n ||= i.isInvalid;
		for (let e in r) r[e] ||= i.validationDetails[e];
	}
	return r.valid = !n, {
		isInvalid: n,
		validationErrors: [...t],
		validationDetails: r
	};
}
var E = (0, f.createContext)(null), D = (0, f.forwardRef)(function(e, t) {
	[e, t] = s(e, t, E);
	let { validationErrors: r, validationBehavior: i = `native`, children: a, className: o, ...c } = e;
	return f.createElement(n.form, {
		noValidate: i !== `native`,
		...c,
		ref: t,
		className: o || `react-aria-Form`
	}, f.createElement(E.Provider, { value: {
		...e,
		validationBehavior: i
	} }, f.createElement(_.Provider, { value: r ?? {} }, a)));
});
function O(e) {
	let { description: t, errorMessage: n, isInvalid: r, validationState: i } = e, { labelProps: s, fieldProps: c } = l(e), u = a([
		!!t,
		!!n,
		r,
		i
	]), d = a([
		!!t,
		!!n,
		r,
		i
	]);
	return c = o(c, { "aria-describedby": [
		u,
		d,
		e[`aria-describedby`]
	].filter(Boolean).join(` `) || void 0 }), {
		labelProps: s,
		fieldProps: c,
		descriptionProps: { id: u },
		errorMessageProps: { id: d }
	};
}
function k(e, t, n) {
	let { validationBehavior: r, focus: a } = e;
	d(() => {
		if (r === `native` && n?.current && `setCustomValidity` in n.current && !n.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(` `) || `Invalid value.` : ``;
			n.current.setCustomValidity(e), n.current.hasAttribute(`title`) || (n.current.title = ``), t.realtimeValidation.isInvalid || t.updateValidation(j(n.current));
		}
	});
	let o = (0, f.useRef)(!1), s = u(() => {
		o.current || t.resetValidation();
	}), l = u((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = n?.current?.form;
		!e.defaultPrevented && n && r && M(r) === n.current && (a ? a() : n.current?.focus(), i(`keyboard`)), e.preventDefault();
	}), p = u(() => {
		t.commitValidation();
	});
	(0, f.useEffect)(() => {
		let e = n?.current;
		if (!e) return;
		let t = e.form, r = t?.reset;
		return t && (t.reset = () => {
			o.current = !window.event || window.event.type === `message` && c(window.event) instanceof MessagePort, r?.call(t), o.current = !1;
		}), e.addEventListener(`invalid`, l), e.addEventListener(`change`, p), t?.addEventListener(`reset`, s), () => {
			e.removeEventListener(`invalid`, l), e.removeEventListener(`change`, p), t?.removeEventListener(`reset`, s), t && (t.reset = r);
		};
	}, [n, r]);
}
function A(e) {
	let t = e.validity;
	return {
		badInput: t.badInput,
		customError: t.customError,
		patternMismatch: t.patternMismatch,
		rangeOverflow: t.rangeOverflow,
		rangeUnderflow: t.rangeUnderflow,
		stepMismatch: t.stepMismatch,
		tooLong: t.tooLong,
		tooShort: t.tooShort,
		typeMismatch: t.typeMismatch,
		valueMissing: t.valueMissing,
		valid: t.valid
	};
}
function j(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: A(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : []
	};
}
function M(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let n = e.elements[t];
		if (n.validity?.valid === !1) return n;
	}
	return null;
}
export { T as a, y as c, E as i, p as l, O as n, v as o, D as r, g as s, k as t };
