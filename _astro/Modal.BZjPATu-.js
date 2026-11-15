import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Qt as t, Rt as n, Ut as r, an as i, bn as a, dn as o, gn as s, hn as c, mn as l, on as u, sn as d, st as f, yn as p } from "./doc.DoLlUurT.js";
import { _ as m, f as h, g, h as _, i as v, m as y, p as b, r as x } from "./Dialog.C8eIUYfG.js";
import { n as S, t as C } from "./ariaHideOutside.ChNqc38c.js";
import { n as w } from "./react-dom.B9zIfLd2.js";
import { g as T } from "./useCollection.CKHU4kii.js";
import { t as E } from "./useOverlayTriggerState.DCpCXuwM.js";
import { n as D, t as O } from "./animation.CUSrSj7t.js";
import { s as k } from "./Autocomplete.DmAsmXZB.js";
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
	let e = p(), i = (0, A.useRef)(null), [a, o] = (0, A.useState)(() => e ? {
		width: 0,
		height: 0
	} : P());
	return (0, A.useEffect)(() => {
		let e = (e) => {
			o((t) => e.width === t.width && e.height === t.height ? t : e);
		}, a = () => {
			M && M.scale > 1 || e(P());
		}, s = (n) => {
			M && M.scale > 1 || k(t(n)) && (i.current = g((t) => {
				t || e({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				});
			}));
		};
		return e(P()), r() && n() && window.addEventListener(`blur`, s, !0), M ? M.addEventListener(`resize`, a) : window.addEventListener(`resize`, a), () => {
			i.current?.(), r() && n() && window.removeEventListener(`blur`, s, !0), M ? M.removeEventListener(`resize`, a) : window.removeEventListener(`resize`, a);
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
	[e, t] = u(e, t, F);
	let n = (0, A.useContext)(v), r = E(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = l(t), o = (0, A.useRef)(null), s = O(a, i.isOpen, e.onExit), c = (0, A.useRef)(null), d = O(o, i.isOpen, (e) => c.current?.(e)), f = s || d || e.isExiting || !1, m = p();
	return !i.isOpen && !f || m ? null : A.createElement(B, {
		...e,
		state: i,
		isExiting: f,
		overlayRef: a,
		modalRef: o,
		onExitRef: c
	});
}
var z = (0, A.forwardRef)(R);
function B({ UNSTABLE_portalContainer: e, UNSTABLE_deferUntilEntered: t, ...n }) {
	let r = n.modalRef, { state: s } = n, [l, u] = (0, A.useState)(!1), p = D(n.overlayRef, l, n.onEnter) || n.isEntering || !1, m = !!t && (!l || p), { modalProps: h, underlayProps: _ } = j({
		...n,
		isEntering: m
	}, s, r), y = (0, A.useContext)(x), S = t ? V(y, { isEntering: m }) : y, C = d({
		...n,
		defaultClassName: `react-aria-ModalOverlay`,
		values: {
			isEntering: p,
			isExiting: n.isExiting,
			state: s
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
	return a(() => g(() => u(!0)), []), A.createElement(b, {
		isExiting: n.isExiting,
		portalContainer: e
	}, A.createElement(o.div, {
		...c(f(n, { global: !0 }), _),
		...C,
		style: k,
		ref: n.overlayRef,
		"data-entering": p || void 0,
		"data-exiting": n.isExiting || void 0
	}, A.createElement(i, { values: [
		[I, {
			modalProps: h,
			modalRef: r,
			isExiting: n.isExiting,
			onExitRef: n.onExitRef,
			isOpen: l,
			isDismissable: n.isDismissable
		}],
		[v, s],
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
	let { modalProps: t, modalRef: n, isExiting: r, onExitRef: i, isDismissable: u, isOpen: p } = (0, A.useContext)(I), m = (0, A.useContext)(v), h = (0, A.useMemo)(() => s(e.modalRef, n), [e.modalRef, n]), g = l(h), _ = D(g, p, e.onEnter), b = d({
		...e,
		defaultClassName: `react-aria-Modal`,
		values: {
			isEntering: _,
			isExiting: r,
			state: m
		}
	});
	return a(() => {
		i && (i.current = e.onExit);
	}), A.createElement(o.div, {
		...c(f(e, { global: !0 }), t),
		...b,
		ref: g,
		"data-entering": _ || void 0,
		"data-exiting": r || void 0
	}, u && A.createElement(y, { onDismiss: m.close }), b.children);
}
export { z as n, L as t };
