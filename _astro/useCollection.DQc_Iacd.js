import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { $ as r, $t as i, At as a, Ct as o, Et as s, I as c, L as l, Lt as u, Nt as d, Ot as f, Q as p, Rt as m, X as h, Xt as g, ft as _, jt as v, kt as y, nn as ee, pt as te, rt as b, tn as x, wt as S, xt as ne, yt as C } from "./useOverflow.Dq483xd0.js";
import { c as w, d as T, i as E, l as re, u as D } from "./Autocomplete.CGc8yklO.js";
import { t as O } from "./useEvent.BluGm8w8.js";
import { t as k } from "./useControlledState.DijOhE0s.js";
import { a as A } from "./CollectionBuilder.OeX_9-Zv.js";
import { r as j } from "./FocusScope.aBBixRPA.js";
var M = e(t(), 1), N = (0, M.createContext)(null), P = {
	CollectionRoot({ collection: e, renderDropIndicator: t }) {
		return F(e, null, t);
	},
	CollectionBranch({ collection: e, parent: t, renderDropIndicator: n }) {
		return F(e, t, n);
	}
};
function F(e, t, n) {
	return A({
		items: t ? e.getChildren(t.key) : e,
		dependencies: [n],
		children(t) {
			if (t.type === `content`) return M.createElement(M.Fragment, null);
			let r = t.render(t);
			return !n || t.type !== `item` ? r : M.createElement(M.Fragment, null, n({
				type: `item`,
				key: t.key,
				dropPosition: `before`
			}), r, I(e, t, n));
		}
	});
}
function I(e, t, n) {
	let r = t.key, i = e.getKeyAfter(r), a = i == null ? null : e.getItem(i);
	for (; a != null && a.type !== `item`;) i = e.getKeyAfter(a.key), a = i == null ? null : e.getItem(i);
	let o = t.nextKey == null ? null : e.getItem(t.nextKey);
	for (; o != null && o.type !== `item`;) o = o.nextKey == null ? null : e.getItem(o.nextKey);
	let s = [];
	if (o == null) {
		let r = t;
		for (; r?.type === `item` && (!a || r.parentKey !== a.parentKey && a.level < r.level);) {
			let t = n({
				type: `item`,
				key: r.key,
				dropPosition: `after`
			});
			(0, M.isValidElement)(t) && s.push((0, M.cloneElement)(t, { key: `${r.key}-after` })), r = r.parentKey == null ? null : e.getItem(r.parentKey);
		}
	}
	return s;
}
var L = (0, M.createContext)(P);
function R(e) {
	return (0, M.useMemo)(() => e == null ? null : new Set([e]), [e]);
}
function z(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== `hidden` && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
function B(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (z(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
function V(e, t, n = {}) {
	e !== t && ie(e, t, t.getBoundingClientRect(), n);
}
function ie(e, t, n, r = {}) {
	let { block: i = `nearest`, inline: a = `nearest` } = r, o = e.scrollTop, s = e.scrollLeft, c = e.getBoundingClientRect(), l = window.getComputedStyle(t), u = window.getComputedStyle(e), d = document.scrollingElement || document.documentElement, f = e === d, p = e === d ? 0 : c.top, m = e === d ? e.clientHeight : c.bottom, h = e === d ? 0 : c.left, g = e === d ? e.clientWidth : c.right, _ = parseFloat(l.scrollMarginTop) || 0, v = parseFloat(l.scrollMarginBottom) || 0, y = parseFloat(l.scrollMarginLeft) || 0, ee = parseFloat(l.scrollMarginRight) || 0, te = parseFloat(u.scrollPaddingTop) || 0, b = parseFloat(u.scrollPaddingBottom) || 0, x = parseFloat(u.scrollPaddingLeft) || 0, ne = parseFloat(u.scrollPaddingRight) || 0, w = parseFloat(u.borderTopWidth) || 0, T = parseFloat(u.borderBottomWidth) || 0, E = parseFloat(u.borderLeftWidth) || 0, re = parseFloat(u.borderRightWidth) || 0, D = n.top - _, O = n.bottom + v, k = n.left - y, A = n.right + ee, j = e === d ? 0 : E + re, M = e === d ? 0 : w + T, N = e === d ? 0 : e.offsetWidth - e.clientWidth - j, P = e === d ? 0 : e.offsetHeight - e.clientHeight - M, F = p + (f ? 0 : w) + te, I = m - (f ? 0 : T) - b - P, L = h + (f ? 0 : E) + x, R = g - (f ? 0 : re) - ne;
	S() && C() || u.direction === `ltr` ? R -= N : u.direction === `rtl` && (L += N);
	let z = D < F || O > I, B = k < L || A > R;
	if (z && i === `start`) o += D - F;
	else if (z && i === `center`) o += (D + O) / 2 - (F + I) / 2;
	else if (z && i === `end`) o += O - I;
	else if (z && i === `nearest`) {
		let e = D - F, t = O - I;
		o += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (B && a === `start`) s += k - L;
	else if (B && a === `center`) s += (k + A) / 2 - (L + R) / 2;
	else if (B && a === `end`) s += A - R;
	else if (B && a === `nearest`) {
		let e = k - L, t = A - R;
		s += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	e.scrollTo({
		left: s,
		top: o
	});
}
function ae(e, t = {}) {
	let { containingElement: n } = t;
	if (e && e.isConnected) {
		let t = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(t).overflow !== `hidden`) {
			let { left: t, top: r } = e.getBoundingClientRect();
			e?.scrollIntoView?.({ block: `nearest` });
			let { left: i, top: a } = e.getBoundingClientRect();
			(Math.abs(t - i) > 1 || Math.abs(r - a) > 1) && (n?.scrollIntoView?.({
				block: `center`,
				inline: `center`
			}), e.scrollIntoView?.({ block: `nearest` }));
		} else {
			let { left: t, top: r } = e.getBoundingClientRect(), i = B(e, !0);
			for (let t of i) V(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? B(n, !0) : [];
				for (let e of i) V(e, n, {
					block: `center`,
					inline: `center`
				});
				for (let t of B(e, !0)) V(t, e);
			}
		}
	}
}
var oe = e(n(), 1), se = 0, H = new Map();
function U(e) {
	let [t, n] = (0, M.useState)();
	return x(() => {
		if (!e) return;
		let t = H.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${se++}`;
			n(r);
			let i = document.createElement(`div`);
			i.id = r, i.style.display = `none`, i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, H.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), H.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
function ce(e) {
	return o() ? e.altKey : e.ctrlKey;
}
function W(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var G = new WeakMap();
function le(e) {
	let t = i();
	return G.set(e, t), t;
}
function ue(e) {
	return G.get(e);
}
var de = 1e3;
function fe(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, i = (0, M.useRef)({
		search: ``,
		timeout: void 0
	});
	return (0, M.useEffect)(() => {
		let e = i.current.timeout;
		return () => {
			clearTimeout(e);
		};
	}, [i]), { typeSelectProps: {
		onKeyDownCapture: t.getKeyForSearch ? (e) => {
			if (i.current.search.length > 0 && e.key === ` `) {
				if (e.preventDefault(), (!(`continuePropagation` in e) || `continuePropagation` in e && !e.isPropagationStopped()) && e.stopPropagation(), i.current.search += ` `, t.getKeyForSearch != null) {
					let e = t.getKeyForSearch(i.current.search, n.focusedKey);
					e ??= t.getKeyForSearch(i.current.search), e != null && (n.setFocusedKey(e), r && r(e));
				}
				clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
					i.current.search = ``;
				}, de);
			}
		} : void 0,
		onKeyDown: t.getKeyForSearch ? (e) => {
			let a = K(e.key);
			if (!(!a || e.ctrlKey || e.metaKey || e.altKey || !y(e.currentTarget, d(e)) || i.current.search.length === 0 && a === ` `)) {
				if (i.current.search += a, t.getKeyForSearch != null) {
					let a = t.getKeyForSearch(i.current.search, n.focusedKey);
					if (a ??= t.getKeyForSearch(i.current.search), a != null) n.setFocusedKey(a), r && r(a), e.preventDefault(), `continuePropagation` in e || e.stopPropagation();
					else {
						i.current.search = ``, clearTimeout(i.current.timeout), i.current.timeout = void 0;
						return;
					}
				}
				clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
					i.current.search = ``;
				}, de);
			}
		} : void 0
	} };
}
function K(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : ``;
}
function pe(e, t) {
	let n = (0, M.useRef)(!0), r = (0, M.useRef)(null);
	x(() => (n.current = !0, () => {
		n.current = !1;
	}), []), x(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
function me(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: i, autoFocus: o = !1, shouldFocusWrap: c = !1, disallowEmptySelection: l = !1, disallowSelectAll: u = !1, escapeKeyBehavior: m = `clearSelection`, selectOnFocus: _ = t.selectionBehavior === `replace`, disallowTypeAhead: ee = !1, shouldUseVirtualFocus: x, allowsTabNavigation: S = !1, scrollRef: C = i, linkBehavior: k = `action`, UNSTABLE_focusOnEntry: A } = e, { direction: N } = r(), P = te(), F = (e, n, r) => {
		if (n != null) {
			if (t.isLink(n) && k === `selection` && _ && !ce(e)) {
				(0, oe.flushSync)(() => {
					t.setFocusedKey(n, r);
				});
				let a = W(i, n), o = t.getItemProps(n);
				if (a) {
					P.open(a, e, o.href, o.routerOptions);
					return;
				}
				return !1;
			}
			if (t.setFocusedKey(n, r), t.isLink(n) && k === `override`) return !1;
			if (e.shiftKey && t.selectionMode === `multiple`) {
				t.extendSelection(n);
				return;
			}
			if (_ && !ce(e)) {
				t.replaceSelection(n);
				return;
			}
		}
		return !1;
	}, I = (e) => {
		if (n.getKeyBelow) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
			if (r == null && c && (r = n.getFirstKey?.(t.focusedKey)), r != null) {
				F(e, r);
				return;
			}
		}
		return !1;
	}, L = (e) => {
		if (n.getKeyAbove) {
			let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
			if (r == null && c && (r = n.getLastKey?.(t.focusedKey)), r != null) {
				F(e, r);
				return;
			}
		}
		return !1;
	}, R = (e) => {
		if (n.getFirstKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let r = n.getFirstKey(t.focusedKey, E(e));
			if (t.setFocusedKey(r), r != null) {
				if (E(e) && e.shiftKey && t.selectionMode === `multiple`) {
					t.extendSelection(r);
					return;
				}
				if (_) {
					t.replaceSelection(r);
					return;
				}
			}
		}
		return !1;
	}, z = (e) => {
		if (n.getKeyLeftOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
			if (r == null && c && (r = N === `rtl` ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null) {
				F(e, r, N === `rtl` ? `first` : `last`);
				return;
			}
		}
		return !1;
	}, B = (e) => {
		if (n.getKeyRightOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
			if (r == null && c && (r = N === `rtl` ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null) {
				F(e, r, N === `rtl` ? `last` : `first`);
				return;
			}
		}
		return !1;
	}, ie = (e) => {
		if (n.getLastKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let r = n.getLastKey(t.focusedKey, E(e));
			if (t.setFocusedKey(r), r != null) {
				if (E(e) && e.shiftKey && t.selectionMode === `multiple`) {
					t.extendSelection(r);
					return;
				}
				if (_) {
					t.replaceSelection(r);
					return;
				}
			}
		}
		return !1;
	}, se = (e) => {
		if (n.getKeyPageBelow && t.focusedKey != null) {
			let r = n.getKeyPageBelow(t.focusedKey);
			if (r != null) return F(e, r);
		}
		return !1;
	}, H = (e) => {
		if (n.getKeyPageAbove && t.focusedKey != null) {
			let r = n.getKeyPageAbove(t.focusedKey);
			if (r != null) return F(e, r);
		}
		return !1;
	}, U = () => {
		if (t.selectionMode === `multiple` && u !== !0) t.selectAll();
		else return !1;
	}, G = () => {
		if (m === `clearSelection` && !l && t.selectedKeys.size !== 0) t.clearSelection();
		else return !1;
	}, ue = () => {
		if (!S && i.current) {
			let e = j(i.current, { tabbable: !0 }), t, n;
			do
				n = e.lastChild(), n && (t = n);
			while (n);
			let r = v();
			t && (!a(t) || r && !s(r)) && f(t);
		}
		return {
			shouldContinuePropagation: !0,
			shouldPreventDefault: !1
		};
	}, de = () => (!S && i.current && i.current.focus(), {
		shouldContinuePropagation: !0,
		shouldPreventDefault: !1
	}), K = (e, t) => ({
		[ne() ? e + `+Shift+Alt` : e + `+Shift+Control`]: t,
		[e + `+Shift`]: t,
		[ne() ? e + `+Alt` : e + `+Control`]: t,
		[e]: t
	}), { keyboardProps: me } = h({
		shortcuts: {
			...K(`ArrowDown`, I),
			...K(`ArrowUp`, L),
			...K(`ArrowLeft`, z),
			...K(`ArrowRight`, B),
			...K(`PageDown`, se),
			...K(`PageUp`, H)
		},
		allowRepeats: !0
	}), { keyboardProps: he } = h({ shortcuts: {
		...K(`Home`, R),
		...K(`End`, ie),
		"Mod+A": U,
		Escape: G,
		Tab: ue,
		"Tab+Shift": de
	} }), q = (0, M.useRef)({
		top: 0,
		left: 0
	});
	O(C, `scroll`, () => {
		q.current = {
			top: C.current?.scrollTop ?? 0,
			left: C.current?.scrollLeft ?? 0
		};
	});
	let ge = (e) => {
		if (t.isFocused) {
			y(e.currentTarget, d(e)) || t.setFocused(!1);
			return;
		}
		if (!y(e.currentTarget, d(e))) return;
		let r = b();
		t.setFocused(!0);
		let o = (e) => {
			e != null && (t.setFocusedKey(e), _ && !t.isSelected(e) && t.replaceSelection(e));
		};
		if (A && (r === `keyboard` || r === `virtual`)) o(A === `first` ? n.getFirstKey?.() : n.getLastKey?.());
		else if (t.focusedKey == null) {
			let r = e.relatedTarget;
			r && e.currentTarget.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING ? o(t.lastSelectedKey ?? n.getLastKey?.()) : o(t.firstSelectedKey ?? n.getFirstKey?.());
		} else C.current && (C.current.scrollTop = q.current.top, C.current.scrollLeft = q.current.left);
		if (t.focusedKey != null && C.current) {
			let e = W(i, t.focusedKey);
			e instanceof HTMLElement && (!a(e) && !x && f(e), (r === `keyboard` || A && r === `virtual`) && ae(e, { containingElement: i.current }));
		}
	}, _e = (e) => {
		y(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, J = (0, M.useRef)(!1);
	O(i, T, x ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === `first` && (J.current = !0);
	} : void 0);
	let Y = n.getFirstKey?.() ?? null;
	pe(() => {
		if (J.current) {
			if (Y == null) {
				let e = v();
				re(i.current), w(e, null), t.collection.size > 0 && (J.current = !1);
			} else t.setFocusedKey(Y), J.current = !1;
		}
	}, [Y, t.collection.size]), pe(() => {
		t.collection.size > 0 && (J.current = !1);
	}, [t.focusedKey]), O(i, D, x ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let ve = (0, M.useRef)(o), X = (0, M.useRef)(!1);
	(0, M.useEffect)(() => {
		if (ve.current) {
			let e = null;
			o === `first` && (e = n.getFirstKey?.() ?? null), o === `last` && (e = n.getLastKey?.() ?? null);
			let r = t.selectedKeys;
			if (r.size) {
				for (let n of r) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e != null && _ && !r.size && t.canSelectItem(e) && t.replaceSelection(e), e == null && !x && i.current && p(i.current), t.collection.size > 0 && (ve.current = !1, X.current = !0);
		}
	});
	let ye = (0, M.useRef)(t.focusedKey), Z = (0, M.useRef)(null);
	(0, M.useEffect)(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== ye.current || X.current) && C.current && i.current) {
			let e = b(), n = W(i, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === `keyboard` || X.current) && (Z.current && cancelAnimationFrame(Z.current), Z.current = requestAnimationFrame(() => {
				C.current && (V(C.current, n), e !== `virtual` && ae(n, { containingElement: i.current }));
			}));
		}
		!x && t.isFocused && t.focusedKey == null && ye.current != null && i.current && p(i.current), ye.current = t.focusedKey, X.current = !1;
	}), (0, M.useEffect)(() => () => {
		Z.current && cancelAnimationFrame(Z.current);
	}, []), O(i, `react-aria-focus-scope-restore`, (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let Q = {
		...g(he, me),
		onFocus: ge,
		onBlur: _e,
		onMouseDown(e) {
			C.current === d(e) && e.preventDefault();
		}
	}, { typeSelectProps: be } = fe({
		keyboardDelegate: n,
		selectionManager: t
	});
	ee || (Q = g(be, Q));
	let $;
	x || ($ = t.focusedKey == null ? 0 : -1);
	let xe = le(t.collection);
	return { collectionProps: g(Q, {
		tabIndex: $,
		"data-collection": xe
	}) };
}
var he = 500;
function q(e) {
	let { isDisabled: t, pointerType: n, onLongPressStart: r, onLongPressEnd: i, onLongPress: a, threshold: o = he, accessibilityDescription: s } = e, d = (0, M.useRef)(void 0), { addGlobalListener: p, removeAllGlobalListeners: h } = l(), _ = (e) => n ? e.pointerType === n : e.pointerType === `mouse` || e.pointerType === `touch`, { pressProps: v } = c({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), _(e)) {
				r && r({
					...e,
					type: `longpressstart`
				}), d.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent(`pointercancel`, { bubbles: !0 })), p(e.target, `click`, (e) => e.preventDefault(), { once: !0 }), u(e.target).activeElement !== e.target && f(e.target), a && a({
						...e,
						type: `longpress`
					}), d.current = void 0;
				}, o), e.pointerType === `touch` && p(e.target, `contextmenu`, (e) => e.preventDefault(), { once: !0 });
				let t = m(e.target);
				p(t, `pointerup`, () => {
					setTimeout(() => {
						h();
					}, 100);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			d.current && clearTimeout(d.current), i && _(e) && i({
				...e,
				type: `longpressend`
			});
		}
	}), y = U(a && !t ? s : void 0);
	return { longPressProps: g(v, y) };
}
function ge(e) {
	let { id: t, selectionManager: n, key: r, ref: a, shouldSelectOnPressUp: o, shouldUseVirtualFocus: l, focus: u, isDisabled: f, onAction: m, allowsDifferentPressOrigin: h, linkBehavior: y = `action` } = e, b = te();
	t = i(t);
	let x = (e) => {
		if (e.pointerType === `keyboard` && ce(e)) n.toggleSelection(r);
		else {
			if (n.selectionMode === `none`) return;
			if (n.isLink(r)) {
				if (y === `selection` && a.current) {
					let t = n.getItemProps(r);
					b.open(a.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				}
				if (y === `override` || y === `none`) return;
			}
			n.selectionMode === `single` ? n.isSelected(r) && !n.disallowEmptySelection ? n.toggleSelection(r) : n.replaceSelection(r) : e && e.shiftKey ? n.extendSelection(r) : n.selectionBehavior === `toggle` || e && (E(e) || e.pointerType === `touch` || e.pointerType === `virtual`) ? n.toggleSelection(r) : n.replaceSelection(r);
		}
	};
	(0, M.useEffect)(() => {
		r === n.focusedKey && n.isFocused && (l ? re(a.current) : u ? u() : v() !== a.current && a.current && p(a.current));
	}, [
		a,
		r,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		l
	]), f ||= n.isDisabled(r);
	let S = {};
	!l && !f ? S = {
		tabIndex: r === n.focusedKey ? 0 : -1,
		onFocus(e) {
			d(e) === a.current && n.setFocusedKey(r);
		}
	} : f && (S.onMouseDown = (e) => {
		e.preventDefault();
	}), (0, M.useEffect)(() => {
		f && n.focusedKey === r && n.setFocusedKey(null);
	}, [
		n,
		f,
		r
	]);
	let ne = n.isLink(r) && y === `override`, C = m && e.UNSTABLE_itemBehavior === `action`, w = n.isLink(r) && y !== `selection` && y !== `none`, T = !f && n.canSelectItem(r) && !ne && !C, D = (m || w) && !f, O = D && (n.selectionBehavior === `replace` ? !T : !T || n.isEmpty), k = D && T && n.selectionBehavior === `replace`, A = O || k, j = (0, M.useRef)(null), N = A && T, P = (0, M.useRef)(!1), F = (0, M.useRef)(!1), I = n.getItemProps(r), L = (e) => {
		m && (m(), a.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`, { bubbles: !0 }))), w && a.current && b.open(a.current, e, I.href, I.routerOptions);
	}, R = { ref: a };
	o ? (R.onPressStart = (e) => {
		j.current = e.pointerType, P.current = N, e.pointerType === `keyboard` && (!A || J(e.key)) && x(e);
	}, h ? (R.onPressUp = O ? void 0 : (e) => {
		e.pointerType === `mouse` && T && x(e);
	}, R.onPress = O ? L : (e) => {
		e.pointerType !== `keyboard` && e.pointerType !== `mouse` && T && x(e);
	}) : R.onPress = (e) => {
		if (O || k && e.pointerType !== `mouse`) {
			if (e.pointerType === `keyboard` && !_e(e.key)) return;
			L(e);
		} else e.pointerType !== `keyboard` && T && x(e);
	}) : (R.onPressStart = (e) => {
		j.current = e.pointerType, P.current = N, F.current = O, T && (e.pointerType === `mouse` && !O || e.pointerType === `keyboard` && (!D || J(e.key))) && x(e);
	}, R.onPress = (e) => {
		(e.pointerType === `touch` || e.pointerType === `pen` || e.pointerType === `virtual` || e.pointerType === `keyboard` && A && _e(e.key) || e.pointerType === `mouse` && F.current) && (A ? L(e) : T && x(e));
	});
	let z = ue(n.collection);
	if (S[`data-collection`] = z, S[`data-key`] = r, R.preventFocusOnPress = l, l && (R = g(R, {
		onPressStart(e) {
			e.pointerType !== `touch` && (n.setFocused(!0), n.setFocusedKey(r));
		},
		onPress(e) {
			e.pointerType === `touch` && (n.setFocused(!0), n.setFocusedKey(r));
		}
	})), I) for (let e of [
		`onPressStart`,
		`onPressEnd`,
		`onPressChange`,
		`onPress`,
		`onPressUp`,
		`onClick`
	]) I[e] && (R[e] = ee(R[e], I[e]));
	let { pressProps: B, isPressed: V } = c(R), ie = k ? (e) => {
		j.current === `mouse` && (e.stopPropagation(), e.preventDefault(), L(e));
	} : void 0, { longPressProps: ae } = q({
		isDisabled: !N,
		onLongPress(e) {
			e.pointerType === `touch` && (x(e), n.setSelectionBehavior(`toggle`));
		}
	}), oe = (e) => {
		j.current === `touch` && P.current && e.preventDefault();
	}, se = y !== `none` && n.isLink(r) ? (e) => {
		_.isOpening || e.preventDefault();
	} : void 0, H = g(S, T || O || l && !f ? B : {}, N ? ae : {}, {
		onDoubleClick: ie,
		onDragStartCapture: oe,
		onClick: se,
		id: t
	}, l ? { onMouseDown: (e) => e.preventDefault() } : void 0), U = (e) => {
		let t = e;
		for (; t && t !== a.current;) {
			let e = t.getAttribute(`data-collection`);
			if (e != null) return e !== z;
			t = t.parentElement;
		}
		return s(e);
	}, W = H.onPointerDown;
	H.onPointerDown = (e) => {
		let t = d(e);
		t && t !== a.current && U(t) ? e.stopPropagation() : W?.(e);
	};
	let G = H.onMouseDown;
	return H.onMouseDown = (e) => {
		let t = d(e);
		t && t !== a.current && U(t) ? e.stopPropagation() : G?.(e);
	}, {
		itemProps: H,
		isPressed: V,
		isSelected: n.isSelected(r),
		isFocused: n.isFocused && n.focusedKey === r,
		isDisabled: f,
		allowsSelection: T,
		hasAction: A
	};
}
function _e(e) {
	return e === `Enter`;
}
function J(e) {
	return e === ` `;
}
function Y(e, t) {
	return typeof t.getChildren == `function` ? t.getChildren(e.key) : e.childNodes;
}
function ve(e) {
	return X(e, 0);
}
function X(e, t) {
	if (t < 0) return;
	let n = 0;
	for (let r of e) {
		if (n === t) return r;
		n++;
	}
}
function ye(e) {
	let t;
	for (let n of e) t = n;
	return t;
}
function Z(e, t, n) {
	if (t.parentKey === n.parentKey) return t.index - n.index;
	let r = [...Q(e, t), t], i = [...Q(e, n), n], a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
	return a === -1 ? r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1) : (t = r[a], n = i[a], t.index - n.index);
}
function Q(e, t) {
	let n = [], r = t;
	for (; r?.parentKey != null;) r = e.getItem(r.parentKey), r && n.unshift(r);
	return n;
}
function be(e) {
	let t = M.version.split(`.`);
	return parseInt(t[0], 10) >= 19 ? e : e ? `true` : void 0;
}
var $ = class e extends Set {
	constructor(t, n, r) {
		super(t), t instanceof e ? (this.anchorKey = n ?? t.anchorKey, this.currentKey = r ?? t.currentKey) : (this.anchorKey = n ?? null, this.currentKey = r ?? null);
	}
};
function xe(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Se(e) {
	let { selectionMode: t = `none`, disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: r, selectionBehavior: i = `toggle`, disabledBehavior: a = `all` } = e, o = (0, M.useRef)(!1), [, s] = (0, M.useState)(!1), c = (0, M.useRef)(null), l = (0, M.useRef)(null), [, u] = (0, M.useState)(null), d = (0, M.useMemo)(() => Ce(e.selectedKeys), [e.selectedKeys]), f = (0, M.useMemo)(() => Ce(e.defaultSelectedKeys, new $()), [e.defaultSelectedKeys]), [p, m] = k(d, f, e.onSelectionChange), h = (0, M.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), [g, _] = (0, M.useState)(i);
	i === `replace` && g === `toggle` && typeof p == `object` && p.size === 0 && _(`replace`);
	let v = (0, M.useRef)(i);
	return (0, M.useEffect)(() => {
		i !== v.current && (_(i), v.current = i);
	}, [i]), {
		selectionMode: t,
		disallowEmptySelection: n,
		selectionBehavior: g,
		setSelectionBehavior: _,
		get isFocused() {
			return o.current;
		},
		setFocused(e) {
			o.current = e, s(e);
		},
		get focusedKey() {
			return c.current;
		},
		get childFocusStrategy() {
			return l.current;
		},
		setFocusedKey(e, t = `first`) {
			c.current = e, l.current = t, u(e);
		},
		selectedKeys: p,
		setSelectedKeys(e) {
			(r || !xe(e, p)) && m(e);
		},
		disabledKeys: h,
		disabledBehavior: a
	};
}
function Ce(e, t) {
	return e ? e === `all` ? `all` : new $(e) : t;
}
var we = class e {
	constructor(e, t, n) {
		this.collection = e, this.state = t, this.allowsCellSelection = n?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = n?.layoutDelegate || null, this.fullCollection = n?.fullCollection || null;
	}
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(e) {
		this.state.setSelectionBehavior(e);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(e) {
		this.state.setFocused(e);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(e, t) {
		(e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
	}
	get selectedKeys() {
		return this.state.selectedKeys === `all` ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(e) {
		if (this.state.selectionMode === `none`) return !1;
		let t = this.getKey(e);
		return t == null ? !1 : this.state.selectedKeys === `all` ? this.canSelectItem(t) : this.state.selectedKeys.has(t);
	}
	get isEmpty() {
		return this.state.selectedKeys !== `all` && this.state.selectedKeys.size === 0;
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === `all`) return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		let e = this.getSelectAllKeys(), t = this.state.selectedKeys;
		return this._isSelectAll = e.every((e) => t.has(e)), this._isSelectAll;
	}
	get firstSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && Z(this.collection, n, e) < 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get lastSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && Z(this.collection, n, e) > 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(e) {
		if (this.selectionMode === `none`) return;
		if (this.selectionMode === `single`) {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n;
		if (this.state.selectedKeys === `all`) n = new $([t], t, t);
		else {
			let e = this.state.selectedKeys, r = e.anchorKey ?? t;
			n = new $(e, r, t);
			for (let i of this.getKeyRange(r, e.currentKey ?? t)) n.delete(i);
			for (let e of this.getKeyRange(t, r)) this.canSelectItem(e) && n.add(e);
		}
		this.state.setSelectedKeys(n);
	}
	getKeyRange(e, t) {
		let n = this.collection.getItem(e), r = this.collection.getItem(t);
		return n && r ? Z(this.collection, n, r) <= 0 ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
	}
	getKeyRangeInternal(e, t) {
		if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
		let n = [], r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e && (e.type === `item` || e.type === `cell` && this.allowsCellSelection) && n.push(r), r === t) return n;
			r = this.collection.getKeyAfter(r);
		}
		return [];
	}
	getKey(e) {
		let t = this.collection.getItem(e);
		if (!t || t.type === `cell` && this.allowsCellSelection) return e;
		for (; t && t.type !== `item` && t.parentKey != null;) t = this.collection.getItem(t.parentKey);
		return !t || t.type !== `item` ? null : t.key;
	}
	toggleSelection(e) {
		if (this.selectionMode === `none`) return;
		if (this.selectionMode === `single` && !this.isSelected(e)) {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n = new $(this.state.selectedKeys === `all` ? this.getSelectAllKeys() : this.state.selectedKeys);
		n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), this.disallowEmptySelection && n.size === 0 || this.state.setSelectedKeys(n);
	}
	replaceSelection(e) {
		if (this.selectionMode === `none`) return;
		let t = this.getKey(e);
		if (t == null) return;
		let n = this.canSelectItem(t) ? new $([t], t, t) : new $();
		this.state.setSelectedKeys(n);
	}
	setSelectedKeys(e) {
		if (this.selectionMode === `none`) return;
		let t = new $();
		for (let n of e) {
			let e = this.getKey(n);
			if (e != null && (t.add(e), this.selectionMode === `single`)) break;
		}
		this.state.setSelectedKeys(t);
	}
	getSelectAllKeys() {
		let e = this.fullCollection ?? this.collection, t = [], n = (r) => {
			for (; r != null;) {
				if (this.canSelectItemIn(r, e)) {
					let i = e.getItem(r);
					i?.type === `item` && t.push(r), i?.hasChildNodes && (this.allowsCellSelection || i.type !== `item`) && n(ve(Y(i, e))?.key ?? null);
				}
				r = e.getKeyAfter(r);
			}
		};
		return n(e.getFirstKey()), t;
	}
	selectAll() {
		!this.isSelectAll && this.selectionMode === `multiple` && this.state.setSelectedKeys(`all`);
	}
	clearSelection() {
		!this.disallowEmptySelection && (this.state.selectedKeys === `all` || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new $());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(e, t) {
		this.selectionMode !== `none` && (this.selectionMode === `single` ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === `toggle` || t && (t.pointerType === `touch` || t.pointerType === `virtual`) ? this.toggleSelection(e) : this.replaceSelection(e));
	}
	isSelectionEqual(e) {
		if (e === this.state.selectedKeys) return !0;
		let t = this.selectedKeys;
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	canSelectItem(e) {
		return this.canSelectItemIn(e, this.collection);
	}
	canSelectItemIn(e, t) {
		if (this.state.selectionMode === `none` || this.state.disabledKeys.has(e)) return !1;
		let n = t.getItem(e);
		return !(!n || n?.props?.isDisabled || n.type === `cell` && !this.allowsCellSelection);
	}
	isDisabled(e) {
		let t = this.collection.getItem(e);
		return this.state.disabledBehavior === `all` && (this.state.disabledKeys.has(e) || !!t?.props?.isDisabled) && t?.props?.disabledBehavior !== `selection`;
	}
	isLink(e) {
		return !!this.collection.getItem(e)?.props?.href;
	}
	getItemProps(e) {
		return this.collection.getItem(e)?.props;
	}
	withCollection(t) {
		return new e(t, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0,
			fullCollection: this.fullCollection ?? this.collection
		});
	}
}, Te = class {
	build(e, t) {
		return this.context = t, Ee(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		let { children: t, items: n } = e;
		if (M.isValidElement(t) && t.type === M.Fragment) yield* this.iterateCollection({
			children: t.props.children,
			items: n
		});
		else if (typeof t == `function`) {
			if (!n) throw Error(`props.children was a function but props.items is missing`);
			let e = 0;
			for (let r of n) yield* this.getFullNode({
				value: r,
				index: e
			}, { renderer: t }), e++;
		} else {
			let e = [];
			M.Children.forEach(t, (t) => {
				t && e.push(t);
			});
			let n = 0;
			for (let t of e) {
				let e = this.getFullNode({
					element: t,
					index: n
				}, {});
				for (let t of e) n++, yield t;
			}
		}
	}
	getKey(e, t, n, r) {
		if (e.key != null) return e.key;
		if (t.type === `cell` && t.key != null) return `${r}${t.key}`;
		let i = t.value;
		if (i != null) {
			let e = i.key ?? i.id;
			if (e == null) throw Error(`No key found for item`);
			return e;
		}
		return r ? `${r}.${t.index}` : `$.${t.index}`;
	}
	getChildState(e, t) {
		return { renderer: t.renderer || e.renderer };
	}
	*getFullNode(e, t, n, r) {
		if (M.isValidElement(e.element) && e.element.type === M.Fragment) {
			let i = [];
			M.Children.forEach(e.element.props.children, (e) => {
				i.push(e);
			});
			let a = e.index ?? 0;
			for (let e of i) yield* this.getFullNode({
				element: e,
				index: a++
			}, t, n, r);
			return;
		}
		let i = e.element;
		if (!i && e.value && t && t.renderer) {
			let n = this.cache.get(e.value);
			if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
				n.index = e.index, n.parentKey = r ? r.key : null, yield n;
				return;
			}
			i = t.renderer(e.value);
		}
		if (M.isValidElement(i)) {
			let a = i.type;
			if (typeof a != `function` && typeof a.getCollectionNode != `function`) {
				let e = i.type;
				throw Error(`Unknown element <${e}> in collection.`);
			}
			let o = a.getCollectionNode(i.props, this.context), s = e.index ?? 0, c = o.next();
			for (; !c.done && c.value;) {
				let a = c.value;
				e.index = s;
				let l = a.key ?? null;
				l ??= a.element ? null : this.getKey(i, e, t, n);
				let u = [...this.getFullNode({
					...a,
					key: l,
					index: s,
					wrapper: De(e.wrapper, a.wrapper)
				}, this.getChildState(t, a), n ? `${n}${i.key}` : i.key, r)];
				for (let t of u) {
					if (t.value = a.value ?? e.value ?? null, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${Oe(t.type)}> in <${Oe(r?.type ?? `unknown parent type`)}>. Only <${Oe(e.type)}> is supported.`);
					s++, yield t;
				}
				c = o.next(u);
			}
			return;
		}
		if (e.key == null || e.type == null) return;
		let a = this, o = {
			type: e.type,
			props: e.props,
			key: e.key,
			parentKey: r ? r.key : null,
			value: e.value ?? null,
			level: (r?.level ?? 0) + +(r?.type === `item`),
			index: e.index,
			rendered: e.rendered,
			textValue: e.textValue ?? ``,
			"aria-label": e[`aria-label`],
			wrapper: e.wrapper,
			shouldInvalidate: e.shouldInvalidate,
			hasChildNodes: e.hasChildNodes || !1,
			childNodes: Ee(function* () {
				if (!e.hasChildNodes || !e.childNodes) return;
				let n = 0;
				for (let r of e.childNodes()) {
					r.key != null && (r.key = `${o.key}${r.key}`);
					let e = a.getFullNode({
						...r,
						index: n
					}, a.getChildState(t, r), o.key, o);
					for (let t of e) n++, yield t;
				}
			})
		};
		yield o;
	}
	constructor() {
		this.cache = new WeakMap();
	}
};
function Ee(e) {
	let t = [], n = null;
	return { *[Symbol.iterator]() {
		for (let e of t) yield e;
		n ||= e();
		for (let e of n) t.push(e), yield e;
	} };
}
function De(e, t) {
	if (e && t) return (n) => e(t(n));
	if (e) return e;
	if (t) return t;
}
function Oe(e) {
	return e[0].toUpperCase() + e.slice(1);
}
function ke(e, t, n) {
	let r = (0, M.useMemo)(() => new Te(), []), { children: i, items: a, collection: o } = e;
	return (0, M.useMemo)(() => o || t(r.build({
		children: i,
		items: a
	}, n)), [
		r,
		i,
		a,
		o,
		n,
		t
	]);
}
export { I as _, Y as a, P as b, ve as c, me as d, fe as f, z as g, ae as h, be as i, ge as l, U as m, we as n, X as o, W as p, Se as r, ye as s, ke as t, q as u, L as v, N as x, R as y };
