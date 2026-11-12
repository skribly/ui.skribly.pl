import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { At as t, D as n, E as r, Et as i, L as a, Lt as o, Mt as s, Nt as c, Pt as l, R as u, Tt as d, Y as f, _ as p, j as m, v as h, wt as g } from "./createLucideIcon.npgQlVHx.js";
import { S as _, b as v, d as y, n as b, o as x, p as S, t as C, x as w } from "./animation.BhtQe7Yj.js";
import { c as T, s as E } from "./FocusScope.Ba7RJw7M.js";
import { n as D } from "./react-dom.B9zIfLd2.js";
import { t as O } from "./useHasTabbableChild.0G0vV4YD.js";
import { d as k, i as A, n as j, t as M } from "./CollectionBuilder.Bxdh8Jqj.js";
import { t as N } from "./useListState.BvceJMy7.js";
import { t as P } from "./useControlledState.DijOhE0s.js";
var F = new WeakMap();
function I(e, t, n) {
	return e ? (typeof t == `string` && (t = t.replace(/\s+/g, ``)), `${F.get(e)}-${n}-${t}`) : ``;
}
function L(e, t, n) {
	let { key: i, isDisabled: a, shouldSelectOnPressUp: o } = e, { selectionManager: s, selectedKey: c } = t, u = i === c, d = a || t.isDisabled || t.selectionManager.isDisabled(i), p = t.collection.getItem(i), { itemProps: h, isPressed: g } = y({
		selectionManager: s,
		key: i,
		ref: n,
		isDisabled: d,
		shouldSelectOnPressUp: o ?? p?.props.href != null,
		linkBehavior: `selection`
	}), _ = I(t, i, `tab`), v = I(t, i, `tabpanel`), { tabIndex: b } = h, x = r(p?.props, { labelable: !0 });
	delete x.id;
	let S = f(p?.props), { focusableProps: C } = m({
		...p?.props,
		isDisabled: d
	}, n);
	return {
		tabProps: l(x, C, S, h, {
			id: _,
			"aria-selected": u,
			"aria-disabled": d || void 0,
			"aria-controls": u ? v : void 0,
			tabIndex: d ? void 0 : b,
			role: `tab`
		}),
		isSelected: u,
		isDisabled: d,
		isPressed: g
	};
}
function R(e, t, n) {
	let r = O(n) ? void 0 : 0, i = I(t, e.id ?? t?.selectedKey, `tabpanel`), a = u({
		...e,
		id: i,
		"aria-labelledby": I(t, t?.selectedKey, `tab`)
	});
	return { tabPanelProps: l(a, {
		tabIndex: r,
		role: `tabpanel`,
		"aria-describedby": e[`aria-describedby`],
		"aria-details": e[`aria-details`]
	}) };
}
var z = class {
	constructor(e, t, n, r = new Set()) {
		this.collection = e, this.flipDirection = t === `rtl`, this.disabledKeys = r, this.tabDirection = n === `horizontal`;
	}
	getKeyLeftOf(e) {
		return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
	}
	getKeyRightOf(e) {
		return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
	}
	isDisabled(e) {
		return this.disabledKeys.has(e) || !!this.collection.getItem(e)?.props?.isDisabled;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		return e != null && this.isDisabled(e) && (e = this.getNextKey(e)), e;
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		return e != null && this.isDisabled(e) && (e = this.getPreviousKey(e)), e;
	}
	getKeyAbove(e) {
		return this.tabDirection ? null : this.getPreviousKey(e);
	}
	getKeyBelow(e) {
		return this.tabDirection ? null : this.getNextKey(e);
	}
	getNextKey(e) {
		let t = e;
		do
			t = this.collection.getKeyAfter(t), t ??= this.collection.getFirstKey();
		while (t != null && this.isDisabled(t) && t !== e);
		return t;
	}
	getPreviousKey(e) {
		let t = e;
		do
			t = this.collection.getKeyBefore(t), t ??= this.collection.getLastKey();
		while (t != null && this.isDisabled(t) && t !== e);
		return t;
	}
}, B = e(D(), 1);
function V(e, t, n) {
	let { orientation: r = `horizontal`, keyboardActivation: i = `automatic` } = e, { collection: s, selectionManager: c, disabledKeys: d } = t, { direction: f } = a(), p = (0, B.useMemo)(() => new z(s, f, r, d), [
		s,
		d,
		r,
		f
	]), { collectionProps: m } = S({
		ref: n,
		selectionManager: c,
		keyboardDelegate: p,
		selectOnFocus: i === `automatic`,
		disallowEmptySelection: !0,
		scrollRef: n,
		linkBehavior: `selection`
	}), h = o();
	F.set(t, h);
	let g = u({
		...e,
		id: h
	});
	return { tabListProps: {
		...l(m, g),
		role: `tablist`,
		"aria-orientation": r,
		tabIndex: void 0
	} };
}
function H(e) {
	let [t, n] = P(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange), r = (0, B.useMemo)(() => t == null ? [] : [t], [t]), { collection: i, disabledKeys: a, selectionManager: o } = N({
		...e,
		selectionMode: `single`,
		disallowEmptySelection: !0,
		allowDuplicateSelectionEvents: !0,
		selectedKeys: r,
		onSelectionChange: (r) => {
			if (r === `all`) return;
			let i = r.values().next().value ?? null;
			i === t && e.onSelectionChange && e.onSelectionChange(i), n(i);
		}
	});
	return {
		collection: i,
		disabledKeys: a,
		selectionManager: o,
		selectedKey: t,
		setSelectedKey: n,
		selectedItem: t == null ? null : i.getItem(t)
	};
}
function U(e) {
	let t = H({
		...e,
		onSelectionChange: e.onSelectionChange ? (t) => {
			t != null && e.onSelectionChange?.(t);
		} : void 0,
		suppressTextValueWarning: !0,
		defaultSelectedKey: e.defaultSelectedKey ?? W(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set()) ?? void 0
	}), { selectionManager: n, collection: r, selectedKey: i } = t, a = (0, B.useRef)(i);
	return (0, B.useEffect)(() => {
		let o = i;
		e.selectedKey == null && (n.isEmpty || o == null || !r.getItem(o)) && (o = W(r, t.disabledKeys), o != null && n.setSelectedKeys([o])), (o != null && n.focusedKey == null || !n.isFocused && o !== a.current) && n.setFocusedKey(o), a.current = o;
	}), {
		...t,
		isDisabled: e.isDisabled || !1
	};
}
function W(e, t) {
	let n = null;
	if (e) {
		for (n = e.getFirstKey(); n != null && (t.has(n) || e.getItem(n)?.props?.isDisabled) && n !== e.getLastKey();) n = e.getKeyAfter(n);
		n != null && (t.has(n) || e.getItem(n)?.props?.isDisabled) && n === e.getLastKey() && (n = e.getFirstKey());
	}
	return n;
}
var G = (0, B.createContext)(null), K = (0, B.createContext)(null), q = (0, B.forwardRef)(function(e, t) {
	[e, t] = d(e, t, G);
	let { children: n, orientation: r = `horizontal` } = e;
	return n = (0, B.useMemo)(() => typeof n == `function` ? n({
		orientation: r,
		defaultChildren: null
	}) : n, [n, r]), B.createElement(j, { content: n }, (n) => B.createElement(J, {
		props: e,
		collection: n,
		tabsRef: t
	}));
});
function J({ props: e, tabsRef: n, collection: a }) {
	let { orientation: o = `horizontal` } = e, s = U({
		...e,
		collection: a,
		children: void 0
	}), { focusProps: c, isFocused: u, isFocusVisible: d } = h({ within: !0 }), f = (0, B.useMemo)(() => ({
		orientation: o,
		isFocusWithin: u,
		isFocusVisible: d
	}), [
		o,
		u,
		d
	]), p = i({
		...e,
		defaultClassName: `react-aria-Tabs`,
		values: f
	}), m = r(e, { global: !0 });
	return B.createElement(t.div, {
		...l(m, p, c),
		ref: n,
		slot: e.slot || void 0,
		"data-focused": u || void 0,
		"data-orientation": o,
		"data-focus-visible": d || void 0,
		"data-disabled": s.isDisabled || void 0
	}, B.createElement(g, { values: [[G, e], [K, s]] }, p.children));
}
var Y = (0, B.forwardRef)(function(e, t) {
	return (0, B.useContext)(K) ? B.createElement(X, {
		props: e,
		forwardedRef: t
	}) : B.createElement(A, e);
});
function X({ props: e, forwardedRef: n }) {
	let a = (0, B.useContext)(K), { CollectionRoot: o } = (0, B.useContext)(v), { orientation: u = `horizontal`, keyboardActivation: d = `automatic` } = s(G), f = c(n), { tabListProps: p } = V({
		...e,
		orientation: u,
		keyboardActivation: d
	}, a, f), m = i({
		...e,
		children: null,
		defaultClassName: `react-aria-TabList`,
		values: {
			orientation: u,
			state: a
		}
	}), h = r(e, { global: !0 });
	return delete h.id, B.createElement(t.div, {
		...l(h, m, p),
		ref: f,
		"data-orientation": u || void 0
	}, B.createElement(T, null, B.createElement(o, {
		collection: a.collection,
		persistedKeys: w(a.selectionManager.focusedKey)
	})));
}
var Z = class extends k {
	static {
		this.type = `item`;
	}
}, Q = M(Z, (e, n, a) => {
	let o = (0, B.useContext)(K), s = c(n), { tabProps: u, isSelected: d, isDisabled: f, isPressed: m } = L({
		key: a.key,
		...e
	}, o, s), { focusProps: g, isFocused: _, isFocusVisible: v } = h(), { hoverProps: y, isHovered: b } = p({
		isDisabled: f,
		onHoverStart: e.onHoverStart,
		onHoverEnd: e.onHoverEnd,
		onHoverChange: e.onHoverChange
	}), x = i({
		...e,
		id: void 0,
		children: a.rendered,
		defaultClassName: `react-aria-Tab`,
		values: {
			isSelected: d,
			isDisabled: f,
			isFocused: _,
			isFocusVisible: v,
			isPressed: m,
			isHovered: b
		}
	}), S = a.props.href ? t.a : t.div, C = r(e, { global: !0 });
	return delete C.id, delete C.onClick, B.createElement(S, {
		...l(C, x, u, g, y),
		ref: s,
		"data-selected": d || void 0,
		"data-disabled": f || void 0,
		"data-focused": _ || void 0,
		"data-focus-visible": v || void 0,
		"data-pressed": m || void 0,
		"data-hovered": b || void 0
	}, B.createElement(E.Provider, { value: { isSelected: d } }, x.children));
}), $ = n(function(e, t) {
	let n = (0, B.useContext)(K), r = c(t), i = n.selectedKey === e.id, [a, o] = (0, B.useState)(n.selectedKey == null ? null : i);
	a == null && n.selectedKey != null ? o(i) : !i && a && o(!1);
	let s = C(r, i);
	return !i && !e.shouldForceMount && !s ? null : B.createElement(ee, {
		...e,
		tabPanelRef: r,
		isInitiallySelected: a || !1,
		isExiting: s
	});
});
function ee(e) {
	let n = (0, B.useContext)(K), { id: a, tabPanelRef: o, isInitiallySelected: s, isExiting: c, ...u } = e, { tabPanelProps: d } = R(e, n, o), { focusProps: f, isFocused: p, isFocusVisible: m } = h(), y = n.selectedKey === e.id, S = b(o) && !s, C = i({
		...e,
		defaultClassName: `react-aria-TabPanel`,
		values: {
			isFocused: p,
			isFocusVisible: m,
			isInert: x(!y),
			isEntering: S,
			isExiting: c,
			state: n
		}
	}), w = r(u, { global: !0 });
	delete w.id;
	let T = y ? l(w, d, f, C) : l(w, C);
	return B.createElement(t.div, {
		...T,
		ref: o,
		"data-focused": p || void 0,
		"data-focus-visible": m || void 0,
		inert: x(!y || e.inert),
		"data-inert": y ? void 0 : `true`,
		"data-entering": S || void 0,
		"data-exiting": c || void 0
	}, B.createElement(g, { values: [[G, null], [K, null]] }, B.createElement(v.Provider, { value: _ }, C.children)));
}
export { Y as i, Q as n, q as r, $ as t };
