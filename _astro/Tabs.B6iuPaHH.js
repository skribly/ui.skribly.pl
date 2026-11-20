import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, Bt as r, H as i, Ht as a, Jt as o, Kt as s, N as c, P as l, U as u, Vt as d, Xt as f, Yt as p, dt as m, et as h, q as g } from "./useOverflow.Dq483xd0.js";
import { b as _, d as v, i as y, l as b, v as x, y as S } from "./useCollection.DQc_Iacd.js";
import { c as C, s as w } from "./FocusScope.aBBixRPA.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { t as E } from "./useHasTabbableChild.CNAJ57B9.js";
import { d as D, i as O, n as k, t as A } from "./CollectionBuilder.OeX_9-Zv.js";
import { t as j } from "./useListState.PwXH_dUi.js";
import { t as M } from "./useControlledState.DijOhE0s.js";
import { n as N, t as P } from "./animation.g7Aw7eVY.js";
var F = new WeakMap();
function I(e, t, n) {
	return e ? (typeof t == `string` && (t = t.replace(/\s+/g, ``)), `${F.get(e)}-${n}-${t}`) : ``;
}
function L(e, t, n) {
	let { key: r, isDisabled: a, shouldSelectOnPressUp: o } = e, { selectionManager: s, selectedKey: c } = t, l = r === c, u = a || t.isDisabled || t.selectionManager.isDisabled(r), d = t.collection.getItem(r), { itemProps: p, isPressed: h } = b({
		selectionManager: s,
		key: r,
		ref: n,
		isDisabled: u,
		shouldSelectOnPressUp: o ?? d?.props.href != null,
		linkBehavior: `selection`
	}), _ = I(t, r, `tab`), v = I(t, r, `tabpanel`), { tabIndex: y } = p, x = i(d?.props, { labelable: !0 });
	delete x.id;
	let S = m(d?.props), { focusableProps: C } = g({
		...d?.props,
		isDisabled: u
	}, n);
	return {
		tabProps: f(x, C, S, p, {
			id: _,
			"aria-selected": l,
			"aria-disabled": u || void 0,
			"aria-controls": l ? v : void 0,
			tabIndex: u ? void 0 : y,
			role: `tab`
		}),
		isSelected: l,
		isDisabled: u,
		isPressed: h
	};
}
function R(e, t, n) {
	let r = E(n) ? void 0 : 0, i = I(t, e.id ?? t?.selectedKey, `tabpanel`), a = h({
		...e,
		id: i,
		"aria-labelledby": I(t, t?.selectedKey, `tab`)
	});
	return { tabPanelProps: f(a, {
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
function V(e, r, i) {
	let { orientation: a = `horizontal`, keyboardActivation: o = `automatic` } = e, { collection: s, selectionManager: c, disabledKeys: l } = r, { direction: u } = t(), d = (0, B.useMemo)(() => new z(s, u, a, l), [
		s,
		l,
		a,
		u
	]), { collectionProps: p } = v({
		ref: i,
		selectionManager: c,
		keyboardDelegate: d,
		selectOnFocus: o === `automatic`,
		disallowEmptySelection: !0,
		scrollRef: i,
		linkBehavior: `selection`
	}), m = n();
	F.set(r, m);
	let g = h({
		...e,
		id: m
	});
	return { tabListProps: {
		...f(p, g),
		role: `tablist`,
		"aria-orientation": a,
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
	[e, t] = d(e, t, G);
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
function J({ props: e, tabsRef: t, collection: n }) {
	let { orientation: o = `horizontal` } = e, c = U({
		...e,
		collection: n,
		children: void 0
	}), { focusProps: u, isFocused: d, isFocusVisible: p } = l({ within: !0 }), m = (0, B.useMemo)(() => ({
		orientation: o,
		isFocusWithin: d,
		isFocusVisible: p
	}), [
		o,
		d,
		p
	]), h = a({
		...e,
		defaultClassName: `react-aria-Tabs`,
		values: m
	}), g = i(e, { global: !0 });
	return B.createElement(s.div, {
		...f(g, h, u),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": d || void 0,
		"data-orientation": o,
		"data-focus-visible": p || void 0,
		"data-disabled": c.isDisabled || void 0
	}, B.createElement(r, { values: [[G, e], [K, c]] }, h.children));
}
var Y = (0, B.forwardRef)(function(e, t) {
	return (0, B.useContext)(K) ? B.createElement(X, {
		props: e,
		forwardedRef: t
	}) : B.createElement(O, e);
});
function X({ props: e, forwardedRef: t }) {
	let n = (0, B.useContext)(K), { CollectionRoot: r } = (0, B.useContext)(x), { orientation: c = `horizontal`, keyboardActivation: l = `automatic` } = o(G), u = p(t), { tabListProps: d } = V({
		...e,
		orientation: c,
		keyboardActivation: l
	}, n, u), m = a({
		...e,
		children: null,
		defaultClassName: `react-aria-TabList`,
		values: {
			orientation: c,
			state: n
		}
	}), h = i(e, { global: !0 });
	return delete h.id, B.createElement(s.div, {
		...f(h, m, d),
		ref: u,
		"data-orientation": c || void 0
	}, B.createElement(C, null, B.createElement(r, {
		collection: n.collection,
		persistedKeys: S(n.selectionManager.focusedKey)
	})));
}
var Z = class extends D {
	static {
		this.type = `item`;
	}
}, Q = A(Z, (e, t, n) => {
	let r = (0, B.useContext)(K), o = p(t), { tabProps: u, isSelected: d, isDisabled: m, isPressed: h } = L({
		key: n.key,
		...e
	}, r, o), { focusProps: g, isFocused: _, isFocusVisible: v } = l(), { hoverProps: y, isHovered: b } = c({
		isDisabled: m,
		onHoverStart: e.onHoverStart,
		onHoverEnd: e.onHoverEnd,
		onHoverChange: e.onHoverChange
	}), x = a({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-Tab`,
		values: {
			isSelected: d,
			isDisabled: m,
			isFocused: _,
			isFocusVisible: v,
			isPressed: h,
			isHovered: b
		}
	}), S = n.props.href ? s.a : s.div, C = i(e, { global: !0 });
	return delete C.id, delete C.onClick, B.createElement(S, {
		...f(C, x, u, g, y),
		ref: o,
		"data-selected": d || void 0,
		"data-disabled": m || void 0,
		"data-focused": _ || void 0,
		"data-focus-visible": v || void 0,
		"data-pressed": h || void 0,
		"data-hovered": b || void 0
	}, B.createElement(w.Provider, { value: { isSelected: d } }, x.children));
}), $ = u(function(e, t) {
	let n = (0, B.useContext)(K), r = p(t), i = n.selectedKey === e.id, [a, o] = (0, B.useState)(n.selectedKey == null ? null : i);
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
	let t = (0, B.useContext)(K), { id: n, tabPanelRef: o, isInitiallySelected: c, isExiting: u, ...d } = e, { tabPanelProps: p } = R(e, t, o), { focusProps: m, isFocused: h, isFocusVisible: g } = l(), v = t.selectedKey === e.id, b = N(o) && !c, S = a({
		...e,
		defaultClassName: `react-aria-TabPanel`,
		values: {
			isFocused: h,
			isFocusVisible: g,
			isInert: y(!v),
			isEntering: b,
			isExiting: u,
			state: t
		}
	}), C = i(d, { global: !0 });
	delete C.id;
	let w = v ? f(C, p, m, S) : f(C, S);
	return B.createElement(s.div, {
		...w,
		ref: o,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		inert: y(!v || e.inert),
		"data-inert": v ? void 0 : `true`,
		"data-entering": b || void 0,
		"data-exiting": u || void 0
	}, B.createElement(r, { values: [[G, null], [K, null]] }, B.createElement(x.Provider, { value: _ }, S.children)));
}
export { Y as i, Q as n, q as r, $ as t };
