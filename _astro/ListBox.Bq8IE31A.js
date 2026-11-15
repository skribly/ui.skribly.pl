import { r as e } from "./rolldown-runtime.XKyaHtl9.js";
import { $ as t, Dt as n, Sn as r, X as i, _t as a, cn as o, ct as s, dn as c, et as l, fn as u, gn as d, gt as f, hn as p, jt as m, ln as h, on as g, sn as _, tt as v, vn as y, yn as b, yt as x } from "./doc.C_PtMNUB.js";
import { i as S, l as C, v as w, x as T } from "./useCollection.Cn_I2nJQ.js";
import { n as E } from "./react-dom.B9zIfLd2.js";
import { a as D, c as O, i as k, n as A, r as j, t as M } from "./useLoadMoreSentinel.BhNRPrj4.js";
import { r as ee } from "./Autocomplete.BYGvWyUq.js";
import { c as te, n as ne, s as re } from "./FocusScope.DSjTtRFm.js";
import { n as ie } from "./Separator.DnWD7c2k.js";
import { n as N } from "./Text.3KJW7jIs.js";
import { f as P, i as F, l as I, n as L, r as R, s as z, t as B } from "./CollectionBuilder.BW1Ria3_.js";
import { n as ae, t as V } from "./useListState.B_9ND7CB.js";
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
	let r = s(e, { labelable: !0 }), a = e.selectionBehavior || `toggle`, o = e.orientation || `vertical`, c = e.linkBehavior || (a === `replace` ? `action` : `override`);
	a === `toggle` && c === `action` && (c = `override`);
	let { listProps: l } = j({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: c
	}), { focusWithinProps: u } = v({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), f = b(e.id);
	J.set(t, {
		id: f,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: c,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: p, fieldProps: m } = i({
		...e,
		id: f,
		labelElementType: `span`
	});
	return {
		labelProps: p,
		listBoxProps: d(r, u, t.selectionManager.selectionMode === `multiple` ? { "aria-multiselectable": `true` } : {}, {
			role: `listbox`,
			"aria-orientation": o,
			...d(m, l)
		})
	};
}
function se(e, i, a) {
	let { key: o } = e, c = J.get(i), l = e.isDisabled ?? i.selectionManager.isDisabled(o), u = e.isSelected ?? i.selectionManager.isSelected(o), f = e.shouldSelectOnPressUp ?? c?.shouldSelectOnPressUp, p = e.shouldFocusOnHover ?? c?.shouldFocusOnHover, h = e.shouldUseVirtualFocus ?? c?.shouldUseVirtualFocus, g = e.isVirtualized ?? c?.isVirtualized, _ = y(), v = y(), b = {
		role: `option`,
		"aria-disabled": l || void 0,
		"aria-selected": i.selectionManager.selectionMode === `none` ? void 0 : u,
		"aria-label": e[`aria-label`],
		"aria-labelledby": _,
		"aria-describedby": v
	}, x = i.collection.getItem(o);
	if (g) {
		let e = Number(x?.index);
		b[`aria-posinset`] = Number.isNaN(e) ? void 0 : e + 1, b[`aria-setsize`] = A(i.collection);
	}
	let S = c?.onAction ? () => c?.onAction?.(o) : void 0, w = X(i, o), { itemProps: T, isPressed: E, isFocused: D, hasAction: O, allowsSelection: k } = C({
		selectionManager: i.selectionManager,
		key: o,
		ref: a,
		shouldSelectOnPressUp: f,
		allowsDifferentPressOrigin: f && p,
		isVirtualized: g,
		shouldUseVirtualFocus: h,
		isDisabled: l,
		onAction: S || x?.props?.onAction ? r(x?.props?.onAction, S) : void 0,
		linkBehavior: c?.linkBehavior,
		UNSTABLE_itemBehavior: c?.UNSTABLE_itemBehavior,
		id: w
	}), { hoverProps: j } = t({
		isDisabled: l || !p,
		onHoverStart() {
			n() || (i.selectionManager.setFocused(!0), i.selectionManager.setFocusedKey(o));
		}
	}), M = s(x?.props);
	delete M.id;
	let ee = m(x?.props);
	return {
		optionProps: {
			...b,
			...d(M, T, j, ee),
			id: w
		},
		labelProps: { id: _ },
		descriptionProps: { id: v },
		isFocused: D,
		isFocusVisible: D && i.selectionManager.isFocused && n(),
		isSelected: u,
		isDisabled: l,
		isPressed: E,
		allowsSelection: k,
		hasAction: O
	};
}
function ce(e) {
	let { heading: t, "aria-label": n } = e, r = b();
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
	[e, t] = _(e, t, Z);
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
function $({ state: e, props: t, listBoxRef: n }) {
	[t, n] = _(t, n, ee);
	let { dragAndDropHooks: r, layout: i = `stack`, orientation: a = `vertical`, filter: c } = t, f = ae(e, c), { collection: p, selectionManager: m } = f, h = !!r?.useDraggableCollectionState, v = !!r?.useDroppableCollectionState, { direction: y } = x(), { disabledBehavior: b, disabledKeys: S } = m, C = k({
		usage: `search`,
		sensitivity: `base`
	}), { isVirtualized: E, layoutDelegate: O, dropTargetDelegate: A, CollectionRoot: j } = (0, H.useContext)(w), M = (0, H.useMemo)(() => t.keyboardDelegate || new D({
		collection: p,
		collator: C,
		ref: n,
		disabledKeys: S,
		disabledBehavior: b,
		layout: i,
		orientation: a,
		direction: y,
		layoutDelegate: O
	}), [
		p,
		C,
		n,
		b,
		S,
		a,
		y,
		t.keyboardDelegate,
		i,
		O
	]), { listBoxProps: re } = oe({
		...t,
		shouldSelectOnPressUp: h || t.shouldSelectOnPressUp,
		keyboardDelegate: M,
		isVirtualized: E
	}, f, n);
	(0, H.useRef)(h), (0, H.useRef)(v), (0, H.useEffect)(() => {}, [h, v]);
	let N, P, F, I = !1, L = null, R = (0, H.useRef)(null);
	if (h && r) {
		N = r.useDraggableCollectionState({
			collection: p,
			selectionManager: m,
			preview: r.renderDragPreview ? R : void 0
		}), r.useDraggableCollection({}, N, n);
		let e = r.DragPreview;
		L = r.renderDragPreview ? H.createElement(e, { ref: R }, r.renderDragPreview) : null;
	}
	if (v && r) {
		P = r.useDroppableCollectionState({
			collection: p,
			selectionManager: m
		});
		let e = r.dropTargetDelegate || A || new r.ListDropTargetDelegate(p, n, {
			orientation: a,
			layout: i,
			direction: y
		});
		F = r.useDroppableCollection({
			keyboardDelegate: M,
			dropTargetDelegate: e
		}, P, n), I = P.isDropTarget({ type: `root` });
	}
	let { focusProps: z, isFocused: B, isFocusVisible: V } = l(), G = f.collection.size === 0, J = {
		isDropTarget: I,
		isEmpty: G,
		isFocused: B,
		isFocusVisible: V,
		layout: t.layout || `stack`,
		orientation: a,
		state: f
	}, Y = o({
		...t,
		children: void 0,
		defaultClassName: `react-aria-ListBox`,
		values: J
	}), X = null;
	G && t.renderEmptyState && (X = H.createElement(`div`, {
		role: `option`,
		style: { display: `contents` }
	}, t.renderEmptyState(J)));
	let se = s(t, { global: !0 });
	return H.createElement(ne, null, H.createElement(u.div, {
		...d(se, Y, re, z, F?.collectionProps),
		ref: n,
		slot: t.slot || void 0,
		onScroll: t.onScroll,
		"data-drop-target": I || void 0,
		"data-empty": G || void 0,
		"data-focused": B || void 0,
		"data-focus-visible": V || void 0,
		"data-layout": t.layout || `stack`,
		"data-orientation": a
	}, H.createElement(g, { values: [
		[Z, t],
		[Q, f],
		[U, {
			dragAndDropHooks: r,
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
		collection: p,
		scrollRef: n,
		persistedKeys: q(m, r, P),
		renderDropIndicator: K(r, P)
	}))), X, L));
}
function de(e, t, n, r = `react-aria-ListBoxSection`) {
	let i = (0, H.useContext)(Q), { dragAndDropHooks: a, dropState: c } = (0, H.useContext)(U), { CollectionBranch: l } = (0, H.useContext)(w), [f, p] = h(), { headingProps: m, groupProps: g } = ce({
		heading: p,
		"aria-label": e[`aria-label`] ?? void 0
	}), _ = o({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		values: void 0
	}), v = s(e, { global: !0 });
	return delete v.id, H.createElement(u.section, {
		...d(v, _, g),
		ref: t
	}, H.createElement(O.Provider, { value: {
		...m,
		ref: f
	} }, H.createElement(l, {
		collection: i.collection,
		parent: n,
		renderDropIndicator: K(a, c)
	})));
}
var fe = R(z, de), pe = B(P, function(e, n, r) {
	let i = p(n), l = (0, H.useContext)(Q), { dragAndDropHooks: m, dragState: h, dropState: _ } = (0, H.useContext)(U), v = h && !(h.isDisabled || h.selectionManager.isDisabled(r.key)), { optionProps: y, labelProps: b, descriptionProps: x, ...S } = se({
		key: r.key,
		"aria-label": e?.[`aria-label`]
	}, l, i), { hoverProps: C, isHovered: w } = t({
		isDisabled: !S.allowsSelection && !S.hasAction && !v,
		onHoverStart: r.props.onHoverStart,
		onHoverChange: r.props.onHoverChange,
		onHoverEnd: r.props.onHoverEnd
	}), { keyboardProps: T } = f(e), { focusProps: E } = a(e), D = null;
	h && m && (D = m.useDraggableItem({
		key: r.key,
		hasAction: S.hasAction
	}, h));
	let O = null;
	_ && m && (O = m.useDroppableItem({ target: {
		type: `item`,
		key: r.key,
		dropPosition: `on`
	} }, _, i));
	let k = h && h.isDragging(r.key), A = o({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: `react-aria-ListBoxItem`,
		values: {
			...S,
			isHovered: w,
			selectionMode: l.selectionManager.selectionMode,
			selectionBehavior: l.selectionManager.selectionBehavior,
			allowsDragging: !!h,
			isDragging: k,
			isDropTarget: O?.isDropTarget
		}
	});
	(0, H.useEffect)(() => {
		r.textValue;
	}, [r.textValue]);
	let j = e.href ? u.a : u.div, M = s(e, { global: !0 });
	return delete M.id, delete M.onClick, e.href && y.tabIndex == null && (y.tabIndex = -1), H.createElement(j, {
		...d(M, A, y, C, T, E, D?.dragProps, O?.dropProps),
		ref: i,
		"data-allows-dragging": !!h || void 0,
		"data-selected": S.isSelected || void 0,
		"data-disabled": S.isDisabled || void 0,
		"data-hovered": w || void 0,
		"data-focused": S.isFocused || void 0,
		"data-focus-visible": S.isFocusVisible || void 0,
		"data-pressed": S.isPressed || void 0,
		"data-dragging": k || void 0,
		"data-drop-target": O?.isDropTarget || void 0,
		"data-selection-mode": l.selectionManager.selectionMode === `none` ? void 0 : l.selectionManager.selectionMode
	}, H.createElement(g, { values: [[N, { slots: {
		[c]: b,
		label: b,
		description: x
	} }], [re, { isSelected: S.isSelected }]] }, A.children));
});
function me(e, t) {
	t = p(t);
	let { dragAndDropHooks: n, dropState: r } = (0, H.useContext)(U), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : H.createElement(ge, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function he(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = o({
		...i,
		defaultClassName: `react-aria-DropIndicator`,
		values: { isDropTarget: r }
	});
	return H.createElement(H.Fragment, null, H.createElement(u.div, {
		...n,
		...a,
		role: `option`,
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var ge = (0, H.forwardRef)(he);
B(I, function(e, t, n) {
	let r = (0, H.useContext)(Q), { isLoading: i, onLoadMore: a, scrollOffset: c, ...l } = e, f = (0, H.useRef)(null), p = (0, H.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: f,
		scrollOffset: c
	}), [
		a,
		c,
		r?.collection
	]);
	M(p, f);
	let m = o({
		...l,
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
		ref: f,
		style: {
			position: `absolute`,
			height: 1,
			width: 1
		}
	})), i && m.children && H.createElement(H.Fragment, null, H.createElement(u.div, {
		...d(s(e, { global: !0 }), { tabIndex: -1 }),
		...m,
		role: `option`,
		ref: t
	}, m.children)));
});
export { fe as a, G as c, q as d, W as f, pe as i, K as l, Q as n, J as o, Z as r, X as s, le as t, U as u };
