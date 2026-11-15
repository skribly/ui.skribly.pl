import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { $t as r, Ct as i, Jt as a, Kt as o, Mt as s, Nt as c, Sn as l, Ut as u, Vt as d, Wt as f, Xt as p, Yt as m, Zt as h, gn as g, gt as _, in as v, nt as ee, rn as y, rt as b, vt as te, xn as x, yn as S, yt as ne, zt as C } from "./doc.C_PtMNUB.js";
import { c as w, d as T, i as E, l as re, u as D } from "./Autocomplete.BYGvWyUq.js";
import { t as O } from "./useEvent.DZ6Jaavz.js";
import { t as k } from "./useControlledState.DijOhE0s.js";
import { a as A } from "./CollectionBuilder.BW1Ria3_.js";
import { r as j } from "./FocusScope.DSjTtRFm.js";
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
	let { block: i = `nearest`, inline: a = `nearest` } = r, o = e.scrollTop, s = e.scrollLeft, c = e.getBoundingClientRect(), l = window.getComputedStyle(t), u = window.getComputedStyle(e), d = document.scrollingElement || document.documentElement, p = e === d, m = e === d ? 0 : c.top, h = e === d ? e.clientHeight : c.bottom, g = e === d ? 0 : c.left, _ = e === d ? e.clientWidth : c.right, v = parseFloat(l.scrollMarginTop) || 0, ee = parseFloat(l.scrollMarginBottom) || 0, y = parseFloat(l.scrollMarginLeft) || 0, b = parseFloat(l.scrollMarginRight) || 0, te = parseFloat(u.scrollPaddingTop) || 0, x = parseFloat(u.scrollPaddingBottom) || 0, S = parseFloat(u.scrollPaddingLeft) || 0, ne = parseFloat(u.scrollPaddingRight) || 0, w = parseFloat(u.borderTopWidth) || 0, T = parseFloat(u.borderBottomWidth) || 0, E = parseFloat(u.borderLeftWidth) || 0, re = parseFloat(u.borderRightWidth) || 0, D = n.top - v, O = n.bottom + ee, k = n.left - y, A = n.right + b, j = e === d ? 0 : E + re, M = e === d ? 0 : w + T, N = e === d ? 0 : e.offsetWidth - e.clientWidth - j, P = e === d ? 0 : e.offsetHeight - e.clientHeight - M, F = m + (p ? 0 : w) + te, I = h - (p ? 0 : T) - x - P, L = g + (p ? 0 : E) + S, R = _ - (p ? 0 : re) - ne;
	f() && C() || u.direction === `ltr` ? R -= N : u.direction === `rtl` && (L += N);
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
	return u() ? e.altKey : e.ctrlKey;
}
function W(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var le = new WeakMap();
function ue(e) {
	let t = S();
	return le.set(e, t), t;
}
function de(e) {
	return le.get(e);
}
var fe = 1e3;
function pe(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: i } = e, a = (0, M.useRef)({
		search: ``,
		timeout: void 0
	});
	return (0, M.useEffect)(() => {
		let e = a.current.timeout;
		return () => {
			clearTimeout(e);
		};
	}, [a]), { typeSelectProps: {
		onKeyDownCapture: t.getKeyForSearch ? (e) => {
			if (a.current.search.length > 0 && e.key === ` `) {
				if (e.preventDefault(), (!(`continuePropagation` in e) || `continuePropagation` in e && !e.isPropagationStopped()) && e.stopPropagation(), a.current.search += ` `, t.getKeyForSearch != null) {
					let e = t.getKeyForSearch(a.current.search, n.focusedKey);
					e ??= t.getKeyForSearch(a.current.search), e != null && (n.setFocusedKey(e), i && i(e));
				}
				clearTimeout(a.current.timeout), a.current.timeout = setTimeout(() => {
					a.current.search = ``;
				}, fe);
			}
		} : void 0,
		onKeyDown: t.getKeyForSearch ? (e) => {
			let o = G(e.key);
			if (!(!o || e.ctrlKey || e.metaKey || e.altKey || !m(e.currentTarget, r(e)) || a.current.search.length === 0 && o === ` `)) {
				if (a.current.search += o, t.getKeyForSearch != null) {
					let r = t.getKeyForSearch(a.current.search, n.focusedKey);
					if (r ??= t.getKeyForSearch(a.current.search), r != null) n.setFocusedKey(r), i && i(r), e.preventDefault(), `continuePropagation` in e || e.stopPropagation();
					else {
						a.current.search = ``, clearTimeout(a.current.timeout), a.current.timeout = void 0;
						return;
					}
				}
				clearTimeout(a.current.timeout), a.current.timeout = setTimeout(() => {
					a.current.search = ``;
				}, fe);
			}
		} : void 0
	} };
}
function G(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : ``;
}
function me(e, t) {
	let n = (0, M.useRef)(!0), r = (0, M.useRef)(null);
	x(() => (n.current = !0, () => {
		n.current = !1;
	}), []), x(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
function he(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: s, autoFocus: l = !1, shouldFocusWrap: u = !1, disallowEmptySelection: f = !1, disallowSelectAll: v = !1, escapeKeyBehavior: ee = `clearSelection`, selectOnFocus: y = t.selectionBehavior === `replace`, disallowTypeAhead: b = !1, shouldUseVirtualFocus: x, allowsTabNavigation: S = !1, scrollRef: C = s, linkBehavior: k = `action`, UNSTABLE_focusOnEntry: A } = e, { direction: N } = ne(), P = c(), F = (e, n, r) => {
		if (n != null) {
			if (t.isLink(n) && k === `selection` && y && !ce(e)) {
				(0, oe.flushSync)(() => {
					t.setFocusedKey(n, r);
				});
				let i = W(s, n), a = t.getItemProps(n);
				if (i) {
					P.open(i, e, a.href, a.routerOptions);
					return;
				}
				return !1;
			}
			if (t.setFocusedKey(n, r), t.isLink(n) && k === `override`) return !1;
			if (e.shiftKey && t.selectionMode === `multiple`) {
				t.extendSelection(n);
				return;
			}
			if (y && !ce(e)) {
				t.replaceSelection(n);
				return;
			}
		}
		return !1;
	}, I = (e) => {
		if (n.getKeyBelow) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
			if (r == null && u && (r = n.getFirstKey?.(t.focusedKey)), r != null) {
				F(e, r);
				return;
			}
		}
		return !1;
	}, L = (e) => {
		if (n.getKeyAbove) {
			let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
			if (r == null && u && (r = n.getLastKey?.(t.focusedKey)), r != null) {
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
				if (y) {
					t.replaceSelection(r);
					return;
				}
			}
		}
		return !1;
	}, z = (e) => {
		if (n.getKeyLeftOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
			if (r == null && u && (r = N === `rtl` ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null) {
				F(e, r, N === `rtl` ? `first` : `last`);
				return;
			}
		}
		return !1;
	}, B = (e) => {
		if (n.getKeyRightOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
			if (r == null && u && (r = N === `rtl` ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null) {
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
				if (y) {
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
		if (t.selectionMode === `multiple` && v !== !0) t.selectAll();
		else return !1;
	}, le = () => {
		if (ee === `clearSelection` && !f && t.selectedKeys.size !== 0) t.clearSelection();
		else return !1;
	}, de = () => {
		if (!S && s.current) {
			let e = j(s.current, { tabbable: !0 }), t, n;
			do
				n = e.lastChild(), n && (t = n);
			while (n);
			let r = h();
			t && (!p(t) || r && !o(r)) && a(t);
		}
		return {
			shouldContinuePropagation: !0,
			shouldPreventDefault: !1
		};
	}, fe = () => (!S && s.current && s.current.focus(), {
		shouldContinuePropagation: !0,
		shouldPreventDefault: !1
	}), G = (e, t) => ({
		[d() ? e + `+Shift+Alt` : e + `+Shift+Control`]: t,
		[e + `+Shift`]: t,
		[d() ? e + `+Alt` : e + `+Control`]: t,
		[e]: t
	}), { keyboardProps: he } = _({
		shortcuts: {
			...G(`ArrowDown`, I),
			...G(`ArrowUp`, L),
			...G(`ArrowLeft`, z),
			...G(`ArrowRight`, B),
			...G(`PageDown`, se),
			...G(`PageUp`, H)
		},
		allowRepeats: !0
	}), { keyboardProps: ge } = _({ shortcuts: {
		...G(`Home`, R),
		...G(`End`, ie),
		"Mod+A": U,
		Escape: le,
		Tab: de,
		"Tab+Shift": fe
	} }), K = (0, M.useRef)({
		top: 0,
		left: 0
	});
	O(C, `scroll`, () => {
		K.current = {
			top: C.current?.scrollTop ?? 0,
			left: C.current?.scrollLeft ?? 0
		};
	});
	let _e = (e) => {
		if (t.isFocused) {
			m(e.currentTarget, r(e)) || t.setFocused(!1);
			return;
		}
		if (!m(e.currentTarget, r(e))) return;
		let o = i();
		t.setFocused(!0);
		let c = (e) => {
			e != null && (t.setFocusedKey(e), y && !t.isSelected(e) && t.replaceSelection(e));
		};
		if (A && (o === `keyboard` || o === `virtual`)) c(A === `first` ? n.getFirstKey?.() : n.getLastKey?.());
		else if (t.focusedKey == null) {
			let r = e.relatedTarget;
			r && e.currentTarget.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING ? c(t.lastSelectedKey ?? n.getLastKey?.()) : c(t.firstSelectedKey ?? n.getFirstKey?.());
		} else C.current && (C.current.scrollTop = K.current.top, C.current.scrollLeft = K.current.left);
		if (t.focusedKey != null && C.current) {
			let e = W(s, t.focusedKey);
			e instanceof HTMLElement && (!p(e) && !x && a(e), (o === `keyboard` || A && o === `virtual`) && ae(e, { containingElement: s.current }));
		}
	}, ve = (e) => {
		m(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, q = (0, M.useRef)(!1);
	O(s, T, x ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === `first` && (q.current = !0);
	} : void 0);
	let J = n.getFirstKey?.() ?? null;
	me(() => {
		if (q.current) {
			if (J == null) {
				let e = h();
				re(s.current), w(e, null), t.collection.size > 0 && (q.current = !1);
			} else t.setFocusedKey(J), q.current = !1;
		}
	}, [J, t.collection.size]), me(() => {
		t.collection.size > 0 && (q.current = !1);
	}, [t.focusedKey]), O(s, D, x ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let Y = (0, M.useRef)(l), X = (0, M.useRef)(!1);
	(0, M.useEffect)(() => {
		if (Y.current) {
			let e = null;
			l === `first` && (e = n.getFirstKey?.() ?? null), l === `last` && (e = n.getLastKey?.() ?? null);
			let r = t.selectedKeys;
			if (r.size) {
				for (let n of r) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e != null && y && !r.size && t.canSelectItem(e) && t.replaceSelection(e), e == null && !x && s.current && te(s.current), t.collection.size > 0 && (Y.current = !1, X.current = !0);
		}
	});
	let ye = (0, M.useRef)(t.focusedKey), Z = (0, M.useRef)(null);
	(0, M.useEffect)(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== ye.current || X.current) && C.current && s.current) {
			let e = i(), n = W(s, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === `keyboard` || X.current) && (Z.current && cancelAnimationFrame(Z.current), Z.current = requestAnimationFrame(() => {
				C.current && (V(C.current, n), e !== `virtual` && ae(n, { containingElement: s.current }));
			}));
		}
		!x && t.isFocused && t.focusedKey == null && ye.current != null && s.current && te(s.current), ye.current = t.focusedKey, X.current = !1;
	}), (0, M.useEffect)(() => () => {
		Z.current && cancelAnimationFrame(Z.current);
	}, []), O(s, `react-aria-focus-scope-restore`, (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let Q = {
		...g(ge, he),
		onFocus: _e,
		onBlur: ve,
		onMouseDown(e) {
			C.current === r(e) && e.preventDefault();
		}
	}, { typeSelectProps: be } = pe({
		keyboardDelegate: n,
		selectionManager: t
	});
	b || (Q = g(be, Q));
	let $;
	x || ($ = t.focusedKey == null ? 0 : -1);
	let xe = ue(t.collection);
	return { collectionProps: g(Q, {
		tabIndex: $,
		"data-collection": xe
	}) };
}
var ge = 500;
function K(e) {
	let { isDisabled: t, pointerType: n, onLongPressStart: r, onLongPressEnd: i, onLongPress: o, threshold: s = ge, accessibilityDescription: c } = e, l = (0, M.useRef)(void 0), { addGlobalListener: u, removeAllGlobalListeners: d } = b(), f = (e) => n ? e.pointerType === n : e.pointerType === `mouse` || e.pointerType === `touch`, { pressProps: p } = ee({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), f(e)) {
				r && r({
					...e,
					type: `longpressstart`
				}), l.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent(`pointercancel`, { bubbles: !0 })), u(e.target, `click`, (e) => e.preventDefault(), { once: !0 }), y(e.target).activeElement !== e.target && a(e.target), o && o({
						...e,
						type: `longpress`
					}), l.current = void 0;
				}, s), e.pointerType === `touch` && u(e.target, `contextmenu`, (e) => e.preventDefault(), { once: !0 });
				let t = v(e.target);
				u(t, `pointerup`, () => {
					setTimeout(() => {
						d();
					}, 100);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			l.current && clearTimeout(l.current), i && f(e) && i({
				...e,
				type: `longpressend`
			});
		}
	}), m = U(o && !t ? c : void 0);
	return { longPressProps: g(p, m) };
}
function _e(e) {
	let { id: t, selectionManager: n, key: i, ref: a, shouldSelectOnPressUp: u, shouldUseVirtualFocus: d, focus: f, isDisabled: p, onAction: m, allowsDifferentPressOrigin: _, linkBehavior: v = `action` } = e, y = c();
	t = S(t);
	let b = (e) => {
		if (e.pointerType === `keyboard` && ce(e)) n.toggleSelection(i);
		else {
			if (n.selectionMode === `none`) return;
			if (n.isLink(i)) {
				if (v === `selection` && a.current) {
					let t = n.getItemProps(i);
					y.open(a.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				}
				if (v === `override` || v === `none`) return;
			}
			n.selectionMode === `single` ? n.isSelected(i) && !n.disallowEmptySelection ? n.toggleSelection(i) : n.replaceSelection(i) : e && e.shiftKey ? n.extendSelection(i) : n.selectionBehavior === `toggle` || e && (E(e) || e.pointerType === `touch` || e.pointerType === `virtual`) ? n.toggleSelection(i) : n.replaceSelection(i);
		}
	};
	(0, M.useEffect)(() => {
		i === n.focusedKey && n.isFocused && (d ? re(a.current) : f ? f() : h() !== a.current && a.current && te(a.current));
	}, [
		a,
		i,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		d
	]), p ||= n.isDisabled(i);
	let x = {};
	!d && !p ? x = {
		tabIndex: i === n.focusedKey ? 0 : -1,
		onFocus(e) {
			r(e) === a.current && n.setFocusedKey(i);
		}
	} : p && (x.onMouseDown = (e) => {
		e.preventDefault();
	}), (0, M.useEffect)(() => {
		p && n.focusedKey === i && n.setFocusedKey(null);
	}, [
		n,
		p,
		i
	]);
	let ne = n.isLink(i) && v === `override`, C = m && e.UNSTABLE_itemBehavior === `action`, w = n.isLink(i) && v !== `selection` && v !== `none`, T = !p && n.canSelectItem(i) && !ne && !C, D = (m || w) && !p, O = D && (n.selectionBehavior === `replace` ? !T : !T || n.isEmpty), k = D && T && n.selectionBehavior === `replace`, A = O || k, j = (0, M.useRef)(null), N = A && T, P = (0, M.useRef)(!1), F = (0, M.useRef)(!1), I = n.getItemProps(i), L = (e) => {
		m && (m(), a.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`, { bubbles: !0 }))), w && a.current && y.open(a.current, e, I.href, I.routerOptions);
	}, R = { ref: a };
	u ? (R.onPressStart = (e) => {
		j.current = e.pointerType, P.current = N, e.pointerType === `keyboard` && (!A || q(e.key)) && b(e);
	}, _ ? (R.onPressUp = O ? void 0 : (e) => {
		e.pointerType === `mouse` && T && b(e);
	}, R.onPress = O ? L : (e) => {
		e.pointerType !== `keyboard` && e.pointerType !== `mouse` && T && b(e);
	}) : R.onPress = (e) => {
		if (O || k && e.pointerType !== `mouse`) {
			if (e.pointerType === `keyboard` && !ve(e.key)) return;
			L(e);
		} else e.pointerType !== `keyboard` && T && b(e);
	}) : (R.onPressStart = (e) => {
		j.current = e.pointerType, P.current = N, F.current = O, T && (e.pointerType === `mouse` && !O || e.pointerType === `keyboard` && (!D || q(e.key))) && b(e);
	}, R.onPress = (e) => {
		(e.pointerType === `touch` || e.pointerType === `pen` || e.pointerType === `virtual` || e.pointerType === `keyboard` && A && ve(e.key) || e.pointerType === `mouse` && F.current) && (A ? L(e) : T && b(e));
	});
	let z = de(n.collection);
	if (x[`data-collection`] = z, x[`data-key`] = i, R.preventFocusOnPress = d, d && (R = g(R, {
		onPressStart(e) {
			e.pointerType !== `touch` && (n.setFocused(!0), n.setFocusedKey(i));
		},
		onPress(e) {
			e.pointerType === `touch` && (n.setFocused(!0), n.setFocusedKey(i));
		}
	})), I) for (let e of [
		`onPressStart`,
		`onPressEnd`,
		`onPressChange`,
		`onPress`,
		`onPressUp`,
		`onClick`
	]) I[e] && (R[e] = l(R[e], I[e]));
	let { pressProps: B, isPressed: V } = ee(R), ie = k ? (e) => {
		j.current === `mouse` && (e.stopPropagation(), e.preventDefault(), L(e));
	} : void 0, { longPressProps: ae } = K({
		isDisabled: !N,
		onLongPress(e) {
			e.pointerType === `touch` && (b(e), n.setSelectionBehavior(`toggle`));
		}
	}), oe = (e) => {
		j.current === `touch` && P.current && e.preventDefault();
	}, se = v !== `none` && n.isLink(i) ? (e) => {
		s.isOpening || e.preventDefault();
	} : void 0, H = g(x, T || O || d && !p ? B : {}, N ? ae : {}, {
		onDoubleClick: ie,
		onDragStartCapture: oe,
		onClick: se,
		id: t
	}, d ? { onMouseDown: (e) => e.preventDefault() } : void 0), U = (e) => {
		let t = e;
		for (; t && t !== a.current;) {
			let e = t.getAttribute(`data-collection`);
			if (e != null) return e !== z;
			t = t.parentElement;
		}
		return o(e);
	}, W = H.onPointerDown;
	H.onPointerDown = (e) => {
		let t = r(e);
		t && t !== a.current && U(t) ? e.stopPropagation() : W?.(e);
	};
	let le = H.onMouseDown;
	return H.onMouseDown = (e) => {
		let t = r(e);
		t && t !== a.current && U(t) ? e.stopPropagation() : le?.(e);
	}, {
		itemProps: H,
		isPressed: V,
		isSelected: n.isSelected(i),
		isFocused: n.isFocused && n.focusedKey === i,
		isDisabled: p,
		allowsSelection: T,
		hasAction: A
	};
}
function ve(e) {
	return e === `Enter`;
}
function q(e) {
	return e === ` `;
}
function J(e, t) {
	return typeof t.getChildren == `function` ? t.getChildren(e.key) : e.childNodes;
}
function Y(e) {
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
					i?.type === `item` && t.push(r), i?.hasChildNodes && (this.allowsCellSelection || i.type !== `item`) && n(Y(J(i, e))?.key ?? null);
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
export { I as _, J as a, P as b, Y as c, he as d, pe as f, z as g, ae as h, be as i, _e as l, U as m, we as n, X as o, W as p, Se as r, ye as s, ke as t, K as u, L as v, N as x, R as y };
