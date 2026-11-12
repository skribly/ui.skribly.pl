import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { A as t, At as n, E as r, Et as i, G as a, Lt as o, Pt as s, Rt as c, Tt as l, V as u, _ as d, j as f, wt as p } from "./createLucideIcon.npgQlVHx.js";
import { a as m, n as h, t as g } from "./useOverlayTriggerState.OsbwJUOw.js";
import { n as _ } from "./PortalProvider.C0xkHnu_.js";
import { n as v, t as y } from "./react-dom.B9zIfLd2.js";
import { n as b, t as x } from "./animation.BhtQe7Yj.js";
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
	let t = c(), { portalContainer: n = t ? null : document.body, ...r } = e, { getContainer: i } = _();
	if (!e.portalContainer && i && (n = i()), S.useEffect(() => {
		if (n?.closest(`[data-overlay-container]`)) throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`);
	}, [n]), !n) return null;
	let a = S.createElement(I, r);
	return j.createPortal(a, n);
}
function R(e, t) {
	let n = r(e, { labelable: !0 }), { hoverProps: i } = d({
		onHoverStart: () => t?.open(!0),
		onHoverEnd: () => t?.close()
	});
	return { tooltipProps: s(n, i, { role: `tooltip` }) };
}
function z(e, t, n) {
	let { isDisabled: r, trigger: i, shouldCloseOnPress: c = !0 } = e, l = o(), p = (0, S.useRef)(!1), m = (0, S.useRef)(!1), h = () => {
		(p.current || m.current) && t.open(m.current);
	}, g = (e) => {
		!p.current && !m.current && t.close(e);
	};
	(0, S.useEffect)(() => {
		let e = (e) => {
			n && n.current && e.key === `Escape` && (e.stopPropagation(), t.close(!0));
		};
		if (t.isOpen) return document.addEventListener(`keydown`, e, !0), () => {
			document.removeEventListener(`keydown`, e, !0);
		};
	}, [n, t]);
	let _ = () => {
		i !== `focus` && (u() === `pointer` ? p.current = !0 : p.current = !1, h());
	}, v = () => {
		i !== `focus` && (m.current = !1, p.current = !1, g());
	}, y = () => {
		c && (m.current = !1, p.current = !1, g(!0));
	}, b = () => {
		a() && (m.current = !0, h());
	}, x = () => {
		m.current = !1, p.current = !1, g(!0);
	}, { hoverProps: C } = d({
		isDisabled: r,
		onHoverStart: _,
		onHoverEnd: v
	}), { focusableProps: w } = f({
		isDisabled: r,
		onFocus: b,
		onBlur: x
	}, n);
	return {
		triggerProps: {
			"aria-describedby": t.isOpen ? l : void 0,
			...s(w, C, {
				onPointerDown: y,
				onKeyDown: y
			}),
			tabIndex: void 0
		},
		tooltipProps: { id: l }
	};
}
var B = (0, S.createContext)(null), V = (0, S.createContext)(null);
function H(e) {
	let n = A(e), r = (0, S.useRef)(null), { triggerProps: i, tooltipProps: a } = z(e, n, r);
	return S.createElement(p, { values: [[B, n], [V, {
		...a,
		triggerRef: r
	}]] }, S.createElement(t, {
		...i,
		ref: r
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
	let t = (0, S.useContext)(B), a = (0, S.useRef)(null), { overlayProps: o, arrowProps: c, placement: l, triggerAnchorPoint: u } = h({
		placement: e.placement || `top`,
		targetRef: e.triggerRef,
		overlayRef: e.tooltipRef,
		arrowRef: a,
		offset: e.offset,
		crossOffset: e.crossOffset,
		isOpen: t.isOpen,
		arrowBoundaryOffset: e.arrowBoundaryOffset,
		shouldFlip: e.shouldFlip,
		containerPadding: e.containerPadding,
		onClose: () => t.close(!0)
	}), d = b(e.tooltipRef, !!l), f = e.isEntering || !t.shouldSkipAnimation && d || !1, p = i({
		...e,
		defaultClassName: `react-aria-Tooltip`,
		values: {
			placement: l,
			isEntering: f,
			isExiting: e.isExiting,
			state: t
		}
	});
	e = s(e, o);
	let { tooltipProps: g } = R(e, t), _ = r(e, { global: !0 });
	return S.createElement(n.div, {
		...s(_, p, g),
		ref: e.tooltipRef,
		style: {
			...o.style,
			"--trigger-anchor-point": u ? `${u.x}px ${u.y}px` : void 0,
			...p.style
		},
		"data-placement": l ?? void 0,
		"data-entering": f || void 0,
		"data-exiting": e.isExiting || void 0
	}, S.createElement(m.Provider, { value: {
		...c,
		placement: l,
		ref: a
	} }, p.children));
}
export { H as n, A as r, U as t };
