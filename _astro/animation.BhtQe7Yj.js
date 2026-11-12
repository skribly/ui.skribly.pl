import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { Bt as r, I as i, L as a, Lt as o, P as s, Pt as c, St as l, V as u, X as d, Z as f, _t as p, at as m, b as h, ct as g, ft as _, ht as v, mt as ee, pt as y, rt as b, st as x, ut as te, x as S, xt as C, yt as w, z as T, zt as E } from "./createLucideIcon.npgQlVHx.js";
import { c as D, d as O, i as k, l as A, u as j } from "./Autocomplete.BUqxPt-N.js";
import { l as M } from "./useFormValidation.CKcLNQoz.js";
import { t as N } from "./useControlledState.DijOhE0s.js";
import { a as P } from "./CollectionBuilder.Bxdh8Jqj.js";
import { r as F } from "./FocusScope.Ba7RJw7M.js";
var I = e(t(), 1), L = (0, I.createContext)(null), R = {
	CollectionRoot({ collection: e, renderDropIndicator: t }) {
		return z(e, null, t);
	},
	CollectionBranch({ collection: e, parent: t, renderDropIndicator: n }) {
		return z(e, t, n);
	}
};
function z(e, t, n) {
	return P({
		items: t ? e.getChildren(t.key) : e,
		dependencies: [n],
		children(t) {
			if (t.type === `content`) return I.createElement(I.Fragment, null);
			let r = t.render(t);
			return !n || t.type !== `item` ? r : I.createElement(I.Fragment, null, n({
				type: `item`,
				key: t.key,
				dropPosition: `before`
			}), r, B(e, t, n));
		}
	});
}
function B(e, t, n) {
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
			(0, I.isValidElement)(t) && s.push((0, I.cloneElement)(t, { key: `${r.key}-after` })), r = r.parentKey == null ? null : e.getItem(r.parentKey);
		}
	}
	return s;
}
var V = (0, I.createContext)(R);
function H(e) {
	return (0, I.useMemo)(() => e == null ? null : new Set([e]), [e]);
}
function ne(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== `hidden` && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
function U(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (ne(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
function W(e, t, n = {}) {
	e !== t && re(e, t, t.getBoundingClientRect(), n);
}
function re(e, t, n, r = {}) {
	let { block: i = `nearest`, inline: a = `nearest` } = r, o = e.scrollTop, s = e.scrollLeft, c = e.getBoundingClientRect(), l = window.getComputedStyle(t), u = window.getComputedStyle(e), d = document.scrollingElement || document.documentElement, f = e === d, p = e === d ? 0 : c.top, m = e === d ? e.clientHeight : c.bottom, h = e === d ? 0 : c.left, _ = e === d ? e.clientWidth : c.right, v = parseFloat(l.scrollMarginTop) || 0, ee = parseFloat(l.scrollMarginBottom) || 0, y = parseFloat(l.scrollMarginLeft) || 0, x = parseFloat(l.scrollMarginRight) || 0, te = parseFloat(u.scrollPaddingTop) || 0, S = parseFloat(u.scrollPaddingBottom) || 0, C = parseFloat(u.scrollPaddingLeft) || 0, w = parseFloat(u.scrollPaddingRight) || 0, T = parseFloat(u.borderTopWidth) || 0, E = parseFloat(u.borderBottomWidth) || 0, D = parseFloat(u.borderLeftWidth) || 0, O = parseFloat(u.borderRightWidth) || 0, k = n.top - v, A = n.bottom + ee, j = n.left - y, M = n.right + x, N = e === d ? 0 : D + O, P = e === d ? 0 : T + E, F = e === d ? 0 : e.offsetWidth - e.clientWidth - N, I = e === d ? 0 : e.offsetHeight - e.clientHeight - P, L = p + (f ? 0 : T) + te, R = m - (f ? 0 : E) - S - I, z = h + (f ? 0 : D) + C, B = _ - (f ? 0 : O) - w;
	g() && b() || u.direction === `ltr` ? B -= F : u.direction === `rtl` && (z += F);
	let V = k < L || A > R, H = j < z || M > B;
	if (V && i === `start`) o += k - L;
	else if (V && i === `center`) o += (k + A) / 2 - (L + R) / 2;
	else if (V && i === `end`) o += A - R;
	else if (V && i === `nearest`) {
		let e = k - L, t = A - R;
		o += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (H && a === `start`) s += j - z;
	else if (H && a === `center`) s += (j + M) / 2 - (z + B) / 2;
	else if (H && a === `end`) s += M - B;
	else if (H && a === `nearest`) {
		let e = j - z, t = M - B;
		s += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	e.scrollTo({
		left: s,
		top: o
	});
}
function ie(e, t = {}) {
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
			let { left: t, top: r } = e.getBoundingClientRect(), i = U(e, !0);
			for (let t of i) W(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? U(n, !0) : [];
				for (let e of i) W(e, n, {
					block: `center`,
					inline: `center`
				});
				for (let t of U(e, !0)) W(t, e);
			}
		}
	}
}
var G = e(n(), 1), ae = 0, K = new Map();
function oe(e) {
	let [t, n] = (0, I.useState)();
	return E(() => {
		if (!e) return;
		let t = K.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${ae++}`;
			n(r);
			let i = document.createElement(`div`);
			i.id = r, i.style.display = `none`, i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, K.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), K.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
function se(e) {
	return x() ? e.altKey : e.ctrlKey;
}
function ce(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var le = new WeakMap();
function ue(e) {
	let t = o();
	return le.set(e, t), t;
}
function q(e) {
	return le.get(e);
}
var de = 1e3;
function fe(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, i = (0, I.useRef)({
		search: ``,
		timeout: void 0
	});
	return (0, I.useEffect)(() => {
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
			let a = pe(e.key);
			if (!(!a || e.ctrlKey || e.metaKey || e.altKey || !y(e.currentTarget, p(e)) || i.current.search.length === 0 && a === ` `)) {
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
function pe(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : ``;
}
function me(e, t) {
	let n = (0, I.useRef)(!0), r = (0, I.useRef)(null);
	E(() => (n.current = !0, () => {
		n.current = !1;
	}), []), E(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
function he(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: r, autoFocus: o = !1, shouldFocusWrap: l = !1, disallowEmptySelection: d = !1, disallowSelectAll: h = !1, escapeKeyBehavior: g = `clearSelection`, selectOnFocus: b = t.selectionBehavior === `replace`, disallowTypeAhead: x = !1, shouldUseVirtualFocus: S, allowsTabNavigation: C = !1, scrollRef: w = r, linkBehavior: T = `action`, UNSTABLE_focusOnEntry: E } = e, { direction: N } = a(), P = f(), L = (e, n, i) => {
		if (n != null) {
			if (t.isLink(n) && T === `selection` && b && !se(e)) {
				(0, G.flushSync)(() => {
					t.setFocusedKey(n, i);
				});
				let a = ce(r, n), o = t.getItemProps(n);
				if (a) {
					P.open(a, e, o.href, o.routerOptions);
					return;
				}
				return !1;
			}
			if (t.setFocusedKey(n, i), t.isLink(n) && T === `override`) return !1;
			if (e.shiftKey && t.selectionMode === `multiple`) {
				t.extendSelection(n);
				return;
			}
			if (b && !se(e)) {
				t.replaceSelection(n);
				return;
			}
		}
		return !1;
	}, R = (e) => {
		if (n.getKeyBelow) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
			if (r == null && l && (r = n.getFirstKey?.(t.focusedKey)), r != null) {
				L(e, r);
				return;
			}
		}
		return !1;
	}, z = (e) => {
		if (n.getKeyAbove) {
			let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
			if (r == null && l && (r = n.getLastKey?.(t.focusedKey)), r != null) {
				L(e, r);
				return;
			}
		}
		return !1;
	}, B = (e) => {
		if (n.getFirstKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let r = n.getFirstKey(t.focusedKey, k(e));
			if (t.setFocusedKey(r), r != null) {
				if (k(e) && e.shiftKey && t.selectionMode === `multiple`) {
					t.extendSelection(r);
					return;
				}
				if (b) {
					t.replaceSelection(r);
					return;
				}
			}
		}
		return !1;
	}, V = (e) => {
		if (n.getKeyLeftOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
			if (r == null && l && (r = N === `rtl` ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null) {
				L(e, r, N === `rtl` ? `first` : `last`);
				return;
			}
		}
		return !1;
	}, H = (e) => {
		if (n.getKeyRightOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
			if (r == null && l && (r = N === `rtl` ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null) {
				L(e, r, N === `rtl` ? `last` : `first`);
				return;
			}
		}
		return !1;
	}, ne = (e) => {
		if (n.getLastKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let r = n.getLastKey(t.focusedKey, k(e));
			if (t.setFocusedKey(r), r != null) {
				if (k(e) && e.shiftKey && t.selectionMode === `multiple`) {
					t.extendSelection(r);
					return;
				}
				if (b) {
					t.replaceSelection(r);
					return;
				}
			}
		}
		return !1;
	}, U = (e) => {
		if (n.getKeyPageBelow && t.focusedKey != null) {
			let r = n.getKeyPageBelow(t.focusedKey);
			if (r != null) return L(e, r);
		}
		return !1;
	}, re = (e) => {
		if (n.getKeyPageAbove && t.focusedKey != null) {
			let r = n.getKeyPageAbove(t.focusedKey);
			if (r != null) return L(e, r);
		}
		return !1;
	}, ae = () => {
		if (t.selectionMode === `multiple` && h !== !0) t.selectAll();
		else return !1;
	}, K = () => {
		if (g === `clearSelection` && !d && t.selectedKeys.size !== 0) t.clearSelection();
		else return !1;
	}, oe = () => {
		if (!C && r.current) {
			let e = F(r.current, { tabbable: !0 }), t, n;
			do
				n = e.lastChild(), n && (t = n);
			while (n);
			let i = v();
			t && (!ee(t) || i && !te(i)) && _(t);
		}
		return {
			shouldContinuePropagation: !0,
			shouldPreventDefault: !1
		};
	}, le = () => (!C && r.current && r.current.focus(), {
		shouldContinuePropagation: !0,
		shouldPreventDefault: !1
	}), q = (e, t) => ({
		[m() ? e + `+Shift+Alt` : e + `+Shift+Control`]: t,
		[e + `+Shift`]: t,
		[m() ? e + `+Alt` : e + `+Control`]: t,
		[e]: t
	}), { keyboardProps: de } = s({
		shortcuts: {
			...q(`ArrowDown`, R),
			...q(`ArrowUp`, z),
			...q(`ArrowLeft`, V),
			...q(`ArrowRight`, H),
			...q(`PageDown`, U),
			...q(`PageUp`, re)
		},
		allowRepeats: !0
	}), { keyboardProps: pe } = s({ shortcuts: {
		...q(`Home`, B),
		...q(`End`, ne),
		"Mod+A": ae,
		Escape: K,
		Tab: oe,
		"Tab+Shift": le
	} }), he = (0, I.useRef)({
		top: 0,
		left: 0
	});
	M(w, `scroll`, () => {
		he.current = {
			top: w.current?.scrollTop ?? 0,
			left: w.current?.scrollLeft ?? 0
		};
	});
	let ge = (e) => {
		if (t.isFocused) {
			y(e.currentTarget, p(e)) || t.setFocused(!1);
			return;
		}
		if (!y(e.currentTarget, p(e))) return;
		let i = u();
		t.setFocused(!0);
		let a = (e) => {
			e != null && (t.setFocusedKey(e), b && !t.isSelected(e) && t.replaceSelection(e));
		};
		if (E && (i === `keyboard` || i === `virtual`)) a(E === `first` ? n.getFirstKey?.() : n.getLastKey?.());
		else if (t.focusedKey == null) {
			let r = e.relatedTarget;
			r && e.currentTarget.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING ? a(t.lastSelectedKey ?? n.getLastKey?.()) : a(t.firstSelectedKey ?? n.getFirstKey?.());
		} else w.current && (w.current.scrollTop = he.current.top, w.current.scrollLeft = he.current.left);
		if (t.focusedKey != null && w.current) {
			let e = ce(r, t.focusedKey);
			e instanceof HTMLElement && (!ee(e) && !S && _(e), (i === `keyboard` || E && i === `virtual`) && ie(e, { containingElement: r.current }));
		}
	}, _e = (e) => {
		y(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, J = (0, I.useRef)(!1);
	M(r, O, S ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === `first` && (J.current = !0);
	} : void 0);
	let Y = n.getFirstKey?.() ?? null;
	me(() => {
		if (J.current) {
			if (Y == null) {
				let e = v();
				A(r.current), D(e, null), t.collection.size > 0 && (J.current = !1);
			} else t.setFocusedKey(Y), J.current = !1;
		}
	}, [Y, t.collection.size]), me(() => {
		t.collection.size > 0 && (J.current = !1);
	}, [t.focusedKey]), M(r, j, S ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let ve = (0, I.useRef)(o), X = (0, I.useRef)(!1);
	(0, I.useEffect)(() => {
		if (ve.current) {
			let e = null;
			o === `first` && (e = n.getFirstKey?.() ?? null), o === `last` && (e = n.getLastKey?.() ?? null);
			let a = t.selectedKeys;
			if (a.size) {
				for (let n of a) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e != null && b && !a.size && t.canSelectItem(e) && t.replaceSelection(e), e == null && !S && r.current && i(r.current), t.collection.size > 0 && (ve.current = !1, X.current = !0);
		}
	});
	let Z = (0, I.useRef)(t.focusedKey), Q = (0, I.useRef)(null);
	(0, I.useEffect)(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== Z.current || X.current) && w.current && r.current) {
			let e = u(), n = ce(r, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === `keyboard` || X.current) && (Q.current && cancelAnimationFrame(Q.current), Q.current = requestAnimationFrame(() => {
				w.current && (W(w.current, n), e !== `virtual` && ie(n, { containingElement: r.current }));
			}));
		}
		!S && t.isFocused && t.focusedKey == null && Z.current != null && r.current && i(r.current), Z.current = t.focusedKey, X.current = !1;
	}), (0, I.useEffect)(() => () => {
		Q.current && cancelAnimationFrame(Q.current);
	}, []), M(r, `react-aria-focus-scope-restore`, (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let ye = {
		...c(pe, de),
		onFocus: ge,
		onBlur: _e,
		onMouseDown(e) {
			w.current === p(e) && e.preventDefault();
		}
	}, { typeSelectProps: be } = fe({
		keyboardDelegate: n,
		selectionManager: t
	});
	x || (ye = c(be, ye));
	let xe;
	S || (xe = t.focusedKey == null ? 0 : -1);
	let Se = ue(t.collection);
	return { collectionProps: c(ye, {
		tabIndex: xe,
		"data-collection": Se
	}) };
}
var ge = 500;
function _e(e) {
	let { isDisabled: t, pointerType: n, onLongPressStart: r, onLongPressEnd: i, onLongPress: a, threshold: o = ge, accessibilityDescription: s } = e, u = (0, I.useRef)(void 0), { addGlobalListener: d, removeAllGlobalListeners: f } = S(), p = (e) => n ? e.pointerType === n : e.pointerType === `mouse` || e.pointerType === `touch`, { pressProps: m } = h({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), p(e)) {
				r && r({
					...e,
					type: `longpressstart`
				}), u.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent(`pointercancel`, { bubbles: !0 })), d(e.target, `click`, (e) => e.preventDefault(), { once: !0 }), C(e.target).activeElement !== e.target && _(e.target), a && a({
						...e,
						type: `longpress`
					}), u.current = void 0;
				}, o), e.pointerType === `touch` && d(e.target, `contextmenu`, (e) => e.preventDefault(), { once: !0 });
				let t = l(e.target);
				d(t, `pointerup`, () => {
					setTimeout(() => {
						f();
					}, 100);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			u.current && clearTimeout(u.current), i && p(e) && i({
				...e,
				type: `longpressend`
			});
		}
	}), g = oe(a && !t ? s : void 0);
	return { longPressProps: c(m, g) };
}
function J(e) {
	let { id: t, selectionManager: n, key: a, ref: s, shouldSelectOnPressUp: l, shouldUseVirtualFocus: u, focus: m, isDisabled: g, onAction: _, allowsDifferentPressOrigin: ee, linkBehavior: y = `action` } = e, b = f();
	t = o(t);
	let x = (e) => {
		if (e.pointerType === `keyboard` && se(e)) n.toggleSelection(a);
		else {
			if (n.selectionMode === `none`) return;
			if (n.isLink(a)) {
				if (y === `selection` && s.current) {
					let t = n.getItemProps(a);
					b.open(s.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				}
				if (y === `override` || y === `none`) return;
			}
			n.selectionMode === `single` ? n.isSelected(a) && !n.disallowEmptySelection ? n.toggleSelection(a) : n.replaceSelection(a) : e && e.shiftKey ? n.extendSelection(a) : n.selectionBehavior === `toggle` || e && (k(e) || e.pointerType === `touch` || e.pointerType === `virtual`) ? n.toggleSelection(a) : n.replaceSelection(a);
		}
	};
	(0, I.useEffect)(() => {
		a === n.focusedKey && n.isFocused && (u ? A(s.current) : m ? m() : v() !== s.current && s.current && i(s.current));
	}, [
		s,
		a,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		u
	]), g ||= n.isDisabled(a);
	let S = {};
	!u && !g ? S = {
		tabIndex: a === n.focusedKey ? 0 : -1,
		onFocus(e) {
			p(e) === s.current && n.setFocusedKey(a);
		}
	} : g && (S.onMouseDown = (e) => {
		e.preventDefault();
	}), (0, I.useEffect)(() => {
		g && n.focusedKey === a && n.setFocusedKey(null);
	}, [
		n,
		g,
		a
	]);
	let C = n.isLink(a) && y === `override`, w = _ && e.UNSTABLE_itemBehavior === `action`, T = n.isLink(a) && y !== `selection` && y !== `none`, E = !g && n.canSelectItem(a) && !C && !w, D = (_ || T) && !g, O = D && (n.selectionBehavior === `replace` ? !E : !E || n.isEmpty), j = D && E && n.selectionBehavior === `replace`, M = O || j, N = (0, I.useRef)(null), P = M && E, F = (0, I.useRef)(!1), L = (0, I.useRef)(!1), R = n.getItemProps(a), z = (e) => {
		_ && (_(), s.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`, { bubbles: !0 }))), T && s.current && b.open(s.current, e, R.href, R.routerOptions);
	}, B = { ref: s };
	l ? (B.onPressStart = (e) => {
		N.current = e.pointerType, F.current = P, e.pointerType === `keyboard` && (!M || ve(e.key)) && x(e);
	}, ee ? (B.onPressUp = O ? void 0 : (e) => {
		e.pointerType === `mouse` && E && x(e);
	}, B.onPress = O ? z : (e) => {
		e.pointerType !== `keyboard` && e.pointerType !== `mouse` && E && x(e);
	}) : B.onPress = (e) => {
		if (O || j && e.pointerType !== `mouse`) {
			if (e.pointerType === `keyboard` && !Y(e.key)) return;
			z(e);
		} else e.pointerType !== `keyboard` && E && x(e);
	}) : (B.onPressStart = (e) => {
		N.current = e.pointerType, F.current = P, L.current = O, E && (e.pointerType === `mouse` && !O || e.pointerType === `keyboard` && (!D || ve(e.key))) && x(e);
	}, B.onPress = (e) => {
		(e.pointerType === `touch` || e.pointerType === `pen` || e.pointerType === `virtual` || e.pointerType === `keyboard` && M && Y(e.key) || e.pointerType === `mouse` && L.current) && (M ? z(e) : E && x(e));
	});
	let V = q(n.collection);
	if (S[`data-collection`] = V, S[`data-key`] = a, B.preventFocusOnPress = u, u && (B = c(B, {
		onPressStart(e) {
			e.pointerType !== `touch` && (n.setFocused(!0), n.setFocusedKey(a));
		},
		onPress(e) {
			e.pointerType === `touch` && (n.setFocused(!0), n.setFocusedKey(a));
		}
	})), R) for (let e of [
		`onPressStart`,
		`onPressEnd`,
		`onPressChange`,
		`onPress`,
		`onPressUp`,
		`onClick`
	]) R[e] && (B[e] = r(B[e], R[e]));
	let { pressProps: H, isPressed: ne } = h(B), U = j ? (e) => {
		N.current === `mouse` && (e.stopPropagation(), e.preventDefault(), z(e));
	} : void 0, { longPressProps: W } = _e({
		isDisabled: !P,
		onLongPress(e) {
			e.pointerType === `touch` && (x(e), n.setSelectionBehavior(`toggle`));
		}
	}), re = (e) => {
		N.current === `touch` && F.current && e.preventDefault();
	}, ie = y !== `none` && n.isLink(a) ? (e) => {
		d.isOpening || e.preventDefault();
	} : void 0, G = c(S, E || O || u && !g ? H : {}, P ? W : {}, {
		onDoubleClick: U,
		onDragStartCapture: re,
		onClick: ie,
		id: t
	}, u ? { onMouseDown: (e) => e.preventDefault() } : void 0), ae = (e) => {
		let t = e;
		for (; t && t !== s.current;) {
			let e = t.getAttribute(`data-collection`);
			if (e != null) return e !== V;
			t = t.parentElement;
		}
		return te(e);
	}, K = G.onPointerDown;
	G.onPointerDown = (e) => {
		let t = p(e);
		t && t !== s.current && ae(t) ? e.stopPropagation() : K?.(e);
	};
	let oe = G.onMouseDown;
	return G.onMouseDown = (e) => {
		let t = p(e);
		t && t !== s.current && ae(t) ? e.stopPropagation() : oe?.(e);
	}, {
		itemProps: G,
		isPressed: ne,
		isSelected: n.isSelected(a),
		isFocused: n.isFocused && n.focusedKey === a,
		isDisabled: g,
		allowsSelection: E,
		hasAction: M
	};
}
function Y(e) {
	return e === `Enter`;
}
function ve(e) {
	return e === ` `;
}
function X(e, t) {
	return typeof t.getChildren == `function` ? t.getChildren(e.key) : e.childNodes;
}
function Z(e) {
	return Q(e, 0);
}
function Q(e, t) {
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
function be(e, t, n) {
	if (t.parentKey === n.parentKey) return t.index - n.index;
	let r = [...xe(e, t), t], i = [...xe(e, n), n], a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
	return a === -1 ? r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1) : (t = r[a], n = i[a], t.index - n.index);
}
function xe(e, t) {
	let n = [], r = t;
	for (; r?.parentKey != null;) r = e.getItem(r.parentKey), r && n.unshift(r);
	return n;
}
function Se(e) {
	let t = I.version.split(`.`);
	return parseInt(t[0], 10) >= 19 ? e : e ? `true` : void 0;
}
var $ = class e extends Set {
	constructor(t, n, r) {
		super(t), t instanceof e ? (this.anchorKey = n ?? t.anchorKey, this.currentKey = r ?? t.currentKey) : (this.anchorKey = n ?? null, this.currentKey = r ?? null);
	}
};
function Ce(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function we(e) {
	let { selectionMode: t = `none`, disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: r, selectionBehavior: i = `toggle`, disabledBehavior: a = `all` } = e, o = (0, I.useRef)(!1), [, s] = (0, I.useState)(!1), c = (0, I.useRef)(null), l = (0, I.useRef)(null), [, u] = (0, I.useState)(null), d = (0, I.useMemo)(() => Te(e.selectedKeys), [e.selectedKeys]), f = (0, I.useMemo)(() => Te(e.defaultSelectedKeys, new $()), [e.defaultSelectedKeys]), [p, m] = N(d, f, e.onSelectionChange), h = (0, I.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), [g, _] = (0, I.useState)(i);
	i === `replace` && g === `toggle` && typeof p == `object` && p.size === 0 && _(`replace`);
	let v = (0, I.useRef)(i);
	return (0, I.useEffect)(() => {
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
			(r || !Ce(e, p)) && m(e);
		},
		disabledKeys: h,
		disabledBehavior: a
	};
}
function Te(e, t) {
	return e ? e === `all` ? `all` : new $(e) : t;
}
var Ee = class e {
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
			(!e || n && be(this.collection, n, e) < 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get lastSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && be(this.collection, n, e) > 0) && (e = n);
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
		return n && r ? be(this.collection, n, r) <= 0 ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
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
					i?.type === `item` && t.push(r), i?.hasChildNodes && (this.allowsCellSelection || i.type !== `item`) && n(Z(X(i, e))?.key ?? null);
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
}, De = class {
	build(e, t) {
		return this.context = t, Oe(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		let { children: t, items: n } = e;
		if (I.isValidElement(t) && t.type === I.Fragment) yield* this.iterateCollection({
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
			I.Children.forEach(t, (t) => {
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
		if (I.isValidElement(e.element) && e.element.type === I.Fragment) {
			let i = [];
			I.Children.forEach(e.element.props.children, (e) => {
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
		if (I.isValidElement(i)) {
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
					wrapper: ke(e.wrapper, a.wrapper)
				}, this.getChildState(t, a), n ? `${n}${i.key}` : i.key, r)];
				for (let t of u) {
					if (t.value = a.value ?? e.value ?? null, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${Ae(t.type)}> in <${Ae(r?.type ?? `unknown parent type`)}>. Only <${Ae(e.type)}> is supported.`);
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
			childNodes: Oe(function* () {
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
function Oe(e) {
	let t = [], n = null;
	return { *[Symbol.iterator]() {
		for (let e of t) yield e;
		n ||= e();
		for (let e of n) t.push(e), yield e;
	} };
}
function ke(e, t) {
	if (e && t) return (n) => e(t(n));
	if (e) return e;
	if (t) return t;
}
function Ae(e) {
	return e[0].toUpperCase() + e.slice(1);
}
function je(e, t, n) {
	let r = (0, I.useMemo)(() => new De(), []), { children: i, items: a, collection: o } = e;
	return (0, I.useMemo)(() => o || t(r.build({
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
function Me(e, t = !0, n) {
	let [i, a] = (0, I.useState)(!0), o = i && t;
	return E(() => {
		if (!t && e.current) return r(w(e.current, `opacity`, `0`), w(e.current, `clip`, `rect(0 0 0 0)`), w(e.current, `clip-path`, `inset(50%)`), w(e.current, `mask-image`, `linear-gradient(#0000, #0000)`));
	}, [e, t]), E(() => {
		if (o && e.current && `getAnimations` in e.current) for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel();
	}, [e, o]), Pe(e, o, n, (0, I.useCallback)(() => a(!1), [])), o;
}
function Ne(e, t, n) {
	let [r, i] = (0, I.useState)(t ? `open` : `closed`);
	switch (r) {
		case `open`:
			t || i(`exiting`);
			break;
		case `closed`:
		case `exiting`: t && i(`open`);
	}
	let a = r === `exiting`;
	return Pe(e, a, n, (0, I.useCallback)(() => {
		i((e) => e === `exiting` ? `closed` : e);
	}, [])), a;
}
function Pe(e, t, n, r) {
	let i = (0, I.useRef)(null), a = T(n);
	E(() => {
		if (t && e.current && i.current !== t) {
			if (i.current = t, !(`getAnimations` in e.current)) {
				r();
				return;
			}
			let n = a?.(e.current), o = e.current.getAnimations().filter((e) => (typeof DocumentTimeline > `u` || e.timeline instanceof DocumentTimeline) && e.playState === `running`);
			if (o.length === 0 && !n) {
				r();
				return;
			}
			Promise.all([n, ...o.map((e) => e.finished)]).then(() => {
				(0, G.flushSync)(() => {
					r();
				});
			}).catch(() => {});
		}
		i.current = t;
	}, [
		e,
		t,
		r
	]);
}
export { L as C, R as S, ie as _, we as a, V as b, Q as c, J as d, _e as f, oe as g, ce as h, Ee as i, ye as l, fe as m, Me as n, Se as o, he as p, je as r, X as s, Ne as t, Z as u, ne as v, H as x, B as y };
