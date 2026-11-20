import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Bt as t, H as n, Ht as r, Kt as i, Nt as a, Vt as o, Xt as s, Yt as c, Zt as l, en as u, tn as d, wt as f, yt as p } from "./useOverflow.Dq483xd0.js";
import { _ as m, f as h, g, h as _, i as v, m as y, p as b, r as x } from "./Dialog.RIvfrakQ.js";
import { n as S, t as C } from "./ariaHideOutside.xN9ixrHd.js";
import { n as w } from "./react-dom.B9zIfLd2.js";
import { g as T } from "./useCollection.DQc_Iacd.js";
import { t as E } from "./useOverlayTriggerState.DoeSTtz6.js";
import { n as D, t as O } from "./animation.g7Aw7eVY.js";
import { s as k } from "./Autocomplete.CGc8yklO.js";
var A = e(w(), 1);
function j(e, t, n) {
	let { overlayProps: r, underlayProps: i } = m({
		...e,
		isOpen: t.isOpen,
		onClose: t.close
	}, n);
	_({
		isDisabled: !t.isOpen,
		UNSTABLE_overrideFocus: e.UNSTABLE_overrideFocus
	}), h();
	let { isEntering: a } = e;
	return (0, A.useEffect)(() => {
		if (t.isOpen && n.current) return a ? C(n.current) : S([n.current], { shouldUseInert: !0 });
	}, [
		t.isOpen,
		a,
		n
	]), {
		modalProps: s(r),
		underlayProps: i
	};
}
var M = typeof document < `u` && window.visualViewport;
function N() {
	let e = u(), t = (0, A.useRef)(null), [n, r] = (0, A.useState)(() => e ? {
		width: 0,
		height: 0
	} : P());
	return (0, A.useEffect)(() => {
		let e = (e) => {
			r((t) => e.width === t.width && e.height === t.height ? t : e);
		}, n = () => {
			M && M.scale > 1 || e(P());
		}, i = (n) => {
			M && M.scale > 1 || k(a(n)) && (t.current = g((t) => {
				t || e({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				});
			}));
		};
		return e(P()), f() && p() && window.addEventListener(`blur`, i, !0), M ? M.addEventListener(`resize`, n) : window.addEventListener(`resize`, n), () => {
			t.current?.(), f() && p() && window.removeEventListener(`blur`, i, !0), M ? M.removeEventListener(`resize`, n) : window.removeEventListener(`resize`, n);
		};
	}, []), n;
}
function P() {
	return {
		width: M ? Math.min(M.width * M.scale, document.documentElement.clientWidth) : document.documentElement.clientWidth,
		height: M ? M.height * M.scale : document.documentElement.clientHeight
	};
}
var F = (0, A.createContext)(null), I = (0, A.createContext)(null), L = (0, A.forwardRef)(function(e, t) {
	if ((0, A.useContext)(I)) return A.createElement(H, {
		...e,
		modalRef: t
	}, e.children);
	let { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: a, onOpenChange: o, children: s, isEntering: c, isExiting: l, UNSTABLE_portalContainer: u, shouldCloseOnInteractOutside: d, ...f } = e;
	return A.createElement(z, {
		isDismissable: n,
		isKeyboardDismissDisabled: r,
		isOpen: i,
		defaultOpen: a,
		onOpenChange: o,
		isEntering: c,
		isExiting: l,
		UNSTABLE_portalContainer: u,
		shouldCloseOnInteractOutside: d
	}, A.createElement(H, {
		...f,
		modalRef: t
	}, s));
});
function R(e, t) {
	[e, t] = o(e, t, F);
	let n = (0, A.useContext)(v), r = E(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = c(t), s = (0, A.useRef)(null), l = O(a, i.isOpen, e.onExit), d = (0, A.useRef)(null), f = O(s, i.isOpen, (e) => d.current?.(e)), p = l || f || e.isExiting || !1, m = u();
	return !i.isOpen && !p || m ? null : A.createElement(B, {
		...e,
		state: i,
		isExiting: p,
		overlayRef: a,
		modalRef: s,
		onExitRef: d
	});
}
var z = (0, A.forwardRef)(R);
function B({ UNSTABLE_portalContainer: e, UNSTABLE_deferUntilEntered: a, ...o }) {
	let c = o.modalRef, { state: l } = o, [u, f] = (0, A.useState)(!1), p = D(o.overlayRef, u, o.onEnter) || o.isEntering || !1, m = !!a && (!u || p), { modalProps: h, underlayProps: _ } = j({
		...o,
		isEntering: m
	}, l, c), y = (0, A.useContext)(x), S = a ? V(y, { isEntering: m }) : y, C = r({
		...o,
		defaultClassName: `react-aria-ModalOverlay`,
		values: {
			isEntering: p,
			isExiting: o.isExiting,
			state: l
		}
	}), w = N(), E, O;
	if (typeof document < `u`) {
		let e = T(document.body) ? document.body : document.scrollingElement || document.documentElement, t = e.getBoundingClientRect().width % 1, n = e.getBoundingClientRect().height % 1;
		E = e.scrollWidth - t, O = e.scrollHeight - n;
	}
	let k = {
		...C.style,
		"--visual-viewport-width": w.width + `px`,
		"--visual-viewport-height": w.height + `px`,
		"--page-width": E === void 0 ? void 0 : E + `px`,
		"--page-height": O === void 0 ? void 0 : O + `px`
	};
	return d(() => g(() => f(!0)), []), A.createElement(b, {
		isExiting: o.isExiting,
		portalContainer: e
	}, A.createElement(i.div, {
		...s(n(o, { global: !0 }), _),
		...C,
		style: k,
		ref: o.overlayRef,
		"data-entering": p || void 0,
		"data-exiting": o.isExiting || void 0
	}, A.createElement(t, { values: [
		[I, {
			modalProps: h,
			modalRef: c,
			isExiting: o.isExiting,
			onExitRef: o.onExitRef,
			isOpen: u,
			isDismissable: o.isDismissable
		}],
		[v, l],
		[x, S]
	] }, C.children)));
}
function V(e, t) {
	if (e && `slots` in e && e.slots) {
		let n = {};
		for (let r in e.slots) n[r] = {
			...e.slots[r],
			...t
		};
		return {
			...e,
			slots: n
		};
	}
	return {
		...e,
		...t
	};
}
function H(e) {
	let { modalProps: t, modalRef: a, isExiting: o, onExitRef: u, isDismissable: f, isOpen: p } = (0, A.useContext)(I), m = (0, A.useContext)(v), h = (0, A.useMemo)(() => l(e.modalRef, a), [e.modalRef, a]), g = c(h), _ = D(g, p, e.onEnter), b = r({
		...e,
		defaultClassName: `react-aria-Modal`,
		values: {
			isEntering: _,
			isExiting: o,
			state: m
		}
	});
	return d(() => {
		u && (u.current = e.onExit);
	}), A.createElement(i.div, {
		...s(n(e, { global: !0 }), t),
		...b,
		ref: g,
		"data-entering": _ || void 0,
		"data-exiting": o || void 0
	}, f && A.createElement(y, { onDismiss: m.close }), b.children);
}
export { z as n, L as t };
