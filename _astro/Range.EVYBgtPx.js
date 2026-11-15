import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { $ as n, $t as r, G as i, I as a, J as o, Jt as s, L as c, X as l, Z as u, cn as d, ct as f, et as p, fn as m, gn as h, gt as g, ln as _, mn as v, on as y, pt as b, q as x, rt as S, sn as C, wt as w, yt as T } from "./doc.C_PtMNUB.js";
import { t as E } from "./useMove.DZz0CiD6.js";
import { t as D } from "./useFormReset.Cf-RVIHo.js";
import { t as O } from "./useControlledState.DijOhE0s.js";
import { t as k } from "./VisuallyHidden.BNHsLrt2.js";
import { f as A, n as j } from "./styles.Dduhw011.js";
var M = new WeakMap();
function N(e, t) {
	let n = M.get(e);
	if (!n) throw Error(`Unknown slider state`);
	return `${n.id}-${t}`;
}
var P = e(t(), 1);
function F(e, t, n) {
	let { labelProps: r, fieldProps: a } = l(e), o = e.orientation === `vertical`;
	M.set(t, {
		id: r.id ?? a.id,
		"aria-describedby": e[`aria-describedby`],
		"aria-details": e[`aria-details`]
	});
	let { direction: s } = T(), { addGlobalListener: c, removeGlobalListener: u } = S(), d = (0, P.useRef)(null), f = s === `rtl`, p = (0, P.useRef)(null), { moveProps: m } = E({
		onMoveStart() {
			p.current = null;
		},
		onMove({ deltaX: e, deltaY: r }) {
			if (!n.current) return;
			let { height: a, width: s } = n.current.getBoundingClientRect(), c = o ? a : s;
			p.current == null && d.current != null && (p.current = t.getThumbPercent(d.current) * c);
			let l = o ? r : e;
			if ((o || f) && (l = -l), p.current += l, d.current != null && n.current) {
				let e = i(p.current / c, 0, 1);
				t.setThumbPercent(d.current, e);
			}
		},
		onMoveEnd() {
			d.current != null && (t.setThumbDragging(d.current, !1), d.current = null);
		}
	}), g = (0, P.useRef)(void 0), _ = (r, i, a, l) => {
		if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
			let { height: e, width: u, top: f, left: p } = n.current.getBoundingClientRect(), m = o ? e : u, h = ((o ? l : a) - (o ? f : p)) / m;
			(s === `rtl` || o) && (h = 1 - h);
			let _ = t.getPercentValue(h), y, b = t.values.findIndex((e) => _ - e < 0);
			if (b === 0) y = b;
			else if (b === -1) y = t.values.length - 1;
			else {
				let e = t.values[b - 1], n = t.values[b];
				y = Math.abs(e - _) < Math.abs(n - _) ? b - 1 : b;
			}
			y >= 0 && t.isThumbEditable(y) ? (r.preventDefault(), d.current = y, t.setFocusedThumb(y), g.current = i, t.setThumbDragging(d.current, !0), t.setThumbValue(y, _), c(window, `mouseup`, v, !1), c(window, `touchend`, v, !1), c(window, `pointerup`, v, !1)) : d.current = null;
		}
	}, v = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === g.current && (d.current != null && (t.setThumbDragging(d.current, !1), d.current = null), u(window, `mouseup`, v, !1), u(window, `touchend`, v, !1), u(window, `pointerup`, v, !1));
	};
	return `htmlFor` in r && r.htmlFor && (delete r.htmlFor, r.onClick = () => {
		document.getElementById(N(t, 0))?.focus(), w(`keyboard`);
	}), {
		labelProps: r,
		groupProps: {
			role: `group`,
			...a
		},
		trackProps: h({
			onMouseDown(e) {
				e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || _(e, void 0, e.clientX, e.clientY);
			},
			onPointerDown(e) {
				e.pointerType === `mouse` && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || _(e, e.pointerId, e.clientX, e.clientY);
			},
			onTouchStart(e) {
				_(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
			},
			style: {
				position: `relative`,
				touchAction: `none`
			}
		}, m),
		outputProps: {
			htmlFor: t.values.map((e, n) => N(t, n)).join(` `),
			"aria-live": `off`
		}
	};
}
function I(e, t) {
	let { index: n = 0, isRequired: a, validationState: o, isInvalid: c, trackRef: u, inputRef: d, orientation: f = t.orientation, name: p, form: m } = e, _ = e.isDisabled || t.isDisabled, v = f === `vertical`, { direction: y } = T(), { addGlobalListener: x, removeGlobalListener: C } = S(), w = M.get(t), { labelProps: O, fieldProps: k } = l({
		...e,
		id: N(t, n),
		"aria-labelledby": `${w.id} ${e[`aria-labelledby`] ?? ``}`.trim()
	}), A = t.values[n], j = (0, P.useCallback)(() => {
		d.current && s(d.current);
	}, [d]), F = t.focusedThumb === n;
	(0, P.useEffect)(() => {
		F && j();
	}, [F, j]);
	let I = y === `rtl`, L = (0, P.useRef)(null), R = (e) => {
		t.setThumbDragging(n, !0), e(), t.setThumbDragging(n, !1);
	}, { keyboardProps: z } = g({
		shortcuts: {
			PageUp: () => R(() => {
				t.incrementThumb(n, t.pageSize);
			}),
			PageDown: () => R(() => {
				t.decrementThumb(n, t.pageSize);
			}),
			Home: () => R(() => {
				t.setThumbValue(n, t.getThumbMinValue(n));
			}),
			End: () => R(() => {
				t.setThumbValue(n, t.getThumbMaxValue(n));
			})
		},
		allowRepeats: !0
	}), { moveProps: B } = E({
		onMoveStart() {
			L.current = null, t.setThumbDragging(n, !0);
		},
		onMove({ deltaX: e, deltaY: r, pointerType: a, shiftKey: o }) {
			let { getThumbPercent: s, setThumbPercent: c, decrementThumb: l, incrementThumb: d, step: f, pageSize: p } = t;
			if (!u.current) return;
			let { width: m, height: h } = u.current.getBoundingClientRect(), g = v ? h : m;
			if (L.current ??= s(n) * g, a === `keyboard`) e > 0 && I || e < 0 && !I || r > 0 ? l(n, o ? p : f) : d(n, o ? p : f);
			else {
				let t = v ? r : e;
				(v || I) && (t = -t), L.current += t, c(n, i(L.current / g, 0, 1));
			}
		},
		onMoveEnd() {
			t.setThumbDragging(n, !1);
		}
	});
	t.setThumbEditable(n, !_);
	let { focusableProps: V } = b(h(e, {
		onFocus: () => t.setFocusedThumb(n),
		onBlur: () => t.setFocusedThumb(void 0)
	}), d), H = (0, P.useRef)(void 0), U = (e) => {
		j(), H.current = e, t.setThumbDragging(n, !0), x(window, `mouseup`, W, !1), x(window, `touchend`, W, !1), x(window, `pointerup`, W, !1);
	}, W = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === H.current && (j(), t.setThumbDragging(n, !1), C(window, `mouseup`, W, !1), C(window, `touchend`, W, !1), C(window, `pointerup`, W, !1));
	}, G = t.getThumbPercent(n);
	(v || y === `rtl`) && (G = 1 - G);
	let K = _ ? {} : h(z, B, {
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
	return D(d, t.defaultValues[n], (e) => {
		t.setThumbValue(n, e);
	}), {
		inputProps: h(V, k, {
			type: `range`,
			tabIndex: _ ? void 0 : 0,
			min: t.getThumbMinValue(n),
			max: t.getThumbMaxValue(n),
			step: t.step,
			value: A,
			name: p,
			form: m,
			disabled: _,
			"aria-orientation": f,
			"aria-valuetext": t.getThumbValueLabel(n),
			"aria-required": a || void 0,
			"aria-invalid": c || o === `invalid` || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-describedby": [w[`aria-describedby`], e[`aria-describedby`]].filter(Boolean).join(` `),
			"aria-details": [w[`aria-details`], e[`aria-details`]].filter(Boolean).join(` `),
			onChange: (e) => {
				t.setThumbValue(n, parseFloat(r(e).value));
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
		isDragging: t.isThumbDragging(n),
		isDisabled: _,
		isFocused: F
	};
}
var L = 0, R = 100, z = 1;
function B(e) {
	let { isDisabled: t = !1, minValue: n = L, maxValue: r = R, numberFormatter: a, step: o = z, orientation: s = `horizontal` } = e, c = (0, P.useMemo)(() => {
		let e = (r - n) / 10;
		return e = x(e, 0, e + o, o), Math.max(e, o);
	}, [
		o,
		r,
		n
	]), l = (0, P.useCallback)((e) => e?.map((t, i) => {
		let a = i === 0 ? n : e[i - 1], s = i === e.length - 1 ? r : e[i + 1];
		return x(t, a, s, o);
	}), [
		n,
		r,
		o
	]), u = (0, P.useMemo)(() => l(H(e.value)), [e.value, l]), d = (0, P.useMemo)(() => l(H(e.defaultValue) ?? [n]), [
		e.defaultValue,
		n,
		l
	]), f = U(e.value, e.defaultValue, e.onChange), p = U(e.value, e.defaultValue, e.onChangeEnd), [m, h] = O(u, d, f), [g] = (0, P.useState)(m), [_, v] = (0, P.useState)(Array(m.length).fill(!1)), y = (0, P.useRef)(Array(m.length).fill(!0)), [b, S] = (0, P.useState)(void 0), C = (0, P.useRef)(m), w = (0, P.useRef)(_), T = (e) => {
		C.current = e, h(e);
	}, E = (e) => {
		w.current = e, v(e);
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
		return y.current[e];
	}
	function M(e, t) {
		y.current[e] = t;
	}
	function N(e, n) {
		if (t || !j(e)) return;
		let r = k(e), i = A(e);
		n = x(n, r, i, o);
		let a = V(C.current, e, n);
		T(a);
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
			case 1: return a.format(e[0]);
			case 2: return a.formatRange(e[0], e[1]);
			default: {
				let t = e.map((e) => a.format(e)), n = I.current;
				return n && n.resolvedOptions().locale === a.resolvedOptions().locale || (n = I.current = new Intl.ListFormat(a.resolvedOptions().locale, { type: `unit` })), n.format(t);
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
		return i(G(t), n, r);
	}
	function q(e, t = 1) {
		let i = Math.max(t, o);
		N(e, x(m[e] + i, n, r, o));
	}
	function J(e, t = 1) {
		let i = Math.max(t, o);
		N(e, x(m[e] - i, n, r, o));
	}
	return {
		values: m,
		defaultValues: e.defaultValue === void 0 ? g : d,
		getThumbValue: (e) => m[e],
		setThumbValue: N,
		setThumbPercent: W,
		isThumbDragging: (e) => _[e],
		setThumbDragging: F,
		focusedThumb: b,
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
	[e, t] = C(e, t, W);
	let n = (0, P.useRef)(null), r = o(e.formatOptions), i = B({
		...e,
		numberFormatter: r
	}), [a, s] = _(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: c, trackProps: l, labelProps: p, outputProps: g } = F({
		...e,
		label: s
	}, i, n), v = d({
		...e,
		values: {
			orientation: i.orientation,
			isDisabled: i.isDisabled,
			state: i
		},
		defaultClassName: `react-aria-Slider`
	}), b = f(e, { global: !0 });
	return delete b.id, P.createElement(y, { values: [
		[G, i],
		[K, {
			...l,
			ref: n
		}],
		[J, g],
		[u, {
			...p,
			ref: a
		}]
	] }, P.createElement(m.div, {
		...h(b, v, c),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": i.orientation,
		"data-disabled": i.isDisabled || void 0
	}));
}), X = (0, P.forwardRef)(function(e, t) {
	[e, t] = C(e, t, J);
	let { children: n, style: r, className: i, render: a, ...o } = e, s = (0, P.useContext)(G), c = d({
		className: i,
		style: r,
		children: n,
		render: a,
		defaultChildren: s.getFormattedValue(),
		defaultClassName: `react-aria-SliderOutput`,
		values: {
			orientation: s.orientation,
			isDisabled: s.isDisabled,
			state: s
		}
	});
	return P.createElement(m.output, {
		...o,
		...c,
		ref: t,
		"data-orientation": s.orientation || void 0,
		"data-disabled": s.isDisabled || void 0
	});
}), Z = (0, P.forwardRef)(function(e, t) {
	[e, t] = C(e, t, K);
	let r = (0, P.useContext)(G), { onHoverStart: i, onHoverEnd: a, onHoverChange: o, ...s } = e, { hoverProps: c, isHovered: l } = n({
		onHoverStart: i,
		onHoverEnd: a,
		onHoverChange: o
	}), u = d({
		...e,
		defaultClassName: `react-aria-SliderTrack`,
		values: {
			orientation: r.orientation,
			isDisabled: r.isDisabled,
			isHovered: l,
			state: r
		}
	});
	return P.createElement(m.div, {
		...h(s, c),
		...u,
		ref: t,
		"data-hovered": l || void 0,
		"data-orientation": r.orientation || void 0,
		"data-disabled": r.isDisabled || void 0
	});
}), Q = (0, P.forwardRef)(function(e, t) {
	let { inputRef: r = null } = e, i = (0, P.useContext)(G), { ref: a } = v(K), { index: o = 0 } = e, s = (0, P.useRef)(null), c = r || s, [l, g] = _(!e[`aria-label`] && !e[`aria-labelledby`]), { thumbProps: b, inputProps: x, labelProps: S, isDragging: C, isFocused: w, isDisabled: T } = I({
		...e,
		index: o,
		trackRef: a,
		inputRef: c,
		label: g
	}, i), { focusProps: E, isFocusVisible: D } = p(), { hoverProps: O, isHovered: A } = n(e), j = d({
		...e,
		defaultClassName: `react-aria-SliderThumb`,
		values: {
			state: i,
			isHovered: A,
			isDragging: C,
			isFocused: w,
			isFocusVisible: D,
			isDisabled: T
		}
	}), M = f(e, { global: !0 });
	return delete M.id, P.createElement(m.div, {
		...h(M, b, O),
		...j,
		ref: t,
		style: {
			...b.style,
			...j.style
		},
		"data-hovered": A || void 0,
		"data-dragging": C || void 0,
		"data-focused": w || void 0,
		"data-focus-visible": D || void 0,
		"data-disabled": T || void 0
	}, P.createElement(k, null, P.createElement(`input`, {
		ref: c,
		...h(x, E)
	})), P.createElement(y, { values: [[u, {
		...S,
		ref: l
	}]] }, j.children));
}), ee = (0, P.forwardRef)(function(e, t) {
	[e, t] = C(e, t, q);
	let r = (0, P.useContext)(G), { onHoverStart: a, onHoverEnd: o, onHoverChange: s, ...c } = e, { hoverProps: l, isHovered: u } = n({
		onHoverStart: a,
		onHoverEnd: o,
		onHoverChange: s
	}), f = e.offset == null ? r.getThumbMinValue(0) : i(e.offset, r.getThumbMinValue(0), r.getThumbMaxValue(0)), p = r.values.length > 1 ? r.getThumbPercent(0) * 100 : r.getValuePercent(f) * 100, g = r.values.length > 0 ? r.getThumbPercent(r.values.length - 1) * 100 : 0, _ = Math.min(p, g), v = Math.max(0, Math.max(p, g) - _), y = d({
		...e,
		defaultClassName: `react-aria-SliderFill`,
		defaultStyle: r.orientation === `vertical` ? {
			position: `absolute`,
			bottom: `${_}%`,
			height: `${v}%`,
			width: `100%`
		} : {
			position: `absolute`,
			insetInlineStart: `${_}%`,
			width: `${v}%`,
			height: `100%`
		},
		values: {
			orientation: r.orientation,
			isDisabled: r.isDisabled,
			isHovered: u,
			state: r
		}
	});
	return P.createElement(m.div, {
		...h(c, l),
		...y,
		ref: t,
		"data-hovered": u || void 0,
		"data-orientation": r.orientation || void 0,
		"data-disabled": r.isDisabled || void 0
	});
}), $ = a();
function te({ label: e, description: t, thumbLabels: n, showBounds: r = !1, className: i, ...a }) {
	let o = (0, P.useId)(), { locale: s } = T(), l = (0, P.useMemo)(() => new Intl.NumberFormat(s, a.formatOptions), [s, a.formatOptions]), u = a.minValue ?? 0, d = a.maxValue ?? 100;
	return (0, $.jsxs)(Y, {
		...a,
		className: c(`group/range flex min-w-0 flex-col gap-1.5`, i),
		children: [
			(0, $.jsxs)(`div`, {
				className: `flex flex-wrap items-baseline justify-between gap-x-3`,
				children: [(0, $.jsx)(A, { children: e }), (0, $.jsx)(X, { className: `text-caption font-medium text-fg tabular-nums` })]
			}),
			(0, $.jsx)(Z, {
				className: `relative mx-2.5 h-6 cursor-default before:absolute before:inset-x-0 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:border before:border-border-strong before:bg-sunken group-data-disabled/range:cursor-not-allowed`,
				children: ({ state: e }) => (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(ee, { className: `top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent group-data-disabled/range:bg-muted forced-colors:bg-[Highlight] forced-colors:forced-color-adjust-none` }), (e.values.length > 1 ? [`start`, `end`] : [`only`]).map((e, r) => (0, $.jsx)(Q, {
					index: r,
					...n?.[r] ? { "aria-label": n[r] } : {},
					...t ? { "aria-describedby": o } : {},
					className: c(`top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform before:absolute before:-inset-[3px] before:rounded-full data-hovered:scale-110 data-dragging:scale-110 data-disabled:border-muted motion-reduce:data-hovered:scale-100 motion-reduce:data-dragging:scale-100 forced-colors:border-[ButtonText]`, j)
				}, e))] })
			}),
			r ? (0, $.jsxs)(`div`, {
				"aria-hidden": `true`,
				className: `flex justify-between text-caption text-muted tabular-nums`,
				children: [(0, $.jsx)(`span`, { children: l.format(u) }), (0, $.jsx)(`span`, { children: l.format(d) })]
			}) : null,
			t ? (0, $.jsx)(`p`, {
				id: o,
				className: `text-caption break-words text-muted`,
				children: t
			}) : null
		]
	});
}
export { X as a, I as c, J as i, F as l, Z as n, K as o, G as r, B as s, te as t };
