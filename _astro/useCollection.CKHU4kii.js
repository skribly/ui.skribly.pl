import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t, t as n } from "./react-dom.B9zIfLd2.js";
import { Bt as r, Gt as i, Ht as a, Jt as o, Mt as s, Qt as c, Rt as l, St as u, Ut as d, Xt as f, Yt as p, _t as m, bn as h, hn as g, ht as _, jt as v, nn as y, nt as b, qt as x, rn as ee, tt as S, vn as C, vt as te, xn as w } from "./doc.DoLlUurT.js";
import { c as T, d as E, i as D, l as ne, u as O } from "./Autocomplete.DmAsmXZB.js";
import { l as k } from "./useFormValidation.CExHgpbK.js";
import { t as A } from "./useControlledState.DijOhE0s.js";
import { a as j } from "./CollectionBuilder.Dfbyz3n6.js";
import { r as M } from "./FocusScope.bOWhljI-.js";
var N = e(t(), 1), P = (0, N.createContext)(null), F = {
	CollectionRoot({ collection: e, renderDropIndicator: t }) {
		return I(e, null, t);
	},
	CollectionBranch({ collection: e, parent: t, renderDropIndicator: n }) {
		return I(e, t, n);
	}
};
function I(e, t, n) {
	return j({
		items: t ? e.getChildren(t.key) : e,
		dependencies: [n],
		children(t) {
			if (t.type === `content`) return N.createElement(N.Fragment, null);
			let r = t.render(t);
			return !n || t.type !== `item` ? r : N.createElement(N.Fragment, null, n({
				type: `item`,
				key: t.key,
				dropPosition: `before`
			}), r, L(e, t, n));
		}
	});
}
function L(e, t, n) {
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
			(0, N.isValidElement)(t) && s.push((0, N.cloneElement)(t, { key: `${r.key}-after` })), r = r.parentKey == null ? null : e.getItem(r.parentKey);
		}
	}
	return s;
}
var R = (0, N.createContext)(F);
function z(e) {
	return (0, N.useMemo)(() => e == null ? null : new Set([e]), [e]);
}
function B(e, t) {
	if (!e) return !1;
	let n = window.getComputedStyle(e), r = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
	return e === r && n.overflow !== `hidden` && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
function V(e, t) {
	let n = [], r = document.scrollingElement || document.documentElement;
	for (; e && (B(e, t) && n.push(e), e !== r);) e = e.parentElement;
	return n;
}
function H(e, t, n = {}) {
	e !== t && re(e, t, t.getBoundingClientRect(), n);
}
function re(e, t, n, r = {}) {
	let { block: i = `nearest`, inline: a = `nearest` } = r, o = e.scrollTop, s = e.scrollLeft, c = e.getBoundingClientRect(), u = window.getComputedStyle(t), f = window.getComputedStyle(e), p = document.scrollingElement || document.documentElement, m = e === p, h = e === p ? 0 : c.top, g = e === p ? e.clientHeight : c.bottom, _ = e === p ? 0 : c.left, v = e === p ? e.clientWidth : c.right, y = parseFloat(u.scrollMarginTop) || 0, b = parseFloat(u.scrollMarginBottom) || 0, x = parseFloat(u.scrollMarginLeft) || 0, ee = parseFloat(u.scrollMarginRight) || 0, S = parseFloat(f.scrollPaddingTop) || 0, C = parseFloat(f.scrollPaddingBottom) || 0, te = parseFloat(f.scrollPaddingLeft) || 0, w = parseFloat(f.scrollPaddingRight) || 0, T = parseFloat(f.borderTopWidth) || 0, E = parseFloat(f.borderBottomWidth) || 0, D = parseFloat(f.borderLeftWidth) || 0, ne = parseFloat(f.borderRightWidth) || 0, O = n.top - y, k = n.bottom + b, A = n.left - x, j = n.right + ee, M = e === p ? 0 : D + ne, N = e === p ? 0 : T + E, P = e === p ? 0 : e.offsetWidth - e.clientWidth - M, F = e === p ? 0 : e.offsetHeight - e.clientHeight - N, I = h + (m ? 0 : T) + S, L = g - (m ? 0 : E) - C - F, R = _ + (m ? 0 : D) + te, z = v - (m ? 0 : ne) - w;
	d() && l() || f.direction === `ltr` ? z -= P : f.direction === `rtl` && (R += P);
	let B = O < I || k > L, V = A < R || j > z;
	if (B && i === `start`) o += O - I;
	else if (B && i === `center`) o += (O + k) / 2 - (I + L) / 2;
	else if (B && i === `end`) o += k - L;
	else if (B && i === `nearest`) {
		let e = O - I, t = k - L;
		o += Math.abs(e) <= Math.abs(t) ? e : t;
	}
	if (V && a === `start`) s += A - R;
	else if (V && a === `center`) s += (A + j) / 2 - (R + z) / 2;
	else if (V && a === `end`) s += j - z;
	else if (V && a === `nearest`) {
		let e = A - R, t = j - z;
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
			let { left: t, top: r } = e.getBoundingClientRect(), i = V(e, !0);
			for (let t of i) H(t, e);
			let { left: a, top: o } = e.getBoundingClientRect();
			if (Math.abs(t - a) > 1 || Math.abs(r - o) > 1) {
				i = n ? V(n, !0) : [];
				for (let e of i) H(e, n, {
					block: `center`,
					inline: `center`
				});
				for (let t of V(e, !0)) H(t, e);
			}
		}
	}
}
var ae = e(n(), 1), oe = 0, U = new Map();
function W(e) {
	let [t, n] = (0, N.useState)();
	return h(() => {
		if (!e) return;
		let t = U.get(e);
		if (t) n(t.element.id);
		else {
			let r = `react-aria-description-${oe++}`;
			n(r);
			let i = document.createElement(`div`);
			i.id = r, i.style.display = `none`, i.textContent = e, document.body.appendChild(i), t = {
				refCount: 0,
				element: i
			}, U.set(e, t);
		}
		return t.refCount++, () => {
			t && --t.refCount === 0 && (t.element.remove(), U.delete(e));
		};
	}, [e]), { "aria-describedby": e ? t : void 0 };
}
function se(e) {
	return a() ? e.altKey : e.ctrlKey;
}
function G(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var ce = new WeakMap();
function le(e) {
	let t = C();
	return ce.set(e, t), t;
}
function ue(e) {
	return ce.get(e);
}
var de = 1e3;
function fe(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, i = (0, N.useRef)({
		search: ``,
		timeout: void 0
	});
	return (0, N.useEffect)(() => {
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
			if (!(!a || e.ctrlKey || e.metaKey || e.altKey || !o(e.currentTarget, c(e)) || i.current.search.length === 0 && a === ` `)) {
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
	let n = (0, N.useRef)(!0), r = (0, N.useRef)(null);
	h(() => (n.current = !0, () => {
		n.current = !1;
	}), []), h(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
function me(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: a, autoFocus: l = !1, shouldFocusWrap: d = !1, disallowEmptySelection: h = !1, disallowSelectAll: v = !1, escapeKeyBehavior: y = `clearSelection`, selectOnFocus: b = t.selectionBehavior === `replace`, disallowTypeAhead: ee = !1, shouldUseVirtualFocus: S, allowsTabNavigation: C = !1, scrollRef: w = a, linkBehavior: A = `action`, UNSTABLE_focusOnEntry: j } = e, { direction: P } = te(), F = s(), I = (e, n, r) => {
		if (n != null) {
			if (t.isLink(n) && A === `selection` && b && !se(e)) {
				(0, ae.flushSync)(() => {
					t.setFocusedKey(n, r);
				});
				let i = G(a, n), o = t.getItemProps(n);
				if (i) {
					F.open(i, e, o.href, o.routerOptions);
					return;
				}
				return !1;
			}
			if (t.setFocusedKey(n, r), t.isLink(n) && A === `override`) return !1;
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
	}, L = (e) => {
		if (n.getKeyBelow) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
			if (r == null && d && (r = n.getFirstKey?.(t.focusedKey)), r != null) {
				I(e, r);
				return;
			}
		}
		return !1;
	}, R = (e) => {
		if (n.getKeyAbove) {
			let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
			if (r == null && d && (r = n.getLastKey?.(t.focusedKey)), r != null) {
				I(e, r);
				return;
			}
		}
		return !1;
	}, z = (e) => {
		if (n.getFirstKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let r = n.getFirstKey(t.focusedKey, D(e));
			if (t.setFocusedKey(r), r != null) {
				if (D(e) && e.shiftKey && t.selectionMode === `multiple`) {
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
	}, B = (e) => {
		if (n.getKeyLeftOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
			if (r == null && d && (r = P === `rtl` ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null) {
				I(e, r, P === `rtl` ? `first` : `last`);
				return;
			}
		}
		return !1;
	}, V = (e) => {
		if (n.getKeyRightOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
			if (r == null && d && (r = P === `rtl` ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null) {
				I(e, r, P === `rtl` ? `last` : `first`);
				return;
			}
		}
		return !1;
	}, re = (e) => {
		if (n.getLastKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let r = n.getLastKey(t.focusedKey, D(e));
			if (t.setFocusedKey(r), r != null) {
				if (D(e) && e.shiftKey && t.selectionMode === `multiple`) {
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
	}, oe = (e) => {
		if (n.getKeyPageBelow && t.focusedKey != null) {
			let r = n.getKeyPageBelow(t.focusedKey);
			if (r != null) return I(e, r);
		}
		return !1;
	}, U = (e) => {
		if (n.getKeyPageAbove && t.focusedKey != null) {
			let r = n.getKeyPageAbove(t.focusedKey);
			if (r != null) return I(e, r);
		}
		return !1;
	}, W = () => {
		if (t.selectionMode === `multiple` && v !== !0) t.selectAll();
		else return !1;
	}, ce = () => {
		if (y === `clearSelection` && !h && t.selectedKeys.size !== 0) t.clearSelection();
		else return !1;
	}, ue = () => {
		if (!C && a.current) {
			let e = M(a.current, { tabbable: !0 }), t, n;
			do
				n = e.lastChild(), n && (t = n);
			while (n);
			let r = f();
			t && (!p(t) || r && !i(r)) && x(t);
		}
		return {
			shouldContinuePropagation: !0,
			shouldPreventDefault: !1
		};
	}, de = () => (!C && a.current && a.current.focus(), {
		shouldContinuePropagation: !0,
		shouldPreventDefault: !1
	}), K = (e, t) => ({
		[r() ? e + `+Shift+Alt` : e + `+Shift+Control`]: t,
		[e + `+Shift`]: t,
		[r() ? e + `+Alt` : e + `+Control`]: t,
		[e]: t
	}), { keyboardProps: me } = _({
		shortcuts: {
			...K(`ArrowDown`, L),
			...K(`ArrowUp`, R),
			...K(`ArrowLeft`, B),
			...K(`ArrowRight`, V),
			...K(`PageDown`, oe),
			...K(`PageUp`, U)
		},
		allowRepeats: !0
	}), { keyboardProps: he } = _({ shortcuts: {
		...K(`Home`, z),
		...K(`End`, re),
		"Mod+A": W,
		Escape: ce,
		Tab: ue,
		"Tab+Shift": de
	} }), q = (0, N.useRef)({
		top: 0,
		left: 0
	});
	k(w, `scroll`, () => {
		q.current = {
			top: w.current?.scrollTop ?? 0,
			left: w.current?.scrollLeft ?? 0
		};
	});
	let ge = (e) => {
		if (t.isFocused) {
			o(e.currentTarget, c(e)) || t.setFocused(!1);
			return;
		}
		if (!o(e.currentTarget, c(e))) return;
		let r = u();
		t.setFocused(!0);
		let i = (e) => {
			e != null && (t.setFocusedKey(e), b && !t.isSelected(e) && t.replaceSelection(e));
		};
		if (j && (r === `keyboard` || r === `virtual`)) i(j === `first` ? n.getFirstKey?.() : n.getLastKey?.());
		else if (t.focusedKey == null) {
			let r = e.relatedTarget;
			r && e.currentTarget.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING ? i(t.lastSelectedKey ?? n.getLastKey?.()) : i(t.firstSelectedKey ?? n.getFirstKey?.());
		} else w.current && (w.current.scrollTop = q.current.top, w.current.scrollLeft = q.current.left);
		if (t.focusedKey != null && w.current) {
			let e = G(a, t.focusedKey);
			e instanceof HTMLElement && (!p(e) && !S && x(e), (r === `keyboard` || j && r === `virtual`) && ie(e, { containingElement: a.current }));
		}
	}, _e = (e) => {
		o(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, J = (0, N.useRef)(!1);
	k(a, E, S ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === `first` && (J.current = !0);
	} : void 0);
	let Y = n.getFirstKey?.() ?? null;
	pe(() => {
		if (J.current) {
			if (Y == null) {
				let e = f();
				ne(a.current), T(e, null), t.collection.size > 0 && (J.current = !1);
			} else t.setFocusedKey(Y), J.current = !1;
		}
	}, [Y, t.collection.size]), pe(() => {
		t.collection.size > 0 && (J.current = !1);
	}, [t.focusedKey]), k(a, O, S ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let ve = (0, N.useRef)(l), X = (0, N.useRef)(!1);
	(0, N.useEffect)(() => {
		if (ve.current) {
			let e = null;
			l === `first` && (e = n.getFirstKey?.() ?? null), l === `last` && (e = n.getLastKey?.() ?? null);
			let r = t.selectedKeys;
			if (r.size) {
				for (let n of r) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e != null && b && !r.size && t.canSelectItem(e) && t.replaceSelection(e), e == null && !S && a.current && m(a.current), t.collection.size > 0 && (ve.current = !1, X.current = !0);
		}
	});
	let ye = (0, N.useRef)(t.focusedKey), Z = (0, N.useRef)(null);
	(0, N.useEffect)(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== ye.current || X.current) && w.current && a.current) {
			let e = u(), n = G(a, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === `keyboard` || X.current) && (Z.current && cancelAnimationFrame(Z.current), Z.current = requestAnimationFrame(() => {
				w.current && (H(w.current, n), e !== `virtual` && ie(n, { containingElement: a.current }));
			}));
		}
		!S && t.isFocused && t.focusedKey == null && ye.current != null && a.current && m(a.current), ye.current = t.focusedKey, X.current = !1;
	}), (0, N.useEffect)(() => () => {
		Z.current && cancelAnimationFrame(Z.current);
	}, []), k(a, `react-aria-focus-scope-restore`, (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let Q = {
		...g(he, me),
		onFocus: ge,
		onBlur: _e,
		onMouseDown(e) {
			w.current === c(e) && e.preventDefault();
		}
	}, { typeSelectProps: be } = fe({
		keyboardDelegate: n,
		selectionManager: t
	});
	ee || (Q = g(be, Q));
	let $;
	S || ($ = t.focusedKey == null ? 0 : -1);
	let xe = le(t.collection);
	return { collectionProps: g(Q, {
		tabIndex: $,
		"data-collection": xe
	}) };
}
var he = 500;
function q(e) {
	let { isDisabled: t, pointerType: n, onLongPressStart: r, onLongPressEnd: i, onLongPress: a, threshold: o = he, accessibilityDescription: s } = e, c = (0, N.useRef)(void 0), { addGlobalListener: l, removeAllGlobalListeners: u } = b(), d = (e) => n ? e.pointerType === n : e.pointerType === `mouse` || e.pointerType === `touch`, { pressProps: f } = S({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), d(e)) {
				r && r({
					...e,
					type: `longpressstart`
				}), c.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent(`pointercancel`, { bubbles: !0 })), l(e.target, `click`, (e) => e.preventDefault(), { once: !0 }), y(e.target).activeElement !== e.target && x(e.target), a && a({
						...e,
						type: `longpress`
					}), c.current = void 0;
				}, o), e.pointerType === `touch` && l(e.target, `contextmenu`, (e) => e.preventDefault(), { once: !0 });
				let t = ee(e.target);
				l(t, `pointerup`, () => {
					setTimeout(() => {
						u();
					}, 100);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			c.current && clearTimeout(c.current), i && d(e) && i({
				...e,
				type: `longpressend`
			});
		}
	}), p = W(a && !t ? s : void 0);
	return { longPressProps: g(f, p) };
}
function ge(e) {
	let { id: t, selectionManager: n, key: r, ref: a, shouldSelectOnPressUp: o, shouldUseVirtualFocus: l, focus: u, isDisabled: d, onAction: p, allowsDifferentPressOrigin: h, linkBehavior: _ = `action` } = e, y = s();
	t = C(t);
	let b = (e) => {
		if (e.pointerType === `keyboard` && se(e)) n.toggleSelection(r);
		else {
			if (n.selectionMode === `none`) return;
			if (n.isLink(r)) {
				if (_ === `selection` && a.current) {
					let t = n.getItemProps(r);
					y.open(a.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				}
				if (_ === `override` || _ === `none`) return;
			}
			n.selectionMode === `single` ? n.isSelected(r) && !n.disallowEmptySelection ? n.toggleSelection(r) : n.replaceSelection(r) : e && e.shiftKey ? n.extendSelection(r) : n.selectionBehavior === `toggle` || e && (D(e) || e.pointerType === `touch` || e.pointerType === `virtual`) ? n.toggleSelection(r) : n.replaceSelection(r);
		}
	};
	(0, N.useEffect)(() => {
		r === n.focusedKey && n.isFocused && (l ? ne(a.current) : u ? u() : f() !== a.current && a.current && m(a.current));
	}, [
		a,
		r,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		l
	]), d ||= n.isDisabled(r);
	let x = {};
	!l && !d ? x = {
		tabIndex: r === n.focusedKey ? 0 : -1,
		onFocus(e) {
			c(e) === a.current && n.setFocusedKey(r);
		}
	} : d && (x.onMouseDown = (e) => {
		e.preventDefault();
	}), (0, N.useEffect)(() => {
		d && n.focusedKey === r && n.setFocusedKey(null);
	}, [
		n,
		d,
		r
	]);
	let ee = n.isLink(r) && _ === `override`, te = p && e.UNSTABLE_itemBehavior === `action`, T = n.isLink(r) && _ !== `selection` && _ !== `none`, E = !d && n.canSelectItem(r) && !ee && !te, O = (p || T) && !d, k = O && (n.selectionBehavior === `replace` ? !E : !E || n.isEmpty), A = O && E && n.selectionBehavior === `replace`, j = k || A, M = (0, N.useRef)(null), P = j && E, F = (0, N.useRef)(!1), I = (0, N.useRef)(!1), L = n.getItemProps(r), R = (e) => {
		p && (p(), a.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`, { bubbles: !0 }))), T && a.current && y.open(a.current, e, L.href, L.routerOptions);
	}, z = { ref: a };
	o ? (z.onPressStart = (e) => {
		M.current = e.pointerType, F.current = P, e.pointerType === `keyboard` && (!j || J(e.key)) && b(e);
	}, h ? (z.onPressUp = k ? void 0 : (e) => {
		e.pointerType === `mouse` && E && b(e);
	}, z.onPress = k ? R : (e) => {
		e.pointerType !== `keyboard` && e.pointerType !== `mouse` && E && b(e);
	}) : z.onPress = (e) => {
		if (k || A && e.pointerType !== `mouse`) {
			if (e.pointerType === `keyboard` && !_e(e.key)) return;
			R(e);
		} else e.pointerType !== `keyboard` && E && b(e);
	}) : (z.onPressStart = (e) => {
		M.current = e.pointerType, F.current = P, I.current = k, E && (e.pointerType === `mouse` && !k || e.pointerType === `keyboard` && (!O || J(e.key))) && b(e);
	}, z.onPress = (e) => {
		(e.pointerType === `touch` || e.pointerType === `pen` || e.pointerType === `virtual` || e.pointerType === `keyboard` && j && _e(e.key) || e.pointerType === `mouse` && I.current) && (j ? R(e) : E && b(e));
	});
	let B = ue(n.collection);
	if (x[`data-collection`] = B, x[`data-key`] = r, z.preventFocusOnPress = l, l && (z = g(z, {
		onPressStart(e) {
			e.pointerType !== `touch` && (n.setFocused(!0), n.setFocusedKey(r));
		},
		onPress(e) {
			e.pointerType === `touch` && (n.setFocused(!0), n.setFocusedKey(r));
		}
	})), L) for (let e of [
		`onPressStart`,
		`onPressEnd`,
		`onPressChange`,
		`onPress`,
		`onPressUp`,
		`onClick`
	]) L[e] && (z[e] = w(z[e], L[e]));
	let { pressProps: V, isPressed: H } = S(z), re = A ? (e) => {
		M.current === `mouse` && (e.stopPropagation(), e.preventDefault(), R(e));
	} : void 0, { longPressProps: ie } = q({
		isDisabled: !P,
		onLongPress(e) {
			e.pointerType === `touch` && (b(e), n.setSelectionBehavior(`toggle`));
		}
	}), ae = (e) => {
		M.current === `touch` && F.current && e.preventDefault();
	}, oe = _ !== `none` && n.isLink(r) ? (e) => {
		v.isOpening || e.preventDefault();
	} : void 0, U = g(x, E || k || l && !d ? V : {}, P ? ie : {}, {
		onDoubleClick: re,
		onDragStartCapture: ae,
		onClick: oe,
		id: t
	}, l ? { onMouseDown: (e) => e.preventDefault() } : void 0), W = (e) => {
		let t = e;
		for (; t && t !== a.current;) {
			let e = t.getAttribute(`data-collection`);
			if (e != null) return e !== B;
			t = t.parentElement;
		}
		return i(e);
	}, G = U.onPointerDown;
	U.onPointerDown = (e) => {
		let t = c(e);
		t && t !== a.current && W(t) ? e.stopPropagation() : G?.(e);
	};
	let ce = U.onMouseDown;
	return U.onMouseDown = (e) => {
		let t = c(e);
		t && t !== a.current && W(t) ? e.stopPropagation() : ce?.(e);
	}, {
		itemProps: U,
		isPressed: H,
		isSelected: n.isSelected(r),
		isFocused: n.isFocused && n.focusedKey === r,
		isDisabled: d,
		allowsSelection: E,
		hasAction: j
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
	let t = N.version.split(`.`);
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
	let { selectionMode: t = `none`, disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: r, selectionBehavior: i = `toggle`, disabledBehavior: a = `all` } = e, o = (0, N.useRef)(!1), [, s] = (0, N.useState)(!1), c = (0, N.useRef)(null), l = (0, N.useRef)(null), [, u] = (0, N.useState)(null), d = (0, N.useMemo)(() => Ce(e.selectedKeys), [e.selectedKeys]), f = (0, N.useMemo)(() => Ce(e.defaultSelectedKeys, new $()), [e.defaultSelectedKeys]), [p, m] = A(d, f, e.onSelectionChange), h = (0, N.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), [g, _] = (0, N.useState)(i);
	i === `replace` && g === `toggle` && typeof p == `object` && p.size === 0 && _(`replace`);
	let v = (0, N.useRef)(i);
	return (0, N.useEffect)(() => {
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
		if (N.isValidElement(t) && t.type === N.Fragment) yield* this.iterateCollection({
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
			N.Children.forEach(t, (t) => {
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
		if (N.isValidElement(e.element) && e.element.type === N.Fragment) {
			let i = [];
			N.Children.forEach(e.element.props.children, (e) => {
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
		if (N.isValidElement(i)) {
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
	let r = (0, N.useMemo)(() => new Te(), []), { children: i, items: a, collection: o } = e;
	return (0, N.useMemo)(() => o || t(r.build({
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
export { L as _, Y as a, F as b, ve as c, me as d, fe as f, B as g, ie as h, be as i, ge as l, W as m, we as n, X as o, G as p, Se as r, ye as s, ke as t, q as u, R as v, P as x, z as y };
