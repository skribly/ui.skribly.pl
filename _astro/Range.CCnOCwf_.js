import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, Dt as r, E as i, Et as a, H as o, L as s, Mt as c, P as l, Pt as u, St as d, T as f, Tt as p, _ as m, _t as h, d as g, f as _, ft as v, h as y, j as b, l as x, m as S, v as C, w, wt as T, x as E, z as D } from "./createLucideIcon.npgQlVHx.js";
import { t as O } from "./useFormReset.B5f8O4ea.js";
import { t as k } from "./useControlledState.DijOhE0s.js";
import { t as A } from "./VisuallyHidden.DXeJgMmE.js";
import { n as j, t as M } from "./jsx-runtime.yrTYNGQT.js";
import { f as N, n as P } from "./styles.MHrEldHY.js";
var F = e(t(), 1);
function I(e) {
	let { onMoveStart: t, onMove: n, onMoveEnd: r } = e, i = (0, F.useRef)({
		didMove: !1,
		lastPosition: null,
		id: null
	}), { addGlobalListener: a, removeGlobalListener: o } = E(), s = (0, F.useCallback)((e, r, a, o) => {
		(a !== 0 || o !== 0) && (i.current.didMove || (i.current.didMove = !0, t?.({
			type: `movestart`,
			pointerType: r,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		})), n?.({
			type: `move`,
			pointerType: r,
			deltaX: a,
			deltaY: o,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		}));
	}, [
		t,
		n,
		i
	]), c = D(s), l = (0, F.useCallback)((e, t) => {
		f(), i.current.didMove && r?.({
			type: `moveend`,
			pointerType: t,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		});
	}, [r, i]), u = D(l);
	return { moveProps: (0, F.useMemo)(() => {
		let e = {}, t = () => {
			w(), i.current.didMove = !1;
		};
		{
			let n = (e) => {
				if (e.pointerId === i.current.id) {
					let t = e.pointerType || `mouse`;
					c(e, t, e.pageX - (i.current.lastPosition?.pageX ?? 0), e.pageY - (i.current.lastPosition?.pageY ?? 0)), i.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					};
				}
			}, r = (e) => {
				if (e.pointerId === i.current.id) {
					let t = e.pointerType || `mouse`;
					u(e, t), i.current.id = null;
					let a = d(h(e));
					o(a, `pointermove`, n, !1), o(a, `pointerup`, r, !1), o(a, `pointercancel`, r, !1);
				}
			};
			e.onPointerDown = (e) => {
				if (e.button === 0 && i.current.id == null) {
					t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					}, i.current.id = e.pointerId;
					let o = d(h(e));
					a(o, `pointermove`, n, !1), a(o, `pointerup`, r, !1), a(o, `pointercancel`, r, !1);
				}
			};
		}
		let n = (e, n, r) => {
			t(), c(e, `keyboard`, n, r), u(e, `keyboard`);
		};
		return e.onKeyDown = (e) => {
			switch (e.key) {
				case `Left`:
				case `ArrowLeft`:
					e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
					break;
				case `Right`:
				case `ArrowRight`:
					e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
					break;
				case `Up`:
				case `ArrowUp`:
					e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
					break;
				case `Down`:
				case `ArrowDown`: e.preventDefault(), e.stopPropagation(), n(e, 0, 1);
			}
		}, e;
	}, [
		a,
		o,
		i
	]) };
}
var L = new WeakMap();
function R(e, t) {
	let n = L.get(e);
	if (!n) throw Error(`Unknown slider state`);
	return `${n.id}-${t}`;
}
function z(e, t, n) {
	let { labelProps: r, fieldProps: i } = S(e), a = e.orientation === `vertical`;
	L.set(t, {
		id: r.id ?? i.id,
		"aria-describedby": e[`aria-describedby`],
		"aria-details": e[`aria-details`]
	});
	let { direction: c } = s(), { addGlobalListener: l, removeGlobalListener: d } = E(), f = (0, F.useRef)(null), p = c === `rtl`, m = (0, F.useRef)(null), { moveProps: h } = I({
		onMoveStart() {
			m.current = null;
		},
		onMove({ deltaX: e, deltaY: r }) {
			if (!n.current) return;
			let { height: i, width: o } = n.current.getBoundingClientRect(), s = a ? i : o;
			m.current == null && f.current != null && (m.current = t.getThumbPercent(f.current) * s);
			let c = a ? r : e;
			if ((a || p) && (c = -c), m.current += c, f.current != null && n.current) {
				let e = x(m.current / s, 0, 1);
				t.setThumbPercent(f.current, e);
			}
		},
		onMoveEnd() {
			f.current != null && (t.setThumbDragging(f.current, !1), f.current = null);
		}
	}), g = (0, F.useRef)(void 0), _ = (r, i, o, s) => {
		if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
			let { height: e, width: u, top: d, left: p } = n.current.getBoundingClientRect(), m = a ? e : u, h = ((a ? s : o) - (a ? d : p)) / m;
			(c === `rtl` || a) && (h = 1 - h);
			let _ = t.getPercentValue(h), y, b = t.values.findIndex((e) => _ - e < 0);
			if (b === 0) y = b;
			else if (b === -1) y = t.values.length - 1;
			else {
				let e = t.values[b - 1], n = t.values[b];
				y = Math.abs(e - _) < Math.abs(n - _) ? b - 1 : b;
			}
			y >= 0 && t.isThumbEditable(y) ? (r.preventDefault(), f.current = y, t.setFocusedThumb(y), g.current = i, t.setThumbDragging(f.current, !0), t.setThumbValue(y, _), l(window, `mouseup`, v, !1), l(window, `touchend`, v, !1), l(window, `pointerup`, v, !1)) : f.current = null;
		}
	}, v = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === g.current && (f.current != null && (t.setThumbDragging(f.current, !1), f.current = null), d(window, `mouseup`, v, !1), d(window, `touchend`, v, !1), d(window, `pointerup`, v, !1));
	};
	return `htmlFor` in r && r.htmlFor && (delete r.htmlFor, r.onClick = () => {
		document.getElementById(R(t, 0))?.focus(), o(`keyboard`);
	}), {
		labelProps: r,
		groupProps: {
			role: `group`,
			...i
		},
		trackProps: u({
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
		}, h),
		outputProps: {
			htmlFor: t.values.map((e, n) => R(t, n)).join(` `),
			"aria-live": `off`
		}
	};
}
function B(e, t) {
	let { index: n = 0, isRequired: r, validationState: i, isInvalid: a, trackRef: o, inputRef: c, orientation: d = t.orientation, name: f, form: p } = e, m = e.isDisabled || t.isDisabled, g = d === `vertical`, { direction: _ } = s(), { addGlobalListener: y, removeGlobalListener: C } = E(), w = L.get(t), { labelProps: T, fieldProps: D } = S({
		...e,
		id: R(t, n),
		"aria-labelledby": `${w.id} ${e[`aria-labelledby`] ?? ``}`.trim()
	}), k = t.values[n], A = (0, F.useCallback)(() => {
		c.current && v(c.current);
	}, [c]), j = t.focusedThumb === n;
	(0, F.useEffect)(() => {
		j && A();
	}, [j, A]);
	let M = _ === `rtl`, N = (0, F.useRef)(null), P = (e) => {
		t.setThumbDragging(n, !0), e(), t.setThumbDragging(n, !1);
	}, { keyboardProps: z } = l({
		shortcuts: {
			PageUp: () => P(() => {
				t.incrementThumb(n, t.pageSize);
			}),
			PageDown: () => P(() => {
				t.decrementThumb(n, t.pageSize);
			}),
			Home: () => P(() => {
				t.setThumbValue(n, t.getThumbMinValue(n));
			}),
			End: () => P(() => {
				t.setThumbValue(n, t.getThumbMaxValue(n));
			})
		},
		allowRepeats: !0
	}), { moveProps: B } = I({
		onMoveStart() {
			N.current = null, t.setThumbDragging(n, !0);
		},
		onMove({ deltaX: e, deltaY: r, pointerType: i, shiftKey: a }) {
			let { getThumbPercent: s, setThumbPercent: c, decrementThumb: l, incrementThumb: u, step: d, pageSize: f } = t;
			if (!o.current) return;
			let { width: p, height: m } = o.current.getBoundingClientRect(), h = g ? m : p;
			if (N.current ??= s(n) * h, i === `keyboard`) e > 0 && M || e < 0 && !M || r > 0 ? l(n, a ? f : d) : u(n, a ? f : d);
			else {
				let t = g ? r : e;
				(g || M) && (t = -t), N.current += t, c(n, x(N.current / h, 0, 1));
			}
		},
		onMoveEnd() {
			t.setThumbDragging(n, !1);
		}
	});
	t.setThumbEditable(n, !m);
	let { focusableProps: V } = b(u(e, {
		onFocus: () => t.setFocusedThumb(n),
		onBlur: () => t.setFocusedThumb(void 0)
	}), c), H = (0, F.useRef)(void 0), U = (e) => {
		A(), H.current = e, t.setThumbDragging(n, !0), y(window, `mouseup`, W, !1), y(window, `touchend`, W, !1), y(window, `pointerup`, W, !1);
	}, W = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === H.current && (A(), t.setThumbDragging(n, !1), C(window, `mouseup`, W, !1), C(window, `touchend`, W, !1), C(window, `pointerup`, W, !1));
	}, G = t.getThumbPercent(n);
	(g || _ === `rtl`) && (G = 1 - G);
	let K = m ? {} : u(z, B, {
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
	return O(c, t.defaultValues[n], (e) => {
		t.setThumbValue(n, e);
	}), {
		inputProps: u(V, D, {
			type: `range`,
			tabIndex: m ? void 0 : 0,
			min: t.getThumbMinValue(n),
			max: t.getThumbMaxValue(n),
			step: t.step,
			value: k,
			name: f,
			form: p,
			disabled: m,
			"aria-orientation": d,
			"aria-valuetext": t.getThumbValueLabel(n),
			"aria-required": r || void 0,
			"aria-invalid": a || i === `invalid` || void 0,
			"aria-errormessage": e[`aria-errormessage`],
			"aria-describedby": [w[`aria-describedby`], e[`aria-describedby`]].filter(Boolean).join(` `),
			"aria-details": [w[`aria-details`], e[`aria-details`]].filter(Boolean).join(` `),
			onChange: (e) => {
				t.setThumbValue(n, parseFloat(h(e).value));
			}
		}),
		thumbProps: {
			...K,
			style: {
				position: `absolute`,
				[g ? `top` : `left`]: `${G * 100}%`,
				transform: `translate(-50%, -50%)`,
				touchAction: `none`
			}
		},
		labelProps: T,
		isDragging: t.isThumbDragging(n),
		isDisabled: m,
		isFocused: j
	};
}
var V = 0, H = 100, U = 1;
function W(e) {
	let { isDisabled: t = !1, minValue: n = V, maxValue: r = H, numberFormatter: i, step: a = U, orientation: o = `horizontal` } = e, s = (0, F.useMemo)(() => {
		let e = (r - n) / 10;
		return e = g(e, 0, e + a, a), Math.max(e, a);
	}, [
		a,
		r,
		n
	]), c = (0, F.useCallback)((e) => e?.map((t, i) => {
		let o = i === 0 ? n : e[i - 1], s = i === e.length - 1 ? r : e[i + 1];
		return g(t, o, s, a);
	}), [
		n,
		r,
		a
	]), l = (0, F.useMemo)(() => c(K(e.value)), [e.value, c]), u = (0, F.useMemo)(() => c(K(e.defaultValue) ?? [n]), [
		e.defaultValue,
		n,
		c
	]), d = q(e.value, e.defaultValue, e.onChange), f = q(e.value, e.defaultValue, e.onChangeEnd), [p, m] = k(l, u, d), [h] = (0, F.useState)(p), [_, v] = (0, F.useState)(Array(p.length).fill(!1)), y = (0, F.useRef)(Array(p.length).fill(!0)), [b, S] = (0, F.useState)(void 0), C = (0, F.useRef)(p), w = (0, F.useRef)(_), T = (e) => {
		C.current = e, m(e);
	}, E = (e) => {
		w.current = e, v(e);
	};
	function D(e) {
		return (e - n) / (r - n);
	}
	function O(e) {
		return e === 0 ? n : p[e - 1];
	}
	function A(e) {
		return e === p.length - 1 ? r : p[e + 1];
	}
	function j(e) {
		return y.current[e];
	}
	function M(e, t) {
		y.current[e] = t;
	}
	function N(e, n) {
		if (t || !j(e)) return;
		let r = O(e), i = A(e);
		n = g(n, r, i, a);
		let o = G(C.current, e, n);
		T(o);
	}
	function P(e, n) {
		if (t || !j(e)) return;
		n && (C.current = p);
		let r = w.current[e];
		w.current = G(w.current, e, n), E(w.current), f && r && !w.current.some(Boolean) && f(C.current);
	}
	let I = (0, F.useRef)(null);
	function L(e = p) {
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
	function R(e, t) {
		N(e, B(t));
	}
	function z(e) {
		return Math.round((e - n) / a) * a + n;
	}
	function B(e) {
		let t = e * (r - n) + n;
		return x(z(t), n, r);
	}
	function W(e, t = 1) {
		let i = Math.max(t, a);
		N(e, g(p[e] + i, n, r, a));
	}
	function J(e, t = 1) {
		let i = Math.max(t, a);
		N(e, g(p[e] - i, n, r, a));
	}
	return {
		values: p,
		defaultValues: e.defaultValue === void 0 ? h : u,
		getThumbValue: (e) => p[e],
		setThumbValue: N,
		setThumbPercent: R,
		isThumbDragging: (e) => _[e],
		setThumbDragging: P,
		focusedThumb: b,
		setFocusedThumb: S,
		getThumbPercent: (e) => D(p[e]),
		getValuePercent: D,
		getThumbValueLabel: (e) => L(p[e]),
		getFormattedValue: L,
		getThumbMinValue: O,
		getThumbMaxValue: A,
		getPercentValue: B,
		isThumbEditable: j,
		setThumbEditable: M,
		incrementThumb: W,
		decrementThumb: J,
		step: a,
		pageSize: s,
		orientation: o,
		isDisabled: t
	};
}
function G(e, t, n) {
	return e[t] === n ? e : [
		...e.slice(0, t),
		n,
		...e.slice(t + 1)
	];
}
function K(e) {
	if (e != null) return Array.isArray(e) ? e : [e];
}
function q(e, t, n) {
	return (r) => {
		typeof e == `number` || typeof t == `number` ? n?.(r[0]) : n?.(r);
	};
}
var J = (0, F.createContext)(null), Y = (0, F.createContext)(null), X = (0, F.createContext)(null), ee = (0, F.createContext)(null), Z = (0, F.createContext)(null), te = (0, F.forwardRef)(function(e, t) {
	[e, t] = p(e, t, J);
	let o = (0, F.useRef)(null), s = _(e.formatOptions), c = W({
		...e,
		numberFormatter: s
	}), [l, d] = r(!e[`aria-label`] && !e[`aria-labelledby`]), { groupProps: f, trackProps: m, labelProps: h, outputProps: g } = z({
		...e,
		label: d
	}, c, o), v = a({
		...e,
		values: {
			orientation: c.orientation,
			isDisabled: c.isDisabled,
			state: c
		},
		defaultClassName: `react-aria-Slider`
	}), b = i(e, { global: !0 });
	return delete b.id, F.createElement(T, { values: [
		[Y, c],
		[X, {
			...m,
			ref: o
		}],
		[Z, g],
		[y, {
			...h,
			ref: l
		}]
	] }, F.createElement(n.div, {
		...u(b, v, f),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": c.orientation,
		"data-disabled": c.isDisabled || void 0
	}));
}), Q = (0, F.forwardRef)(function(e, t) {
	[e, t] = p(e, t, Z);
	let { children: r, style: i, className: o, render: s, ...c } = e, l = (0, F.useContext)(Y), u = a({
		className: o,
		style: i,
		children: r,
		render: s,
		defaultChildren: l.getFormattedValue(),
		defaultClassName: `react-aria-SliderOutput`,
		values: {
			orientation: l.orientation,
			isDisabled: l.isDisabled,
			state: l
		}
	});
	return F.createElement(n.output, {
		...c,
		...u,
		ref: t,
		"data-orientation": l.orientation || void 0,
		"data-disabled": l.isDisabled || void 0
	});
}), ne = (0, F.forwardRef)(function(e, t) {
	[e, t] = p(e, t, X);
	let r = (0, F.useContext)(Y), { onHoverStart: i, onHoverEnd: o, onHoverChange: s, ...c } = e, { hoverProps: l, isHovered: d } = m({
		onHoverStart: i,
		onHoverEnd: o,
		onHoverChange: s
	}), f = a({
		...e,
		defaultClassName: `react-aria-SliderTrack`,
		values: {
			orientation: r.orientation,
			isDisabled: r.isDisabled,
			isHovered: d,
			state: r
		}
	});
	return F.createElement(n.div, {
		...u(c, l),
		...f,
		ref: t,
		"data-hovered": d || void 0,
		"data-orientation": r.orientation || void 0,
		"data-disabled": r.isDisabled || void 0
	});
}), re = (0, F.forwardRef)(function(e, t) {
	let { inputRef: o = null } = e, s = (0, F.useContext)(Y), { ref: l } = c(X), { index: d = 0 } = e, f = (0, F.useRef)(null), p = o || f, [h, g] = r(!e[`aria-label`] && !e[`aria-labelledby`]), { thumbProps: _, inputProps: v, labelProps: b, isDragging: x, isFocused: S, isDisabled: w } = B({
		...e,
		index: d,
		trackRef: l,
		inputRef: p,
		label: g
	}, s), { focusProps: E, isFocusVisible: D } = C(), { hoverProps: O, isHovered: k } = m(e), j = a({
		...e,
		defaultClassName: `react-aria-SliderThumb`,
		values: {
			state: s,
			isHovered: k,
			isDragging: x,
			isFocused: S,
			isFocusVisible: D,
			isDisabled: w
		}
	}), M = i(e, { global: !0 });
	return delete M.id, F.createElement(n.div, {
		...u(M, _, O),
		...j,
		ref: t,
		style: {
			..._.style,
			...j.style
		},
		"data-hovered": k || void 0,
		"data-dragging": x || void 0,
		"data-focused": S || void 0,
		"data-focus-visible": D || void 0,
		"data-disabled": w || void 0
	}, F.createElement(A, null, F.createElement(`input`, {
		ref: p,
		...u(v, E)
	})), F.createElement(T, { values: [[y, {
		...b,
		ref: h
	}]] }, j.children));
}), ie = (0, F.forwardRef)(function(e, t) {
	[e, t] = p(e, t, ee);
	let r = (0, F.useContext)(Y), { onHoverStart: i, onHoverEnd: o, onHoverChange: s, ...c } = e, { hoverProps: l, isHovered: d } = m({
		onHoverStart: i,
		onHoverEnd: o,
		onHoverChange: s
	}), f = e.offset == null ? r.getThumbMinValue(0) : x(e.offset, r.getThumbMinValue(0), r.getThumbMaxValue(0)), h = r.values.length > 1 ? r.getThumbPercent(0) * 100 : r.getValuePercent(f) * 100, g = r.values.length > 0 ? r.getThumbPercent(r.values.length - 1) * 100 : 0, _ = Math.min(h, g), v = Math.max(0, Math.max(h, g) - _), y = a({
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
			isHovered: d,
			state: r
		}
	});
	return F.createElement(n.div, {
		...u(c, l),
		...y,
		ref: t,
		"data-hovered": d || void 0,
		"data-orientation": r.orientation || void 0,
		"data-disabled": r.isDisabled || void 0
	});
}), $ = M();
function ae({ label: e, description: t, thumbLabels: n, showBounds: r = !1, className: i, ...a }) {
	let o = (0, F.useId)(), { locale: c } = s(), l = (0, F.useMemo)(() => new Intl.NumberFormat(c, a.formatOptions), [c, a.formatOptions]), u = a.minValue ?? 0, d = a.maxValue ?? 100;
	return (0, $.jsxs)(te, {
		...a,
		className: j(`group/range flex min-w-0 flex-col gap-1.5`, i),
		children: [
			(0, $.jsxs)(`div`, {
				className: `flex flex-wrap items-baseline justify-between gap-x-3`,
				children: [(0, $.jsx)(N, { children: e }), (0, $.jsx)(Q, { className: `text-caption font-medium text-fg tabular-nums` })]
			}),
			(0, $.jsx)(ne, {
				className: `relative mx-2.5 h-6 cursor-default before:absolute before:inset-x-0 before:top-1/2 before:h-1.5 before:-translate-y-1/2 before:rounded-full before:border before:border-border-strong before:bg-sunken group-data-disabled/range:cursor-not-allowed`,
				children: ({ state: e }) => (0, $.jsxs)($.Fragment, { children: [(0, $.jsx)(ie, { className: `top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent group-data-disabled/range:bg-muted forced-colors:bg-[Highlight] forced-colors:forced-color-adjust-none` }), (e.values.length > 1 ? [`start`, `end`] : [`only`]).map((e, r) => (0, $.jsx)(re, {
					index: r,
					...n?.[r] ? { "aria-label": n[r] } : {},
					...t ? { "aria-describedby": o } : {},
					className: j(`top-1/2 size-5 -translate-y-1/2 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform before:absolute before:-inset-[3px] before:rounded-full data-hovered:scale-110 data-dragging:scale-110 data-disabled:border-muted motion-reduce:data-hovered:scale-100 motion-reduce:data-dragging:scale-100 forced-colors:border-[ButtonText]`, P)
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
export { Q as a, B as c, Z as i, z as l, ne as n, X as o, Y as r, W as s, ae as t, I as u };
