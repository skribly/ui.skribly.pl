import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Et as t, Q as n, St as r, an as i, dn as a, dt as o, ft as s, hn as c, on as l, sn as u, st as d, vn as f, yn as p } from "./doc.DoLlUurT.js";
import { a as m, n as h, t as g } from "./useOverlayTriggerState.DCpCXuwM.js";
import { n as _ } from "./PortalProvider.C0xkHnu_.js";
import { n as v, t as y } from "./react-dom.B9zIfLd2.js";
import { n as b, t as x } from "./animation.CUSrSj7t.js";
var S = e(v(), 1), C = 1500, w = 500, T = {}, E = 0, D = !1, O = null, k = null;
function A(e = {}) {
	let { delay: t = C, closeDelay: n = w } = e, { isOpen: r, open: i, close: a } = g(e), [o, s] = (0, S.useState)(!1), c = (0, S.useMemo)(() => `${++E}`, []), l = (0, S.useRef)(null), u = (0, S.useRef)(a), d = () => {
		T[c] = m;
	}, f = () => {
		for (let e in T) e !== c && (T[e](!0, !0), delete T[e]);
	}, p = (e) => {
		l.current && clearTimeout(l.current), l.current = null, f(), d(), s(!!e), D = !0, i(), O &&= (clearTimeout(O), null), k &&= (clearTimeout(k), null);
	}, m = (e, t) => {
		s(!!t), e || n <= 0 ? (l.current && clearTimeout(l.current), l.current = null, u.current()) : l.current ||= setTimeout(() => {
			l.current = null, u.current();
		}, n), O &&= (clearTimeout(O), null), D && (k && clearTimeout(k), k = setTimeout(() => {
			delete T[c], k = null, D = !1;
		}, Math.max(w, n)));
	}, h = () => {
		f(), d(), !r && !D ? (O && clearTimeout(O), O = setTimeout(() => {
			O = null, D = !0, p(!1);
		}, t)) : r || p(!0);
	};
	return (0, S.useEffect)(() => {
		u.current = a;
	}, [a]), (0, S.useEffect)(() => () => {
		l.current && clearTimeout(l.current), T[c] && delete T[c];
	}, [c]), {
		isOpen: r,
		shouldSkipAnimation: o,
		open: (e) => {
			!e && t > 0 && !l.current ? h() : p(D);
		},
		close: m
	};
}
var j = e(y(), 1), M = S.createContext(null);
function N(e) {
	let { children: t } = e, n = (0, S.useContext)(M), [r, i] = (0, S.useState)(0), a = (0, S.useMemo)(() => ({
		parent: n,
		modalCount: r,
		addModal() {
			i((e) => e + 1), n && n.addModal();
		},
		removeModal() {
			i((e) => e - 1), n && n.removeModal();
		}
	}), [n, r]);
	return S.createElement(M.Provider, { value: a }, t);
}
function P() {
	let e = (0, S.useContext)(M);
	return { modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : void 0 } };
}
function F(e) {
	let { modalProviderProps: t } = P();
	return S.createElement(`div`, {
		"data-overlay-container": !0,
		...e,
		...t
	});
}
function I(e) {
	return S.createElement(N, null, S.createElement(F, e));
}
function L(e) {
	let t = p(), { portalContainer: n = t ? null : document.body, ...r } = e, { getContainer: i } = _();
	if (!e.portalContainer && i && (n = i()), S.useEffect(() => {
		if (n?.closest(`[data-overlay-container]`)) throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`);
	}, [n]), !n) return null;
	let a = S.createElement(I, r);
	return j.createPortal(a, n);
}
function R(e, t) {
	let r = d(e, { labelable: !0 }), { hoverProps: i } = n({
		onHoverStart: () => t?.open(!0),
		onHoverEnd: () => t?.close()
	});
	return { tooltipProps: c(r, i, { role: `tooltip` }) };
}
function z(e, i, a) {
	let { isDisabled: o, trigger: l, shouldCloseOnPress: u = !0 } = e, d = f(), p = (0, S.useRef)(!1), m = (0, S.useRef)(!1), h = () => {
		(p.current || m.current) && i.open(m.current);
	}, g = (e) => {
		!p.current && !m.current && i.close(e);
	};
	(0, S.useEffect)(() => {
		let e = (e) => {
			a && a.current && e.key === `Escape` && (e.stopPropagation(), i.close(!0));
		};
		if (i.isOpen) return document.addEventListener(`keydown`, e, !0), () => {
			document.removeEventListener(`keydown`, e, !0);
		};
	}, [a, i]);
	let _ = () => {
		l !== `focus` && (r() === `pointer` ? p.current = !0 : p.current = !1, h());
	}, v = () => {
		l !== `focus` && (m.current = !1, p.current = !1, g());
	}, y = () => {
		u && (m.current = !1, p.current = !1, g(!0));
	}, b = () => {
		t() && (m.current = !0, h());
	}, x = () => {
		m.current = !1, p.current = !1, g(!0);
	}, { hoverProps: C } = n({
		isDisabled: o,
		onHoverStart: _,
		onHoverEnd: v
	}), { focusableProps: w } = s({
		isDisabled: o,
		onFocus: b,
		onBlur: x
	}, a);
	return {
		triggerProps: {
			"aria-describedby": i.isOpen ? d : void 0,
			...c(w, C, {
				onPointerDown: y,
				onKeyDown: y
			}),
			tabIndex: void 0
		},
		tooltipProps: { id: d }
	};
}
var B = (0, S.createContext)(null), V = (0, S.createContext)(null);
function H(e) {
	let t = A(e), n = (0, S.useRef)(null), { triggerProps: r, tooltipProps: a } = z(e, t, n);
	return S.createElement(i, { values: [[B, t], [V, {
		...a,
		triggerRef: n
	}]] }, S.createElement(o, {
		...r,
		ref: n
	}, e.children));
}
var U = (0, S.forwardRef)(function({ UNSTABLE_portalContainer: e, ...t }, n) {
	[t, n] = l(t, n, V);
	let r = (0, S.useContext)(B), i = A(t), a = t.isOpen != null || t.defaultOpen != null || !r ? i : r, o = x(n, a.isOpen), s = t.isExiting || !a.shouldSkipAnimation && o || !1;
	return !a.isOpen && !s ? null : S.createElement(L, { portalContainer: e }, S.createElement(W, {
		...t,
		tooltipRef: n,
		isExiting: s
	}));
});
function W(e) {
	let t = (0, S.useContext)(B), n = (0, S.useRef)(null), { overlayProps: r, arrowProps: i, placement: o, triggerAnchorPoint: s } = h({
		placement: e.placement || `top`,
		targetRef: e.triggerRef,
		overlayRef: e.tooltipRef,
		arrowRef: n,
		offset: e.offset,
		crossOffset: e.crossOffset,
		isOpen: t.isOpen,
		arrowBoundaryOffset: e.arrowBoundaryOffset,
		shouldFlip: e.shouldFlip,
		containerPadding: e.containerPadding,
		onClose: () => t.close(!0)
	}), l = b(e.tooltipRef, !!o), f = e.isEntering || !t.shouldSkipAnimation && l || !1, p = u({
		...e,
		defaultClassName: `react-aria-Tooltip`,
		values: {
			placement: o,
			isEntering: f,
			isExiting: e.isExiting,
			state: t
		}
	});
	e = c(e, r);
	let { tooltipProps: g } = R(e, t), _ = d(e, { global: !0 });
	return S.createElement(a.div, {
		...c(_, p, g),
		ref: e.tooltipRef,
		style: {
			...r.style,
			"--trigger-anchor-point": s ? `${s.x}px ${s.y}px` : void 0,
			...p.style
		},
		"data-placement": o ?? void 0,
		"data-entering": f || void 0,
		"data-exiting": e.isExiting || void 0
	}, S.createElement(m.Provider, { value: {
		...i,
		placement: o,
		ref: n
	} }, p.children));
}
export { H as n, A as r, U as t };
