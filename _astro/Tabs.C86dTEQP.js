import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, At as n, Q as r, an as i, ct as a, dn as o, ft as s, hn as c, mn as l, on as u, pn as d, sn as f, st as p, vn as m, vt as h, yt as g } from "./doc.DoLlUurT.js";
import { b as _, d as v, i as y, l as b, v as x, y as S } from "./useCollection.DWoaItNc.js";
import { c as C, s as w } from "./FocusScope.bOWhljI-.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { t as E } from "./useHasTabbableChild.CbGT5Z8c.js";
import { d as D, i as O, n as k, t as A } from "./CollectionBuilder.Dfbyz3n6.js";
import { t as j } from "./useListState.CZccHHkQ.js";
import { t as M } from "./useControlledState.DijOhE0s.js";
import { n as N, t as P } from "./animation.CUSrSj7t.js";
var F = new WeakMap();
function I(e, t, n) {
	return e ? (typeof t == `string` && (t = t.replace(/\s+/g, ``)), `${F.get(e)}-${n}-${t}`) : ``;
}
function L(e, t, r) {
	let { key: i, isDisabled: a, shouldSelectOnPressUp: o } = e, { selectionManager: l, selectedKey: u } = t, d = i === u, f = a || t.isDisabled || t.selectionManager.isDisabled(i), m = t.collection.getItem(i), { itemProps: h, isPressed: g } = b({
		selectionManager: l,
		key: i,
		ref: r,
		isDisabled: f,
		shouldSelectOnPressUp: o ?? m?.props.href != null,
		linkBehavior: `selection`
	}), _ = I(t, i, `tab`), v = I(t, i, `tabpanel`), { tabIndex: y } = h, x = p(m?.props, { labelable: !0 });
	delete x.id;
	let S = n(m?.props), { focusableProps: C } = s({
		...m?.props,
		isDisabled: f
	}, r);
	return {
		tabProps: c(x, C, S, h, {
			id: _,
			"aria-selected": d,
			"aria-disabled": f || void 0,
			"aria-controls": d ? v : void 0,
			tabIndex: f ? void 0 : y,
			role: `tab`
		}),
		isSelected: d,
		isDisabled: f,
		isPressed: g
	};
}
function R(e, t, n) {
	let r = E(n) ? void 0 : 0, i = I(t, e.id ?? t?.selectedKey, `tabpanel`), a = g({
		...e,
		id: i,
		"aria-labelledby": I(t, t?.selectedKey, `tab`)
	});
	return { tabPanelProps: c(a, {
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
}, B = e(T(), 1);
function V(e, t, n) {
	let { orientation: r = `horizontal`, keyboardActivation: i = `automatic` } = e, { collection: a, selectionManager: o, disabledKeys: s } = t, { direction: l } = h(), u = (0, B.useMemo)(() => new z(a, l, r, s), [
		a,
		s,
		r,
		l
	]), { collectionProps: d } = v({
		ref: n,
		selectionManager: o,
		keyboardDelegate: u,
		selectOnFocus: i === `automatic`,
		disallowEmptySelection: !0,
		scrollRef: n,
		linkBehavior: `selection`
	}), f = m();
	F.set(t, f);
	let p = g({
		...e,
		id: f
	});
	return { tabListProps: {
		...c(d, p),
		role: `tablist`,
		"aria-orientation": r,
		tabIndex: void 0
	} };
}
function H(e) {
	let [t, n] = M(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange), r = (0, B.useMemo)(() => t == null ? [] : [t], [t]), { collection: i, disabledKeys: a, selectionManager: o } = j({
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
	[e, t] = u(e, t, G);
	let { children: n, orientation: r = `horizontal` } = e;
	return n = (0, B.useMemo)(() => typeof n == `function` ? n({
		orientation: r,
		defaultChildren: null
	}) : n, [n, r]), B.createElement(k, { content: n }, (n) => B.createElement(J, {
		props: e,
		collection: n,
		tabsRef: t
	}));
});
function J({ props: e, tabsRef: n, collection: r }) {
	let { orientation: a = `horizontal` } = e, s = U({
		...e,
		collection: r,
		children: void 0
	}), { focusProps: l, isFocused: u, isFocusVisible: d } = t({ within: !0 }), m = (0, B.useMemo)(() => ({
		orientation: a,
		isFocusWithin: u,
		isFocusVisible: d
	}), [
		a,
		u,
		d
	]), h = f({
		...e,
		defaultClassName: `react-aria-Tabs`,
		values: m
	}), g = p(e, { global: !0 });
	return B.createElement(o.div, {
		...c(g, h, l),
		ref: n,
		slot: e.slot || void 0,
		"data-focused": u || void 0,
		"data-orientation": a,
		"data-focus-visible": d || void 0,
		"data-disabled": s.isDisabled || void 0
	}, B.createElement(i, { values: [[G, e], [K, s]] }, h.children));
}
var Y = (0, B.forwardRef)(function(e, t) {
	return (0, B.useContext)(K) ? B.createElement(X, {
		props: e,
		forwardedRef: t
	}) : B.createElement(O, e);
});
function X({ props: e, forwardedRef: t }) {
	let n = (0, B.useContext)(K), { CollectionRoot: r } = (0, B.useContext)(x), { orientation: i = `horizontal`, keyboardActivation: a = `automatic` } = d(G), s = l(t), { tabListProps: u } = V({
		...e,
		orientation: i,
		keyboardActivation: a
	}, n, s), m = f({
		...e,
		children: null,
		defaultClassName: `react-aria-TabList`,
		values: {
			orientation: i,
			state: n
		}
	}), h = p(e, { global: !0 });
	return delete h.id, B.createElement(o.div, {
		...c(h, m, u),
		ref: s,
		"data-orientation": i || void 0
	}, B.createElement(C, null, B.createElement(r, {
		collection: n.collection,
		persistedKeys: S(n.selectionManager.focusedKey)
	})));
}
var Z = class extends D {
	static {
		this.type = `item`;
	}
}, Q = A(Z, (e, n, i) => {
	let a = (0, B.useContext)(K), s = l(n), { tabProps: u, isSelected: d, isDisabled: m, isPressed: h } = L({
		key: i.key,
		...e
	}, a, s), { focusProps: g, isFocused: _, isFocusVisible: v } = t(), { hoverProps: y, isHovered: b } = r({
		isDisabled: m,
		onHoverStart: e.onHoverStart,
		onHoverEnd: e.onHoverEnd,
		onHoverChange: e.onHoverChange
	}), x = f({
		...e,
		id: void 0,
		children: i.rendered,
		defaultClassName: `react-aria-Tab`,
		values: {
			isSelected: d,
			isDisabled: m,
			isFocused: _,
			isFocusVisible: v,
			isPressed: h,
			isHovered: b
		}
	}), S = i.props.href ? o.a : o.div, C = p(e, { global: !0 });
	return delete C.id, delete C.onClick, B.createElement(S, {
		...c(C, x, u, g, y),
		ref: s,
		"data-selected": d || void 0,
		"data-disabled": m || void 0,
		"data-focused": _ || void 0,
		"data-focus-visible": v || void 0,
		"data-pressed": h || void 0,
		"data-hovered": b || void 0
	}, B.createElement(w.Provider, { value: { isSelected: d } }, x.children));
}), $ = a(function(e, t) {
	let n = (0, B.useContext)(K), r = l(t), i = n.selectedKey === e.id, [a, o] = (0, B.useState)(n.selectedKey == null ? null : i);
	a == null && n.selectedKey != null ? o(i) : !i && a && o(!1);
	let s = P(r, i);
	return !i && !e.shouldForceMount && !s ? null : B.createElement(ee, {
		...e,
		tabPanelRef: r,
		isInitiallySelected: a || !1,
		isExiting: s
	});
});
function ee(e) {
	let n = (0, B.useContext)(K), { id: r, tabPanelRef: a, isInitiallySelected: s, isExiting: l, ...u } = e, { tabPanelProps: d } = R(e, n, a), { focusProps: m, isFocused: h, isFocusVisible: g } = t(), v = n.selectedKey === e.id, b = N(a) && !s, S = f({
		...e,
		defaultClassName: `react-aria-TabPanel`,
		values: {
			isFocused: h,
			isFocusVisible: g,
			isInert: y(!v),
			isEntering: b,
			isExiting: l,
			state: n
		}
	}), C = p(u, { global: !0 });
	delete C.id;
	let w = v ? c(C, d, m, S) : c(C, S);
	return B.createElement(o.div, {
		...w,
		ref: a,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		inert: y(!v || e.inert),
		"data-inert": v ? void 0 : `true`,
		"data-entering": b || void 0,
		"data-exiting": l || void 0
	}, B.createElement(i, { values: [[G, null], [K, null]] }, B.createElement(x.Provider, { value: _ }, S.children)));
}
export { Y as i, Q as n, q as r, $ as t };
