import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, At as r, Bt as i, F as a, Ft as o, G as s, Gt as c, H as l, Ht as u, I as d, J as f, Jt as p, Kt as m, Lt as h, N as g, Nt as _, Ot as v, Q as y, Qt as b, Ut as x, Vt as S, X as C, Xt as w, Yt as T, dt as E, en as D, et as ee, it as O, jt as k, kt as te, lt as A, nn as j, pt as ne, q as re, rt as M, st as ie, tn as N, tt as P, v as ae, wt as F, xt as I, yt as L, z as oe, zt as R } from "./useOverflow.Dq483xd0.js";
import { n as se, t as ce } from "./react-dom.B9zIfLd2.js";
import { a as le, i as ue, n as z, r as de, t as fe } from "./useOverlayTriggerState.DoeSTtz6.js";
import { n as B, t as pe } from "./ariaHideOutside.xN9ixrHd.js";
import { c as me, n as V, s as he, t as ge } from "./FocusScope.aBBixRPA.js";
import { c as _e, l as ve, n as ye, r as be, t as xe } from "./useLoadMoreSentinel.CCe53T__.js";
import { g as Se, i as Ce, l as we, n as Te, r as Ee, u as De, v as Oe, x as ke, y as Ae } from "./useCollection.DQc_Iacd.js";
import { a as je, n as Me, o as H, r as Ne, s as Pe } from "./Autocomplete.CGc8yklO.js";
import { n as Fe } from "./useLocalizedStringFormatter.CDC-m-oP.js";
import { t as Ie } from "./VisuallyHidden.CPLGlJAY.js";
import { n as Le, t as Re } from "./PressResponder.QDRXAFUG.js";
import { n as ze } from "./PortalProvider.C0xkHnu_.js";
import { n as Be, t as Ve } from "./animation.g7Aw7eVY.js";
import { n as He } from "./Keyboard.CpsLyzdv.js";
import { n as Ue } from "./Separator.D8LVqGJ4.js";
import { n as We } from "./Text.DXbJB4jb.js";
import { d as Ge, f as Ke, i as qe, l as Je, n as Ye, r as Xe, s as Ze, t as Qe } from "./CollectionBuilder.OeX_9-Zv.js";
import { t as $e } from "./useTreeState.CSRkTIkq.js";
var U = e(se(), 1), et = (0, U.createContext)({}), tt = (0, U.forwardRef)(function(e, t) {
	[e, t] = S(e, t, et);
	let { children: n, level: r = 3, className: i, ...a } = e, o = m[`h${r}`];
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
	}), o = P((e) => {
		n && rt(e, t) && (i && i(e), a.current.isPointerDown = !0);
	}), s = P((e) => {
		n && n(e);
	});
	(0, U.useEffect)(() => {
		let e = a.current;
		if (r) return;
		let n = t.current, i = h(n);
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
	let n = _(e);
	if (n) {
		let e = n.ownerDocument;
		if (!e || !te(e.documentElement, n) || n.closest(`[data-react-aria-top-layer]`)) return !1;
	}
	return t.current ? !e.composedPath().includes(t.current) : !1;
}
var W = [];
function it(e, t) {
	let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: o = !1, isKeyboardDismissDisabled: s = !1, shouldCloseOnInteractOutside: c } = e, l = (0, U.useRef)(void 0);
	(0, U.useEffect)(() => {
		if (i && !W.includes(t)) return W.push(t), () => {
			let e = W.indexOf(t);
			e >= 0 && W.splice(e, 1);
		};
	}, [i, t]);
	let u = () => {
		W[W.length - 1] === t && n && n();
	}, d = (e) => {
		let n = W[W.length - 1];
		l.current = n, (!c || c(_(e))) && n === t && e.stopPropagation();
	}, f = (e) => {
		(!c || c(_(e))) && (W[W.length - 1] === t && e.stopPropagation(), l.current === t && u()), l.current = void 0;
	}, { keyboardProps: p } = C({ shortcuts: { Escape: () => {
		if (!s) u();
		else return !1;
	} } });
	nt({
		ref: t,
		onInteractOutside: o && i ? f : void 0,
		onInteractOutsideStart: d
	});
	let { focusWithinProps: m } = a({
		isDisabled: !r,
		onBlurWithin: (e) => {
			e.relatedTarget && !ge(e.relatedTarget) && (!c || c(e.relatedTarget)) && n?.();
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
	if (!e && n && L() && !t.aborted) window.clearInterval(G.get(window)), G.set(window, lt(at));
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
			let t = document.hasFocus() ? k() : null, n = Pe(t);
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
			let t = document.hasFocus() ? k() : null, n = Pe(t);
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
	N(() => {
		if (!t) return J++, J === 1 && (pt = F() && L() ? gt() : ht(n)), () => {
			J--, J === 0 && pt();
		};
	}, [t, n]);
}
function ht(e) {
	let t = window.innerWidth - document.documentElement.clientWidth;
	return j(t > 0 && (`scrollbarGutter` in document.documentElement.style ? o(document.documentElement, `scrollbar-gutter`, `stable`) : o(document.documentElement, `padding-right`, `${t}px`)), o(document.documentElement, `overflow`, `hidden`), e && vt(), e && je() && _t());
}
function gt() {
	let e = o(document.documentElement, `overflow`, `hidden`), t, n = !1, r = (e) => {
		let r = _(e);
		t = Se(r, !0) ? r : ve(r, !0), n = !1;
		let i = r.ownerDocument.defaultView.getSelection();
		i && !i.isCollapsed && i.containsNode(r, !0) && (n = !0), e.composedPath().some((e) => e instanceof HTMLInputElement && e.type === `range`) && (n = !0), `selectionStart` in r && `selectionEnd` in r && r.selectionStart < r.selectionEnd && r.ownerDocument.activeElement === r && (n = !0);
	}, i = document.createElement(`style`), a = oe();
	a && (i.nonce = a), i.textContent = `@layer {
  * {
    overscroll-behavior: contain;
  }
}`, document.head.prepend(i);
	let s = (e) => {
		e.touches.length === 2 || n || (!t || t === document.documentElement || t === document.body || t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth) && e.preventDefault();
	}, c = vt(), l = j(R(document, `touchstart`, r, {
		passive: !1,
		capture: !0
	}), R(document, `touchmove`, s, {
		passive: !1,
		capture: !0
	}), _t());
	return () => {
		e(), l(), i.remove(), c();
	};
}
function _t() {
	return R(document, `blur`, (e) => {
		let t = _(e), n = e.relatedTarget;
		n && Pe(n) ? n.focus() : n || (t.parentElement?.closest(`[tabindex]`))?.focus({ preventScroll: !0 });
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
					k() === this && yt(this);
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
	let { triggerRef: n, popoverRef: r, groupRef: i, isNonModal: o, isKeyboardDismissDisabled: s, shouldCloseOnInteractOutside: c, ...l } = e, u = l.trigger === `SubmenuTrigger`, { overlayProps: d, underlayProps: f } = it({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !o || u,
		isKeyboardDismissDisabled: s,
		shouldCloseOnInteractOutside: c
	}, i ?? r), { overlayProps: p, arrowProps: m, placement: h, triggerAnchorPoint: g } = z({
		...l,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: o && !u ? t.close : null,
		getTargetRect: l.getTargetRect ?? (t.point ? () => new DOMRect(t.point.x, t.point.y, 0, 0) : void 0)
	});
	mt({ isDisabled: o || !t.isOpen }), (0, U.useEffect)(() => {
		if (t.isOpen && r.current) return o ? pe(i?.current ?? r.current) : B([i?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		o,
		t.isOpen,
		r,
		i
	]);
	let { focusWithinProps: _ } = a(e);
	return {
		popoverProps: w(d, p, _),
		arrowProps: m,
		underlayProps: f,
		placement: h,
		triggerAnchorPoint: g
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
	let { onDismiss: t, ...n } = e, r = Fe(nn(tn), `@react-aria/overlays`), i = ee(n, r.format(`dismiss`)), a = () => {
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
	let t = D(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [i, a] = (0, U.useState)(!1), o = (0, U.useMemo)(() => ({
		contain: i,
		setContain: a
	}), [i, a]), { getContainer: s } = ze();
	if (!e.portalContainer && s && (n = s()), !n) return null;
	let c = e.children;
	return e.disableFocusManagement || (c = U.createElement(V, {
		restoreFocus: !0,
		contain: (e.shouldContainFocus || i) && !r
	}, c)), c = U.createElement(on.Provider, { value: o }, U.createElement(Le, null, U.createElement(f.Provider, { value: null }, c))), an.createPortal(c, n);
}
function cn() {
	let e = (0, U.useContext)(on)?.setContain;
	N(() => {
		e?.(!0);
	}, [e]);
}
var Y = (0, U.createContext)(null), ln = (0, U.createContext)(null), un = (0, U.forwardRef)(function(e, n) {
	[e, n] = S(e, n, Y);
	let r = (0, U.useContext)($), i = fe(e), a = e.isOpen != null || e.defaultOpen != null || !r ? i : r, o = Ve(n, a.isOpen), c = e.isExiting || !e.shouldSkipAnimation && o || !1, l = s(), { direction: u } = t();
	if (l) {
		let t = e.children;
		return typeof t == `function` && (t = t({
			trigger: e.trigger || null,
			placement: `bottom`,
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), U.createElement(U.Fragment, null, t);
	}
	return a && !a.isOpen && !c ? null : U.createElement(dn, {
		...e,
		triggerRef: e.triggerRef,
		state: a,
		popoverRef: n,
		isExiting: c,
		dir: u
	});
});
function dn({ state: e, isExiting: t, UNSTABLE_portalContainer: n, clearContexts: i, ...a }) {
	let o = (0, U.useRef)(null), s = (0, U.useRef)(null), c = (0, U.useContext)(ln), d = c && a.trigger === `SubmenuTrigger`, [f, p] = (0, U.useState)(!1), { popoverProps: h, underlayProps: g, arrowProps: _, placement: v, triggerAnchorPoint: b } = bt({
		...a,
		offset: a.offset ?? 8,
		arrowRef: o,
		groupRef: d ? c : s
	}, e), x = a.popoverRef, S = Be(x, !!v && f), C = a.isEntering || !a.shouldSkipAnimation && S || !1, T = u({
		...a,
		defaultClassName: `react-aria-Popover`,
		values: {
			trigger: a.trigger || null,
			placement: v,
			isEntering: C,
			isExiting: t
		}
	}), E = !a.isNonModal || a.trigger === `SubmenuTrigger` || a.trigger === `PreviewTrigger`, [D, ee] = (0, U.useState)(a.trigger === `PreviewTrigger`);
	N(() => {
		x.current && ee(E && !x.current.querySelector(`[role=dialog]`));
	}, [x, E]), (0, U.useEffect)(() => {
		D && a.trigger !== `PreviewTrigger` && (a.trigger !== `SubmenuTrigger` || M() !== `pointer`) && x.current && !r(x.current) && y(x.current);
	}, [
		D,
		x,
		a.trigger
	]);
	let O = (0, U.useMemo)(() => {
		let e = T.children;
		for (let t of [Y, ...i ?? []]) e = U.createElement(t.Provider, { value: null }, e);
		return e;
	}, [T.children, i]), [k, te] = (0, U.useState)(null), A = (0, U.useCallback)(() => {
		a.triggerRef.current && te(a.triggerRef.current.getBoundingClientRect().width + `px`);
	}, [a.triggerRef]);
	N(A, [A]), de({
		ref: T.style?.[`--trigger-width`] ? void 0 : a.triggerRef,
		onResize: A
	});
	let j = {
		...h.style,
		"--trigger-anchor-point": b ? `${b.x}px ${b.y}px` : void 0,
		...T.style,
		"--trigger-width": T.style?.[`--trigger-width`] || k
	};
	N(() => ut(() => p(!0)), []);
	let ne = U.createElement(m.div, {
		...w(l(a, { global: !0 }), h),
		...T,
		id: D ? a.id : void 0,
		role: D ? `dialog` : void 0,
		tabIndex: D ? -1 : void 0,
		"aria-label": a[`aria-label`],
		"aria-labelledby": a[`aria-labelledby`],
		ref: x,
		slot: a.slot || void 0,
		style: j,
		dir: a.dir,
		"data-trigger": a.trigger,
		"data-placement": v,
		"data-entering": C || void 0,
		"data-exiting": t || void 0
	}, !a.isNonModal && U.createElement(rn, { onDismiss: e.close }), U.createElement(le.Provider, { value: {
		..._,
		placement: v,
		ref: o
	} }, O), U.createElement(rn, { onDismiss: e.close }));
	return d ? U.createElement(sn, {
		...a,
		shouldContainFocus: D && a.trigger !== `PreviewTrigger`,
		isExiting: t,
		portalContainer: n ?? c?.current ?? void 0
	}, ne) : U.createElement(sn, {
		...a,
		shouldContainFocus: D && a.trigger !== `PreviewTrigger`,
		isExiting: t,
		portalContainer: n
	}, !a.isNonModal && e.isOpen && U.createElement(`div`, {
		"data-testid": `underlay`,
		...g,
		style: {
			position: `fixed`,
			inset: 0
		}
	}), U.createElement(`div`, {
		ref: s,
		style: { display: `contents` }
	}, U.createElement(ln.Provider, { value: s }, ne)));
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
	return t ? { contextMenuProps: w(F() ? r : {}, {
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
			if (I() && e.ctrlKey && e.key === `Enter`) {
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
function Jn(e, t, r) {
	let { type: i } = e, { isOpen: a } = t;
	(0, U.useEffect)(() => {
		r && r.current && ue.set(r.current, t.close);
	});
	let o;
	i === `menu` ? o = !0 : i === `listbox` && (o = `listbox`);
	let s = n();
	return {
		triggerProps: {
			"aria-haspopup": o,
			"aria-expanded": a,
			"aria-controls": a ? s : void 0,
			onPress: t.toggle
		},
		overlayProps: { id: s }
	};
}
function Yn(e) {
	return e && e.__esModule ? e.default : e;
}
function Xn(e, t, r) {
	let { type: i = `menu`, isDisabled: a, trigger: o = `press` } = e, s = n(), { triggerProps: c, overlayProps: l } = Jn({ type: i }, t, r), u = (e, n, r = `first`) => {
		if (!e || n.isDefaultPrevented()) return !1;
		t.toggle(r);
	}, { keyboardProps: d } = C({
		isDisabled: a,
		shortcuts: {
			Enter: (e) => u(o !== `longPress`, e, `first`),
			" ": (e) => u(o !== `longPress`, e, `first`),
			ArrowDown: (e) => u(o !== `longPress`, e, `first`),
			ArrowUp: (e) => u(o !== `longPress`, e, `last`),
			"Alt+Enter": (e) => u(o === `longPress`, e, `first`),
			"Alt+ ": (e) => u(o === `longPress`, e, `first`),
			"Alt+ArrowDown": (e) => u(!0, e, `first`),
			"Alt+ArrowUp": (e) => u(!0, e, `last`)
		}
	}), f = Fe(Yn(Kn), `@react-aria/menu`), { longPressProps: p } = De({
		isDisabled: a || o !== `longPress`,
		accessibilityDescription: f.format(`longPressMessage`),
		onLongPressStart() {
			t.close();
		},
		onLongPress() {
			t.open(`first`);
		}
	}), m = {
		preventFocusOnPress: !0,
		onPressStart(e) {
			e.pointerType !== `touch` && e.pointerType !== `keyboard` && !a && (v(e.target), t.open(e.pointerType === `virtual` ? `first` : null));
		},
		onPress(e) {
			e.pointerType === `touch` && !a && (v(e.target), t.toggle());
		}
	};
	delete c.onPress;
	let { contextMenuProps: h } = qn({ onContextMenu(e) {
		let n = e.target.getBoundingClientRect();
		t.setPoint({
			x: n.x + e.x,
			y: n.y + e.y
		}), t.open();
	} });
	(0, U.useEffect)(() => {
		if (t.isOpen && o === `contextMenu`) {
			let e = (e) => {
				(e.button === 2 || e.button === 0 && e.ctrlKey === !0) && _(e) === document.body && t.close();
			};
			return document.addEventListener(`mousedown`, e), () => document.removeEventListener(`mousedown`, e);
		}
	}, [t, o]);
	let g;
	if (o === `press`) g = {
		...m,
		...d
	};
	else if (o === `longPress`) g = {
		...p,
		...d
	};
	else if (o === `contextMenu`) {
		g = h;
		let { "aria-haspopup": e, "aria-expanded": t, "aria-controls": n, ...r } = c;
		c = r;
	}
	return {
		menuTriggerProps: {
			...c,
			...g,
			id: s
		},
		menuProps: {
			...l,
			"aria-labelledby": s,
			autoFocus: t.focusStrategy || !0,
			onClose: t.close
		}
	};
}
var Zn = new WeakMap();
function Qn(e, t, n) {
	let { shouldFocusWrap: r = !0, onKeyDown: i, onKeyUp: a, ...o } = e;
	!e[`aria-label`] && e[`aria-labelledby`];
	let s = l(e, { labelable: !0 }), { listProps: c } = be({
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
	}), { menuProps: w(s, {
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
function $n(e, t, n) {
	let { id: r, key: i, closeOnSelect: a, shouldCloseOnSelect: o, isVirtualized: s, "aria-haspopup": c, onPressStart: u, onPressUp: f, onPress: p, onPressChange: m, onPressEnd: h, onClick: v, onHoverStart: y, onHoverChange: x, onHoverEnd: S, onKeyDown: T, onKeyUp: D, onFocus: ee, onFocusChange: k, onBlur: te, selectionManager: j = t.selectionManager } = e, M = !!c, N = M && e[`aria-expanded`] === `true`, P = e.isDisabled ?? j.isDisabled(i), ae = e.isSelected ?? j.isSelected(i), F = Zn.get(t), I = t.collection.getItem(i), L = e.onClose || F.onClose, oe = ne(), R = () => {
		if (!M && (I?.props?.onAction ? I.props.onAction() : e.onAction && e.onAction(i), F.onAction)) {
			let e = F.onAction;
			e(i, I?.value);
		}
	}, se = `menuitem`;
	M || (j.selectionMode === `single` ? se = `menuitemradio` : j.selectionMode === `multiple` && (se = `menuitemcheckbox`));
	let ce = b(), le = b(), ue = b(), z = {
		id: r,
		"aria-disabled": P || void 0,
		role: se,
		"aria-label": e[`aria-label`],
		"aria-labelledby": ce,
		"aria-describedby": [
			e[`aria-describedby`],
			le,
			ue
		].filter(Boolean).join(` `) || void 0,
		"aria-controls": e[`aria-controls`],
		"aria-haspopup": c,
		"aria-expanded": e[`aria-expanded`]
	};
	if (j.selectionMode !== `none` && !M && (z[`aria-checked`] = ae), s) {
		let e = Number(I?.index);
		z[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, z[`aria-setsize`] = ye(t.collection);
	}
	let de = (0, U.useRef)(!1), fe = (e) => {
		m?.(e), de.current = e;
	}, B = (0, U.useRef)(null), pe = (e) => {
		e.pointerType !== `keyboard` && (B.current = { pointerType: e.pointerType }), e.pointerType === `mouse` && (de.current || e.target.click()), f?.(e);
	}, me = (e) => {
		v?.(e), R(), A(e, oe, I.props.href, I?.props.routerOptions);
		let t = B.current?.pointerType === `keyboard` ? B.current?.key === `Enter` || j.selectionMode === `none` || j.isLink(i) : j.selectionMode !== `multiple` || j.isLink(i);
		t = o ?? a ?? t, L && !M && t && L(), B.current = null;
	}, { itemProps: V, isFocused: he } = we({
		id: r,
		selectionManager: j,
		key: i,
		ref: n,
		shouldSelectOnPressUp: !0,
		allowsDifferentPressOrigin: !0,
		linkBehavior: `none`,
		shouldUseVirtualFocus: F.shouldUseVirtualFocus
	}), { pressProps: ge, isPressed: _e } = d({
		onPressStart: u,
		onPress: p,
		onPressUp: pe,
		onPressChange: fe,
		onPressEnd: h,
		isDisabled: P
	}), { hoverProps: ve } = g({
		isDisabled: P,
		onHoverStart(e) {
			!ie() && !(N && c) && (j.setFocused(!0), j.setFocusedKey(i)), y?.(e);
		},
		onHoverChange: x,
		onHoverEnd: S
	}), { keyboardProps: be } = C({
		shortcuts: {
			" ": (e) => {
				B.current = {
					pointerType: `keyboard`,
					key: ` `
				}, _(e).click(), O(`keyboard`);
			},
			Enter: (e) => {
				B.current = {
					pointerType: `keyboard`,
					key: `Enter`
				};
				let t = _(e);
				if (t.tagName !== `A`) t.click(), O(`keyboard`);
				else return O(`keyboard`), {
					shouldPreventDefault: !1,
					shouldContinuePropagation: !1
				};
			}
		},
		onKeyDown: T,
		onKeyUp: D
	}), { focusableProps: xe } = re({
		onBlur: te,
		onFocus: ee,
		onFocusChange: k
	}, n), Se = l(I?.props);
	delete Se.id;
	let Ce = E(I?.props);
	return {
		menuItemProps: {
			...z,
			...w(Se, Ce, M ? {
				onFocus: V.onFocus,
				"data-collection": V[`data-collection`],
				"data-key": V[`data-key`]
			} : V, ge, ve, be, xe, F.shouldUseVirtualFocus || M ? { onMouseDown: (e) => e.preventDefault() } : void 0, P ? void 0 : { onClick: me }),
			tabIndex: V.tabIndex != null && N && !F.shouldUseVirtualFocus ? -1 : V.tabIndex
		},
		labelProps: { id: ce },
		descriptionProps: { id: le },
		keyboardShortcutProps: { id: ue },
		isFocused: he,
		isFocusVisible: he && j.isFocused && ie() && !N,
		isSelected: ae,
		isPressed: _e,
		isDisabled: P
	};
}
function er(e) {
	let { heading: t, "aria-label": r } = e, i = n();
	return {
		itemProps: { role: `presentation` },
		headingProps: t ? {
			id: i,
			role: `presentation`
		} : {},
		groupProps: {
			role: `group`,
			"aria-label": r,
			"aria-labelledby": t ? i : void 0
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
	let t = tr(e), n = (0, U.useRef)(null), { menuTriggerProps: r, menuProps: a } = Xn({
		...e,
		type: `menu`
	}, t, n), o = (0, U.useRef)(null);
	return s() ? null : U.createElement(i, { values: [
		[nr, {
			...a,
			ref: o
		}],
		[$, t],
		[Z, t],
		[Y, {
			trigger: `MenuTrigger`,
			triggerRef: n,
			scrollRef: o,
			placement: `bottom start`,
			"aria-labelledby": a[`aria-labelledby`],
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
	return [e, t] = S(e, t, nr), U.createElement(Ye, { content: U.createElement(qe, e) }, (n) => U.createElement(sr, {
		props: e,
		collection: n,
		menuRef: t
	}));
});
function sr({ props: e, collection: t, menuRef: n }) {
	[e, n] = S(e, n, Ne);
	let { filter: r, ...a } = e, o = (0, U.useMemo)(() => r ? t.filter(r) : t, [t, r]), s = $e({
		...e,
		collection: o,
		children: void 0
	}), c = (0, U.useContext)(Z), { isVirtualized: d, CollectionRoot: f } = (0, U.useContext)(Oe), { menuProps: p } = Qn({
		...e,
		isVirtualized: d,
		onClose: e.onClose || c?.close
	}, s, n), h = u({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Menu`,
		values: { isEmpty: s.collection.size === 0 }
	}), g = null;
	s.collection.size === 0 && e.renderEmptyState && (g = U.createElement(`div`, {
		role: `menuitem`,
		style: { display: `contents` }
	}, e.renderEmptyState()));
	let _ = l(e, { global: !0 });
	return U.createElement(V, null, U.createElement(m.div, {
		...w(_, h, p),
		ref: n,
		slot: e.slot || void 0,
		"data-empty": s.collection.size === 0 || void 0,
		onScroll: e.onScroll
	}, U.createElement(i, { values: [
		[X, s],
		[Ue, { elementType: `div` }],
		[ke, {
			name: `MenuSection`,
			render: lr
		}],
		[ar, {
			parentMenuRef: n,
			shouldUseVirtualFocus: a?.shouldUseVirtualFocus
		}],
		[Q, { shouldCloseOnSelect: e.shouldCloseOnSelect }],
		[Ne, null],
		[Me, null],
		[rr, s.selectionManager],
		[Z, c ?? tr({})]
	] }, U.createElement(me, null, U.createElement(f, {
		collection: s.collection,
		persistedKeys: Ae(s.selectionManager.focusedKey),
		scrollRef: n
	}))), g));
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
	let a = (0, U.useContext)(X), { CollectionBranch: o } = (0, U.useContext)(Oe), [s, c] = x(), { headingProps: d, groupProps: f } = er({
		heading: c,
		"aria-label": n.props[`aria-label`] ?? void 0
	}), h = u({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		className: n.props?.className,
		style: n.props?.style,
		values: void 0
	}), g = (0, U.useContext)(rr), _ = Ee(e), v = e.selectionMode == null ? g : new cr(g, _), y = p(Q)?.shouldCloseOnSelect, b = l(e, { global: !0 });
	return delete b.id, U.createElement(m.section, {
		...w(b, h, f),
		ref: t
	}, U.createElement(i, { values: [
		[_e, {
			...d,
			ref: s
		}],
		[rr, v],
		[Q, { shouldCloseOnSelect: e.shouldCloseOnSelect ?? y }]
	] }, U.createElement(o, {
		collection: a.collection,
		parent: n
	})));
}
var ur = Xe(Ze, lr), Q = (0, U.createContext)(null), dr = Qe(Ke, function(e, t, n) {
	[e, t] = S(e, t, Q);
	let r = p(Q)?.id, a = (0, U.useContext)(X), o = T(t), s = (0, U.useContext)(rr), { isVirtualized: d } = (0, U.useContext)(Oe), { menuItemProps: f, labelProps: h, descriptionProps: _, keyboardShortcutProps: v, ...y } = $n({
		...e,
		id: r,
		key: n.key,
		selectionManager: s,
		isVirtualized: d
	}, a, o), { hoverProps: b, isHovered: x } = g({ isDisabled: y.isDisabled }), C = u({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-MenuItem`,
		values: {
			...y,
			isHovered: x,
			isFocusVisible: y.isFocusVisible,
			selectionMode: s.selectionMode,
			selectionBehavior: s.selectionBehavior,
			hasSubmenu: !!e[`aria-haspopup`],
			isOpen: e[`aria-expanded`] === `true`
		}
	}), E = e.href ? m.a : m.div, D = l(e, { global: !0 });
	return delete D.id, delete D.onClick, U.createElement(E, {
		...w(D, C, f, b),
		ref: o,
		"data-disabled": y.isDisabled || void 0,
		"data-hovered": x || void 0,
		"data-focused": y.isFocused || void 0,
		"data-focus-visible": y.isFocusVisible || void 0,
		"data-pressed": y.isPressed || void 0,
		"data-selected": y.isSelected || void 0,
		"data-selection-mode": s.selectionMode === `none` ? void 0 : s.selectionMode,
		"data-has-submenu": !!e[`aria-haspopup`] || void 0,
		"data-open": e[`aria-expanded`] === `true` || void 0
	}, U.createElement(i, { values: [
		[We, { slots: {
			[c]: h,
			label: h,
			description: _
		} }],
		[He, v],
		[he, { isSelected: y.isSelected }]
	] }, C.children));
});
Qe(Je, function(e, t, n) {
	let r = (0, U.useContext)(X), { isLoading: i, onLoadMore: a, scrollOffset: o, ...s } = e, c = (0, U.useRef)(null), d = (0, U.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: c,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]);
	xe(d, c);
	let f = u({
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
	})), i && f.children && U.createElement(U.Fragment, null, U.createElement(m.div, {
		...w(l(e, { global: !0 }), { tabIndex: -1 }),
		...f,
		role: `menuitem`,
		ref: t
	}, f.children)));
});
function fr(e, t) {
	let { role: n = `dialog`, isEntering: i } = e, a = b();
	a = e[`aria-label`] ? void 0 : a;
	let o = b();
	o = n === `alertdialog` && !e[`aria-describedby`] ? o : void 0;
	let s = (0, U.useRef)(!1);
	(0, U.useEffect)(() => {
		if (!i && t.current && !r(t.current)) {
			y(t.current);
			let e = setTimeout(() => {
				(k() === t.current || k() === document.body) && (s.current = !0, t.current && (t.current.blur(), y(t.current)), s.current = !1);
			}, 500);
			return () => {
				clearTimeout(e);
			};
		}
	}, [t, i]), cn(), (0, U.useRef)(!1), (0, U.useEffect)(() => {});
	let c = e[`aria-describedby`] ?? o;
	return {
		dialogProps: {
			...l(e, { labelable: !0 }),
			role: n,
			tabIndex: -1,
			"aria-labelledby": e[`aria-labelledby`] ?? a,
			"aria-describedby": c,
			onBlur: (e) => {
				s.current && e.stopPropagation();
			}
		},
		titleProps: { id: a },
		contentProps: { id: o }
	};
}
var pr = (0, U.createContext)(null), $ = (0, U.createContext)(null);
function mr(e) {
	let t = tr(e), r = (0, U.useRef)(null), { triggerProps: a, overlayProps: o } = Jn({ type: `dialog` }, t, r);
	return a.id = n(), o[`aria-labelledby`] = a.id, s() ? null : U.createElement(i, { values: [
		[$, t],
		[Z, t],
		[pr, o],
		[Y, {
			trigger: `DialogTrigger`,
			triggerRef: r,
			id: o.id,
			"aria-labelledby": o[`aria-labelledby`]
		}]
	] }, U.createElement(Re, {
		...a,
		ref: r,
		isPressed: t.isOpen
	}, e.children));
}
var hr = (0, U.forwardRef)(function(e, t) {
	let n = e[`aria-labelledby`];
	[e, t] = S(e, t, pr);
	let { dialogProps: r, titleProps: a, contentProps: o } = fr({
		...e,
		"aria-labelledby": n
	}, t), s = (0, U.useContext)($);
	!r[`aria-label`] && !r[`aria-labelledby`] && e[`aria-labelledby`] && (r[`aria-labelledby`] = e[`aria-labelledby`]);
	let d = u({
		defaultClassName: `react-aria-Dialog`,
		className: e.className,
		style: e.style,
		children: e.children,
		values: { close: s?.close || (() => {}) }
	}), f = l(e, { global: !0 });
	return U.createElement(m.section, {
		...w(f, d, r),
		render: e.render,
		ref: t,
		slot: e.slot || void 0
	}, U.createElement(i, { values: [
		[et, { slots: {
			[c]: {},
			title: {
				...a,
				level: 2
			}
		} }],
		[We, { slots: {
			[c]: {},
			description: o
		} }],
		[ae, { slots: {
			[c]: {},
			close: { onPress: () => s?.close() }
		} }]
	] }, d.children));
});
export { it as _, ir as a, or as c, Y as d, cn as f, ut as g, mt as h, $ as i, Xn as l, rn as m, hr as n, dr as o, sn as p, pr as r, ur as s, mr as t, un as u, tt as v, et as y };
