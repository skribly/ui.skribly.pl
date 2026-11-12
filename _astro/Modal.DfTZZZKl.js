import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, E as n, Et as r, Ft as i, Nt as a, Pt as o, Rt as s, Tt as c, _t as l, ct as u, rt as d, wt as f, zt as p } from "./createLucideIcon.npgQlVHx.js";
import { _ as m, f as h, g, h as _, i as v, m as y, p as b, r as x } from "./Dialog.BHaijp-q.js";
import { n as S, t as C } from "./ariaHideOutside.Ci13GWDQ.js";
import { n as w } from "./react-dom.B9zIfLd2.js";
import { n as T, t as E, v as D } from "./animation.BhtQe7Yj.js";
import { t as O } from "./useOverlayTriggerState.OsbwJUOw.js";
import { s as k } from "./Autocomplete.BUqxPt-N.js";
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
		modalProps: o(r),
		underlayProps: i
	};
}
var M = typeof document < `u` && window.visualViewport;
function N() {
	let e = s(), t = (0, A.useRef)(null), [n, r] = (0, A.useState)(() => e ? {
		width: 0,
		height: 0
	} : P());
	return (0, A.useEffect)(() => {
		let e = (e) => {
			r((t) => e.width === t.width && e.height === t.height ? t : e);
		}, n = () => {
			M && M.scale > 1 || e(P());
		}, i = (n) => {
			M && M.scale > 1 || k(l(n)) && (t.current = g((t) => {
				t || e({
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				});
			}));
		};
		return e(P()), u() && d() && window.addEventListener(`blur`, i, !0), M ? M.addEventListener(`resize`, n) : window.addEventListener(`resize`, n), () => {
			t.current?.(), u() && d() && window.removeEventListener(`blur`, i, !0), M ? M.removeEventListener(`resize`, n) : window.removeEventListener(`resize`, n);
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
	[e, t] = c(e, t, F);
	let n = (0, A.useContext)(v), r = O(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, o = a(t), l = (0, A.useRef)(null), u = E(o, i.isOpen, e.onExit), d = (0, A.useRef)(null), f = E(l, i.isOpen, (e) => d.current?.(e)), p = u || f || e.isExiting || !1, m = s();
	return !i.isOpen && !p || m ? null : A.createElement(B, {
		...e,
		state: i,
		isExiting: p,
		overlayRef: o,
		modalRef: l,
		onExitRef: d
	});
}
var z = (0, A.forwardRef)(R);
function B({ UNSTABLE_portalContainer: e, UNSTABLE_deferUntilEntered: i, ...a }) {
	let s = a.modalRef, { state: c } = a, [l, u] = (0, A.useState)(!1), d = T(a.overlayRef, l, a.onEnter) || a.isEntering || !1, m = !!i && (!l || d), { modalProps: h, underlayProps: _ } = j({
		...a,
		isEntering: m
	}, c, s), y = (0, A.useContext)(x), S = i ? V(y, { isEntering: m }) : y, C = r({
		...a,
		defaultClassName: `react-aria-ModalOverlay`,
		values: {
			isEntering: d,
			isExiting: a.isExiting,
			state: c
		}
	}), w = N(), E, O;
	if (typeof document < `u`) {
		let e = D(document.body) ? document.body : document.scrollingElement || document.documentElement, t = e.getBoundingClientRect().width % 1, n = e.getBoundingClientRect().height % 1;
		E = e.scrollWidth - t, O = e.scrollHeight - n;
	}
	let k = {
		...C.style,
		"--visual-viewport-width": w.width + `px`,
		"--visual-viewport-height": w.height + `px`,
		"--page-width": E === void 0 ? void 0 : E + `px`,
		"--page-height": O === void 0 ? void 0 : O + `px`
	};
	return p(() => g(() => u(!0)), []), A.createElement(b, {
		isExiting: a.isExiting,
		portalContainer: e
	}, A.createElement(t.div, {
		...o(n(a, { global: !0 }), _),
		...C,
		style: k,
		ref: a.overlayRef,
		"data-entering": d || void 0,
		"data-exiting": a.isExiting || void 0
	}, A.createElement(f, { values: [
		[I, {
			modalProps: h,
			modalRef: s,
			isExiting: a.isExiting,
			onExitRef: a.onExitRef,
			isOpen: l,
			isDismissable: a.isDismissable
		}],
		[v, c],
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
	let { modalProps: s, modalRef: c, isExiting: l, onExitRef: u, isDismissable: d, isOpen: f } = (0, A.useContext)(I), m = (0, A.useContext)(v), h = (0, A.useMemo)(() => i(e.modalRef, c), [e.modalRef, c]), g = a(h), _ = T(g, f, e.onEnter), b = r({
		...e,
		defaultClassName: `react-aria-Modal`,
		values: {
			isEntering: _,
			isExiting: l,
			state: m
		}
	});
	return p(() => {
		u && (u.current = e.onExit);
	}), A.createElement(t.div, {
		...o(n(e, { global: !0 }), s),
		...b,
		ref: g,
		"data-entering": _ || void 0,
		"data-exiting": l || void 0
	}, d && A.createElement(y, { onDismiss: m.close }), b.children);
}
export { z as n, L as t };
