import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Ct as r, Dt as i, Jt as a, Nt as o, R as s, Sn as c, Vt as l, Wt as u, Xt as d, Yt as f, Zt as p, an as m, at as h, bn as g, bt as _, cn as v, ct as y, dn as b, dt as x, fn as S, gn as C, gt as w, hn as T, jt as ee, kt as E, ln as te, mn as D, mt as ne, nt as re, on as O, pt as ie, rn as k, sn as A, tn as j, tt as M, vn as N, vt as P, wt as ae, xn as F, xt as I, yn as L, yt as oe, zt as se } from "./doc.C_PtMNUB.js";
import { n as R, t as ce } from "./react-dom.B9zIfLd2.js";
import { a as le, i as ue, n as z, r as de, t as fe } from "./useOverlayTriggerState.ecOZOIeH.js";
import { n as B, t as pe } from "./ariaHideOutside.DgEDEHgw.js";
import { c as me, n as V, s as he, t as ge } from "./FocusScope.DSjTtRFm.js";
import { c as _e, l as ve, n as ye, r as be, t as xe } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { g as Se, i as Ce, l as we, n as Te, r as Ee, u as De, v as Oe, x as ke, y as Ae } from "./useCollection.Cn_I2nJQ.js";
import { a as je, n as Me, o as H, r as Ne, s as Pe } from "./Autocomplete.BYGvWyUq.js";
import { n as Fe } from "./useLocalizedStringFormatter.whw0Qxu0.js";
import { t as Ie } from "./VisuallyHidden.BNHsLrt2.js";
import { n as Le, t as Re } from "./PressResponder.CeHxpY0d.js";
import { n as ze } from "./PortalProvider.C0xkHnu_.js";
import { n as Be, t as Ve } from "./animation.DuWuxfeU.js";
import { n as He } from "./Keyboard.DA1lzqms.js";
import { n as Ue } from "./Separator.DnWD7c2k.js";
import { n as We } from "./Text.3KJW7jIs.js";
import { d as Ge, f as Ke, i as qe, l as Je, n as Ye, r as Xe, s as Ze, t as Qe } from "./CollectionBuilder.BW1Ria3_.js";
import { t as $e } from "./useTreeState.Br6cfIGF.js";
var U = e(R(), 1), et = (0, U.createContext)({}), tt = (0, U.forwardRef)(function(e, t) {
	[e, t] = A(e, t, et);
	let { children: n, level: r = 3, className: i, ...a } = e, o = S[`h${r}`];
	return U.createElement(o, {
		...a,
		ref: t,
		className: i ?? `react-aria-Heading`
	}, n);
});
function nt(e) {
	let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: i } = e, a = (0, U.useRef)({
		isPointerDown: !1,
		ignoreEmulatedMouseEvents: !1
	}), o = I((e) => {
		n && rt(e, t) && (i && i(e), a.current.isPointerDown = !0);
	}), s = I((e) => {
		n && n(e);
	});
	(0, U.useEffect)(() => {
		let e = a.current;
		if (r) return;
		let n = t.current, i = k(n);
		if (typeof PointerEvent < `u`) {
			let n = (n) => {
				e.isPointerDown && rt(n, t) && s(n), e.isPointerDown = !1;
			};
			return i.addEventListener(`pointerdown`, o, !0), i.addEventListener(`click`, n, !0), () => {
				i.removeEventListener(`pointerdown`, o, !0), i.removeEventListener(`click`, n, !0);
			};
		}
	}, [t, r]);
}
function rt(e, t) {
	if (e.button > 0) return !1;
	let r = n(e);
	if (r) {
		let e = r.ownerDocument;
		if (!e || !f(e.documentElement, r) || r.closest(`[data-react-aria-top-layer]`)) return !1;
	}
	return t.current ? !e.composedPath().includes(t.current) : !1;
}
var W = [];
function it(e, t) {
	let { onClose: r, shouldCloseOnBlur: i, isOpen: a, isDismissable: o = !1, isKeyboardDismissDisabled: s = !1, shouldCloseOnInteractOutside: c } = e, l = (0, U.useRef)(void 0);
	(0, U.useEffect)(() => {
		if (a && !W.includes(t)) return W.push(t), () => {
			let e = W.indexOf(t);
			e >= 0 && W.splice(e, 1);
		};
	}, [a, t]);
	let u = () => {
		W[W.length - 1] === t && r && r();
	}, d = (e) => {
		let r = W[W.length - 1];
		l.current = r, (!c || c(n(e))) && r === t && e.stopPropagation();
	}, f = (e) => {
		(!c || c(n(e))) && (W[W.length - 1] === t && e.stopPropagation(), l.current === t && u()), l.current = void 0;
	}, { keyboardProps: p } = w({ shortcuts: { Escape: () => {
		if (!s) u();
		else return !1;
	} } });
	nt({
		ref: t,
		onInteractOutside: o && a ? f : void 0,
		onInteractOutsideStart: d
	});
	let { focusWithinProps: m } = M({
		isDisabled: !i,
		onBlurWithin: (e) => {
			e.relatedTarget && !ge(e.relatedTarget) && (!c || c(e.relatedTarget)) && r?.();
		}
	});
	return {
		overlayProps: {
			...p,
			...m
		},
		underlayProps: {}
	};
}
var at = 200, ot = 50, st = 600, G = new WeakMap(), K = new Set(), q = new Set();
function ct(e, t) {
	let n = H();
	if (e !== n || t.aborted) for (let e of q) e(n), q.delete(e);
	if (!e && n && se() && !t.aborted) window.clearInterval(G.get(window)), G.set(window, lt(at));
	else {
		if (e !== n || t.aborted) for (let e of K) e(n), K.delete(e);
		(q.size + K.size <= 0 || t.aborted) && (window.clearInterval(G.get(window)), G.delete(window));
	}
}
function lt(e = st) {
	return window.setInterval(ct, ot, H(), AbortSignal.timeout(e));
}
function ut(e) {
	if (!je()) return e(!1), () => {};
	let t = window.requestAnimationFrame(() => {
		t = window.requestAnimationFrame(() => {
			let t = document.hasFocus() ? p() : null, n = Pe(t);
			if (H() === n || H() && !n) return e(n);
			q.add(e), G.has(window) || G.set(window, lt());
		});
	});
	return () => {
		window.cancelAnimationFrame(t), q.delete(e);
	};
}
function dt(e) {
	if (!je()) return e(!1), () => {};
	let t = window.requestAnimationFrame(() => {
		t = window.requestAnimationFrame(() => {
			let t = document.hasFocus() ? p() : null, n = Pe(t);
			if (H() === n) return e(n);
			K.add(e), G.has(window) || G.set(window, lt());
		});
	});
	return () => {
		window.cancelAnimationFrame(t), K.delete(e);
	};
}
var ft = typeof document < `u` && window.visualViewport, J = 0, pt;
function mt(e = {}) {
	let { isDisabled: t, UNSTABLE_overrideFocus: n } = e;
	F(() => {
		if (!t) return J++, J === 1 && (pt = u() && se() ? gt() : ht(n)), () => {
			J--, J === 0 && pt();
		};
	}, [t, n]);
}
function ht(e) {
	let t = window.innerWidth - document.documentElement.clientWidth;
	return c(t > 0 && (`scrollbarGutter` in document.documentElement.style ? j(document.documentElement, `scrollbar-gutter`, `stable`) : j(document.documentElement, `padding-right`, `${t}px`)), j(document.documentElement, `overflow`, `hidden`), e && vt(), e && je() && _t());
}
function gt() {
	let e = j(document.documentElement, `overflow`, `hidden`), t, r = !1, i = (e) => {
		let i = n(e);
		t = Se(i, !0) ? i : ve(i, !0), r = !1;
		let a = i.ownerDocument.defaultView.getSelection();
		a && !a.isCollapsed && a.containsNode(i, !0) && (r = !0), e.composedPath().some((e) => e instanceof HTMLInputElement && e.type === `range`) && (r = !0), `selectionStart` in i && `selectionEnd` in i && i.selectionStart < i.selectionEnd && i.ownerDocument.activeElement === i && (r = !0);
	}, a = document.createElement(`style`), o = h();
	o && (a.nonce = o), a.textContent = `@layer {
  * {
    overscroll-behavior: contain;
  }
}`, document.head.prepend(a);
	let s = (e) => {
		e.touches.length === 2 || r || (!t || t === document.documentElement || t === document.body || t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth) && e.preventDefault();
	}, l = vt(), u = c(m(document, `touchstart`, i, {
		passive: !1,
		capture: !0
	}), m(document, `touchmove`, s, {
		passive: !1,
		capture: !0
	}), _t());
	return () => {
		e(), u(), a.remove(), l();
	};
}
function _t() {
	return m(document, `blur`, (e) => {
		let t = n(e), r = e.relatedTarget;
		r && Pe(r) ? r.focus() : r || (t.parentElement?.closest(`[tabindex]`))?.focus({ preventScroll: !0 });
	}, !0);
}
function vt() {
	let e = HTMLElement.prototype.focus;
	return Reflect.defineProperty(HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: function(t) {
			if (e.call(this, {
				...t,
				preventScroll: !0
			}), !t || !t.preventScroll) {
				let e = () => {
					p() === this && yt(this);
				};
				ut((t) => t ? e() : dt(() => e()));
			}
		}
	}), () => {
		Reflect.defineProperty(HTMLElement.prototype, "focus", {
			configurable: !0,
			writable: !0,
			value: e
		});
	};
}
function yt(e) {
	let t = document.scrollingElement || document.documentElement, n = e;
	for (; n && n !== t && n.isConnected;) {
		let e = ve(n);
		if (e !== document.documentElement && e !== document.body && e !== n) {
			let t = e.getBoundingClientRect(), r = n.getBoundingClientRect();
			if (r.top < t.top || r.bottom > t.top + n.clientHeight) {
				let n = t.bottom;
				ft && (n = Math.min(n, ft.offsetTop + ft.height));
				let i = r.top - t.top - ((n - t.top) / 2 - r.height / 2);
				e.scrollTo({
					top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + i)),
					behavior: `smooth`
				});
			}
		}
		n = e.parentElement;
	}
}
function bt(e, t) {
	let { triggerRef: n, popoverRef: r, groupRef: i, isNonModal: a, isKeyboardDismissDisabled: o, shouldCloseOnInteractOutside: s, ...c } = e, l = c.trigger === `SubmenuTrigger`, { overlayProps: u, underlayProps: d } = it({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !a || l,
		isKeyboardDismissDisabled: o,
		shouldCloseOnInteractOutside: s
	}, i ?? r), { overlayProps: f, arrowProps: p, placement: m, triggerAnchorPoint: h } = z({
		...c,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: a && !l ? t.close : null,
		getTargetRect: c.getTargetRect ?? (t.point ? () => new DOMRect(t.point.x, t.point.y, 0, 0) : void 0)
	});
	mt({ isDisabled: a || !t.isOpen }), (0, U.useEffect)(() => {
		if (t.isOpen && r.current) return a ? pe(i?.current ?? r.current) : B([i?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		a,
		t.isOpen,
		r,
		i
	]);
	let { focusWithinProps: g } = M(e);
	return {
		popoverProps: C(u, f, g),
		arrowProps: p,
		underlayProps: d,
		placement: m,
		triggerAnchorPoint: h
	};
}
var xt = {};
xt = { dismiss: `تجاهل` };
var St = {};
St = { dismiss: `Отхвърляне` };
var Ct = {};
Ct = { dismiss: `Odstranit` };
var wt = {};
wt = { dismiss: `Luk` };
var Tt = {};
Tt = { dismiss: `Schließen` };
var Et = {};
Et = { dismiss: `Απόρριψη` };
var Dt = {};
Dt = { dismiss: `Dismiss` };
var Ot = {};
Ot = { dismiss: `Descartar` };
var kt = {};
kt = { dismiss: `Lõpeta` };
var At = {};
At = { dismiss: `Hylkää` };
var jt = {};
jt = { dismiss: `Rejeter` };
var Mt = {};
Mt = { dismiss: `התעלם` };
var Nt = {};
Nt = { dismiss: `Odbaci` };
var Pt = {};
Pt = { dismiss: `Elutasítás` };
var Ft = {};
Ft = { dismiss: `Ignora` };
var It = {};
It = { dismiss: `閉じる` };
var Lt = {};
Lt = { dismiss: `무시` };
var Rt = {};
Rt = { dismiss: `Atmesti` };
var zt = {};
zt = { dismiss: `Nerādīt` };
var Bt = {};
Bt = { dismiss: `Lukk` };
var Vt = {};
Vt = { dismiss: `Negeren` };
var Ht = {};
Ht = { dismiss: `Zignoruj` };
var Ut = {};
Ut = { dismiss: `Descartar` };
var Wt = {};
Wt = { dismiss: `Dispensar` };
var Gt = {};
Gt = { dismiss: `Revocare` };
var Kt = {};
Kt = { dismiss: `Пропустить` };
var qt = {};
qt = { dismiss: `Zrušiť` };
var Jt = {};
Jt = { dismiss: `Opusti` };
var Yt = {};
Yt = { dismiss: `Odbaci` };
var Xt = {};
Xt = { dismiss: `Avvisa` };
var Zt = {};
Zt = { dismiss: `Kapat` };
var Qt = {};
Qt = { dismiss: `Скасувати` };
var $t = {};
$t = { dismiss: `取消` };
var en = {};
en = { dismiss: `關閉` };
var tn = {};
tn = {
	"ar-AE": xt,
	"bg-BG": St,
	"cs-CZ": Ct,
	"da-DK": wt,
	"de-DE": Tt,
	"el-GR": Et,
	"en-US": Dt,
	"es-ES": Ot,
	"et-EE": kt,
	"fi-FI": At,
	"fr-FR": jt,
	"he-IL": Mt,
	"hr-HR": Nt,
	"hu-HU": Pt,
	"it-IT": Ft,
	"ja-JP": It,
	"ko-KR": Lt,
	"lt-LT": Rt,
	"lv-LV": zt,
	"nb-NO": Bt,
	"nl-NL": Vt,
	"pl-PL": Ht,
	"pt-BR": Ut,
	"pt-PT": Wt,
	"ro-RO": Gt,
	"ru-RU": Kt,
	"sk-SK": qt,
	"sl-SI": Jt,
	"sr-SP": Yt,
	"sv-SE": Xt,
	"tr-TR": Zt,
	"uk-UA": Qt,
	"zh-CN": $t,
	"zh-TW": en
};
function nn(e) {
	return e && e.__esModule ? e.default : e;
}
function rn(e) {
	let { onDismiss: t, ...n } = e, r = Fe(nn(tn), `@react-aria/overlays`), i = _(n, r.format(`dismiss`)), a = () => {
		t && t();
	};
	return U.createElement(Ie, null, U.createElement(`button`, {
		...i,
		tabIndex: -1,
		onClick: a,
		style: {
			width: 1,
			height: 1
		}
	}));
}
var an = e(ce(), 1), on = U.createContext(null);
function sn(e) {
	let t = g(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [i, a] = (0, U.useState)(!1), o = (0, U.useMemo)(() => ({
		contain: i,
		setContain: a
	}), [i, a]), { getContainer: s } = ze();
	if (!e.portalContainer && s && (n = s()), !n) return null;
	let c = e.children;
	return e.disableFocusManagement || (c = U.createElement(V, {
		restoreFocus: !0,
		contain: (e.shouldContainFocus || i) && !r
	}, c)), c = U.createElement(on.Provider, { value: o }, U.createElement(Le, null, U.createElement(ne.Provider, { value: null }, c))), an.createPortal(c, n);
}
function cn() {
	let e = (0, U.useContext)(on)?.setContain;
	F(() => {
		e?.(!0);
	}, [e]);
}
var Y = (0, U.createContext)(null), ln = (0, U.createContext)(null), un = (0, U.forwardRef)(function(e, t) {
	[e, t] = A(e, t, Y);
	let n = (0, U.useContext)($), r = fe(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = Ve(t, i.isOpen), o = e.isExiting || !e.shouldSkipAnimation && a || !1, s = x(), { direction: c } = oe();
	if (s) {
		let t = e.children;
		return typeof t == `function` && (t = t({
			trigger: e.trigger || null,
			placement: `bottom`,
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), U.createElement(U.Fragment, null, t);
	}
	return i && !i.isOpen && !o ? null : U.createElement(dn, {
		...e,
		triggerRef: e.triggerRef,
		state: i,
		popoverRef: t,
		isExiting: o,
		dir: c
	});
});
function dn({ state: e, isExiting: t, UNSTABLE_portalContainer: n, clearContexts: i, ...a }) {
	let o = (0, U.useRef)(null), s = (0, U.useRef)(null), c = (0, U.useContext)(ln), l = c && a.trigger === `SubmenuTrigger`, [u, f] = (0, U.useState)(!1), { popoverProps: p, underlayProps: m, arrowProps: h, placement: g, triggerAnchorPoint: _ } = bt({
		...a,
		offset: a.offset ?? 8,
		arrowRef: o,
		groupRef: l ? c : s
	}, e), b = a.popoverRef, x = Be(b, !!g && u), w = a.isEntering || !a.shouldSkipAnimation && x || !1, T = v({
		...a,
		defaultClassName: `react-aria-Popover`,
		values: {
			trigger: a.trigger || null,
			placement: g,
			isEntering: w,
			isExiting: t
		}
	}), ee = !a.isNonModal || a.trigger === `SubmenuTrigger` || a.trigger === `PreviewTrigger`, [E, te] = (0, U.useState)(a.trigger === `PreviewTrigger`);
	F(() => {
		b.current && te(ee && !b.current.querySelector(`[role=dialog]`));
	}, [b, ee]), (0, U.useEffect)(() => {
		E && a.trigger !== `PreviewTrigger` && (a.trigger !== `SubmenuTrigger` || r() !== `pointer`) && b.current && !d(b.current) && P(b.current);
	}, [
		E,
		b,
		a.trigger
	]);
	let D = (0, U.useMemo)(() => {
		let e = T.children;
		for (let t of [Y, ...i ?? []]) e = U.createElement(t.Provider, { value: null }, e);
		return e;
	}, [T.children, i]), [ne, re] = (0, U.useState)(null), O = (0, U.useCallback)(() => {
		a.triggerRef.current && re(a.triggerRef.current.getBoundingClientRect().width + `px`);
	}, [a.triggerRef]);
	F(O, [O]), de({
		ref: T.style?.[`--trigger-width`] ? void 0 : a.triggerRef,
		onResize: O
	});
	let ie = {
		...p.style,
		"--trigger-anchor-point": _ ? `${_.x}px ${_.y}px` : void 0,
		...T.style,
		"--trigger-width": T.style?.[`--trigger-width`] || ne
	};
	F(() => ut(() => f(!0)), []);
	let k = U.createElement(S.div, {
		...C(y(a, { global: !0 }), p),
		...T,
		id: E ? a.id : void 0,
		role: E ? `dialog` : void 0,
		tabIndex: E ? -1 : void 0,
		"aria-label": a[`aria-label`],
		"aria-labelledby": a[`aria-labelledby`],
		ref: b,
		slot: a.slot || void 0,
		style: ie,
		dir: a.dir,
		"data-trigger": a.trigger,
		"data-placement": g,
		"data-entering": w || void 0,
		"data-exiting": t || void 0
	}, !a.isNonModal && U.createElement(rn, { onDismiss: e.close }), U.createElement(le.Provider, { value: {
		...h,
		placement: g,
		ref: o
	} }, D), U.createElement(rn, { onDismiss: e.close }));
	return l ? U.createElement(sn, {
		...a,
		shouldContainFocus: E && a.trigger !== `PreviewTrigger`,
		isExiting: t,
		portalContainer: n ?? c?.current ?? void 0
	}, k) : U.createElement(sn, {
		...a,
		shouldContainFocus: E && a.trigger !== `PreviewTrigger`,
		isExiting: t,
		portalContainer: n
	}, !a.isNonModal && e.isOpen && U.createElement(`div`, {
		"data-testid": `underlay`,
		...m,
		style: {
			position: `fixed`,
			inset: 0
		}
	}), U.createElement(`div`, {
		ref: s,
		style: { display: `contents` }
	}, U.createElement(ln.Provider, { value: s }, k)));
}
var fn = {};
fn = { longPressMessage: `اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة` };
var pn = {};
pn = { longPressMessage: `Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто` };
var mn = {};
mn = { longPressMessage: `Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku` };
var hn = {};
hn = { longPressMessage: `Langt tryk eller tryk på Alt + pil ned for at åbne menuen` };
var gn = {};
gn = { longPressMessage: `Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen` };
var _n = {};
_n = { longPressMessage: `Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού` };
var vn = {};
vn = { longPressMessage: `Long press or press Alt + ArrowDown to open menu` };
var yn = {};
yn = { longPressMessage: `Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú` };
var bn = {};
bn = { longPressMessage: `Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool` };
var xn = {};
xn = { longPressMessage: `Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli` };
var Sn = {};
Sn = { longPressMessage: `Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu.` };
var Cn = {};
Cn = { longPressMessage: `לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט` };
var wn = {};
wn = { longPressMessage: `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika` };
var Tn = {};
Tn = { longPressMessage: `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához` };
var En = {};
En = { longPressMessage: `Premi a lungo o premi Alt + Freccia giù per aprire il menu` };
var Dn = {};
Dn = { longPressMessage: `長押しまたは Alt+下矢印キーでメニューを開く` };
var On = {};
On = { longPressMessage: `길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기` };
var kn = {};
kn = { longPressMessage: `Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.` };
var An = {};
An = { longPressMessage: `Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa` };
var jn = {};
jn = { longPressMessage: `Langt trykk eller trykk Alt + PilNed for å åpne menyen` };
var Mn = {};
Mn = { longPressMessage: `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen` };
var Nn = {};
Nn = { longPressMessage: `Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu` };
var Pn = {};
Pn = { longPressMessage: `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu` };
var Fn = {};
Fn = { longPressMessage: `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu` };
var In = {};
In = { longPressMessage: `Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul` };
var Ln = {};
Ln = { longPressMessage: `Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню` };
var Rn = {};
Rn = { longPressMessage: `Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol` };
var zn = {};
zn = { longPressMessage: `Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol` };
var Bn = {};
Bn = { longPressMessage: `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni` };
var Vn = {};
Vn = { longPressMessage: `Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn` };
var Hn = {};
Hn = { longPressMessage: `Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın` };
var Un = {};
Un = { longPressMessage: `Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню` };
var Wn = {};
Wn = { longPressMessage: `长按或按 Alt + 向下方向键以打开菜单` };
var Gn = {};
Gn = { longPressMessage: `長按或按 Alt+向下鍵以開啟功能表` };
var Kn = {};
Kn = {
	"ar-AE": fn,
	"bg-BG": pn,
	"cs-CZ": mn,
	"da-DK": hn,
	"de-DE": gn,
	"el-GR": _n,
	"en-US": vn,
	"es-ES": yn,
	"et-EE": bn,
	"fi-FI": xn,
	"fr-FR": Sn,
	"he-IL": Cn,
	"hr-HR": wn,
	"hu-HU": Tn,
	"it-IT": En,
	"ja-JP": Dn,
	"ko-KR": On,
	"lt-LT": kn,
	"lv-LV": An,
	"nb-NO": jn,
	"nl-NL": Mn,
	"pl-PL": Nn,
	"pt-BR": Pn,
	"pt-PT": Fn,
	"ro-RO": In,
	"ru-RU": Ln,
	"sk-SK": Rn,
	"sl-SI": zn,
	"sr-SP": Bn,
	"sv-SE": Vn,
	"tr-TR": Hn,
	"uk-UA": Un,
	"zh-CN": Wn,
	"zh-TW": Gn
};
function qn(e) {
	let { onContextMenu: t } = e, n = (0, U.useRef)(!1), { longPressProps: r } = De({
		onLongPressStart() {
			n.current = !1;
		},
		onLongPress(e) {
			n.current ? n.current = !1 : t?.({
				target: e.target,
				x: e.x,
				y: e.y
			});
		}
	});
	return t ? { contextMenuProps: C(u() ? r : {}, {
		onContextMenu(e) {
			e.stopPropagation(), e.preventDefault(), n.current = !0;
			let r = e.currentTarget.getBoundingClientRect();
			t({
				target: e.currentTarget,
				x: e.clientX - r.x,
				y: e.clientY - r.y
			});
		},
		onKeyDown(e) {
			if (l() && e.ctrlKey && e.key === `Enter`) {
				n.current = !1;
				let r = e.currentTarget;
				e.stopPropagation(), setTimeout(() => {
					if (n.current) n.current = !1;
					else {
						let e = r.getBoundingClientRect();
						t({
							target: r,
							x: e.width / 2,
							y: e.height / 2
						});
					}
				}, 10);
			}
		}
	}) } : { contextMenuProps: {} };
}
function Jn(e, t, n) {
	let { type: r } = e, { isOpen: i } = t;
	(0, U.useEffect)(() => {
		n && n.current && ue.set(n.current, t.close);
	});
	let a;
	r === `menu` ? a = !0 : r === `listbox` && (a = `listbox`);
	let o = L();
	return {
		triggerProps: {
			"aria-haspopup": a,
			"aria-expanded": i,
			"aria-controls": i ? o : void 0,
			onPress: t.toggle
		},
		overlayProps: { id: o }
	};
}
function Yn(e) {
	return e && e.__esModule ? e.default : e;
}
function Xn(e, t, r) {
	let { type: i = `menu`, isDisabled: o, trigger: s = `press` } = e, c = L(), { triggerProps: l, overlayProps: u } = Jn({ type: i }, t, r), d = (e, n, r = `first`) => {
		if (!e || n.isDefaultPrevented()) return !1;
		t.toggle(r);
	}, { keyboardProps: f } = w({
		isDisabled: o,
		shortcuts: {
			Enter: (e) => d(s !== `longPress`, e, `first`),
			" ": (e) => d(s !== `longPress`, e, `first`),
			ArrowDown: (e) => d(s !== `longPress`, e, `first`),
			ArrowUp: (e) => d(s !== `longPress`, e, `last`),
			"Alt+Enter": (e) => d(s === `longPress`, e, `first`),
			"Alt+ ": (e) => d(s === `longPress`, e, `first`),
			"Alt+ArrowDown": (e) => d(!0, e, `first`),
			"Alt+ArrowUp": (e) => d(!0, e, `last`)
		}
	}), p = Fe(Yn(Kn), `@react-aria/menu`), { longPressProps: m } = De({
		isDisabled: o || s !== `longPress`,
		accessibilityDescription: p.format(`longPressMessage`),
		onLongPressStart() {
			t.close();
		},
		onLongPress() {
			t.open(`first`);
		}
	}), h = {
		preventFocusOnPress: !0,
		onPressStart(e) {
			e.pointerType !== `touch` && e.pointerType !== `keyboard` && !o && (a(e.target), t.open(e.pointerType === `virtual` ? `first` : null));
		},
		onPress(e) {
			e.pointerType === `touch` && !o && (a(e.target), t.toggle());
		}
	};
	delete l.onPress;
	let { contextMenuProps: g } = qn({ onContextMenu(e) {
		let n = e.target.getBoundingClientRect();
		t.setPoint({
			x: n.x + e.x,
			y: n.y + e.y
		}), t.open();
	} });
	(0, U.useEffect)(() => {
		if (t.isOpen && s === `contextMenu`) {
			let e = (e) => {
				(e.button === 2 || e.button === 0 && e.ctrlKey === !0) && n(e) === document.body && t.close();
			};
			return document.addEventListener(`mousedown`, e), () => document.removeEventListener(`mousedown`, e);
		}
	}, [t, s]);
	let _;
	if (s === `press`) _ = {
		...h,
		...f
	};
	else if (s === `longPress`) _ = {
		...m,
		...f
	};
	else if (s === `contextMenu`) {
		_ = g;
		let { "aria-haspopup": e, "aria-expanded": t, "aria-controls": n, ...r } = l;
		l = r;
	}
	return {
		menuTriggerProps: {
			...l,
			..._,
			id: c
		},
		menuProps: {
			...u,
			"aria-labelledby": c,
			autoFocus: t.focusStrategy || !0,
			onClose: t.close
		}
	};
}
var Zn = new WeakMap();
function Qn(e, t, n) {
	let { shouldFocusWrap: r = !0, onKeyDown: i, onKeyUp: a, ...o } = e;
	!e[`aria-label`] && e[`aria-labelledby`];
	let s = y(e, { labelable: !0 }), { listProps: c } = be({
		...o,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		shouldFocusWrap: r,
		linkBehavior: `override`
	});
	return Zn.set(t, {
		onClose: e.onClose,
		onAction: e.onAction,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus
	}), { menuProps: C(s, {
		onKeyDown: i,
		onKeyUp: a
	}, {
		role: `menu`,
		...c,
		onKeyDown: (t) => {
			(t.key !== `Escape` || e.shouldUseVirtualFocus) && c.onKeyDown?.(t);
		}
	}) };
}
function $n(e, r, a) {
	let { id: s, key: c, closeOnSelect: l, shouldCloseOnSelect: u, isVirtualized: d, "aria-haspopup": f, onPressStart: p, onPressUp: m, onPress: h, onPressChange: g, onPressEnd: _, onClick: v, onHoverStart: b, onHoverChange: x, onHoverEnd: S, onKeyDown: T, onKeyUp: te, onFocus: D, onFocusChange: ne, onBlur: O, selectionManager: k = r.selectionManager } = e, A = !!f, j = A && e[`aria-expanded`] === `true`, M = e.isDisabled ?? k.isDisabled(c), P = e.isSelected ?? k.isSelected(c), F = Zn.get(r), I = r.collection.getItem(c), L = e.onClose || F.onClose, oe = o(), se = () => {
		if (!A && (I?.props?.onAction ? I.props.onAction() : e.onAction && e.onAction(c), F.onAction)) {
			let e = F.onAction;
			e(c, I?.value);
		}
	}, R = `menuitem`;
	A || (k.selectionMode === `single` ? R = `menuitemradio` : k.selectionMode === `multiple` && (R = `menuitemcheckbox`));
	let ce = N(), le = N(), ue = N(), z = {
		id: s,
		"aria-disabled": M || void 0,
		role: R,
		"aria-label": e[`aria-label`],
		"aria-labelledby": ce,
		"aria-describedby": [
			e[`aria-describedby`],
			le,
			ue
		].filter(Boolean).join(` `) || void 0,
		"aria-controls": e[`aria-controls`],
		"aria-haspopup": f,
		"aria-expanded": e[`aria-expanded`]
	};
	if (k.selectionMode !== `none` && !A && (z[`aria-checked`] = P), d) {
		let e = Number(I?.index);
		z[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, z[`aria-setsize`] = ye(r.collection);
	}
	let de = (0, U.useRef)(!1), fe = (e) => {
		g?.(e), de.current = e;
	}, B = (0, U.useRef)(null), pe = (e) => {
		e.pointerType !== `keyboard` && (B.current = { pointerType: e.pointerType }), e.pointerType === `mouse` && (de.current || e.target.click()), m?.(e);
	}, me = (e) => {
		v?.(e), se(), E(e, oe, I.props.href, I?.props.routerOptions);
		let t = B.current?.pointerType === `keyboard` ? B.current?.key === `Enter` || k.selectionMode === `none` || k.isLink(c) : k.selectionMode !== `multiple` || k.isLink(c);
		t = u ?? l ?? t, L && !A && t && L(), B.current = null;
	}, { itemProps: V, isFocused: he } = we({
		id: s,
		selectionManager: k,
		key: c,
		ref: a,
		shouldSelectOnPressUp: !0,
		allowsDifferentPressOrigin: !0,
		linkBehavior: `none`,
		shouldUseVirtualFocus: F.shouldUseVirtualFocus
	}), { pressProps: ge, isPressed: _e } = re({
		onPressStart: p,
		onPress: h,
		onPressUp: pe,
		onPressChange: fe,
		onPressEnd: _,
		isDisabled: M
	}), { hoverProps: ve } = t({
		isDisabled: M,
		onHoverStart(e) {
			!i() && !(j && f) && (k.setFocused(!0), k.setFocusedKey(c)), b?.(e);
		},
		onHoverChange: x,
		onHoverEnd: S
	}), { keyboardProps: be } = w({
		shortcuts: {
			" ": (e) => {
				B.current = {
					pointerType: `keyboard`,
					key: ` `
				}, n(e).click(), ae(`keyboard`);
			},
			Enter: (e) => {
				B.current = {
					pointerType: `keyboard`,
					key: `Enter`
				};
				let t = n(e);
				if (t.tagName !== `A`) t.click(), ae(`keyboard`);
				else return ae(`keyboard`), {
					shouldPreventDefault: !1,
					shouldContinuePropagation: !1
				};
			}
		},
		onKeyDown: T,
		onKeyUp: te
	}), { focusableProps: xe } = ie({
		onBlur: O,
		onFocus: D,
		onFocusChange: ne
	}, a), Se = y(I?.props);
	delete Se.id;
	let Ce = ee(I?.props);
	return {
		menuItemProps: {
			...z,
			...C(Se, Ce, A ? {
				onFocus: V.onFocus,
				"data-collection": V[`data-collection`],
				"data-key": V[`data-key`]
			} : V, ge, ve, be, xe, F.shouldUseVirtualFocus || A ? { onMouseDown: (e) => e.preventDefault() } : void 0, M ? void 0 : { onClick: me }),
			tabIndex: V.tabIndex != null && j && !F.shouldUseVirtualFocus ? -1 : V.tabIndex
		},
		labelProps: { id: ce },
		descriptionProps: { id: le },
		keyboardShortcutProps: { id: ue },
		isFocused: he,
		isFocusVisible: he && k.isFocused && i() && !j,
		isSelected: P,
		isPressed: _e,
		isDisabled: M
	};
}
function er(e) {
	let { heading: t, "aria-label": n } = e, r = L();
	return {
		itemProps: { role: `presentation` },
		headingProps: t ? {
			id: r,
			role: `presentation`
		} : {},
		groupProps: {
			role: `group`,
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
function tr(e) {
	let t = fe(e), [n, r] = (0, U.useState)(null), [i, a] = (0, U.useState)([]), o = () => {
		a([]), t.close();
	}, s = (e, t) => {
		a((n) => t > n.length ? n : [...n.slice(0, t), e]);
	}, c = (e, t) => {
		a((n) => n[t] === e ? n.slice(0, t) : n);
	};
	return {
		focusStrategy: n,
		...t,
		open(e = null) {
			r(e), t.open();
		},
		toggle(e = null) {
			r(e), t.toggle();
		},
		close() {
			o();
		},
		expandedKeysStack: i,
		openSubmenu: s,
		closeSubmenu: c
	};
}
var nr = (0, U.createContext)(null), X = (0, U.createContext)(null), Z = (0, U.createContext)(null), rr = (0, U.createContext)(null);
function ir(e) {
	let t = tr(e), n = (0, U.useRef)(null), { menuTriggerProps: r, menuProps: i } = Xn({
		...e,
		type: `menu`
	}, t, n), a = (0, U.useRef)(null);
	return x() ? null : U.createElement(O, { values: [
		[nr, {
			...i,
			ref: a
		}],
		[$, t],
		[Z, t],
		[Y, {
			trigger: `MenuTrigger`,
			triggerRef: n,
			scrollRef: a,
			placement: `bottom start`,
			"aria-labelledby": i[`aria-labelledby`],
			offset: e.trigger === `contextMenu` ? 0 : void 0
		}]
	] }, U.createElement(Re, {
		...r,
		ref: n,
		isPressed: t.isOpen
	}, e.children));
}
var ar = (0, U.createContext)(null);
(class extends Ge {
	static {
		this.type = `submenutrigger`;
	}
	filter(e, t, n) {
		let r = e.getItem(this.firstChildKey);
		if (r && n(r.textValue, this)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
});
var or = (0, U.forwardRef)(function(e, t) {
	return [e, t] = A(e, t, nr), U.createElement(Ye, { content: U.createElement(qe, e) }, (n) => U.createElement(sr, {
		props: e,
		collection: n,
		menuRef: t
	}));
});
function sr({ props: e, collection: t, menuRef: n }) {
	[e, n] = A(e, n, Ne);
	let { filter: r, ...i } = e, a = (0, U.useMemo)(() => r ? t.filter(r) : t, [t, r]), o = $e({
		...e,
		collection: a,
		children: void 0
	}), s = (0, U.useContext)(Z), { isVirtualized: c, CollectionRoot: l } = (0, U.useContext)(Oe), { menuProps: u } = Qn({
		...e,
		isVirtualized: c,
		onClose: e.onClose || s?.close
	}, o, n), d = v({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Menu`,
		values: { isEmpty: o.collection.size === 0 }
	}), f = null;
	o.collection.size === 0 && e.renderEmptyState && (f = U.createElement(`div`, {
		role: `menuitem`,
		style: { display: `contents` }
	}, e.renderEmptyState()));
	let p = y(e, { global: !0 });
	return U.createElement(V, null, U.createElement(S.div, {
		...C(p, d, u),
		ref: n,
		slot: e.slot || void 0,
		"data-empty": o.collection.size === 0 || void 0,
		onScroll: e.onScroll
	}, U.createElement(O, { values: [
		[X, o],
		[Ue, { elementType: `div` }],
		[ke, {
			name: `MenuSection`,
			render: lr
		}],
		[ar, {
			parentMenuRef: n,
			shouldUseVirtualFocus: i?.shouldUseVirtualFocus
		}],
		[Q, { shouldCloseOnSelect: e.shouldCloseOnSelect }],
		[Ne, null],
		[Me, null],
		[rr, o.selectionManager],
		[Z, s ?? tr({})]
	] }, U.createElement(me, null, U.createElement(l, {
		collection: o.collection,
		persistedKeys: Ae(o.selectionManager.focusedKey),
		scrollRef: n
	}))), f));
}
var cr = class extends Te {
	constructor(e, t) {
		super(e.collection, t), this.parent = e;
	}
	get focusedKey() {
		return this.parent.focusedKey;
	}
	get isFocused() {
		return this.parent.isFocused;
	}
	setFocusedKey(e, t) {
		return this.parent.setFocusedKey(e, t);
	}
	setFocused(e) {
		this.parent.setFocused(e);
	}
	get childFocusStrategy() {
		return this.parent.childFocusStrategy;
	}
};
function lr(e, t, n, r = `react-aria-MenuSection`) {
	let i = (0, U.useContext)(X), { CollectionBranch: a } = (0, U.useContext)(Oe), [o, s] = te(), { headingProps: c, groupProps: l } = er({
		heading: s,
		"aria-label": n.props[`aria-label`] ?? void 0
	}), u = v({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		className: n.props?.className,
		style: n.props?.style,
		values: void 0
	}), d = (0, U.useContext)(rr), f = Ee(e), p = e.selectionMode == null ? d : new cr(d, f), m = D(Q)?.shouldCloseOnSelect, h = y(e, { global: !0 });
	return delete h.id, U.createElement(S.section, {
		...C(h, u, l),
		ref: t
	}, U.createElement(O, { values: [
		[_e, {
			...c,
			ref: o
		}],
		[rr, p],
		[Q, { shouldCloseOnSelect: e.shouldCloseOnSelect ?? m }]
	] }, U.createElement(a, {
		collection: i.collection,
		parent: n
	})));
}
var ur = Xe(Ze, lr), Q = (0, U.createContext)(null), dr = Qe(Ke, function(e, n, r) {
	[e, n] = A(e, n, Q);
	let i = D(Q)?.id, a = (0, U.useContext)(X), o = T(n), s = (0, U.useContext)(rr), { isVirtualized: c } = (0, U.useContext)(Oe), { menuItemProps: l, labelProps: u, descriptionProps: d, keyboardShortcutProps: f, ...p } = $n({
		...e,
		id: i,
		key: r.key,
		selectionManager: s,
		isVirtualized: c
	}, a, o), { hoverProps: m, isHovered: h } = t({ isDisabled: p.isDisabled }), g = v({
		...e,
		id: void 0,
		children: r.rendered,
		defaultClassName: `react-aria-MenuItem`,
		values: {
			...p,
			isHovered: h,
			isFocusVisible: p.isFocusVisible,
			selectionMode: s.selectionMode,
			selectionBehavior: s.selectionBehavior,
			hasSubmenu: !!e[`aria-haspopup`],
			isOpen: e[`aria-expanded`] === `true`
		}
	}), _ = e.href ? S.a : S.div, x = y(e, { global: !0 });
	return delete x.id, delete x.onClick, U.createElement(_, {
		...C(x, g, l, m),
		ref: o,
		"data-disabled": p.isDisabled || void 0,
		"data-hovered": h || void 0,
		"data-focused": p.isFocused || void 0,
		"data-focus-visible": p.isFocusVisible || void 0,
		"data-pressed": p.isPressed || void 0,
		"data-selected": p.isSelected || void 0,
		"data-selection-mode": s.selectionMode === `none` ? void 0 : s.selectionMode,
		"data-has-submenu": !!e[`aria-haspopup`] || void 0,
		"data-open": e[`aria-expanded`] === `true` || void 0
	}, U.createElement(O, { values: [
		[We, { slots: {
			[b]: u,
			label: u,
			description: d
		} }],
		[He, f],
		[he, { isSelected: p.isSelected }]
	] }, g.children));
});
Qe(Je, function(e, t, n) {
	let r = (0, U.useContext)(X), { isLoading: i, onLoadMore: a, scrollOffset: o, ...s } = e, c = (0, U.useRef)(null), l = (0, U.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: c,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]);
	xe(l, c);
	let u = v({
		...s,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-MenuLoadingIndicator`,
		values: void 0
	});
	return U.createElement(U.Fragment, null, U.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: Ce(!0)
	}, U.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: c,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), i && u.children && U.createElement(U.Fragment, null, U.createElement(S.div, {
		...C(y(e, { global: !0 }), { tabIndex: -1 }),
		...u,
		role: `menuitem`,
		ref: t
	}, u.children)));
});
function fr(e, t) {
	let { role: n = `dialog`, isEntering: r } = e, i = N();
	i = e[`aria-label`] ? void 0 : i;
	let a = N();
	a = n === `alertdialog` && !e[`aria-describedby`] ? a : void 0;
	let o = (0, U.useRef)(!1);
	(0, U.useEffect)(() => {
		if (!r && t.current && !d(t.current)) {
			P(t.current);
			let e = setTimeout(() => {
				(p() === t.current || p() === document.body) && (o.current = !0, t.current && (t.current.blur(), P(t.current)), o.current = !1);
			}, 500);
			return () => {
				clearTimeout(e);
			};
		}
	}, [t, r]), cn(), (0, U.useRef)(!1), (0, U.useEffect)(() => {});
	let s = e[`aria-describedby`] ?? a;
	return {
		dialogProps: {
			...y(e, { labelable: !0 }),
			role: n,
			tabIndex: -1,
			"aria-labelledby": e[`aria-labelledby`] ?? i,
			"aria-describedby": s,
			onBlur: (e) => {
				o.current && e.stopPropagation();
			}
		},
		titleProps: { id: i },
		contentProps: { id: a }
	};
}
var pr = (0, U.createContext)(null), $ = (0, U.createContext)(null);
function mr(e) {
	let t = tr(e), n = (0, U.useRef)(null), { triggerProps: r, overlayProps: i } = Jn({ type: `dialog` }, t, n);
	return r.id = L(), i[`aria-labelledby`] = r.id, x() ? null : U.createElement(O, { values: [
		[$, t],
		[Z, t],
		[pr, i],
		[Y, {
			trigger: `DialogTrigger`,
			triggerRef: n,
			id: i.id,
			"aria-labelledby": i[`aria-labelledby`]
		}]
	] }, U.createElement(Re, {
		...r,
		ref: n,
		isPressed: t.isOpen
	}, e.children));
}
var hr = (0, U.forwardRef)(function(e, t) {
	let n = e[`aria-labelledby`];
	[e, t] = A(e, t, pr);
	let { dialogProps: r, titleProps: i, contentProps: a } = fr({
		...e,
		"aria-labelledby": n
	}, t), o = (0, U.useContext)($);
	!r[`aria-label`] && !r[`aria-labelledby`] && e[`aria-labelledby`] && (r[`aria-labelledby`] = e[`aria-labelledby`]);
	let c = v({
		defaultClassName: `react-aria-Dialog`,
		className: e.className,
		style: e.style,
		children: e.children,
		values: { close: o?.close || (() => {}) }
	}), l = y(e, { global: !0 });
	return U.createElement(S.section, {
		...C(l, c, r),
		render: e.render,
		ref: t,
		slot: e.slot || void 0
	}, U.createElement(O, { values: [
		[et, { slots: {
			[b]: {},
			title: {
				...i,
				level: 2
			}
		} }],
		[We, { slots: {
			[b]: {},
			description: a
		} }],
		[s, { slots: {
			[b]: {},
			close: { onPress: () => o?.close() }
		} }]
	] }, c.children));
});
export { it as _, ir as a, or as c, Y as d, cn as f, ut as g, mt as h, $ as i, Xn as l, rn as m, hr as n, dr as o, sn as p, pr as r, ur as s, mr as t, un as u, tt as v, et as y };
