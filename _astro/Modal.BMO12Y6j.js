import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $t as t, Wt as n, _n as r, bn as i, cn as a, ct as o, fn as s, gn as c, hn as l, on as u, sn as d, xn as f, zt as p } from "./doc.C_PtMNUB.js";
import { _ as m, f as h, g, h as _, i as v, m as y, p as b, r as x } from "./Dialog.1Jdfd_U0.js";
import { n as S, t as C } from "./ariaHideOutside.DgEDEHgw.js";
import { n as w } from "./react-dom.B9zIfLd2.js";
import { g as T } from "./useCollection.Cn_I2nJQ.js";
import { t as E } from "./useOverlayTriggerState.ecOZOIeH.js";
import { n as D, t as O } from "./animation.DuWuxfeU.js";
import { s as k } from "./Autocomplete.BYGvWyUq.js";
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
		modalProps: c(r),
		underlayProps: i
	};
}
var M = typeof document < `u` && window.visualViewport;
function N() {
	let e = i(), r = (0, A.useRef)(null), [a, o] = (0, A.useState)(() => e ? {
		width: 0,
		height: 0
	} : P());
	return (0, A.useEffect)(() => {
		let e = (e) => {
			o((t) => e.width === t.width && e.height === t.height ? t : e);
		}, i = () => {
			M && M.scale > 1 || e(P());
		}, a = (n) => {
			M && M.scale > 1 || k(t(n)) && (r.current = g((t) => {
				t || e({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				});
			}));
		};
		return e(P()), n() && p() && window.addEventListener(`blur`, a, !0), M ? M.addEventListener(`resize`, i) : window.addEventListener(`resize`, i), () => {
			r.current?.(), n() && p() && window.removeEventListener(`blur`, a, !0), M ? M.removeEventListener(`resize`, i) : window.removeEventListener(`resize`, i);
		};
	}, []), a;
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
	[e, t] = d(e, t, F);
	let n = (0, A.useContext)(v), r = E(e), a = e.isOpen != null || e.defaultOpen != null || !n ? r : n, o = l(t), s = (0, A.useRef)(null), c = O(o, a.isOpen, e.onExit), u = (0, A.useRef)(null), f = O(s, a.isOpen, (e) => u.current?.(e)), p = c || f || e.isExiting || !1, m = i();
	return !a.isOpen && !p || m ? null : A.createElement(B, {
		...e,
		state: a,
		isExiting: p,
		overlayRef: o,
		modalRef: s,
		onExitRef: u
	});
}
var z = (0, A.forwardRef)(R);
function B({ UNSTABLE_portalContainer: e, UNSTABLE_deferUntilEntered: t, ...n }) {
	let r = n.modalRef, { state: i } = n, [l, d] = (0, A.useState)(!1), p = D(n.overlayRef, l, n.onEnter) || n.isEntering || !1, m = !!t && (!l || p), { modalProps: h, underlayProps: _ } = j({
		...n,
		isEntering: m
	}, i, r), y = (0, A.useContext)(x), S = t ? V(y, { isEntering: m }) : y, C = a({
		...n,
		defaultClassName: `react-aria-ModalOverlay`,
		values: {
			isEntering: p,
			isExiting: n.isExiting,
			state: i
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
	return f(() => g(() => d(!0)), []), A.createElement(b, {
		isExiting: n.isExiting,
		portalContainer: e
	}, A.createElement(s.div, {
		...c(o(n, { global: !0 }), _),
		...C,
		style: k,
		ref: n.overlayRef,
		"data-entering": p || void 0,
		"data-exiting": n.isExiting || void 0
	}, A.createElement(u, { values: [
		[I, {
			modalProps: h,
			modalRef: r,
			isExiting: n.isExiting,
			onExitRef: n.onExitRef,
			isOpen: l,
			isDismissable: n.isDismissable
		}],
		[v, i],
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
	let { modalProps: t, modalRef: n, isExiting: i, onExitRef: u, isDismissable: d, isOpen: p } = (0, A.useContext)(I), m = (0, A.useContext)(v), h = (0, A.useMemo)(() => r(e.modalRef, n), [e.modalRef, n]), g = l(h), _ = D(g, p, e.onEnter), b = a({
		...e,
		defaultClassName: `react-aria-Modal`,
		values: {
			isEntering: _,
			isExiting: i,
			state: m
		}
	});
	return f(() => {
		u && (u.current = e.onExit);
	}), A.createElement(s.div, {
		...c(o(e, { global: !0 }), t),
		...b,
		ref: g,
		"data-entering": _ || void 0,
		"data-exiting": i || void 0
	}, d && A.createElement(y, { onDismiss: m.close }), b.children);
}
export { z as n, L as t };
