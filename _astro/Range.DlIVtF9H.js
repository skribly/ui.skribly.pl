import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { $ as n, Ct as r, F as i, I as a, K as o, Q as s, Qt as c, W as l, X as u, Y as d, an as f, cn as p, dn as m, ft as h, hn as g, ht as _, nt as v, on as y, pn as b, q as x, qt as S, sn as C, st as w, vt as T } from "./doc.DoLlUurT.js";
import { t as E } from "./useMove.DHGoL4qi.js";
import { t as D } from "./useFormReset.ClC-r4N4.js";
import { t as O } from "./useControlledState.DijOhE0s.js";
import { t as k } from "./VisuallyHidden.DNi0NmtP.js";
import { f as A, n as j } from "./styles.DljYEAZo.js";
var M = new WeakMap();
function N(e, t) {
	let n = M.get(e);
	if (!n) throw Error(`Unknown slider state`);
	return `${n.id}-${t}`;
}
var P = e(t(), 1);
function F(e, t, n) {
	let { labelProps: i, fieldProps: a } = d(e), o = e.orientation === `vertical`;
	M.set(t, {
		id: i.id ?? a.id,
		"aria-describedby": e[`aria-describedby`],
		"aria-details": e[`aria-details`]
	});
	let { direction: s } = T(), { addGlobalListener: c, removeGlobalListener: u } = v(), f = (0, P.useRef)(null), p = s === `rtl`, m = (0, P.useRef)(null), { moveProps: h } = E({
		onMoveStart() {
			m.current = null;
		},
		onMove({ deltaX: e, deltaY: r }) {
			if (!n.current) return;
			let { height: i, width: a } = n.current.getBoundingClientRect(), s = o ? i : a;
			m.current == null && f.current != null && (m.current = t.getThumbPercent(f.current) * s);
			let c = o ? r : e;
			if ((o || p) && (c = -c), m.current += c, f.current != null && n.current) {
				let e = l(m.current / s, 0, 1);
				t.setThumbPercent(f.current, e);
			}
		},
		onMoveEnd() {
			f.current != null && (t.setThumbDragging(f.current, !1), f.current = null);
		}
	}), _ = (0, P.useRef)(void 0), y = (r, i, a, l) => {
		if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
			let { height: e, width: u, top: d, left: p } = n.current.getBoundingClientRect(), m = o ? e : u, h = ((o ? l : a) - (o ? d : p)) / m;
			(s === `rtl` || o) && (h = 1 - h);
			let g = t.getPercentValue(h), v, y = t.values.findIndex((e) => g - e < 0);
			if (y === 0) v = y;
			else if (y === -1) v = t.values.length - 1;
			else {
				let e = t.values[y - 1], n = t.values[y];
				v = Math.abs(e - g) < Math.abs(n - g) ? y - 1 : y;
			}
			v >= 0 && t.isThumbEditable(v) ? (r.preventDefault(), f.current = v, t.setFocusedThumb(v), _.current = i, t.setThumbDragging(f.current, !0), t.setThumbValue(v, g), c(window, `mouseup`, b, !1), c(window, `touchend`, b, !1), c(window, `pointerup`, b, !1)) : f.current = null;
		}
	}, b = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === _.current && (f.current != null && (t.setThumbDragging(f.current, !1), f.current = null), u(window, `mouseup`, b, !1), u(window, `touchend`, b, !1), u(window, `pointerup`, b, !1));
	};
	return `htmlFor` in i && i.htmlFor && (delete i.htmlFor, i.onClick = () => {
		document.getElementById(N(t, 0))?.focus(), r(`keyboard`);
	}), {
		labelProps: i,
		groupProps: {
			role: `group`,
			...a
		},
		trackProps: g({
			onMouseDown(e) {
				e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || y(e, void 0, e.clientX, e.clientY);
			},
			onPointerDown(e) {
				e.pointerType === `mouse` && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || y(e, e.pointerId, e.clientX, e.clientY);
			},
			onTouchStart(e) {
				y(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
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
	let { index: n = 0, isRequired: r, validationState: i, isInvalid: a, trackRef: o, inputRef: s, orientation: u = t.orientation, name: f, form: p } = e, m = e.isDisabled || t.isDisabled, y = u === `vertical`, { direction: b } = T(), { addGlobalListener: x, removeGlobalListener: C } = v(), w = M.get(t), { labelProps: O, fieldProps: k } = d({
		...e,
		id: N(t, n),
		"aria-labelledby": `${w.id} ${e[`aria-labelledby`] ?? ``}`.trim()
	}), A = t.values[n], j = (0, P.useCallback)(() => {
		s.current && S(s.current);
	}, [s]), F = t.focusedThumb === n;
	(0, P.useEffect)(() => {
		F && j();
	}, [F, j]);
	let I = b === `rtl`, L = (0, P.useRef)(null), R = (e) => {
		t.setThumbDragging(n, !0), e(), t.setThumbDragging(n, !1);
	}, { keyboardProps: z } = _({
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
		onMove({ deltaX: e, deltaY: r, pointerType: i, shiftKey: a }) {
			let { getThumbPercent: s, setThumbPercent: c, decrementThumb: u, incrementThumb: d, step: f, pageSize: p } = t;
			if (!o.current) return;
			let { width: m, height: h } = o.current.getBoundingClientRect(), g = y ? h : m;
			if (L.current ??= s(n) * g, i === `keyboard`) e > 0 && I || e < 0 && !I || r > 0 ? u(n, a ? p : f) : d(n, a ? p : f);
			else {
				let t = y ? r : e;
				(y || I) && (t = -t), L.current += t, c(n, l(L.current / g, 0, 1));
			}
		},
		onMoveEnd() {
			t.setThumbDragging(n, !1);
		}
	});
	t.setThumbEditable(n, !m);
	let { focusableProps: V } = h(g(e, {
		onFocus: () => t.setFocusedThumb(n),
		onBlur: () => t.setFocusedThumb(void 0)
	}), s), H = (0, P.useRef)(void 0), U = (e) => {
		j(), H.current = e, t.setThumbDragging(n, !0), x(window, `mouseup`, W, !1), x(window, `touchend`, W, !1), x(window, `pointerup`, W, !1);
	}, W = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === H.current && (j(), t.setThumbDragging(n, !1), C(window, `mouseup`, W, !1), C(window, `touchend`, W, !1), C(window, `pointerup`, W, !1));
	}, G = t.getThumbPercent(n);
	(y || b === `rtl`) && (G = 1 - G);
	let K = m ? {} : g(z, B, {
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
	return D(s, t.defaultValues[n], (e) => {
		t.setThumbValue(n, e);
	}), {
		inputProps: g(V, k, {
			type: `range`,
			tabIndex: m ? void 0 : 0,
			min: t.getThumbMinValue(n),
			max: t.getThumbMaxValue(n),
			step: t.step,
			value: A,
			name: f,
			form: p,
			disabled: m,
			"aria-orientation": u,
			"aria-valuetext": t.getThumbValueLabel(n),
			"aria-required": r || void 0,
			"aria-invalid": a || i === `invalid` || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-describedby": [w[`aria-describedby`], e[`aria-describedby`]].filter(Boolean).join(` `),
			"aria-details": [w[`aria-details`], e[`aria-details`]].filter(Boolean).join(` `),
			onChange: (e) => {
				t.setThumbValue(n, parseFloat(c(e).value));
			}
		}),
		thumbProps: {
			...K,
			style: {
				position: `absolute`,
				[y ? `top` : `left`]: `${G * 100}%`,
				transform: `translate(-50%, -50%)`,
				touchAction: `none`
			}
		},
		labelProps: O,
		isDragging: t.isThumbDragging(n),
		isDisabled: m,
		isFocused: F
	};
}
var L = 0, R = 100, z = 1;
function B(e) {
	let { isDisabled: t = !1, minValue: n = L, maxValue: r = R, numberFormatter: i, step: a = z, orientation: s = `horizontal` } = e, c = (0, P.useMemo)(() => {
		let e = (r - n) / 10;
		return e = o(e, 0, e + a, a), Math.max(e, a);
	}, [
		a,
		r,
		n
	]), u = (0, P.useCallback)((e) => e?.map((t, i) => {
		let s = i === 0 ? n : e[i - 1], c = i === e.length - 1 ? r : e[i + 1];
		return o(t, s, c, a);
	}), [
		n,
		r,
		a
	]), d = (0, P.useMemo)(() => u(H(e.value)), [e.value, u]), f = (0, P.useMemo)(() => u(H(e.defaultValue) ?? [n]), [
		e.defaultValue,
		n,
		u
	]), p = U(e.value, e.defaultValue, e.onChange), m = U(e.value, e.defaultValue, e.onChangeEnd), [h, g] = O(d, f, p), [_] = (0, P.useState)(h), [v, y] = (0, P.useState)(Array(h.length).fill(!1)), b = (0, P.useRef)(Array(h.length).fill(!0)), [x, S] = (0, P.useState)(void 0), C = (0, P.useRef)(h), w = (0, P.useRef)(v), T = (e) => {
		C.current = e, g(e);
	}, E = (e) => {
		w.current = e, y(e);
	};
	function D(e) {
		return (e - n) / (r - n);
	}
	function k(e) {
		return e === 0 ? n : h[e - 1];
	}
	function A(e) {
		return e === h.length - 1 ? r : h[e + 1];
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
		n = o(n, r, i, a);
		let s = V(C.current, e, n);
		T(s);
	}
	function F(e, n) {
		if (t || !j(e)) return;
		n && (C.current = h);
		let r = w.current[e];
		w.current = V(w.current, e, n), E(w.current), m && r && !w.current.some(Boolean) && m(C.current);
	}
	let I = (0, P.useRef)(null);
	function B(e = h) {
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
		return Math.round((e - n) / a) * a + n;
	}
	function K(e) {
		let t = e * (r - n) + n;
		return l(G(t), n, r);
	}
	function q(e, t = 1) {
		let i = Math.max(t, a);
		N(e, o(h[e] + i, n, r, a));
	}
	function J(e, t = 1) {
		let i = Math.max(t, a);
		N(e, o(h[e] - i, n, r, a));
	}
	return {
		values: h,
		defaultValues: e.defaultValue === void 0 ? _ : f,
		getThumbValue: (e) => h[e],
		setThumbValue: N,
		setThumbPercent: W,
		isThumbDragging: (e) => v[e],
		setThumbDragging: F,
		focusedThumb: x,
		setFocusedThumb: S,
		getThumbPercent: (e) => D(h[e]),
		getValuePercent: D,
		getThumbValueLabel: (e) => B(h[e]),
		getFormattedValue: B,
		getThumbMinValue: k,
		getThumbMaxValue: A,
		getPercentValue: K,
		isThumbEditable: j,
		setThumbEditable: M,
		incrementThumb: q,
		decrementThumb: J,
		step: a,
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
	[e, t] = y(e, t, W);
	let n = (0, P.useRef)(null), r = x(e.formatOptions), i = B({
		...e,
		numberFormatter: r
	}), [a, o] = p(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: s, trackProps: c, labelProps: l, outputProps: d } = F({
		...e,
		label: o
	}, i, n), h = C({
		...e,
		values: {
			orientation: i.orientation,
			isDisabled: i.isDisabled,
			state: i
		},
		defaultClassName: `react-aria-Slider`
	}), _ = w(e, { global: !0 });
	return delete _.id, P.createElement(f, { values: [
		[G, i],
		[K, {
			...c,
			ref: n
		}],
		[J, d],
		[u, {
			...l,
			ref: a
		}]
	] }, P.createElement(m.div, {
		...g(_, h, s),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": i.orientation,
		"data-disabled": i.isDisabled || void 0
	}));
}), X = (0, P.forwardRef)(function(e, t) {
	[e, t] = y(e, t, J);
	let { children: n, style: r, className: i, render: a, ...o } = e, s = (0, P.useContext)(G), c = C({
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
	[e, t] = y(e, t, K);
	let n = (0, P.useContext)(G), { onHoverStart: r, onHoverEnd: i, onHoverChange: a, ...o } = e, { hoverProps: c, isHovered: l } = s({
		onHoverStart: r,
		onHoverEnd: i,
		onHoverChange: a
	}), u = C({
		...e,
		defaultClassName: `react-aria-SliderTrack`,
		values: {
			orientation: n.orientation,
			isDisabled: n.isDisabled,
			isHovered: l,
			state: n
		}
	});
	return P.createElement(m.div, {
		...g(o, c),
		...u,
		ref: t,
		"data-hovered": l || void 0,
		"data-orientation": n.orientation || void 0,
		"data-disabled": n.isDisabled || void 0
	});
}), Q = (0, P.forwardRef)(function(e, t) {
	let { inputRef: r = null } = e, i = (0, P.useContext)(G), { ref: a } = b(K), { index: o = 0 } = e, c = (0, P.useRef)(null), l = r || c, [d, h] = p(!e[`aria-label`] && !e[`aria-labelledby`]), { thumbProps: _, inputProps: v, labelProps: y, isDragging: x, isFocused: S, isDisabled: T } = I({
		...e,
		index: o,
		trackRef: a,
		inputRef: l,
		label: h
	}, i), { focusProps: E, isFocusVisible: D } = n(), { hoverProps: O, isHovered: A } = s(e), j = C({
		...e,
		defaultClassName: `react-aria-SliderThumb`,
		values: {
			state: i,
			isHovered: A,
			isDragging: x,
			isFocused: S,
			isFocusVisible: D,
			isDisabled: T
		}
	}), M = w(e, { global: !0 });
	return delete M.id, P.createElement(m.div, {
		...g(M, _, O),
		...j,
		ref: t,
		style: {
			..._.style,
			...j.style
		},
		"data-hovered": A || void 0,
		"data-dragging": x || void 0,
		"data-focused": S || void 0,
		"data-focus-visible": D || void 0,
		"data-disabled": T || void 0
	}, P.createElement(k, null, P.createElement(`input`, {
		ref: l,
		...g(v, E)
	})), P.createElement(f, { values: [[u, {
		...y,
		ref: d
	}]] }, j.children));
}), ee = (0, P.forwardRef)(function(e, t) {
	[e, t] = y(e, t, q);
	let n = (0, P.useContext)(G), { onHoverStart: r, onHoverEnd: i, onHoverChange: a, ...o } = e, { hoverProps: c, isHovered: u } = s({
		onHoverStart: r,
		onHoverEnd: i,
		onHoverChange: a
	}), d = e.offset == null ? n.getThumbMinValue(0) : l(e.offset, n.getThumbMinValue(0), n.getThumbMaxValue(0)), f = n.values.length > 1 ? n.getThumbPercent(0) * 100 : n.getValuePercent(d) * 100, p = n.values.length > 0 ? n.getThumbPercent(n.values.length - 1) * 100 : 0, h = Math.min(f, p), _ = Math.max(0, Math.max(f, p) - h), v = C({
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
	return P.createElement(m.div, {
		...g(o, c),
		...v,
		ref: t,
		"data-hovered": u || void 0,
		"data-orientation": n.orientation || void 0,
		"data-disabled": n.isDisabled || void 0
	});
}), $ = i();
function te({ label: e, description: t, thumbLabels: n, showBounds: r = !1, className: i, ...o }) {
	let s = (0, P.useId)(), { locale: c } = T(), l = (0, P.useMemo)(() => new Intl.NumberFormat(c, o.formatOptions), [c, o.formatOptions]), u = o.minValue ?? 0, d = o.maxValue ?? 100;
	return (0, $.jsxs)(Y, {
		...o,
		className: a(`group/range flex min-w-0 flex-col gap-1.5`, i),
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
					...t ? { "aria-describedby": s } : {},
					className: a(`top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform before:absolute before:-inset-[3px] before:rounded-full data-hovered:scale-110 data-dragging:scale-110 data-disabled:border-muted motion-reduce:data-hovered:scale-100 motion-reduce:data-dragging:scale-100 forced-colors:border-[ButtonText]`, j)
				}, e))] })
			}),
			r ? (0, $.jsxs)(`div`, {
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
