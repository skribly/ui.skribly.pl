import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { $ as n, A as r, Bt as i, D as a, H as o, Ht as s, Jt as c, Kt as l, L as u, N as d, Nt as f, O as p, Ot as m, P as h, T as g, Ut as _, Vt as v, X as y, Xt as b, _ as x, g as S, it as C, j as w, q as T } from "./useOverflow.Dq483xd0.js";
import { t as E } from "./useMove.BC0TXBd6.js";
import { t as D } from "./useFormReset.BBxMt31i.js";
import { t as O } from "./useControlledState.DijOhE0s.js";
import { t as k } from "./VisuallyHidden.CPLGlJAY.js";
import { f as A, n as j } from "./styles.C2ztr1zV.js";
var M = new WeakMap();
function N(e, t) {
	let n = M.get(e);
	if (!n) throw Error(`Unknown slider state`);
	return `${n.id}-${t}`;
}
var P = e(t(), 1);
function F(e, t, i) {
	let { labelProps: a, fieldProps: o } = r(e), s = e.orientation === `vertical`;
	M.set(t, {
		id: a.id ?? o.id,
		"aria-describedby": e[`aria-describedby`],
		"aria-details": e[`aria-details`]
	});
	let { direction: c } = n(), { addGlobalListener: l, removeGlobalListener: d } = u(), f = (0, P.useRef)(null), p = c === `rtl`, m = (0, P.useRef)(null), { moveProps: h } = E({
		onMoveStart() {
			m.current = null;
		},
		onMove({ deltaX: e, deltaY: n }) {
			if (!i.current) return;
			let { height: r, width: a } = i.current.getBoundingClientRect(), o = s ? r : a;
			m.current == null && f.current != null && (m.current = t.getThumbPercent(f.current) * o);
			let c = s ? n : e;
			if ((s || p) && (c = -c), m.current += c, f.current != null && i.current) {
				let e = g(m.current / o, 0, 1);
				t.setThumbPercent(f.current, e);
			}
		},
		onMoveEnd() {
			f.current != null && (t.setThumbDragging(f.current, !1), f.current = null);
		}
	}), _ = (0, P.useRef)(void 0), v = (n, r, a, o) => {
		if (i.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
			let { height: e, width: u, top: d, left: p } = i.current.getBoundingClientRect(), m = s ? e : u, h = ((s ? o : a) - (s ? d : p)) / m;
			(c === `rtl` || s) && (h = 1 - h);
			let g = t.getPercentValue(h), v, b = t.values.findIndex((e) => g - e < 0);
			if (b === 0) v = b;
			else if (b === -1) v = t.values.length - 1;
			else {
				let e = t.values[b - 1], n = t.values[b];
				v = Math.abs(e - g) < Math.abs(n - g) ? b - 1 : b;
			}
			v >= 0 && t.isThumbEditable(v) ? (n.preventDefault(), f.current = v, t.setFocusedThumb(v), _.current = r, t.setThumbDragging(f.current, !0), t.setThumbValue(v, g), l(window, `mouseup`, y, !1), l(window, `touchend`, y, !1), l(window, `pointerup`, y, !1)) : f.current = null;
		}
	}, y = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === _.current && (f.current != null && (t.setThumbDragging(f.current, !1), f.current = null), d(window, `mouseup`, y, !1), d(window, `touchend`, y, !1), d(window, `pointerup`, y, !1));
	};
	return `htmlFor` in a && a.htmlFor && (delete a.htmlFor, a.onClick = () => {
		document.getElementById(N(t, 0))?.focus(), C(`keyboard`);
	}), {
		labelProps: a,
		groupProps: {
			role: `group`,
			...o
		},
		trackProps: b({
			onMouseDown(e) {
				e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || v(e, void 0, e.clientX, e.clientY);
			},
			onPointerDown(e) {
				e.pointerType === `mouse` && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || v(e, e.pointerId, e.clientX, e.clientY);
			},
			onTouchStart(e) {
				v(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
			},
			style: {
				position: `relative`,
				touchAction: `none`
			}
		}, h),
		outputProps: {
			htmlFor: t.values.map((e, n) => N(t, n)).join(` `),
			"aria-live": `off`
		}
	};
}
function I(e, t) {
	let { index: i = 0, isRequired: a, validationState: o, isInvalid: s, trackRef: c, inputRef: l, orientation: d = t.orientation, name: p, form: h } = e, _ = e.isDisabled || t.isDisabled, v = d === `vertical`, { direction: x } = n(), { addGlobalListener: S, removeGlobalListener: C } = u(), w = M.get(t), { labelProps: O, fieldProps: k } = r({
		...e,
		id: N(t, i),
		"aria-labelledby": `${w.id} ${e[`aria-labelledby`] ?? ``}`.trim()
	}), A = t.values[i], j = (0, P.useCallback)(() => {
		l.current && m(l.current);
	}, [l]), F = t.focusedThumb === i;
	(0, P.useEffect)(() => {
		F && j();
	}, [F, j]);
	let I = x === `rtl`, L = (0, P.useRef)(null), R = (e) => {
		t.setThumbDragging(i, !0), e(), t.setThumbDragging(i, !1);
	}, { keyboardProps: z } = y({
		shortcuts: {
			PageUp: () => R(() => {
				t.incrementThumb(i, t.pageSize);
			}),
			PageDown: () => R(() => {
				t.decrementThumb(i, t.pageSize);
			}),
			Home: () => R(() => {
				t.setThumbValue(i, t.getThumbMinValue(i));
			}),
			End: () => R(() => {
				t.setThumbValue(i, t.getThumbMaxValue(i));
			})
		},
		allowRepeats: !0
	}), { moveProps: B } = E({
		onMoveStart() {
			L.current = null, t.setThumbDragging(i, !0);
		},
		onMove({ deltaX: e, deltaY: n, pointerType: r, shiftKey: a }) {
			let { getThumbPercent: o, setThumbPercent: s, decrementThumb: l, incrementThumb: u, step: d, pageSize: f } = t;
			if (!c.current) return;
			let { width: p, height: m } = c.current.getBoundingClientRect(), h = v ? m : p;
			if (L.current ??= o(i) * h, r === `keyboard`) e > 0 && I || e < 0 && !I || n > 0 ? l(i, a ? f : d) : u(i, a ? f : d);
			else {
				let t = v ? n : e;
				(v || I) && (t = -t), L.current += t, s(i, g(L.current / h, 0, 1));
			}
		},
		onMoveEnd() {
			t.setThumbDragging(i, !1);
		}
	});
	t.setThumbEditable(i, !_);
	let { focusableProps: V } = T(b(e, {
		onFocus: () => t.setFocusedThumb(i),
		onBlur: () => t.setFocusedThumb(void 0)
	}), l), H = (0, P.useRef)(void 0), U = (e) => {
		j(), H.current = e, t.setThumbDragging(i, !0), S(window, `mouseup`, W, !1), S(window, `touchend`, W, !1), S(window, `pointerup`, W, !1);
	}, W = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === H.current && (j(), t.setThumbDragging(i, !1), C(window, `mouseup`, W, !1), C(window, `touchend`, W, !1), C(window, `pointerup`, W, !1));
	}, G = t.getThumbPercent(i);
	(v || x === `rtl`) && (G = 1 - G);
	let K = _ ? {} : b(z, B, {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || U();
		},
		onPointerDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || U(e.pointerId);
		},
		onTouchStart: (e) => {
			U(e.changedTouches[0].identifier);
		}
	});
	return D(l, t.defaultValues[i], (e) => {
		t.setThumbValue(i, e);
	}), {
		inputProps: b(V, k, {
			type: `range`,
			tabIndex: _ ? void 0 : 0,
			min: t.getThumbMinValue(i),
			max: t.getThumbMaxValue(i),
			step: t.step,
			value: A,
			name: p,
			form: h,
			disabled: _,
			"aria-orientation": d,
			"aria-valuetext": t.getThumbValueLabel(i),
			"aria-required": a || void 0,
			"aria-invalid": s || o === `invalid` || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-describedby": [w[`aria-describedby`], e[`aria-describedby`]].filter(Boolean).join(` `),
			"aria-details": [w[`aria-details`], e[`aria-details`]].filter(Boolean).join(` `),
			onChange: (e) => {
				t.setThumbValue(i, parseFloat(f(e).value));
			}
		}),
		thumbProps: {
			...K,
			style: {
				position: `absolute`,
				[v ? `top` : `left`]: `${G * 100}%`,
				transform: `translate(-50%, -50%)`,
				touchAction: `none`
			}
		},
		labelProps: O,
		isDragging: t.isThumbDragging(i),
		isDisabled: _,
		isFocused: F
	};
}
var L = 0, R = 100, z = 1;
function B(e) {
	let { isDisabled: t = !1, minValue: n = L, maxValue: r = R, numberFormatter: i, step: o = z, orientation: s = `horizontal` } = e, c = (0, P.useMemo)(() => {
		let e = (r - n) / 10;
		return e = a(e, 0, e + o, o), Math.max(e, o);
	}, [
		o,
		r,
		n
	]), l = (0, P.useCallback)((e) => e?.map((t, i) => {
		let s = i === 0 ? n : e[i - 1], c = i === e.length - 1 ? r : e[i + 1];
		return a(t, s, c, o);
	}), [
		n,
		r,
		o
	]), u = (0, P.useMemo)(() => l(H(e.value)), [e.value, l]), d = (0, P.useMemo)(() => l(H(e.defaultValue) ?? [n]), [
		e.defaultValue,
		n,
		l
	]), f = U(e.value, e.defaultValue, e.onChange), p = U(e.value, e.defaultValue, e.onChangeEnd), [m, h] = O(u, d, f), [_] = (0, P.useState)(m), [v, y] = (0, P.useState)(Array(m.length).fill(!1)), b = (0, P.useRef)(Array(m.length).fill(!0)), [x, S] = (0, P.useState)(void 0), C = (0, P.useRef)(m), w = (0, P.useRef)(v), T = (e) => {
		C.current = e, h(e);
	}, E = (e) => {
		w.current = e, y(e);
	};
	function D(e) {
		return (e - n) / (r - n);
	}
	function k(e) {
		return e === 0 ? n : m[e - 1];
	}
	function A(e) {
		return e === m.length - 1 ? r : m[e + 1];
	}
	function j(e) {
		return b.current[e];
	}
	function M(e, t) {
		b.current[e] = t;
	}
	function N(e, n) {
		if (t || !j(e)) return;
		let r = k(e), i = A(e);
		n = a(n, r, i, o);
		let s = V(C.current, e, n);
		T(s);
	}
	function F(e, n) {
		if (t || !j(e)) return;
		n && (C.current = m);
		let r = w.current[e];
		w.current = V(w.current, e, n), E(w.current), p && r && !w.current.some(Boolean) && p(C.current);
	}
	let I = (0, P.useRef)(null);
	function B(e = m) {
		switch (typeof e == `number` && (e = [e]), e.length) {
			case 0: return ``;
			case 1: return i.format(e[0]);
			case 2: return i.formatRange(e[0], e[1]);
			default: {
				let t = e.map((e) => i.format(e)), n = I.current;
				return n && n.resolvedOptions().locale === i.resolvedOptions().locale || (n = I.current = new Intl.ListFormat(i.resolvedOptions().locale, { type: `unit` })), n.format(t);
			}
		}
	}
	function W(e, t) {
		N(e, K(t));
	}
	function G(e) {
		return Math.round((e - n) / o) * o + n;
	}
	function K(e) {
		let t = e * (r - n) + n;
		return g(G(t), n, r);
	}
	function q(e, t = 1) {
		let i = Math.max(t, o);
		N(e, a(m[e] + i, n, r, o));
	}
	function J(e, t = 1) {
		let i = Math.max(t, o);
		N(e, a(m[e] - i, n, r, o));
	}
	return {
		values: m,
		defaultValues: e.defaultValue === void 0 ? _ : d,
		getThumbValue: (e) => m[e],
		setThumbValue: N,
		setThumbPercent: W,
		isThumbDragging: (e) => v[e],
		setThumbDragging: F,
		focusedThumb: x,
		setFocusedThumb: S,
		getThumbPercent: (e) => D(m[e]),
		getValuePercent: D,
		getThumbValueLabel: (e) => B(m[e]),
		getFormattedValue: B,
		getThumbMinValue: k,
		getThumbMaxValue: A,
		getPercentValue: K,
		isThumbEditable: j,
		setThumbEditable: M,
		incrementThumb: q,
		decrementThumb: J,
		step: o,
		pageSize: c,
		orientation: s,
		isDisabled: t
	};
}
function V(e, t, n) {
	return e[t] === n ? e : [
		...e.slice(0, t),
		n,
		...e.slice(t + 1)
	];
}
function H(e) {
	if (e != null) return Array.isArray(e) ? e : [e];
}
function U(e, t, n) {
	return (r) => {
		typeof e == `number` || typeof t == `number` ? n?.(r[0]) : n?.(r);
	};
}
var W = (0, P.createContext)(null), G = (0, P.createContext)(null), K = (0, P.createContext)(null), q = (0, P.createContext)(null), J = (0, P.createContext)(null), Y = (0, P.forwardRef)(function(e, t) {
	[e, t] = v(e, t, W);
	let n = (0, P.useRef)(null), r = p(e.formatOptions), a = B({
		...e,
		numberFormatter: r
	}), [c, u] = _(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: d, trackProps: f, labelProps: m, outputProps: h } = F({
		...e,
		label: u
	}, a, n), g = s({
		...e,
		values: {
			orientation: a.orientation,
			isDisabled: a.isDisabled,
			state: a
		},
		defaultClassName: `react-aria-Slider`
	}), y = o(e, { global: !0 });
	return delete y.id, P.createElement(i, { values: [
		[G, a],
		[K, {
			...f,
			ref: n
		}],
		[J, h],
		[w, {
			...m,
			ref: c
		}]
	] }, P.createElement(l.div, {
		...b(y, g, d),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": a.orientation,
		"data-disabled": a.isDisabled || void 0
	}));
}), X = (0, P.forwardRef)(function(e, t) {
	[e, t] = v(e, t, J);
	let { children: n, style: r, className: i, render: a, ...o } = e, c = (0, P.useContext)(G), u = s({
		className: i,
		style: r,
		children: n,
		render: a,
		defaultChildren: c.getFormattedValue(),
		defaultClassName: `react-aria-SliderOutput`,
		values: {
			orientation: c.orientation,
			isDisabled: c.isDisabled,
			state: c
		}
	});
	return P.createElement(l.output, {
		...o,
		...u,
		ref: t,
		"data-orientation": c.orientation || void 0,
		"data-disabled": c.isDisabled || void 0
	});
}), Z = (0, P.forwardRef)(function(e, t) {
	[e, t] = v(e, t, K);
	let n = (0, P.useContext)(G), { onHoverStart: r, onHoverEnd: i, onHoverChange: a, ...o } = e, { hoverProps: c, isHovered: u } = d({
		onHoverStart: r,
		onHoverEnd: i,
		onHoverChange: a
	}), f = s({
		...e,
		defaultClassName: `react-aria-SliderTrack`,
		values: {
			orientation: n.orientation,
			isDisabled: n.isDisabled,
			isHovered: u,
			state: n
		}
	});
	return P.createElement(l.div, {
		...b(o, c),
		...f,
		ref: t,
		"data-hovered": u || void 0,
		"data-orientation": n.orientation || void 0,
		"data-disabled": n.isDisabled || void 0
	});
}), Q = (0, P.forwardRef)(function(e, t) {
	let { inputRef: n = null } = e, r = (0, P.useContext)(G), { ref: a } = c(K), { index: u = 0 } = e, f = (0, P.useRef)(null), p = n || f, [m, g] = _(!e[`aria-label`] && !e[`aria-labelledby`]), { thumbProps: v, inputProps: y, labelProps: x, isDragging: S, isFocused: C, isDisabled: T } = I({
		...e,
		index: u,
		trackRef: a,
		inputRef: p,
		label: g
	}, r), { focusProps: E, isFocusVisible: D } = h(), { hoverProps: O, isHovered: A } = d(e), j = s({
		...e,
		defaultClassName: `react-aria-SliderThumb`,
		values: {
			state: r,
			isHovered: A,
			isDragging: S,
			isFocused: C,
			isFocusVisible: D,
			isDisabled: T
		}
	}), M = o(e, { global: !0 });
	return delete M.id, P.createElement(l.div, {
		...b(M, v, O),
		...j,
		ref: t,
		style: {
			...v.style,
			...j.style
		},
		"data-hovered": A || void 0,
		"data-dragging": S || void 0,
		"data-focused": C || void 0,
		"data-focus-visible": D || void 0,
		"data-disabled": T || void 0
	}, P.createElement(k, null, P.createElement(`input`, {
		ref: p,
		...b(y, E)
	})), P.createElement(i, { values: [[w, {
		...x,
		ref: m
	}]] }, j.children));
}), ee = (0, P.forwardRef)(function(e, t) {
	[e, t] = v(e, t, q);
	let n = (0, P.useContext)(G), { onHoverStart: r, onHoverEnd: i, onHoverChange: a, ...o } = e, { hoverProps: c, isHovered: u } = d({
		onHoverStart: r,
		onHoverEnd: i,
		onHoverChange: a
	}), f = e.offset == null ? n.getThumbMinValue(0) : g(e.offset, n.getThumbMinValue(0), n.getThumbMaxValue(0)), p = n.values.length > 1 ? n.getThumbPercent(0) * 100 : n.getValuePercent(f) * 100, m = n.values.length > 0 ? n.getThumbPercent(n.values.length - 1) * 100 : 0, h = Math.min(p, m), _ = Math.max(0, Math.max(p, m) - h), y = s({
		...e,
		defaultClassName: `react-aria-SliderFill`,
		defaultStyle: n.orientation === `vertical` ? {
			position: `absolute`,
			bottom: `${h}%`,
			height: `${_}%`,
			width: `100%`
		} : {
			position: `absolute`,
			insetInlineStart: `${h}%`,
			width: `${_}%`,
			height: `100%`
		},
		values: {
			orientation: n.orientation,
			isDisabled: n.isDisabled,
			isHovered: u,
			state: n
		}
	});
	return P.createElement(l.div, {
		...b(o, c),
		...y,
		ref: t,
		"data-hovered": u || void 0,
		"data-orientation": n.orientation || void 0,
		"data-disabled": n.isDisabled || void 0
	});
}), $ = S();
function te({ label: e, description: t, thumbLabels: r, showBounds: i = !1, className: a, ...o }) {
	let s = (0, P.useId)(), { locale: c } = n(), l = (0, P.useMemo)(() => new Intl.NumberFormat(c, o.formatOptions), [c, o.formatOptions]), u = o.minValue ?? 0, d = o.maxValue ?? 100;
	return (0, $.jsxs)(Y, {
		...o,
		className: x(`group/range flex min-w-0 flex-col gap-1.5`, a),
		children: [
			(0, $.jsxs)(`div`, {
				className: `flex flex-wrap items-baseline justify-between gap-x-3`,
				children: [(0, $.jsx)(A, { children: e }), (0, $.jsx)(X, { className: `text-caption font-medium text-fg tabular-nums` })]
			}),
			(0, $.jsx)(Z, {
				className: `relative mx-2.5 h-6 cursor-default before:absolute before:inset-x-0 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:border before:border-border-strong before:bg-sunken group-data-disabled/range:cursor-not-allowed`,
				children: ({ state: e }) => (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(ee, { className: `top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent group-data-disabled/range:bg-muted forced-colors:bg-[Highlight] forced-colors:forced-color-adjust-none` }), (e.values.length > 1 ? [`start`, `end`] : [`only`]).map((e, n) => (0, $.jsx)(Q, {
					index: n,
					...r?.[n] ? { "aria-label": r[n] } : {},
					...t ? { "aria-describedby": s } : {},
					className: x(`top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform before:absolute before:-inset-[3px] before:rounded-full data-hovered:scale-110 data-dragging:scale-110 data-disabled:border-muted motion-reduce:data-hovered:scale-100 motion-reduce:data-dragging:scale-100 forced-colors:border-[ButtonText]`, j)
				}, e))] })
			}),
			i ? (0, $.jsxs)(`div`, {
				"aria-hidden": `true`,
				className: `flex justify-between text-caption text-muted tabular-nums`,
				children: [(0, $.jsx)(`span`, { children: l.format(u) }), (0, $.jsx)(`span`, { children: l.format(d) })]
			}) : null,
			t ? (0, $.jsx)(`p`, {
				id: s,
				className: `text-caption break-words text-muted`,
				children: t
			}) : null
		]
	});
}
export { X as a, I as c, J as i, F as l, Z as n, K as o, G as r, B as s, te as t };
