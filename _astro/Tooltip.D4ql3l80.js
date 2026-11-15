import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Ct as n, Dt as r, bn as i, cn as a, ct as o, fn as s, ft as c, gn as l, on as u, pt as d, sn as f, yn as p } from "./doc.C_PtMNUB.js";
import { a as m, n as h, t as g } from "./useOverlayTriggerState.ecOZOIeH.js";
import { n as _ } from "./PortalProvider.C0xkHnu_.js";
import { n as v, t as y } from "./react-dom.B9zIfLd2.js";
import { n as b, t as x } from "./animation.DuWuxfeU.js";
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
	let t = i(), { portalContainer: n = t ? null : document.body, ...r } = e, { getContainer: a } = _();
	if (!e.portalContainer && a && (n = a()), S.useEffect(() => {
		if (n?.closest(`[data-overlay-container]`)) throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`);
	}, [n]), !n) return null;
	let o = S.createElement(I, r);
	return j.createPortal(o, n);
}
function R(e, n) {
	let r = o(e, { labelable: !0 }), { hoverProps: i } = t({
		onHoverStart: () => n?.open(!0),
		onHoverEnd: () => n?.close()
	});
	return { tooltipProps: l(r, i, { role: `tooltip` }) };
}
function z(e, i, a) {
	let { isDisabled: o, trigger: s, shouldCloseOnPress: c = !0 } = e, u = p(), f = (0, S.useRef)(!1), m = (0, S.useRef)(!1), h = () => {
		(f.current || m.current) && i.open(m.current);
	}, g = (e) => {
		!f.current && !m.current && i.close(e);
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
		s !== `focus` && (n() === `pointer` ? f.current = !0 : f.current = !1, h());
	}, v = () => {
		s !== `focus` && (m.current = !1, f.current = !1, g());
	}, y = () => {
		c && (m.current = !1, f.current = !1, g(!0));
	}, b = () => {
		r() && (m.current = !0, h());
	}, x = () => {
		m.current = !1, f.current = !1, g(!0);
	}, { hoverProps: C } = t({
		isDisabled: o,
		onHoverStart: _,
		onHoverEnd: v
	}), { focusableProps: w } = d({
		isDisabled: o,
		onFocus: b,
		onBlur: x
	}, a);
	return {
		triggerProps: {
			"aria-describedby": i.isOpen ? u : void 0,
			...l(w, C, {
				onPointerDown: y,
				onKeyDown: y
			}),
			tabIndex: void 0
		},
		tooltipProps: { id: u }
	};
}
var B = (0, S.createContext)(null), V = (0, S.createContext)(null);
function H(e) {
	let t = A(e), n = (0, S.useRef)(null), { triggerProps: r, tooltipProps: i } = z(e, t, n);
	return S.createElement(u, { values: [[B, t], [V, {
		...i,
		triggerRef: n
	}]] }, S.createElement(c, {
		...r,
		ref: n
	}, e.children));
}
var U = (0, S.forwardRef)(function({ UNSTABLE_portalContainer: e, ...t }, n) {
	[t, n] = f(t, n, V);
	let r = (0, S.useContext)(B), i = A(t), a = t.isOpen != null || t.defaultOpen != null || !r ? i : r, o = x(n, a.isOpen), s = t.isExiting || !a.shouldSkipAnimation && o || !1;
	return !a.isOpen && !s ? null : S.createElement(L, { portalContainer: e }, S.createElement(W, {
		...t,
		tooltipRef: n,
		isExiting: s
	}));
});
function W(e) {
	let t = (0, S.useContext)(B), n = (0, S.useRef)(null), { overlayProps: r, arrowProps: i, placement: c, triggerAnchorPoint: u } = h({
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
	}), d = b(e.tooltipRef, !!c), f = e.isEntering || !t.shouldSkipAnimation && d || !1, p = a({
		...e,
		defaultClassName: `react-aria-Tooltip`,
		values: {
			placement: c,
			isEntering: f,
			isExiting: e.isExiting,
			state: t
		}
	});
	e = l(e, r);
	let { tooltipProps: g } = R(e, t), _ = o(e, { global: !0 });
	return S.createElement(s.div, {
		...l(_, p, g),
		ref: e.tooltipRef,
		style: {
			...r.style,
			"--trigger-anchor-point": u ? `${u.x}px ${u.y}px` : void 0,
			...p.style
		},
		"data-placement": c ?? void 0,
		"data-entering": f || void 0,
		"data-exiting": e.isExiting || void 0
	}, S.createElement(m.Provider, { value: {
		...i,
		placement: c,
		ref: n
	} }, p.children));
}
export { H as n, A as r, U as t };
