import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { Bt as t, Qt as n, Rt as r, St as i, Ut as a, Vt as o, Wt as s, Xt as c, an as l, bn as ee, bt as u, fn as te, gn as ne, hn as re, in as d, mn as ie, nn as f, pn as p, vn as ae, wt as oe, xt as m, yt as se } from "./doc.DoLlUurT.js";
import { l as ce } from "./useFormValidation.CExHgpbK.js";
import { n as le } from "./useLocalizedStringFormatter.DOzdQqIj.js";
import { n as h } from "./react-dom.B9zIfLd2.js";
import { t as g } from "./useControlledState.DijOhE0s.js";
var ue = `react-aria-clear-focus`, _ = `react-aria-focus`;
function de(e) {
	let t = b(f(e));
	t !== e && (t && v(t, e), e && y(e, t));
}
function v(e, t) {
	e.dispatchEvent(new FocusEvent(`blur`, { relatedTarget: t })), e.dispatchEvent(new FocusEvent(`focusout`, {
		bubbles: !0,
		relatedTarget: t
	}));
}
function y(e, t) {
	e.dispatchEvent(new FocusEvent(`focus`, { relatedTarget: t })), e.dispatchEvent(new FocusEvent(`focusin`, {
		bubbles: !0,
		relatedTarget: t
	}));
}
function b(e) {
	let t = c(e), n = t?.getAttribute(`aria-activedescendant`);
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
	let e = m(`viewport`);
	if (o() && e?.includes(`overlays-content`)) return;
	let t = performance.now(), n = Z(), r = t - X.startTimeStamp, i = X.screenHeight - n.height, a = X.screenAngle - n.angle;
	Math.abs(a) % 180 && X.screenWidth - n.height < J && (X.screenWidth = n.width, X.screenHeight = n.height, X.screenAngle = n.angle, i = 0), r > Y && (window.clearTimeout(X.screenTimeout), X.screenTimeout = window.setTimeout(() => {
		let e = Q(document.hasFocus() ? c() : null), t = Z();
		Math.abs(X.screenAngle - t.angle) % 180 || X.isOpen && e || (X.screenWidth = t.width, X.screenHeight = t.height, X.screenAngle = t.angle, X.isOpen = !1);
	}, Y)), r <= Y && i >= J && (X.endTimeStamp = t), X.isOpen = i >= J;
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
	let t = Q(n(e)), r = performance.now(), i = Z(), a = X.screenHeight - i.height;
	a < J && t && (X.screenWidth = i.width, X.screenHeight = i.height, X.screenAngle = i.angle, X.startTimeStamp = r), t && window.clearTimeout(X.screenTimeout), a >= J && t && (X.endTimeStamp = r);
}
function Te() {
	let e = Z();
	d(window.visualViewport, `resize`, r() ? Se : xe), d(window.screen.orientation, `change`, Ce), d(window, `focus`, we, {
		capture: !0,
		passive: !0
	}), X.screenWidth = e.width, X.screenHeight = e.height, X.screenAngle = e.angle;
}
typeof document < `u` && (document.readyState === `loading` ? d(document, `DOMContentLoaded`, Te) : Te());
function Ee() {
	let e = m(`viewport`);
	return o() && e?.includes(`overlays-content`) ? !1 : X.isOpen ? !0 : X.startTimeStamp ? X.endTimeStamp >= X.startTimeStamp ? !0 : performance.now() - X.startTimeStamp <= Y ? X.endTimeStamp > 0 || window.navigator.maxTouchPoints > 0 : !1 : window.navigator.maxTouchPoints > 0;
}
function Q(e) {
	if (!(e instanceof Element) || !s(e)) return !1;
	let t = e instanceof HTMLTextAreaElement, n = e instanceof HTMLElement && e.isContentEditable, r = e instanceof HTMLInputElement && !be.has(e.type);
	return t || n || r;
}
function De(e) {
	return t() ? e.metaKey : e.ctrlKey;
}
function Oe() {
	return X.isOpen;
}
var $ = e(h(), 1);
function ke(e) {
	return e && e.__esModule ? e.default : e;
}
function Ae(e, t) {
	let { inputRef: r, collectionRef: s, filter: l, disableAutoFocusFirst: te = !1, disableVirtualFocus: d = !1 } = e, p = ae(), m = (0, $.useRef)(void 0), h = (0, $.useRef)(!1), g = (0, $.useRef)(null), x = i() === `virtual` && (a() || o()), [S, C] = (0, $.useState)(!x && !d), [w, T] = (0, $.useState)(!1), [E, D] = (0, $.useState)(!1);
	(0, $.useEffect)(() => () => clearTimeout(m.current), []);
	let O = u((e) => {
		!e.isTrusted && S && r.current && c(f(r.current)) !== r.current && oe() !== `touch` && r.current.focus();
		let i = n(e);
		!e.isTrusted && i && g.current !== i.id && (clearTimeout(m.current), i === s.current ? g.current && !document.getElementById(g.current) && (g.current = null, t.setFocusedNodeId(null)) : h.current ? (g.current = i.id, m.current = setTimeout(() => {
			t.setFocusedNodeId(i.id);
		}, 500)) : (g.current = i.id, t.setFocusedNodeId(i.id)), h.current = !1);
	}), [k, A] = (0, $.useState)(null), j = (0, $.useCallback)((e) => {
		A(e), e == null ? T(!1) : (e.getAttribute(`tabindex`) != null && C(!1), T(!0));
	}, []);
	ee(() => (k?.addEventListener(`focusin`, O), () => {
		k?.removeEventListener(`focusin`, O);
	}), [k]);
	let M = ie((0, $.useMemo)(() => ne(s, j), [s, j])), N = (0, $.useCallback)(() => {
		s.current ? (h.current = !0, s.current?.dispatchEvent(new CustomEvent(_, {
			cancelable: !0,
			bubbles: !0,
			detail: { focusStrategy: `first` }
		}))) : D(!0);
	}, [s]), P = (0, $.useCallback)((e) => {
		D(!1), de(c()), g.current = null, t.setFocusedNodeId(null);
		let n = new CustomEvent(ue, {
			cancelable: !0,
			bubbles: !0,
			detail: { clearFocusKey: e }
		});
		clearTimeout(m.current), h.current = !1, s.current?.dispatchEvent(n);
	}, [s, t]), F = (0, $.useRef)(``);
	ce(r, `beforeinput`, (e) => {
		let { inputType: t } = e;
		F.current = t;
	});
	let I = (e) => {
		(F.current === `insertText` || F.current === `insertCompositionText` || F.current === `insertFromComposition`) && !te ? N() : F.current && (F.current.includes(`insert`) || F.current.includes(`delete`) || F.current.includes(`history`)) && (P(!0), b(document) === r.current && y(r.current, null)), t.setInputValue(e);
	}, L = (0, $.useRef)(null), R = (e) => {
		if (L.current = n(e), e.nativeEvent.isComposing) return;
		let t = g.current;
		switch (t !== null && f(r.current).getElementById(t) == null && (g.current = null, t = null), e.key) {
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
				let n = new CustomEvent(_, {
					cancelable: !0,
					bubbles: !0
				});
				s.current?.dispatchEvent(n);
				break;
			}
		}
		e.isPropagationStopped() || e.stopPropagation();
		let i = !0;
		if (s.current !== null) {
			if (t == null) i = s.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)) || !1;
			else {
				let n = document.getElementById(t);
				n && (i = n?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)) || !1);
			}
		}
		if (i) switch (e.key) {
			case `ArrowLeft`:
			case `ArrowRight`:
				P();
				break;
			case `Enter`: t != null && document.getElementById(t)?.dispatchEvent(new PointerEvent(`click`, e.nativeEvent));
		}
		else e.preventDefault();
	}, z = u((e) => {
		if (n(e) === L.current) {
			e.stopImmediatePropagation();
			let t = g.current;
			t == null ? s.current?.dispatchEvent(new KeyboardEvent(e.type, e)) : document.getElementById(t)?.dispatchEvent(new KeyboardEvent(e.type, e));
		}
	});
	(0, $.useEffect)(() => (document.addEventListener(`keyup`, z, !0), () => {
		document.removeEventListener(`keyup`, z, !0);
	}), []);
	let B = le(ke(ye), `@react-aria/autocomplete`), V = se({
		id: p,
		"aria-label": B.format(`collectionLabel`)
	}), H = (0, $.useCallback)((e, n) => !l || l(e, t.inputValue, n), [t.inputValue, l]), U = (e) => {
		if (!e.isTrusted) return;
		let t = g.current ? document.getElementById(g.current) : null;
		t && v(t, e.relatedTarget);
	}, W = (e) => {
		if (e.isTrusted && g.current && document.getElementById(g.current)) {
			let t = n(e);
			queueMicrotask(() => {
				v(t, s.current), y(s.current, t);
			});
		}
	}, G = (e) => {
		e.button === 0 && e.pointerType !== `touch` && g.current != null && r.current != null && n(e) === r.current && P();
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
		collectionProps: re(V, {
			shouldUseVirtualFocus: S,
			disallowTypeAhead: S,
			autoFocus: E ? `first` : !1
		}),
		collectionRef: M,
		filter: l == null ? void 0 : H
	};
}
function je(e) {
	let { onInputChange: t, inputValue: n, defaultInputValue: r = `` } = e, i = (e) => {
		t && t(e);
	}, [a, o] = (0, $.useState)(null), [s, c] = g(n, r, i);
	return {
		inputValue: s,
		setInputValue: c,
		focusedNodeId: a,
		setFocusedNodeId: o
	};
}
var Me = (0, $.createContext)(null), Ne = (0, $.createContext)(null), Pe = (0, $.createContext)(null), Fe = (0, $.createContext)(null);
function Ie(e) {
	let t = p(Me, e.slot);
	e = re(t, e);
	let { filter: n, disableAutoFocusFirst: r } = e, i = je(e), a = (0, $.useRef)(null), o = (0, $.useRef)(null), { inputProps: s, collectionProps: c, collectionRef: ee, filter: u } = Ae({
		...te(e),
		filter: n,
		disableAutoFocusFirst: r,
		inputRef: a,
		collectionRef: o
	}, i);
	return $.createElement(l, { values: [
		[Ne, i],
		[Fe, {
			...s,
			ref: a
		}],
		[Pe, {
			...c,
			filter: u,
			ref: ee
		}]
	] }, e.children);
}
export { Ee as a, y as c, _ as d, De as i, de as l, Fe as n, Oe as o, Pe as r, Q as s, Ie as t, ue as u };
