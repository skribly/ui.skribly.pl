import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $t as t, Bt as n, H as r, Ht as i, K as a, Kt as o, N as s, Vt as c, Xt as l, en as u, q as d, rt as f, st as p } from "./useOverflow.Dq483xd0.js";
import { a as m, n as h, t as g } from "./useOverlayTriggerState.DoeSTtz6.js";
import { n as _ } from "./PortalProvider.C0xkHnu_.js";
import { n as v, t as y } from "./react-dom.B9zIfLd2.js";
import { n as b, t as x } from "./animation.g7Aw7eVY.js";
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
	let t = u(), { portalContainer: n = t ? null : document.body, ...r } = e, { getContainer: i } = _();
	if (!e.portalContainer && i && (n = i()), S.useEffect(() => {
		if (n?.closest(`[data-overlay-container]`)) throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`);
	}, [n]), !n) return null;
	let a = S.createElement(I, r);
	return j.createPortal(a, n);
}
function R(e, t) {
	let n = r(e, { labelable: !0 }), { hoverProps: i } = s({
		onHoverStart: () => t?.open(!0),
		onHoverEnd: () => t?.close()
	});
	return { tooltipProps: l(n, i, { role: `tooltip` }) };
}
function z(e, n, r) {
	let { isDisabled: i, trigger: a, shouldCloseOnPress: o = !0 } = e, c = t(), u = (0, S.useRef)(!1), m = (0, S.useRef)(!1), h = () => {
		(u.current || m.current) && n.open(m.current);
	}, g = (e) => {
		!u.current && !m.current && n.close(e);
	};
	(0, S.useEffect)(() => {
		let e = (e) => {
			r && r.current && e.key === `Escape` && (e.stopPropagation(), n.close(!0));
		};
		if (n.isOpen) return document.addEventListener(`keydown`, e, !0), () => {
			document.removeEventListener(`keydown`, e, !0);
		};
	}, [r, n]);
	let _ = () => {
		a !== `focus` && (f() === `pointer` ? u.current = !0 : u.current = !1, h());
	}, v = () => {
		a !== `focus` && (m.current = !1, u.current = !1, g());
	}, y = () => {
		o && (m.current = !1, u.current = !1, g(!0));
	}, b = () => {
		p() && (m.current = !0, h());
	}, x = () => {
		m.current = !1, u.current = !1, g(!0);
	}, { hoverProps: C } = s({
		isDisabled: i,
		onHoverStart: _,
		onHoverEnd: v
	}), { focusableProps: w } = d({
		isDisabled: i,
		onFocus: b,
		onBlur: x
	}, r);
	return {
		triggerProps: {
			"aria-describedby": n.isOpen ? c : void 0,
			...l(w, C, {
				onPointerDown: y,
				onKeyDown: y
			}),
			tabIndex: void 0
		},
		tooltipProps: { id: c }
	};
}
var B = (0, S.createContext)(null), V = (0, S.createContext)(null);
function H(e) {
	let t = A(e), r = (0, S.useRef)(null), { triggerProps: i, tooltipProps: o } = z(e, t, r);
	return S.createElement(n, { values: [[B, t], [V, {
		...o,
		triggerRef: r
	}]] }, S.createElement(a, {
		...i,
		ref: r
	}, e.children));
}
var U = (0, S.forwardRef)(function({ UNSTABLE_portalContainer: e, ...t }, n) {
	[t, n] = c(t, n, V);
	let r = (0, S.useContext)(B), i = A(t), a = t.isOpen != null || t.defaultOpen != null || !r ? i : r, o = x(n, a.isOpen), s = t.isExiting || !a.shouldSkipAnimation && o || !1;
	return !a.isOpen && !s ? null : S.createElement(L, { portalContainer: e }, S.createElement(W, {
		...t,
		tooltipRef: n,
		isExiting: s
	}));
});
function W(e) {
	let t = (0, S.useContext)(B), n = (0, S.useRef)(null), { overlayProps: a, arrowProps: s, placement: c, triggerAnchorPoint: u } = h({
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
	}), d = b(e.tooltipRef, !!c), f = e.isEntering || !t.shouldSkipAnimation && d || !1, p = i({
		...e,
		defaultClassName: `react-aria-Tooltip`,
		values: {
			placement: c,
			isEntering: f,
			isExiting: e.isExiting,
			state: t
		}
	});
	e = l(e, a);
	let { tooltipProps: g } = R(e, t), _ = r(e, { global: !0 });
	return S.createElement(o.div, {
		...l(_, p, g),
		ref: e.tooltipRef,
		style: {
			...a.style,
			"--trigger-anchor-point": u ? `${u.x}px ${u.y}px` : void 0,
			...p.style
		},
		"data-placement": c ?? void 0,
		"data-entering": f || void 0,
		"data-exiting": e.isExiting || void 0
	}, S.createElement(m.Provider, { value: {
		...s,
		placement: c,
		ref: n
	} }, p.children));
}
export { H as n, A as r, U as t };
