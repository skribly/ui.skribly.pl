import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, Ct as r, E as i, Et as a, L as o, Tt as s, _t as c, gt as l, ht as u, l as d, mt as f, pt as p, rt as m, z as h, zt as g } from "./createLucideIcon.npgQlVHx.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
var v = e(t(), 1), y = (0, v.createContext)({ placement: `bottom` }), b = (0, v.forwardRef)(function(e, t) {
	[e, t] = s(e, t, y);
	let r = e.placement, o = {
		position: `absolute`,
		transform: r === `top` || r === `bottom` ? `translateX(-50%)` : `translateY(-50%)`
	};
	r != null && (o[r] = `100%`);
	let c = a({
		...e,
		defaultClassName: `react-aria-OverlayArrow`,
		values: { placement: r }
	});
	c.style && Object.keys(c.style).forEach((e) => c.style[e] === void 0 && delete c.style[e]);
	let l = i(e);
	return v.createElement(n.div, {
		...l,
		...c,
		style: {
			...o,
			...c.style
		},
		ref: t,
		"data-placement": r
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
	let n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = {}, l = (t?.scale ?? 1) > 1;
	if (e.tagName === `BODY` || e.tagName === `HTML`) {
		let l = document.documentElement;
		i = l.clientWidth, a = l.clientHeight, n = t?.width ?? i, r = t?.height ?? a, c.top = l.scrollTop || e.scrollTop, c.left = l.scrollLeft || e.scrollLeft, t && (o = Math.max(0, t.pageTop - (c.top ?? 0)), s = Math.max(0, t.pageLeft - (c.left ?? 0)));
	} else ({width: n, height: r, top: o, left: s} = z(e, !1)), c.top = e.scrollTop, c.left = e.scrollLeft, i = n, a = r;
	return m() && (e.tagName === `BODY` || e.tagName === `HTML`) && l && (c.top = 0, c.left = 0, o = t?.pageTop ?? 0, s = t?.pageLeft ?? 0), {
		width: n,
		height: r,
		totalWidth: i,
		totalHeight: a,
		scroll: c,
		top: o,
		left: s
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
function N(e, t, n, r, i, a, o, s, c, l, u) {
	let { placement: f, crossPlacement: p, axis: m, crossAxis: h, size: g, crossSize: _ } = r, v = {};
	v[h] = e[h] ?? 0, p === `center` ? v[h] += ((e[_] ?? 0) - (n[_] ?? 0)) / 2 : p !== h && (v[h] += (e[_] ?? 0) - (n[_] ?? 0)), v[h] += a;
	let y = e[h] - n[_] + c + l, b = e[h] + e[_] - c - l;
	if (v[h] = d(v[h], y, b), f === m) {
		let t = s ? u[g] : u[T[g]];
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
function I(e, t, n, r, i, a, o, s, c, l, u, f, p, m, h, g, _, v) {
	let y = M(e), { size: b, crossAxis: C, crossSize: w, placement: T, crossPlacement: E } = y, D = N(t, s, n, y, u, f, l, p, h, g, c), O = u, k = F(s, l, t, i, a + u, y, c, _);
	if (o && n[b] > k) {
		let e = M(`${S[T]} ${E}`), r = N(t, s, n, e, u, f, l, p, h, g, c);
		F(s, l, t, i, a + u, e, c, _) > k && (y = e, D = r, O = u);
	}
	let j = `bottom`;
	y.axis === `top` ? y.placement === `top` ? j = `top` : y.placement === `bottom` && (j = `bottom`) : y.crossAxis === `top` && (y.crossPlacement === `top` ? j = `bottom` : y.crossPlacement === `bottom` && (j = `top`));
	let I = A(C, D[C], n[w], s, c, a, l);
	D[C] += I;
	let L = P(D, s, l, p, i, a, n.height, j, c, _, v);
	m && m < L && (L = m), n.height = Math.min(n.height, L), D = N(t, s, n, y, O, f, l, p, h, g, c), I = A(C, D[C], n[w], s, c, a, l), D[C] += I;
	let R = {}, z = t[C] - D[C] - i[x[C]], B = z + .5 * t[w], V = h / 2 + g, H = x[C] === `left` ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), U = n[w] - H - h / 2 - g, W = t[C] + h / 2 - (D[C] + i[x[C]]), G = t[C] + t[w] - h / 2 - (D[C] + i[x[C]]), K = d(B, W, G);
	R[C] = d(K, V, U), {placement: T, crossPlacement: E} = y, h ? z = R[C] : E === `right` ? z += t[w] : E === `center` && (z += t[w] / 2);
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
	let { placement: t, targetNode: n, overlayNode: r, scrollNode: i, padding: a, shouldFlip: o, boundaryElement: s, offset: c, crossOffset: l, maxHeight: u, arrowSize: d = 0, arrowBoundaryOffset: f = 0, targetRect: m } = e, h = D(), g = r instanceof HTMLElement ? V(r) : document.documentElement, _ = g === document.documentElement, v = window.getComputedStyle(g).position, y = !!v && v !== `static`, b = _ ? z(n, !1, m) : B(n, g, !1, m);
	if (!_) {
		let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
		b.top += parseInt(e, 10) || 0, b.left += parseInt(t, 10) || 0;
	}
	let x = z(r, !0), S = j(r);
	x.width += (S.left ?? 0) + (S.right ?? 0), x.height += (S.top ?? 0) + (S.bottom ?? 0);
	let C = k(i), w = O(s, h), T = O(g, h), E;
	if ((s.tagName === `BODY` || s.tagName === `HTML`) && !_) {
		let e = R(g, !1);
		E = {
			top: -(e.top - w.top),
			left: -(e.left - w.left),
			width: 0,
			height: 0
		};
	} else E = (s.tagName === `BODY` || s.tagName === `HTML`) && _ ? {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	} : B(s, g, !1);
	let A = p(s, g);
	return I(t, b, x, C, S, a, o, w, T, E, c, l, y, u, d, f, A, h);
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
	let { triggerRef: t, isOpen: n, onClose: i } = e;
	(0, v.useEffect)(() => !n || i === null ? void 0 : r(l(t.current), `scroll`, (e) => {
		let n = c(e);
		if (!t.current || n instanceof Node && !p(n, t.current) || n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) return;
		let r = i || U.get(t.current);
		r && r();
	}, !0), [
		n,
		i,
		t
	]);
}
function G() {
	return window.ResizeObserver !== void 0;
}
function K(e) {
	let { ref: t, box: n, onResize: r } = e, i = h(r);
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
	let { direction: t } = o(), { arrowSize: n, targetRef: i, overlayRef: a, arrowRef: s, scrollRef: c = a, placement: d = `bottom`, containerPadding: p = 12, shouldFlip: m = !0, boundaryElement: h = typeof document < `u` ? document.body : null, offset: _ = 0, crossOffset: y = 0, shouldUpdatePosition: b = !0, isOpen: x = !0, onClose: S, maxHeight: C, arrowBoundaryOffset: w = 0, getTargetRect: T } = e, [E, D] = (0, v.useState)(null), O = [
		b,
		d,
		a.current,
		i.current,
		s?.current,
		c.current,
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
		if (b === !1 || !x || !a.current || !i.current || !h || q?.scale !== k.current) return;
		let e = null;
		if (c.current && f(c.current)) {
			let t = u()?.getBoundingClientRect(), n = c.current.getBoundingClientRect();
			e = {
				type: `top`,
				offset: (t?.top ?? 0) - n.top
			}, e.offset > n.height / 2 && (e.type = `bottom`, e.offset = (t?.bottom ?? 0) - n.bottom);
		}
		let r = a.current;
		!C && a.current && (r.style.top = `0px`, r.style.bottom = ``, r.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + `px`);
		let o = L({
			placement: X(d, t),
			overlayNode: a.current,
			targetNode: i.current,
			scrollNode: c.current || a.current,
			padding: p,
			shouldFlip: m,
			boundaryElement: h,
			offset: _,
			crossOffset: y,
			maxHeight: C,
			arrowSize: n ?? (s?.current ? R(s.current, !0).width : 0),
			arrowBoundaryOffset: w,
			targetRect: T?.(i.current)
		});
		if (!o.position) return;
		r.style.top = ``, r.style.bottom = ``, r.style.left = ``, r.style.right = ``, Object.keys(o.position).forEach((e) => r.style[e] = o.position[e] + `px`), r.style.maxHeight = o.maxHeight == null ? `` : o.maxHeight + `px`;
		let l = u();
		if (e && l && c.current) {
			let t = l.getBoundingClientRect(), n = c.current.getBoundingClientRect(), r = t[e.type] - n[e.type];
			c.current.scrollTop += r - e.offset;
		}
		D(o);
	}, O);
	g(A, O), Y(A), K({
		ref: a,
		onResize: A
	}), K({
		ref: i,
		onResize: A
	});
	let j = (0, v.useRef)(!1);
	g(() => {
		let e, t = () => {
			j.current = !0, clearTimeout(e), e = setTimeout(() => {
				j.current = !1;
			}, 500), A();
		}, n = () => {
			j.current && t();
		};
		q?.addEventListener(`resize`, t), q?.addEventListener(`scroll`, n);
		let i = r(l(window), `scroll`, n);
		return () => {
			q?.removeEventListener(`resize`, t), q?.removeEventListener(`scroll`, n), i();
		};
	}, [A]);
	let M = (0, v.useCallback)(() => {
		j.current || S?.();
	}, [S, j]);
	return W({
		triggerRef: i,
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
	g(() => (window.addEventListener(`resize`, e, !1), () => {
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
