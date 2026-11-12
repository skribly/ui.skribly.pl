import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { n as t } from "./react-dom.B9zIfLd2.js";
import { At as n, Bt as r, Dt as i, E as a, Et as o, F as s, G as c, It as l, L as u, Lt as d, Nt as f, P as p, Pt as m, Tt as h, Y as g, _, kt as v, m as y, v as b, wt as x, y as S, z as C } from "./createLucideIcon.npgQlVHx.js";
import { r as w } from "./Autocomplete.BUqxPt-N.js";
import { f as T, i as E, l as D, n as O, r as k, s as A, t as j } from "./CollectionBuilder.Bxdh8Jqj.js";
import { C as M, b as N, d as P, o as F } from "./animation.BhtQe7Yj.js";
import { n as I } from "./Text.DxhsPAdy.js";
import { a as ee, c as L, i as te, n as R, r as z, t as B } from "./useLoadMoreSentinel.DKpPMiER.js";
import { c as ne, n as re, s as V } from "./FocusScope.Ba7RJw7M.js";
import { n as ie } from "./Separator.BXwoAIpL.js";
import { n as ae, t as H } from "./useListState.BvceJMy7.js";
var U = e(t(), 1);
function W(e, t) {
	let n = (0, U.useRef)(!0), r = (0, U.useRef)(null), i = C(e);
	(0, U.useEffect)(() => (n.current = !0, () => {
		n.current = !1;
	}), []), (0, U.useEffect)(() => {
		let e = r.current;
		n.current ? n.current = !1 : (!e || t.some((t, n) => !Object.is(t, e[n]))) && i(), r.current = t;
	}, t);
}
var G = (0, U.createContext)({}), K = (0, U.createContext)(null), q = (0, U.forwardRef)(function(e, t) {
	let { render: n } = (0, U.useContext)(K);
	return U.createElement(U.Fragment, null, n(e, t));
});
function J(e, t) {
	let n = e?.renderDropIndicator, r = e?.isVirtualDragging?.(), i = (0, U.useCallback)((e) => {
		if (r || t?.isDropTarget(e)) return n ? n(e) : U.createElement(q, { target: e });
	}, [
		t?.target,
		r,
		n
	]);
	return e?.useDropIndicator ? i : void 0;
}
function Y(e, t, n) {
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
var X = new WeakMap();
function Z(e) {
	return typeof e == `string` ? e.replace(/\s*/g, ``) : `` + e;
}
function oe(e, t) {
	let n = X.get(e);
	if (!n) throw Error(`Unknown list`);
	return `${n.id}-option-${Z(t)}`;
}
function se(e, t, n) {
	let r = a(e, { labelable: !0 }), i = e.selectionBehavior || `toggle`, o = e.orientation || `vertical`, s = e.linkBehavior || (i === `replace` ? `action` : `override`);
	i === `toggle` && s === `action` && (s = `override`);
	let { listProps: c } = z({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: s
	}), { focusWithinProps: l } = S({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), u = d(e.id);
	X.set(t, {
		id: u,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: s,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: f, fieldProps: p } = y({
		...e,
		id: u,
		labelElementType: `span`
	});
	return {
		labelProps: f,
		listBoxProps: m(r, l, t.selectionManager.selectionMode === `multiple` ? { "aria-multiselectable": `true` } : {}, {
			role: `listbox`,
			"aria-orientation": o,
			...m(p, c)
		})
	};
}
function ce(e, t, n) {
	let { key: i } = e, o = X.get(t), s = e.isDisabled ?? t.selectionManager.isDisabled(i), u = e.isSelected ?? t.selectionManager.isSelected(i), d = e.shouldSelectOnPressUp ?? o?.shouldSelectOnPressUp, f = e.shouldFocusOnHover ?? o?.shouldFocusOnHover, p = e.shouldUseVirtualFocus ?? o?.shouldUseVirtualFocus, h = e.isVirtualized ?? o?.isVirtualized, v = l(), y = l(), b = {
		role: `option`,
		"aria-disabled": s || void 0,
		"aria-selected": t.selectionManager.selectionMode === `none` ? void 0 : u,
		"aria-label": e[`aria-label`],
		"aria-labelledby": v,
		"aria-describedby": y
	}, x = t.collection.getItem(i);
	if (h) {
		let e = Number(x?.index);
		b[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, b[`aria-setsize`] = R(t.collection);
	}
	let S = o?.onAction ? () => o?.onAction?.(i) : void 0, C = oe(t, i), { itemProps: w, isPressed: T, isFocused: E, hasAction: D, allowsSelection: O } = P({
		selectionManager: t.selectionManager,
		key: i,
		ref: n,
		shouldSelectOnPressUp: d,
		allowsDifferentPressOrigin: d && f,
		isVirtualized: h,
		shouldUseVirtualFocus: p,
		isDisabled: s,
		onAction: S || x?.props?.onAction ? r(x?.props?.onAction, S) : void 0,
		linkBehavior: o?.linkBehavior,
		UNSTABLE_itemBehavior: o?.UNSTABLE_itemBehavior,
		id: C
	}), { hoverProps: k } = _({
		isDisabled: s || !f,
		onHoverStart() {
			c() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(i));
		}
	}), A = a(x?.props);
	delete A.id;
	let j = g(x?.props);
	return {
		optionProps: {
			...b,
			...m(A, w, k, j),
			id: C
		},
		labelProps: { id: v },
		descriptionProps: { id: y },
		isFocused: E,
		isFocusVisible: E && t.selectionManager.isFocused && c(),
		isSelected: u,
		isDisabled: s,
		isPressed: T,
		allowsSelection: O,
		hasAction: D
	};
}
function le(e) {
	let { heading: t, "aria-label": n } = e, r = d();
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
var Q = (0, U.createContext)(null), $ = (0, U.createContext)(null), ue = (0, U.forwardRef)(function(e, t) {
	[e, t] = h(e, t, Q);
	let n = (0, U.useContext)($);
	return n ? U.createElement(fe, {
		state: n,
		props: e,
		listBoxRef: t
	}) : U.createElement(O, { content: U.createElement(E, e) }, (n) => U.createElement(de, {
		props: e,
		listBoxRef: t,
		collection: n
	}));
});
function de({ props: e, listBoxRef: t, collection: n }) {
	e = {
		...e,
		collection: n,
		children: null,
		items: null
	};
	let { layoutDelegate: r } = (0, U.useContext)(N), i = H({
		...e,
		layoutDelegate: r
	});
	return U.createElement(fe, {
		state: i,
		props: e,
		listBoxRef: t
	});
}
function fe({ state: e, props: t, listBoxRef: r }) {
	[t, r] = h(t, r, w);
	let { dragAndDropHooks: i, layout: s = `stack`, orientation: c = `vertical`, filter: l } = t, d = ae(e, l), { collection: f, selectionManager: p } = d, g = !!i?.useDraggableCollectionState, _ = !!i?.useDroppableCollectionState, { direction: v } = u(), { disabledBehavior: y, disabledKeys: S } = p, C = te({
		usage: `search`,
		sensitivity: `base`
	}), { isVirtualized: T, layoutDelegate: E, dropTargetDelegate: D, CollectionRoot: O } = (0, U.useContext)(N), k = (0, U.useMemo)(() => t.keyboardDelegate || new ee({
		collection: f,
		collator: C,
		ref: r,
		disabledKeys: S,
		disabledBehavior: y,
		layout: s,
		orientation: c,
		direction: v,
		layoutDelegate: E
	}), [
		f,
		C,
		r,
		y,
		S,
		c,
		v,
		t.keyboardDelegate,
		s,
		E
	]), { listBoxProps: A } = se({
		...t,
		shouldSelectOnPressUp: g || t.shouldSelectOnPressUp,
		keyboardDelegate: k,
		isVirtualized: T
	}, d, r);
	(0, U.useRef)(g), (0, U.useRef)(_), (0, U.useEffect)(() => {}, [g, _]);
	let j, P, F, I = !1, L = null, R = (0, U.useRef)(null);
	if (g && i) {
		j = i.useDraggableCollectionState({
			collection: f,
			selectionManager: p,
			preview: i.renderDragPreview ? R : void 0
		}), i.useDraggableCollection({}, j, r);
		let e = i.DragPreview;
		L = i.renderDragPreview ? U.createElement(e, { ref: R }, i.renderDragPreview) : null;
	}
	if (_ && i) {
		P = i.useDroppableCollectionState({
			collection: f,
			selectionManager: p
		});
		let e = i.dropTargetDelegate || D || new i.ListDropTargetDelegate(f, r, {
			orientation: c,
			layout: s,
			direction: v
		});
		F = i.useDroppableCollection({
			keyboardDelegate: k,
			dropTargetDelegate: e
		}, P, r), I = P.isDropTarget({ type: `root` });
	}
	let { focusProps: z, isFocused: B, isFocusVisible: V } = b(), H = d.collection.size === 0, W = {
		isDropTarget: I,
		isEmpty: H,
		isFocused: B,
		isFocusVisible: V,
		layout: t.layout || `stack`,
		orientation: c,
		state: d
	}, q = o({
		...t,
		children: void 0,
		defaultClassName: `react-aria-ListBox`,
		values: W
	}), X = null;
	H && t.renderEmptyState && (X = U.createElement(`div`, {
		role: `option`,
		style: { display: `contents` }
	}, t.renderEmptyState(W)));
	let Z = a(t, { global: !0 });
	return U.createElement(re, null, U.createElement(n.div, {
		...m(Z, q, A, z, F?.collectionProps),
		ref: r,
		slot: t.slot || void 0,
		onScroll: t.onScroll,
		"data-drop-target": I || void 0,
		"data-empty": H || void 0,
		"data-focused": B || void 0,
		"data-focus-visible": V || void 0,
		"data-layout": t.layout || `stack`,
		"data-orientation": c
	}, U.createElement(x, { values: [
		[Q, t],
		[$, d],
		[G, {
			dragAndDropHooks: i,
			dragState: j,
			dropState: P
		}],
		[ie, { elementType: `div` }],
		[K, { render: ge }],
		[M, {
			name: `ListBoxSection`,
			render: pe
		}]
	] }, U.createElement(ne, null, U.createElement(O, {
		collection: f,
		scrollRef: r,
		persistedKeys: Y(p, i, P),
		renderDropIndicator: J(i, P)
	}))), X, L));
}
function pe(e, t, r, s = `react-aria-ListBoxSection`) {
	let c = (0, U.useContext)($), { dragAndDropHooks: l, dropState: u } = (0, U.useContext)(G), { CollectionBranch: d } = (0, U.useContext)(N), [f, p] = i(), { headingProps: h, groupProps: g } = le({
		heading: p,
		"aria-label": e[`aria-label`] ?? void 0
	}), _ = o({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: s,
		values: void 0
	}), v = a(e, { global: !0 });
	return delete v.id, U.createElement(n.section, {
		...m(v, _, g),
		ref: t
	}, U.createElement(L.Provider, { value: {
		...h,
		ref: f
	} }, U.createElement(d, {
		collection: c.collection,
		parent: r,
		renderDropIndicator: J(l, u)
	})));
}
var me = k(A, pe), he = j(T, function(e, t, r) {
	let i = f(t), c = (0, U.useContext)($), { dragAndDropHooks: l, dragState: u, dropState: d } = (0, U.useContext)(G), h = u && !(u.isDisabled || u.selectionManager.isDisabled(r.key)), { optionProps: g, labelProps: y, descriptionProps: b, ...S } = ce({
		key: r.key,
		"aria-label": e?.[`aria-label`]
	}, c, i), { hoverProps: C, isHovered: w } = _({
		isDisabled: !S.allowsSelection && !S.hasAction && !h,
		onHoverStart: r.props.onHoverStart,
		onHoverChange: r.props.onHoverChange,
		onHoverEnd: r.props.onHoverEnd
	}), { keyboardProps: T } = p(e), { focusProps: E } = s(e), D = null;
	u && l && (D = l.useDraggableItem({
		key: r.key,
		hasAction: S.hasAction
	}, u));
	let O = null;
	d && l && (O = l.useDroppableItem({ target: {
		type: `item`,
		key: r.key,
		dropPosition: `on`
	} }, d, i));
	let k = u && u.isDragging(r.key), A = o({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: `react-aria-ListBoxItem`,
		values: {
			...S,
			isHovered: w,
			selectionMode: c.selectionManager.selectionMode,
			selectionBehavior: c.selectionManager.selectionBehavior,
			allowsDragging: !!u,
			isDragging: k,
			isDropTarget: O?.isDropTarget
		}
	});
	(0, U.useEffect)(() => {
		r.textValue;
	}, [r.textValue]);
	let j = e.href ? n.a : n.div, M = a(e, { global: !0 });
	return delete M.id, delete M.onClick, e.href && g.tabIndex == null && (g.tabIndex = -1), U.createElement(j, {
		...m(M, A, g, C, T, E, D?.dragProps, O?.dropProps),
		ref: i,
		"data-allows-dragging": !!u || void 0,
		"data-selected": S.isSelected || void 0,
		"data-disabled": S.isDisabled || void 0,
		"data-hovered": w || void 0,
		"data-focused": S.isFocused || void 0,
		"data-focus-visible": S.isFocusVisible || void 0,
		"data-pressed": S.isPressed || void 0,
		"data-dragging": k || void 0,
		"data-drop-target": O?.isDropTarget || void 0,
		"data-selection-mode": c.selectionManager.selectionMode === `none` ? void 0 : c.selectionManager.selectionMode
	}, U.createElement(x, { values: [[I, { slots: {
		[v]: y,
		label: y,
		description: b
	} }], [V, { isSelected: S.isSelected }]] }, A.children));
});
function ge(e, t) {
	t = f(t);
	let { dragAndDropHooks: n, dropState: r } = (0, U.useContext)(G), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : U.createElement(ve, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function _e(e, t) {
	let { dropIndicatorProps: r, isDropTarget: i, ...a } = e, s = o({
		...a,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: i }
	});
	return U.createElement(U.Fragment, null, U.createElement(n.div, {
		...r,
		...s,
		role: `option`,
		ref: t,
		"data-drop-target": i || void 0
	}));
}
var ve = (0, U.forwardRef)(_e);
j(D, function(e, t, r) {
	let i = (0, U.useContext)($), { isLoading: s, onLoadMore: c, scrollOffset: l, ...u } = e, d = (0, U.useRef)(null), f = (0, U.useMemo)(() => ({
		onLoadMore: c,
		collection: i?.collection,
		sentinelRef: d,
		scrollOffset: l
	}), [
		c,
		l,
		i?.collection
	]);
	B(f, d);
	let p = o({
		...u,
		id: void 0,
		children: r.rendered,
		defaultClassName: `react-aria-ListBoxLoadingIndicator`,
		values: void 0
	});
	return U.createElement(U.Fragment, null, U.createElement(`div`, {
		style: {
			position: `relative`,
			width: 0,
			height: 0
		},
		inert: F(!0)
	}, U.createElement(`div`, {
		"data-testid": `loadMoreSentinel`,
		ref: d,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), s && p.children && U.createElement(U.Fragment, null, U.createElement(n.div, {
		...m(a(e, { global: !0 }), { tabIndex: -1 }),
		...p,
		role: `option`,
		ref: t
	}, p.children)));
});
export { me as a, q as c, Y as d, K as f, he as i, J as l, $ as n, X as o, W as p, Q as r, oe as s, ue as t, G as u };
