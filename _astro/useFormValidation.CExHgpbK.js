import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { Ct as n, Qt as r, Y as i, _n as a, bn as o, bt as s, dn as c, hn as l, in as u, on as d } from "./doc.DoLlUurT.js";
var f = e(t(), 1);
function p(e, t, n, r) {
	let i = s(n), a = n == null;
	(0, f.useEffect)(() => {
		if (!(a || e.current == null)) return u(e.current, t, i, r);
	}, [
		e,
		t,
		r,
		a
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
	[e, t] = d(e, t, E);
	let { validationErrors: n, validationBehavior: r = `native`, children: i, className: a, ...o } = e;
	return f.createElement(c.form, {
		noValidate: r !== `native`,
		...o,
		ref: t,
		className: a || `react-aria-Form`
	}, f.createElement(E.Provider, { value: {
		...e,
		validationBehavior: r
	} }, f.createElement(_.Provider, { value: n ?? {} }, i)));
});
function O(e) {
	let { description: t, errorMessage: n, isInvalid: r, validationState: o } = e, { labelProps: s, fieldProps: c } = i(e), u = a([
		!!t,
		!!n,
		r,
		o
	]), d = a([
		!!t,
		!!n,
		r,
		o
	]);
	return c = l(c, { "aria-describedby": [
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
function k(e, t, i) {
	let { validationBehavior: a, focus: c } = e;
	o(() => {
		if (a === `native` && i?.current && `setCustomValidity` in i.current && !i.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(` `) || `Invalid value.` : ``;
			i.current.setCustomValidity(e), i.current.hasAttribute(`title`) || (i.current.title = ``), t.realtimeValidation.isInvalid || t.updateValidation(j(i.current));
		}
	});
	let l = (0, f.useRef)(!1), u = s(() => {
		l.current || t.resetValidation();
	}), d = s((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = i?.current?.form;
		!e.defaultPrevented && i && r && M(r) === i.current && (c ? c() : i.current?.focus(), n(`keyboard`)), e.preventDefault();
	}), p = s(() => {
		t.commitValidation();
	});
	(0, f.useEffect)(() => {
		let e = i?.current;
		if (!e) return;
		let t = e.form, n = t?.reset;
		return t && (t.reset = () => {
			l.current = !window.event || window.event.type === `message` && r(window.event) instanceof MessagePort, n?.call(t), l.current = !1;
		}), e.addEventListener(`invalid`, d), e.addEventListener(`change`, p), t?.addEventListener(`reset`, u), () => {
			e.removeEventListener(`invalid`, d), e.removeEventListener(`change`, p), t?.removeEventListener(`reset`, u), t && (t.reset = n);
		};
	}, [i, a]);
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
