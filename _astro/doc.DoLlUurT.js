import { r as e, t } from "./rolldown-runtime.XKyaHtl9.js";
import { n, t as r } from "./react-dom.B9zIfLd2.js";
var i = e(n(), 1);
function a(...e) {
	return (...t) => {
		for (let n of e) typeof n == `function` && n(...t);
	};
}
var o = typeof document < `u` ? i.useLayoutEffect : () => {}, s = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
}, c = i.createContext(s), l = i.createContext(!1);
typeof window < `u` && window.document && window.document.createElement;
var u = new WeakMap();
function d(e = !1) {
	let t = (0, i.useContext)(c), n = (0, i.useRef)(null);
	if (n.current === null && !e) {
		let e = i.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (e) {
			let n = u.get(e);
			n == null ? u.set(e, {
				id: t.current,
				state: e.memoizedState
			}) : e.memoizedState !== n.state && (t.current = n.id, u.delete(e));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function f(e) {
	let t = (0, i.useContext)(c), n = d(!!e), r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function p(e) {
	let t = i.useId(), [n] = (0, i.useState)(v()), r = n ? `react-aria` : `react-aria${s.prefix}`;
	return e || `${r}-${t}`;
}
var m = typeof i.useId == `function` ? p : f;
function h() {
	return !1;
}
function g() {
	return !0;
}
function _(e) {
	return () => {};
}
function v() {
	return typeof i.useSyncExternalStore == `function` ? i.useSyncExternalStore(_, h, g) : (0, i.useContext)(l);
}
function y(e) {
	let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(t), a = (0, i.useRef)(null), s = (0, i.useRef)(() => {
		if (!a.current) return;
		let e = a.current.next();
		e.done ? a.current = null : r.current === e.value ? s.current() : n(e.value);
	});
	return o(() => {
		r.current = t, a.current && s.current();
	}), [t, (0, i.useCallback)((e) => {
		a.current = e(r.current), s.current();
	}, [s])];
}
var b = !!(typeof window < `u` && window.document && window.document.createElement), x = new Map(), S;
typeof FinalizationRegistry < `u` && (S = new FinalizationRegistry((e) => {
	x.delete(e);
}));
var C = new WeakMap();
function w(e) {
	let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), a = m(t), s = (0, i.useRef)(null), c = C.get(s);
	if (S && c !== a && (c != null && S.unregister(s), S.register(s, a, s), C.set(s, a)), b) {
		let e = x.get(a);
		e && !e.includes(r) ? e.push(r) : x.set(a, [r]);
	}
	return o(() => {
		let e = a;
		return () => {
			S && (S.unregister(s), C.delete(s)), x.delete(e);
		};
	}, [a]), (0, i.useEffect)(() => {
		let e = r.current;
		return e && n(e), () => {
			e && (r.current = null);
		};
	}), a;
}
function ee(e, t) {
	if (e === t) return e;
	let n = x.get(e);
	if (n) return n.forEach((e) => e.current = t), t;
	let r = x.get(t);
	return r ? (r.forEach((t) => t.current = e), e) : t;
}
function T(e = []) {
	let t = w(), [n, r] = y(t), a = (0, i.useCallback)(() => {
		r(function* () {
			yield t, yield document.getElementById(t) ? t : void 0;
		});
	}, [t, r]);
	return o(a, [
		t,
		a,
		...e
	]), n;
}
function E(...e) {
	return e.length === 1 && e[0] ? e[0] : (t) => {
		let n = !1, r = e.map((e) => {
			let r = te(e, t);
			return n ||= typeof r == `function`, r;
		});
		if (n) return () => {
			r.forEach((t, n) => {
				typeof t == `function` ? t() : te(e[n], null);
			});
		};
	};
}
function te(e, t) {
	if (typeof e == `function`) return e(t);
	e != null && (e.current = t);
}
function ne(e) {
	var t, n, r = ``;
	if (typeof e == `string` || typeof e == `number`) r += e;
	else if (typeof e == `object`) {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = ne(e[t])) && (r && (r += ` `), r += n);
		} else for (n in e) e[n] && (r && (r += ` `), r += n);
	}
	return r;
}
function re() {
	for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ne(e)) && (r && (r += ` `), r += t);
	return r;
}
function D(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], i = r[e];
			typeof n == `function` && typeof i == `function` && e[0] === `o` && e[1] === `n` && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, i) : (e === `className` || e === `UNSAFE_className`) && typeof n == `string` && typeof i == `string` ? t[e] = re(n, i) : e === `id` && n && i ? t.id = ee(n, i) : e === `ref` && n && i ? t.ref = E(n, i) : t[e] = i === void 0 ? n : i;
		}
	}
	return t;
}
function ie(e) {
	let t = (0, i.useRef)(null), n = (0, i.useRef)(void 0), r = (0, i.useCallback)((t) => {
		if (typeof e == `function`) {
			let n = e, r = n(t);
			return () => {
				typeof r == `function` ? r() : n(null);
			};
		}
		if (e) return e.current = t, () => {
			e.current = null;
		};
	}, [e]);
	return (0, i.useMemo)(() => ({
		get current() {
			return t.current;
		},
		set current(e) {
			t.current = e, n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
		}
	}), [r]);
}
var ae = Symbol(`default`);
function oe({ values: e, children: t }) {
	for (let [n, r] of e) t = i.createElement(n.Provider, { value: r }, t);
	return t;
}
function se(e) {
	let { className: t, style: n, children: r, defaultClassName: a, defaultChildren: o, defaultStyle: s, values: c, render: l } = e;
	return (0, i.useMemo)(() => {
		let e, i, u;
		return e = typeof t == `function` ? t({
			...c,
			defaultClassName: a
		}) : t, i = typeof n == `function` ? n({
			...c,
			defaultStyle: s || {}
		}) : n, u = typeof r == `function` ? r({
			...c,
			defaultChildren: o
		}) : r ?? o, {
			className: e ?? a,
			style: i || s ? {
				...s,
				...i
			} : void 0,
			children: u ?? o,
			"data-rac": ``,
			render: l ? (e) => l(e, c) : void 0
		};
	}, [
		t,
		n,
		r,
		a,
		o,
		s,
		c,
		l
	]);
}
function ce(e, t) {
	return (n) => t(typeof e == `function` ? e(n) : e, n);
}
function le(e, t) {
	let n = (0, i.useContext)(e);
	if (t === null) return null;
	if (n && typeof n == `object` && `slots` in n && n.slots) {
		let e = t || ae;
		if (!n.slots[e]) {
			let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)), r = t ? `Invalid slot "${t}".` : `A slot prop is required.`;
			throw Error(`${r} Valid slot names are ${e}.`);
		}
		return n.slots[e];
	}
	return n;
}
function ue(e, t, n) {
	let { ref: r, ...a } = le(n, e.slot) || {}, o = ie((0, i.useMemo)(() => E(t, r), [t, r])), s = D(a, e);
	return `style` in a && a.style && `style` in e && e.style && (s.style = typeof a.style == `function` || typeof e.style == `function` ? (t) => {
		let n = typeof a.style == `function` ? a.style(t) : a.style, r = {
			...t.defaultStyle,
			...n
		}, i = typeof e.style == `function` ? e.style({
			...t,
			defaultStyle: r
		}) : e.style;
		return {
			...r,
			...i
		};
	} : {
		...a.style,
		...e.style
	}), [s, o];
}
function de(e = !0) {
	let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(!1), a = (0, i.useCallback)((e) => {
		r.current = !0, n(!!e);
	}, []);
	return o(() => {
		r.current || n(!1);
	}, []), [a, t];
}
function fe(e) {
	let t = /^(data-.*)$/, n = {};
	for (let r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function pe(e, t, n) {
	let { render: r, ...a } = t, s = (0, i.useRef)(null), c = (0, i.useMemo)(() => E(n, s), [n, s]);
	o(() => {}, [e, r]);
	let l = {
		...a,
		ref: c
	};
	return r ? r(l, void 0) : i.createElement(e, l);
}
var me = {}, he = new Proxy({}, { get(e, t) {
	if (typeof t != `string`) return;
	let n = me[t];
	return n || (n = (0, i.forwardRef)(pe.bind(null, t)), me[t] = n), n;
} }), O = (e) => _e(e) ? e.document : ve(e) ? e : e?.ownerDocument ?? (typeof document < `u` ? document : void 0), k = (e) => O(e)?.defaultView ?? (typeof window < `u` ? window : void 0);
function ge(e) {
	return typeof e == `object` && !!e && `nodeType` in e && typeof e.nodeType == `number`;
}
function _e(e) {
	return typeof e == `object` && !!e && `window` in e && e.window === e;
}
function ve(e) {
	return ge(e) && e.nodeType === 9;
}
function ye(e) {
	return ge(e) && e.nodeType === 11 && `host` in e;
}
function be(e, t, n, r) {
	if (n == null || e == null) return () => {};
	let i = Array.isArray(e) ? e : [e];
	for (let e of i) e.addEventListener(t, n, r);
	return () => {
		for (let e of i) e.removeEventListener(t, n, r);
	};
}
function xe(e, t, n, r) {
	if (e == null) return () => {};
	let i = [], a = Array.isArray(e) ? e : [e];
	for (let e of a) {
		let a = e.style.getPropertyValue(t), o = e.style.getPropertyPriority(t);
		e.style.setProperty(t, n, r), i.unshift(() => {
			a ? e.style.setProperty(t, a, o) : e.style.removeProperty(t);
		});
	}
	return () => {
		for (let e of i) e();
	};
}
var Se = !1;
function Ce() {
	return Se;
}
function A(e, t) {
	if (!Ce()) return t && e ? e.contains(t) : !1;
	if (!e || !t) return !1;
	let n = t;
	for (; n != null;) {
		if (n === e) return !0;
		n = typeof n.assignedElements != `function` && n.assignedSlot?.parentNode ? n.assignedSlot.parentNode : ye(n) ? n.host : n.parentNode;
	}
	return !1;
}
var j = (e = document) => {
	if (!Ce()) return e.activeElement;
	let t = e.activeElement;
	for (; t && `shadowRoot` in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
};
function M(e) {
	if (Ce() && e.target instanceof Element && e.target.shadowRoot) {
		if (`composedPath` in e) return e.composedPath()[0] ?? null;
		if (`composedPath` in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
	}
	return e.target;
}
function we(e, t) {
	if (t === null) return [];
	t ??= k(e);
	let n = [t];
	if (!Ce() || !e || e === t) return n;
	let r = `getRootNode` in t ? t.getRootNode() : null, i = e.getRootNode() ?? null;
	for (; ye(i) && i !== r;) n.push(i), i = i.host.getRootNode();
	return n;
}
function Te(e) {
	if (!e) return !1;
	let t = e.getRootNode(), n = k(e);
	if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
	let r = t.activeElement;
	return r != null && e.contains(r);
}
function N(e) {
	e.focus({ preventScroll: !0 });
}
var Ee = typeof Element < `u` && `checkVisibility` in Element.prototype;
function De(e) {
	let t = k(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: n, visibility: r } = e.style, i = n !== `none` && r !== `hidden` && r !== `collapse`;
	if (i) {
		let { getComputedStyle: t } = k(e), { display: n, visibility: r } = t(e);
		i = n !== `none` && r !== `hidden` && r !== `collapse`;
	}
	return i;
}
function Oe(e, t) {
	return !e.hasAttribute(`hidden`) && !e.hasAttribute(`data-react-aria-prevent-focus`) && (e.nodeName === `DETAILS` && t && t.nodeName !== `SUMMARY` ? e.hasAttribute(`open`) : !0);
}
function ke(e, t) {
	return Ee ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest(`[data-react-aria-prevent-focus]`) : e.nodeName !== `#comment` && De(e) && Oe(e, t) && (!e.parentElement || ke(e.parentElement, e));
}
var Ae = [
	`input:not([disabled]):not([type=hidden])`,
	`select:not([disabled])`,
	`textarea:not([disabled])`,
	`button:not([disabled])`,
	`a[href]`,
	`area[href]`,
	`summary`,
	`iframe`,
	`object`,
	`embed`,
	`audio[controls]`,
	`video[controls]`,
	`[contenteditable]:not([contenteditable^="false"])`,
	`permission`
], je = Ae.join(`:not([hidden]),`) + `,[tabindex]:not([disabled]):not([hidden])`;
Ae.push(`[tabindex]:not([tabindex="-1"]):not([disabled])`);
var Me = Ae.join(`:not([hidden]):not([tabindex="-1"]),`);
function Ne(e, t) {
	return e.matches(je) && !Fe(e) && (t?.skipVisibilityCheck || ke(e));
}
function Pe(e) {
	return e.matches(Me) && ke(e) && !Fe(e);
}
function Fe(e) {
	let t = e;
	for (; t != null;) {
		if (t instanceof k(t).HTMLElement && t.inert) return !0;
		t = t.parentElement;
	}
	return !1;
}
function Ie(e) {
	let t = e;
	return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t;
}
function Le(e, t) {
	Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function Re(e) {
	let t = (0, i.useRef)({
		isFocused: !1,
		observer: null
	});
	return o(() => {
		let e = t.current;
		return () => {
			e.observer &&= (e.observer.disconnect(), null);
		};
	}, []), (0, i.useCallback)((n) => {
		let r = M(n);
		if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
			t.current.isFocused = !0;
			let n = r;
			n.addEventListener(`focusout`, (r) => {
				if (t.current.isFocused = !1, n.disabled) {
					let t = Ie(r);
					e?.(t);
				}
				t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
			}, { once: !0 }), t.current.observer = new MutationObserver(() => {
				if (t.current.isFocused && n.disabled) {
					t.current.observer?.disconnect();
					let e = n === j() ? null : j();
					n.dispatchEvent(new FocusEvent(`blur`, { relatedTarget: e })), n.dispatchEvent(new FocusEvent(`focusout`, {
						bubbles: !0,
						relatedTarget: e
					}));
				}
			}), t.current.observer.observe(n, {
				attributes: !0,
				attributeFilter: [`disabled`]
			});
		}
	}, [e]);
}
var ze = !1;
function Be(e) {
	for (; e && !Ne(e, { skipVisibilityCheck: !0 });) e = e.parentElement;
	let t = j(k(e).document);
	if (!t || t === e) return;
	let n = e?.getRootNode(), r = n != null && ye(n) ? n : k(e), i = (t) => t === e || ge(t) && A(e, t), a = (e) => e === t || t != null && ge(e) && A(t, e);
	ze = !0;
	let o = !1, s = (e) => {
		(a(M(e)) || o) && e.stopImmediatePropagation();
	}, c = (n) => {
		(a(M(n)) || o) && (n.stopImmediatePropagation(), !e && !o && (o = !0, N(t), d()));
	}, l = (e) => {
		(i(M(e)) || o) && e.stopImmediatePropagation();
	}, u = (e) => {
		(i(M(e)) || o) && (e.stopImmediatePropagation(), o || (o = !0, N(t), d()));
	};
	r.addEventListener(`blur`, s, !0), r.addEventListener(`focusout`, c, !0), r.addEventListener(`focusin`, u, !0), r.addEventListener(`focus`, l, !0);
	let d = () => {
		cancelAnimationFrame(f), r.removeEventListener(`blur`, s, !0), r.removeEventListener(`focusout`, c, !0), r.removeEventListener(`focusin`, u, !0), r.removeEventListener(`focus`, l, !0), ze = !1, o = !1;
	}, f = requestAnimationFrame(d);
	return d;
}
function Ve(e) {
	if (typeof window > `u` || window.navigator == null) return !1;
	let t = window.navigator.userAgentData?.brands;
	return Array.isArray(t) && t.some((t) => e.test(t.brand)) || e.test(window.navigator.userAgent);
}
function He(e) {
	return typeof window < `u` && window.navigator != null && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
}
function P(e) {
	let t = null;
	return () => (t ??= e(), t);
}
var F = P(function() {
	return He(/^Mac/i);
}), Ue = P(function() {
	return He(/^iPhone/i);
}), We = P(function() {
	return He(/^iPad/i) || F() && navigator.maxTouchPoints > 1;
}), I = P(function() {
	return Ue() || We();
}), Ge = P(function() {
	return F() || I();
}), Ke = P(function() {
	return Ve(/AppleWebKit/i) && (I() || !qe());
}), qe = P(function() {
	return Ve(/Chrome|CriOS|CrMo/i);
}), Je = P(function() {
	return Ve(/Android/i);
});
function Ye(e) {
	return e.pointerType === `` && e.isTrusted ? !0 : Je() && e.pointerType ? e.type === `click` && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Xe(e) {
	return !Je() && e.width === 0 && e.height === 0 || Je() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === `mouse`;
}
var Ze = (0, i.createContext)({
	isNative: !0,
	open: nt,
	useHref: (e) => e
});
function Qe(e) {
	let { children: t, navigate: n, useHref: r } = e, a = (0, i.useMemo)(() => ({
		isNative: !1,
		open: (e, t, r, i) => {
			tt(e, (e) => {
				et(e, t) ? n(r, i) : L(e, t);
			});
		},
		useHref: r || ((e) => e)
	}), [n, r]);
	return i.createElement(Ze.Provider, { value: a }, t);
}
function $e() {
	return (0, i.useContext)(Ze);
}
function et(e, t) {
	let n = e.getAttribute(`target`);
	return (!n || n === `_self`) && e.origin === location.origin && !e.hasAttribute(`download`) && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey;
}
function L(e, t, n = !0) {
	let { metaKey: r, ctrlKey: i, altKey: a, shiftKey: o } = t, s = Ke() && F() && !We() ? new KeyboardEvent(`keydown`, {
		keyIdentifier: `Enter`,
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o
	}) : new MouseEvent(`click`, {
		metaKey: r,
		ctrlKey: i,
		altKey: a,
		shiftKey: o,
		detail: 1,
		bubbles: !0,
		cancelable: !0
	});
	L.isOpening = n, N(e), e.dispatchEvent(s), L.isOpening = !1;
}
L.isOpening = !1;
function tt(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute(`data-href`)) {
		let n = document.createElement(`a`);
		n.href = e.getAttribute(`data-href`), e.hasAttribute(`data-target`) && (n.target = e.getAttribute(`data-target`)), e.hasAttribute(`data-rel`) && (n.rel = e.getAttribute(`data-rel`)), e.hasAttribute(`data-download`) && (n.download = e.getAttribute(`data-download`)), e.hasAttribute(`data-ping`) && (n.ping = e.getAttribute(`data-ping`)), e.hasAttribute(`data-referrer-policy`) && (n.referrerPolicy = e.getAttribute(`data-referrer-policy`)), e.appendChild(n), t(n), e.removeChild(n);
	}
}
function nt(e, t) {
	tt(e, (e) => L(e, t));
}
function rt(e) {
	let t = $e().useHref(e.href ?? ``);
	return {
		"data-href": e.href ? t : void 0,
		"data-target": e.target,
		"data-rel": e.rel,
		"data-download": e.download,
		"data-ping": e.ping,
		"data-referrer-policy": e.referrerPolicy
	};
}
function it(e) {
	let t = $e().useHref(e?.href ?? ``), n = {};
	if (e) for (let r of [
		`href`,
		`target`,
		`rel`,
		`download`,
		`ping`,
		`referrerPolicy`
	]) r in e && e[r] !== void 0 && (n[r] = r === `href` ? t : e[r]);
	return n;
}
function at(e, t, n, r) {
	!t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && et(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r));
}
var R = null, z = `keyboard`, B = new Set(), V = new Map(), H = !1, ot = !1, st = {
	Tab: !0,
	Escape: !0
};
function ct(e, t) {
	for (let n of B) n(e, t);
}
function lt(e) {
	return !(e.metaKey || !F() && e.altKey || e.ctrlKey || e.key === `Control` || e.key === `Shift` || e.key === `Meta`);
}
function ut(e) {
	H = !0, !L.isOpening && lt(e) && (R = `keyboard`, z = `keyboard`, ct(`keyboard`, e));
}
function U(e) {
	R = `pointer`, z = `pointerType` in e ? e.pointerType : `mouse`, (e.type === `mousedown` || e.type === `pointerdown`) && (H = !0, ct(`pointer`, e));
}
function dt(e) {
	!L.isOpening && Ye(e) && (H = !0, R = `virtual`, z = `virtual`);
}
function ft(e) {
	if (ze) return;
	let t = M(e), n = k(t), r = O(t);
	t === n ? ot = !0 : t !== r && e.isTrusted && (!H && !ot && (R = `virtual`, z = `virtual`, ct(`virtual`, e)), H = !1, ot = !1);
}
function pt() {
	ze || (H = !1, ot = !0);
}
function mt(e) {
	let t = j(O(M(e)));
	queueMicrotask(() => {
		j(O(M(e))) !== t && bt(`keyboard`);
	});
}
function ht(e) {
	if (typeof window > `u` || typeof document > `u`) return;
	let t = k(e), n = O(e);
	if (V.get(t)) return;
	let r = t.HTMLElement.prototype.focus;
	Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: function() {
			H = !0, r.apply(this, arguments);
		}
	}), n.addEventListener(`keydown`, ut, !0), n.addEventListener(`keyup`, ut, !0), n.addEventListener(`click`, dt, !0), n.addEventListener(`invalid`, mt, !0), t.addEventListener(`focus`, ft, !0), t.addEventListener(`blur`, pt, !1), typeof PointerEvent < `u` && (n.addEventListener(`pointerdown`, U, !0), n.addEventListener(`pointermove`, U, !0), n.addEventListener(`pointerup`, U, !0)), t.addEventListener(`beforeunload`, () => {
		gt(e);
	}, { once: !0 }), V.set(t, { focus: r });
}
var gt = (e, t) => {
	let n = k(e), r = O(e);
	t && r.removeEventListener(`DOMContentLoaded`, t), V.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: V.get(n).focus
	}), r.removeEventListener(`keydown`, ut, !0), r.removeEventListener(`keyup`, ut, !0), r.removeEventListener(`click`, dt, !0), r.removeEventListener(`invalid`, mt, !0), n.removeEventListener(`focus`, ft, !0), n.removeEventListener(`blur`, pt, !1), typeof PointerEvent < `u` && (r.removeEventListener(`pointerdown`, U, !0), r.removeEventListener(`pointermove`, U, !0), r.removeEventListener(`pointerup`, U, !0)), V.delete(n));
};
function _t(e) {
	let t = O(e), n;
	return t.readyState === `loading` ? (n = () => {
		ht(e);
	}, t.addEventListener(`DOMContentLoaded`, n)) : ht(e), () => gt(e, n);
}
typeof document < `u` && _t();
function vt() {
	return R !== `pointer`;
}
function yt() {
	return R;
}
function bt(e) {
	R = e, z = e === `pointer` ? `mouse` : e, ct(e, null);
}
function xt() {
	return z;
}
function St() {
	ht();
	let [e, t] = (0, i.useState)(R);
	return (0, i.useEffect)(() => {
		let e = () => {
			t(R);
		};
		return B.add(e), () => {
			B.delete(e);
		};
	}, []), v() ? null : e;
}
var Ct = new Set([
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
function wt(e, t, n) {
	let r = n ? M(n) : void 0, i = O(r), a = k(r), o = a === void 0 ? HTMLInputElement : a.HTMLInputElement, s = a === void 0 ? HTMLTextAreaElement : a.HTMLTextAreaElement, c = a === void 0 ? HTMLElement : a.HTMLElement, l = a === void 0 ? KeyboardEvent : a.KeyboardEvent, u = j(i);
	return e = e || u instanceof o && !Ct.has(u.type) || u instanceof s || u instanceof c && u.isContentEditable, !(e && t === `keyboard` && n instanceof l && !st[n.key]);
}
function Tt(e, t, n) {
	ht(), (0, i.useEffect)(() => {
		if (n?.enabled === !1) return;
		let t = (t, r) => {
			wt(!!n?.isTextInput, t, r) && e(vt());
		};
		return B.add(t), () => {
			B.delete(t);
		};
	}, t);
}
function Et(e, t) {
	let n = k(t), r = O(t);
	if (r == null || n == null) return;
	let i, a = `meta[name="${CSS.escape(e)}"], meta[property="${CSS.escape(e)}"]`, o = r.querySelector(a);
	return o && o instanceof n.HTMLMetaElement && (e === `csp-nonce` && o.nonce && (i ??= o.nonce || void 0), o.content && (i ??= o.content || void 0)), e === `csp-nonce` && (i ??= n.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), i;
}
var Dt = i.useInsertionEffect ?? o;
function Ot(e) {
	let t = (0, i.useRef)(null);
	return Dt(() => {
		t.current = e;
	}, [e]), (0, i.useCallback)((...e) => {
		let n = t.current;
		return n?.(...e);
	}, []);
}
function kt(e, t) {
	let { id: n, "aria-label": r, "aria-labelledby": i } = e;
	return n = w(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(` `) : i &&= i.trim().split(/\s+/).join(` `), !r && !i && t && (r = t), {
		id: n,
		"aria-label": r,
		"aria-labelledby": i
	};
}
var At = new Set([
	`Arab`,
	`Syrc`,
	`Samr`,
	`Mand`,
	`Thaa`,
	`Mend`,
	`Nkoo`,
	`Adlm`,
	`Rohg`,
	`Hebr`
]), jt = new Set([
	`ae`,
	`ar`,
	`arc`,
	`bcc`,
	`bqi`,
	`ckb`,
	`dv`,
	`fa`,
	`glk`,
	`he`,
	`ku`,
	`mzn`,
	`nqo`,
	`pnb`,
	`ps`,
	`sd`,
	`ug`,
	`ur`,
	`yi`
]);
function Mt(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == `function` ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === `rtl`;
		if (t.script) return At.has(t.script);
	}
	let t = e.split(`-`)[0];
	return jt.has(t);
}
var Nt = Symbol.for(`react-aria.i18n.locale`);
function Pt() {
	let e = typeof window < `u` && window[Nt] || typeof navigator < `u` && (navigator.language || navigator.userLanguage) || `en-US`;
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = `en-US`;
	}
	return {
		locale: e,
		direction: Mt(e) ? `rtl` : `ltr`
	};
}
var Ft = Pt(), It = new Set();
function Lt() {
	Ft = Pt();
	for (let e of It) e(Ft);
}
function Rt() {
	let e = v(), [t, n] = (0, i.useState)(Ft);
	return (0, i.useEffect)(() => (It.size === 0 && window.addEventListener(`languagechange`, Lt), It.add(n), () => {
		It.delete(n), It.size === 0 && window.removeEventListener(`languagechange`, Lt);
	}), []), e ? {
		locale: typeof window < `u` && window[Nt] || `en-US`,
		direction: `ltr`
	} : t;
}
var zt = i.createContext(null);
function Bt() {
	let e = Rt();
	return (0, i.useContext)(zt) || e;
}
var W = new Map(), Vt = new Set();
function Ht(e) {
	return `propertyName` in e;
}
function Ut(e) {
	let t = M(e);
	if (!Ht(e) || !t) return;
	let n = W.get(t);
	n || (n = new Set(), W.set(t, n), t.addEventListener(`transitioncancel`, Wt, { once: !0 })), n.add(e.propertyName);
}
function Wt(e) {
	let t = M(e);
	if (!Ht(e) || !t) return;
	let n = W.get(t);
	if (n && (n.delete(e.propertyName), n.size === 0 && (t.removeEventListener(`transitioncancel`, Wt), W.delete(t)), W.size === 0)) for (let e of Vt) e(!0), Vt.delete(e);
}
function Gt() {
	be(document, `transitionrun`, Ut), be(document, `transitionend`, Wt);
}
function Kt() {
	for (let [e] of W) `isConnected` in e && !e.isConnected && W.delete(e);
}
typeof document < `u` && (document.readyState === `loading` ? be(document, `DOMContentLoaded`, Gt) : Gt());
function qt(e) {
	let t = window.requestAnimationFrame(() => {
		if (Kt(), W.size === 0) return e(!1);
		Vt.add(e);
	});
	return () => {
		window.cancelAnimationFrame(t), Vt.delete(e);
	};
}
function Jt(e) {
	if (!e.isConnected) return;
	let t = O(e);
	if (yt() === `virtual`) {
		let n = j(t);
		qt(() => {
			let r = j(t);
			(r === n || r === t.body) && e.isConnected && N(e);
		});
	} else N(e);
}
function Yt(e) {
	let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e, o = (0, i.useCallback)((e) => {
		if (M(e) === e.currentTarget) return r && r(e), a && a(!1), !0;
	}, [r, a]), s = Re(o), c = (0, i.useCallback)((e) => {
		let t = M(e), r = O(t), i = r ? j(r) : j();
		t === e.currentTarget && t === i && (n && n(e), a && a(!0), s(e));
	}, [
		a,
		n,
		s
	]);
	return { focusProps: {
		onFocus: !t && (n || a || r) ? c : void 0,
		onBlur: !t && (r || a) ? o : void 0
	} };
}
function Xt(e) {
	if (e) return (t) => {
		let n = !0;
		e({
			...t,
			preventDefault() {
				t.preventDefault();
			},
			isDefaultPrevented() {
				return t.isDefaultPrevented();
			},
			stopPropagation() {
				n = !0;
			},
			continuePropagation() {
				n = !1, typeof t.continuePropagation == `function` && t.continuePropagation();
			},
			isPropagationStopped() {
				return n;
			}
		}), n && !(typeof t.isPropagationStopped == `function` && t.isPropagationStopped()) && t.stopPropagation();
	};
}
var Zt = new Set([
	`shift`,
	`alt`,
	`control`,
	`meta`,
	`mod`
]), Qt = [
	`Alt`,
	`Control`,
	`Meta`,
	`Shift`
];
function $t(e) {
	let t = new Set();
	return e.alt && t.add(`Alt`), e.shift && t.add(`Shift`), e.ctrl && t.add(`Control`), e.meta && t.add(`Meta`), e.mod && t.add(F() ? `Meta` : `Control`), t;
}
function en(e) {
	let t = new Set();
	return e.altKey && t.add(`Alt`), e.ctrlKey && t.add(`Control`), e.metaKey && t.add(`Meta`), e.shiftKey && t.add(`Shift`), t;
}
function tn(e) {
	return Qt.filter((t) => e.has(t));
}
function nn(e) {
	let t = e.split(`+`).reduce((e, t) => {
		let n = t.toLowerCase();
		return Zt.has(n) ? n === `shift` ? e.shift = !0 : n === `alt` ? e.alt = !0 : n === `control` ? e.ctrl = !0 : n === `meta` ? e.meta = !0 : n === `mod` && (e.mod = !0) : e.key = t, e;
	}, {
		shift: !1,
		alt: !1,
		ctrl: !1,
		meta: !1,
		mod: !1,
		key: ``
	});
	if (t.key === ``) throw Error(`Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
	return t;
}
function rn(e) {
	return e.toLowerCase();
}
var an = {
	space: ` `,
	esc: `escape`,
	del: `delete`,
	ins: `insert`,
	left: `arrowleft`,
	right: `arrowright`,
	up: `arrowup`,
	down: `arrowdown`,
	pageup: `pageup`,
	pagedown: `pagedown`
};
function on(e) {
	let t = rn(e);
	return an[t] ?? t;
}
function sn(e) {
	let t = tn($t(e)), n = on(e.key);
	return t.length > 0 ? `${t.join(`+`)}+${n}` : n;
}
function cn(e) {
	let t = tn(en(e)), n = rn(e.key);
	return (t.length > 0 ? `${t.join(`+`)}+` : ``) + n;
}
function ln(e) {
	let t = new Map();
	for (let [n, r] of Object.entries(e)) {
		let e = nn(n);
		t.set(sn(e), r);
	}
	return (e) => {
		let n = cn(e), r = t.get(n), i = r?.(e);
		i === void 0 && r !== void 0 ? i = {
			shouldContinuePropagation: !1,
			shouldPreventDefault: !0
		} : typeof i == `boolean` && (i = {
			shouldContinuePropagation: !i,
			shouldPreventDefault: i
		}), i?.shouldPreventDefault && e.preventDefault(), (!r || i?.shouldContinuePropagation) && e.continuePropagation();
	};
}
function un(e) {
	let { shortcuts: t, allowRepeats: n = !1, allowComposing: r = !1 } = e, i, o;
	if (t) {
		let s = ln(t), c = Xt((e) => {
			A(e.currentTarget, M(e)) ? e.nativeEvent?.repeat && !n || e.nativeEvent?.isComposing && !r ? e.continuePropagation() : s(e) : e.continuePropagation();
		}), l = Xt((e) => {
			A(e.currentTarget, M(e)) && (e.nativeEvent?.repeat && !n || e.nativeEvent?.isComposing), e.continuePropagation();
		});
		i = e.onKeyDown ? a(e.onKeyDown, c) : c, o = e.onKeyUp ? a(e.onKeyUp, l) : l;
	} else i = Xt(e.onKeyDown), o = Xt(e.onKeyUp);
	return { keyboardProps: e.isDisabled ? {} : {
		onKeyDown: i,
		onKeyUp: o
	} };
}
function dn(e, t) {
	o(() => {
		if (e && e.ref && t) return e.ref.current = t.current, () => {
			e.ref && (e.ref.current = null);
		};
	});
}
var fn = i.createContext(null);
function pn(e) {
	let t = (0, i.useContext)(fn) || {};
	dn(t, e);
	let { ref: n, ...r } = t;
	return r;
}
var mn = i.forwardRef(function(e, t) {
	let { children: n, ...r } = e, a = ie(t), o = {
		...r,
		ref: a
	};
	return i.createElement(fn.Provider, { value: o }, n);
});
function hn(e, t) {
	let { focusProps: n } = Yt(e), { keyboardProps: r } = un(e), a = D(n, r), o = pn(t), s = e.isDisabled ? {} : o, c = (0, i.useRef)(e.autoFocus);
	(0, i.useEffect)(() => {
		c.current && t.current && Jt(t.current), c.current = !1;
	}, [t]);
	let l = e.excludeFromTabOrder ? -1 : 0;
	return e.isDisabled && (l = void 0), { focusableProps: D({
		...a,
		tabIndex: l
	}, s) };
}
typeof HTMLTemplateElement < `u` && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
	configurable: !0,
	enumerable: !0,
	get: function() {
		return this.content.firstChild;
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.appendChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
	configurable: !0,
	enumerable: !0,
	value: function(e) {
		return this.content.removeChild(e);
	}
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
	configurable: !0,
	enumerable: !0,
	value: function(e, t) {
		return this.content.insertBefore(e, t);
	}
}));
var gn = (0, i.createContext)(!1);
function _n(e) {
	if ((0, i.useContext)(gn)) return i.createElement(i.Fragment, null, e.children);
	let t = i.createElement(gn.Provider, { value: !0 }, e.children);
	return i.createElement(`template`, null, t);
}
function vn(e) {
	let t = (t, n) => (0, i.useContext)(gn) ? null : e(t, n);
	return t.displayName = e.displayName || e.name, (0, i.forwardRef)(t);
}
function yn() {
	return (0, i.useContext)(gn);
}
var bn = new Set([`id`]), xn = new Set([
	`aria-label`,
	`aria-labelledby`,
	`aria-describedby`,
	`aria-details`
]), Sn = new Set([
	`href`,
	`hrefLang`,
	`target`,
	`rel`,
	`download`,
	`ping`,
	`referrerPolicy`
]), Cn = new Set([
	`dir`,
	`lang`,
	`hidden`,
	`inert`,
	`translate`,
	`suppressHydrationWarning`
]), wn = new Set(`onClick.onAuxClick.onContextMenu.onDoubleClick.onMouseDown.onMouseEnter.onMouseLeave.onMouseMove.onMouseOut.onMouseOver.onMouseUp.onTouchCancel.onTouchEnd.onTouchMove.onTouchStart.onPointerDown.onPointerMove.onPointerUp.onPointerCancel.onPointerEnter.onPointerLeave.onPointerOver.onPointerOut.onGotPointerCapture.onLostPointerCapture.onScroll.onWheel.onAnimationStart.onAnimationEnd.onAnimationIteration.onTransitionCancel.onTransitionEnd.onTransitionRun.onTransitionStart`.split(`.`)), Tn = /^(data-.*)$/;
function En(e, t = {}) {
	let { labelable: n, isLink: r, global: i, events: a = i, propNames: o } = t, s = {};
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (bn.has(t) || n && xn.has(t) || r && Sn.has(t) || i && Cn.has(t) || a && (wn.has(t) || t.endsWith(`Capture`) && wn.has(t.slice(0, -7))) || o?.has(t) || Tn.test(t)) && (s[t] = e[t]);
	return s;
}
var G = `default`, Dn = ``, On = new WeakMap();
function kn(e) {
	if (I() && Ke()) {
		if (G === "default") {
			let t = O(e);
			Dn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = `none`;
		}
		G = `disabled`;
	} else if (e instanceof HTMLElement || e instanceof SVGElement) {
		let t = `userSelect` in e.style ? `userSelect` : `webkitUserSelect`;
		On.set(e, e.style[t]), e.style[t] = `none`;
	}
}
function An(e) {
	if (I() && Ke()) {
		if (G !== `disabled`) return;
		G = `restoring`, setTimeout(() => {
			qt(() => {
				if (G === `restoring`) {
					let t = O(e);
					t.documentElement.style.webkitUserSelect === `none` && (t.documentElement.style.webkitUserSelect = Dn || ``), Dn = ``, G = `default`;
				}
			});
		}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && On.has(e)) {
		let t = On.get(e), n = `userSelect` in e.style ? `userSelect` : `webkitUserSelect`;
		e.style[n] === `none` && (e.style[n] = t), e.getAttribute(`style`) === `` && e.removeAttribute(`style`), On.delete(e);
	}
}
var jn = new WeakMap();
function Mn(e) {
	let t = O(e), n = jn.get(t);
	return n ??= Et(`csp-nonce`, t), n !== void 0 && jn.set(t, n), n;
}
var Nn = i.createContext({ register: () => {} });
Nn.displayName = `PressResponderContext`;
function Pn() {
	let e = (0, i.useRef)(new Map()), t = (0, i.useCallback)((t, n, r, i) => {
		let a = i?.once ? (...t) => {
			e.current.delete(r), r(...t);
		} : r;
		e.current.set(r, {
			type: n,
			eventTarget: t,
			fn: a,
			options: i
		}), t.addEventListener(n, a, i);
	}, []), n = (0, i.useCallback)((t, n, r, i) => {
		let a = e.current.get(r)?.fn || r;
		t.removeEventListener(n, a, i), e.current.delete(r);
	}, []), r = (0, i.useCallback)(() => {
		e.current.forEach((e, t) => {
			n(e.eventTarget, e.type, t, e.options);
		});
	}, [n]);
	return (0, i.useEffect)(() => r, [r]), {
		addGlobalListener: t,
		removeGlobalListener: n,
		removeAllGlobalListeners: r
	};
}
r();
function Fn(e) {
	let t = (0, i.useContext)(Nn);
	if (t) {
		let { register: n, ref: r, ...i } = t;
		e = D(i, e), n();
	}
	return dn(t, e.ref), e;
}
var In = class {
	#e;
	constructor(e, t, n, r) {
		this.#e = !0;
		let i = (r?.target ?? n.currentTarget)?.getBoundingClientRect(), a, o = 0, s, c = null;
		n.clientX != null && n.clientY != null && (s = n.clientX, c = n.clientY), i && (s != null && c != null ? (a = s - i.left, o = c - i.top) : (a = i.width / 2, o = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = o, this.key = n.key;
	}
	continuePropagation() {
		this.#e = !1;
	}
	get shouldStopPropagation() {
		return this.#e;
	}
}, Ln = Symbol(`linkClicked`), Rn = `react-aria-pressable-style`, zn = `data-react-aria-pressable`;
function Bn(e) {
	let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: o, onPressUp: s, onClick: c, isDisabled: l, isPressed: u, preventFocusOnPress: d, shouldCancelOnPointerExit: f, allowTextSelectionOnPress: p, ref: m, ...h } = Fn(e), [g, _] = (0, i.useState)(!1), v = (0, i.useRef)({
		isPressed: !1,
		ignoreEmulatedMouseEvents: !1,
		didFirePressStart: !1,
		isTriggeringEvent: !1,
		activePointerId: null,
		target: null,
		isOverTarget: !1,
		pointerType: null,
		disposables: []
	}), { addGlobalListener: y, removeAllGlobalListeners: b } = Pn(), x = (0, i.useCallback)((e, t) => {
		let i = v.current;
		if (l || i.didFirePressStart) return !1;
		let a = !0;
		if (i.isTriggeringEvent = !0, r) {
			let n = new In(`pressstart`, t, e);
			r(n), a = n.shouldStopPropagation;
		}
		return n && n(!0), i.isTriggeringEvent = !1, i.didFirePressStart = !0, _(!0), a;
	}, [
		l,
		r,
		n
	]), S = (0, i.useCallback)((e, r, i = !0) => {
		let a = v.current;
		if (!a.didFirePressStart) return !1;
		a.didFirePressStart = !1, a.isTriggeringEvent = !0;
		let s = !0;
		if (o) {
			let t = new In(`pressend`, r, e);
			o(t), s = t.shouldStopPropagation;
		}
		if (n && n(!1), _(!1), t && i && !l) {
			let n = new In(`press`, r, e);
			t(n), s &&= n.shouldStopPropagation;
		}
		return a.isTriggeringEvent = !1, s;
	}, [
		l,
		o,
		n,
		t
	]), C = Ot(S), w = Ot((0, i.useCallback)((e, t) => {
		let n = v.current;
		if (l) return !1;
		if (s) {
			n.isTriggeringEvent = !0;
			let r = new In(`pressup`, t, e);
			return s(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
		}
		return !0;
	}, [l, s])), ee = (0, i.useCallback)((e) => {
		let t = v.current;
		if (t.isPressed && t.target) {
			t.didFirePressStart && t.pointerType != null && S(K(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), p || An(t.target);
			for (let e of t.disposables) e();
			t.disposables = [];
		}
	}, [
		p,
		b,
		S
	]), T = Ot(ee);
	(0, i.useEffect)(() => {
		l && v.current.isPressed && T({
			currentTarget: v.current.target,
			shiftKey: !1,
			ctrlKey: !1,
			metaKey: !1,
			altKey: !1
		});
	}, [l]);
	let E = (0, i.useCallback)((e) => {
		f && ee(e);
	}, [f, ee]), te = (0, i.useCallback)((e) => {
		l || c?.(e);
	}, [l, c]), ne = (0, i.useCallback)((e, t) => {
		if (!l && c) {
			let n = new MouseEvent(`click`, e);
			Le(n, t), c(Ie(n));
		}
	}, [l, c]), re = (0, i.useMemo)(() => {
		let e = v.current, t = {
			onKeyDown(t) {
				if (Hn(t.nativeEvent, t.currentTarget) && A(t.currentTarget, M(t))) {
					Wn(M(t), t.key) && t.preventDefault();
					let r = !0;
					!e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = `keyboard`, r = x(t, `keyboard`));
					let i = t.currentTarget;
					y(O(t.currentTarget), `keyup`, a((t) => {
						Hn(t, i) && !t.repeat && A(i, M(t)) && e.target && w(K(e.target, t), `keyboard`);
					}, n), !0), r && t.stopPropagation(), t.metaKey && F() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
				} else t.key === `Meta` && (e.metaKeyEvents = new Map());
			},
			onClick(t) {
				if ((!t || A(t.currentTarget, M(t))) && t && t.button === 0 && !e.isTriggeringEvent && !L.isOpening) {
					let n = !0;
					if (l && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && (e.pointerType === `virtual` || Ye(t.nativeEvent))) {
						let e = x(t, `virtual`), r = w(t, `virtual`), i = C(t, `virtual`);
						te(t), n = e && r && i;
					} else if (e.isPressed && e.pointerType !== `keyboard`) {
						let r = e.pointerType || t.nativeEvent.pointerType || `virtual`, i = w(K(t.currentTarget, t), r), a = C(K(t.currentTarget, t), r, !0);
						n = i && a, e.isOverTarget = !1, te(t), T(t);
					}
					e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
				}
			}
		}, n = (t) => {
			if (e.isPressed && e.target && Hn(t, e.target)) {
				Wn(M(t), t.key) && t.preventDefault();
				let n = M(t), r = A(e.target, n);
				C(K(e.target, t), `keyboard`, r), r && ne(t, e.target), b(), t.key !== `Enter` && Vn(e.target) && A(e.target, n) && !t[Ln] && (t[Ln] = !0, L(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
			} else if (t.key === `Meta` && e.metaKeyEvents?.size) {
				let t = e.metaKeyEvents;
				e.metaKeyEvents = void 0;
				for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent(`keyup`, n));
			}
		};
		if (typeof PointerEvent < `u`) {
			t.onPointerDown = (t) => {
				if (t.button !== 0 || !A(t.currentTarget, M(t))) return;
				if (Xe(t.nativeEvent)) {
					e.pointerType = `virtual`;
					return;
				}
				e.pointerType = t.pointerType;
				let i = !0;
				if (!e.isPressed) {
					e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, p || kn(e.target), i = x(t, e.pointerType);
					let a = M(t);
					`releasePointerCapture` in a && (`hasPointerCapture` in a ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId) : a.releasePointerCapture(t.pointerId)), y(O(t.currentTarget), `pointerup`, n, !1), y(O(t.currentTarget), `pointercancel`, r, !1);
				}
				i && t.stopPropagation();
			}, t.onMouseDown = (t) => {
				if (A(t.currentTarget, M(t)) && t.button === 0) {
					if (d) {
						let n = Be(t.target);
						n && e.disposables.push(n);
					}
					t.stopPropagation();
				}
			}, t.onPointerUp = (t) => {
				A(t.currentTarget, M(t)) && e.pointerType !== `virtual` && t.button === 0 && !e.isPressed && w(t, e.pointerType || t.pointerType);
			}, t.onPointerEnter = (t) => {
				t.pointerId === e.activePointerId && e.target && !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, x(K(e.target, t), e.pointerType));
			}, t.onPointerLeave = (t) => {
				t.pointerId === e.activePointerId && e.target && e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, C(K(e.target, t), e.pointerType, !1), E(t));
			};
			let n = (t) => {
				if (t.pointerId === e.activePointerId && e.isPressed && t.button === 0 && e.target) {
					if (A(e.target, M(t)) && e.pointerType != null) {
						let n = !1, r = setTimeout(() => {
							e.isPressed && e.target instanceof HTMLElement && (n ? T(t) : (N(e.target), e.target.click()));
						}, 80);
						y(t.currentTarget, `click`, () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
					} else T(t);
					e.isOverTarget = !1;
				}
			}, r = (e) => {
				T(e);
			};
			t.onDragStart = (e) => {
				A(e.currentTarget, M(e)) && T(e);
			};
		}
		return t;
	}, [
		y,
		l,
		d,
		b,
		p,
		E,
		x,
		te,
		ne
	]);
	return (0, i.useEffect)(() => {
		if (!m) return;
		let e = O(m.current);
		if (!e || !e.head || e.getElementById(Rn)) return;
		let t = e.createElement(`style`);
		t.id = Rn;
		let n = Mn(e);
		n && (t.nonce = n), t.textContent = `
@layer {
  [${zn}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
	}, [m]), (0, i.useEffect)(() => {
		let e = v.current;
		return () => {
			p || An(e.target ?? void 0);
			for (let t of e.disposables) t();
			e.disposables = [];
		};
	}, [p]), {
		isPressed: u || g,
		pressProps: D(h, re, { [zn]: !0 })
	};
}
function Vn(e) {
	return e.tagName === `A` && e.hasAttribute(`href`);
}
function Hn(e, t) {
	let { key: n, code: r } = e, i = t, a = i.getAttribute(`role`);
	return (n === `Enter` || n === ` ` || n === `Spacebar` || r === `Space`) && !(i instanceof k(i).HTMLInputElement && !Kn(i, n) || i instanceof k(i).HTMLTextAreaElement || i.isContentEditable) && !((a === `link` || !a && Vn(i)) && n !== `Enter`);
}
function K(e, t) {
	let n = t.clientX, r = t.clientY;
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: r,
		key: t.key
	};
}
function Un(e) {
	return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== `submit` && e.type !== `reset` : !Vn(e);
}
function Wn(e, t) {
	return F() && t === `Enter` ? !1 : e instanceof HTMLInputElement ? t === `Enter` && (e.type === `checkbox` || e.type === `radio`) ? !1 : !Kn(e, t) : Un(e);
}
var Gn = new Set([
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
function Kn(e, t) {
	return e.type === `checkbox` || e.type === `radio` ? t === ` ` : Gn.has(e.type);
}
function qn(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, o = (0, i.useRef)({ isFocusWithin: !1 }), { addGlobalListener: s, removeAllGlobalListeners: c } = Pn(), l = (0, i.useCallback)((e) => {
		A(e.currentTarget, M(e)) && o.current.isFocusWithin && !A(e.currentTarget, e.relatedTarget) && (o.current.isFocusWithin = !1, c(), n && n(e), a && a(!1));
	}, [
		n,
		a,
		o,
		c
	]), u = Re(l), d = (0, i.useCallback)((e) => {
		if (!A(e.currentTarget, M(e))) return;
		let t = M(e), n = O(t), i = j(n);
		if (!o.current.isFocusWithin && i === t) {
			r && r(e), a && a(!0), o.current.isFocusWithin = !0, u(e);
			let t = e.currentTarget;
			s(n, `focus`, (e) => {
				let r = M(e);
				if (o.current.isFocusWithin && !A(t, r)) {
					let e = new n.defaultView.FocusEvent(`blur`, { relatedTarget: r });
					Le(e, t);
					let i = Ie(e);
					l(i);
				}
			}, { capture: !0 });
		}
	}, [
		r,
		a,
		u,
		s,
		l
	]);
	return t ? { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} } : { focusWithinProps: {
		onFocus: d,
		onBlur: l
	} };
}
function Jn(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: r } = e, a = (0, i.useRef)({
		isFocused: !1,
		isFocusVisible: t || vt()
	}), [o, s] = (0, i.useState)(!1), [c, l] = (0, i.useState)(() => a.current.isFocused && a.current.isFocusVisible), u = (0, i.useCallback)(() => l(a.current.isFocused && a.current.isFocusVisible), []), d = (0, i.useCallback)((e) => {
		a.current.isFocused = e, a.current.isFocusVisible = vt(), s(e), u();
	}, [u]);
	Tt((e) => {
		a.current.isFocusVisible = e, u();
	}, [n, o], {
		enabled: o,
		isTextInput: n
	});
	let { focusProps: f } = Yt({
		isDisabled: r,
		onFocusChange: d
	}), { focusWithinProps: p } = qn({
		isDisabled: !r,
		onFocusWithinChange: d
	});
	return {
		isFocused: o,
		isFocusVisible: c,
		focusProps: r ? p : f
	};
}
var Yn = !1, Xn = 0;
function Zn() {
	Yn = !0, setTimeout(() => {
		Yn = !1;
	}, 500);
}
function Qn(e) {
	e.pointerType === `touch` && Zn();
}
function $n() {
	let e = O(null);
	if (e !== void 0) return Xn === 0 && typeof PointerEvent < `u` && e.addEventListener(`pointerup`, Qn), Xn++, () => {
		Xn--, Xn > 0 || typeof PointerEvent < `u` && e.removeEventListener(`pointerup`, Qn);
	};
}
function er(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [o, s] = (0, i.useState)(!1), c = (0, i.useRef)({
		isHovered: !1,
		ignoreEmulatedMouseEvents: !1,
		pointerType: ``,
		target: null
	}).current;
	(0, i.useEffect)($n, []);
	let { addGlobalListener: l, removeAllGlobalListeners: u } = Pn(), { hoverProps: d, triggerHoverEnd: f } = (0, i.useMemo)(() => {
		let e = (e, r) => {
			if (c.pointerType = r, a || r === `touch` || c.isHovered || !A(e.currentTarget, M(e))) return;
			c.isHovered = !0;
			let o = e.currentTarget;
			c.target = o, l(O(M(e)), `pointerover`, (e) => {
				c.isHovered && c.target && !A(c.target, M(e)) && i(e, e.pointerType);
			}, { capture: !0 }), t && t({
				type: `hoverstart`,
				target: o,
				pointerType: r
			}), n && n(!0), s(!0);
		}, i = (e, t) => {
			let i = c.target;
			c.pointerType = ``, c.target = null, t !== `touch` && c.isHovered && i && (c.isHovered = !1, u(), r && r({
				type: `hoverend`,
				target: i,
				pointerType: t
			}), n && n(!1), s(!1));
		}, o = {};
		return typeof PointerEvent < `u` && (o.onPointerEnter = (t) => {
			Yn && t.pointerType === `mouse` || e(t, t.pointerType);
		}, o.onPointerLeave = (e) => {
			!a && A(e.currentTarget, M(e)) && i(e, e.pointerType);
		}), {
			hoverProps: o,
			triggerHoverEnd: i
		};
	}, [
		t,
		n,
		r,
		a,
		c,
		l,
		u
	]);
	return (0, i.useEffect)(() => {
		a && f({ currentTarget: c.target }, c.pointerType);
	}, [a]), {
		hoverProps: d,
		isHovered: o
	};
}
var tr = (0, i.createContext)({}), nr = vn(function(e, t) {
	[e, t] = ue(e, t, tr);
	let { elementType: n = `label`, ...r } = e, a = he[n];
	return i.createElement(a, {
		className: `react-aria-Label`,
		...r,
		ref: t
	});
});
function rr(e) {
	let { id: t, label: n, "aria-labelledby": r, "aria-label": i, labelElementType: a = `label` } = e;
	t = w(t);
	let o = w(), s = {};
	n && (r = r ? `${o} ${r}` : o, s = {
		id: o,
		htmlFor: a === `label` ? t : void 0
	});
	let c = kt({
		id: t,
		"aria-label": i,
		"aria-labelledby": r
	});
	return {
		labelProps: s,
		fieldProps: c
	};
}
var ir = new Map(), ar = !1;
try {
	ar = new Intl.NumberFormat(`de-DE`, { signDisplay: `exceptZero` }).resolvedOptions().signDisplay === `exceptZero`;
} catch {}
var or = class {
	constructor(e, t = {}) {
		this.numberFormatter = sr(e, t), this.options = t;
	}
	format(e) {
		let t = ``;
		return t = !ar && this.options.signDisplay != null ? cr(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), t;
	}
	formatToParts(e) {
		return this.numberFormatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.numberFormatter.formatRange == `function`) return this.numberFormatter.formatRange(e, t);
		if (t < e) throw RangeError(`End date must be >= start date`);
		return `${this.format(e)} \u{2013} ${this.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.numberFormatter.formatRangeToParts == `function`) return this.numberFormatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError(`End date must be >= start date`);
		let n = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: `startRange`
			})),
			{
				type: `literal`,
				value: ` – `,
				source: `shared`
			},
			...r.map((e) => ({
				...e,
				source: `endRange`
			}))
		];
	}
	resolvedOptions() {
		let e = this.numberFormatter.resolvedOptions();
		return !ar && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), e;
	}
};
function sr(e, t = {}) {
	let { numberingSystem: n } = t;
	n && e.includes(`-nu-`) && (e.includes(`-u-`) || (e += `-u-`), e += `-nu-${n}`);
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``);
	if (ir.has(r)) return ir.get(r);
	let i = new Intl.NumberFormat(e, t);
	return ir.set(r, i), i;
}
function cr(e, t, n) {
	if (t === `auto`) return e.format(n);
	if (t === `never`) return e.format(Math.abs(n));
	{
		let r = !1;
		if (t === `always` ? r = n > 0 || Object.is(n, 0) : t === `exceptZero` && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
			let t = e.format(-n), r = e.format(n), i = t.replace(r, ``).replace(/\u200e|\u061C/, ``);
			return [...i].length !== 1 && console.warn(`@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case`), t.replace(r, `!!!`).replace(i, `+`).replace(`!!!`, r);
		}
		return e.format(n);
	}
}
function lr(e = {}) {
	let { locale: t } = Bt();
	return (0, i.useMemo)(() => new or(t, e), [t, e]);
}
function ur(e, t = -1 / 0, n = 1 / 0) {
	return Math.min(Math.max(e, t), n);
}
function dr(e, t) {
	let n = e, r = 0, i = t.toString(), a = i.toLowerCase().indexOf(`e-`);
	if (a > 0) r = Math.abs(Math.floor(Math.log10(Math.abs(t)))) + a;
	else {
		let e = i.indexOf(`.`);
		e >= 0 && (r = i.length - e);
	}
	if (r > 0) {
		let e = 10 ** r;
		n = Math.round(n * e) / e;
	}
	return n;
}
function fr(e, t, n, r) {
	t = Number(t), n = Number(n);
	let i = (e - (isNaN(t) ? 0 : t)) % r, a = dr(Math.abs(i) * 2 >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
	return isNaN(t) ? !isNaN(n) && a > n && (a = Math.floor(dr(n / r, r)) * r) : a < t ? a = t : !isNaN(n) && a > n && (a = t + Math.floor(dr((n - t) / r, r)) * r), a = dr(a, r), a;
}
function pr(e, t, n = 10) {
	let r = n ** +t;
	return Math.round(e * r) / r;
}
function mr(e) {
	let { value: t = 0, minValue: n = 0, maxValue: r = 100, valueLabel: i, isIndeterminate: a, formatOptions: o = { style: `percent` } } = e, s = En(e, { labelable: !0 }), { labelProps: c, fieldProps: l } = rr({
		...e,
		labelElementType: `span`
	});
	t = ur(t, n, r);
	let u = r - n, d = u === 0 ? 0 : (t - n) / u, f = lr(o);
	if (!a && !i) {
		let e = o.style === `percent` ? d : t;
		i = f.format(e);
	}
	return {
		progressBarProps: D(s, {
			...l,
			"aria-valuenow": a ? void 0 : t,
			"aria-valuemin": n,
			"aria-valuemax": r,
			"aria-valuetext": a ? void 0 : i,
			role: `progressbar`
		}),
		labelProps: c
	};
}
var hr = (0, i.createContext)(null), gr = (0, i.forwardRef)(function(e, t) {
	[e, t] = ue(e, t, hr);
	let { value: n = 0, minValue: r = 0, maxValue: a = 100, isIndeterminate: o = !1 } = e;
	n = ur(n, r, a);
	let [s, c] = de(!e[`aria-label`] && !e[`aria-labelledby`]), { progressBarProps: l, labelProps: u } = mr({
		...e,
		label: c
	}), d = a - r, f;
	o || (f = d === 0 ? 0 : (n - r) / d * 100);
	let p = se({
		...e,
		defaultClassName: `react-aria-ProgressBar`,
		values: {
			percentage: f,
			valueText: l[`aria-valuetext`],
			isIndeterminate: o
		}
	}), m = En(e, { global: !0 });
	return i.createElement(he.div, {
		...D(m, p, l),
		ref: t,
		slot: e.slot || void 0
	}, i.createElement(tr.Provider, { value: {
		...u,
		ref: s,
		elementType: `span`
	} }, p.children));
}), _r = 7e3, q = null;
function vr(e, t = `assertive`, n = _r) {
	q ? q.announce(e, t, n) : (q = new br(), (typeof IS_REACT_ACT_ENVIRONMENT == `boolean` ? IS_REACT_ACT_ENVIRONMENT : typeof jest < `u`) ? q.announce(e, t, n) : setTimeout(() => {
		q?.isAttached() && q?.announce(e, t, n);
	}, 100));
}
function yr(e) {
	q && q.clear(e);
}
var br = class {
	constructor() {
		this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < `u` && (this.node = document.createElement(`div`), this.node.dataset.liveAnnouncer = `true`, Object.assign(this.node.style, {
			border: 0,
			clip: `rect(0 0 0 0)`,
			clipPath: `inset(50%)`,
			height: `1px`,
			margin: `-1px`,
			overflow: `hidden`,
			padding: 0,
			position: `absolute`,
			width: `1px`,
			whiteSpace: `nowrap`
		}), this.assertiveLog = this.createLog(`assertive`), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog(`polite`), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
	}
	isAttached() {
		return this.node?.isConnected;
	}
	createLog(e) {
		let t = document.createElement(`div`);
		return t.setAttribute(`role`, `log`), t.setAttribute(`aria-live`, e), t.setAttribute(`aria-relevant`, `additions`), t;
	}
	destroy() {
		this.node &&= (document.body.removeChild(this.node), null);
	}
	announce(e, t = `assertive`, n = _r) {
		if (!this.node) return;
		let r = document.createElement(`div`);
		typeof e == `object` ? (r.setAttribute(`role`, `img`), r.setAttribute(`aria-labelledby`, e[`aria-labelledby`])) : r.textContent = e, t === `assertive` ? this.assertiveLog?.appendChild(r) : this.politeLog?.appendChild(r), e !== `` && setTimeout(() => {
			r.remove();
		}, n);
	}
	clear(e) {
		this.node && ((!e || e === `assertive`) && this.assertiveLog && (this.assertiveLog.innerHTML = ``), (!e || e === `polite`) && this.politeLog && (this.politeLog.innerHTML = ``));
	}
};
function xr(e, t) {
	let { elementType: n = `button`, isDisabled: r, onPress: i, onPressStart: a, onPressEnd: o, onPressUp: s, onPressChange: c, preventFocusOnPress: l, allowFocusWhenDisabled: u, onClick: d, href: f, target: p, rel: m, type: h = `button` } = e, g;
	g = n === `button` ? {
		type: h,
		disabled: r,
		form: e.form,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formMethod: e.formMethod,
		formNoValidate: e.formNoValidate,
		formTarget: e.formTarget,
		name: e.name,
		value: e.value
	} : {
		role: `button`,
		href: n === `a` && !r ? f : void 0,
		target: n === `a` ? p : void 0,
		type: n === `input` ? h : void 0,
		disabled: n === `input` ? r : void 0,
		"aria-disabled": !r || n === `input` ? void 0 : r,
		rel: n === `a` ? m : void 0
	};
	let { pressProps: _, isPressed: v } = Bn({
		onPressStart: a,
		onPressEnd: o,
		onPressChange: c,
		onPress: i,
		onPressUp: s,
		onClick: d,
		isDisabled: r,
		preventFocusOnPress: l,
		ref: t
	}), { focusableProps: y } = hn(e, t);
	u && (y.tabIndex = r ? -1 : y.tabIndex);
	let b = D(y, _, En(e, { labelable: !0 }));
	return {
		isPressed: v,
		buttonProps: D(g, b, {
			"aria-haspopup": e[`aria-haspopup`],
			"aria-expanded": e[`aria-expanded`],
			"aria-controls": e[`aria-controls`],
			"aria-pressed": e[`aria-pressed`],
			"aria-current": e[`aria-current`],
			"aria-disabled": e[`aria-disabled`]
		})
	};
}
var Sr = (0, i.createContext)({}), Cr = vn(function(e, t) {
	[e, t] = ue(e, t, Sr);
	let n = e, { isPending: r } = n, { buttonProps: a, isPressed: o } = xr(e, t);
	a = Tr(a, r);
	let { focusProps: s, isFocused: c, isFocusVisible: l } = Jn(e), { hoverProps: u, isHovered: d } = er({
		...e,
		isDisabled: e.isDisabled || r
	}), f = {
		isHovered: d,
		isPressed: (n.isPressed || o) && !r,
		isFocused: c,
		isFocusVisible: l,
		isDisabled: e.isDisabled || !1,
		isPending: r ?? !1
	}, p = se({
		...e,
		values: f,
		defaultClassName: `react-aria-Button`
	}), m = w(a.id), h = w(), g = a[`aria-labelledby`];
	r && (g ? g = `${g} ${h}` : a[`aria-label`] && (g = `${m} ${h}`));
	let _ = (0, i.useRef)(r);
	(0, i.useEffect)(() => {
		let e = { "aria-labelledby": g || m };
		(!_.current && c && r || _.current && c && !r) && vr(e, `assertive`), _.current = r;
	}, [
		r,
		c,
		g,
		m
	]);
	let v = En(e, { global: !0 });
	return delete v.onClick, i.createElement(he.button, {
		...D(v, p, a, s, u),
		type: a.type === `submit` && r ? `button` : a.type,
		id: m,
		ref: t,
		"aria-labelledby": g,
		slot: e.slot || void 0,
		"aria-disabled": r ? `true` : a[`aria-disabled`],
		"data-disabled": e.isDisabled || void 0,
		"data-pressed": f.isPressed || void 0,
		"data-hovered": d || void 0,
		"data-focused": c || void 0,
		"data-pending": r || void 0,
		"data-focus-visible": l || void 0
	}, i.createElement(hr.Provider, { value: { id: h } }, p.children));
}), wr = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function Tr(e, t) {
	if (t) {
		for (let t in e) t.startsWith(`on`) && !wr.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
function J(...e) {
	return e.filter(Boolean).join(` `);
}
var Er = t(((e) => {
	var t = Symbol.for(`react.transitional.element`), n = Symbol.for(`react.fragment`);
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n) for (var a in r = {}, n) a !== `key` && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), Dr = t(((e, t) => {
	t.exports = Er();
})), Or = {
	accessibility: {
		fill: [[`circle`, {
			cx: `16`,
			cy: `4`,
			r: `1`
		}]],
		stroke: [
			[`circle`, {
				cx: `16`,
				cy: `4`,
				r: `1`
			}],
			[`path`, { d: `m18 19 1-7-6 1` }],
			[`path`, { d: `m5 8 3-3 5.5 3-2.36 3.5` }],
			[`path`, { d: `M4.24 14.5a5 5 0 0 0 6.88 6` }],
			[`path`, { d: `M13.76 17.5a5 5 0 0 0-6.88-6` }]
		]
	},
	"arrow-down-right": {
		fill: [],
		stroke: [[`path`, { d: `m7 7 10 10` }], [`path`, { d: `M17 7v10H7` }]]
	},
	"arrow-down-to-line": {
		fill: [],
		stroke: [
			[`path`, { d: `M12 17V3` }],
			[`path`, { d: `m6 11 6 6 6-6` }],
			[`path`, { d: `M19 21H5` }]
		]
	},
	"arrow-down": {
		fill: [],
		stroke: [[`path`, { d: `M12 5v14` }], [`path`, { d: `m19 12-7 7-7-7` }]]
	},
	"arrow-left": {
		fill: [],
		stroke: [[`path`, { d: `m12 19-7-7 7-7` }], [`path`, { d: `M19 12H5` }]]
	},
	"arrow-right-left": {
		fill: [],
		stroke: [
			[`path`, { d: `m16 3 4 4-4 4` }],
			[`path`, { d: `M20 7H4` }],
			[`path`, { d: `m8 21-4-4 4-4` }],
			[`path`, { d: `M4 17h16` }]
		]
	},
	"arrow-right": {
		fill: [],
		stroke: [[`path`, { d: `M5 12h14` }], [`path`, { d: `m12 5 7 7-7 7` }]]
	},
	"arrow-up-down": {
		fill: [],
		stroke: [
			[`path`, { d: `m21 16-4 4-4-4` }],
			[`path`, { d: `M17 20V4` }],
			[`path`, { d: `m3 8 4-4 4 4` }],
			[`path`, { d: `M7 4v16` }]
		]
	},
	"arrow-up-from-line": {
		fill: [],
		stroke: [
			[`path`, { d: `m18 9-6-6-6 6` }],
			[`path`, { d: `M12 3v14` }],
			[`path`, { d: `M5 21h14` }]
		]
	},
	"arrow-up-right": {
		fill: [],
		stroke: [[`path`, { d: `M7 7h10v10` }], [`path`, { d: `M7 17 17 7` }]]
	},
	"arrow-up": {
		fill: [],
		stroke: [[`path`, { d: `m5 12 7-7 7 7` }], [`path`, { d: `M12 19V5` }]]
	},
	"at-sign": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `4`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `4`
		}], [`path`, { d: `M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8` }]]
	},
	bell: {
		fill: [[`path`, { d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326` }]],
		stroke: [[`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0` }], [`path`, { d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326` }]]
	},
	"book-open": {
		fill: [[`path`, { d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z` }]],
		stroke: [[`path`, { d: `M12 5v16` }], [`path`, { d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z` }]]
	},
	bot: {
		fill: [[`rect`, {
			rx: `2`,
			x: `4`,
			y: `8`,
			width: `16`,
			height: `12`
		}]],
		stroke: [
			[`path`, { d: `M12 8V4H8` }],
			[`rect`, {
				rx: `2`,
				x: `4`,
				y: `8`,
				width: `16`,
				height: `12`
			}],
			[`path`, { d: `M2 14h2` }],
			[`path`, { d: `M20 14h2` }],
			[`path`, { d: `M15 13v2` }],
			[`path`, { d: `M9 13v2` }]
		]
	},
	boxes: {
		fill: [
			[`path`, { d: `M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z` }],
			[`path`, { d: `M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z` }],
			[`path`, { d: `M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z` }]
		],
		stroke: [
			[`path`, { d: `M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z` }],
			[`path`, { d: `m7 16.5-4.74-2.85` }],
			[`path`, { d: `m7 16.5 5-3` }],
			[`path`, { d: `M7 16.5v5.17` }],
			[`path`, { d: `M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z` }],
			[`path`, { d: `m17 16.5-5-3` }],
			[`path`, { d: `m17 16.5 4.74-2.85` }],
			[`path`, { d: `M17 16.5v5.17` }],
			[`path`, { d: `M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z` }],
			[`path`, { d: `M12 8 7.26 5.15` }],
			[`path`, { d: `m12 8 4.74-2.85` }],
			[`path`, { d: `M12 13.5V8` }]
		]
	},
	braces: {
		fill: [],
		stroke: [[`path`, { d: `M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1` }], [`path`, { d: `M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1` }]]
	},
	briefcase: {
		fill: [[`rect`, {
			rx: `2`,
			x: `2`,
			y: `6`,
			width: `20`,
			height: `14`
		}]],
		stroke: [[`path`, { d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16` }], [`rect`, {
			rx: `2`,
			x: `2`,
			y: `6`,
			width: `20`,
			height: `14`
		}]]
	},
	bug: {
		fill: [[`path`, { d: `M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z` }]],
		stroke: [
			[`path`, { d: `M12 20v-9` }],
			[`path`, { d: `M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z` }],
			[`path`, { d: `M14.12 3.88 16 2` }],
			[`path`, { d: `M21 21a4 4 0 0 0-3.81-4` }],
			[`path`, { d: `M21 5a4 4 0 0 1-3.55 3.97` }],
			[`path`, { d: `M22 13h-4` }],
			[`path`, { d: `M3 21a4 4 0 0 1 3.81-4` }],
			[`path`, { d: `M3 5a4 4 0 0 0 3.55 3.97` }],
			[`path`, { d: `M6 13H2` }],
			[`path`, { d: `m8 2 1.88 1.88` }],
			[`path`, { d: `M9 7.13V6a3 3 0 1 1 6 0v1.13` }]
		]
	},
	"calendar-clock": {
		fill: [[`circle`, {
			cx: `16`,
			cy: `16`,
			r: `6`
		}]],
		stroke: [
			[`path`, { d: `M16 14v2.2l1.6 1` }],
			[`path`, { d: `M16 2v3` }],
			[`path`, { d: `M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338` }],
			[`path`, { d: `M3 9h5.859` }],
			[`path`, { d: `M8 2v3` }],
			[`circle`, {
				cx: `16`,
				cy: `16`,
				r: `6`
			}]
		]
	},
	"calendar-days": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`path`, { d: `M8 2v3` }],
			[`path`, { d: `M16 2v3` }],
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M3 9h18` }],
			[`path`, { d: `M8 13h.01` }],
			[`path`, { d: `M12 13h.01` }],
			[`path`, { d: `M16 13h.01` }],
			[`path`, { d: `M8 17h.01` }],
			[`path`, { d: `M12 17h.01` }],
			[`path`, { d: `M16 17h.01` }]
		]
	},
	"calendar-x": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`path`, { d: `M8 2v3` }],
			[`path`, { d: `M16 2v3` }],
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M3 9h18` }],
			[`path`, { d: `m14 13-4 4` }],
			[`path`, { d: `m10 13 4 4` }]
		]
	},
	calendar: {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`path`, { d: `M8 2v3` }],
			[`path`, { d: `M16 2v3` }],
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M3 9h18` }]
		]
	},
	camera: {
		fill: [[`path`, { d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z` }], [`circle`, {
			cx: `12`,
			cy: `13`,
			r: `3`
		}]],
		stroke: [[`path`, { d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z` }], [`circle`, {
			cx: `12`,
			cy: `13`,
			r: `3`
		}]]
	},
	"case-sensitive": {
		fill: [[`circle`, {
			cx: `18.5`,
			cy: `12.5`,
			r: `3.5`
		}]],
		stroke: [
			[`path`, { d: `m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16` }],
			[`path`, { d: `M22 9v7` }],
			[`path`, { d: `M3.304 13h6.392` }],
			[`circle`, {
				cx: `18.5`,
				cy: `12.5`,
				r: `3.5`
			}]
		]
	},
	"chart-line": {
		fill: [],
		stroke: [[`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16` }], [`path`, { d: `m19 9-5 5-4-4-3 3` }]]
	},
	"chart-no-axes-column": {
		fill: [],
		stroke: [
			[`path`, { d: `M5 21v-6` }],
			[`path`, { d: `M12 21V3` }],
			[`path`, { d: `M19 21V9` }]
		]
	},
	check: {
		fill: [],
		stroke: [[`path`, { d: `M20 6 9 17l-5-5` }]]
	},
	"chevron-down": {
		fill: [],
		stroke: [[`path`, { d: `m6 9 6 6 6-6` }]]
	},
	"chevron-left": {
		fill: [],
		stroke: [[`path`, { d: `m15 18-6-6 6-6` }]]
	},
	"chevron-right": {
		fill: [],
		stroke: [[`path`, { d: `m9 18 6-6-6-6` }]]
	},
	"chevron-up": {
		fill: [],
		stroke: [[`path`, { d: `m18 15-6-6-6 6` }]]
	},
	"chevrons-down": {
		fill: [],
		stroke: [[`path`, { d: `m7 6 5 5 5-5` }], [`path`, { d: `m7 13 5 5 5-5` }]]
	},
	"chevrons-left": {
		fill: [],
		stroke: [[`path`, { d: `m11 17-5-5 5-5` }], [`path`, { d: `m18 17-5-5 5-5` }]]
	},
	"chevrons-right": {
		fill: [],
		stroke: [[`path`, { d: `m6 17 5-5-5-5` }], [`path`, { d: `m13 17 5-5-5-5` }]]
	},
	"chevrons-up-down": {
		fill: [],
		stroke: [[`path`, { d: `m7 15 5 5 5-5` }], [`path`, { d: `m7 9 5-5 5 5` }]]
	},
	"chevrons-up": {
		fill: [],
		stroke: [[`path`, { d: `m17 11-5-5-5 5` }], [`path`, { d: `m17 18-5-5-5 5` }]]
	},
	"circle-check": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `m16 9-5.5 5.5L8 12` }]]
	},
	"circle-dashed": {
		fill: [],
		stroke: [
			[`path`, { d: `M10.1 2.182a10 10 0 0 1 3.8 0` }],
			[`path`, { d: `M13.9 21.818a10 10 0 0 1-3.8 0` }],
			[`path`, { d: `M17.609 3.721a10 10 0 0 1 2.69 2.7` }],
			[`path`, { d: `M2.182 13.9a10 10 0 0 1 0-3.8` }],
			[`path`, { d: `M20.279 17.609a10 10 0 0 1-2.7 2.69` }],
			[`path`, { d: `M21.818 10.1a10 10 0 0 1 0 3.8` }],
			[`path`, { d: `M3.721 6.391a10 10 0 0 1 2.7-2.69` }],
			[`path`, { d: `M6.391 20.279a10 10 0 0 1-2.69-2.7` }]
		]
	},
	"circle-dot-dashed": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `1`
		}]],
		stroke: [
			[`path`, { d: `M10.1 2.18a9.93 9.93 0 0 1 3.8 0` }],
			[`path`, { d: `M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7` }],
			[`path`, { d: `M21.82 10.1a9.93 9.93 0 0 1 0 3.8` }],
			[`path`, { d: `M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69` }],
			[`path`, { d: `M13.9 21.82a9.94 9.94 0 0 1-3.8 0` }],
			[`path`, { d: `M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7` }],
			[`path`, { d: `M2.18 13.9a9.93 9.93 0 0 1 0-3.8` }],
			[`path`, { d: `M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69` }],
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `1`
			}]
		]
	},
	"circle-dot": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `1`
		}], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `1`
		}], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]]
	},
	"circle-exclamation-point": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`line`, {
				x1: `12`,
				y1: `8`,
				x2: `12`,
				y2: `12`
			}],
			[`line`, {
				x1: `12`,
				y1: `16`,
				x2: `12.01`,
				y2: `16`
			}]
		]
	},
	"circle-minus": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `M8 12h8` }]]
	},
	"circle-question-mark": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3` }],
			[`path`, { d: `M12 17h.01` }]
		]
	},
	"circle-slash": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`line`, {
			x1: `9`,
			y1: `15`,
			x2: `15`,
			y2: `9`
		}]]
	},
	"circle-user": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`circle`, {
			cx: `12`,
			cy: `10`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`circle`, {
				cx: `12`,
				cy: `10`,
				r: `3`
			}],
			[`path`, { d: `M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662` }]
		]
	},
	"circle-x": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`path`, { d: `m15 9-6 6` }],
			[`path`, { d: `m9 9 6 6` }]
		]
	},
	circle: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]]
	},
	clapperboard: {
		fill: [[`path`, { d: `M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z` }], [`path`, { d: `M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }]],
		stroke: [
			[`path`, { d: `m12.296 3.464 3.02 3.956` }],
			[`path`, { d: `M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z` }],
			[`path`, { d: `M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }],
			[`path`, { d: `m6.18 5.276 3.1 3.899` }]
		]
	},
	clock: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `M12 6v6l4 2` }]]
	},
	"cloud-off": {
		fill: [],
		stroke: [
			[`path`, { d: `M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057` }],
			[`path`, { d: `M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78` }],
			[`path`, { d: `m2 2 20 20` }]
		]
	},
	"cloud-upload": {
		fill: [],
		stroke: [
			[`path`, { d: `M12 13v8` }],
			[`path`, { d: `M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242` }],
			[`path`, { d: `m8 17 4-4 4 4` }]
		]
	},
	cloud: {
		fill: [[`path`, { d: `M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z` }]],
		stroke: [[`path`, { d: `M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z` }]]
	},
	"code-xml": {
		fill: [],
		stroke: [
			[`path`, { d: `m18 16 4-4-4-4` }],
			[`path`, { d: `m6 8-4 4 4 4` }],
			[`path`, { d: `m14.5 4-5 16` }]
		]
	},
	code: {
		fill: [],
		stroke: [[`path`, { d: `m16 18 6-6-6-6` }], [`path`, { d: `m8 6-6 6 6 6` }]]
	},
	"columns-2": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `M12 3v18` }]]
	},
	"columns-3": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M9 3v18` }],
			[`path`, { d: `M15 3v18` }]
		]
	},
	compass: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z` }]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z` }]]
	},
	container: {
		fill: [[`path`, { d: `M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z` }]],
		stroke: [
			[`path`, { d: `M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z` }],
			[`path`, { d: `M10 21.9V14L2.1 9.1` }],
			[`path`, { d: `m10 14 11.9-6.9` }],
			[`path`, { d: `M14 19.8v-8.1` }],
			[`path`, { d: `M18 17.5V9.4` }]
		]
	},
	contrast: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `M12 18a6 6 0 0 0 0-12v12z` }]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`path`, { d: `M12 18a6 6 0 0 0 0-12v12z` }]]
	},
	copy: {
		fill: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `8`,
			y: `8`,
			width: `14`,
			height: `14`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `8`,
			y: `8`,
			width: `14`,
			height: `14`
		}], [`path`, { d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2` }]]
	},
	cpu: {
		fill: [[`rect`, {
			rx: `2`,
			x: `4`,
			y: `4`,
			width: `16`,
			height: `16`
		}], [`rect`, {
			rx: `1`,
			x: `8`,
			y: `8`,
			width: `8`,
			height: `8`
		}]],
		stroke: [
			[`path`, { d: `M12 20v2` }],
			[`path`, { d: `M12 2v2` }],
			[`path`, { d: `M17 20v2` }],
			[`path`, { d: `M17 2v2` }],
			[`path`, { d: `M2 12h2` }],
			[`path`, { d: `M2 17h2` }],
			[`path`, { d: `M2 7h2` }],
			[`path`, { d: `M20 12h2` }],
			[`path`, { d: `M20 17h2` }],
			[`path`, { d: `M20 7h2` }],
			[`path`, { d: `M7 20v2` }],
			[`path`, { d: `M7 2v2` }],
			[`rect`, {
				rx: `2`,
				x: `4`,
				y: `4`,
				width: `16`,
				height: `16`
			}],
			[`rect`, {
				rx: `1`,
				x: `8`,
				y: `8`,
				width: `8`,
				height: `8`
			}]
		]
	},
	download: {
		fill: [],
		stroke: [
			[`path`, { d: `M12 15V3` }],
			[`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4` }],
			[`path`, { d: `m7 10 5 5 5-5` }]
		]
	},
	"eighth-notes": {
		fill: [[`circle`, {
			cx: `18`,
			cy: `16`,
			r: `3`
		}], [`circle`, {
			cx: `6`,
			cy: `19`,
			r: `3`
		}]],
		stroke: [
			[`path`, { d: `M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19` }],
			[`circle`, {
				cx: `18`,
				cy: `16`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `19`,
				r: `3`
			}]
		]
	},
	ellipsis: {
		fill: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `19`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `5`,
				cy: `12`,
				r: `1`
			}]
		],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `19`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `5`,
				cy: `12`,
				r: `1`
			}]
		]
	},
	equal: {
		fill: [],
		stroke: [[`line`, {
			x1: `5`,
			y1: `9`,
			x2: `19`,
			y2: `9`
		}], [`line`, {
			x1: `5`,
			y1: `15`,
			x2: `19`,
			y2: `15`
		}]]
	},
	"external-link": {
		fill: [],
		stroke: [
			[`path`, { d: `M15 3h6v6` }],
			[`path`, { d: `M10 14 21 3` }],
			[`path`, { d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6` }]
		]
	},
	"eye-off": {
		fill: [],
		stroke: [
			[`path`, { d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49` }],
			[`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242` }],
			[`path`, { d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143` }],
			[`path`, { d: `m2 2 20 20` }]
		]
	},
	eye: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`
		}]],
		stroke: [[`path`, { d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0` }], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`
		}]]
	},
	"file-archive": {
		fill: [[`circle`, {
			cx: `8`,
			cy: `20`,
			r: `2`
		}]],
		stroke: [
			[`path`, { d: `M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`path`, { d: `M8 12v-1` }],
			[`path`, { d: `M8 18v-2` }],
			[`path`, { d: `M8 7V6` }],
			[`circle`, {
				cx: `8`,
				cy: `20`,
				r: `2`
			}]
		]
	},
	"file-code-corner": {
		fill: [],
		stroke: [
			[`path`, { d: `M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`path`, { d: `m5 16-3 3 3 3` }],
			[`path`, { d: `m9 22 3-3-3-3` }]
		]
	},
	"file-code": {
		fill: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }]],
		stroke: [
			[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`path`, { d: `M10 12.5 8 15l2 2.5` }],
			[`path`, { d: `m14 12.5 2 2.5-2 2.5` }]
		]
	},
	"file-image": {
		fill: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }], [`circle`, {
			cx: `10`,
			cy: `12`,
			r: `2`
		}]],
		stroke: [
			[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`circle`, {
				cx: `10`,
				cy: `12`,
				r: `2`
			}],
			[`path`, { d: `m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22` }]
		]
	},
	"file-music": {
		fill: [[`circle`, {
			cx: `6`,
			cy: `20`,
			r: `2`
		}]],
		stroke: [
			[`path`, { d: `M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`path`, { d: `M8 20v-7l3 1.474` }],
			[`circle`, {
				cx: `6`,
				cy: `20`,
				r: `2`
			}]
		]
	},
	"file-play": {
		fill: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }], [`path`, { d: `M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z` }]],
		stroke: [
			[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`path`, { d: `M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z` }]
		]
	},
	"file-text": {
		fill: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }]],
		stroke: [
			[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }],
			[`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }],
			[`path`, { d: `M10 9H8` }],
			[`path`, { d: `M16 13H8` }],
			[`path`, { d: `M16 17H8` }]
		]
	},
	file: {
		fill: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }]],
		stroke: [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5` }]]
	},
	files: {
		fill: [[`path`, { d: `M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z` }]],
		stroke: [
			[`path`, { d: `M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8` }],
			[`path`, { d: `M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z` }],
			[`path`, { d: `M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1` }]
		]
	},
	"folder-git-2": {
		fill: [[`circle`, {
			cx: `13`,
			cy: `12`,
			r: `2`
		}], [`circle`, {
			cx: `20`,
			cy: `19`,
			r: `2`
		}]],
		stroke: [
			[`path`, { d: `M18 19a5 5 0 0 1-5-5v8` }],
			[`path`, { d: `M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5` }],
			[`circle`, {
				cx: `13`,
				cy: `12`,
				r: `2`
			}],
			[`circle`, {
				cx: `20`,
				cy: `19`,
				r: `2`
			}]
		]
	},
	"folder-open": {
		fill: [],
		stroke: [[`path`, { d: `m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2` }]]
	},
	"folder-plus": {
		fill: [[`path`, { d: `M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z` }]],
		stroke: [
			[`path`, { d: `M12 10v6` }],
			[`path`, { d: `M9 13h6` }],
			[`path`, { d: `M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z` }]
		]
	},
	folder: {
		fill: [[`path`, { d: `M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z` }]],
		stroke: [[`path`, { d: `M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z` }]]
	},
	funnel: {
		fill: [[`path`, { d: `M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z` }]],
		stroke: [[`path`, { d: `M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z` }]]
	},
	gauge: {
		fill: [],
		stroke: [[`path`, { d: `m12 14 4-4` }], [`path`, { d: `M3.34 19a10 10 0 1 1 17.32 0` }]]
	},
	"git-branch": {
		fill: [[`circle`, {
			cx: `18`,
			cy: `6`,
			r: `3`
		}], [`circle`, {
			cx: `6`,
			cy: `18`,
			r: `3`
		}]],
		stroke: [
			[`path`, { d: `M15 6a9 9 0 0 0-9 9V3` }],
			[`circle`, {
				cx: `18`,
				cy: `6`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `18`,
				r: `3`
			}]
		]
	},
	"git-commit-horizontal": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `3`
			}],
			[`line`, {
				x1: `3`,
				y1: `12`,
				x2: `9`,
				y2: `12`
			}],
			[`line`, {
				x1: `15`,
				y1: `12`,
				x2: `21`,
				y2: `12`
			}]
		]
	},
	"git-merge": {
		fill: [[`circle`, {
			cx: `18`,
			cy: `18`,
			r: `3`
		}], [`circle`, {
			cx: `6`,
			cy: `6`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `18`,
				cy: `18`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `6`,
				r: `3`
			}],
			[`path`, { d: `M6 21V9a9 9 0 0 0 9 9` }]
		]
	},
	"git-pull-request-arrow": {
		fill: [[`circle`, {
			cx: `5`,
			cy: `6`,
			r: `3`
		}], [`circle`, {
			cx: `19`,
			cy: `18`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `5`,
				cy: `6`,
				r: `3`
			}],
			[`path`, { d: `M5 9v12` }],
			[`circle`, {
				cx: `19`,
				cy: `18`,
				r: `3`
			}],
			[`path`, { d: `m15 9-3-3 3-3` }],
			[`path`, { d: `M12 6h5a2 2 0 0 1 2 2v7` }]
		]
	},
	"git-pull-request-closed": {
		fill: [[`circle`, {
			cx: `18`,
			cy: `18`,
			r: `3`
		}], [`circle`, {
			cx: `6`,
			cy: `6`,
			r: `3`
		}]],
		stroke: [
			[`path`, { d: `m15.5 3.5 5 5` }],
			[`path`, { d: `m15.5 8.5 5-5` }],
			[`path`, { d: `M18 11.62V15` }],
			[`path`, { d: `M6 9v12` }],
			[`circle`, {
				cx: `18`,
				cy: `18`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `6`,
				r: `3`
			}]
		]
	},
	"git-pull-request-draft": {
		fill: [[`circle`, {
			cx: `18`,
			cy: `18`,
			r: `3`
		}], [`circle`, {
			cx: `6`,
			cy: `6`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `18`,
				cy: `18`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `6`,
				r: `3`
			}],
			[`path`, { d: `M18 6V5` }],
			[`path`, { d: `M18 11v-1` }],
			[`line`, {
				x1: `6`,
				y1: `9`,
				x2: `6`,
				y2: `21`
			}]
		]
	},
	"git-pull-request": {
		fill: [[`circle`, {
			cx: `18`,
			cy: `18`,
			r: `3`
		}], [`circle`, {
			cx: `6`,
			cy: `6`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `18`,
				cy: `18`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `6`,
				r: `3`
			}],
			[`path`, { d: `M13 6h3a2 2 0 0 1 2 2v7` }],
			[`line`, {
				x1: `6`,
				y1: `9`,
				x2: `6`,
				y2: `21`
			}]
		]
	},
	globe: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`path`, { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20` }],
			[`path`, { d: `M2 12h20` }]
		]
	},
	"grid-2x2": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`path`, { d: `M12 3v18` }],
			[`path`, { d: `M3 12h18` }],
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}]
		]
	},
	"grid-3x3": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M3 9h18` }],
			[`path`, { d: `M3 15h18` }],
			[`path`, { d: `M9 3v18` }],
			[`path`, { d: `M15 3v18` }]
		]
	},
	"grip-horizontal": {
		fill: [
			[`circle`, {
				cx: `12`,
				cy: `9`,
				r: `1`
			}],
			[`circle`, {
				cx: `19`,
				cy: `9`,
				r: `1`
			}],
			[`circle`, {
				cx: `5`,
				cy: `9`,
				r: `1`
			}],
			[`circle`, {
				cx: `12`,
				cy: `15`,
				r: `1`
			}],
			[`circle`, {
				cx: `19`,
				cy: `15`,
				r: `1`
			}],
			[`circle`, {
				cx: `5`,
				cy: `15`,
				r: `1`
			}]
		],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `9`,
				r: `1`
			}],
			[`circle`, {
				cx: `19`,
				cy: `9`,
				r: `1`
			}],
			[`circle`, {
				cx: `5`,
				cy: `9`,
				r: `1`
			}],
			[`circle`, {
				cx: `12`,
				cy: `15`,
				r: `1`
			}],
			[`circle`, {
				cx: `19`,
				cy: `15`,
				r: `1`
			}],
			[`circle`, {
				cx: `5`,
				cy: `15`,
				r: `1`
			}]
		]
	},
	"grip-vertical": {
		fill: [
			[`circle`, {
				cx: `9`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `9`,
				cy: `5`,
				r: `1`
			}],
			[`circle`, {
				cx: `9`,
				cy: `19`,
				r: `1`
			}],
			[`circle`, {
				cx: `15`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `15`,
				cy: `5`,
				r: `1`
			}],
			[`circle`, {
				cx: `15`,
				cy: `19`,
				r: `1`
			}]
		],
		stroke: [
			[`circle`, {
				cx: `9`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `9`,
				cy: `5`,
				r: `1`
			}],
			[`circle`, {
				cx: `9`,
				cy: `19`,
				r: `1`
			}],
			[`circle`, {
				cx: `15`,
				cy: `12`,
				r: `1`
			}],
			[`circle`, {
				cx: `15`,
				cy: `5`,
				r: `1`
			}],
			[`circle`, {
				cx: `15`,
				cy: `19`,
				r: `1`
			}]
		]
	},
	"hard-drive": {
		fill: [[`path`, { d: `M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z` }]],
		stroke: [
			[`path`, { d: `M10 16h.01` }],
			[`path`, { d: `M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z` }],
			[`path`, { d: `M21.946 12.013H2.054` }],
			[`path`, { d: `M6 16h.01` }]
		]
	},
	hash: {
		fill: [],
		stroke: [
			[`line`, {
				x1: `4`,
				y1: `9`,
				x2: `20`,
				y2: `9`
			}],
			[`line`, {
				x1: `4`,
				y1: `15`,
				x2: `20`,
				y2: `15`
			}],
			[`line`, {
				x1: `10`,
				y1: `3`,
				x2: `8`,
				y2: `21`
			}],
			[`line`, {
				x1: `16`,
				y1: `3`,
				x2: `14`,
				y2: `21`
			}]
		]
	},
	house: {
		fill: [[`path`, { d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }]],
		stroke: [[`path`, { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8` }], [`path`, { d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z` }]]
	},
	"image-off": {
		fill: [],
		stroke: [
			[`line`, {
				x1: `2`,
				y1: `2`,
				x2: `22`,
				y2: `22`
			}],
			[`path`, { d: `M10.41 10.41a2 2 0 1 1-2.83-2.83` }],
			[`line`, {
				x1: `13.5`,
				y1: `13.5`,
				x2: `6`,
				y2: `21`
			}],
			[`line`, {
				x1: `18`,
				y1: `12`,
				x2: `21`,
				y2: `15`
			}],
			[`path`, { d: `M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59` }],
			[`path`, { d: `M21 15V5a2 2 0 0 0-2-2H9` }]
		]
	},
	"image-plus": {
		fill: [[`circle`, {
			cx: `9`,
			cy: `9`,
			r: `2`
		}]],
		stroke: [
			[`path`, { d: `M16 5h6` }],
			[`path`, { d: `M19 2v6` }],
			[`path`, { d: `M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5` }],
			[`path`, { d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21` }],
			[`circle`, {
				cx: `9`,
				cy: `9`,
				r: `2`
			}]
		]
	},
	image: {
		fill: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`circle`, {
			cx: `9`,
			cy: `9`,
			r: `2`
		}]],
		stroke: [
			[`rect`, {
				rx: `2`,
				ry: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`circle`, {
				cx: `9`,
				cy: `9`,
				r: `2`
			}],
			[`path`, { d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21` }]
		]
	},
	inbox: {
		fill: [[`path`, { d: `M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z` }]],
		stroke: [[`polyline`, { points: `22 12 16 12 14 15 10 15 8 12 2 12` }], [`path`, { d: `M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z` }]]
	},
	info: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`path`, { d: `M12 16v-4` }],
			[`path`, { d: `M12 8h.01` }]
		]
	},
	italic: {
		fill: [],
		stroke: [
			[`line`, {
				x1: `19`,
				y1: `4`,
				x2: `10`,
				y2: `4`
			}],
			[`line`, {
				x1: `14`,
				y1: `20`,
				x2: `5`,
				y2: `20`
			}],
			[`line`, {
				x1: `15`,
				y1: `4`,
				x2: `9`,
				y2: `20`
			}]
		]
	},
	kanban: {
		fill: [],
		stroke: [
			[`path`, { d: `M5 3v14` }],
			[`path`, { d: `M12 3v8` }],
			[`path`, { d: `M19 3v18` }]
		]
	},
	keyboard: {
		fill: [[`rect`, {
			rx: `2`,
			x: `2`,
			y: `4`,
			width: `20`,
			height: `16`
		}]],
		stroke: [
			[`path`, { d: `M10 8h.01` }],
			[`path`, { d: `M12 12h.01` }],
			[`path`, { d: `M14 8h.01` }],
			[`path`, { d: `M16 12h.01` }],
			[`path`, { d: `M18 8h.01` }],
			[`path`, { d: `M6 8h.01` }],
			[`path`, { d: `M7 16h10` }],
			[`path`, { d: `M8 12h.01` }],
			[`rect`, {
				rx: `2`,
				x: `2`,
				y: `4`,
				width: `20`,
				height: `16`
			}]
		]
	},
	languages: {
		fill: [],
		stroke: [
			[`path`, { d: `m5 8 6 6` }],
			[`path`, { d: `m4 14 6-6 2-3` }],
			[`path`, { d: `M2 5h12` }],
			[`path`, { d: `M7 2h1` }],
			[`path`, { d: `m22 22-5-10-5 10` }],
			[`path`, { d: `M14 18h6` }]
		]
	},
	laptop: {
		fill: [[`path`, { d: `M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z` }]],
		stroke: [[`path`, { d: `M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z` }], [`path`, { d: `M20.054 15.987H3.946` }]]
	},
	"layout-dashboard": {
		fill: [
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `3`,
				width: `7`,
				height: `9`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `3`,
				width: `7`,
				height: `5`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `12`,
				width: `7`,
				height: `9`
			}],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `16`,
				width: `7`,
				height: `5`
			}]
		],
		stroke: [
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `3`,
				width: `7`,
				height: `9`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `3`,
				width: `7`,
				height: `5`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `12`,
				width: `7`,
				height: `9`
			}],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `16`,
				width: `7`,
				height: `5`
			}]
		]
	},
	"layout-grid": {
		fill: [
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `3`,
				width: `7`,
				height: `7`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `3`,
				width: `7`,
				height: `7`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `14`,
				width: `7`,
				height: `7`
			}],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `14`,
				width: `7`,
				height: `7`
			}]
		],
		stroke: [
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `3`,
				width: `7`,
				height: `7`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `3`,
				width: `7`,
				height: `7`
			}],
			[`rect`, {
				rx: `1`,
				x: `14`,
				y: `14`,
				width: `7`,
				height: `7`
			}],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `14`,
				width: `7`,
				height: `7`
			}]
		]
	},
	"letter-b": {
		fill: [],
		stroke: [[`path`, { d: `M6 12h9a4 4 0 010 8H7a1 1 0 01-1-1V5a1 1 0 011-1h7a4 4 0 010 8` }]]
	},
	"life-buoy": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `10`
		}], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `4`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `10`
			}],
			[`path`, { d: `m4.93 4.93 4.24 4.24` }],
			[`path`, { d: `m14.83 9.17 4.24-4.24` }],
			[`path`, { d: `m14.83 14.83 4.24 4.24` }],
			[`path`, { d: `m9.17 14.83-4.24 4.24` }],
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `4`
			}]
		]
	},
	lightbulb: {
		fill: [],
		stroke: [
			[`path`, { d: `M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5` }],
			[`path`, { d: `M9 18h6` }],
			[`path`, { d: `M10 22h4` }]
		]
	},
	link: {
		fill: [],
		stroke: [[`path`, { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71` }], [`path`, { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71` }]]
	},
	"list-todo": {
		fill: [[`rect`, {
			rx: `1`,
			x: `3`,
			y: `4`,
			width: `6`,
			height: `6`
		}]],
		stroke: [
			[`path`, { d: `M13 5h8` }],
			[`path`, { d: `M13 12h8` }],
			[`path`, { d: `M13 19h8` }],
			[`path`, { d: `m3 17 2 2 4-4` }],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `4`,
				width: `6`,
				height: `6`
			}]
		]
	},
	list: {
		fill: [],
		stroke: [
			[`path`, { d: `M3 5h.01` }],
			[`path`, { d: `M3 12h.01` }],
			[`path`, { d: `M3 19h.01` }],
			[`path`, { d: `M8 5h13` }],
			[`path`, { d: `M8 12h13` }],
			[`path`, { d: `M8 19h13` }]
		]
	},
	"loader-circle": {
		fill: [],
		stroke: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56` }]]
	},
	lock: {
		fill: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `3`,
			y: `11`,
			width: `18`,
			height: `11`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `3`,
			y: `11`,
			width: `18`,
			height: `11`
		}], [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4` }]]
	},
	"log-in": {
		fill: [],
		stroke: [
			[`path`, { d: `m10 17 5-5-5-5` }],
			[`path`, { d: `M15 12H3` }],
			[`path`, { d: `M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4` }]
		]
	},
	"log-out": {
		fill: [],
		stroke: [
			[`path`, { d: `m16 17 5-5-5-5` }],
			[`path`, { d: `M21 12H9` }],
			[`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4` }]
		]
	},
	"mail-check": {
		fill: [],
		stroke: [
			[`path`, { d: `M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8` }],
			[`path`, { d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7` }],
			[`path`, { d: `m16 19 2 2 4-4` }]
		]
	},
	"mail-exclamation-point": {
		fill: [],
		stroke: [
			[`path`, { d: `M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5` }],
			[`path`, { d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7` }],
			[`path`, { d: `M20 14v4` }],
			[`path`, { d: `M20 22v.01` }]
		]
	},
	mail: {
		fill: [[`rect`, {
			rx: `2`,
			x: `2`,
			y: `4`,
			width: `20`,
			height: `16`
		}]],
		stroke: [[`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7` }], [`rect`, {
			rx: `2`,
			x: `2`,
			y: `4`,
			width: `20`,
			height: `16`
		}]]
	},
	"map-pin": {
		fill: [[`path`, { d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0` }], [`circle`, {
			cx: `12`,
			cy: `10`,
			r: `3`
		}]],
		stroke: [[`path`, { d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0` }], [`circle`, {
			cx: `12`,
			cy: `10`,
			r: `3`
		}]]
	},
	"maximize-2": {
		fill: [],
		stroke: [
			[`path`, { d: `M15 3h6v6` }],
			[`path`, { d: `m21 3-7 7` }],
			[`path`, { d: `m3 21 7-7` }],
			[`path`, { d: `M9 21H3v-6` }]
		]
	},
	menu: {
		fill: [],
		stroke: [
			[`path`, { d: `M4 5h16` }],
			[`path`, { d: `M4 12h16` }],
			[`path`, { d: `M4 19h16` }]
		]
	},
	"message-square-exclamation-point": {
		fill: [[`path`, { d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z` }]],
		stroke: [
			[`path`, { d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z` }],
			[`path`, { d: `M12 15h.01` }],
			[`path`, { d: `M12 7v4` }]
		]
	},
	"message-square": {
		fill: [[`path`, { d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z` }]],
		stroke: [[`path`, { d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z` }]]
	},
	mic: {
		fill: [[`rect`, {
			rx: `3`,
			x: `9`,
			y: `2`,
			width: `6`,
			height: `13`
		}]],
		stroke: [
			[`path`, { d: `M12 19v3` }],
			[`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2` }],
			[`rect`, {
				rx: `3`,
				x: `9`,
				y: `2`,
				width: `6`,
				height: `13`
			}]
		]
	},
	minus: {
		fill: [],
		stroke: [[`path`, { d: `M5 12h14` }]]
	},
	monitor: {
		fill: [[`rect`, {
			rx: `2`,
			x: `2`,
			y: `3`,
			width: `20`,
			height: `14`
		}]],
		stroke: [
			[`rect`, {
				rx: `2`,
				x: `2`,
				y: `3`,
				width: `20`,
				height: `14`
			}],
			[`line`, {
				x1: `8`,
				y1: `21`,
				x2: `16`,
				y2: `21`
			}],
			[`line`, {
				x1: `12`,
				y1: `17`,
				x2: `12`,
				y2: `21`
			}]
		]
	},
	moon: {
		fill: [[`path`, { d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401` }]],
		stroke: [[`path`, { d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401` }]]
	},
	newspaper: {
		fill: [[`rect`, {
			rx: `1`,
			x: `10`,
			y: `6`,
			width: `8`,
			height: `4`
		}]],
		stroke: [
			[`path`, { d: `M15 18h-5` }],
			[`path`, { d: `M18 14h-8` }],
			[`path`, { d: `M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2` }],
			[`rect`, {
				rx: `1`,
				x: `10`,
				y: `6`,
				width: `8`,
				height: `4`
			}]
		]
	},
	"octagon-exclamation-point": {
		fill: [[`path`, { d: `M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z` }]],
		stroke: [
			[`path`, { d: `M12 16h.01` }],
			[`path`, { d: `M12 8v4` }],
			[`path`, { d: `M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z` }]
		]
	},
	package: {
		fill: [[`path`, { d: `M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z` }]],
		stroke: [
			[`path`, { d: `M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z` }],
			[`path`, { d: `M12 22V12` }],
			[`polyline`, { points: `3.29 7 12 12 20.71 7` }],
			[`path`, { d: `m7.5 4.27 9 5.15` }]
		]
	},
	palette: {
		fill: [
			[`path`, { d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z` }],
			[`circle`, {
				cx: `13.5`,
				cy: `6.5`,
				r: `.5`
			}],
			[`circle`, {
				cx: `17.5`,
				cy: `10.5`,
				r: `.5`
			}],
			[`circle`, {
				cx: `6.5`,
				cy: `12.5`,
				r: `.5`
			}],
			[`circle`, {
				cx: `8.5`,
				cy: `7.5`,
				r: `.5`
			}]
		],
		stroke: [
			[`path`, { d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z` }],
			[`circle`, {
				cx: `13.5`,
				cy: `6.5`,
				r: `.5`
			}],
			[`circle`, {
				cx: `17.5`,
				cy: `10.5`,
				r: `.5`
			}],
			[`circle`, {
				cx: `6.5`,
				cy: `12.5`,
				r: `.5`
			}],
			[`circle`, {
				cx: `8.5`,
				cy: `7.5`,
				r: `.5`
			}]
		]
	},
	"panel-left-close": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M9 3v18` }],
			[`path`, { d: `m16 15-3-3 3-3` }]
		]
	},
	"panel-left": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `M9 3v18` }]]
	},
	"panel-right-close": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M15 3v18` }],
			[`path`, { d: `m8 9 3 3-3 3` }]
		]
	},
	"panel-right": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `M15 3v18` }]]
	},
	paperclip: {
		fill: [],
		stroke: [[`path`, { d: `m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551` }]]
	},
	pause: {
		fill: [[`rect`, {
			rx: `1`,
			x: `14`,
			y: `3`,
			width: `5`,
			height: `18`
		}], [`rect`, {
			rx: `1`,
			x: `5`,
			y: `3`,
			width: `5`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `1`,
			x: `14`,
			y: `3`,
			width: `5`,
			height: `18`
		}], [`rect`, {
			rx: `1`,
			x: `5`,
			y: `3`,
			width: `5`,
			height: `18`
		}]]
	},
	pencil: {
		fill: [[`path`, { d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z` }]],
		stroke: [[`path`, { d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z` }], [`path`, { d: `m15 5 4 4` }]]
	},
	play: {
		fill: [[`path`, { d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z` }]],
		stroke: [[`path`, { d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z` }]]
	},
	plug: {
		fill: [[`path`, { d: `M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z` }]],
		stroke: [
			[`path`, { d: `M12 22v-5` }],
			[`path`, { d: `M15 8V2` }],
			[`path`, { d: `M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z` }],
			[`path`, { d: `M9 8V2` }]
		]
	},
	plus: {
		fill: [],
		stroke: [[`path`, { d: `M5 12h14` }], [`path`, { d: `M12 5v14` }]]
	},
	printer: {
		fill: [[`rect`, {
			rx: `1`,
			x: `6`,
			y: `14`,
			width: `12`,
			height: `8`
		}]],
		stroke: [
			[`path`, { d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2` }],
			[`path`, { d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6` }],
			[`rect`, {
				rx: `1`,
				x: `6`,
				y: `14`,
				width: `12`,
				height: `8`
			}]
		]
	},
	"refresh-cw": {
		fill: [],
		stroke: [
			[`path`, { d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8` }],
			[`path`, { d: `M21 3v5h-5` }],
			[`path`, { d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16` }],
			[`path`, { d: `M8 16H3v5` }]
		]
	},
	regex: {
		fill: [[`path`, { d: `M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z` }]],
		stroke: [
			[`path`, { d: `M17 3v10` }],
			[`path`, { d: `m12.67 5.5 8.66 5` }],
			[`path`, { d: `m12.67 10.5 8.66-5` }],
			[`path`, { d: `M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z` }]
		]
	},
	rocket: {
		fill: [[`path`, { d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09` }], [`path`, { d: `M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z` }]],
		stroke: [
			[`path`, { d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5` }],
			[`path`, { d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09` }],
			[`path`, { d: `M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z` }],
			[`path`, { d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05` }]
		]
	},
	"rotate-ccw-clock": {
		fill: [],
		stroke: [
			[`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8` }],
			[`path`, { d: `M3 3v5h5` }],
			[`path`, { d: `M12 7v5l4 2` }]
		]
	},
	"rotate-ccw": {
		fill: [],
		stroke: [[`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8` }], [`path`, { d: `M3 3v5h5` }]]
	},
	"rotate-cw": {
		fill: [],
		stroke: [[`path`, { d: `M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8` }], [`path`, { d: `M21 3v5h-5` }]]
	},
	"rows-2": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `M3 12h18` }]]
	},
	save: {
		fill: [[`path`, { d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z` }]],
		stroke: [
			[`path`, { d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z` }],
			[`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7` }],
			[`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7` }]
		]
	},
	"scroll-text": {
		fill: [],
		stroke: [
			[`path`, { d: `M15 12h-5` }],
			[`path`, { d: `M15 8h-5` }],
			[`path`, { d: `M19 17V5a2 2 0 0 0-2-2H4` }],
			[`path`, { d: `M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3` }]
		]
	},
	"search-x": {
		fill: [[`circle`, {
			cx: `11`,
			cy: `11`,
			r: `8`
		}]],
		stroke: [
			[`path`, { d: `m13.5 8.5-5 5` }],
			[`path`, { d: `m8.5 8.5 5 5` }],
			[`circle`, {
				cx: `11`,
				cy: `11`,
				r: `8`
			}],
			[`path`, { d: `m21 21-4.3-4.3` }]
		]
	},
	search: {
		fill: [[`circle`, {
			cx: `11`,
			cy: `11`,
			r: `8`
		}]],
		stroke: [[`path`, { d: `m21 21-4.34-4.34` }], [`circle`, {
			cx: `11`,
			cy: `11`,
			r: `8`
		}]]
	},
	send: {
		fill: [[`path`, { d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z` }]],
		stroke: [[`path`, { d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z` }], [`path`, { d: `m21.854 2.147-10.94 10.939` }]]
	},
	settings: {
		fill: [[`path`, { d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915` }], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`
		}]],
		stroke: [[`path`, { d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915` }], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`
		}]]
	},
	shapes: {
		fill: [
			[`path`, { d: `M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z` }],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `14`,
				width: `7`,
				height: `7`
			}],
			[`circle`, {
				cx: `17.5`,
				cy: `17.5`,
				r: `3.5`
			}]
		],
		stroke: [
			[`path`, { d: `M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z` }],
			[`rect`, {
				rx: `1`,
				x: `3`,
				y: `14`,
				width: `7`,
				height: `7`
			}],
			[`circle`, {
				cx: `17.5`,
				cy: `17.5`,
				r: `3.5`
			}]
		]
	},
	"share-2": {
		fill: [
			[`circle`, {
				cx: `18`,
				cy: `5`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `12`,
				r: `3`
			}],
			[`circle`, {
				cx: `18`,
				cy: `19`,
				r: `3`
			}]
		],
		stroke: [
			[`circle`, {
				cx: `18`,
				cy: `5`,
				r: `3`
			}],
			[`circle`, {
				cx: `6`,
				cy: `12`,
				r: `3`
			}],
			[`circle`, {
				cx: `18`,
				cy: `19`,
				r: `3`
			}],
			[`line`, {
				x1: `8.59`,
				y1: `13.51`,
				x2: `15.42`,
				y2: `17.49`
			}],
			[`line`, {
				x1: `15.41`,
				y1: `6.51`,
				x2: `8.59`,
				y2: `10.49`
			}]
		]
	},
	"shield-check": {
		fill: [[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z` }]],
		stroke: [[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z` }], [`path`, { d: `m9 12 2 2 4-4` }]]
	},
	"shield-user": {
		fill: [[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z` }], [`circle`, {
			cx: `12`,
			cy: `11`,
			r: `4`
		}]],
		stroke: [
			[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z` }],
			[`path`, { d: `M6.376 18.91a6 6 0 0 1 11.249.003` }],
			[`circle`, {
				cx: `12`,
				cy: `11`,
				r: `4`
			}]
		]
	},
	"si-apple": {
		fill: [],
		stroke: [],
		solid: [[`path`, { d: `M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701` }]]
	},
	"si-linux": {
		fill: [],
		stroke: [],
		solid: [[`path`, { d: `M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z` }]]
	},
	"sk-agent": {
		fill: [[`rect`, {
			x: `3`,
			y: `4`,
			width: `18`,
			height: `16`,
			rx: `3`
		}]],
		stroke: [
			[`rect`, {
				x: `3`,
				y: `4`,
				width: `18`,
				height: `16`,
				rx: `3`
			}],
			[`path`, { d: `M3 8.5h18` }],
			[`path`, { d: `m7.5 12 3 2.5-3 2.5` }],
			[`path`, { d: `M13 17h3.5` }]
		]
	},
	"sk-certificate": {
		fill: [[`rect`, {
			x: `2.5`,
			y: `4`,
			width: `19`,
			height: `12.5`,
			rx: `1.5`
		}]],
		stroke: [
			[`rect`, {
				x: `2.5`,
				y: `4`,
				width: `19`,
				height: `12.5`,
				rx: `1.5`
			}],
			[`path`, { d: `M6 8h8` }],
			[`path`, { d: `M6 11.5h5` }],
			[`circle`, {
				cx: `17`,
				cy: `12.5`,
				r: `2.5`
			}],
			[`path`, { d: `m15.5 14.5-1 6 2.5-1.5 2.5 1.5-1-6` }]
		]
	},
	"sk-content": {
		fill: [[`rect`, {
			x: `3`,
			y: `6`,
			width: `15`,
			height: `15`,
			rx: `2`
		}]],
		stroke: [
			[`rect`, {
				x: `3`,
				y: `6`,
				width: `15`,
				height: `15`,
				rx: `2`
			}],
			[`path`, { d: `M7 3h12a2 2 0 0 1 2 2v12` }],
			[`path`, { d: `M6.5 10.5h8` }],
			[`path`, { d: `M6.5 14h8` }],
			[`path`, { d: `M6.5 17.5h5` }]
		]
	},
	"sk-core": {
		fill: [[`path`, { d: `M12 2.5 20.5 7.25v9.5L12 21.5l-8.5-4.75v-9.5z` }]],
		stroke: [[`path`, { d: `M12 2.5 20.5 7.25v9.5L12 21.5l-8.5-4.75v-9.5z` }], [`circle`, {
			cx: `12`,
			cy: `12`,
			r: `3`
		}]]
	},
	"sk-course": {
		fill: [[`path`, { d: `M12 4 22 9l-10 5L2 9z` }]],
		stroke: [
			[`path`, { d: `M12 4 22 9l-10 5L2 9z` }],
			[`path`, { d: `M6 11v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5` }],
			[`path`, { d: `M22 9v6` }]
		]
	},
	"sk-docs": {
		fill: [[`path`, { d: `M6.5 2.5H14l5 5v12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4a1.5 1.5 0 0 1 1.5-1.5z` }]],
		stroke: [
			[`path`, { d: `M6.5 2.5H14l5 5v12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4a1.5 1.5 0 0 1 1.5-1.5z` }],
			[`path`, { d: `M14 2.5V7a.5.5 0 0 0 .5.5H19` }],
			[`path`, { d: `M8.5 2.5V8l2-1.5 2 1.5V2.5` }],
			[`path`, { d: `M8.5 12.5h7` }],
			[`path`, { d: `M8.5 16h7` }],
			[`path`, { d: `M8.5 19h4` }]
		]
	},
	"sk-episode": {
		fill: [[`rect`, {
			x: `2.5`,
			y: `6`,
			width: `19`,
			height: `13`,
			rx: `2`
		}]],
		stroke: [
			[`rect`, {
				x: `2.5`,
				y: `6`,
				width: `19`,
				height: `13`,
				rx: `2`
			}],
			[`path`, { d: `m8 2.5 4 3.5 4-3.5` }],
			[`path`, { d: `M10 10.5v4l3.5-2z` }],
			[`path`, { d: `M7 21.5h10` }]
		]
	},
	"sk-film": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `9`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `9`
			}],
			[`circle`, {
				cx: `12`,
				cy: `7`,
				r: `2`
			}],
			[`circle`, {
				cx: `12`,
				cy: `17`,
				r: `2`
			}],
			[`circle`, {
				cx: `7`,
				cy: `12`,
				r: `2`
			}],
			[`circle`, {
				cx: `17`,
				cy: `12`,
				r: `2`
			}],
			[`path`, { d: `M12 12h.01` }]
		]
	},
	"sk-hub": {
		fill: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `3.5`
			}],
			[`circle`, {
				cx: `5`,
				cy: `5`,
				r: `2`
			}],
			[`circle`, {
				cx: `19`,
				cy: `5`,
				r: `2`
			}],
			[`circle`, {
				cx: `12`,
				cy: `20`,
				r: `2`
			}]
		],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `3.5`
			}],
			[`circle`, {
				cx: `5`,
				cy: `5`,
				r: `2`
			}],
			[`circle`, {
				cx: `19`,
				cy: `5`,
				r: `2`
			}],
			[`circle`, {
				cx: `12`,
				cy: `20`,
				r: `2`
			}],
			[`path`, { d: `m9.5 9.5-3-3` }],
			[`path`, { d: `m14.5 9.5 3-3` }],
			[`path`, { d: `M12 15.5V18` }]
		]
	},
	"sk-id": {
		fill: [[`rect`, {
			x: `2.5`,
			y: `5`,
			width: `19`,
			height: `14`,
			rx: `2.5`
		}]],
		stroke: [
			[`rect`, {
				x: `2.5`,
				y: `5`,
				width: `19`,
				height: `14`,
				rx: `2.5`
			}],
			[`circle`, {
				cx: `8.5`,
				cy: `10.5`,
				r: `2`
			}],
			[`path`, { d: `M5.5 16a3 3 0 0 1 6 0` }],
			[`path`, { d: `M14.5 10h4` }],
			[`path`, { d: `M14.5 14h3` }]
		]
	},
	"sk-lesson": {
		fill: [[`rect`, {
			x: `3`,
			y: `3.5`,
			width: `18`,
			height: `12`,
			rx: `1.5`
		}]],
		stroke: [
			[`rect`, {
				x: `3`,
				y: `3.5`,
				width: `18`,
				height: `12`,
				rx: `1.5`
			}],
			[`path`, { d: `M12 15.5v3` }],
			[`path`, { d: `m8 21.5 4-3 4 3` }],
			[`path`, { d: `M7 8h6` }],
			[`path`, { d: `M7 11h10` }]
		]
	},
	"sk-match": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `9.5`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `9.5`
			}],
			[`polygon`, { points: `12 8.5 15.33 10.92 14.06 14.83 9.94 14.83 8.67 10.92` }],
			[`path`, { d: `M12 8.5V5` }],
			[`path`, { d: `m15.33 10.92 3.33-1.08` }],
			[`path`, { d: `m14.06 14.83 2.05 2.83` }],
			[`path`, { d: `m9.94 14.83-2.05 2.83` }],
			[`path`, { d: `m8.67 10.92-3.33-1.08` }]
		]
	},
	"sk-newsletter": {
		fill: [[`rect`, {
			x: `3`,
			y: `9`,
			width: `18`,
			height: `12`,
			rx: `1.5`
		}]],
		stroke: [
			[`path`, { d: `M6.5 11.5V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7.5` }],
			[`path`, { d: `M9.5 6.5h5` }],
			[`path`, { d: `M9.5 9.5h5` }],
			[`rect`, {
				x: `3`,
				y: `9`,
				width: `18`,
				height: `12`,
				rx: `1.5`
			}],
			[`path`, { d: `m3 10.5 9 6 9-6` }]
		]
	},
	"sk-seat": {
		fill: [[`rect`, {
			x: `6.5`,
			y: `3`,
			width: `11`,
			height: `9.5`,
			rx: `2.5`
		}], [`rect`, {
			x: `4`,
			y: `12.5`,
			width: `16`,
			height: `4.5`,
			rx: `1.5`
		}]],
		stroke: [
			[`rect`, {
				x: `6.5`,
				y: `3`,
				width: `11`,
				height: `9.5`,
				rx: `2.5`
			}],
			[`rect`, {
				x: `4`,
				y: `12.5`,
				width: `16`,
				height: `4.5`,
				rx: `1.5`
			}],
			[`path`, { d: `M7 17v4` }],
			[`path`, { d: `M17 17v4` }]
		]
	},
	"sk-skills": {
		fill: [[`path`, { d: `M12 3 21 7.5 12 12 3 7.5z` }]],
		stroke: [
			[`path`, { d: `M12 3 21 7.5 12 12 3 7.5z` }],
			[`path`, { d: `m3 12 9 4.5 9-4.5` }],
			[`path`, { d: `m3 16.5 9 4.5 9-4.5` }]
		]
	},
	"sk-ticket": {
		fill: [[`path`, { d: `M3 10V6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5V10a2 2 0 0 0 0 4v3.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V14a2 2 0 0 0 0-4z` }]],
		stroke: [
			[`path`, { d: `M3 10V6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5V10a2 2 0 0 0 0 4v3.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5V14a2 2 0 0 0 0-4z` }],
			[`path`, { d: `M15 6.5V8` }],
			[`path`, { d: `M15 11.25v1.5` }],
			[`path`, { d: `M15 16v1.5` }]
		]
	},
	"sk-tracker": {
		fill: [[`rect`, {
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`,
			rx: `3`
		}]],
		stroke: [
			[`rect`, {
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`,
				rx: `3`
			}],
			[`path`, { d: `m7 9 1.5 1.5L11 8` }],
			[`path`, { d: `M13.5 9.5H17` }],
			[`path`, { d: `m7 15 1.5 1.5L11 14` }],
			[`path`, { d: `M13.5 15.5H17` }]
		]
	},
	"sk-ui": {
		fill: [[`rect`, {
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`,
			rx: `3`
		}]],
		stroke: [
			[`rect`, {
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`,
				rx: `3`
			}],
			[`path`, { d: `M9 3v18` }],
			[`rect`, {
				x: `12`,
				y: `7`,
				width: `5.5`,
				height: `4.5`,
				rx: `1`
			}],
			[`path`, { d: `M12 15.5h5.5` }]
		]
	},
	"sk-verified": {
		fill: [[`polygon`, { points: `12 2.5 15.02 4.7 18.72 5.28 19.3 8.98 21.5 12 19.3 15.02 18.72 18.72 15.02 19.3 12 21.5 8.98 19.3 5.28 18.72 4.7 15.02 2.5 12 4.7 8.98 5.28 5.28 8.98 4.7` }]],
		stroke: [[`polygon`, { points: `12 2.5 15.02 4.7 18.72 5.28 19.3 8.98 21.5 12 19.3 15.02 18.72 18.72 15.02 19.3 12 21.5 8.98 19.3 5.28 18.72 4.7 15.02 2.5 12 4.7 8.98 5.28 5.28 8.98 4.7` }], [`path`, { d: `m8.5 12 2.5 2.5 4.5-5` }]]
	},
	"sk-windows": {
		fill: [],
		stroke: [],
		solid: [[`path`, { d: `M3 3h8.4v8.4H3zM12.6 3H21v8.4h-8.4zM3 12.6h8.4V21H3zM12.6 12.6H21V21h-8.4z` }]]
	},
	slash: {
		fill: [],
		stroke: [[`path`, { d: `M22 2 2 22` }]]
	},
	"sliders-horizontal": {
		fill: [],
		stroke: [
			[`path`, { d: `M10 5H3` }],
			[`path`, { d: `M12 19H3` }],
			[`path`, { d: `M14 3v4` }],
			[`path`, { d: `M16 17v4` }],
			[`path`, { d: `M21 12h-9` }],
			[`path`, { d: `M21 19h-5` }],
			[`path`, { d: `M21 5h-7` }],
			[`path`, { d: `M8 10v4` }],
			[`path`, { d: `M8 12H3` }]
		]
	},
	smartphone: {
		fill: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `5`,
			y: `2`,
			width: `14`,
			height: `20`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `5`,
			y: `2`,
			width: `14`,
			height: `20`
		}], [`path`, { d: `M12 18h.01` }]]
	},
	sparkle: {
		fill: [[`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z` }]],
		stroke: [[`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z` }]]
	},
	sparkles: {
		fill: [[`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z` }], [`circle`, {
			cx: `4`,
			cy: `20`,
			r: `2`
		}]],
		stroke: [
			[`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z` }],
			[`path`, { d: `M20 2v4` }],
			[`path`, { d: `M22 4h-4` }],
			[`circle`, {
				cx: `4`,
				cy: `20`,
				r: `2`
			}]
		]
	},
	"square-check": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `m16 9-5.5 5.5L8 12` }]]
	},
	"square-play": {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z` }]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}], [`path`, { d: `M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z` }]]
	},
	"square-terminal": {
		fill: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`path`, { d: `m7 11 2-2-2-2` }],
			[`path`, { d: `M11 13h4` }],
			[`rect`, {
				rx: `2`,
				ry: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}]
		]
	},
	square: {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]]
	},
	star: {
		fill: [[`path`, { d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z` }]],
		stroke: [[`path`, { d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z` }]]
	},
	sun: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `12`,
			r: `4`
		}]],
		stroke: [
			[`circle`, {
				cx: `12`,
				cy: `12`,
				r: `4`
			}],
			[`path`, { d: `M12 2v2` }],
			[`path`, { d: `M12 20v2` }],
			[`path`, { d: `m4.93 4.93 1.41 1.41` }],
			[`path`, { d: `m17.66 17.66 1.41 1.41` }],
			[`path`, { d: `M2 12h2` }],
			[`path`, { d: `M20 12h2` }],
			[`path`, { d: `m6.34 17.66-1.41 1.41` }],
			[`path`, { d: `m19.07 4.93-1.41 1.41` }]
		]
	},
	"swatch-book": {
		fill: [[`path`, { d: `M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z` }]],
		stroke: [
			[`path`, { d: `M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z` }],
			[`path`, { d: `M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7` }],
			[`path`, { d: `M 7 17h.01` }],
			[`path`, { d: `m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8` }]
		]
	},
	table: {
		fill: [[`rect`, {
			rx: `2`,
			x: `3`,
			y: `3`,
			width: `18`,
			height: `18`
		}]],
		stroke: [
			[`path`, { d: `M12 3v18` }],
			[`rect`, {
				rx: `2`,
				x: `3`,
				y: `3`,
				width: `18`,
				height: `18`
			}],
			[`path`, { d: `M3 9h18` }],
			[`path`, { d: `M3 15h18` }]
		]
	},
	tablet: {
		fill: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `4`,
			y: `2`,
			width: `16`,
			height: `20`
		}]],
		stroke: [[`rect`, {
			rx: `2`,
			ry: `2`,
			x: `4`,
			y: `2`,
			width: `16`,
			height: `20`
		}], [`line`, {
			x1: `12`,
			y1: `18`,
			x2: `12.01`,
			y2: `18`
		}]]
	},
	tag: {
		fill: [[`path`, { d: `M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z` }], [`circle`, {
			cx: `7.5`,
			cy: `7.5`,
			r: `.5`
		}]],
		stroke: [[`path`, { d: `M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z` }], [`circle`, {
			cx: `7.5`,
			cy: `7.5`,
			r: `.5`
		}]]
	},
	tags: {
		fill: [[`path`, { d: `M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z` }], [`circle`, {
			cx: `10.5`,
			cy: `6.5`,
			r: `.5`
		}]],
		stroke: [
			[`path`, { d: `M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z` }],
			[`path`, { d: `M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193` }],
			[`circle`, {
				cx: `10.5`,
				cy: `6.5`,
				r: `.5`
			}]
		]
	},
	terminal: {
		fill: [],
		stroke: [[`path`, { d: `M12 19h8` }], [`path`, { d: `m4 17 6-6-6-6` }]]
	},
	"text-wrap": {
		fill: [],
		stroke: [
			[`path`, { d: `m16 16-3 3 3 3` }],
			[`path`, { d: `M3 12h14.5a1 1 0 0 1 0 7H13` }],
			[`path`, { d: `M3 19h6` }],
			[`path`, { d: `M3 5h18` }]
		]
	},
	timer: {
		fill: [[`circle`, {
			cx: `12`,
			cy: `14`,
			r: `8`
		}]],
		stroke: [
			[`line`, {
				x1: `10`,
				y1: `2`,
				x2: `14`,
				y2: `2`
			}],
			[`line`, {
				x1: `12`,
				y1: `14`,
				x2: `15`,
				y2: `11`
			}],
			[`circle`, {
				cx: `12`,
				cy: `14`,
				r: `8`
			}]
		]
	},
	trash: {
		fill: [],
		stroke: [
			[`path`, { d: `M10 11v6` }],
			[`path`, { d: `M14 11v6` }],
			[`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6` }],
			[`path`, { d: `M3 6h18` }],
			[`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2` }]
		]
	},
	"trending-up": {
		fill: [],
		stroke: [[`path`, { d: `M16 7h6v6` }], [`path`, { d: `m22 7-8.5 8.5-5-5L2 17` }]]
	},
	"triangle-exclamation-point": {
		fill: [[`path`, { d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3` }]],
		stroke: [
			[`path`, { d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3` }],
			[`path`, { d: `M12 9v4` }],
			[`path`, { d: `M12 17h.01` }]
		]
	},
	"triangles-centerline-dashed-horizontal": {
		fill: [[`path`, { d: `M7.298 20.288A1 1 0 008 22h8a1 1 0 00.703-1.712l-3.991-3.99a1 1 0 00-1.424-.001z` }], [`path`, { d: `M7.298 3.712A1 1 0 018 2h8a1 1 0 01.703 1.712l-3.991 3.99a1 1 0 01-1.424.001z` }]],
		stroke: [
			[`path`, { d: `M10 12H8` }],
			[`path`, { d: `M16 12h-2` }],
			[`path`, { d: `M22 12h-2` }],
			[`path`, { d: `M4 12H2` }],
			[`path`, { d: `M7.298 20.288A1 1 0 008 22h8a1 1 0 00.703-1.712l-3.991-3.99a1 1 0 00-1.424-.001z` }],
			[`path`, { d: `M7.298 3.712A1 1 0 018 2h8a1 1 0 01.703 1.712l-3.991 3.99a1 1 0 01-1.424.001z` }]
		]
	},
	"triangles-centerline-dashed-vertical": {
		fill: [[`path`, { d: `M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z` }], [`path`, { d: `M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z` }]],
		stroke: [
			[`path`, { d: `M12 14v2` }],
			[`path`, { d: `M12 20v2` }],
			[`path`, { d: `M12 2v2` }],
			[`path`, { d: `M12 8v2` }],
			[`path`, { d: `M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z` }],
			[`path`, { d: `M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z` }]
		]
	},
	trophy: {
		fill: [[`path`, { d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z` }]],
		stroke: [
			[`path`, { d: `M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2` }],
			[`path`, { d: `M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2` }],
			[`path`, { d: `M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3` }],
			[`path`, { d: `M4 22h16` }],
			[`path`, { d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z` }],
			[`path`, { d: `M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3` }]
		]
	},
	"undo-2": {
		fill: [],
		stroke: [[`path`, { d: `M9 14 4 9l5-5` }], [`path`, { d: `M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11` }]]
	},
	upload: {
		fill: [],
		stroke: [
			[`path`, { d: `M12 3v12` }],
			[`path`, { d: `m17 8-5-5-5 5` }],
			[`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4` }]
		]
	},
	"user-plus": {
		fill: [[`circle`, {
			cx: `9`,
			cy: `7`,
			r: `4`
		}]],
		stroke: [
			[`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2` }],
			[`circle`, {
				cx: `9`,
				cy: `7`,
				r: `4`
			}],
			[`line`, {
				x1: `19`,
				y1: `8`,
				x2: `19`,
				y2: `14`
			}],
			[`line`, {
				x1: `22`,
				y1: `11`,
				x2: `16`,
				y2: `11`
			}]
		]
	},
	"user-round": {
		fill: [[`circle`, {
			cx: `12`,
			cy: `8`,
			r: `5`
		}]],
		stroke: [[`circle`, {
			cx: `12`,
			cy: `8`,
			r: `5`
		}], [`path`, { d: `M20 21a8 8 0 0 0-16 0` }]]
	},
	users: {
		fill: [[`circle`, {
			cx: `9`,
			cy: `7`,
			r: `4`
		}]],
		stroke: [
			[`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2` }],
			[`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744` }],
			[`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87` }],
			[`circle`, {
				cx: `9`,
				cy: `7`,
				r: `4`
			}]
		]
	},
	video: {
		fill: [[`rect`, {
			rx: `2`,
			x: `2`,
			y: `6`,
			width: `14`,
			height: `12`
		}]],
		stroke: [[`path`, { d: `m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5` }], [`rect`, {
			rx: `2`,
			x: `2`,
			y: `6`,
			width: `14`,
			height: `12`
		}]]
	},
	"wand-sparkles": {
		fill: [[`path`, { d: `m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72` }]],
		stroke: [
			[`path`, { d: `m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72` }],
			[`path`, { d: `m14 7 3 3` }],
			[`path`, { d: `M5 6v4` }],
			[`path`, { d: `M19 14v4` }],
			[`path`, { d: `M10 2v2` }],
			[`path`, { d: `M7 8H3` }],
			[`path`, { d: `M21 16h-4` }],
			[`path`, { d: `M11 3H9` }]
		]
	},
	"whole-word": {
		fill: [[`circle`, {
			cx: `7`,
			cy: `12`,
			r: `3`
		}], [`circle`, {
			cx: `17`,
			cy: `12`,
			r: `3`
		}]],
		stroke: [
			[`circle`, {
				cx: `7`,
				cy: `12`,
				r: `3`
			}],
			[`path`, { d: `M10 9v6` }],
			[`circle`, {
				cx: `17`,
				cy: `12`,
				r: `3`
			}],
			[`path`, { d: `M14 7v8` }],
			[`path`, { d: `M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1` }]
		]
	},
	"wifi-off": {
		fill: [],
		stroke: [
			[`path`, { d: `M12 20h.01` }],
			[`path`, { d: `M8.5 16.429a5 5 0 0 1 7 0` }],
			[`path`, { d: `M5 12.859a10 10 0 0 1 5.17-2.69` }],
			[`path`, { d: `M19 12.859a10 10 0 0 0-2.007-1.523` }],
			[`path`, { d: `M2 8.82a15 15 0 0 1 4.177-2.643` }],
			[`path`, { d: `M22 8.82a15 15 0 0 0-11.288-3.764` }],
			[`path`, { d: `m2 2 20 20` }]
		]
	},
	wrench: {
		fill: [[`path`, { d: `M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z` }]],
		stroke: [[`path`, { d: `M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z` }]]
	},
	x: {
		fill: [],
		stroke: [[`path`, { d: `M18 6 6 18` }], [`path`, { d: `m6 6 12 12` }]]
	},
	zap: {
		fill: [[`path`, { d: `M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z` }]],
		stroke: [[`path`, { d: `M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z` }]]
	}
}, kr = {
	"action.add": `plus`,
	"action.adjust": `sliders-horizontal`,
	"action.attach": `paperclip`,
	"action.check": `check`,
	"action.close": `x`,
	"action.copy": `copy`,
	"action.delete": `trash`,
	"action.download": `download`,
	"action.drag": `grip-vertical`,
	"action.drag-horizontal": `grip-horizontal`,
	"action.edit": `pencil`,
	"action.external": `external-link`,
	"action.favourite": `star`,
	"action.filter": `funnel`,
	"action.hide": `eye-off`,
	"action.link": `link`,
	"action.maximize": `maximize-2`,
	"action.more": `ellipsis`,
	"action.print": `printer`,
	"action.refresh": `refresh-cw`,
	"action.remove": `minus`,
	"action.reset": `rotate-ccw`,
	"action.retry": `rotate-cw`,
	"action.save": `save`,
	"action.search": `search`,
	"action.send": `send`,
	"action.share": `share-2`,
	"action.show": `eye`,
	"action.undo": `undo-2`,
	"action.upload": `upload`,
	"agent.bot": `bot`,
	"ai.magic": `wand-sparkles`,
	"ai.spark": `sparkle`,
	"ai.sparkles": `sparkles`,
	"app.agent": `sk-agent`,
	"app.content": `sk-content`,
	"app.core": `sk-core`,
	"app.docs": `sk-docs`,
	"app.hub": `sk-hub`,
	"app.id": `sk-id`,
	"app.newsletter": `sk-newsletter`,
	"app.skills": `sk-skills`,
	"app.tracker": `sk-tracker`,
	"app.ui": `sk-ui`,
	"arrow.down": `arrow-down`,
	"arrow.down-to-line": `arrow-down-to-line`,
	"arrow.left": `arrow-left`,
	"arrow.right": `arrow-right`,
	"arrow.swap": `arrow-right-left`,
	"arrow.up": `arrow-up`,
	"arrow.up-from-line": `arrow-up-from-line`,
	"chevron.double-down": `chevrons-down`,
	"chevron.double-left": `chevrons-left`,
	"chevron.double-right": `chevrons-right`,
	"chevron.double-up": `chevrons-up`,
	"chevron.down": `chevron-down`,
	"chevron.left": `chevron-left`,
	"chevron.right": `chevron-right`,
	"chevron.up": `chevron-up`,
	"chevron.up-down": `chevrons-up-down`,
	"cinema.film": `sk-film`,
	"cinema.screening": `clapperboard`,
	"cinema.seat": `sk-seat`,
	"cinema.ticket": `sk-ticket`,
	"code.inline": `code`,
	"code.json": `braces`,
	"code.source": `code-xml`,
	"code.terminal": `terminal`,
	"code.terminal-window": `square-terminal`,
	"content.category": `tags`,
	"content.command": `slash`,
	"content.comment": `message-square`,
	"content.email": `mail`,
	"content.guide": `book-open`,
	"content.hash": `hash`,
	"content.log": `scroll-text`,
	"content.mention": `at-sign`,
	"content.message-warning": `message-square-exclamation-point`,
	"content.packages": `boxes`,
	"content.palette": `palette`,
	"content.place": `map-pin`,
	"content.post": `newspaper`,
	"content.product": `package`,
	"device.desktop": `monitor`,
	"device.keyboard": `keyboard`,
	"device.laptop": `laptop`,
	"device.phone": `smartphone`,
	"device.tablet": `tablet`,
	"file.appimage": `square-play`,
	"file.archive": `file-archive`,
	"file.audio": `file-music`,
	"file.code": `file-code`,
	"file.disk-image": `hard-drive`,
	"file.document": `file-text`,
	"file.generic": `file`,
	"file.image": `file-image`,
	"file.portable": `briefcase`,
	"file.source": `file-code-corner`,
	"file.video": `file-play`,
	"folder.add": `folder-plus`,
	"folder.closed": `folder`,
	"folder.open": `folder-open`,
	"format.bold": `letter-b`,
	"format.italic": `italic`,
	"format.wrap": `text-wrap`,
	"issue.bug": `bug`,
	"issue.epic": `zap`,
	"layout.columns-2": `columns-2`,
	"layout.columns-3": `columns-3`,
	"layout.grid": `grid-2x2`,
	"layout.grid-dense": `grid-3x3`,
	"layout.list": `list`,
	"layout.panel": `panel-right`,
	"layout.panel-close": `panel-right-close`,
	"layout.rows-2": `rows-2`,
	"layout.sidebar": `panel-left`,
	"layout.sidebar-close": `panel-left-close`,
	"layout.table": `table`,
	"learn.certificate": `sk-certificate`,
	"learn.course": `sk-course`,
	"learn.lesson": `sk-lesson`,
	"media.audio": `eighth-notes`,
	"media.camera": `camera`,
	"media.episode": `sk-episode`,
	"media.flip-horizontal": `triangles-centerline-dashed-horizontal`,
	"media.flip-vertical": `triangles-centerline-dashed-vertical`,
	"media.image": `image`,
	"media.image-add": `image-plus`,
	"media.image-missing": `image-off`,
	"media.microphone": `mic`,
	"media.pause": `pause`,
	"media.play": `play`,
	"media.video": `video`,
	"nav.accessibility": `accessibility`,
	"nav.analytics": `chart-no-axes-column`,
	"nav.apps": `layout-grid`,
	"nav.board": `kanban`,
	"nav.components": `shapes`,
	"nav.dashboard": `layout-dashboard`,
	"nav.explore": `compass`,
	"nav.help": `life-buoy`,
	"nav.home": `house`,
	"nav.inbox": `inbox`,
	"nav.languages": `languages`,
	"nav.menu": `menu`,
	"nav.notifications": `bell`,
	"nav.pages": `files`,
	"nav.reports": `chart-line`,
	"nav.settings": `settings`,
	"nav.tasks": `list-todo`,
	"nav.tokens": `swatch-book`,
	"nav.web": `globe`,
	"ops.container": `container`,
	"ops.cpu": `cpu`,
	"ops.deploy": `rocket`,
	"ops.gauge": `gauge`,
	"ops.integration": `plug`,
	"ops.tools": `wrench`,
	"os.linux": `si-linux`,
	"os.macos": `si-apple`,
	"os.windows": `sk-windows`,
	"priority.medium": `equal`,
	"search.match-case": `case-sensitive`,
	"search.no-results": `search-x`,
	"search.regex": `regex`,
	"search.whole-word": `whole-word`,
	"sort.none": `arrow-up-down`,
	"sport.match": `sk-match`,
	"sport.team": `users`,
	"sport.trophy": `trophy`,
	"status.canceled": `circle-slash`,
	"status.checked": `square-check`,
	"status.current": `circle-dot`,
	"status.danger": `octagon-exclamation-point`,
	"status.error": `circle-exclamation-point`,
	"status.failed": `circle-x`,
	"status.help": `circle-question-mark`,
	"status.in-progress": `circle-dot-dashed`,
	"status.info": `info`,
	"status.loading": `loader-circle`,
	"status.mail-done": `mail-check`,
	"status.mail-error": `mail-exclamation-point`,
	"status.locked": `lock`,
	"status.offline": `wifi-off`,
	"status.ok": `circle-check`,
	"status.pending": `circle-dashed`,
	"status.secure": `shield-check`,
	"status.skipped": `circle-minus`,
	"status.tip": `lightbulb`,
	"status.todo": `circle`,
	"status.unchecked": `square`,
	"status.verified": `sk-verified`,
	"status.warning": `triangle-exclamation-point`,
	"sync.cloud": `cloud`,
	"sync.offline": `cloud-off`,
	"sync.upload": `cloud-upload`,
	"theme.contrast": `contrast`,
	"theme.dark": `moon`,
	"theme.light": `sun`,
	"theme.system": `monitor`,
	"time.calendar": `calendar-days`,
	"time.clock": `clock`,
	"time.date": `calendar`,
	"time.due": `calendar-clock`,
	"time.duration": `timer`,
	"time.history": `rotate-ccw-clock`,
	"time.overdue": `calendar-x`,
	"trend.down": `arrow-down-right`,
	"trend.rising": `trending-up`,
	"trend.up": `arrow-up-right`,
	"user.account": `circle-user`,
	"user.invite": `user-plus`,
	"user.person": `user-round`,
	"user.roles": `shield-user`,
	"user.sign-in": `log-in`,
	"user.sign-out": `log-out`,
	"user.team": `users`,
	"vcs.branch": `git-branch`,
	"vcs.commit": `git-commit-horizontal`,
	"vcs.merged": `git-merge`,
	"vcs.pull-request": `git-pull-request`,
	"vcs.pull-request-closed": `git-pull-request-closed`,
	"vcs.pull-request-draft": `git-pull-request-draft`,
	"vcs.pull-request-none": `git-pull-request-arrow`,
	"vcs.repository": `folder-git-2`,
	"vcs.tag": `tag`
}, Ar = Object.keys(kr), Y = Dr(), jr = [
	`mono`,
	`brand`,
	`duo`
], Mr = {
	xs: 12,
	sm: 16,
	md: 20,
	lg: 24,
	xl: 32
}, Nr = `text-[color:var(--sk-icon-accent,var(--sk-accent))]`, Pr = `fill-[color:var(--sk-icon-soft,var(--sk-accent-soft))] forced-colors:fill-none`, Fr = ([e, t]) => `${e} ${Object.values(t).join(` `)}`;
function Ir({ shape: [e, t] }) {
	return (0, Y.jsx)(e, { ...t });
}
function Lr({ glyph: e, tone: t = `mono`, size: n, label: r, className: i, strokeWidth: a = 1.75, ...o }) {
	let s = typeof n == `number` ? n : Mr[n ?? `lg`];
	return (0, Y.jsxs)(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		width: s,
		height: s,
		viewBox: `0 0 24 24`,
		fill: `none`,
		stroke: `currentColor`,
		strokeWidth: a,
		strokeLinecap: `round`,
		strokeLinejoin: `round`,
		"data-tone": t,
		focusable: `false`,
		...r !== void 0 && r !== `` ? {
			role: `img`,
			"aria-label": r
		} : { "aria-hidden": !0 },
		...o,
		className: J(t !== `mono` && Nr, i),
		children: [
			t === `duo` && e.fill.length > 0 ? (0, Y.jsx)(`g`, {
				className: Pr,
				stroke: `none`,
				children: e.fill.map((e) => (0, Y.jsx)(Ir, { shape: e }, Fr(e)))
			}) : null,
			e.solid && e.solid.length > 0 ? (0, Y.jsx)(`g`, {
				fill: `currentColor`,
				stroke: `none`,
				children: e.solid.map((e) => (0, Y.jsx)(Ir, { shape: e }, Fr(e)))
			}) : null,
			e.stroke.map((e) => (0, Y.jsx)(Ir, { shape: e }, Fr(e)))
		]
	});
}
function X({ name: e, ...t }) {
	return (0, Y.jsx)(Lr, {
		glyph: Or[kr[e]],
		"data-icon": e,
		...t
	});
}
var Rr = new Map();
function Z(e) {
	let t = Rr.get(e);
	if (!t) {
		let n = (t) => (0, Y.jsx)(X, {
			name: e,
			...t
		});
		n.displayName = `Icon(${e})`, t = n, Rr.set(e, t);
	}
	return t;
}
var zr = {
	ok: Z(`status.ok`),
	info: Z(`status.info`),
	warn: Z(`status.warning`),
	danger: Z(`status.danger`)
}, Br = {
	ok: `text-ok`,
	info: `text-info`,
	warn: `text-warn`,
	danger: `text-danger`
}, Vr = {
	ok: `border-ok bg-ok-soft`,
	info: `border-info bg-info-soft`,
	warn: `border-warn bg-warn-soft`,
	danger: `border-danger bg-danger-soft`
}, Hr = {
	ok: `border-l-ok`,
	info: `border-l-info`,
	warn: `border-l-warn`,
	danger: `border-l-danger`
};
function Ur({ tone: e, className: t }) {
	let n = zr[e];
	return (0, Y.jsx)(n, {
		"aria-hidden": !0,
		focusable: `false`,
		className: J(`size-4 shrink-0`, Br[e], t)
	});
}
function Wr({ label: e, onPress: t, className: n }) {
	return (0, Y.jsx)(Cr, {
		"aria-label": e,
		onPress: t,
		className: J(`inline-flex size-control-sm shrink-0 cursor-default items-center justify-center rounded-md border border-transparent text-fg transition-colors data-hovered:bg-fg/10 data-pressed:bg-fg/15`, n),
		children: (0, Y.jsx)(X, {
			name: `action.close`,
			"aria-hidden": !0,
			focusable: `false`,
			className: `size-4`
		})
	});
}
function Gr({ tone: e = `info`, title: t, toneLabel: n, headingLevel: r, actions: a, live: o, urgent: s = !1, onDismiss: c, dismissLabel: l, className: u, children: d, ...f }) {
	let p = (0, i.useId)(), m = s ? `assertive` : o, h = m === `assertive` ? { role: `alert` } : m === `polite` ? { role: `status` } : {}, g = r ? `h${r}` : `p`;
	return (0, Y.jsxs)(`div`, {
		"aria-labelledby": m ? void 0 : p,
		...f,
		...h,
		...m ? {} : { role: `group` },
		"data-tone": e,
		className: J(`flex min-w-0 items-start gap-3 rounded-md border border-l-4 p-3 text-body text-fg`, Vr[e], u),
		children: [
			(0, Y.jsx)(Ur, {
				tone: e,
				className: `mt-0.5`
			}),
			(0, Y.jsxs)(`div`, {
				className: `min-w-0 flex-1 wrap-break-word`,
				children: [
					(0, Y.jsx)(g, {
						id: p,
						className: `text-body font-semibold`,
						children: n ? (0, Y.jsxs)(Y.Fragment, { children: [
							(0, Y.jsx)(`span`, {
								className: `sr-only`,
								children: `${n}:`
							}),
							` `,
							(0, Y.jsx)(`span`, { children: t })
						] }) : t
					}),
					d ? (0, Y.jsx)(`div`, {
						className: `mt-1 [&_a]:underline [&_ul]:list-disc [&_ul]:ps-5`,
						children: d
					}) : null,
					a ? (0, Y.jsx)(`div`, {
						className: `mt-3 flex flex-wrap items-center gap-2`,
						children: a
					}) : null
				]
			}),
			c ? (0, Y.jsx)(Wr, {
				label: l,
				onPress: c,
				className: `-my-1 -me-1`
			}) : null
		]
	});
}
function Kr(e) {
	return {
		role: `group`,
		"aria-label": e,
		tabIndex: 0
	};
}
var qr = Z(`action.check`), Jr = Z(`status.error`), Yr = Z(`action.copy`);
async function Xr(e) {
	if (typeof navigator > `u` || !navigator.clipboard) throw Error(`No clipboard`);
	await navigator.clipboard.writeText(e);
}
function Zr({ text: e, copyLabel: t, copiedLabel: n, copyFailedLabel: r, copyText: a, iconOnly: o = !1, className: s }) {
	let [c, l] = (0, i.useState)(`idle`), u = (0, i.useRef)({
		hovered: !1,
		focused: !1,
		expired: !1
	}), d = (0, i.useRef)(void 0), f = (0, i.useCallback)(() => {
		u.current.expired = !1, l(`idle`);
	}, []), p = (0, i.useCallback)(() => {
		let { hovered: e, focused: t, expired: n } = u.current;
		!e && !t && n && f();
	}, [f]);
	(0, i.useEffect)(() => () => clearTimeout(d.current), []);
	let m = (0, i.useCallback)(async () => {
		clearTimeout(d.current), u.current.expired = !1;
		try {
			await (a ?? Xr)(e), l(`copied`);
		} catch {
			l(`failed`);
		}
		d.current = setTimeout(() => {
			u.current.expired = !0, p();
		}, 2500);
	}, [
		a,
		p,
		e
	]), h = (0, i.useCallback)(() => void m(), [m]), g = (0, i.useCallback)((e) => {
		u.current.hovered = e, p();
	}, [p]), _ = (0, i.useCallback)((e) => {
		u.current.focused = e, p();
	}, [p]), v = c === `copied` ? n : c === `failed` ? r : t, y = c === `copied` ? qr : c === `failed` ? Jr : Yr;
	return (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsxs)(Cr, {
		onPress: h,
		onHoverChange: g,
		onFocusChange: _,
		...o ? { "aria-label": t } : {},
		className: J(`inline-flex h-control-sm min-w-control-sm shrink-0 items-center justify-center gap-1.5 rounded-md border border-transparent text-caption font-medium transition-colors data-hovered:bg-hover data-pressed:bg-selected`, o ? `px-0` : `px-2`, c === `idle` && `text-muted data-hovered:text-fg`, c === `copied` && `text-ok`, c === `failed` && `text-danger`, s),
		children: [(0, Y.jsx)(y, {
			size: 14,
			"aria-hidden": !0
		}), o ? null : (0, Y.jsx)(`span`, { children: v })]
	}), (0, Y.jsx)(`output`, {
		className: `sr-only`,
		children: c === `idle` ? `` : v
	})] });
}
function Qr({ code: e, label: t, title: n, language: r, showLineNumbers: a = !1, wrap: o = !1, maxLines: s, copyLabel: c, copiedLabel: l, copyFailedLabel: u, copyText: d, className: f, ...p }) {
	let m = (0, i.useMemo)(() => e.replace(/\n$/, ``).split(`
`), [e]), h = (0, i.useMemo)(() => m.map((e, t) => ({
		number: t + 1,
		line: e
	})), [m]), g = (0, i.useMemo)(() => s ? { maxHeight: `calc(${s * 1.625}em + 1.5rem)` } : void 0, [s]), _ = c !== void 0 && l !== void 0 && u !== void 0, v = n !== void 0 || r !== void 0 || _, y = (0, i.useMemo)(() => ({ minWidth: `${String(m.length).length + 1}ch` }), [m.length]);
	return (0, Y.jsxs)(`div`, {
		...p,
		className: J(`min-w-0 overflow-hidden rounded-lg border border-border bg-sunken text-fg`, f),
		children: [v ? (0, Y.jsxs)(`div`, {
			className: `flex min-h-control-md flex-wrap items-center gap-x-2 gap-y-1 border-b border-border bg-bar py-1 ps-3 pe-1`,
			children: [
				n === void 0 ? null : (0, Y.jsx)(`span`, {
					className: `min-w-0 flex-1 truncate font-mono text-caption font-medium text-fg`,
					children: n
				}),
				r === void 0 ? null : (0, Y.jsx)(`span`, {
					className: J(`rounded-sm border border-border bg-surface px-1.5 font-mono text-label text-muted uppercase`, n === void 0 && `me-auto`),
					children: r
				}),
				_ ? (0, Y.jsx)(Zr, {
					text: e,
					copyLabel: c,
					copiedLabel: l,
					copyFailedLabel: u,
					...d === void 0 ? {} : { copyText: d },
					className: n === void 0 && r === void 0 ? `ms-auto` : ``
				}) : null
			]
		}) : null, (0, Y.jsx)(`pre`, {
			...Kr(t),
			translate: `no`,
			style: g,
			className: J(`m-0 overflow-auto p-3 font-mono text-caption leading-[1.625]`, o ? `whitespace-pre-wrap [overflow-wrap:anywhere]` : `whitespace-pre`),
			children: (0, Y.jsx)(`code`, {
				className: a ? `table w-full border-collapse` : void 0,
				children: a ? h.map(({ number: e, line: t }) => (0, Y.jsxs)(`span`, {
					className: `table-row`,
					children: [(0, Y.jsx)(`span`, {
						"aria-hidden": !0,
						className: `table-cell pe-4 text-end text-muted select-none`,
						style: y,
						children: e
					}), (0, Y.jsx)(`span`, {
						className: `table-cell`,
						children: t
					})]
				}, e)) : m.join(`
`)
			})
		})]
	});
}
var $r = `min-w-0 text-fg [overflow-wrap:anywhere] leading-(--sk-leading-prose) [&>*+*]:mt-3 [&>:first-child]:mt-0 [&_:is(h1,h2,h3,h4,h5,h6)]:font-semibold [&_:is(h1,h2,h3,h4,h5,h6)]:leading-tight [&_:is(h1,h2,h3,h4,h5,h6)]:tracking-tight [&_:is(h1,h2,h3,h4,h5,h6)]:text-fg [&>:is(h1,h2,h3,h4,h5,h6)]:mt-5 [&>:is(h1,h2,h3,h4,h5,h6)+*]:mt-2 [&_strong]:font-semibold [&_em]:italic [&_del]:line-through [&_a]:text-accent-text [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:decoration-2 [&_ul]:list-disc [&_ol]:list-decimal [&_:is(ul,ol)]:ps-5 [&_li]:ps-1 [&_li+li]:mt-1 [&_li>:is(ul,ol)]:mt-1 [&_li>p+p]:mt-2 [&_li::marker]:text-muted [&_li[data-task]]:list-none [&_li[data-task]]:-ms-5 [&_li[data-task]>label]:inline-flex [&_li[data-task]>label]:items-baseline [&_li[data-task]>label]:gap-2 [&_input[type=checkbox]]:size-4 [&_input[type=checkbox]]:shrink-0 [&_input[type=checkbox]]:translate-y-0.5 [&_input[type=checkbox]]:accent-accent [&_input[type=checkbox]]:opacity-100 [&_blockquote]:border-s-4 [&_blockquote]:border-border-strong [&_blockquote]:ps-3 [&_blockquote]:text-muted [&_blockquote>*+*]:mt-2 [&_:not(pre)>code]:rounded-sm [&_:not(pre)>code]:border [&_:not(pre)>code]:border-border [&_:not(pre)>code]:bg-sunken [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:text-[0.875em] [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:border [&_pre]:border-border [&_pre]:bg-sunken [&_pre]:p-3 [&_pre]:text-caption [&_pre]:leading-relaxed [&_pre]:[overflow-wrap:normal] [&_kbd]:rounded-sm [&_kbd]:border [&_kbd]:border-border-strong [&_kbd]:bg-surface [&_kbd]:px-1 [&_kbd]:text-[0.8125em] [&_kbd]:shadow-sm [&_[data-scroll]]:max-w-full [&_[data-scroll]]:overflow-x-auto [&_[data-scroll]]:rounded-md [&_[data-scroll]]:border [&_[data-scroll]]:border-border [&_table]:w-full [&_table]:border-collapse [&_table]:text-start [&_table]:[overflow-wrap:normal] [&_:is(th,td)]:border-b [&_:is(th,td)]:border-border [&_:is(th,td)]:px-3 [&_:is(th,td)]:py-1.5 [&_:is(th,td)]:align-top [&_:is(th,td)]:text-start [&_th]:bg-sunken [&_th]:font-semibold [&_tr:last-child>td]:border-b-0 [&_hr]:my-5 [&_hr]:border-border [&_img]:inline-block [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-md [&_mark]:rounded-sm [&_mark]:bg-accent-soft [&_mark]:px-0.5 [&_mark]:text-fg`, ei = {
	md: `text-body [&_h1]:text-heading [&_h2]:text-title [&_h3]:text-body [&_:is(h4,h5,h6)]:text-body`,
	lg: `text-title [&_h1]:text-page [&_h2]:text-heading [&_h3]:text-title [&_:is(h4,h5,h6)]:text-body`
};
function ti({ size: e = `md`, className: t, ...n }) {
	return (0, Y.jsx)(`div`, {
		...n,
		className: J($r, ei[e], t)
	});
}
var ni = {
	en: {
		brand: `Skribly UI`,
		onThisPage: `On this page`,
		linkToSection: `Link to the section {title}`,
		previousNext: `Previous and next`,
		previous: `Previous`,
		next: `Next`,
		copy: `Copy`,
		copied: `Copied`,
		copyFailed: `Copy failed. Select the code and press Ctrl+C.`,
		codeExample: `{language} example`,
		codeExampleDefault: `Code example`,
		codeFor: `Code for {label}`,
		doLabel: `Do. `,
		dontLabel: `Don’t. `,
		errorTone: `Error`,
		previewFailed: `The {name} preview could not render`,
		exports: `Exports`,
		componentGroups: `Component groups`,
		components: `Components`,
		showPagesOf: `Show the pages of {group}`,
		backToGroups: `Back to groups`,
		allComponents: `All components`,
		seeInAction: `See it in action`,
		patterns: `Patterns`,
		ogAlt: `The Skribly mark next to the words Skribly UI, one calm look for every Skribly tool.`,
		homeDescription: `Skribly UI is the design system of the Skribly tools: design tokens, plain CSS and accessible React components, in light, dark and high contrast.`,
		homeEyebrow: `Design system · version {version}`,
		homeTitle: `The tokens, CSS and React components behind every Skribly screen`,
		homeLead: `{groups} component groups and {components} components on React Aria, in light, dark and high contrast from one set of tokens. No component has words of its own: every label is a prop, so each app writes its own.`,
		getStarted: `Get started`,
		browseComponents: `Browse components`,
		specimenLabel: `Real components of the kit, set like a type specimen: the display type, colour tokens, two buttons, a field, a switch, a badge, a status and a progress bar.`,
		specimenControls: `Try the hero in another look`,
		specimenTheme: `Theme`,
		specimenThemePage: `As the page`,
		specimenLight: `Light`,
		specimenDark: `Dark`,
		specimenContrast: `High contrast`,
		specimenDensity: `Density`,
		specimenComfortable: `Comfortable`,
		specimenCompact: `Compact`,
		specimenColour: `Product colour`,
		specimenButton: `Publish`,
		specimenSecondary: `Save draft`,
		specimenField: `Project name`,
		specimenValue: `Release notes`,
		specimenToggle: `Notify the team`,
		specimenBadge: `New`,
		specimenStatus: `Saved a minute ago`,
		specimenProgress: `Upload`,
		agentsTitle: `Agents`,
		agentsWorking: `working`,
		agentsWaiting: `waiting`,
		agentsDone: `done`,
		pauseMotion: `Pause motion`,
		playMotion: `Play motion`,
		clipsLead: `Short recordings of this site, with captions. They play while on screen and stop when animations are turned off.`,
		layersTitle: `Three layers, one source`,
		layersTokens: `The <strong class="text-fg">tokens</strong> are the source: colours, type, space, radius and motion, written once as W3C token files and built into CSS variables. Change a token and every layer follows.`,
		layersPlain: `<strong class="text-fg">Plain CSS</strong> classes give any page the same buttons, fields, cards and messages with no build step and no framework.`,
		layersReact: `<strong class="text-fg">React components</strong> add behaviour. React Aria brings keyboard support, focus management and screen reader semantics; the tokens bring the look.`,
		guidesTitle: `Start here`,
		groupsTitle: `Component groups`,
		pageOne: `1 page`,
		pageFew: `{count} pages`,
		pageMany: `{count} pages`,
		guideStart: `Install from the private repository, then use it in React or with plain CSS.`,
		guidePrinciples: `Six rules every component keeps, from one accent to tokens first.`,
		guideTokens: `Every colour, size and duration, with its value in each theme.`,
		guideAccessibility: `How the library is built to WCAG 2.2 AA as a target, and what your app still owns.`,
		guideMessages: `Success, information, warning and error: which component, when, and how to write it.`,
		guidePlainCss: `The .sk-* classes for pages with no React, live.`,
		guideIcons: `Every icon, free to use: the recommended names and the complete Lucide set, in three tones.`,
		componentsIndexTitle: `Components`,
		componentsIndexDescription: `All {components} React components of Skribly UI in {groups} groups, each live in light, dark and high contrast, with code to copy and accessibility notes.`,
		componentsIndexLead: `{components} React components in {groups} groups, built on React Aria and styled only with the tokens. Each one is shown in the light, dark and high contrast themes, with code to copy and its accessibility notes.`,
		groupDescriptionFallback: `The {title} components of Skribly UI, live in every theme.`,
		groupCount: `{pages} pages, {exports} exports`,
		importTitle: `Import`,
		importText: `Each group has its own entry, so an app that needs only this group loads only this group. Everything is also exported from <code>@skribly/ui</code>.`,
		importLabel: `Import from {title}`,
		pagesTitle: `Pages in this group`,
		onlyEnglish: `English only for now`,
		previewTitle: `Preview`,
		usageTitle: `Usage`,
		usageImportLabel: `Import of {name}`,
		usageSampleLabel: `Usage of {name}`,
		usageText: `Every label is a prop, so the app passes its own words in its own language. See <a href="{href}">no built-in text</a>.`,
		accessibilityTitle: `Accessibility`,
		accessibilityEmpty: `This page has no notes of its own yet. The rules every component follows are on the <a href="{href}">accessibility</a> page.`,
		axeNote: `This demo runs through axe in all three themes on every test run. See <a href="{href}" class="text-accent-text underline">what the tests check</a>.`,
		demoDescriptionFallback: `{name}, part of the {group} components of Skribly UI.`,
		demoLeadFallback: `Part of {group}.`,
		previewAll: `Live in all three themes. Everything here is interactive.`,
		previewOne: `Live and interactive in one theme.`,
		previewTheme: `Theme of the {name} preview`,
		previewThemeSuffix: ` theme, {name}`,
		allThemes: `All themes`,
		notFoundTitle: `Page not found`,
		notFoundDescription: `This page of Skribly UI does not exist. Search for it, or start from the home page.`,
		notFoundAll: `See all components`,
		licencesTitle: `Licences`,
		licencesDescription: `The open source software and fonts that Skribly UI and this site ship, each with its licence and repository.`,
		licencesCrumb: `Licences`
	},
	pl: {
		brand: `Skribly UI`,
		onThisPage: `Na tej stronie`,
		linkToSection: `Link do sekcji {title}`,
		previousNext: `Poprzednia i następna strona`,
		previous: `Poprzednia`,
		next: `Następna`,
		copy: `Kopiuj`,
		copied: `Skopiowano`,
		copyFailed: `Nie udało się skopiować. Zaznacz kod i naciśnij Ctrl+C.`,
		codeExample: `Przykład: {language}`,
		codeExampleDefault: `Przykład kodu`,
		codeFor: `Kod przykładu {label}`,
		doLabel: `Rób tak. `,
		dontLabel: `Nie rób tak. `,
		errorTone: `Błąd`,
		previewFailed: `Nie udało się wyświetlić podglądu: {name}`,
		exports: `Eksporty`,
		componentGroups: `Grupy komponentów`,
		components: `Komponenty`,
		showPagesOf: `Pokaż strony grupy {group}`,
		backToGroups: `Wróć do grup`,
		allComponents: `Wszystkie komponenty`,
		seeInAction: `Zobacz w działaniu`,
		patterns: `Wzorce`,
		ogAlt: `Znak Skribly obok słów Skribly UI, jeden spokojny wygląd dla każdego narzędzia Skribly.`,
		homeDescription: `Skribly UI to system projektowy narzędzi Skribly: tokeny, czysty CSS i dostępne komponenty React w motywach dziennym, nocnym i wysokiego kontrastu.`,
		homeEyebrow: `System projektowy · wersja {version}`,
		homeTitle: `Tokeny, CSS i\xA0komponenty React pod każdym ekranem Skribly`,
		homeLead: `{groups} grup komponentów i\xA0{components} komponentów na React Aria, w\xA0motywie dziennym, nocnym i\xA0wysokiego kontrastu z\xA0jednego zestawu tokenów. Żaden komponent nie ma wbudowanych słów: każda etykieta to prop, więc każda aplikacja pisze własne.`,
		getStarted: `Pierwsze kroki`,
		browseComponents: `Przeglądaj komponenty`,
		specimenLabel: `Prawdziwe komponenty zestawu złożone jak wzornik pisma: krój nagłówków, tokeny kolorów, dwa przyciski, pole, przełącznik, plakietka, status i\xA0pasek postępu.`,
		specimenControls: `Wypróbuj hero w innym wyglądzie`,
		specimenTheme: `Motyw`,
		specimenThemePage: `Jak strona`,
		specimenLight: `Dzień`,
		specimenDark: `Noc`,
		specimenContrast: `Wysoki kontrast`,
		specimenDensity: `Gęstość`,
		specimenComfortable: `Wygodna`,
		specimenCompact: `Zwarta`,
		specimenColour: `Kolor produktu`,
		specimenButton: `Opublikuj`,
		specimenSecondary: `Zapisz szkic`,
		specimenField: `Nazwa projektu`,
		specimenValue: `Informacje o wydaniu`,
		specimenToggle: `Powiadom zespół`,
		specimenBadge: `Nowe`,
		specimenStatus: `Zapisano minutę temu`,
		specimenProgress: `Wysyłanie`,
		agentsTitle: `Agenci`,
		agentsWorking: `pracuje`,
		agentsWaiting: `czeka`,
		agentsDone: `gotowe`,
		pauseMotion: `Zatrzymaj ruch`,
		playMotion: `Włącz ruch`,
		clipsLead: `Krótkie nagrania tej strony, z napisami. Odtwarzają się, gdy są na ekranie, i zatrzymują się, gdy animacje są wyłączone.`,
		layersTitle: `Trzy warstwy, jedno źródło`,
		layersTokens: `<strong class="text-fg">Tokeny</strong> są źródłem: kolory, typografia, odstępy, zaokrąglenia i ruch, zapisane raz jako pliki tokenów W3C i zbudowane w zmienne CSS. Zmień token, a każda warstwa pójdzie za nim.`,
		layersPlain: `Klasy <strong class="text-fg">czystego CSS</strong> dają każdej stronie te same przyciski, pola, karty i komunikaty, bez kroku budowania i bez frameworka.`,
		layersReact: `<strong class="text-fg">Komponenty React</strong> dodają zachowanie. React Aria zapewnia obsługę klawiatury, zarządzanie fokusem i semantykę dla czytników ekranu, a tokeny zapewniają wygląd.`,
		guidesTitle: `Zacznij tutaj`,
		groupsTitle: `Grupy komponentów`,
		pageOne: `1 strona`,
		pageFew: `{count} strony`,
		pageMany: `{count} stron`,
		guideStart: `Zainstaluj z prywatnego repozytorium i używaj w Reakcie albo z czystym CSS.`,
		guidePrinciples: `Sześć zasad, których trzyma się każdy komponent: od jednego akcentu po tokeny w pierwszej kolejności.`,
		guideTokens: `Każdy kolor, rozmiar i czas trwania, z wartością w każdym motywie.`,
		guideAccessibility: `Jak biblioteka jest budowana z celem WCAG 2.2 AA i za co nadal odpowiada twoja aplikacja.`,
		guideMessages: `Sukces, informacja, ostrzeżenie i błąd: który komponent, kiedy i jak napisać tekst.`,
		guidePlainCss: `Klasy .sk-* dla stron bez Reacta, na żywo.`,
		guideIcons: `Wszystkie ikony, do swobodnego użycia: zalecane nazwy i pełny zestaw Lucide, w trzech tonach.`,
		componentsIndexTitle: `Komponenty`,
		componentsIndexDescription: `Wszystkie komponenty React ({components}) Skribly UI w {groups} grupach, każdy na żywo w motywie dziennym, nocnym i wysokiego kontrastu, z kodem do skopiowania i notatkami o dostępności.`,
		componentsIndexLead: `Komponenty React ({components}) w {groups} grupach, zbudowane na React Aria i stylowane wyłącznie tokenami. Każdy jest pokazany w motywie dziennym, nocnym i wysokiego kontrastu, z kodem do skopiowania i notatkami o dostępności.`,
		groupDescriptionFallback: `Komponenty z grupy {title} w Skribly UI, na żywo w każdym motywie.`,
		groupCount: `Strony: {pages}, eksporty: {exports}`,
		importTitle: `Import`,
		importText: `Każda grupa ma własny punkt wejścia, więc aplikacja, która potrzebuje tylko tej grupy, ładuje tylko ją. Wszystko jest też eksportowane z <code>@skribly/ui</code>.`,
		importLabel: `Import z grupy {title}`,
		pagesTitle: `Strony tej grupy`,
		onlyEnglish: `Na razie tylko po angielsku`,
		previewTitle: `Podgląd`,
		usageTitle: `Użycie`,
		usageImportLabel: `Import komponentu {name}`,
		usageSampleLabel: `Użycie komponentu {name}`,
		usageText: `Każda etykieta jest propem, więc aplikacja przekazuje własne słowa we własnym języku. Zobacz zasadę <a href="{href}">brak wbudowanego tekstu</a>.`,
		accessibilityTitle: `Dostępność`,
		accessibilityEmpty: `Ta strona nie ma jeszcze własnych notatek. Zasady, których trzyma się każdy komponent, są na stronie <a href="{href}">Dostępność</a>.`,
		axeNote: `Ten przykład przechodzi przez axe we wszystkich trzech motywach przy każdym uruchomieniu testów. Zobacz, <a href="{href}" class="text-accent-text underline">co sprawdzają testy</a>.`,
		demoDescriptionFallback: `{name}, część grupy {group} w Skribly UI.`,
		demoLeadFallback: `Część grupy {group}.`,
		previewAll: `Na żywo we wszystkich trzech motywach. Wszystko tutaj jest interaktywne.`,
		previewOne: `Na żywo i interaktywnie w jednym motywie.`,
		previewTheme: `Motyw podglądu: {name}`,
		previewThemeSuffix: `, podgląd: {name}`,
		allThemes: `Wszystkie motywy`,
		notFoundTitle: `Nie ma takiej strony`,
		notFoundDescription: `Takiej strony Skribly UI nie ma. Wyszukaj ją albo zacznij od strony głównej.`,
		notFoundAll: `Zobacz wszystkie komponenty`,
		licencesTitle: `Licencje`,
		licencesDescription: `Oprogramowanie open source i fonty, które dostarczają Skribly UI i ta strona, każde z licencją i repozytorium.`,
		licencesCrumb: `Licencje`
	}
};
function ri(e, t) {
	return e.replaceAll(/\{(\w+)\}/g, (e, n) => String(t[n] ?? ``));
}
var Q = (e) => ni[e], $ = (0, i.createContext)(`en`), ii = () => Q((0, i.useContext)($));
function ai(e) {
	let t = Q(e);
	return {
		copyLabel: t.copy,
		copiedLabel: t.copied,
		copyFailedLabel: t.copyFailed
	};
}
var oi = `font-display tracking-[-0.025em]`;
function si({ eyebrow: e, title: t, lead: n, children: r }) {
	return (0, Y.jsx)(`header`, {
		className: `sk-hero sk-hero--page sk-product--ui sk-pattern sk-pattern--grid`,
		"data-sk-hero": `page`,
		children: (0, Y.jsxs)(`div`, {
			className: `sk-hero__body`,
			children: [
				e ? (0, Y.jsx)(`p`, {
					className: `sk-hero__eyebrow`,
					children: e
				}) : null,
				(0, Y.jsx)(`h1`, {
					id: `page-title`,
					tabIndex: -1,
					className: `sk-hero__title outline-none`,
					children: t
				}),
				n || r ? (0, Y.jsxs)(`div`, {
					className: `sk-hero__lead`,
					children: [n, r ? (0, Y.jsx)(`div`, {
						className: `mt-6`,
						children: r
					}) : null]
				}) : null
			]
		})
	});
}
function ci(e) {
	return i.Children.toArray(e).flatMap((e) => (0, i.isValidElement)(e) && e.type === di && typeof e.props.id == `string` && typeof e.props.title == `string` ? [{
		id: e.props.id,
		title: e.props.title
	}] : []);
}
function li({ items: e }) {
	let t = ii(), [n, r] = (0, i.useState)(null);
	return (0, i.useEffect)(() => {
		if (typeof IntersectionObserver != `function`) return;
		let t = new IntersectionObserver((e) => {
			let t = e.filter((e) => e.isIntersecting).toSorted((e, t) => e.boundingClientRect.top - t.boundingClientRect.top);
			t[0] && r(t[0].target.id);
		}, { rootMargin: `-72px 0px -65% 0px` });
		for (let n of e) {
			let e = document.getElementById(n.id);
			e && t.observe(e);
		}
		return () => t.disconnect();
	}, [e]), e.length < 2 ? null : (0, Y.jsxs)(`nav`, {
		"aria-label": t.onThisPage,
		className: `sticky top-20 hidden max-h-[calc(100dvh-6rem)] self-start overflow-y-auto xl:block`,
		children: [(0, Y.jsx)(`p`, {
			className: `mb-3 text-label font-semibold text-muted uppercase`,
			children: t.onThisPage
		}), (0, Y.jsx)(`ul`, {
			className: `space-y-0.5 border-s border-border text-caption`,
			children: e.map((e) => (0, Y.jsx)(`li`, { children: (0, Y.jsx)(`a`, {
				href: `#${e.id}`,
				...n === e.id ? { "aria-current": `location` } : {},
				className: `-ms-px block border-s-2 border-transparent py-1 ps-3 text-muted no-underline hover:text-fg aria-[current=location]:border-accent aria-[current=location]:font-medium aria-[current=location]:text-fg forced-colors:aria-[current=location]:underline`,
				children: e.title
			}) }, e.id))
		})]
	});
}
function ui({ children: e, wide: t = !1, lang: n = `en` }) {
	let r = (0, i.useMemo)(() => ci(e), [e]), a = i.Children.toArray(e), o = a.filter((e) => (0, i.isValidElement)(e) && e.type === si), s = a.filter((e) => !o.includes(e));
	return (0, Y.jsxs)($.Provider, {
		value: n,
		children: [o, (0, Y.jsxs)(`div`, {
			className: J(`grid gap-12`, t ? `` : `xl:grid-cols-[minmax(0,1fr)_13rem]`),
			children: [(0, Y.jsx)(`article`, {
				className: `min-w-0`,
				children: s
			}), t ? null : (0, Y.jsx)(li, { items: r })]
		})]
	});
}
function di({ id: e, title: t, children: n, className: r }) {
	let i = ii();
	return (0, Y.jsxs)(`section`, {
		"aria-labelledby": e,
		className: J(`mb-14 min-w-0`, r),
		children: [(0, Y.jsxs)(`h2`, {
			id: e,
			"data-section": t,
			tabIndex: -1,
			className: J(oi, `group mb-4 flex scroll-mt-24 items-center gap-2 text-[1.625rem] leading-tight font-semibold text-fg outline-none`),
			children: [(0, Y.jsx)(`span`, { children: t }), (0, Y.jsxs)(`a`, {
				href: `#${e}`,
				className: `inline-grid size-7 place-items-center rounded-md text-muted opacity-0 transition-opacity group-hover:opacity-100 hover:bg-hover hover:text-fg focus-visible:opacity-100 motion-reduce:transition-none`,
				children: [(0, Y.jsx)(X, {
					name: `content.hash`,
					"aria-hidden": !0,
					className: `size-4`
				}), (0, Y.jsx)(`span`, {
					className: `sr-only`,
					children: ri(i.linkToSection, { title: t })
				})]
			})]
		}), (0, Y.jsx)(`div`, {
			className: `space-y-5`,
			children: n
		})]
	});
}
function fi({ title: e, children: t, id: n }) {
	return (0, Y.jsxs)(`div`, {
		className: `min-w-0 space-y-3 pt-2`,
		children: [(0, Y.jsx)(`h3`, {
			...n ? { id: n } : {},
			className: `scroll-mt-24 text-[1.125rem] font-semibold text-fg`,
			children: e
		}), t]
	});
}
function pi({ children: e, className: t }) {
	return (0, Y.jsx)(ti, {
		size: `lg`,
		className: J(`max-w-[70ch]`, t),
		children: e
	});
}
function mi({ code: e, language: t, title: n, label: r, lang: a }) {
	let o = (0, i.useContext)($), s = a ?? o, c = Q(s);
	return (0, Y.jsx)(Qr, {
		code: e,
		label: r ?? n ?? (t ? ri(c.codeExample, { language: t }) : c.codeExampleDefault),
		...n === void 0 ? {} : { title: n },
		...t === void 0 ? {} : { language: t },
		...ai(s)
	});
}
function hi({ label: e, children: t, code: n, language: r = `tsx`, className: a }) {
	let o = (0, i.useContext)($), s = Q(o);
	return (0, Y.jsxs)(`figure`, {
		className: `min-w-0 overflow-hidden rounded-xl border border-border`,
		children: [
			(0, Y.jsxs)(`figcaption`, {
				className: `flex items-center gap-2 border-b border-border bg-sunken px-4 py-2 text-caption font-medium text-muted`,
				children: [(0, Y.jsx)(`span`, {
					"aria-hidden": !0,
					className: `size-1.5 rounded-full bg-accent forced-colors:bg-[CanvasText]`
				}), e]
			}),
			(0, Y.jsx)(`div`, {
				"data-preview": ``,
				className: J(`min-w-0 bg-bg p-5 sm:p-6`, a),
				children: (0, Y.jsx)(xi, {
					name: e,
					children: t
				})
			}),
			n ? (0, Y.jsx)(Qr, {
				code: n,
				label: ri(s.codeFor, { label: e }),
				language: r,
				...ai(o),
				className: `rounded-none border-x-0 border-b-0`
			}) : null
		]
	});
}
var gi = (e) => ({
	role: `group`,
	"aria-label": e,
	tabIndex: 0
});
function _i({ label: e, children: t }) {
	return (0, Y.jsx)(`div`, {
		...gi(e),
		className: `max-w-full min-w-0 overflow-x-auto rounded-xl border border-border bg-surface [background:linear-gradient(to_right,var(--sk-surface),var(--sk-surface))_left_center/1.5rem_100%_no-repeat_local,linear-gradient(to_left,var(--sk-surface),var(--sk-surface))_right_center/1.5rem_100%_no-repeat_local,linear-gradient(to_right,color-mix(in_oklab,var(--sk-fg)_22%,transparent),transparent)_left_center/0.75rem_100%_no-repeat_scroll,linear-gradient(to_left,color-mix(in_oklab,var(--sk-fg)_22%,transparent),transparent)_right_center/0.75rem_100%_no-repeat_scroll,var(--sk-surface)]`,
		children: (0, Y.jsx)(`table`, {
			className: `w-full min-w-[22rem] border-collapse has-[thead_th:nth-child(3)]:min-w-[36rem] text-start text-body [&_td]:border-t [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_th]:bg-sunken [&_th]:px-4 [&_th]:py-2.5 [&_th]:text-start [&_th]:align-bottom [&_th]:text-caption [&_th]:font-semibold [&_th]:text-muted [&_tbody_th]:border-t [&_tbody_th]:border-border [&_tbody_th]:bg-transparent [&_tbody_th]:align-top [&_tbody_th]:text-body [&_tbody_th]:text-fg [&_code]:rounded-sm [&_code]:bg-sunken [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.8125rem]`,
			children: t
		})
	});
}
function vi({ good: e, bad: t, goodText: n, badText: r }) {
	let i = ii(), a = `flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface`;
	return (0, Y.jsxs)(`div`, {
		className: `grid gap-4 md:grid-cols-2`,
		children: [(0, Y.jsxs)(`figure`, {
			className: a,
			children: [(0, Y.jsx)(`div`, {
				className: `min-w-0 flex-1 border-b-[3px] border-ok bg-bg p-5`,
				children: e
			}), (0, Y.jsxs)(`figcaption`, {
				className: `flex gap-2 p-4 text-body`,
				children: [(0, Y.jsx)(X, {
					name: `action.check`,
					"aria-hidden": !0,
					className: `mt-0.5 size-4 shrink-0 text-ok`
				}), (0, Y.jsxs)(`span`, { children: [(0, Y.jsx)(`strong`, {
					className: `font-semibold text-ok`,
					children: i.doLabel
				}), n] })]
			})]
		}), (0, Y.jsxs)(`figure`, {
			className: a,
			children: [(0, Y.jsx)(`div`, {
				className: `min-w-0 flex-1 border-b-[3px] border-danger bg-bg p-5`,
				children: t
			}), (0, Y.jsxs)(`figcaption`, {
				className: `flex gap-2 p-4 text-body`,
				children: [(0, Y.jsx)(X, {
					name: `action.close`,
					"aria-hidden": !0,
					className: `mt-0.5 size-4 shrink-0 text-danger`
				}), (0, Y.jsxs)(`span`, { children: [(0, Y.jsx)(`strong`, {
					className: `font-semibold text-danger`,
					children: i.dontLabel
				}), r] })]
			})]
		})]
	});
}
function yi({ to: e, title: t, children: n, icon: r, meta: i }) {
	return (0, Y.jsxs)(`a`, {
		href: e,
		className: `group flex min-w-0 flex-col gap-2 rounded-xl border border-border bg-surface p-5 text-fg no-underline shadow-sm transition-[border-color,box-shadow,translate] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0`,
		children: [
			(0, Y.jsxs)(`span`, {
				className: `flex items-center gap-3`,
				children: [
					r ? (0, Y.jsx)(`span`, {
						"aria-hidden": !0,
						className: `grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-text [&>svg]:size-[1.125rem]`,
						children: r
					}) : null,
					(0, Y.jsx)(`span`, {
						className: `min-w-0 flex-1 text-title font-semibold break-words`,
						children: t
					}),
					(0, Y.jsx)(X, {
						name: `arrow.right`,
						"aria-hidden": !0,
						className: `size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent-text motion-reduce:transition-none`
					})
				]
			}),
			n ? (0, Y.jsx)(`span`, {
				className: `text-body text-muted`,
				children: n
			}) : null,
			i ? (0, Y.jsx)(`span`, {
				className: `mt-auto pt-1 text-caption text-muted`,
				children: i
			}) : null
		]
	});
}
function bi({ previous: e, next: t }) {
	let n = ii();
	if (!e && !t) return null;
	let r = `flex min-w-0 flex-1 flex-col gap-1 rounded-xl border border-border bg-surface p-4 no-underline hover:border-border-strong`;
	return (0, Y.jsxs)(`nav`, {
		"aria-label": n.previousNext,
		className: `mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row`,
		children: [e ? (0, Y.jsxs)(`a`, {
			href: e.to,
			rel: `prev`,
			className: r,
			children: [(0, Y.jsxs)(`span`, {
				className: `flex items-center gap-1 text-caption text-muted`,
				children: [(0, Y.jsx)(X, {
					name: `arrow.left`,
					"aria-hidden": !0,
					className: `size-3.5`
				}), n.previous]
			}), (0, Y.jsx)(`span`, {
				className: `font-semibold break-words text-fg`,
				children: e.title
			})]
		}) : (0, Y.jsx)(`span`, {
			"aria-hidden": !0,
			className: `hidden flex-1 sm:block`
		}), t ? (0, Y.jsxs)(`a`, {
			href: t.to,
			rel: `next`,
			className: J(r, `sm:items-end sm:text-end`),
			children: [(0, Y.jsxs)(`span`, {
				className: `flex items-center gap-1 text-caption text-muted`,
				children: [n.next, (0, Y.jsx)(X, {
					name: `arrow.right`,
					"aria-hidden": !0,
					className: `size-3.5`
				})]
			}), (0, Y.jsx)(`span`, {
				className: `font-semibold break-words text-fg`,
				children: t.title
			})]
		}) : null]
	});
}
var xi = class extends i.Component {
	static contextType = $;
	state = { error: null };
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {}
	render() {
		if (this.state.error) {
			let e = Q(this.context);
			return (0, Y.jsx)(Gr, {
				tone: `danger`,
				toneLabel: e.errorTone,
				title: ri(e.previewFailed, { name: this.props.name }),
				children: this.state.error.message
			});
		}
		return this.props.children;
	}
};
export { Jn as $, Ce as $t, X as A, it as At, vr as B, F as Bt, Gr as C, bt as Ct, Vr as D, Tt as Dt, Hr as E, vt as Et, Dr as F, Ye as Ft, pr as G, Pe as Gt, gr as H, Ge as Ht, J as I, Ue as It, or as J, A as Jt, fr as K, ke as Kt, Sr as L, qe as Lt, jr as M, $e as Mt, Ar as N, rt as Nt, Br as O, at as Ot, kr as P, Xe as Pt, er as Q, M as Qt, Cr as R, Ke as Rt, Kr as S, yt as St, Ur as T, St as Tt, mr as U, I as Ut, yr as V, Je as Vt, ur as W, Ne as Wt, tr as X, j as Xt, rr as Y, Te as Yt, nr as Z, we as Zt, ri as _, T as _n, Jt as _t, $ as a, oe as an, kn as at, Qr as b, o as bn, Ot as bt, bi as c, de as cn, vn as ct, fi as d, he as dn, mn as dt, xe as en, qn as et, _i as f, fe as fn, hn as ft, ii as g, E as gn, Yt as gt, oi as h, D as hn, un as ht, hi as i, be as in, Mn as it, Z as j, L as jt, Lr as k, Qe as kt, xi as l, ce as ln, _n as lt, ai as m, ie as mn, dn as mt, vi as n, O as nn, Pn as nt, yi as o, ue as on, An as ot, pi as p, le as pn, fn as pt, lr as q, N as qt, ui as r, k as rn, Nn as rt, si as s, se as sn, En as st, mi as t, ye as tn, Bn as tt, di as u, ae as un, yn as ut, Q as v, w as vn, Bt as vt, Wr as w, xt as wt, Zr as x, a as xn, Et as xt, ti as y, v as yn, kt as yt, xr as z, We as zt };
