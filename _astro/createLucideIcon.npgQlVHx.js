import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
var r = e(t(), 1);
function i(...e) {
	return (...t) => {
		for (let n of e) typeof n == `function` && n(...t);
	};
}
var a = typeof document < `u` ? r.useLayoutEffect : () => {}, o = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
}, s = r.createContext(o), c = r.createContext(!1);
typeof window < `u` && window.document && window.document.createElement;
var l = new WeakMap();
function u(e = !1) {
	let t = (0, r.useContext)(s), n = (0, r.useRef)(null);
	if (n.current === null && !e) {
		let e = r.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (e) {
			let n = l.get(e);
			n == null ? l.set(e, {
				id: t.current,
				state: e.memoizedState
			}) : e.memoizedState !== n.state && (t.current = n.id, l.delete(e));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function d(e) {
	let t = (0, r.useContext)(s), n = u(!!e), i = `react-aria${t.prefix}`;
	return e || `${i}-${n}`;
}
function f(e) {
	let t = r.useId(), [n] = (0, r.useState)(_()), i = n ? `react-aria` : `react-aria${o.prefix}`;
	return e || `${i}-${t}`;
}
var p = typeof r.useId == `function` ? f : d;
function m() {
	return !1;
}
function h() {
	return !0;
}
function g(e) {
	return () => {};
}
function _() {
	return typeof r.useSyncExternalStore == `function` ? r.useSyncExternalStore(g, m, h) : (0, r.useContext)(c);
}
function v(e) {
	let [t, n] = (0, r.useState)(e), i = (0, r.useRef)(t), o = (0, r.useRef)(null), s = (0, r.useRef)(() => {
		if (!o.current) return;
		let e = o.current.next();
		e.done ? o.current = null : i.current === e.value ? s.current() : n(e.value);
	});
	return a(() => {
		i.current = t, o.current && s.current();
	}), [t, (0, r.useCallback)((e) => {
		o.current = e(i.current), s.current();
	}, [s])];
}
var y = !!(typeof window < `u` && window.document && window.document.createElement), b = new Map(), x;
typeof FinalizationRegistry < `u` && (x = new FinalizationRegistry((e) => {
	b.delete(e);
}));
var S = new WeakMap();
function C(e) {
	let [t, n] = (0, r.useState)(e), i = (0, r.useRef)(null), o = p(t), s = (0, r.useRef)(null), c = S.get(s);
	if (x && c !== o && (c != null && x.unregister(s), x.register(s, o, s), S.set(s, o)), y) {
		let e = b.get(o);
		e && !e.includes(i) ? e.push(i) : b.set(o, [i]);
	}
	return a(() => {
		let e = o;
		return () => {
			x && (x.unregister(s), S.delete(s)), b.delete(e);
		};
	}, [o]), (0, r.useEffect)(() => {
		let e = i.current;
		return e && n(e), () => {
			e && (i.current = null);
		};
	}), o;
}
function w(e, t) {
	if (e === t) return e;
	let n = b.get(e);
	if (n) return n.forEach((e) => e.current = t), t;
	let r = b.get(t);
	return r ? (r.forEach((t) => t.current = e), e) : t;
}
function ee(e = []) {
	let t = C(), [n, i] = v(t), o = (0, r.useCallback)(() => {
		i(function* () {
			yield t, yield document.getElementById(t) ? t : void 0;
		});
	}, [t, i]);
	return a(o, [
		t,
		o,
		...e
	]), n;
}
function T(...e) {
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
function E(e) {
	var t, n, r = ``;
	if (typeof e == `string` || typeof e == `number`) r += e;
	else if (typeof e == `object`) {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = E(e[t])) && (r && (r += ` `), r += n);
		} else for (n in e) e[n] && (r && (r += ` `), r += n);
	}
	return r;
}
function ne() {
	for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++) (e = arguments[n]) && (t = E(e)) && (r && (r += ` `), r += t);
	return r;
}
function D(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let e in r) {
			let n = t[e], a = r[e];
			typeof n == `function` && typeof a == `function` && e[0] === `o` && e[1] === `n` && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, a) : (e === `className` || e === `UNSAFE_className`) && typeof n == `string` && typeof a == `string` ? t[e] = ne(n, a) : e === `id` && n && a ? t.id = w(n, a) : e === `ref` && n && a ? t.ref = T(n, a) : t[e] = a === void 0 ? n : a;
		}
	}
	return t;
}
function re(e) {
	let t = (0, r.useRef)(null), n = (0, r.useRef)(void 0), i = (0, r.useCallback)((t) => {
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
	return (0, r.useMemo)(() => ({
		get current() {
			return t.current;
		},
		set current(e) {
			t.current = e, n.current &&= (n.current(), void 0), e != null && (n.current = i(e));
		}
	}), [i]);
}
var ie = Symbol(`default`);
function ae({ values: e, children: t }) {
	for (let [n, i] of e) t = r.createElement(n.Provider, { value: i }, t);
	return t;
}
function oe(e) {
	let { className: t, style: n, children: i, defaultClassName: a, defaultChildren: o, defaultStyle: s, values: c, render: l } = e;
	return (0, r.useMemo)(() => {
		let e, r, u;
		return e = typeof t == `function` ? t({
			...c,
			defaultClassName: a
		}) : t, r = typeof n == `function` ? n({
			...c,
			defaultStyle: s || {}
		}) : n, u = typeof i == `function` ? i({
			...c,
			defaultChildren: o
		}) : i ?? o, {
			className: e ?? a,
			style: r || s ? {
				...s,
				...r
			} : void 0,
			children: u ?? o,
			"data-rac": ``,
			render: l ? (e) => l(e, c) : void 0
		};
	}, [
		t,
		n,
		i,
		a,
		o,
		s,
		c,
		l
	]);
}
function se(e, t) {
	return (n) => t(typeof e == `function` ? e(n) : e, n);
}
function ce(e, t) {
	let n = (0, r.useContext)(e);
	if (t === null) return null;
	if (n && typeof n == `object` && `slots` in n && n.slots) {
		let e = t || ie;
		if (!n.slots[e]) {
			let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`)), r = t ? `Invalid slot "${t}".` : `A slot prop is required.`;
			throw Error(`${r} Valid slot names are ${e}.`);
		}
		return n.slots[e];
	}
	return n;
}
function le(e, t, n) {
	let { ref: i, ...a } = ce(n, e.slot) || {}, o = re((0, r.useMemo)(() => T(t, i), [t, i])), s = D(a, e);
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
function ue(e = !0) {
	let [t, n] = (0, r.useState)(e), i = (0, r.useRef)(!1), o = (0, r.useCallback)((e) => {
		i.current = !0, n(!!e);
	}, []);
	return a(() => {
		i.current || n(!1);
	}, []), [o, t];
}
function de(e) {
	let t = /^(data-.*)$/, n = {};
	for (let r in e) t.test(r) || (n[r] = e[r]);
	return n;
}
function fe(e, t, n) {
	let { render: i, ...o } = t, s = (0, r.useRef)(null), c = (0, r.useMemo)(() => T(n, s), [n, s]);
	a(() => {}, [e, i]);
	let l = {
		...o,
		ref: c
	};
	return i ? i(l, void 0) : r.createElement(e, l);
}
var pe = {}, me = new Proxy({}, { get(e, t) {
	if (typeof t != `string`) return;
	let n = pe[t];
	return n || (n = (0, r.forwardRef)(fe.bind(null, t)), pe[t] = n), n;
} }), O = (e) => ge(e) ? e.document : _e(e) ? e : e?.ownerDocument ?? (typeof document < `u` ? document : void 0), k = (e) => O(e)?.defaultView ?? (typeof window < `u` ? window : void 0);
function he(e) {
	return typeof e == `object` && !!e && `nodeType` in e && typeof e.nodeType == `number`;
}
function ge(e) {
	return typeof e == `object` && !!e && `window` in e && e.window === e;
}
function _e(e) {
	return he(e) && e.nodeType === 9;
}
function ve(e) {
	return he(e) && e.nodeType === 11 && `host` in e;
}
function ye(e, t, n, r) {
	if (n == null || e == null) return () => {};
	let i = Array.isArray(e) ? e : [e];
	for (let e of i) e.addEventListener(t, n, r);
	return () => {
		for (let e of i) e.removeEventListener(t, n, r);
	};
}
function be(e, t, n, r) {
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
var xe = !1;
function A() {
	return xe;
}
function j(e, t) {
	if (!A()) return t && e ? e.contains(t) : !1;
	if (!e || !t) return !1;
	let n = t;
	for (; n != null;) {
		if (n === e) return !0;
		n = typeof n.assignedElements != `function` && n.assignedSlot?.parentNode ? n.assignedSlot.parentNode : ve(n) ? n.host : n.parentNode;
	}
	return !1;
}
var M = (e = document) => {
	if (!A()) return e.activeElement;
	let t = e.activeElement;
	for (; t && `shadowRoot` in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
	return t;
};
function N(e) {
	if (A() && e.target instanceof Element && e.target.shadowRoot) {
		if (`composedPath` in e) return e.composedPath()[0] ?? null;
		if (`composedPath` in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
	}
	return e.target;
}
function Se(e, t) {
	if (t === null) return [];
	t ??= k(e);
	let n = [t];
	if (!A() || !e || e === t) return n;
	let r = `getRootNode` in t ? t.getRootNode() : null, i = e.getRootNode() ?? null;
	for (; ve(i) && i !== r;) n.push(i), i = i.host.getRootNode();
	return n;
}
function Ce(e) {
	if (!e) return !1;
	let t = e.getRootNode(), n = k(e);
	if (!(t instanceof n.Document || t instanceof n.ShadowRoot)) return !1;
	let r = t.activeElement;
	return r != null && e.contains(r);
}
function P(e) {
	e.focus({ preventScroll: !0 });
}
var we = typeof Element < `u` && `checkVisibility` in Element.prototype;
function Te(e) {
	let t = k(e);
	if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
	let { display: n, visibility: r } = e.style, i = n !== `none` && r !== `hidden` && r !== `collapse`;
	if (i) {
		let { getComputedStyle: t } = k(e), { display: n, visibility: r } = t(e);
		i = n !== `none` && r !== `hidden` && r !== `collapse`;
	}
	return i;
}
function Ee(e, t) {
	return !e.hasAttribute(`hidden`) && !e.hasAttribute(`data-react-aria-prevent-focus`) && (e.nodeName === `DETAILS` && t && t.nodeName !== `SUMMARY` ? e.hasAttribute(`open`) : !0);
}
function De(e, t) {
	return we ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest(`[data-react-aria-prevent-focus]`) : e.nodeName !== `#comment` && Te(e) && Ee(e, t) && (!e.parentElement || De(e.parentElement, e));
}
var Oe = [
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
], ke = Oe.join(`:not([hidden]),`) + `,[tabindex]:not([disabled]):not([hidden])`;
Oe.push(`[tabindex]:not([tabindex="-1"]):not([disabled])`);
var Ae = Oe.join(`:not([hidden]):not([tabindex="-1"]),`);
function je(e, t) {
	return e.matches(ke) && !Ne(e) && (t?.skipVisibilityCheck || De(e));
}
function Me(e) {
	return e.matches(Ae) && De(e) && !Ne(e);
}
function Ne(e) {
	let t = e;
	for (; t != null;) {
		if (t instanceof k(t).HTMLElement && t.inert) return !0;
		t = t.parentElement;
	}
	return !1;
}
function Pe(e) {
	let t = e;
	return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t;
}
function Fe(e, t) {
	Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function Ie(e) {
	let t = (0, r.useRef)({
		isFocused: !1,
		observer: null
	});
	return a(() => {
		let e = t.current;
		return () => {
			e.observer &&= (e.observer.disconnect(), null);
		};
	}, []), (0, r.useCallback)((n) => {
		let r = N(n);
		if (r instanceof HTMLButtonElement || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) {
			t.current.isFocused = !0;
			let n = r;
			n.addEventListener(`focusout`, (r) => {
				if (t.current.isFocused = !1, n.disabled) {
					let t = Pe(r);
					e?.(t);
				}
				t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
			}, { once: !0 }), t.current.observer = new MutationObserver(() => {
				if (t.current.isFocused && n.disabled) {
					t.current.observer?.disconnect();
					let e = n === M() ? null : M();
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
var Le = !1;
function Re(e) {
	for (; e && !je(e, { skipVisibilityCheck: !0 });) e = e.parentElement;
	let t = M(k(e).document);
	if (!t || t === e) return;
	let n = e?.getRootNode(), r = n != null && ve(n) ? n : k(e), i = (t) => t === e || he(t) && j(e, t), a = (e) => e === t || t != null && he(e) && j(t, e);
	Le = !0;
	let o = !1, s = (e) => {
		(a(N(e)) || o) && e.stopImmediatePropagation();
	}, c = (n) => {
		(a(N(n)) || o) && (n.stopImmediatePropagation(), !e && !o && (o = !0, P(t), d()));
	}, l = (e) => {
		(i(N(e)) || o) && e.stopImmediatePropagation();
	}, u = (e) => {
		(i(N(e)) || o) && (e.stopImmediatePropagation(), o || (o = !0, P(t), d()));
	};
	r.addEventListener(`blur`, s, !0), r.addEventListener(`focusout`, c, !0), r.addEventListener(`focusin`, u, !0), r.addEventListener(`focus`, l, !0);
	let d = () => {
		cancelAnimationFrame(f), r.removeEventListener(`blur`, s, !0), r.removeEventListener(`focusout`, c, !0), r.removeEventListener(`focusin`, u, !0), r.removeEventListener(`focus`, l, !0), Le = !1, o = !1;
	}, f = requestAnimationFrame(d);
	return d;
}
function ze(e) {
	if (typeof window > `u` || window.navigator == null) return !1;
	let t = window.navigator.userAgentData?.brands;
	return Array.isArray(t) && t.some((t) => e.test(t.brand)) || e.test(window.navigator.userAgent);
}
function Be(e) {
	return typeof window < `u` && window.navigator != null && e.test(window.navigator.userAgentData?.platform || window.navigator.platform);
}
function F(e) {
	let t = null;
	return () => (t ??= e(), t);
}
var I = F(function() {
	return Be(/^Mac/i);
}), Ve = F(function() {
	return Be(/^iPhone/i);
}), He = F(function() {
	return Be(/^iPad/i) || I() && navigator.maxTouchPoints > 1;
}), L = F(function() {
	return Ve() || He();
}), Ue = F(function() {
	return I() || L();
}), We = F(function() {
	return ze(/AppleWebKit/i) && (L() || !Ge());
}), Ge = F(function() {
	return ze(/Chrome|CriOS|CrMo/i);
}), R = F(function() {
	return ze(/Android/i);
});
function Ke(e) {
	return e.pointerType === `` && e.isTrusted ? !0 : R() && e.pointerType ? e.type === `click` && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function qe(e) {
	return !R() && e.width === 0 && e.height === 0 || R() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === `mouse`;
}
var Je = (0, r.createContext)({
	isNative: !0,
	open: $e,
	useHref: (e) => e
});
function Ye(e) {
	let { children: t, navigate: n, useHref: i } = e, a = (0, r.useMemo)(() => ({
		isNative: !1,
		open: (e, t, r, i) => {
			Qe(e, (e) => {
				Ze(e, t) ? n(r, i) : z(e, t);
			});
		},
		useHref: i || ((e) => e)
	}), [n, i]);
	return r.createElement(Je.Provider, { value: a }, t);
}
function Xe() {
	return (0, r.useContext)(Je);
}
function Ze(e, t) {
	let n = e.getAttribute(`target`);
	return (!n || n === `_self`) && e.origin === location.origin && !e.hasAttribute(`download`) && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey;
}
function z(e, t, n = !0) {
	let { metaKey: r, ctrlKey: i, altKey: a, shiftKey: o } = t, s = We() && I() && !He() ? new KeyboardEvent(`keydown`, {
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
	z.isOpening = n, P(e), e.dispatchEvent(s), z.isOpening = !1;
}
z.isOpening = !1;
function Qe(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute(`data-href`)) {
		let n = document.createElement(`a`);
		n.href = e.getAttribute(`data-href`), e.hasAttribute(`data-target`) && (n.target = e.getAttribute(`data-target`)), e.hasAttribute(`data-rel`) && (n.rel = e.getAttribute(`data-rel`)), e.hasAttribute(`data-download`) && (n.download = e.getAttribute(`data-download`)), e.hasAttribute(`data-ping`) && (n.ping = e.getAttribute(`data-ping`)), e.hasAttribute(`data-referrer-policy`) && (n.referrerPolicy = e.getAttribute(`data-referrer-policy`)), e.appendChild(n), t(n), e.removeChild(n);
	}
}
function $e(e, t) {
	Qe(e, (e) => z(e, t));
}
function et(e) {
	let t = Xe().useHref(e.href ?? ``);
	return {
		"data-href": e.href ? t : void 0,
		"data-target": e.target,
		"data-rel": e.rel,
		"data-download": e.download,
		"data-ping": e.ping,
		"data-referrer-policy": e.referrerPolicy
	};
}
function tt(e) {
	let t = Xe().useHref(e?.href ?? ``), n = {};
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
function nt(e, t, n, r) {
	!t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && Ze(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r));
}
var B = null, V = `keyboard`, H = new Set(), U = new Map(), W = !1, rt = !1, it = {
	Tab: !0,
	Escape: !0
};
function at(e, t) {
	for (let n of H) n(e, t);
}
function ot(e) {
	return !(e.metaKey || !I() && e.altKey || e.ctrlKey || e.key === `Control` || e.key === `Shift` || e.key === `Meta`);
}
function st(e) {
	W = !0, !z.isOpening && ot(e) && (B = `keyboard`, V = `keyboard`, at(`keyboard`, e));
}
function G(e) {
	B = `pointer`, V = `pointerType` in e ? e.pointerType : `mouse`, (e.type === `mousedown` || e.type === `pointerdown`) && (W = !0, at(`pointer`, e));
}
function ct(e) {
	!z.isOpening && Ke(e) && (W = !0, B = `virtual`, V = `virtual`);
}
function lt(e) {
	if (Le) return;
	let t = N(e), n = k(t), r = O(t);
	t === n ? rt = !0 : t !== r && e.isTrusted && (!W && !rt && (B = `virtual`, V = `virtual`, at(`virtual`, e)), W = !1, rt = !1);
}
function ut() {
	Le || (W = !1, rt = !0);
}
function dt(e) {
	let t = M(O(N(e)));
	queueMicrotask(() => {
		M(O(N(e))) !== t && _t(`keyboard`);
	});
}
function ft(e) {
	if (typeof window > `u` || typeof document > `u`) return;
	let t = k(e), n = O(e);
	if (U.get(t)) return;
	let r = t.HTMLElement.prototype.focus;
	Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: function() {
			W = !0, r.apply(this, arguments);
		}
	}), n.addEventListener(`keydown`, st, !0), n.addEventListener(`keyup`, st, !0), n.addEventListener(`click`, ct, !0), n.addEventListener(`invalid`, dt, !0), t.addEventListener(`focus`, lt, !0), t.addEventListener(`blur`, ut, !1), typeof PointerEvent < `u` && (n.addEventListener(`pointerdown`, G, !0), n.addEventListener(`pointermove`, G, !0), n.addEventListener(`pointerup`, G, !0)), t.addEventListener(`beforeunload`, () => {
		pt(e);
	}, { once: !0 }), U.set(t, { focus: r });
}
var pt = (e, t) => {
	let n = k(e), r = O(e);
	t && r.removeEventListener(`DOMContentLoaded`, t), U.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
		configurable: !0,
		writable: !0,
		value: U.get(n).focus
	}), r.removeEventListener(`keydown`, st, !0), r.removeEventListener(`keyup`, st, !0), r.removeEventListener(`click`, ct, !0), r.removeEventListener(`invalid`, dt, !0), n.removeEventListener(`focus`, lt, !0), n.removeEventListener(`blur`, ut, !1), typeof PointerEvent < `u` && (r.removeEventListener(`pointerdown`, G, !0), r.removeEventListener(`pointermove`, G, !0), r.removeEventListener(`pointerup`, G, !0)), U.delete(n));
};
function mt(e) {
	let t = O(e), n;
	return t.readyState === `loading` ? (n = () => {
		ft(e);
	}, t.addEventListener(`DOMContentLoaded`, n)) : ft(e), () => pt(e, n);
}
typeof document < `u` && mt();
function ht() {
	return B !== `pointer`;
}
function gt() {
	return B;
}
function _t(e) {
	B = e, V = e === `pointer` ? `mouse` : e, at(e, null);
}
function vt() {
	return V;
}
function yt() {
	ft();
	let [e, t] = (0, r.useState)(B);
	return (0, r.useEffect)(() => {
		let e = () => {
			t(B);
		};
		return H.add(e), () => {
			H.delete(e);
		};
	}, []), _() ? null : e;
}
var bt = new Set([
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
function xt(e, t, n) {
	let r = n ? N(n) : void 0, i = O(r), a = k(r), o = a === void 0 ? HTMLInputElement : a.HTMLInputElement, s = a === void 0 ? HTMLTextAreaElement : a.HTMLTextAreaElement, c = a === void 0 ? HTMLElement : a.HTMLElement, l = a === void 0 ? KeyboardEvent : a.KeyboardEvent, u = M(i);
	return e = e || u instanceof o && !bt.has(u.type) || u instanceof s || u instanceof c && u.isContentEditable, !(e && t === `keyboard` && n instanceof l && !it[n.key]);
}
function St(e, t, n) {
	ft(), (0, r.useEffect)(() => {
		if (n?.enabled === !1) return;
		let t = (t, r) => {
			xt(!!n?.isTextInput, t, r) && e(ht());
		};
		return H.add(t), () => {
			H.delete(t);
		};
	}, t);
}
function Ct(e, t) {
	let n = k(t), r = O(t);
	if (r == null || n == null) return;
	let i, a = `meta[name="${CSS.escape(e)}"], meta[property="${CSS.escape(e)}"]`, o = r.querySelector(a);
	return o && o instanceof n.HTMLMetaElement && (e === `csp-nonce` && o.nonce && (i ??= o.nonce || void 0), o.content && (i ??= o.content || void 0)), e === `csp-nonce` && (i ??= n.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), i;
}
var wt = r.useInsertionEffect ?? a;
function Tt(e) {
	let t = (0, r.useRef)(null);
	return wt(() => {
		t.current = e;
	}, [e]), (0, r.useCallback)((...e) => {
		let n = t.current;
		return n?.(...e);
	}, []);
}
function Et(e, t) {
	let { id: n, "aria-label": r, "aria-labelledby": i } = e;
	return n = C(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(` `) : i &&= i.trim().split(/\s+/).join(` `), !r && !i && t && (r = t), {
		id: n,
		"aria-label": r,
		"aria-labelledby": i
	};
}
var Dt = new Set([
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
]), Ot = new Set([
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
function kt(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == `function` ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === `rtl`;
		if (t.script) return Dt.has(t.script);
	}
	let t = e.split(`-`)[0];
	return Ot.has(t);
}
var At = Symbol.for(`react-aria.i18n.locale`);
function jt() {
	let e = typeof window < `u` && window[At] || typeof navigator < `u` && (navigator.language || navigator.userLanguage) || `en-US`;
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = `en-US`;
	}
	return {
		locale: e,
		direction: kt(e) ? `rtl` : `ltr`
	};
}
var Mt = jt(), K = new Set();
function Nt() {
	Mt = jt();
	for (let e of K) e(Mt);
}
function Pt() {
	let e = _(), [t, n] = (0, r.useState)(Mt);
	return (0, r.useEffect)(() => (K.size === 0 && window.addEventListener(`languagechange`, Nt), K.add(n), () => {
		K.delete(n), K.size === 0 && window.removeEventListener(`languagechange`, Nt);
	}), []), e ? {
		locale: typeof window < `u` && window[At] || `en-US`,
		direction: `ltr`
	} : t;
}
var Ft = r.createContext(null);
function It() {
	let e = Pt();
	return (0, r.useContext)(Ft) || e;
}
var q = new Map(), Lt = new Set();
function Rt(e) {
	return `propertyName` in e;
}
function zt(e) {
	let t = N(e);
	if (!Rt(e) || !t) return;
	let n = q.get(t);
	n || (n = new Set(), q.set(t, n), t.addEventListener(`transitioncancel`, Bt, { once: !0 })), n.add(e.propertyName);
}
function Bt(e) {
	let t = N(e);
	if (!Rt(e) || !t) return;
	let n = q.get(t);
	if (n && (n.delete(e.propertyName), n.size === 0 && (t.removeEventListener(`transitioncancel`, Bt), q.delete(t)), q.size === 0)) for (let e of Lt) e(!0), Lt.delete(e);
}
function Vt() {
	ye(document, `transitionrun`, zt), ye(document, `transitionend`, Bt);
}
function Ht() {
	for (let [e] of q) `isConnected` in e && !e.isConnected && q.delete(e);
}
typeof document < `u` && (document.readyState === `loading` ? ye(document, `DOMContentLoaded`, Vt) : Vt());
function Ut(e) {
	let t = window.requestAnimationFrame(() => {
		if (Ht(), q.size === 0) return e(!1);
		Lt.add(e);
	});
	return () => {
		window.cancelAnimationFrame(t), Lt.delete(e);
	};
}
function Wt(e) {
	if (!e.isConnected) return;
	let t = O(e);
	if (gt() === `virtual`) {
		let n = M(t);
		Ut(() => {
			let r = M(t);
			(r === n || r === t.body) && e.isConnected && P(e);
		});
	} else P(e);
}
function Gt(e) {
	let { isDisabled: t, onFocus: n, onBlur: i, onFocusChange: a } = e, o = (0, r.useCallback)((e) => {
		if (N(e) === e.currentTarget) return i && i(e), a && a(!1), !0;
	}, [i, a]), s = Ie(o), c = (0, r.useCallback)((e) => {
		let t = N(e), r = O(t), i = r ? M(r) : M();
		t === e.currentTarget && t === i && (n && n(e), a && a(!0), s(e));
	}, [
		a,
		n,
		s
	]);
	return { focusProps: {
		onFocus: !t && (n || a || i) ? c : void 0,
		onBlur: !t && (i || a) ? o : void 0
	} };
}
function Kt(e) {
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
var qt = new Set([
	`shift`,
	`alt`,
	`control`,
	`meta`,
	`mod`
]), Jt = [
	`Alt`,
	`Control`,
	`Meta`,
	`Shift`
];
function Yt(e) {
	let t = new Set();
	return e.alt && t.add(`Alt`), e.shift && t.add(`Shift`), e.ctrl && t.add(`Control`), e.meta && t.add(`Meta`), e.mod && t.add(I() ? `Meta` : `Control`), t;
}
function Xt(e) {
	let t = new Set();
	return e.altKey && t.add(`Alt`), e.ctrlKey && t.add(`Control`), e.metaKey && t.add(`Meta`), e.shiftKey && t.add(`Shift`), t;
}
function Zt(e) {
	return Jt.filter((t) => e.has(t));
}
function Qt(e) {
	let t = e.split(`+`).reduce((e, t) => {
		let n = t.toLowerCase();
		return qt.has(n) ? n === `shift` ? e.shift = !0 : n === `alt` ? e.alt = !0 : n === `control` ? e.ctrl = !0 : n === `meta` ? e.meta = !0 : n === `mod` && (e.mod = !0) : e.key = t, e;
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
function $t(e) {
	return e.toLowerCase();
}
var en = {
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
function tn(e) {
	let t = $t(e);
	return en[t] ?? t;
}
function nn(e) {
	let t = Zt(Yt(e)), n = tn(e.key);
	return t.length > 0 ? `${t.join(`+`)}+${n}` : n;
}
function rn(e) {
	let t = Zt(Xt(e)), n = $t(e.key);
	return (t.length > 0 ? `${t.join(`+`)}+` : ``) + n;
}
function an(e) {
	let t = new Map();
	for (let [n, r] of Object.entries(e)) {
		let e = Qt(n);
		t.set(nn(e), r);
	}
	return (e) => {
		let n = rn(e), r = t.get(n), i = r?.(e);
		i === void 0 && r !== void 0 ? i = {
			shouldContinuePropagation: !1,
			shouldPreventDefault: !0
		} : typeof i == `boolean` && (i = {
			shouldContinuePropagation: !i,
			shouldPreventDefault: i
		}), i?.shouldPreventDefault && e.preventDefault(), (!r || i?.shouldContinuePropagation) && e.continuePropagation();
	};
}
function on(e) {
	let { shortcuts: t, allowRepeats: n = !1, allowComposing: r = !1 } = e, a, o;
	if (t) {
		let s = an(t), c = Kt((e) => {
			j(e.currentTarget, N(e)) ? e.nativeEvent?.repeat && !n || e.nativeEvent?.isComposing && !r ? e.continuePropagation() : s(e) : e.continuePropagation();
		}), l = Kt((e) => {
			j(e.currentTarget, N(e)) && (e.nativeEvent?.repeat && !n || e.nativeEvent?.isComposing), e.continuePropagation();
		});
		a = e.onKeyDown ? i(e.onKeyDown, c) : c, o = e.onKeyUp ? i(e.onKeyUp, l) : l;
	} else a = Kt(e.onKeyDown), o = Kt(e.onKeyUp);
	return { keyboardProps: e.isDisabled ? {} : {
		onKeyDown: a,
		onKeyUp: o
	} };
}
function sn(e, t) {
	a(() => {
		if (e && e.ref && t) return e.ref.current = t.current, () => {
			e.ref && (e.ref.current = null);
		};
	});
}
var cn = r.createContext(null);
function ln(e) {
	let t = (0, r.useContext)(cn) || {};
	sn(t, e);
	let { ref: n, ...i } = t;
	return i;
}
var un = r.forwardRef(function(e, t) {
	let { children: n, ...i } = e, a = re(t), o = {
		...i,
		ref: a
	};
	return r.createElement(cn.Provider, { value: o }, n);
});
function dn(e, t) {
	let { focusProps: n } = Gt(e), { keyboardProps: i } = on(e), a = D(n, i), o = ln(t), s = e.isDisabled ? {} : o, c = (0, r.useRef)(e.autoFocus);
	(0, r.useEffect)(() => {
		c.current && t.current && Wt(t.current), c.current = !1;
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
var fn = (0, r.createContext)(!1);
function pn(e) {
	if ((0, r.useContext)(fn)) return r.createElement(r.Fragment, null, e.children);
	let t = r.createElement(fn.Provider, { value: !0 }, e.children);
	return r.createElement(`template`, null, t);
}
function mn(e) {
	let t = (t, n) => (0, r.useContext)(fn) ? null : e(t, n);
	return t.displayName = e.displayName || e.name, (0, r.forwardRef)(t);
}
function hn() {
	return (0, r.useContext)(fn);
}
var gn = new Set([`id`]), _n = new Set([
	`aria-label`,
	`aria-labelledby`,
	`aria-describedby`,
	`aria-details`
]), vn = new Set([
	`href`,
	`hrefLang`,
	`target`,
	`rel`,
	`download`,
	`ping`,
	`referrerPolicy`
]), yn = new Set([
	`dir`,
	`lang`,
	`hidden`,
	`inert`,
	`translate`,
	`suppressHydrationWarning`
]), bn = new Set(`onClick.onAuxClick.onContextMenu.onDoubleClick.onMouseDown.onMouseEnter.onMouseLeave.onMouseMove.onMouseOut.onMouseOver.onMouseUp.onTouchCancel.onTouchEnd.onTouchMove.onTouchStart.onPointerDown.onPointerMove.onPointerUp.onPointerCancel.onPointerEnter.onPointerLeave.onPointerOver.onPointerOut.onGotPointerCapture.onLostPointerCapture.onScroll.onWheel.onAnimationStart.onAnimationEnd.onAnimationIteration.onTransitionCancel.onTransitionEnd.onTransitionRun.onTransitionStart`.split(`.`)), xn = /^(data-.*)$/;
function J(e, t = {}) {
	let { labelable: n, isLink: r, global: i, events: a = i, propNames: o } = t, s = {};
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (gn.has(t) || n && _n.has(t) || r && vn.has(t) || i && yn.has(t) || a && (bn.has(t) || t.endsWith(`Capture`) && bn.has(t.slice(0, -7))) || o?.has(t) || xn.test(t)) && (s[t] = e[t]);
	return s;
}
var Y = `default`, Sn = ``, Cn = new WeakMap();
function wn(e) {
	if (L() && We()) {
		if (Y === "default") {
			let t = O(e);
			Sn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = `none`;
		}
		Y = `disabled`;
	} else if (e instanceof HTMLElement || e instanceof SVGElement) {
		let t = `userSelect` in e.style ? `userSelect` : `webkitUserSelect`;
		Cn.set(e, e.style[t]), e.style[t] = `none`;
	}
}
function Tn(e) {
	if (L() && We()) {
		if (Y !== `disabled`) return;
		Y = `restoring`, setTimeout(() => {
			Ut(() => {
				if (Y === `restoring`) {
					let t = O(e);
					t.documentElement.style.webkitUserSelect === `none` && (t.documentElement.style.webkitUserSelect = Sn || ``), Sn = ``, Y = `default`;
				}
			});
		}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Cn.has(e)) {
		let t = Cn.get(e), n = `userSelect` in e.style ? `userSelect` : `webkitUserSelect`;
		e.style[n] === `none` && (e.style[n] = t), e.getAttribute(`style`) === `` && e.removeAttribute(`style`), Cn.delete(e);
	}
}
var En = new WeakMap();
function Dn(e) {
	let t = O(e), n = En.get(t);
	return n ??= Ct(`csp-nonce`, t), n !== void 0 && En.set(t, n), n;
}
var On = r.createContext({ register: () => {} });
On.displayName = `PressResponderContext`;
function kn() {
	let e = (0, r.useRef)(new Map()), t = (0, r.useCallback)((t, n, r, i) => {
		let a = i?.once ? (...t) => {
			e.current.delete(r), r(...t);
		} : r;
		e.current.set(r, {
			type: n,
			eventTarget: t,
			fn: a,
			options: i
		}), t.addEventListener(n, a, i);
	}, []), n = (0, r.useCallback)((t, n, r, i) => {
		let a = e.current.get(r)?.fn || r;
		t.removeEventListener(n, a, i), e.current.delete(r);
	}, []), i = (0, r.useCallback)(() => {
		e.current.forEach((e, t) => {
			n(e.eventTarget, e.type, t, e.options);
		});
	}, [n]);
	return (0, r.useEffect)(() => i, [i]), {
		addGlobalListener: t,
		removeGlobalListener: n,
		removeAllGlobalListeners: i
	};
}
n();
function An(e) {
	let t = (0, r.useContext)(On);
	if (t) {
		let { register: n, ref: r, ...i } = t;
		e = D(i, e), n();
	}
	return sn(t, e.ref), e;
}
var jn = class {
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
}, Mn = Symbol(`linkClicked`), Nn = `react-aria-pressable-style`, Pn = `data-react-aria-pressable`;
function Fn(e) {
	let { onPress: t, onPressChange: n, onPressStart: a, onPressEnd: o, onPressUp: s, onClick: c, isDisabled: l, isPressed: u, preventFocusOnPress: d, shouldCancelOnPointerExit: f, allowTextSelectionOnPress: p, ref: m, ...h } = An(e), [g, _] = (0, r.useState)(!1), v = (0, r.useRef)({
		isPressed: !1,
		ignoreEmulatedMouseEvents: !1,
		didFirePressStart: !1,
		isTriggeringEvent: !1,
		activePointerId: null,
		target: null,
		isOverTarget: !1,
		pointerType: null,
		disposables: []
	}), { addGlobalListener: y, removeAllGlobalListeners: b } = kn(), x = (0, r.useCallback)((e, t) => {
		let r = v.current;
		if (l || r.didFirePressStart) return !1;
		let i = !0;
		if (r.isTriggeringEvent = !0, a) {
			let n = new jn(`pressstart`, t, e);
			a(n), i = n.shouldStopPropagation;
		}
		return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, _(!0), i;
	}, [
		l,
		a,
		n
	]), S = (0, r.useCallback)((e, r, i = !0) => {
		let a = v.current;
		if (!a.didFirePressStart) return !1;
		a.didFirePressStart = !1, a.isTriggeringEvent = !0;
		let s = !0;
		if (o) {
			let t = new jn(`pressend`, r, e);
			o(t), s = t.shouldStopPropagation;
		}
		if (n && n(!1), _(!1), t && i && !l) {
			let n = new jn(`press`, r, e);
			t(n), s &&= n.shouldStopPropagation;
		}
		return a.isTriggeringEvent = !1, s;
	}, [
		l,
		o,
		n,
		t
	]), C = Tt(S), w = Tt((0, r.useCallback)((e, t) => {
		let n = v.current;
		if (l) return !1;
		if (s) {
			n.isTriggeringEvent = !0;
			let r = new jn(`pressup`, t, e);
			return s(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
		}
		return !0;
	}, [l, s])), ee = (0, r.useCallback)((e) => {
		let t = v.current;
		if (t.isPressed && t.target) {
			t.didFirePressStart && t.pointerType != null && S(X(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), p || Tn(t.target);
			for (let e of t.disposables) e();
			t.disposables = [];
		}
	}, [
		p,
		b,
		S
	]), T = Tt(ee);
	(0, r.useEffect)(() => {
		l && v.current.isPressed && T({
			currentTarget: v.current.target,
			shiftKey: !1,
			ctrlKey: !1,
			metaKey: !1,
			altKey: !1
		});
	}, [l]);
	let te = (0, r.useCallback)((e) => {
		f && ee(e);
	}, [f, ee]), E = (0, r.useCallback)((e) => {
		l || c?.(e);
	}, [l, c]), ne = (0, r.useCallback)((e, t) => {
		if (!l && c) {
			let n = new MouseEvent(`click`, e);
			Fe(n, t), c(Pe(n));
		}
	}, [l, c]), re = (0, r.useMemo)(() => {
		let e = v.current, t = {
			onKeyDown(t) {
				if (Ln(t.nativeEvent, t.currentTarget) && j(t.currentTarget, N(t))) {
					zn(N(t), t.key) && t.preventDefault();
					let r = !0;
					!e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, e.pointerType = `keyboard`, r = x(t, `keyboard`));
					let a = t.currentTarget;
					y(O(t.currentTarget), `keyup`, i((t) => {
						Ln(t, a) && !t.repeat && j(a, N(t)) && e.target && w(X(e.target, t), `keyboard`);
					}, n), !0), r && t.stopPropagation(), t.metaKey && I() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
				} else t.key === `Meta` && (e.metaKeyEvents = new Map());
			},
			onClick(t) {
				if ((!t || j(t.currentTarget, N(t))) && t && t.button === 0 && !e.isTriggeringEvent && !z.isOpening) {
					let n = !0;
					if (l && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && (e.pointerType === `virtual` || Ke(t.nativeEvent))) {
						let e = x(t, `virtual`), r = w(t, `virtual`), i = C(t, `virtual`);
						E(t), n = e && r && i;
					} else if (e.isPressed && e.pointerType !== `keyboard`) {
						let r = e.pointerType || t.nativeEvent.pointerType || `virtual`, i = w(X(t.currentTarget, t), r), a = C(X(t.currentTarget, t), r, !0);
						n = i && a, e.isOverTarget = !1, E(t), T(t);
					}
					e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
				}
			}
		}, n = (t) => {
			if (e.isPressed && e.target && Ln(t, e.target)) {
				zn(N(t), t.key) && t.preventDefault();
				let n = N(t), r = j(e.target, n);
				C(X(e.target, t), `keyboard`, r), r && ne(t, e.target), b(), t.key !== `Enter` && In(e.target) && j(e.target, n) && !t[Mn] && (t[Mn] = !0, z(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
			} else if (t.key === `Meta` && e.metaKeyEvents?.size) {
				let t = e.metaKeyEvents;
				e.metaKeyEvents = void 0;
				for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent(`keyup`, n));
			}
		};
		if (typeof PointerEvent < `u`) {
			t.onPointerDown = (t) => {
				if (t.button !== 0 || !j(t.currentTarget, N(t))) return;
				if (qe(t.nativeEvent)) {
					e.pointerType = `virtual`;
					return;
				}
				e.pointerType = t.pointerType;
				let i = !0;
				if (!e.isPressed) {
					e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, p || wn(e.target), i = x(t, e.pointerType);
					let a = N(t);
					`releasePointerCapture` in a && (`hasPointerCapture` in a ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId) : a.releasePointerCapture(t.pointerId)), y(O(t.currentTarget), `pointerup`, n, !1), y(O(t.currentTarget), `pointercancel`, r, !1);
				}
				i && t.stopPropagation();
			}, t.onMouseDown = (t) => {
				if (j(t.currentTarget, N(t)) && t.button === 0) {
					if (d) {
						let n = Re(t.target);
						n && e.disposables.push(n);
					}
					t.stopPropagation();
				}
			}, t.onPointerUp = (t) => {
				j(t.currentTarget, N(t)) && e.pointerType !== `virtual` && t.button === 0 && !e.isPressed && w(t, e.pointerType || t.pointerType);
			}, t.onPointerEnter = (t) => {
				t.pointerId === e.activePointerId && e.target && !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, x(X(e.target, t), e.pointerType));
			}, t.onPointerLeave = (t) => {
				t.pointerId === e.activePointerId && e.target && e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, C(X(e.target, t), e.pointerType, !1), te(t));
			};
			let n = (t) => {
				if (t.pointerId === e.activePointerId && e.isPressed && t.button === 0 && e.target) {
					if (j(e.target, N(t)) && e.pointerType != null) {
						let n = !1, r = setTimeout(() => {
							e.isPressed && e.target instanceof HTMLElement && (n ? T(t) : (P(e.target), e.target.click()));
						}, 80);
						y(t.currentTarget, `click`, () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
					} else T(t);
					e.isOverTarget = !1;
				}
			}, r = (e) => {
				T(e);
			};
			t.onDragStart = (e) => {
				j(e.currentTarget, N(e)) && T(e);
			};
		}
		return t;
	}, [
		y,
		l,
		d,
		b,
		p,
		te,
		x,
		E,
		ne
	]);
	return (0, r.useEffect)(() => {
		if (!m) return;
		let e = O(m.current);
		if (!e || !e.head || e.getElementById(Nn)) return;
		let t = e.createElement(`style`);
		t.id = Nn;
		let n = Dn(e);
		n && (t.nonce = n), t.textContent = `
@layer {
  [${Pn}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
	}, [m]), (0, r.useEffect)(() => {
		let e = v.current;
		return () => {
			p || Tn(e.target ?? void 0);
			for (let t of e.disposables) t();
			e.disposables = [];
		};
	}, [p]), {
		isPressed: u || g,
		pressProps: D(h, re, { [Pn]: !0 })
	};
}
function In(e) {
	return e.tagName === `A` && e.hasAttribute(`href`);
}
function Ln(e, t) {
	let { key: n, code: r } = e, i = t, a = i.getAttribute(`role`);
	return (n === `Enter` || n === ` ` || n === `Spacebar` || r === `Space`) && !(i instanceof k(i).HTMLInputElement && !Vn(i, n) || i instanceof k(i).HTMLTextAreaElement || i.isContentEditable) && !((a === `link` || !a && In(i)) && n !== `Enter`);
}
function X(e, t) {
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
function Rn(e) {
	return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== `submit` && e.type !== `reset` : !In(e);
}
function zn(e, t) {
	return I() && t === `Enter` ? !1 : e instanceof HTMLInputElement ? t === `Enter` && (e.type === `checkbox` || e.type === `radio`) ? !1 : !Vn(e, t) : Rn(e);
}
var Bn = new Set([
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
function Vn(e, t) {
	return e.type === `checkbox` || e.type === `radio` ? t === ` ` : Bn.has(e.type);
}
function Hn(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: i, onFocusWithinChange: a } = e, o = (0, r.useRef)({ isFocusWithin: !1 }), { addGlobalListener: s, removeAllGlobalListeners: c } = kn(), l = (0, r.useCallback)((e) => {
		j(e.currentTarget, N(e)) && o.current.isFocusWithin && !j(e.currentTarget, e.relatedTarget) && (o.current.isFocusWithin = !1, c(), n && n(e), a && a(!1));
	}, [
		n,
		a,
		o,
		c
	]), u = Ie(l), d = (0, r.useCallback)((e) => {
		if (!j(e.currentTarget, N(e))) return;
		let t = N(e), n = O(t), r = M(n);
		if (!o.current.isFocusWithin && r === t) {
			i && i(e), a && a(!0), o.current.isFocusWithin = !0, u(e);
			let t = e.currentTarget;
			s(n, `focus`, (e) => {
				let r = N(e);
				if (o.current.isFocusWithin && !j(t, r)) {
					let e = new n.defaultView.FocusEvent(`blur`, { relatedTarget: r });
					Fe(e, t);
					let i = Pe(e);
					l(i);
				}
			}, { capture: !0 });
		}
	}, [
		i,
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
function Un(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: i } = e, a = (0, r.useRef)({
		isFocused: !1,
		isFocusVisible: t || ht()
	}), [o, s] = (0, r.useState)(!1), [c, l] = (0, r.useState)(() => a.current.isFocused && a.current.isFocusVisible), u = (0, r.useCallback)(() => l(a.current.isFocused && a.current.isFocusVisible), []), d = (0, r.useCallback)((e) => {
		a.current.isFocused = e, a.current.isFocusVisible = ht(), s(e), u();
	}, [u]);
	St((e) => {
		a.current.isFocusVisible = e, u();
	}, [n, o], {
		enabled: o,
		isTextInput: n
	});
	let { focusProps: f } = Gt({
		isDisabled: i,
		onFocusChange: d
	}), { focusWithinProps: p } = Hn({
		isDisabled: !i,
		onFocusWithinChange: d
	});
	return {
		isFocused: o,
		isFocusVisible: c,
		focusProps: i ? p : f
	};
}
var Wn = !1, Z = 0;
function Gn() {
	Wn = !0, setTimeout(() => {
		Wn = !1;
	}, 500);
}
function Kn(e) {
	e.pointerType === `touch` && Gn();
}
function qn() {
	let e = O(null);
	if (e !== void 0) return Z === 0 && typeof PointerEvent < `u` && e.addEventListener(`pointerup`, Kn), Z++, () => {
		Z--, Z > 0 || typeof PointerEvent < `u` && e.removeEventListener(`pointerup`, Kn);
	};
}
function Jn(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: i, isDisabled: a } = e, [o, s] = (0, r.useState)(!1), c = (0, r.useRef)({
		isHovered: !1,
		ignoreEmulatedMouseEvents: !1,
		pointerType: ``,
		target: null
	}).current;
	(0, r.useEffect)(qn, []);
	let { addGlobalListener: l, removeAllGlobalListeners: u } = kn(), { hoverProps: d, triggerHoverEnd: f } = (0, r.useMemo)(() => {
		let e = (e, i) => {
			if (c.pointerType = i, a || i === `touch` || c.isHovered || !j(e.currentTarget, N(e))) return;
			c.isHovered = !0;
			let o = e.currentTarget;
			c.target = o, l(O(N(e)), `pointerover`, (e) => {
				c.isHovered && c.target && !j(c.target, N(e)) && r(e, e.pointerType);
			}, { capture: !0 }), t && t({
				type: `hoverstart`,
				target: o,
				pointerType: i
			}), n && n(!0), s(!0);
		}, r = (e, t) => {
			let r = c.target;
			c.pointerType = ``, c.target = null, t !== `touch` && c.isHovered && r && (c.isHovered = !1, u(), i && i({
				type: `hoverend`,
				target: r,
				pointerType: t
			}), n && n(!1), s(!1));
		}, o = {};
		return typeof PointerEvent < `u` && (o.onPointerEnter = (t) => {
			Wn && t.pointerType === `mouse` || e(t, t.pointerType);
		}, o.onPointerLeave = (e) => {
			!a && j(e.currentTarget, N(e)) && r(e, e.pointerType);
		}), {
			hoverProps: o,
			triggerHoverEnd: r
		};
	}, [
		t,
		n,
		i,
		a,
		c,
		l,
		u
	]);
	return (0, r.useEffect)(() => {
		a && f({ currentTarget: c.target }, c.pointerType);
	}, [a]), {
		hoverProps: d,
		isHovered: o
	};
}
var Yn = (0, r.createContext)({}), Xn = mn(function(e, t) {
	[e, t] = le(e, t, Yn);
	let { elementType: n = `label`, ...i } = e, a = me[n];
	return r.createElement(a, {
		className: `react-aria-Label`,
		...i,
		ref: t
	});
});
function Zn(e) {
	let { id: t, label: n, "aria-labelledby": r, "aria-label": i, labelElementType: a = `label` } = e;
	t = C(t);
	let o = C(), s = {};
	n && (r = r ? `${o} ${r}` : o, s = {
		id: o,
		htmlFor: a === `label` ? t : void 0
	});
	let c = Et({
		id: t,
		"aria-label": i,
		"aria-labelledby": r
	});
	return {
		labelProps: s,
		fieldProps: c
	};
}
var Qn = new Map(), $n = !1;
try {
	$n = new Intl.NumberFormat(`de-DE`, { signDisplay: `exceptZero` }).resolvedOptions().signDisplay === `exceptZero`;
} catch {}
var er = class {
	constructor(e, t = {}) {
		this.numberFormatter = tr(e, t), this.options = t;
	}
	format(e) {
		let t = ``;
		return t = !$n && this.options.signDisplay != null ? nr(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), t;
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
		return !$n && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), e;
	}
};
function tr(e, t = {}) {
	let { numberingSystem: n } = t;
	n && e.includes(`-nu-`) && (e.includes(`-u-`) || (e += `-u-`), e += `-nu-${n}`);
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ``);
	if (Qn.has(r)) return Qn.get(r);
	let i = new Intl.NumberFormat(e, t);
	return Qn.set(r, i), i;
}
function nr(e, t, n) {
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
function rr(e = {}) {
	let { locale: t } = It();
	return (0, r.useMemo)(() => new er(t, e), [t, e]);
}
function ir(e, t = -1 / 0, n = 1 / 0) {
	return Math.min(Math.max(e, t), n);
}
function ar(e, t) {
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
function or(e, t, n, r) {
	t = Number(t), n = Number(n);
	let i = (e - (isNaN(t) ? 0 : t)) % r, a = ar(Math.abs(i) * 2 >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
	return isNaN(t) ? !isNaN(n) && a > n && (a = Math.floor(ar(n / r, r)) * r) : a < t ? a = t : !isNaN(n) && a > n && (a = t + Math.floor(ar((n - t) / r, r)) * r), a = ar(a, r), a;
}
function sr(e, t, n = 10) {
	let r = n ** +t;
	return Math.round(e * r) / r;
}
function cr(e) {
	let { value: t = 0, minValue: n = 0, maxValue: r = 100, valueLabel: i, isIndeterminate: a, formatOptions: o = { style: `percent` } } = e, s = J(e, { labelable: !0 }), { labelProps: c, fieldProps: l } = Zn({
		...e,
		labelElementType: `span`
	});
	t = ir(t, n, r);
	let u = r - n, d = u === 0 ? 0 : (t - n) / u, f = rr(o);
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
var lr = (0, r.createContext)(null), ur = (0, r.forwardRef)(function(e, t) {
	[e, t] = le(e, t, lr);
	let { value: n = 0, minValue: i = 0, maxValue: a = 100, isIndeterminate: o = !1 } = e;
	n = ir(n, i, a);
	let [s, c] = ue(!e[`aria-label`] && !e[`aria-labelledby`]), { progressBarProps: l, labelProps: u } = cr({
		...e,
		label: c
	}), d = a - i, f;
	o || (f = d === 0 ? 0 : (n - i) / d * 100);
	let p = oe({
		...e,
		defaultClassName: `react-aria-ProgressBar`,
		values: {
			percentage: f,
			valueText: l[`aria-valuetext`],
			isIndeterminate: o
		}
	}), m = J(e, { global: !0 });
	return r.createElement(me.div, {
		...D(m, p, l),
		ref: t,
		slot: e.slot || void 0
	}, r.createElement(Yn.Provider, { value: {
		...u,
		ref: s,
		elementType: `span`
	} }, p.children));
}), dr = 7e3, Q = null;
function fr(e, t = `assertive`, n = dr) {
	Q ? Q.announce(e, t, n) : (Q = new mr(), (typeof IS_REACT_ACT_ENVIRONMENT == `boolean` ? IS_REACT_ACT_ENVIRONMENT : typeof jest < `u`) ? Q.announce(e, t, n) : setTimeout(() => {
		Q?.isAttached() && Q?.announce(e, t, n);
	}, 100));
}
function pr(e) {
	Q && Q.clear(e);
}
var mr = class {
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
	announce(e, t = `assertive`, n = dr) {
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
function hr(e, t) {
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
	let { pressProps: _, isPressed: v } = Fn({
		onPressStart: a,
		onPressEnd: o,
		onPressChange: c,
		onPress: i,
		onPressUp: s,
		onClick: d,
		isDisabled: r,
		preventFocusOnPress: l,
		ref: t
	}), { focusableProps: y } = dn(e, t);
	u && (y.tabIndex = r ? -1 : y.tabIndex);
	let b = D(y, _, J(e, { labelable: !0 }));
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
var gr = (0, r.createContext)({}), _r = mn(function(e, t) {
	[e, t] = le(e, t, gr);
	let n = e, { isPending: i } = n, { buttonProps: a, isPressed: o } = hr(e, t);
	a = yr(a, i);
	let { focusProps: s, isFocused: c, isFocusVisible: l } = Un(e), { hoverProps: u, isHovered: d } = Jn({
		...e,
		isDisabled: e.isDisabled || i
	}), f = {
		isHovered: d,
		isPressed: (n.isPressed || o) && !i,
		isFocused: c,
		isFocusVisible: l,
		isDisabled: e.isDisabled || !1,
		isPending: i ?? !1
	}, p = oe({
		...e,
		values: f,
		defaultClassName: `react-aria-Button`
	}), m = C(a.id), h = C(), g = a[`aria-labelledby`];
	i && (g ? g = `${g} ${h}` : a[`aria-label`] && (g = `${m} ${h}`));
	let _ = (0, r.useRef)(i);
	(0, r.useEffect)(() => {
		let e = { "aria-labelledby": g || m };
		(!_.current && c && i || _.current && c && !i) && fr(e, `assertive`), _.current = i;
	}, [
		i,
		c,
		g,
		m
	]);
	let v = J(e, { global: !0 });
	return delete v.onClick, r.createElement(me.button, {
		...D(v, p, a, s, u),
		type: a.type === `submit` && i ? `button` : a.type,
		id: m,
		ref: t,
		"aria-labelledby": g,
		slot: e.slot || void 0,
		"aria-disabled": i ? `true` : a[`aria-disabled`],
		"data-disabled": e.isDisabled || void 0,
		"data-pressed": f.isPressed || void 0,
		"data-hovered": d || void 0,
		"data-focused": c || void 0,
		"data-pending": i || void 0,
		"data-focus-visible": l || void 0
	}, r.createElement(lr.Provider, { value: { id: h } }, p.children));
}), vr = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function yr(e, t) {
	if (t) {
		for (let t in e) t.startsWith(`on`) && !vr.test(t) && (e[t] = void 0);
		e.href = void 0, e.target = void 0;
	}
	return e;
}
var br = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function xr(e, t, n = []) {
	if (t == null) throw Error(`[lucide]: iconNode is required when icon name is used`);
	return {
		name: br(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
var Sr = (e) => {
	let t = ``, n = !1;
	for (let r of e) r === `-` || r === `_` || r <= ` ` ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
	return t;
}, Cr = (e) => {
	let t = Sr(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, wr = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(), $ = {
	xmlns: `http://www.w3.org/2000/svg`,
	width: 24,
	height: 24,
	viewBox: `0 0 24 24`,
	fill: `none`,
	stroke: `currentColor`,
	"stroke-width": 2,
	"stroke-linecap": `round`,
	"stroke-linejoin": `round`
};
function Tr(e) {
	return e != null;
}
function Er(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? $.width, a = e.size ?? e.height ?? $.height, o = e.aliases?.filter((e) => typeof e == `string` && e.trim() !== ``).map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(` `).filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? wr(...c) : wr(`lucide`, ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? $[`stroke-width`]) * Number(e.size ?? e.width ?? $.width) / Number(t.size ?? t.width ?? $.width) : t.strokeWidth ?? $[`stroke-width`];
	return [
		`svg`,
		{
			...Object.entries($).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			...`color` in t && t.color && { [r(`stroke`)]: t.color },
			...`size` in t && Tr(t.size) && {
				[r(`width`)]: t.size,
				[r(`height`)]: t.size
			},
			...`width` in t && Tr(t.width) && { [r(`width`)]: t.width },
			...`height` in t && Tr(t.height) && { [r(`height`)]: t.height },
			[r(`stroke-width`)]: u,
			...l && { [r(`class`)]: l },
			[r(`viewBox`)]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {},
			...`attributes` in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r(`vector-effect`)]: `non-scaling-stroke`,
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
function Dr(e, t = {}) {
	return Er(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: `className`,
			"stroke-width": `strokeWidth`,
			"stroke-linecap": `strokeLinecap`,
			"stroke-linejoin": `strokeLinejoin`,
			"vector-effect": `vectorEffect`
		}
	});
}
var Or = (e) => {
	for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
	return !1;
}, kr = (0, r.createContext)({}), Ar = () => (0, r.useContext)(kr), jr = (0, r.forwardRef)(({ color: e, size: t, width: n, height: i, strokeWidth: a, absoluteStrokeWidth: o, nonScalingStroke: s, className: c = ``, children: l, iconNode: u = [], icon: d = {
	node: u,
	aliases: [],
	size: 24
}, ...f }, p) => {
	let { size: m = 24, strokeWidth: h = 2, absoluteStrokeWidth: g = !1, nonScalingStroke: _ = !1, color: v = `currentColor`, className: y = `` } = Ar() ?? {}, b = !!l || Or(f), [x, S, C = []] = Dr(d, {
		color: e ?? v,
		width: n ?? t ?? m,
		height: i ?? t ?? m,
		strokeWidth: a ?? h,
		absoluteStrokeWidth: o ?? g,
		nonScalingStroke: s ?? _,
		className: wr(y, c),
		hasA11yProp: b,
		attributes: f
	});
	return (0, r.createElement)(x, {
		ref: p,
		...S
	}, [...C.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(l) ? l : [l]]);
});
function Mr(e, t = [], n = []) {
	let i = typeof e == `string` ? xr(e, t, n) : e, a = (0, r.forwardRef)(({ className: e, ...t }, n) => (0, r.createElement)(jr, {
		ref: n,
		icon: i,
		className: e,
		...t
	}));
	return i.name && (a.displayName = Cr(i.name)), a;
}
export { qe as $, un as A, me as At, Ct as B, i as Bt, Dn as C, ye as Ct, mn as D, ue as Dt, J as E, oe as Et, Gt as F, T as Ft, ht as G, _t as H, Wt as I, ee as It, Ye as J, St as K, It as L, C as Lt, cn as M, ce as Mt, sn as N, re as Nt, pn as O, se as Ot, on as P, D as Pt, et as Q, Et as R, _ as Rt, On as S, k as St, Tn as T, le as Tt, vt as U, gt as V, yt as W, z as X, tt as Y, Xe as Z, Jn as _, N as _t, fr as a, I as at, Fn as b, ve as bt, cr as c, L as ct, or as d, De as dt, Ke as et, rr as f, P as ft, Xn as g, Se as gt, Yn as h, M as ht, hr as i, He as it, dn as j, de as jt, hn as k, ie as kt, ir as l, je as lt, Zn as m, Ce as mt, gr as n, Ge as nt, pr as o, R as ot, er as p, j as pt, nt as q, _r as r, We as rt, ur as s, Ue as st, Mr as t, Ve as tt, sr as u, Me as ut, Un as v, A as vt, wn as w, ae as wt, kn as x, O as xt, Hn as y, be as yt, Tt as z, a as zt };
