import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, At as n, Et as r, Q as i, Y as a, _n as o, an as s, cn as c, dn as l, et as u, gt as d, hn as f, ht as p, mn as m, on as h, sn as g, st as _, un as v, vn as y, vt as b, xn as x } from "./doc.DoLlUurT.js";
import { i as S, l as C, v as w, x as T } from "./useCollection.DWoaItNc.js";
import { n as E } from "./react-dom.B9zIfLd2.js";
import { a as D, c as O, i as k, n as A, r as j, t as M } from "./useLoadMoreSentinel.g4Y1QWZw.js";
import { r as ee } from "./Autocomplete.D4ncqRMy.js";
import { c as te, n as ne, s as re } from "./FocusScope.bOWhljI-.js";
import { n as ie } from "./Separator.BPVilYPy.js";
import { n as N } from "./Text.CWB1nGTv.js";
import { f as P, i as F, l as I, n as L, r as R, s as z, t as B } from "./CollectionBuilder.Dfbyz3n6.js";
import { n as ae, t as V } from "./useListState.CZccHHkQ.js";
var H = e(E(), 1), U = (0, H.createContext)({}), W = (0, H.createContext)(null), G = (0, H.forwardRef)(function(e, t) {
	let { render: n } = (0, H.useContext)(W);
	return H.createElement(H.Fragment, null, n(e, t));
});
function K(e, t) {
	let n = e?.renderDropIndicator, r = e?.isVirtualDragging?.(), i = (0, H.useCallback)((e) => {
		if (r || t?.isDropTarget(e)) return n ? n(e) : H.createElement(G, { target: e });
	}, [
		t?.target,
		r,
		n
	]);
	return e?.useDropIndicator ? i : void 0;
}
function q(e, t, n) {
	let r = e.focusedKey, i = null;
	if (t?.isVirtualDragging?.() && n?.target?.type === `item` && (i = n.target.key, n.target.dropPosition === `after`)) {
		let e = n.collection.getKeyAfter(i), t = null;
		if (e != null) {
			let r = n.collection.getItem(i)?.level ?? 0;
			for (; e != null;) {
				let i = n.collection.getItem(e);
				if (!i) break;
				if (i.type !== `item`) e = n.collection.getKeyAfter(e);
				else {
					if ((i.level ?? 0) <= r) break;
					t = e, e = n.collection.getKeyAfter(e);
				}
			}
		}
		i = e ?? t ?? i;
	}
	return (0, H.useMemo)(() => new Set([r, i].filter((e) => e != null)), [r, i]);
}
var J = new WeakMap();
function Y(e) {
	return typeof e == `string` ? e.replace(/\s*/g, ``) : `` + e;
}
function X(e, t) {
	let n = J.get(e);
	if (!n) throw Error(`Unknown list`);
	return `${n.id}-option-${Y(t)}`;
}
function oe(e, t, n) {
	let r = _(e, { labelable: !0 }), i = e.selectionBehavior || `toggle`, o = e.orientation || `vertical`, s = e.linkBehavior || (i === `replace` ? `action` : `override`);
	i === `toggle` && s === `action` && (s = `override`);
	let { listProps: c } = j({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: s
	}), { focusWithinProps: l } = u({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), d = y(e.id);
	J.set(t, {
		id: d,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: s,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: p, fieldProps: m } = a({
		...e,
		id: d,
		labelElementType: `span`
	});
	return {
		labelProps: p,
		listBoxProps: f(r, l, t.selectionManager.selectionMode === `multiple` ? { "aria-multiselectable": `true` } : {}, {
			role: `listbox`,
			"aria-orientation": o,
			...f(m, c)
		})
	};
}
function se(e, t, a) {
	let { key: s } = e, c = J.get(t), l = e.isDisabled ?? t.selectionManager.isDisabled(s), u = e.isSelected ?? t.selectionManager.isSelected(s), d = e.shouldSelectOnPressUp ?? c?.shouldSelectOnPressUp, p = e.shouldFocusOnHover ?? c?.shouldFocusOnHover, m = e.shouldUseVirtualFocus ?? c?.shouldUseVirtualFocus, h = e.isVirtualized ?? c?.isVirtualized, g = o(), v = o(), y = {
		role: `option`,
		"aria-disabled": l || void 0,
		"aria-selected": t.selectionManager.selectionMode === `none` ? void 0 : u,
		"aria-label": e[`aria-label`],
		"aria-labelledby": g,
		"aria-describedby": v
	}, b = t.collection.getItem(s);
	if (h) {
		let e = Number(b?.index);
		y[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, y[`aria-setsize`] = A(t.collection);
	}
	let S = c?.onAction ? () => c?.onAction?.(s) : void 0, w = X(t, s), { itemProps: T, isPressed: E, isFocused: D, hasAction: O, allowsSelection: k } = C({
		selectionManager: t.selectionManager,
		key: s,
		ref: a,
		shouldSelectOnPressUp: d,
		allowsDifferentPressOrigin: d && p,
		isVirtualized: h,
		shouldUseVirtualFocus: m,
		isDisabled: l,
		onAction: S || b?.props?.onAction ? x(b?.props?.onAction, S) : void 0,
		linkBehavior: c?.linkBehavior,
		UNSTABLE_itemBehavior: c?.UNSTABLE_itemBehavior,
		id: w
	}), { hoverProps: j } = i({
		isDisabled: l || !p,
		onHoverStart() {
			r() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(s));
		}
	}), M = _(b?.props);
	delete M.id;
	let ee = n(b?.props);
	return {
		optionProps: {
			...y,
			...f(M, T, j, ee),
			id: w
		},
		labelProps: { id: g },
		descriptionProps: { id: v },
		isFocused: D,
		isFocusVisible: D && t.selectionManager.isFocused && r(),
		isSelected: u,
		isDisabled: l,
		isPressed: E,
		allowsSelection: k,
		hasAction: O
	};
}
function ce(e) {
	let { heading: t, "aria-label": n } = e, r = y();
	return {
		itemProps: { role: `presentation` },
		headingProps: t ? {
			id: r,
			role: `presentation`,
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: `group`,
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
var Z = (0, H.createContext)(null), Q = (0, H.createContext)(null), le = (0, H.forwardRef)(function(e, t) {
	[e, t] = h(e, t, Z);
	let n = (0, H.useContext)(Q);
	return n ? H.createElement($, {
		state: n,
		props: e,
		listBoxRef: t
	}) : H.createElement(L, { content: H.createElement(F, e) }, (n) => H.createElement(ue, {
		props: e,
		listBoxRef: t,
		collection: n
	}));
});
function ue({ props: e, listBoxRef: t, collection: n }) {
	e = {
		...e,
		collection: n,
		children: null,
		items: null
	};
	let { layoutDelegate: r } = (0, H.useContext)(w), i = V({
		...e,
		layoutDelegate: r
	});
	return H.createElement($, {
		state: i,
		props: e,
		listBoxRef: t
	});
}
function $({ state: e, props: n, listBoxRef: r }) {
	[n, r] = h(n, r, ee);
	let { dragAndDropHooks: i, layout: a = `stack`, orientation: o = `vertical`, filter: c } = n, u = ae(e, c), { collection: d, selectionManager: p } = u, m = !!i?.useDraggableCollectionState, v = !!i?.useDroppableCollectionState, { direction: y } = b(), { disabledBehavior: x, disabledKeys: S } = p, C = k({
		usage: `search`,
		sensitivity: `base`
	}), { isVirtualized: E, layoutDelegate: O, dropTargetDelegate: A, CollectionRoot: j } = (0, H.useContext)(w), M = (0, H.useMemo)(() => n.keyboardDelegate || new D({
		collection: d,
		collator: C,
		ref: r,
		disabledKeys: S,
		disabledBehavior: x,
		layout: a,
		orientation: o,
		direction: y,
		layoutDelegate: O
	}), [
		d,
		C,
		r,
		x,
		S,
		o,
		y,
		n.keyboardDelegate,
		a,
		O
	]), { listBoxProps: re } = oe({
		...n,
		shouldSelectOnPressUp: m || n.shouldSelectOnPressUp,
		keyboardDelegate: M,
		isVirtualized: E
	}, u, r);
	(0, H.useRef)(m), (0, H.useRef)(v), (0, H.useEffect)(() => {}, [m, v]);
	let N, P, F, I = !1, L = null, R = (0, H.useRef)(null);
	if (m && i) {
		N = i.useDraggableCollectionState({
			collection: d,
			selectionManager: p,
			preview: i.renderDragPreview ? R : void 0
		}), i.useDraggableCollection({}, N, r);
		let e = i.DragPreview;
		L = i.renderDragPreview ? H.createElement(e, { ref: R }, i.renderDragPreview) : null;
	}
	if (v && i) {
		P = i.useDroppableCollectionState({
			collection: d,
			selectionManager: p
		});
		let e = i.dropTargetDelegate || A || new i.ListDropTargetDelegate(d, r, {
			orientation: o,
			layout: a,
			direction: y
		});
		F = i.useDroppableCollection({
			keyboardDelegate: M,
			dropTargetDelegate: e
		}, P, r), I = P.isDropTarget({ type: `root` });
	}
	let { focusProps: z, isFocused: B, isFocusVisible: V } = t(), G = u.collection.size === 0, J = {
		isDropTarget: I,
		isEmpty: G,
		isFocused: B,
		isFocusVisible: V,
		layout: n.layout || `stack`,
		orientation: o,
		state: u
	}, Y = g({
		...n,
		children: void 0,
		defaultClassName: `react-aria-ListBox`,
		values: J
	}), X = null;
	G && n.renderEmptyState && (X = H.createElement(`div`, {
		role: `option`,
		style: { display: `contents` }
	}, n.renderEmptyState(J)));
	let se = _(n, { global: !0 });
	return H.createElement(ne, null, H.createElement(l.div, {
		...f(se, Y, re, z, F?.collectionProps),
		ref: r,
		slot: n.slot || void 0,
		onScroll: n.onScroll,
		"data-drop-target": I || void 0,
		"data-empty": G || void 0,
		"data-focused": B || void 0,
		"data-focus-visible": V || void 0,
		"data-layout": n.layout || `stack`,
		"data-orientation": o
	}, H.createElement(s, { values: [
		[Z, n],
		[Q, u],
		[U, {
			dragAndDropHooks: i,
			dragState: N,
			dropState: P
		}],
		[ie, { elementType: `div` }],
		[W, { render: me }],
		[T, {
			name: `ListBoxSection`,
			render: de
		}]
	] }, H.createElement(te, null, H.createElement(j, {
		collection: d,
		scrollRef: r,
		persistedKeys: q(p, i, P),
		renderDropIndicator: K(i, P)
	}))), X, L));
}
function de(e, t, n, r = `react-aria-ListBoxSection`) {
	let i = (0, H.useContext)(Q), { dragAndDropHooks: a, dropState: o } = (0, H.useContext)(U), { CollectionBranch: s } = (0, H.useContext)(w), [u, d] = c(), { headingProps: p, groupProps: m } = ce({
		heading: d,
		"aria-label": e[`aria-label`] ?? void 0
	}), h = g({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		values: void 0
	}), v = _(e, { global: !0 });
	return delete v.id, H.createElement(l.section, {
		...f(v, h, m),
		ref: t
	}, H.createElement(O.Provider, { value: {
		...p,
		ref: u
	} }, H.createElement(s, {
		collection: i.collection,
		parent: n,
		renderDropIndicator: K(a, o)
	})));
}
var fe = R(z, de), pe = B(P, function(e, t, n) {
	let r = m(t), a = (0, H.useContext)(Q), { dragAndDropHooks: o, dragState: c, dropState: u } = (0, H.useContext)(U), h = c && !(c.isDisabled || c.selectionManager.isDisabled(n.key)), { optionProps: y, labelProps: b, descriptionProps: x, ...S } = se({
		key: n.key,
		"aria-label": e?.[`aria-label`]
	}, a, r), { hoverProps: C, isHovered: w } = i({
		isDisabled: !S.allowsSelection && !S.hasAction && !h,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), { keyboardProps: T } = p(e), { focusProps: E } = d(e), D = null;
	c && o && (D = o.useDraggableItem({
		key: n.key,
		hasAction: S.hasAction
	}, c));
	let O = null;
	u && o && (O = o.useDroppableItem({ target: {
		type: `item`,
		key: n.key,
		dropPosition: `on`
	} }, u, r));
	let k = c && c.isDragging(n.key), A = g({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: `react-aria-ListBoxItem`,
		values: {
			...S,
			isHovered: w,
			selectionMode: a.selectionManager.selectionMode,
			selectionBehavior: a.selectionManager.selectionBehavior,
			allowsDragging: !!c,
			isDragging: k,
			isDropTarget: O?.isDropTarget
		}
	});
	(0, H.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let j = e.href ? l.a : l.div, M = _(e, { global: !0 });
	return delete M.id, delete M.onClick, e.href && y.tabIndex == null && (y.tabIndex = -1), H.createElement(j, {
		...f(M, A, y, C, T, E, D?.dragProps, O?.dropProps),
		ref: r,
		"data-allows-dragging": !!c || void 0,
		"data-selected": S.isSelected || void 0,
		"data-disabled": S.isDisabled || void 0,
		"data-hovered": w || void 0,
		"data-focused": S.isFocused || void 0,
		"data-focus-visible": S.isFocusVisible || void 0,
		"data-pressed": S.isPressed || void 0,
		"data-dragging": k || void 0,
		"data-drop-target": O?.isDropTarget || void 0,
		"data-selection-mode": a.selectionManager.selectionMode === `none` ? void 0 : a.selectionManager.selectionMode
	}, H.createElement(s, { values: [[N, { slots: {
		[v]: b,
		label: b,
		description: x
	} }], [re, { isSelected: S.isSelected }]] }, A.children));
});
function me(e, t) {
	t = m(t);
	let { dragAndDropHooks: n, dropState: r } = (0, H.useContext)(U), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : H.createElement(ge, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function he(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = g({
		...i,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: r }
	});
	return H.createElement(H.Fragment, null, H.createElement(l.div, {
		...n,
		...a,
		role: `option`,
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var ge = (0, H.forwardRef)(he);
B(I, function(e, t, n) {
	let r = (0, H.useContext)(Q), { isLoading: i, onLoadMore: a, scrollOffset: o, ...s } = e, c = (0, H.useRef)(null), u = (0, H.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: c,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]);
	M(u, c);
	let d = g({
		...s,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-ListBoxLoadingIndicator`,
		values: void 0
	});
	return H.createElement(H.Fragment, null, H.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: S(!0)
	}, H.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: c,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), i && d.children && H.createElement(H.Fragment, null, H.createElement(l.div, {
		...f(_(e, { global: !0 }), { tabIndex: -1 }),
		...d,
		role: `option`,
		ref: t
	}, d.children)));
});
export { fe as a, G as c, q as d, W as f, pe as i, K as l, Q as n, J as o, Z as r, X as s, le as t, U as u };
