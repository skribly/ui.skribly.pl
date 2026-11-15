import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, bt as n, cn as r, ct as i, et as a, fn as o, gn as s, hn as c, jt as l, lt as u, mn as d, on as f, pt as p, sn as m, yn as h, yt as g } from "./doc.C_PtMNUB.js";
import { b as _, d as v, i as y, l as b, v as x, y as S } from "./useCollection.Cn_I2nJQ.js";
import { c as C, s as w } from "./FocusScope.DSjTtRFm.js";
import { n as T } from "./react-dom.B9zIfLd2.js";
import { t as E } from "./useHasTabbableChild.BFziLQ1o.js";
import { d as D, i as O, n as k, t as A } from "./CollectionBuilder.BW1Ria3_.js";
import { t as j } from "./useListState.B_9ND7CB.js";
import { t as M } from "./useControlledState.DijOhE0s.js";
import { n as N, t as P } from "./animation.DuWuxfeU.js";
var F = new WeakMap();
function I(e, t, n) {
	return e ? (typeof t == `string` && (t = t.replace(/\s+/g, ``)), `${F.get(e)}-${n}-${t}`) : ``;
}
function L(e, t, n) {
	let { key: r, isDisabled: a, shouldSelectOnPressUp: o } = e, { selectionManager: c, selectedKey: u } = t, d = r === u, f = a || t.isDisabled || t.selectionManager.isDisabled(r), m = t.collection.getItem(r), { itemProps: h, isPressed: g } = b({
		selectionManager: c,
		key: r,
		ref: n,
		isDisabled: f,
		shouldSelectOnPressUp: o ?? m?.props.href != null,
		linkBehavior: `selection`
	}), _ = I(t, r, `tab`), v = I(t, r, `tabpanel`), { tabIndex: y } = h, x = i(m?.props, { labelable: !0 });
	delete x.id;
	let S = l(m?.props), { focusableProps: C } = p({
		...m?.props,
		isDisabled: f
	}, n);
	return {
		tabProps: s(x, C, S, h, {
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
function R(e, t, r) {
	let i = E(r) ? void 0 : 0, a = I(t, e.id ?? t?.selectedKey, `tabpanel`), o = n({
		...e,
		id: a,
		"aria-labelledby": I(t, t?.selectedKey, `tab`)
	});
	return { tabPanelProps: s(o, {
		tabIndex: i,
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
function V(e, t, r) {
	let { orientation: i = `horizontal`, keyboardActivation: a = `automatic` } = e, { collection: o, selectionManager: c, disabledKeys: l } = t, { direction: u } = g(), d = (0, B.useMemo)(() => new z(o, u, i, l), [
		o,
		l,
		i,
		u
	]), { collectionProps: f } = v({
		ref: r,
		selectionManager: c,
		keyboardDelegate: d,
		selectOnFocus: a === `automatic`,
		disallowEmptySelection: !0,
		scrollRef: r,
		linkBehavior: `selection`
	}), p = h();
	F.set(t, p);
	let m = n({
		...e,
		id: p
	});
	return { tabListProps: {
		...s(f, m),
		role: `tablist`,
		"aria-orientation": i,
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
	[e, t] = m(e, t, G);
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
	let { orientation: c = `horizontal` } = e, l = U({
		...e,
		collection: n,
		children: void 0
	}), { focusProps: u, isFocused: d, isFocusVisible: p } = a({ within: !0 }), m = (0, B.useMemo)(() => ({
		orientation: c,
		isFocusWithin: d,
		isFocusVisible: p
	}), [
		c,
		d,
		p
	]), h = r({
		...e,
		defaultClassName: `react-aria-Tabs`,
		values: m
	}), g = i(e, { global: !0 });
	return B.createElement(o.div, {
		...s(g, h, u),
		ref: t,
		slot: e.slot || void 0,
		"data-focused": d || void 0,
		"data-orientation": c,
		"data-focus-visible": p || void 0,
		"data-disabled": l.isDisabled || void 0
	}, B.createElement(f, { values: [[G, e], [K, l]] }, h.children));
}
var Y = (0, B.forwardRef)(function(e, t) {
	return (0, B.useContext)(K) ? B.createElement(X, {
		props: e,
		forwardedRef: t
	}) : B.createElement(O, e);
});
function X({ props: e, forwardedRef: t }) {
	let n = (0, B.useContext)(K), { CollectionRoot: a } = (0, B.useContext)(x), { orientation: l = `horizontal`, keyboardActivation: u = `automatic` } = d(G), f = c(t), { tabListProps: p } = V({
		...e,
		orientation: l,
		keyboardActivation: u
	}, n, f), m = r({
		...e,
		children: null,
		defaultClassName: `react-aria-TabList`,
		values: {
			orientation: l,
			state: n
		}
	}), h = i(e, { global: !0 });
	return delete h.id, B.createElement(o.div, {
		...s(h, m, p),
		ref: f,
		"data-orientation": l || void 0
	}, B.createElement(C, null, B.createElement(a, {
		collection: n.collection,
		persistedKeys: S(n.selectionManager.focusedKey)
	})));
}
var Z = class extends D {
	static {
		this.type = `item`;
	}
}, Q = A(Z, (e, n, l) => {
	let u = (0, B.useContext)(K), d = c(n), { tabProps: f, isSelected: p, isDisabled: m, isPressed: h } = L({
		key: l.key,
		...e
	}, u, d), { focusProps: g, isFocused: _, isFocusVisible: v } = a(), { hoverProps: y, isHovered: b } = t({
		isDisabled: m,
		onHoverStart: e.onHoverStart,
		onHoverEnd: e.onHoverEnd,
		onHoverChange: e.onHoverChange
	}), x = r({
		...e,
		id: void 0,
		children: l.rendered,
		defaultClassName: `react-aria-Tab`,
		values: {
			isSelected: p,
			isDisabled: m,
			isFocused: _,
			isFocusVisible: v,
			isPressed: h,
			isHovered: b
		}
	}), S = l.props.href ? o.a : o.div, C = i(e, { global: !0 });
	return delete C.id, delete C.onClick, B.createElement(S, {
		...s(C, x, f, g, y),
		ref: d,
		"data-selected": p || void 0,
		"data-disabled": m || void 0,
		"data-focused": _ || void 0,
		"data-focus-visible": v || void 0,
		"data-pressed": h || void 0,
		"data-hovered": b || void 0
	}, B.createElement(w.Provider, { value: { isSelected: p } }, x.children));
}), $ = u(function(e, t) {
	let n = (0, B.useContext)(K), r = c(t), i = n.selectedKey === e.id, [a, o] = (0, B.useState)(n.selectedKey == null ? null : i);
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
	let t = (0, B.useContext)(K), { id: n, tabPanelRef: c, isInitiallySelected: l, isExiting: u, ...d } = e, { tabPanelProps: p } = R(e, t, c), { focusProps: m, isFocused: h, isFocusVisible: g } = a(), v = t.selectedKey === e.id, b = N(c) && !l, S = r({
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
	let w = v ? s(C, p, m, S) : s(C, S);
	return B.createElement(o.div, {
		...w,
		ref: c,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		inert: y(!v || e.inert),
		"data-inert": v ? void 0 : `true`,
		"data-entering": b || void 0,
		"data-exiting": u || void 0
	}, B.createElement(f, { values: [[G, null], [K, null]] }, B.createElement(x.Provider, { value: _ }, S.children)));
}
export { Y as i, Q as n, q as r, $ as t };
