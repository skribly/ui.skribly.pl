import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { Jt as n, Qt as r, Rt as i, W as a, Xt as o, Yt as s, Zt as c, bn as l, bt as u, dn as d, in as f, on as p, sn as m, st as h, vt as g } from "./doc.DoLlUurT.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
var v = e(t(), 1), y = (0, v.createContext)({ placement: `bottom` }), b = (0, v.forwardRef)(function(e, t) {
	[e, t] = p(e, t, y);
	let n = e.placement, r = {
		position: `absolute`,
		transform: n === `top` || n === `bottom` ? `translateX(-50%)` : `translateY(-50%)`
	};
	n != null && (r[n] = `100%`);
	let i = m({
		...e,
		defaultClassName: `react-aria-OverlayArrow`,
		values: { placement: n }
	});
	i.style && Object.keys(i.style).forEach((e) => i.style[e] === void 0 && delete i.style[e]);
	let a = h(e);
	return v.createElement(d.div, {
		...a,
		...i,
		style: {
			...r,
			...i.style
		},
		ref: t,
		"data-placement": n
	});
}), x = {
	top: `top`,
	bottom: `top`,
	left: `left`,
	right: `left`
}, S = {
	top: `bottom`,
	bottom: `top`,
	left: `right`,
	right: `left`
}, C = {
	top: `left`,
	left: `top`
}, w = {
	top: `height`,
	left: `width`
}, T = {
	width: `totalWidth`,
	height: `totalHeight`
}, E = {}, D = () => typeof document < `u` ? window.visualViewport : null;
function O(e, t) {
	let n = 0, r = 0, a = 0, o = 0, s = 0, c = 0, l = {}, u = (t?.scale ?? 1) > 1;
	if (e.tagName === `BODY` || e.tagName === `HTML`) {
		let i = document.documentElement;
		a = i.clientWidth, o = i.clientHeight, n = t?.width ?? a, r = t?.height ?? o, l.top = i.scrollTop || e.scrollTop, l.left = i.scrollLeft || e.scrollLeft, t && (s = Math.max(0, t.pageTop - (l.top ?? 0)), c = Math.max(0, t.pageLeft - (l.left ?? 0)));
	} else ({width: n, height: r, top: s, left: c} = z(e, !1)), l.top = e.scrollTop, l.left = e.scrollLeft, a = n, o = r;
	return i() && (e.tagName === `BODY` || e.tagName === `HTML`) && u && (l.top = 0, l.left = 0, s = t?.pageTop ?? 0, c = t?.pageLeft ?? 0), {
		width: n,
		height: r,
		totalWidth: a,
		totalHeight: o,
		scroll: l,
		top: s,
		left: c
	};
}
function k(e) {
	return {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight
	};
}
function A(e, t, n, r, i, a, o) {
	let s = i.scroll[e] ?? 0, c = r[w[e]], l = o[e] + r.scroll[x[e]] + a, u = o[e] + r.scroll[x[e]] + c - a, d = t - s + r.scroll[x[e]] + o[e] - r[x[e]], f = t - s + n + r.scroll[x[e]] + o[e] - r[x[e]];
	return d < l ? l - d : f > u ? Math.max(u - f, l - d) : 0;
}
function j(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0
	};
}
function M(e) {
	if (E[e]) return E[e];
	let [t, n] = e.split(` `), r = x[t] || `right`, i = C[r];
	x[n] || (n = `center`);
	let a = w[r], o = w[i];
	return E[e] = {
		placement: t,
		crossPlacement: n,
		axis: r,
		crossAxis: i,
		size: a,
		crossSize: o
	}, E[e];
}
function N(e, t, n, r, i, o, s, c, l, u, d) {
	let { placement: f, crossPlacement: p, axis: m, crossAxis: h, size: g, crossSize: _ } = r, v = {};
	v[h] = e[h] ?? 0, p === `center` ? v[h] += ((e[_] ?? 0) - (n[_] ?? 0)) / 2 : p !== h && (v[h] += (e[_] ?? 0) - (n[_] ?? 0)), v[h] += o;
	let y = e[h] - n[_] + l + u, b = e[h] + e[_] - l - u;
	if (v[h] = a(v[h], y, b), f === m) {
		let t = c ? d[g] : d[T[g]];
		v[S[m]] = Math.floor(t - e[m] + i);
	} else v[m] = Math.floor(e[m] + e[g] + i);
	return v;
}
function P(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (e.top == null ? c[T.height] - (e.bottom ?? 0) - o : e.top) - (c.scroll.top ?? 0), f = l ? n.top : 0, p = {
		top: Math.max(t.top + f, (u?.offsetTop ?? t.top) + f),
		bottom: Math.min(t.top + t.height + f, (u?.offsetTop ?? 0) + (u?.height ?? 0))
	};
	return s === `top` ? Math.max(0, d + o - p.top - ((i.top ?? 0) + (i.bottom ?? 0) + a)) : Math.max(0, p.bottom - d - ((i.top ?? 0) + (i.bottom ?? 0) + a));
}
function F(e, t, n, r, i, a, o, s) {
	let { placement: c, axis: l, size: u } = a;
	return c === l ? Math.max(0, n[l] - (o.scroll[l] ?? 0) - (e[l] + (s ? t[l] : 0)) - (r[l] ?? 0) - r[S[l]] - i) : Math.max(0, e[u] + e[l] + (s ? t[l] : 0) - n[l] - n[u] + (o.scroll[l] ?? 0) - (r[l] ?? 0) - r[S[l]] - i);
}
function I(e, t, n, r, i, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let y = M(e), { size: b, crossAxis: C, crossSize: w, placement: T, crossPlacement: E } = y, D = N(t, c, n, y, d, f, u, p, h, g, l), O = d, k = F(c, u, t, i, o + d, y, l, _);
	if (s && n[b] > k) {
		let e = M(`${S[T]} ${E}`), r = N(t, c, n, e, d, f, u, p, h, g, l);
		F(c, u, t, i, o + d, e, l, _) > k && (y = e, D = r, O = d);
	}
	let j = `bottom`;
	y.axis === `top` ? y.placement === `top` ? j = `top` : y.placement === `bottom` && (j = `bottom`) : y.crossAxis === `top` && (y.crossPlacement === `top` ? j = `bottom` : y.crossPlacement === `bottom` && (j = `top`));
	let I = A(C, D[C], n[w], c, l, o, u);
	D[C] += I;
	let L = P(D, c, u, p, i, o, n.height, j, l, _, v);
	m && m < L && (L = m), n.height = Math.min(n.height, L), D = N(t, c, n, y, O, f, u, p, h, g, l), I = A(C, D[C], n[w], c, l, o, u), D[C] += I;
	let R = {}, z = t[C] - D[C] - i[x[C]], B = z + .5 * t[w], V = h / 2 + g, H = x[C] === `left` ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), U = n[w] - H - h / 2 - g, W = t[C] + h / 2 - (D[C] + i[x[C]]), G = t[C] + t[w] - h / 2 - (D[C] + i[x[C]]), K = a(B, W, G);
	R[C] = a(K, V, U), {placement: T, crossPlacement: E} = y, h ? z = R[C] : E === `right` ? z += t[w] : E === `center` && (z += t[w] / 2);
	let q = T === `left` || T === `top` ? n[b] : 0, J = {
		x: T === `top` || T === `bottom` ? z : q,
		y: T === `left` || T === `right` ? z : q
	};
	return {
		position: D,
		maxHeight: L,
		arrowOffsetLeft: R.left,
		arrowOffsetTop: R.top,
		placement: T,
		triggerAnchorPoint: J
	};
}
function L(e) {
	let { placement: t, targetNode: r, overlayNode: i, scrollNode: a, padding: o, shouldFlip: s, boundaryElement: c, offset: l, crossOffset: u, maxHeight: d, arrowSize: f = 0, arrowBoundaryOffset: p = 0, targetRect: m } = e, h = D(), g = i instanceof HTMLElement ? V(i) : document.documentElement, _ = g === document.documentElement, v = window.getComputedStyle(g).position, y = !!v && v !== `static`, b = _ ? z(r, !1, m) : B(r, g, !1, m);
	if (!_) {
		let { marginTop: e, marginLeft: t } = window.getComputedStyle(r);
		b.top += parseInt(e, 10) || 0, b.left += parseInt(t, 10) || 0;
	}
	let x = z(i, !0), S = j(i);
	x.width += (S.left ?? 0) + (S.right ?? 0), x.height += (S.top ?? 0) + (S.bottom ?? 0);
	let C = k(a), w = O(c, h), T = O(g, h), E;
	if ((c.tagName === `BODY` || c.tagName === `HTML`) && !_) {
		let e = R(g, !1);
		E = {
			top: -(e.top - w.top),
			left: -(e.left - w.left),
			width: 0,
			height: 0
		};
	} else E = (c.tagName === `BODY` || c.tagName === `HTML`) && _ ? {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	} : B(c, g, !1);
	let A = n(c, g);
	return I(t, b, x, C, S, o, s, w, T, E, l, u, y, d, f, p, A, h);
}
function R(e, t) {
	let { top: n, left: r, width: i, height: a } = e.getBoundingClientRect();
	return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, a = e.offsetHeight), {
		top: n,
		left: r,
		width: i,
		height: a
	};
}
function z(e, t, n) {
	let { top: r, left: i, width: a, height: o } = n || R(e, t), { scrollTop: s, scrollLeft: c, clientTop: l, clientLeft: u } = document.documentElement;
	return {
		top: r + s - l,
		left: i + c - u,
		width: a,
		height: o
	};
}
function B(e, t, n, r) {
	let i = window.getComputedStyle(e), a;
	if (i.position === `fixed`) a = r || R(e, n);
	else {
		a = z(e, n, r);
		let i = z(t, n), o = window.getComputedStyle(t);
		i.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft, a.top -= i.top, a.left -= i.left;
	}
	return a.top -= parseInt(i.marginTop, 10) || 0, a.left -= parseInt(i.marginLeft, 10) || 0, a;
}
function V(e) {
	let t = e.offsetParent;
	if (t && t === document.body && window.getComputedStyle(t).position === `static` && !H(t) && (t = document.documentElement), t == null) for (t = e.parentElement; t && !H(t);) t = t.parentElement;
	return t || document.documentElement;
}
function H(e) {
	let t = window.getComputedStyle(e);
	return t.transform !== `none` || /transform|perspective/.test(t.willChange) || t.filter !== `none` || t.contain === `paint` || `backdropFilter` in t && t.backdropFilter !== `none` || `WebkitBackdropFilter` in t && t.WebkitBackdropFilter !== `none`;
}
var U = new WeakMap();
function W(e) {
	let { triggerRef: t, isOpen: i, onClose: a } = e;
	(0, v.useEffect)(() => !i || a === null ? void 0 : f(c(t.current), `scroll`, (e) => {
		let i = r(e);
		if (!t.current || i instanceof Node && !n(i, t.current) || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement) return;
		let o = a || U.get(t.current);
		o && o();
	}, !0), [
		i,
		a,
		t
	]);
}
function G() {
	return window.ResizeObserver !== void 0;
}
function K(e) {
	let { ref: t, box: n, onResize: r } = e, i = u(r);
	(0, v.useEffect)(() => {
		let e = t?.current;
		if (e) {
			if (G()) {
				let t = new window.ResizeObserver((e) => {
					e.length && i();
				});
				return t.observe(e, { box: n }), () => {
					e && t.unobserve(e);
				};
			}
			return window.addEventListener(`resize`, i, !1), () => {
				window.removeEventListener(`resize`, i, !1);
			};
		}
	}, [t, n]);
}
var q = typeof document < `u` ? window.visualViewport : null;
function J(e) {
	let { direction: t } = g(), { arrowSize: n, targetRef: r, overlayRef: i, arrowRef: a, scrollRef: u = i, placement: d = `bottom`, containerPadding: p = 12, shouldFlip: m = !0, boundaryElement: h = typeof document < `u` ? document.body : null, offset: _ = 0, crossOffset: y = 0, shouldUpdatePosition: b = !0, isOpen: x = !0, onClose: S, maxHeight: C, arrowBoundaryOffset: w = 0, getTargetRect: T } = e, [E, D] = (0, v.useState)(null), O = [
		b,
		d,
		i.current,
		r.current,
		a?.current,
		u.current,
		p,
		m,
		h,
		_,
		y,
		x,
		t,
		C,
		w,
		n
	], k = (0, v.useRef)(q?.scale);
	(0, v.useEffect)(() => {
		x && (k.current = q?.scale);
	}, [x]);
	let A = (0, v.useCallback)(() => {
		if (b === !1 || !x || !i.current || !r.current || !h || q?.scale !== k.current) return;
		let e = null;
		if (u.current && s(u.current)) {
			let t = o()?.getBoundingClientRect(), n = u.current.getBoundingClientRect();
			e = {
				type: `top`,
				offset: (t?.top ?? 0) - n.top
			}, e.offset > n.height / 2 && (e.type = `bottom`, e.offset = (t?.bottom ?? 0) - n.bottom);
		}
		let c = i.current;
		!C && i.current && (c.style.top = `0px`, c.style.bottom = ``, c.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + `px`);
		let l = L({
			placement: X(d, t),
			overlayNode: i.current,
			targetNode: r.current,
			scrollNode: u.current || i.current,
			padding: p,
			shouldFlip: m,
			boundaryElement: h,
			offset: _,
			crossOffset: y,
			maxHeight: C,
			arrowSize: n ?? (a?.current ? R(a.current, !0).width : 0),
			arrowBoundaryOffset: w,
			targetRect: T?.(r.current)
		});
		if (!l.position) return;
		c.style.top = ``, c.style.bottom = ``, c.style.left = ``, c.style.right = ``, Object.keys(l.position).forEach((e) => c.style[e] = l.position[e] + `px`), c.style.maxHeight = l.maxHeight == null ? `` : l.maxHeight + `px`;
		let f = o();
		if (e && f && u.current) {
			let t = f.getBoundingClientRect(), n = u.current.getBoundingClientRect(), r = t[e.type] - n[e.type];
			u.current.scrollTop += r - e.offset;
		}
		D(l);
	}, O);
	l(A, O), Y(A), K({
		ref: i,
		onResize: A
	}), K({
		ref: r,
		onResize: A
	});
	let j = (0, v.useRef)(!1);
	l(() => {
		let e, t = () => {
			j.current = !0, clearTimeout(e), e = setTimeout(() => {
				j.current = !1;
			}, 500), A();
		}, n = () => {
			j.current && t();
		};
		q?.addEventListener(`resize`, t), q?.addEventListener(`scroll`, n);
		let r = f(c(window), `scroll`, n);
		return () => {
			q?.removeEventListener(`resize`, t), q?.removeEventListener(`scroll`, n), r();
		};
	}, [A]);
	let M = (0, v.useCallback)(() => {
		j.current || S?.();
	}, [S, j]);
	return W({
		triggerRef: r,
		isOpen: x,
		onClose: S && M
	}), {
		overlayProps: { style: {
			position: E ? `absolute` : `fixed`,
			top: E ? void 0 : 0,
			left: E ? void 0 : 0,
			zIndex: 1e5,
			...E?.position,
			maxHeight: E?.maxHeight ?? `100vh`
		} },
		placement: E?.placement ?? null,
		triggerAnchorPoint: E?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": `true`,
			role: `presentation`,
			style: {
				left: E?.arrowOffsetLeft,
				top: E?.arrowOffsetTop
			}
		},
		updatePosition: A
	};
}
function Y(e) {
	l(() => (window.addEventListener(`resize`, e, !1), () => {
		window.removeEventListener(`resize`, e, !1);
	}), [e]);
}
function X(e, t) {
	return t === `rtl` ? e.replace(`start`, `right`).replace(`end`, `left`) : e.replace(`start`, `left`).replace(`end`, `right`);
}
function Z(e) {
	let [t, n] = _(e.isOpen, e.defaultOpen || !1, e.onOpenChange), [r, i] = (0, v.useState)(null);
	return {
		isOpen: t,
		setOpen: n,
		open: (0, v.useCallback)(() => {
			n(!0);
		}, [n]),
		close: (0, v.useCallback)(() => {
			n(!1);
		}, [n]),
		toggle: (0, v.useCallback)(() => {
			n(!t);
		}, [n, t]),
		point: r,
		setPoint: i
	};
}
export { y as a, U as i, J as n, b as o, K as r, Z as t };
