import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { B as t, Ct as n, Ft as r, Lt as i, Mt as a, Nt as o, Pt as s, R as c, U as ee, V as te, _t as l, at as u, ct as ne, ht as d, jt as re, lt as ie, ot as f, rt as p, wt as m, xt as h, z as ae, zt as oe } from "./createLucideIcon.npgQlVHx.js";
import { l as se } from "./useFormValidation.CKcLNQoz.js";
import { n as ce } from "./useLocalizedStringFormatter.CY4FHGAo.js";
import { n as g } from "./react-dom.B9zIfLd2.js";
import { t as _ } from "./useControlledState.DijOhE0s.js";
var le = `react-aria-clear-focus`, v = `react-aria-focus`;
function ue(e) {
	let t = de(h(e));
	t !== e && (t && y(t, e), e && b(e, t));
}
function y(e, t) {
	e.dispatchEvent(new FocusEvent(`blur`, { relatedTarget: t })), e.dispatchEvent(new FocusEvent(`focusout`, {
		bubbles: !0,
		relatedTarget: t
	}));
}
function b(e, t) {
	e.dispatchEvent(new FocusEvent(`focus`, { relatedTarget: t })), e.dispatchEvent(new FocusEvent(`focusin`, {
		bubbles: !0,
		relatedTarget: t
	}));
}
function de(e) {
	let t = d(e), n = t?.getAttribute(`aria-activedescendant`);
	return n && e.getElementById(n) || t;
}
var x = {};
x = { collectionLabel: `مقترحات` };
var S = {};
S = { collectionLabel: `Предложения` };
var C = {};
C = { collectionLabel: `Návrhy` };
var w = {};
w = { collectionLabel: `Forslag` };
var T = {};
T = { collectionLabel: `Empfehlungen` };
var E = {};
E = { collectionLabel: `Προτάσεις` };
var D = {};
D = { collectionLabel: `Suggestions` };
var O = {};
O = { collectionLabel: `Sugerencias` };
var k = {};
k = { collectionLabel: `Soovitused` };
var A = {};
A = { collectionLabel: `Ehdotukset` };
var j = {};
j = { collectionLabel: `Suggestions` };
var M = {};
M = { collectionLabel: `הצעות` };
var N = {};
N = { collectionLabel: `Prijedlozi` };
var P = {};
P = { collectionLabel: `Javaslatok` };
var F = {};
F = { collectionLabel: `Suggerimenti` };
var I = {};
I = { collectionLabel: `候補` };
var L = {};
L = { collectionLabel: `제안` };
var R = {};
R = { collectionLabel: `Pasiūlymai` };
var z = {};
z = { collectionLabel: `Ieteikumi` };
var B = {};
B = { collectionLabel: `Forslag` };
var V = {};
V = { collectionLabel: `Suggesties` };
var H = {};
H = { collectionLabel: `Sugestie` };
var U = {};
U = { collectionLabel: `Sugestões` };
var W = {};
W = { collectionLabel: `Sugestões` };
var G = {};
G = { collectionLabel: `Sugestii` };
var K = {};
K = { collectionLabel: `Предложения` };
var q = {};
q = { collectionLabel: `Návrhy` };
var fe = {};
fe = { collectionLabel: `Predlogi` };
var pe = {};
pe = { collectionLabel: `Predlozi` };
var me = {};
me = { collectionLabel: `Förslag` };
var he = {};
he = { collectionLabel: `Öneriler` };
var ge = {};
ge = { collectionLabel: `Пропозиції` };
var _e = {};
_e = { collectionLabel: `建议` };
var ve = {};
ve = { collectionLabel: `建議` };
var ye = {};
ye = {
	"ar-AE": x,
	"bg-BG": S,
	"cs-CZ": C,
	"da-DK": w,
	"de-DE": T,
	"el-GR": E,
	"en-US": D,
	"es-ES": O,
	"et-EE": k,
	"fi-FI": A,
	"fr-FR": j,
	"he-IL": M,
	"hr-HR": N,
	"hu-HU": P,
	"it-IT": F,
	"ja-JP": I,
	"ko-KR": L,
	"lt-LT": R,
	"lv-LV": z,
	"nb-NO": B,
	"nl-NL": V,
	"pl-PL": H,
	"pt-BR": U,
	"pt-PT": W,
	"ro-RO": G,
	"ru-RU": K,
	"sk-SK": q,
	"sl-SI": fe,
	"sr-SP": pe,
	"sv-SE": me,
	"tr-TR": he,
	"uk-UA": ge,
	"zh-CN": _e,
	"zh-TW": ve
};
var J = 100, Y = 600, X = {
	isOpen: !1,
	screenWidth: 0,
	screenHeight: 0,
	screenAngle: 0,
	screenTimeout: 0,
	startTimeStamp: 0,
	endTimeStamp: 0,
	resizeTimeStamp: 0,
	resizeTimeout: 0
}, be = new Set([
	`checkbox`,
	`radio`,
	`range`,
	`color`,
	`file`,
	`image`,
	`button`,
	`submit`,
	`reset`
]);
function Z() {
	let e = Number(window.visualViewport?.width ?? window.innerWidth), t = Number(window.visualViewport?.height ?? window.innerHeight), n = Number(window.visualViewport?.scale ?? 1);
	return {
		width: e * n,
		height: t * n,
		angle: window.screen.orientation?.angle ?? 0
	};
}
function xe(e) {
	X.resizeTimeStamp <= e.timeStamp + 50 && (X.resizeTimeStamp = e.timeStamp + 150, window.clearTimeout(X.resizeTimeout), X.resizeTimeout = window.setTimeout(Se, 150));
}
function Se() {
	let e = t(`viewport`);
	if (f() && e?.includes(`overlays-content`)) return;
	let n = performance.now(), r = Z(), i = n - X.startTimeStamp, a = X.screenHeight - r.height, o = X.screenAngle - r.angle;
	Math.abs(o) % 180 && X.screenWidth - r.height < J && (X.screenWidth = r.width, X.screenHeight = r.height, X.screenAngle = r.angle, a = 0), i > Y && (window.clearTimeout(X.screenTimeout), X.screenTimeout = window.setTimeout(() => {
		let e = Q(document.hasFocus() ? d() : null), t = Z();
		Math.abs(X.screenAngle - t.angle) % 180 || X.isOpen && e || (X.screenWidth = t.width, X.screenHeight = t.height, X.screenAngle = t.angle, X.isOpen = !1);
	}, Y)), i <= Y && a >= J && (X.endTimeStamp = n), X.isOpen = a >= J;
}
function Ce() {
	let e = Z(), t = X.screenAngle - e.angle;
	if (Math.abs(t) % 180 && !X.isOpen) {
		let e = X.screenWidth;
		X.screenWidth = X.screenHeight, X.screenHeight = e;
	}
	X.isOpen || (X.screenAngle = e.angle);
}
function we(e) {
	let t = Q(l(e)), n = performance.now(), r = Z(), i = X.screenHeight - r.height;
	i < J && t && (X.screenWidth = r.width, X.screenHeight = r.height, X.screenAngle = r.angle, X.startTimeStamp = n), t && window.clearTimeout(X.screenTimeout), i >= J && t && (X.endTimeStamp = n);
}
function Te() {
	let e = Z();
	n(window.visualViewport, `resize`, p() ? Se : xe), n(window.screen.orientation, `change`, Ce), n(window, `focus`, we, {
		capture: !0,
		passive: !0
	}), X.screenWidth = e.width, X.screenHeight = e.height, X.screenAngle = e.angle;
}
typeof document < `u` && (document.readyState === `loading` ? n(document, `DOMContentLoaded`, Te) : Te());
function Ee() {
	let e = t(`viewport`);
	return f() && e?.includes(`overlays-content`) ? !1 : X.isOpen ? !0 : X.startTimeStamp ? X.endTimeStamp >= X.startTimeStamp ? !0 : performance.now() - X.startTimeStamp <= Y ? X.endTimeStamp > 0 || window.navigator.maxTouchPoints > 0 : !1 : window.navigator.maxTouchPoints > 0;
}
function Q(e) {
	if (!(e instanceof Element) || !ie(e)) return !1;
	let t = e instanceof HTMLTextAreaElement, n = e instanceof HTMLElement && e.isContentEditable, r = e instanceof HTMLInputElement && !be.has(e.type);
	return t || n || r;
}
function De(e) {
	return u() ? e.metaKey : e.ctrlKey;
}
function Oe() {
	return X.isOpen;
}
var $ = e(g(), 1);
function ke(e) {
	return e && e.__esModule ? e.default : e;
}
function Ae(e, t) {
	let { inputRef: n, collectionRef: a, filter: u, disableAutoFocusFirst: re = !1, disableVirtualFocus: ie = !1 } = e, p = i(), m = (0, $.useRef)(void 0), g = (0, $.useRef)(!1), _ = (0, $.useRef)(null), x = te() === `virtual` && (ne() || f()), [S, C] = (0, $.useState)(!x && !ie), [w, T] = (0, $.useState)(!1), [E, D] = (0, $.useState)(!1);
	(0, $.useEffect)(() => () => clearTimeout(m.current), []);
	let O = ae((e) => {
		!e.isTrusted && S && n.current && d(h(n.current)) !== n.current && ee() !== `touch` && n.current.focus();
		let r = l(e);
		!e.isTrusted && r && _.current !== r.id && (clearTimeout(m.current), r === a.current ? _.current && !document.getElementById(_.current) && (_.current = null, t.setFocusedNodeId(null)) : g.current ? (_.current = r.id, m.current = setTimeout(() => {
			t.setFocusedNodeId(r.id);
		}, 500)) : (_.current = r.id, t.setFocusedNodeId(r.id)), g.current = !1);
	}), [k, A] = (0, $.useState)(null), j = (0, $.useCallback)((e) => {
		A(e), e == null ? T(!1) : (e.getAttribute(`tabindex`) != null && C(!1), T(!0));
	}, []);
	oe(() => (k?.addEventListener(`focusin`, O), () => {
		k?.removeEventListener(`focusin`, O);
	}), [k]);
	let M = o((0, $.useMemo)(() => r(a, j), [a, j])), N = (0, $.useCallback)(() => {
		a.current ? (g.current = !0, a.current?.dispatchEvent(new CustomEvent(v, {
			cancelable: !0,
			bubbles: !0,
			detail: { focusStrategy: `first` }
		}))) : D(!0);
	}, [a]), P = (0, $.useCallback)((e) => {
		D(!1), ue(d()), _.current = null, t.setFocusedNodeId(null);
		let n = new CustomEvent(le, {
			cancelable: !0,
			bubbles: !0,
			detail: { clearFocusKey: e }
		});
		clearTimeout(m.current), g.current = !1, a.current?.dispatchEvent(n);
	}, [a, t]), F = (0, $.useRef)(``);
	se(n, `beforeinput`, (e) => {
		let { inputType: t } = e;
		F.current = t;
	});
	let I = (e) => {
		(F.current === `insertText` || F.current === `insertCompositionText` || F.current === `insertFromComposition`) && !re ? N() : F.current && (F.current.includes(`insert`) || F.current.includes(`delete`) || F.current.includes(`history`)) && (P(!0), de(document) === n.current && b(n.current, null)), t.setInputValue(e);
	}, L = (0, $.useRef)(null), R = (e) => {
		if (L.current = l(e), e.nativeEvent.isComposing) return;
		let t = _.current;
		switch (t !== null && h(n.current).getElementById(t) == null && (_.current = null, t = null), e.key) {
			case `a`:
				if (De(e)) return;
				break;
			case `Escape`:
				if (e.isDefaultPrevented()) return;
				break;
			case ` `: return;
			case `Tab`:
				`continuePropagation` in e && e.continuePropagation();
				return;
			case `Home`:
			case `End`:
			case `PageDown`:
			case `PageUp`:
			case `ArrowUp`:
			case `ArrowDown`:
			case `ArrowRight`:
			case `ArrowLeft`: {
				if ((e.key === `Home` || e.key === `End`) && t == null && e.shiftKey) return;
				if (e.key === `ArrowRight` || e.key === `ArrowLeft`) {
					if (t == null) {
						e.isPropagationStopped() || e.stopPropagation();
						return;
					}
					break;
				}
				e.preventDefault();
				let n = new CustomEvent(v, {
					cancelable: !0,
					bubbles: !0
				});
				a.current?.dispatchEvent(n);
				break;
			}
		}
		e.isPropagationStopped() || e.stopPropagation();
		let r = !0;
		if (a.current !== null) {
			if (t == null) r = a.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)) || !1;
			else {
				let n = document.getElementById(t);
				n && (r = n?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)) || !1);
			}
		}
		if (r) switch (e.key) {
			case `ArrowLeft`:
			case `ArrowRight`:
				P();
				break;
			case `Enter`: t != null && document.getElementById(t)?.dispatchEvent(new PointerEvent(`click`, e.nativeEvent));
		}
		else e.preventDefault();
	}, z = ae((e) => {
		if (l(e) === L.current) {
			e.stopImmediatePropagation();
			let t = _.current;
			t == null ? a.current?.dispatchEvent(new KeyboardEvent(e.type, e)) : document.getElementById(t)?.dispatchEvent(new KeyboardEvent(e.type, e));
		}
	});
	(0, $.useEffect)(() => (document.addEventListener(`keyup`, z, !0), () => {
		document.removeEventListener(`keyup`, z, !0);
	}), []);
	let B = ce(ke(ye), `@react-aria/autocomplete`), V = c({
		id: p,
		"aria-label": B.format(`collectionLabel`)
	}), H = (0, $.useCallback)((e, n) => !u || u(e, t.inputValue, n), [t.inputValue, u]), U = (e) => {
		if (!e.isTrusted) return;
		let t = _.current ? document.getElementById(_.current) : null;
		t && y(t, e.relatedTarget);
	}, W = (e) => {
		if (e.isTrusted && _.current && document.getElementById(_.current)) {
			let t = l(e);
			queueMicrotask(() => {
				y(t, a.current), b(a.current, t);
			});
		}
	}, G = (e) => {
		e.button === 0 && e.pointerType !== `touch` && _.current != null && n.current != null && l(e) === n.current && P();
	}, K = {
		value: t.inputValue,
		onChange: I
	}, q = {
		onKeyDown: R,
		"aria-activedescendant": t.focusedNodeId ?? void 0,
		onBlur: U,
		onFocus: W,
		onPointerDown: G
	};
	return K = {
		...K,
		...S && w && q,
		enterKeyHint: `go`,
		"aria-controls": w ? p : void 0,
		"aria-autocomplete": `list`,
		autoCorrect: `off`,
		spellCheck: `false`,
		autoComplete: `off`
	}, {
		inputProps: K,
		collectionProps: s(V, {
			shouldUseVirtualFocus: S,
			disallowTypeAhead: S,
			autoFocus: E ? `first` : !1
		}),
		collectionRef: M,
		filter: u == null ? void 0 : H
	};
}
function je(e) {
	let { onInputChange: t, inputValue: n, defaultInputValue: r = `` } = e, i = (e) => {
		t && t(e);
	}, [a, o] = (0, $.useState)(null), [s, c] = _(n, r, i);
	return {
		inputValue: s,
		setInputValue: c,
		focusedNodeId: a,
		setFocusedNodeId: o
	};
}
var Me = (0, $.createContext)(null), Ne = (0, $.createContext)(null), Pe = (0, $.createContext)(null), Fe = (0, $.createContext)(null);
function Ie(e) {
	let t = a(Me, e.slot);
	e = s(t, e);
	let { filter: n, disableAutoFocusFirst: r } = e, i = je(e), o = (0, $.useRef)(null), c = (0, $.useRef)(null), { inputProps: ee, collectionProps: te, collectionRef: l, filter: u } = Ae({
		...re(e),
		filter: n,
		disableAutoFocusFirst: r,
		inputRef: o,
		collectionRef: c
	}, i);
	return $.createElement(m, { values: [
		[Ne, i],
		[Fe, {
			...ee,
			ref: o
		}],
		[Pe, {
			...te,
			filter: u,
			ref: l
		}]
	] }, e.children);
}
export { Ee as a, b as c, v as d, De as i, ue as l, Fe as n, Oe as o, Pe as r, Q as s, Ie as t, le as u };
