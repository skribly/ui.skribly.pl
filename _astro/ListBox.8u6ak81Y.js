import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, $t as n, A as r, Bt as i, F as a, Gt as o, H as s, Ht as c, Kt as l, N as u, P as d, Qt as f, Ut as p, Vt as m, X as h, Xt as g, Yt as _, Z as v, dt as y, nn as b, st as x } from "./useOverflow.Dq483xd0.js";
import { i as S, l as C, v as w, x as T } from "./useCollection.DQc_Iacd.js";
import { n as E } from "./react-dom.B9zIfLd2.js";
import { a as D, c as O, i as k, n as A, r as j, t as M } from "./useLoadMoreSentinel.CCe53T__.js";
import { r as ee } from "./Autocomplete.CGc8yklO.js";
import { c as te, n as ne, s as N } from "./FocusScope.aBBixRPA.js";
import { n as re } from "./Separator.D8LVqGJ4.js";
import { n as P } from "./Text.DXbJB4jb.js";
import { f as F, i as I, l as L, n as R, r as z, s as B, t as V } from "./CollectionBuilder.OeX_9-Zv.js";
import { n as ie, t as H } from "./useListState.PwXH_dUi.js";
var U = e(E(), 1), W = (0, U.createContext)({}), G = (0, U.createContext)(null), K = (0, U.forwardRef)(function(e, t) {
	let { render: n } = (0, U.useContext)(G);
	return U.createElement(U.Fragment, null, n(e, t));
});
function q(e, t) {
	let n = e?.renderDropIndicator, r = e?.isVirtualDragging?.(), i = (0, U.useCallback)((e) => {
		if (r || t?.isDropTarget(e)) return n ? n(e) : U.createElement(K, { target: e });
	}, [
		t?.target,
		r,
		n
	]);
	return e?.useDropIndicator ? i : void 0;
}
function J(e, t, n) {
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
	return (0, U.useMemo)(() => new Set([r, i].filter((e) => e != null)), [r, i]);
}
var Y = new WeakMap();
function ae(e) {
	return typeof e == `string` ? e.replace(/\s*/g, ``) : `` + e;
}
function X(e, t) {
	let n = Y.get(e);
	if (!n) throw Error(`Unknown list`);
	return `${n.id}-option-${ae(t)}`;
}
function oe(e, t, i) {
	let o = s(e, { labelable: !0 }), c = e.selectionBehavior || `toggle`, l = e.orientation || `vertical`, u = e.linkBehavior || (c === `replace` ? `action` : `override`);
	c === `toggle` && u === `action` && (u = `override`);
	let { listProps: d } = j({
		...e,
		ref: i,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: u
	}), { focusWithinProps: f } = a({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), p = n(e.id);
	Y.set(t, {
		id: p,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: u,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: m, fieldProps: h } = r({
		...e,
		id: p,
		labelElementType: `span`
	});
	return {
		labelProps: m,
		listBoxProps: g(o, f, t.selectionManager.selectionMode === `multiple` ? { "aria-multiselectable": `true` } : {}, {
			role: `listbox`,
			"aria-orientation": l,
			...g(h, d)
		})
	};
}
function se(e, t, n) {
	let { key: r } = e, i = Y.get(t), a = e.isDisabled ?? t.selectionManager.isDisabled(r), o = e.isSelected ?? t.selectionManager.isSelected(r), c = e.shouldSelectOnPressUp ?? i?.shouldSelectOnPressUp, l = e.shouldFocusOnHover ?? i?.shouldFocusOnHover, d = e.shouldUseVirtualFocus ?? i?.shouldUseVirtualFocus, p = e.isVirtualized ?? i?.isVirtualized, m = f(), h = f(), _ = {
		role: `option`,
		"aria-disabled": a || void 0,
		"aria-selected": t.selectionManager.selectionMode === `none` ? void 0 : o,
		"aria-label": e[`aria-label`],
		"aria-labelledby": m,
		"aria-describedby": h
	}, v = t.collection.getItem(r);
	if (p) {
		let e = Number(v?.index);
		_[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, _[`aria-setsize`] = A(t.collection);
	}
	let S = i?.onAction ? () => i?.onAction?.(r) : void 0, w = X(t, r), { itemProps: T, isPressed: E, isFocused: D, hasAction: O, allowsSelection: k } = C({
		selectionManager: t.selectionManager,
		key: r,
		ref: n,
		shouldSelectOnPressUp: c,
		allowsDifferentPressOrigin: c && l,
		isVirtualized: p,
		shouldUseVirtualFocus: d,
		isDisabled: a,
		onAction: S || v?.props?.onAction ? b(v?.props?.onAction, S) : void 0,
		linkBehavior: i?.linkBehavior,
		UNSTABLE_itemBehavior: i?.UNSTABLE_itemBehavior,
		id: w
	}), { hoverProps: j } = u({
		isDisabled: a || !l,
		onHoverStart() {
			x() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r));
		}
	}), M = s(v?.props);
	delete M.id;
	let ee = y(v?.props);
	return {
		optionProps: {
			..._,
			...g(M, T, j, ee),
			id: w
		},
		labelProps: { id: m },
		descriptionProps: { id: h },
		isFocused: D,
		isFocusVisible: D && t.selectionManager.isFocused && x(),
		isSelected: o,
		isDisabled: a,
		isPressed: E,
		allowsSelection: k,
		hasAction: O
	};
}
function ce(e) {
	let { heading: t, "aria-label": r } = e, i = n();
	return {
		itemProps: { role: `presentation` },
		headingProps: t ? {
			id: i,
			role: `presentation`,
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: `group`,
			"aria-label": r,
			"aria-labelledby": t ? i : void 0
		}
	};
}
var Z = (0, U.createContext)(null), Q = (0, U.createContext)(null), le = (0, U.forwardRef)(function(e, t) {
	[e, t] = m(e, t, Z);
	let n = (0, U.useContext)(Q);
	return n ? U.createElement(de, {
		state: n,
		props: e,
		listBoxRef: t
	}) : U.createElement(R, { content: U.createElement(I, e) }, (n) => U.createElement(ue, {
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
	let { layoutDelegate: r } = (0, U.useContext)(w), i = H({
		...e,
		layoutDelegate: r
	});
	return U.createElement(de, {
		state: i,
		props: e,
		listBoxRef: t
	});
}
function de({ state: e, props: n, listBoxRef: r }) {
	[n, r] = m(n, r, ee);
	let { dragAndDropHooks: a, layout: o = `stack`, orientation: u = `vertical`, filter: f } = n, p = ie(e, f), { collection: h, selectionManager: _ } = p, v = !!a?.useDraggableCollectionState, y = !!a?.useDroppableCollectionState, { direction: b } = t(), { disabledBehavior: x, disabledKeys: S } = _, C = k({
		usage: `search`,
		sensitivity: `base`
	}), { isVirtualized: E, layoutDelegate: O, dropTargetDelegate: A, CollectionRoot: j } = (0, U.useContext)(w), M = (0, U.useMemo)(() => n.keyboardDelegate || new D({
		collection: h,
		collator: C,
		ref: r,
		disabledKeys: S,
		disabledBehavior: x,
		layout: o,
		orientation: u,
		direction: b,
		layoutDelegate: O
	}), [
		h,
		C,
		r,
		x,
		S,
		u,
		b,
		n.keyboardDelegate,
		o,
		O
	]), { listBoxProps: N } = oe({
		...n,
		shouldSelectOnPressUp: v || n.shouldSelectOnPressUp,
		keyboardDelegate: M,
		isVirtualized: E
	}, p, r);
	(0, U.useRef)(v), (0, U.useRef)(y), (0, U.useEffect)(() => {}, [v, y]);
	let P, F, I, L = !1, R = null, z = (0, U.useRef)(null);
	if (v && a) {
		P = a.useDraggableCollectionState({
			collection: h,
			selectionManager: _,
			preview: a.renderDragPreview ? z : void 0
		}), a.useDraggableCollection({}, P, r);
		let e = a.DragPreview;
		R = a.renderDragPreview ? U.createElement(e, { ref: z }, a.renderDragPreview) : null;
	}
	if (y && a) {
		F = a.useDroppableCollectionState({
			collection: h,
			selectionManager: _
		});
		let e = a.dropTargetDelegate || A || new a.ListDropTargetDelegate(h, r, {
			orientation: u,
			layout: o,
			direction: b
		});
		I = a.useDroppableCollection({
			keyboardDelegate: M,
			dropTargetDelegate: e
		}, F, r), L = F.isDropTarget({ type: `root` });
	}
	let { focusProps: B, isFocused: V, isFocusVisible: H } = d(), K = p.collection.size === 0, Y = {
		isDropTarget: L,
		isEmpty: K,
		isFocused: V,
		isFocusVisible: H,
		layout: n.layout || `stack`,
		orientation: u,
		state: p
	}, ae = c({
		...n,
		children: void 0,
		defaultClassName: `react-aria-ListBox`,
		values: Y
	}), X = null;
	K && n.renderEmptyState && (X = U.createElement(`div`, {
		role: `option`,
		style: { display: `contents` }
	}, n.renderEmptyState(Y)));
	let se = s(n, { global: !0 });
	return U.createElement(ne, null, U.createElement(l.div, {
		...g(se, ae, N, B, I?.collectionProps),
		ref: r,
		slot: n.slot || void 0,
		onScroll: n.onScroll,
		"data-drop-target": L || void 0,
		"data-empty": K || void 0,
		"data-focused": V || void 0,
		"data-focus-visible": H || void 0,
		"data-layout": n.layout || `stack`,
		"data-orientation": u
	}, U.createElement(i, { values: [
		[Z, n],
		[Q, p],
		[W, {
			dragAndDropHooks: a,
			dragState: P,
			dropState: F
		}],
		[re, { elementType: `div` }],
		[G, { render: me }],
		[T, {
			name: `ListBoxSection`,
			render: $
		}]
	] }, U.createElement(te, null, U.createElement(j, {
		collection: h,
		scrollRef: r,
		persistedKeys: J(_, a, F),
		renderDropIndicator: q(a, F)
	}))), X, R));
}
function $(e, t, n, r = `react-aria-ListBoxSection`) {
	let i = (0, U.useContext)(Q), { dragAndDropHooks: a, dropState: o } = (0, U.useContext)(W), { CollectionBranch: u } = (0, U.useContext)(w), [d, f] = p(), { headingProps: m, groupProps: h } = ce({
		heading: f,
		"aria-label": e[`aria-label`] ?? void 0
	}), _ = c({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		values: void 0
	}), v = s(e, { global: !0 });
	return delete v.id, U.createElement(l.section, {
		...g(v, _, h),
		ref: t
	}, U.createElement(O.Provider, { value: {
		...m,
		ref: d
	} }, U.createElement(u, {
		collection: i.collection,
		parent: n,
		renderDropIndicator: q(a, o)
	})));
}
var fe = z(B, $), pe = V(F, function(e, t, n) {
	let r = _(t), a = (0, U.useContext)(Q), { dragAndDropHooks: d, dragState: f, dropState: p } = (0, U.useContext)(W), m = f && !(f.isDisabled || f.selectionManager.isDisabled(n.key)), { optionProps: y, labelProps: b, descriptionProps: x, ...S } = se({
		key: n.key,
		"aria-label": e?.[`aria-label`]
	}, a, r), { hoverProps: C, isHovered: w } = u({
		isDisabled: !S.allowsSelection && !S.hasAction && !m,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), { keyboardProps: T } = h(e), { focusProps: E } = v(e), D = null;
	f && d && (D = d.useDraggableItem({
		key: n.key,
		hasAction: S.hasAction
	}, f));
	let O = null;
	p && d && (O = d.useDroppableItem({ target: {
		type: `item`,
		key: n.key,
		dropPosition: `on`
	} }, p, r));
	let k = f && f.isDragging(n.key), A = c({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: `react-aria-ListBoxItem`,
		values: {
			...S,
			isHovered: w,
			selectionMode: a.selectionManager.selectionMode,
			selectionBehavior: a.selectionManager.selectionBehavior,
			allowsDragging: !!f,
			isDragging: k,
			isDropTarget: O?.isDropTarget
		}
	});
	(0, U.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let j = e.href ? l.a : l.div, M = s(e, { global: !0 });
	return delete M.id, delete M.onClick, e.href && y.tabIndex == null && (y.tabIndex = -1), U.createElement(j, {
		...g(M, A, y, C, T, E, D?.dragProps, O?.dropProps),
		ref: r,
		"data-allows-dragging": !!f || void 0,
		"data-selected": S.isSelected || void 0,
		"data-disabled": S.isDisabled || void 0,
		"data-hovered": w || void 0,
		"data-focused": S.isFocused || void 0,
		"data-focus-visible": S.isFocusVisible || void 0,
		"data-pressed": S.isPressed || void 0,
		"data-dragging": k || void 0,
		"data-drop-target": O?.isDropTarget || void 0,
		"data-selection-mode": a.selectionManager.selectionMode === `none` ? void 0 : a.selectionManager.selectionMode
	}, U.createElement(i, { values: [[P, { slots: {
		[o]: b,
		label: b,
		description: x
	} }], [N, { isSelected: S.isSelected }]] }, A.children));
});
function me(e, t) {
	t = _(t);
	let { dragAndDropHooks: n, dropState: r } = (0, U.useContext)(W), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : U.createElement(ge, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function he(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = c({
		...i,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: r }
	});
	return U.createElement(U.Fragment, null, U.createElement(l.div, {
		...n,
		...a,
		role: `option`,
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var ge = (0, U.forwardRef)(he);
V(L, function(e, t, n) {
	let r = (0, U.useContext)(Q), { isLoading: i, onLoadMore: a, scrollOffset: o, ...u } = e, d = (0, U.useRef)(null), f = (0, U.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: d,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]);
	M(f, d);
	let p = c({
		...u,
		id: void 0,
		children: n.rendered,
		defaultClassName: `react-aria-ListBoxLoadingIndicator`,
		values: void 0
	});
	return U.createElement(U.Fragment, null, U.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: S(!0)
	}, U.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: d,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), i && p.children && U.createElement(U.Fragment, null, U.createElement(l.div, {
		...g(s(e, { global: !0 }), { tabIndex: -1 }),
		...p,
		role: `option`,
		ref: t
	}, p.children)));
});
export { fe as a, K as c, J as d, G as f, pe as i, q as l, Q as n, Y as o, Z as r, X as s, le as t, W as u };
