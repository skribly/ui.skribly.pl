import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { Ct as n, Qt as r, Y as i, _n as a, bn as o, bt as s, dn as c, hn as l, on as u } from "./doc.DoLlUurT.js";
var d = e(t(), 1), f = {
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
}, p = {
	...f,
	customError: !0,
	valid: !1
}, m = {
	isInvalid: !1,
	validationDetails: f,
	validationErrors: []
}, h = (0, d.createContext)({}), g = `__reactAriaFormValidationState`;
function _(e) {
	if (e.__reactAriaFormValidationState) {
		let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[g];
		return {
			realtimeValidation: t,
			displayValidation: n,
			updateValidation: r,
			resetValidation: i,
			commitValidation: a
		};
	}
	return v(e);
}
function v(e) {
	let { isInvalid: t, validationState: n, name: r, value: i, builtinValidation: a, validate: o, validationBehavior: s = `aria` } = e;
	n && (t ||= n === `invalid`);
	let c = t === void 0 ? null : {
		isInvalid: t,
		validationErrors: [],
		validationDetails: p
	}, l = (0, d.useMemo)(() => !o || i == null ? null : x(b(o, i)), [o, i]);
	a?.validationDetails.valid && (a = void 0);
	let u = (0, d.useContext)(h), f = (0, d.useMemo)(() => r ? Array.isArray(r) ? r.flatMap((e) => y(u[e])) : y(u[r]) : [], [u, r]), [g, _] = (0, d.useState)(u), [v, C] = (0, d.useState)(!1);
	u !== g && (_(u), C(!1));
	let w = (0, d.useMemo)(() => x(v ? [] : f), [v, f]), T = (0, d.useRef)(m), [E, D] = (0, d.useState)(m), O = (0, d.useRef)(m), k = () => {
		if (!A) return;
		j(!1);
		let e = l || a || T.current;
		S(e, O.current) || (O.current = e, D(e));
	}, [A, j] = (0, d.useState)(!1);
	return (0, d.useEffect)(k), {
		realtimeValidation: c || w || l || a || m,
		displayValidation: s === `native` ? c || w || E : c || w || l || a || E,
		updateValidation(e) {
			s === `aria` && !S(E, e) ? D(e) : T.current = e;
		},
		resetValidation() {
			let e = m;
			S(e, O.current) || (O.current = e, D(e)), s === `native` && j(!1), C(!0);
		},
		commitValidation() {
			s === `native` && j(!0), C(!0);
		}
	};
}
function y(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function b(e, t) {
	if (typeof e == `function`) {
		let n = e(t);
		if (n && typeof n != `boolean`) return y(n);
	}
	return [];
}
function x(e) {
	return e.length ? {
		isInvalid: !0,
		validationErrors: e,
		validationDetails: p
	} : null;
}
function S(e, t) {
	return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
function C(...e) {
	let t = new Set(), n = !1, r = { ...f };
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
var w = (0, d.createContext)(null), T = (0, d.forwardRef)(function(e, t) {
	[e, t] = u(e, t, w);
	let { validationErrors: n, validationBehavior: r = `native`, children: i, className: a, ...o } = e;
	return d.createElement(c.form, {
		noValidate: r !== `native`,
		...o,
		ref: t,
		className: a || `react-aria-Form`
	}, d.createElement(w.Provider, { value: {
		...e,
		validationBehavior: r
	} }, d.createElement(h.Provider, { value: n ?? {} }, i)));
});
function E(e) {
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
function D(e, t, i) {
	let { validationBehavior: a, focus: c } = e;
	o(() => {
		if (a === `native` && i?.current && `setCustomValidity` in i.current && !i.current.disabled) {
			let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(` `) || `Invalid value.` : ``;
			i.current.setCustomValidity(e), i.current.hasAttribute(`title`) || (i.current.title = ``), t.realtimeValidation.isInvalid || t.updateValidation(k(i.current));
		}
	});
	let l = (0, d.useRef)(!1), u = s(() => {
		l.current || t.resetValidation();
	}), f = s((e) => {
		t.displayValidation.isInvalid || t.commitValidation();
		let r = i?.current?.form;
		!e.defaultPrevented && i && r && A(r) === i.current && (c ? c() : i.current?.focus(), n(`keyboard`)), e.preventDefault();
	}), p = s(() => {
		t.commitValidation();
	});
	(0, d.useEffect)(() => {
		let e = i?.current;
		if (!e) return;
		let t = e.form, n = t?.reset;
		return t && (t.reset = () => {
			l.current = !window.event || window.event.type === `message` && r(window.event) instanceof MessagePort, n?.call(t), l.current = !1;
		}), e.addEventListener(`invalid`, f), e.addEventListener(`change`, p), t?.addEventListener(`reset`, u), () => {
			e.removeEventListener(`invalid`, f), e.removeEventListener(`change`, p), t?.removeEventListener(`reset`, u), t && (t.reset = n);
		};
	}, [i, a]);
}
function O(e) {
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
function k(e) {
	return {
		isInvalid: !e.validity.valid,
		validationDetails: O(e),
		validationErrors: e.validationMessage ? [e.validationMessage] : []
	};
}
function A(e) {
	for (let t = 0; t < e.elements.length; t++) {
		let n = e.elements[t];
		if (n.validity?.valid === !1) return n;
	}
	return null;
}
export { C as a, _ as c, w as i, E as n, g as o, T as r, m as s, D as t };
