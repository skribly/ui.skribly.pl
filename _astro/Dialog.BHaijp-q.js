import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, Bt as n, C as r, Ct as i, Dt as a, E as o, Et as s, G as c, H as l, I as u, It as d, L as f, Lt as p, M as m, Mt as h, Nt as g, P as _, Pt as v, R as y, Rt as b, Tt as x, V as S, Y as ee, Z as C, _ as w, _t as T, at as E, b as te, ct as D, ft as ne, ht as O, j as k, k as A, kt as j, mt as M, n as N, pt as P, q as re, rt as F, wt as I, xt as L, y as R, yt as z, z as ie, zt as B } from "./createLucideIcon.npgQlVHx.js";
import { n as V, t as ae } from "./react-dom.B9zIfLd2.js";
import { a as oe, i as se, n as H, r as ce, t as le } from "./useOverlayTriggerState.OsbwJUOw.js";
import { n as U, t as ue } from "./ariaHideOutside.Ci13GWDQ.js";
import { c as de, n as W, s as fe, t as pe } from "./FocusScope.Ba7RJw7M.js";
import { c as me, l as he, n as ge, r as _e, t as ve } from "./useLoadMoreSentinel.DKpPMiER.js";
import { C as ye, a as be, b as xe, d as Se, f as Ce, i as we, n as Te, o as Ee, t as De, v as Oe, x as ke } from "./animation.BhtQe7Yj.js";
import { a as Ae, n as je, o as G, r as Me, s as Ne } from "./Autocomplete.BUqxPt-N.js";
import { n as Pe } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { t as Fe } from "./VisuallyHidden.DXeJgMmE.js";
import { n as Ie, t as Le } from "./PressResponder.7X6_iwcu.js";
import { n as Re } from "./PortalProvider.C0xkHnu_.js";
import { n as ze } from "./Keyboard.qx6AryGY.js";
import { n as Be } from "./Separator.BXwoAIpL.js";
import { n as Ve } from "./Text.DxhsPAdy.js";
import { d as He, f as Ue, i as We, l as Ge, n as Ke, r as qe, s as Je, t as Ye } from "./CollectionBuilder.Bxdh8Jqj.js";
import { t as Xe } from "./useTreeState.COniaqXp.js";
var K = e(V(), 1), Ze = (0, K.createContext)({}), Qe = (0, K.forwardRef)(function(e, n) {
	[e, n] = x(e, n, Ze);
	let { children: r, level: i = 3, className: a, ...o } = e, s = t[`h${i}`];
	return K.createElement(s, {
		...o,
		ref: n,
		className: a ?? `react-aria-Heading`
	}, r);
});
function $e(e) {
	let { ref: t, onInteractOutside: n, isDisabled: r, onInteractOutsideStart: i } = e, a = (0, K.useRef)({
		isPointerDown: !1,
		ignoreEmulatedMouseEvents: !1
	}), o = ie((e) => {
		n && et(e, t) && (i && i(e), a.current.isPointerDown = !0);
	}), s = ie((e) => {
		n && n(e);
	});
	(0, K.useEffect)(() => {
		let e = a.current;
		if (r) return;
		let n = t.current, i = L(n);
		if (typeof PointerEvent < `u`) {
			let n = (n) => {
				e.isPointerDown && et(n, t) && s(n), e.isPointerDown = !1;
			};
			return i.addEventListener(`pointerdown`, o, !0), i.addEventListener(`click`, n, !0), () => {
				i.removeEventListener(`pointerdown`, o, !0), i.removeEventListener(`click`, n, !0);
			};
		}
	}, [t, r]);
}
function et(e, t) {
	if (e.button > 0) return !1;
	let n = T(e);
	if (n) {
		let e = n.ownerDocument;
		if (!e || !P(e.documentElement, n) || n.closest(`[data-react-aria-top-layer]`)) return !1;
	}
	return t.current ? !e.composedPath().includes(t.current) : !1;
}
var q = [];
function tt(e, t) {
	let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: a = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: s } = e, c = (0, K.useRef)(void 0);
	(0, K.useEffect)(() => {
		if (i && !q.includes(t)) return q.push(t), () => {
			let e = q.indexOf(t);
			e >= 0 && q.splice(e, 1);
		};
	}, [i, t]);
	let l = () => {
		q[q.length - 1] === t && n && n();
	}, u = (e) => {
		let n = q[q.length - 1];
		c.current = n, (!s || s(T(e))) && n === t && e.stopPropagation();
	}, d = (e) => {
		(!s || s(T(e))) && (q[q.length - 1] === t && e.stopPropagation(), c.current === t && l()), c.current = void 0;
	}, { keyboardProps: f } = _({ shortcuts: { Escape: () => {
		if (!o) l();
		else return !1;
	} } });
	$e({
		ref: t,
		onInteractOutside: a && i ? d : void 0,
		onInteractOutsideStart: u
	});
	let { focusWithinProps: p } = R({
		isDisabled: !r,
		onBlurWithin: (e) => {
			e.relatedTarget && !pe(e.relatedTarget) && (!s || s(e.relatedTarget)) && n?.();
		}
	});
	return {
		overlayProps: {
			...f,
			...p
		},
		underlayProps: {}
	};
}
var nt = 200, rt = 50, it = 600, J = new WeakMap(), Y = new Set(), X = new Set();
function at(e, t) {
	let n = G();
	if (e !== n || t.aborted) for (let e of X) e(n), X.delete(e);
	if (!e && n && F() && !t.aborted) window.clearInterval(J.get(window)), J.set(window, ot(nt));
	else {
		if (e !== n || t.aborted) for (let e of Y) e(n), Y.delete(e);
		(X.size + Y.size <= 0 || t.aborted) && (window.clearInterval(J.get(window)), J.delete(window));
	}
}
function ot(e = it) {
	return window.setInterval(at, rt, G(), AbortSignal.timeout(e));
}
function st(e) {
	if (!Ae()) return e(!1), () => {};
	let t = window.requestAnimationFrame(() => {
		t = window.requestAnimationFrame(() => {
			let t = document.hasFocus() ? O() : null, n = Ne(t);
			if (G() === n || G() && !n) return e(n);
			X.add(e), J.has(window) || J.set(window, ot());
		});
	});
	return () => {
		window.cancelAnimationFrame(t), X.delete(e);
	};
}
function ct(e) {
	if (!Ae()) return e(!1), () => {};
	let t = window.requestAnimationFrame(() => {
		t = window.requestAnimationFrame(() => {
			let t = document.hasFocus() ? O() : null, n = Ne(t);
			if (G() === n) return e(n);
			Y.add(e), J.has(window) || J.set(window, ot());
		});
	});
	return () => {
		window.cancelAnimationFrame(t), Y.delete(e);
	};
}
var lt = typeof document < `u` && window.visualViewport, ut = 0, dt;
function ft(e = {}) {
	let { isDisabled: t, UNSTABLE_overrideFocus: n } = e;
	B(() => {
		if (!t) return ut++, ut === 1 && (dt = D() && F() ? mt() : pt(n)), () => {
			ut--, ut === 0 && dt();
		};
	}, [t, n]);
}
function pt(e) {
	let t = window.innerWidth - document.documentElement.clientWidth;
	return n(t > 0 && (`scrollbarGutter` in document.documentElement.style ? z(document.documentElement, `scrollbar-gutter`, `stable`) : z(document.documentElement, `padding-right`, `${t}px`)), z(document.documentElement, `overflow`, `hidden`), e && gt(), e && Ae() && ht());
}
function mt() {
	let e = z(document.documentElement, `overflow`, `hidden`), t, a = !1, o = (e) => {
		let n = T(e);
		t = Oe(n, !0) ? n : he(n, !0), a = !1;
		let r = n.ownerDocument.defaultView.getSelection();
		r && !r.isCollapsed && r.containsNode(n, !0) && (a = !0), e.composedPath().some((e) => e instanceof HTMLInputElement && e.type === `range`) && (a = !0), `selectionStart` in n && `selectionEnd` in n && n.selectionStart < n.selectionEnd && n.ownerDocument.activeElement === n && (a = !0);
	}, s = document.createElement(`style`), c = r();
	c && (s.nonce = c), s.textContent = `@layer {
  * {
    overscroll-behavior: contain;
  }
}`, document.head.prepend(s);
	let l = (e) => {
		e.touches.length === 2 || a || (!t || t === document.documentElement || t === document.body || t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth) && e.preventDefault();
	}, u = gt(), d = n(i(document, `touchstart`, o, {
		passive: !1,
		capture: !0
	}), i(document, `touchmove`, l, {
		passive: !1,
		capture: !0
	}), ht());
	return () => {
		e(), d(), s.remove(), u();
	};
}
function ht() {
	return i(document, `blur`, (e) => {
		let t = T(e), n = e.relatedTarget;
		n && Ne(n) ? n.focus() : n || (t.parentElement?.closest(`[tabindex]`))?.focus({ preventScroll: !0 });
	}, !0);
}
function gt() {
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
					O() === this && _t(this);
				};
				st((t) => t ? e() : ct(() => e()));
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
function _t(e) {
	let t = document.scrollingElement || document.documentElement, n = e;
	for (; n && n !== t && n.isConnected;) {
		let e = he(n);
		if (e !== document.documentElement && e !== document.body && e !== n) {
			let t = e.getBoundingClientRect(), r = n.getBoundingClientRect();
			if (r.top < t.top || r.bottom > t.top + n.clientHeight) {
				let n = t.bottom;
				lt && (n = Math.min(n, lt.offsetTop + lt.height));
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
function vt(e, t) {
	let { triggerRef: n, popoverRef: r, groupRef: i, isNonModal: a, isKeyboardDismissDisabled: o, shouldCloseOnInteractOutside: s, ...c } = e, l = c.trigger === `SubmenuTrigger`, { overlayProps: u, underlayProps: d } = tt({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !a || l,
		isKeyboardDismissDisabled: o,
		shouldCloseOnInteractOutside: s
	}, i ?? r), { overlayProps: f, arrowProps: p, placement: m, triggerAnchorPoint: h } = H({
		...c,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: a && !l ? t.close : null,
		getTargetRect: c.getTargetRect ?? (t.point ? () => new DOMRect(t.point.x, t.point.y, 0, 0) : void 0)
	});
	ft({ isDisabled: a || !t.isOpen }), (0, K.useEffect)(() => {
		if (t.isOpen && r.current) return a ? ue(i?.current ?? r.current) : U([i?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		a,
		t.isOpen,
		r,
		i
	]);
	let { focusWithinProps: g } = R(e);
	return {
		popoverProps: v(u, f, g),
		arrowProps: p,
		underlayProps: d,
		placement: m,
		triggerAnchorPoint: h
	};
}
var yt = {};
yt = { dismiss: `تجاهل` };
var bt = {};
bt = { dismiss: `Отхвърляне` };
var xt = {};
xt = { dismiss: `Odstranit` };
var St = {};
St = { dismiss: `Luk` };
var Ct = {};
Ct = { dismiss: `Schließen` };
var wt = {};
wt = { dismiss: `Απόρριψη` };
var Tt = {};
Tt = { dismiss: `Dismiss` };
var Et = {};
Et = { dismiss: `Descartar` };
var Dt = {};
Dt = { dismiss: `Lõpeta` };
var Ot = {};
Ot = { dismiss: `Hylkää` };
var kt = {};
kt = { dismiss: `Rejeter` };
var At = {};
At = { dismiss: `התעלם` };
var jt = {};
jt = { dismiss: `Odbaci` };
var Mt = {};
Mt = { dismiss: `Elutasítás` };
var Nt = {};
Nt = { dismiss: `Ignora` };
var Pt = {};
Pt = { dismiss: `閉じる` };
var Ft = {};
Ft = { dismiss: `무시` };
var It = {};
It = { dismiss: `Atmesti` };
var Lt = {};
Lt = { dismiss: `Nerādīt` };
var Rt = {};
Rt = { dismiss: `Lukk` };
var zt = {};
zt = { dismiss: `Negeren` };
var Bt = {};
Bt = { dismiss: `Zignoruj` };
var Vt = {};
Vt = { dismiss: `Descartar` };
var Ht = {};
Ht = { dismiss: `Dispensar` };
var Ut = {};
Ut = { dismiss: `Revocare` };
var Wt = {};
Wt = { dismiss: `Пропустить` };
var Gt = {};
Gt = { dismiss: `Zrušiť` };
var Kt = {};
Kt = { dismiss: `Opusti` };
var qt = {};
qt = { dismiss: `Odbaci` };
var Jt = {};
Jt = { dismiss: `Avvisa` };
var Yt = {};
Yt = { dismiss: `Kapat` };
var Xt = {};
Xt = { dismiss: `Скасувати` };
var Zt = {};
Zt = { dismiss: `取消` };
var Qt = {};
Qt = { dismiss: `關閉` };
var $t = {};
$t = {
	"ar-AE": yt,
	"bg-BG": bt,
	"cs-CZ": xt,
	"da-DK": St,
	"de-DE": Ct,
	"el-GR": wt,
	"en-US": Tt,
	"es-ES": Et,
	"et-EE": Dt,
	"fi-FI": Ot,
	"fr-FR": kt,
	"he-IL": At,
	"hr-HR": jt,
	"hu-HU": Mt,
	"it-IT": Nt,
	"ja-JP": Pt,
	"ko-KR": Ft,
	"lt-LT": It,
	"lv-LV": Lt,
	"nb-NO": Rt,
	"nl-NL": zt,
	"pl-PL": Bt,
	"pt-BR": Vt,
	"pt-PT": Ht,
	"ro-RO": Ut,
	"ru-RU": Wt,
	"sk-SK": Gt,
	"sl-SI": Kt,
	"sr-SP": qt,
	"sv-SE": Jt,
	"tr-TR": Yt,
	"uk-UA": Xt,
	"zh-CN": Zt,
	"zh-TW": Qt
};
function en(e) {
	return e && e.__esModule ? e.default : e;
}
function tn(e) {
	let { onDismiss: t, ...n } = e, r = Pe(en($t), `@react-aria/overlays`), i = y(n, r.format(`dismiss`)), a = () => {
		t && t();
	};
	return K.createElement(Fe, null, K.createElement(`button`, {
		...i,
		tabIndex: -1,
		onClick: a,
		style: {
			width: 1,
			height: 1
		}
	}));
}
var nn = e(ae(), 1), rn = K.createContext(null);
function an(e) {
	let t = b(), { portalContainer: n = t ? null : document.body, isExiting: r } = e, [i, a] = (0, K.useState)(!1), o = (0, K.useMemo)(() => ({
		contain: i,
		setContain: a
	}), [i, a]), { getContainer: s } = Re();
	if (!e.portalContainer && s && (n = s()), !n) return null;
	let c = e.children;
	return e.disableFocusManagement || (c = K.createElement(W, {
		restoreFocus: !0,
		contain: (e.shouldContainFocus || i) && !r
	}, c)), c = K.createElement(rn.Provider, { value: o }, K.createElement(Ie, null, K.createElement(m.Provider, { value: null }, c))), nn.createPortal(c, n);
}
function on() {
	let e = (0, K.useContext)(rn)?.setContain;
	B(() => {
		e?.(!0);
	}, [e]);
}
var Z = (0, K.createContext)(null), sn = (0, K.createContext)(null), cn = (0, K.forwardRef)(function(e, t) {
	[e, t] = x(e, t, Z);
	let n = (0, K.useContext)($), r = le(e), i = e.isOpen != null || e.defaultOpen != null || !n ? r : n, a = De(t, i.isOpen), o = e.isExiting || !e.shouldSkipAnimation && a || !1, s = A(), { direction: c } = f();
	if (s) {
		let t = e.children;
		return typeof t == `function` && (t = t({
			trigger: e.trigger || null,
			placement: `bottom`,
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), K.createElement(K.Fragment, null, t);
	}
	return i && !i.isOpen && !o ? null : K.createElement(ln, {
		...e,
		triggerRef: e.triggerRef,
		state: i,
		popoverRef: t,
		isExiting: o,
		dir: c
	});
});
function ln({ state: e, isExiting: n, UNSTABLE_portalContainer: r, clearContexts: i, ...a }) {
	let c = (0, K.useRef)(null), l = (0, K.useRef)(null), d = (0, K.useContext)(sn), f = d && a.trigger === `SubmenuTrigger`, [p, m] = (0, K.useState)(!1), { popoverProps: h, underlayProps: g, arrowProps: _, placement: y, triggerAnchorPoint: b } = vt({
		...a,
		offset: a.offset ?? 8,
		arrowRef: c,
		groupRef: f ? d : l
	}, e), x = a.popoverRef, ee = Te(x, !!y && p), C = a.isEntering || !a.shouldSkipAnimation && ee || !1, w = s({
		...a,
		defaultClassName: `react-aria-Popover`,
		values: {
			trigger: a.trigger || null,
			placement: y,
			isEntering: C,
			isExiting: n
		}
	}), T = !a.isNonModal || a.trigger === `SubmenuTrigger` || a.trigger === `PreviewTrigger`, [E, te] = (0, K.useState)(a.trigger === `PreviewTrigger`);
	B(() => {
		x.current && te(T && !x.current.querySelector(`[role=dialog]`));
	}, [x, T]), (0, K.useEffect)(() => {
		E && a.trigger !== `PreviewTrigger` && (a.trigger !== `SubmenuTrigger` || S() !== `pointer`) && x.current && !M(x.current) && u(x.current);
	}, [
		E,
		x,
		a.trigger
	]);
	let D = (0, K.useMemo)(() => {
		let e = w.children;
		for (let t of [Z, ...i ?? []]) e = K.createElement(t.Provider, { value: null }, e);
		return e;
	}, [w.children, i]), [ne, O] = (0, K.useState)(null), k = (0, K.useCallback)(() => {
		a.triggerRef.current && O(a.triggerRef.current.getBoundingClientRect().width + `px`);
	}, [a.triggerRef]);
	B(k, [k]), ce({
		ref: w.style?.[`--trigger-width`] ? void 0 : a.triggerRef,
		onResize: k
	});
	let A = {
		...h.style,
		"--trigger-anchor-point": b ? `${b.x}px ${b.y}px` : void 0,
		...w.style,
		"--trigger-width": w.style?.[`--trigger-width`] || ne
	};
	B(() => st(() => m(!0)), []);
	let j = K.createElement(t.div, {
		...v(o(a, { global: !0 }), h),
		...w,
		id: E ? a.id : void 0,
		role: E ? `dialog` : void 0,
		tabIndex: E ? -1 : void 0,
		"aria-label": a[`aria-label`],
		"aria-labelledby": a[`aria-labelledby`],
		ref: x,
		slot: a.slot || void 0,
		style: A,
		dir: a.dir,
		"data-trigger": a.trigger,
		"data-placement": y,
		"data-entering": C || void 0,
		"data-exiting": n || void 0
	}, !a.isNonModal && K.createElement(tn, { onDismiss: e.close }), K.createElement(oe.Provider, { value: {
		..._,
		placement: y,
		ref: c
	} }, D), K.createElement(tn, { onDismiss: e.close }));
	return f ? K.createElement(an, {
		...a,
		shouldContainFocus: E && a.trigger !== `PreviewTrigger`,
		isExiting: n,
		portalContainer: r ?? d?.current ?? void 0
	}, j) : K.createElement(an, {
		...a,
		shouldContainFocus: E && a.trigger !== `PreviewTrigger`,
		isExiting: n,
		portalContainer: r
	}, !a.isNonModal && e.isOpen && K.createElement(`div`, {
		"data-testid": `underlay`,
		...g,
		style: {
			position: `fixed`,
			inset: 0
		}
	}), K.createElement(`div`, {
		ref: l,
		style: { display: `contents` }
	}, K.createElement(sn.Provider, { value: l }, j)));
}
var un = {};
un = { longPressMessage: `اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة` };
var dn = {};
dn = { longPressMessage: `Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто` };
var fn = {};
fn = { longPressMessage: `Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku` };
var pn = {};
pn = { longPressMessage: `Langt tryk eller tryk på Alt + pil ned for at åbne menuen` };
var mn = {};
mn = { longPressMessage: `Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen` };
var hn = {};
hn = { longPressMessage: `Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού` };
var gn = {};
gn = { longPressMessage: `Long press or press Alt + ArrowDown to open menu` };
var _n = {};
_n = { longPressMessage: `Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú` };
var vn = {};
vn = { longPressMessage: `Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool` };
var yn = {};
yn = { longPressMessage: `Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli` };
var bn = {};
bn = { longPressMessage: `Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu.` };
var xn = {};
xn = { longPressMessage: `לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט` };
var Sn = {};
Sn = { longPressMessage: `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika` };
var Cn = {};
Cn = { longPressMessage: `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához` };
var wn = {};
wn = { longPressMessage: `Premi a lungo o premi Alt + Freccia giù per aprire il menu` };
var Tn = {};
Tn = { longPressMessage: `長押しまたは Alt+下矢印キーでメニューを開く` };
var En = {};
En = { longPressMessage: `길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기` };
var Dn = {};
Dn = { longPressMessage: `Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.` };
var On = {};
On = { longPressMessage: `Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa` };
var kn = {};
kn = { longPressMessage: `Langt trykk eller trykk Alt + PilNed for å åpne menyen` };
var An = {};
An = { longPressMessage: `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen` };
var jn = {};
jn = { longPressMessage: `Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu` };
var Mn = {};
Mn = { longPressMessage: `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu` };
var Nn = {};
Nn = { longPressMessage: `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu` };
var Pn = {};
Pn = { longPressMessage: `Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul` };
var Fn = {};
Fn = { longPressMessage: `Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню` };
var In = {};
In = { longPressMessage: `Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol` };
var Ln = {};
Ln = { longPressMessage: `Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol` };
var Rn = {};
Rn = { longPressMessage: `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni` };
var zn = {};
zn = { longPressMessage: `Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn` };
var Bn = {};
Bn = { longPressMessage: `Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın` };
var Vn = {};
Vn = { longPressMessage: `Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню` };
var Hn = {};
Hn = { longPressMessage: `长按或按 Alt + 向下方向键以打开菜单` };
var Un = {};
Un = { longPressMessage: `長按或按 Alt+向下鍵以開啟功能表` };
var Wn = {};
Wn = {
	"ar-AE": un,
	"bg-BG": dn,
	"cs-CZ": fn,
	"da-DK": pn,
	"de-DE": mn,
	"el-GR": hn,
	"en-US": gn,
	"es-ES": _n,
	"et-EE": vn,
	"fi-FI": yn,
	"fr-FR": bn,
	"he-IL": xn,
	"hr-HR": Sn,
	"hu-HU": Cn,
	"it-IT": wn,
	"ja-JP": Tn,
	"ko-KR": En,
	"lt-LT": Dn,
	"lv-LV": On,
	"nb-NO": kn,
	"nl-NL": An,
	"pl-PL": jn,
	"pt-BR": Mn,
	"pt-PT": Nn,
	"ro-RO": Pn,
	"ru-RU": Fn,
	"sk-SK": In,
	"sl-SI": Ln,
	"sr-SP": Rn,
	"sv-SE": zn,
	"tr-TR": Bn,
	"uk-UA": Vn,
	"zh-CN": Hn,
	"zh-TW": Un
};
function Gn(e) {
	let { onContextMenu: t } = e, n = (0, K.useRef)(!1), { longPressProps: r } = Ce({
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
	return t ? { contextMenuProps: v(D() ? r : {}, {
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
			if (E() && e.ctrlKey && e.key === `Enter`) {
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
function Kn(e, t, n) {
	let { type: r } = e, { isOpen: i } = t;
	(0, K.useEffect)(() => {
		n && n.current && se.set(n.current, t.close);
	});
	let a;
	r === `menu` ? a = !0 : r === `listbox` && (a = `listbox`);
	let o = p();
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
function qn(e) {
	return e && e.__esModule ? e.default : e;
}
function Jn(e, t, n) {
	let { type: r = `menu`, isDisabled: i, trigger: a = `press` } = e, o = p(), { triggerProps: s, overlayProps: c } = Kn({ type: r }, t, n), l = (e, n, r = `first`) => {
		if (!e || n.isDefaultPrevented()) return !1;
		t.toggle(r);
	}, { keyboardProps: u } = _({
		isDisabled: i,
		shortcuts: {
			Enter: (e) => l(a !== `longPress`, e, `first`),
			" ": (e) => l(a !== `longPress`, e, `first`),
			ArrowDown: (e) => l(a !== `longPress`, e, `first`),
			ArrowUp: (e) => l(a !== `longPress`, e, `last`),
			"Alt+Enter": (e) => l(a === `longPress`, e, `first`),
			"Alt+ ": (e) => l(a === `longPress`, e, `first`),
			"Alt+ArrowDown": (e) => l(!0, e, `first`),
			"Alt+ArrowUp": (e) => l(!0, e, `last`)
		}
	}), d = Pe(qn(Wn), `@react-aria/menu`), { longPressProps: f } = Ce({
		isDisabled: i || a !== `longPress`,
		accessibilityDescription: d.format(`longPressMessage`),
		onLongPressStart() {
			t.close();
		},
		onLongPress() {
			t.open(`first`);
		}
	}), m = {
		preventFocusOnPress: !0,
		onPressStart(e) {
			e.pointerType !== `touch` && e.pointerType !== `keyboard` && !i && (ne(e.target), t.open(e.pointerType === `virtual` ? `first` : null));
		},
		onPress(e) {
			e.pointerType === `touch` && !i && (ne(e.target), t.toggle());
		}
	};
	delete s.onPress;
	let { contextMenuProps: h } = Gn({ onContextMenu(e) {
		let n = e.target.getBoundingClientRect();
		t.setPoint({
			x: n.x + e.x,
			y: n.y + e.y
		}), t.open();
	} });
	(0, K.useEffect)(() => {
		if (t.isOpen && a === `contextMenu`) {
			let e = (e) => {
				(e.button === 2 || e.button === 0 && e.ctrlKey === !0) && T(e) === document.body && t.close();
			};
			return document.addEventListener(`mousedown`, e), () => document.removeEventListener(`mousedown`, e);
		}
	}, [t, a]);
	let g;
	if (a === `press`) g = {
		...m,
		...u
	};
	else if (a === `longPress`) g = {
		...f,
		...u
	};
	else if (a === `contextMenu`) {
		g = h;
		let { "aria-haspopup": e, "aria-expanded": t, "aria-controls": n, ...r } = s;
		s = r;
	}
	return {
		menuTriggerProps: {
			...s,
			...g,
			id: o
		},
		menuProps: {
			...c,
			"aria-labelledby": o,
			autoFocus: t.focusStrategy || !0,
			onClose: t.close
		}
	};
}
var Yn = new WeakMap();
function Xn(e, t, n) {
	let { shouldFocusWrap: r = !0, onKeyDown: i, onKeyUp: a, ...s } = e;
	!e[`aria-label`] && e[`aria-labelledby`];
	let c = o(e, { labelable: !0 }), { listProps: l } = _e({
		...s,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		shouldFocusWrap: r,
		linkBehavior: `override`
	});
	return Yn.set(t, {
		onClose: e.onClose,
		onAction: e.onAction,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus
	}), { menuProps: v(c, {
		onKeyDown: i,
		onKeyUp: a
	}, {
		role: `menu`,
		...l,
		onKeyDown: (t) => {
			(t.key !== `Escape` || e.shouldUseVirtualFocus) && l.onKeyDown?.(t);
		}
	}) };
}
function Zn(e, t, n) {
	let { id: r, key: i, closeOnSelect: a, shouldCloseOnSelect: s, isVirtualized: u, "aria-haspopup": f, onPressStart: p, onPressUp: m, onPress: h, onPressChange: g, onPressEnd: y, onClick: b, onHoverStart: x, onHoverChange: S, onHoverEnd: E, onKeyDown: D, onKeyUp: ne, onFocus: O, onFocusChange: A, onBlur: j, selectionManager: M = t.selectionManager } = e, N = !!f, P = N && e[`aria-expanded`] === `true`, F = e.isDisabled ?? M.isDisabled(i), I = e.isSelected ?? M.isSelected(i), L = Yn.get(t), R = t.collection.getItem(i), z = e.onClose || L.onClose, ie = C(), B = () => {
		if (!N && (R?.props?.onAction ? R.props.onAction() : e.onAction && e.onAction(i), L.onAction)) {
			let e = L.onAction;
			e(i, R?.value);
		}
	}, V = `menuitem`;
	N || (M.selectionMode === `single` ? V = `menuitemradio` : M.selectionMode === `multiple` && (V = `menuitemcheckbox`));
	let ae = d(), oe = d(), se = d(), H = {
		id: r,
		"aria-disabled": F || void 0,
		role: V,
		"aria-label": e[`aria-label`],
		"aria-labelledby": ae,
		"aria-describedby": [
			e[`aria-describedby`],
			oe,
			se
		].filter(Boolean).join(` `) || void 0,
		"aria-controls": e[`aria-controls`],
		"aria-haspopup": f,
		"aria-expanded": e[`aria-expanded`]
	};
	if (M.selectionMode !== `none` && !N && (H[`aria-checked`] = I), u) {
		let e = Number(R?.index);
		H[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, H[`aria-setsize`] = ge(t.collection);
	}
	let ce = (0, K.useRef)(!1), le = (e) => {
		g?.(e), ce.current = e;
	}, U = (0, K.useRef)(null), ue = (e) => {
		e.pointerType !== `keyboard` && (U.current = { pointerType: e.pointerType }), e.pointerType === `mouse` && (ce.current || e.target.click()), m?.(e);
	}, de = (e) => {
		b?.(e), B(), re(e, ie, R.props.href, R?.props.routerOptions);
		let t = U.current?.pointerType === `keyboard` ? U.current?.key === `Enter` || M.selectionMode === `none` || M.isLink(i) : M.selectionMode !== `multiple` || M.isLink(i);
		t = s ?? a ?? t, z && !N && t && z(), U.current = null;
	}, { itemProps: W, isFocused: fe } = Se({
		id: r,
		selectionManager: M,
		key: i,
		ref: n,
		shouldSelectOnPressUp: !0,
		allowsDifferentPressOrigin: !0,
		linkBehavior: `none`,
		shouldUseVirtualFocus: L.shouldUseVirtualFocus
	}), { pressProps: pe, isPressed: me } = te({
		onPressStart: p,
		onPress: h,
		onPressUp: ue,
		onPressChange: le,
		onPressEnd: y,
		isDisabled: F
	}), { hoverProps: he } = w({
		isDisabled: F,
		onHoverStart(e) {
			!c() && !(P && f) && (M.setFocused(!0), M.setFocusedKey(i)), x?.(e);
		},
		onHoverChange: S,
		onHoverEnd: E
	}), { keyboardProps: _e } = _({
		shortcuts: {
			" ": (e) => {
				U.current = {
					pointerType: `keyboard`,
					key: ` `
				}, T(e).click(), l(`keyboard`);
			},
			Enter: (e) => {
				U.current = {
					pointerType: `keyboard`,
					key: `Enter`
				};
				let t = T(e);
				if (t.tagName !== `A`) t.click(), l(`keyboard`);
				else return l(`keyboard`), {
					shouldPreventDefault: !1,
					shouldContinuePropagation: !1
				};
			}
		},
		onKeyDown: D,
		onKeyUp: ne
	}), { focusableProps: ve } = k({
		onBlur: j,
		onFocus: O,
		onFocusChange: A
	}, n), ye = o(R?.props);
	delete ye.id;
	let be = ee(R?.props);
	return {
		menuItemProps: {
			...H,
			...v(ye, be, N ? {
				onFocus: W.onFocus,
				"data-collection": W[`data-collection`],
				"data-key": W[`data-key`]
			} : W, pe, he, _e, ve, L.shouldUseVirtualFocus || N ? { onMouseDown: (e) => e.preventDefault() } : void 0, F ? void 0 : { onClick: de }),
			tabIndex: W.tabIndex != null && P && !L.shouldUseVirtualFocus ? -1 : W.tabIndex
		},
		labelProps: { id: ae },
		descriptionProps: { id: oe },
		keyboardShortcutProps: { id: se },
		isFocused: fe,
		isFocusVisible: fe && M.isFocused && c() && !P,
		isSelected: I,
		isPressed: me,
		isDisabled: F
	};
}
function Qn(e) {
	let { heading: t, "aria-label": n } = e, r = p();
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
function $n(e) {
	let t = le(e), [n, r] = (0, K.useState)(null), [i, a] = (0, K.useState)([]), o = () => {
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
var er = (0, K.createContext)(null), tr = (0, K.createContext)(null), nr = (0, K.createContext)(null), rr = (0, K.createContext)(null);
function ir(e) {
	let t = $n(e), n = (0, K.useRef)(null), { menuTriggerProps: r, menuProps: i } = Jn({
		...e,
		type: `menu`
	}, t, n), a = (0, K.useRef)(null);
	return A() ? null : K.createElement(I, { values: [
		[er, {
			...i,
			ref: a
		}],
		[$, t],
		[nr, t],
		[Z, {
			trigger: `MenuTrigger`,
			triggerRef: n,
			scrollRef: a,
			placement: `bottom start`,
			"aria-labelledby": i[`aria-labelledby`],
			offset: e.trigger === `contextMenu` ? 0 : void 0
		}]
	] }, K.createElement(Le, {
		...r,
		ref: n,
		isPressed: t.isOpen
	}, e.children));
}
var ar = (0, K.createContext)(null);
(class extends He {
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
var or = (0, K.forwardRef)(function(e, t) {
	return [e, t] = x(e, t, er), K.createElement(Ke, { content: K.createElement(We, e) }, (n) => K.createElement(sr, {
		props: e,
		collection: n,
		menuRef: t
	}));
});
function sr({ props: e, collection: n, menuRef: r }) {
	[e, r] = x(e, r, Me);
	let { filter: i, ...a } = e, c = (0, K.useMemo)(() => i ? n.filter(i) : n, [n, i]), l = Xe({
		...e,
		collection: c,
		children: void 0
	}), u = (0, K.useContext)(nr), { isVirtualized: d, CollectionRoot: f } = (0, K.useContext)(xe), { menuProps: p } = Xn({
		...e,
		isVirtualized: d,
		onClose: e.onClose || u?.close
	}, l, r), m = s({
		...e,
		children: void 0,
		defaultClassName: `react-aria-Menu`,
		values: { isEmpty: l.collection.size === 0 }
	}), h = null;
	l.collection.size === 0 && e.renderEmptyState && (h = K.createElement(`div`, {
		role: `menuitem`,
		style: { display: `contents` }
	}, e.renderEmptyState()));
	let g = o(e, { global: !0 });
	return K.createElement(W, null, K.createElement(t.div, {
		...v(g, m, p),
		ref: r,
		slot: e.slot || void 0,
		"data-empty": l.collection.size === 0 || void 0,
		onScroll: e.onScroll
	}, K.createElement(I, { values: [
		[tr, l],
		[Be, { elementType: `div` }],
		[ye, {
			name: `MenuSection`,
			render: lr
		}],
		[ar, {
			parentMenuRef: r,
			shouldUseVirtualFocus: a?.shouldUseVirtualFocus
		}],
		[Q, { shouldCloseOnSelect: e.shouldCloseOnSelect }],
		[Me, null],
		[je, null],
		[rr, l.selectionManager],
		[nr, u ?? $n({})]
	] }, K.createElement(de, null, K.createElement(f, {
		collection: l.collection,
		persistedKeys: ke(l.selectionManager.focusedKey),
		scrollRef: r
	}))), h));
}
var cr = class extends we {
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
function lr(e, n, r, i = `react-aria-MenuSection`) {
	let c = (0, K.useContext)(tr), { CollectionBranch: l } = (0, K.useContext)(xe), [u, d] = a(), { headingProps: f, groupProps: p } = Qn({
		heading: d,
		"aria-label": r.props[`aria-label`] ?? void 0
	}), m = s({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: i,
		className: r.props?.className,
		style: r.props?.style,
		values: void 0
	}), g = (0, K.useContext)(rr), _ = be(e), y = e.selectionMode == null ? g : new cr(g, _), b = h(Q)?.shouldCloseOnSelect, x = o(e, { global: !0 });
	return delete x.id, K.createElement(t.section, {
		...v(x, m, p),
		ref: n
	}, K.createElement(I, { values: [
		[me, {
			...f,
			ref: u
		}],
		[rr, y],
		[Q, { shouldCloseOnSelect: e.shouldCloseOnSelect ?? b }]
	] }, K.createElement(l, {
		collection: c.collection,
		parent: r
	})));
}
var ur = qe(Je, lr), Q = (0, K.createContext)(null), dr = Ye(Ue, function(e, n, r) {
	[e, n] = x(e, n, Q);
	let i = h(Q)?.id, a = (0, K.useContext)(tr), c = g(n), l = (0, K.useContext)(rr), { isVirtualized: u } = (0, K.useContext)(xe), { menuItemProps: d, labelProps: f, descriptionProps: p, keyboardShortcutProps: m, ..._ } = Zn({
		...e,
		id: i,
		key: r.key,
		selectionManager: l,
		isVirtualized: u
	}, a, c), { hoverProps: y, isHovered: b } = w({ isDisabled: _.isDisabled }), S = s({
		...e,
		id: void 0,
		children: r.rendered,
		defaultClassName: `react-aria-MenuItem`,
		values: {
			..._,
			isHovered: b,
			isFocusVisible: _.isFocusVisible,
			selectionMode: l.selectionMode,
			selectionBehavior: l.selectionBehavior,
			hasSubmenu: !!e[`aria-haspopup`],
			isOpen: e[`aria-expanded`] === `true`
		}
	}), ee = e.href ? t.a : t.div, C = o(e, { global: !0 });
	return delete C.id, delete C.onClick, K.createElement(ee, {
		...v(C, S, d, y),
		ref: c,
		"data-disabled": _.isDisabled || void 0,
		"data-hovered": b || void 0,
		"data-focused": _.isFocused || void 0,
		"data-focus-visible": _.isFocusVisible || void 0,
		"data-pressed": _.isPressed || void 0,
		"data-selected": _.isSelected || void 0,
		"data-selection-mode": l.selectionMode === `none` ? void 0 : l.selectionMode,
		"data-has-submenu": !!e[`aria-haspopup`] || void 0,
		"data-open": e[`aria-expanded`] === `true` || void 0
	}, K.createElement(I, { values: [
		[Ve, { slots: {
			[j]: f,
			label: f,
			description: p
		} }],
		[ze, m],
		[fe, { isSelected: _.isSelected }]
	] }, S.children));
});
Ye(Ge, function(e, n, r) {
	let i = (0, K.useContext)(tr), { isLoading: a, onLoadMore: c, scrollOffset: l, ...u } = e, d = (0, K.useRef)(null), f = (0, K.useMemo)(() => ({
		onLoadMore: c,
		collection: i?.collection,
		sentinelRef: d,
		scrollOffset: l
	}), [
		c,
		l,
		i?.collection
	]);
	ve(f, d);
	let p = s({
		...u,
		id: void 0,
		children: r.rendered,
		defaultClassName: `react-aria-MenuLoadingIndicator`,
		values: void 0
	});
	return K.createElement(K.Fragment, null, K.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: Ee(!0)
	}, K.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: d,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), a && p.children && K.createElement(K.Fragment, null, K.createElement(t.div, {
		...v(o(e, { global: !0 }), { tabIndex: -1 }),
		...p,
		role: `menuitem`,
		ref: n
	}, p.children)));
});
function fr(e, t) {
	let { role: n = `dialog`, isEntering: r } = e, i = d();
	i = e[`aria-label`] ? void 0 : i;
	let a = d();
	a = n === `alertdialog` && !e[`aria-describedby`] ? a : void 0;
	let s = (0, K.useRef)(!1);
	(0, K.useEffect)(() => {
		if (!r && t.current && !M(t.current)) {
			u(t.current);
			let e = setTimeout(() => {
				(O() === t.current || O() === document.body) && (s.current = !0, t.current && (t.current.blur(), u(t.current)), s.current = !1);
			}, 500);
			return () => {
				clearTimeout(e);
			};
		}
	}, [t, r]), on(), (0, K.useRef)(!1), (0, K.useEffect)(() => {});
	let c = e[`aria-describedby`] ?? a;
	return {
		dialogProps: {
			...o(e, { labelable: !0 }),
			role: n,
			tabIndex: -1,
			"aria-labelledby": e[`aria-labelledby`] ?? i,
			"aria-describedby": c,
			onBlur: (e) => {
				s.current && e.stopPropagation();
			}
		},
		titleProps: { id: i },
		contentProps: { id: a }
	};
}
var pr = (0, K.createContext)(null), $ = (0, K.createContext)(null);
function mr(e) {
	let t = $n(e), n = (0, K.useRef)(null), { triggerProps: r, overlayProps: i } = Kn({ type: `dialog` }, t, n);
	return r.id = p(), i[`aria-labelledby`] = r.id, A() ? null : K.createElement(I, { values: [
		[$, t],
		[nr, t],
		[pr, i],
		[Z, {
			trigger: `DialogTrigger`,
			triggerRef: n,
			id: i.id,
			"aria-labelledby": i[`aria-labelledby`]
		}]
	] }, K.createElement(Le, {
		...r,
		ref: n,
		isPressed: t.isOpen
	}, e.children));
}
var hr = (0, K.forwardRef)(function(e, n) {
	let r = e[`aria-labelledby`];
	[e, n] = x(e, n, pr);
	let { dialogProps: i, titleProps: a, contentProps: c } = fr({
		...e,
		"aria-labelledby": r
	}, n), l = (0, K.useContext)($);
	!i[`aria-label`] && !i[`aria-labelledby`] && e[`aria-labelledby`] && (i[`aria-labelledby`] = e[`aria-labelledby`]);
	let u = s({
		defaultClassName: `react-aria-Dialog`,
		className: e.className,
		style: e.style,
		children: e.children,
		values: { close: l?.close || (() => {}) }
	}), d = o(e, { global: !0 });
	return K.createElement(t.section, {
		...v(d, u, i),
		render: e.render,
		ref: n,
		slot: e.slot || void 0
	}, K.createElement(I, { values: [
		[Ze, { slots: {
			[j]: {},
			title: {
				...a,
				level: 2
			}
		} }],
		[Ve, { slots: {
			[j]: {},
			description: c
		} }],
		[N, { slots: {
			[j]: {},
			close: { onPress: () => l?.close() }
		} }]
	] }, u.children));
});
export { tt as _, ir as a, or as c, Z as d, on as f, st as g, ft as h, $ as i, Jn as l, tn as m, hr as n, dr as o, an as p, pr as r, ur as s, mr as t, cn as u, Qe as v, Ze as y };
